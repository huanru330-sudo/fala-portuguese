const DEFAULT_VOICE = 'pt-BR-FranciscaNeural';
const DEFAULT_REGION = 'eastasia';

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function normalizeSpeechText(value: unknown) {
  if (typeof value !== 'string') return '';
  return value.trim().replace(/\s+/g, ' ').slice(0, 600);
}

export async function POST(request: Request) {
  const { text, rate } = await request.json().catch(() => ({ text: '', rate: undefined }));
  const speechText = normalizeSpeechText(text);

  if (!speechText) {
    return Response.json({ error: 'Missing text' }, { status: 400 });
  }

  const key = process.env.AZURE_SPEECH_KEY;
  const region = process.env.AZURE_SPEECH_REGION || DEFAULT_REGION;
  const voice = process.env.AZURE_SPEECH_VOICE || DEFAULT_VOICE;
  const speakingRate = typeof rate === 'string' && /^[-+]?\d+%$/.test(rate) ? rate : '-8%';

  if (!key) {
    return Response.json({ error: 'Azure Speech is not configured' }, { status: 503 });
  }

  const ssml = [
    '<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="pt-BR">',
    `<voice name="${escapeXml(voice)}">`,
    `<prosody rate="${speakingRate}">${escapeXml(speechText)}</prosody>`,
    '</voice>',
    '</speak>',
  ].join('');

  const azureResponse = await fetch(`https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`, {
    method: 'POST',
    headers: {
      'Ocp-Apim-Subscription-Key': key,
      'Content-Type': 'application/ssml+xml',
      'X-Microsoft-OutputFormat': 'audio-24khz-48kbitrate-mono-mp3',
      'User-Agent': 'fala-portugues',
    },
    body: ssml,
  });

  if (!azureResponse.ok) {
    return Response.json(
      { error: 'Azure Speech request failed' },
      { status: azureResponse.status },
    );
  }

  return new Response(await azureResponse.arrayBuffer(), {
    headers: {
      'Content-Type': 'audio/mpeg',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
