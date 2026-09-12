import { env } from 'cloudflare:workers';

type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

const cefrLevels: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const MAX_JSON_BYTES = 180_000;

type SignedInUser = {
  id: string;
  email: string;
  name: string;
};

type StoredStateRow = {
  selected_level: string;
  learning_progress_json: string;
  vocab_loop_json: string;
};

function decodeFullName(request: Request) {
  const encoded = request.headers.get('oai-authenticated-user-full-name') || '';
  if (!encoded) return '';
  if (request.headers.get('oai-authenticated-user-full-name-encoding') !== 'percent-encoded-utf-8') return '';

  try {
    return decodeURIComponent(encoded);
  } catch {
    return '';
  }
}

function getSignedInUser(request: Request): SignedInUser | null {
  const id = request.headers.get('oai-authenticated-user-id') || '';
  if (!id) return null;

  const email = request.headers.get('oai-authenticated-user-email') || '';
  return { id, email, name: decodeFullName(request) || email };
}

function getDb() {
  if (!env.DB) throw new Error('D1 database is not configured');
  return env.DB;
}

function safeJsonParse(value: string) {
  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function compactJson(value: unknown) {
  const text = JSON.stringify(value && typeof value === 'object' ? value : {});
  if (text.length > MAX_JSON_BYTES) throw new Error('State payload is too large');
  return text;
}

function normalizeLevel(value: unknown): CEFRLevel {
  return cefrLevels.includes(value as CEFRLevel) ? value as CEFRLevel : 'A1';
}

async function upsertProfile(db: D1Database, user: SignedInUser) {
  await db.prepare(`
    INSERT INTO user_profiles (user_id, email, full_name, updated_at)
    VALUES (?, ?, ?, CURRENT_TIMESTAMP)
    ON CONFLICT(user_id) DO UPDATE SET
      email = excluded.email,
      full_name = excluded.full_name,
      updated_at = CURRENT_TIMESTAMP
  `).bind(user.id, user.email, user.name).run();
}

export async function GET(request: Request) {
  const user = getSignedInUser(request);
  if (!user) {
    return Response.json({ authenticated: false });
  }

  const db = getDb();
  await upsertProfile(db, user);

  const row = await db.prepare(`
    SELECT selected_level, learning_progress_json, vocab_loop_json
    FROM user_learning_states
    WHERE user_id = ?
  `).bind(user.id).first<StoredStateRow>();

  return Response.json({
    authenticated: true,
    user,
    state: {
      selectedLevel: normalizeLevel(row?.selected_level),
      learningProgress: safeJsonParse(row?.learning_progress_json || '{}'),
      vocabLoop: safeJsonParse(row?.vocab_loop_json || '{}'),
    },
  });
}

export async function POST(request: Request) {
  const user = getSignedInUser(request);
  if (!user) {
    return Response.json({ error: 'Sign in required' }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== 'object') {
    return Response.json({ error: 'Invalid state payload' }, { status: 400 });
  }

  const selectedLevel = normalizeLevel((body as { selectedLevel?: unknown }).selectedLevel);
  const learningProgressJson = compactJson((body as { learningProgress?: unknown }).learningProgress);
  const vocabLoopJson = compactJson((body as { vocabLoop?: unknown }).vocabLoop);

  const db = getDb();
  await upsertProfile(db, user);
  await db.prepare(`
    INSERT INTO user_learning_states (user_id, selected_level, learning_progress_json, vocab_loop_json, updated_at)
    VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)
    ON CONFLICT(user_id) DO UPDATE SET
      selected_level = excluded.selected_level,
      learning_progress_json = excluded.learning_progress_json,
      vocab_loop_json = excluded.vocab_loop_json,
      updated_at = CURRENT_TIMESTAMP
  `).bind(user.id, selectedLevel, learningProgressJson, vocabLoopJson).run();

  return Response.json({ ok: true });
}
