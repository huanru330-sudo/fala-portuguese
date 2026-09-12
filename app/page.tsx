'use client';

import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { getVocabularyPractice, vocabularyDecks } from './vocabulary';
import type { VocabularyDeck } from './vocabulary';

type Screen = 'practice' | 'review';
type Language = 'zh' | 'pt';

const text = {
  zh: {
    streak: '连续练习', days: '🔥 4 天', goal: '本周目标', sessions: '3 / 5 次', today: '今日推荐', cafe: '咖啡馆点餐', level: 'A1 · 约 5 分钟', mission: '用葡语完成一杯咖啡的点单', missionMeta: '5 个小任务 · AI 店员', start: '开始练习 →', more: '更多场景', all: '查看全部', airport: '机场问路', shopping: '商店购物', min6: 'A1 · 6分钟', min7: 'A2 · 7分钟',
    prep: '练习准备', yourMission: '你的任务', task: '向 AI 店员点一杯小杯拿铁，询问价格并使用银行卡付款。', stepsTitle: '完成这 5 步', steps: ['向店员打招呼', '说出想要的饮品', '选择杯型和牛奶', '询问价格', '选择付款方式'], phrases: '可以偷看的表达', enter: '进入咖啡馆', clerk: 'Marina · AI 店员', location: '巴西圣保罗 · 自然语速', again: '↻ 再听一次', said: '你刚才说', listening: '正在听你说葡语… 再按一次完成', speak: '按住你的节奏，自然说出来', finish: '完成对话，查看报告 →', hint: '需要提示',
    report: '练习报告', complete: '任务完成！', completeText: '你成功完成了咖啡点单，关键信息都表达清楚。', metrics: ['任务', '用时', '句子'], focus: '本次重点', improve: '只改这 3 个地方', gentle: '不一次改太多', practice: '练习这些错句', home: '返回首页', feedback: [
      ['动词变位', 'Eu querer um café.', 'Eu quero um café.', '主语是 eu，直陈式现在时使用 quero。'],
      ['冠词', 'Quero café pequeno.', 'Quero um café pequeno.', '点一杯咖啡时，加上不定冠词 um 更自然。'],
      ['自然表达', 'Eu pago cartão.', 'Vou pagar com cartão.', '付款方式前通常使用介词 com。'],
    ],
    review: '错句复习', reviewToday: '今日复习', natural: '再说一次，就会更自然', reviewTip: '先听示范，再用自己的节奏说出来。', article: '冠词', youSaid: '你说', recommended: '建议说', translation: '我想要一杯小杯咖啡。', playing: '正在播放标准发音…', listen: '听标准发音', turn: '轮到你了', recordTip: '点击麦克风，完整说出建议句子', mastered: '✓ 已经掌握', mark: '标记为已经掌握', nav: ['首页', '练习', '复习', '我的'], back: '返回', navigation: '主要导航', profile: '个人资料', language: '切换到全葡语', startRec: '开始录音', stopRec: '结束录音',
  },
  pt: {
    streak: 'Sequência', days: '🔥 4 dias', goal: 'Meta da semana', sessions: '3 / 5 sessões', today: 'RECOMENDADO HOJE', cafe: 'Pedido na cafeteria', level: 'A1 · cerca de 5 min', mission: 'Faça um pedido de café inteiramente em português', missionMeta: '5 etapas · Atendente de IA', start: 'Começar →', more: 'Mais situações', all: 'Ver todas', airport: 'Pedir informações no aeroporto', shopping: 'Fazer compras', min6: 'A1 · 6 min', min7: 'A2 · 7 min',
    prep: 'Preparação', yourMission: 'SUA MISSÃO', task: 'Peça um café com leite pequeno, pergunte o preço e pague com cartão.', stepsTitle: 'Complete estas 5 etapas', steps: ['Cumprimente a atendente', 'Diga qual bebida deseja', 'Escolha o tamanho e o leite', 'Pergunte o preço', 'Escolha a forma de pagamento'], phrases: 'Expressões úteis', enter: 'Entrar na cafeteria', clerk: 'Marina · Atendente de IA', location: 'São Paulo, Brasil · Velocidade natural', again: '↻ Ouvir novamente', said: 'Você acabou de dizer', listening: 'Estou ouvindo… toque novamente para terminar', speak: 'Fale naturalmente, no seu ritmo', finish: 'Finalizar e ver o relatório →', hint: 'Preciso de uma dica',
    report: 'Relatório da prática', complete: 'Missão concluída!', completeText: 'Você concluiu o pedido e comunicou todas as informações importantes.', metrics: ['Etapas', 'Tempo', 'Frases'], focus: 'FOCO DE HOJE', improve: 'Melhore estes 3 pontos', gentle: 'Um passo de cada vez', practice: 'Praticar estas frases', home: 'Voltar ao início', feedback: [
      ['Conjugação', 'Eu querer um café.', 'Eu quero um café.', 'Com o pronome eu, usamos quero no presente do indicativo.'],
      ['Artigo', 'Quero café pequeno.', 'Quero um café pequeno.', 'Ao pedir uma unidade, o artigo um deixa a frase mais natural.'],
      ['Expressão natural', 'Eu pago cartão.', 'Vou pagar com cartão.', 'Para indicar a forma de pagamento, normalmente usamos a preposição com.'],
    ],
    review: 'Revisão de frases', reviewToday: 'REVISÃO DE HOJE', natural: 'Repita e fale com mais naturalidade', reviewTip: 'Ouça o modelo e depois repita no seu próprio ritmo.', article: 'Artigo', youSaid: 'Você disse', recommended: 'Forma recomendada', translation: 'Pedido de um café pequeno.', playing: 'Reproduzindo a pronúncia…', listen: 'Ouvir a pronúncia', turn: 'Agora é a sua vez', recordTip: 'Toque no microfone e diga a frase completa', mastered: '✓ Já aprendi', mark: 'Marcar como aprendido', nav: ['Início', 'Prática', 'Revisão', 'Perfil'], back: 'Voltar', navigation: 'Navegação principal', profile: 'Perfil', language: 'Mudar para chinês', startRec: 'Começar gravação', stopRec: 'Terminar gravação',
  },
};

type Copy = typeof text.zh;

let activeAudio: HTMLAudioElement | null = null;

async function playPortugueseAudio(textToSpeak: string, selectedLevel: CEFRLevel = 'A1') {
  const rate = ['A1','A2'].includes(selectedLevel) ? '-12%' : ['B1','B2'].includes(selectedLevel) ? '-5%' : '+2%';

  try {
    activeAudio?.pause();
    if (activeAudio?.src.startsWith('blob:')) URL.revokeObjectURL(activeAudio.src);

    const response = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: textToSpeak, rate }),
    });

    if (!response.ok) throw new Error('TTS unavailable');

    const audioUrl = URL.createObjectURL(await response.blob());
    activeAudio = new Audio(audioUrl);
    activeAudio.addEventListener('ended', () => URL.revokeObjectURL(audioUrl), { once: true });
    await activeAudio.play();
  } catch {
    window.speechSynthesis?.cancel();
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'pt-BR';
    utterance.rate = ['A1','A2'].includes(selectedLevel) ? .82 : ['B1','B2'].includes(selectedLevel) ? .94 : 1.04;
    window.speechSynthesis?.speak(utterance);
  }
}

export default function Home() {
  const [language, setLanguage] = useState<Language>('zh');
  const c = text[language];

  useEffect(() => {
    const saved = localStorage.getItem('fala-language');
    if (saved === 'zh' || saved === 'pt') setLanguage(saved);
  }, []);

  function toggleLanguage() {
    const next = language === 'zh' ? 'pt' : 'zh';
    setLanguage(next);
    localStorage.setItem('fala-language', next);
  }

  function goHome() {}

  return <main className="azulejo-theme min-h-screen bg-[#f4f1e8] px-4 py-8 text-[#18352f] sm:py-12" lang={language === 'pt' ? 'pt-BR' : 'zh-CN'}>
    <section className="phone-shell mx-auto min-h-[790px] w-full max-w-[420px] overflow-hidden rounded-[36px] border border-[#18352f]/10 bg-[#fffdf7] shadow-[0_28px_80px_rgba(24,53,47,0.16)]">
      <div className="azulejo-corners" aria-hidden="true"><span className="corner-tl">✤</span><span className="corner-tr">✤</span><span className="corner-bl">✤</span><span className="corner-br">✤</span></div>
      <button onClick={toggleLanguage} className="language-toggle" aria-label={c.language}><span className={language === 'zh' ? 'active' : ''}>中</span><span className={language === 'pt' ? 'active' : ''}>PT</span></button>
      <PracticeHub c={c} language={language} onHome={goHome} />
    </section>
  </main>;
}

function ReviewScreen({ c, playing, mastered, onPlay, onMaster, onHome, onPractice }: { c: Copy; playing: boolean; mastered: boolean; onPlay: () => void; onMaster: () => void; onHome: () => void; onPractice: () => void }) {
  const chinese = c === text.zh;
  return <div className="screen-enter min-h-[790px] px-6 pb-28 pt-7"><TopBar c={c} title={c.review} onBack={onHome} action="1 / 3"/><section className="mt-7 text-center"><p className="eyebrow">{c.reviewToday}</p><h1 className="mt-2 text-2xl font-black">{c.natural}</h1><p className="mt-2 text-sm text-[#18352f]/55">{c.reviewTip}</p></section><article className="mt-8 rounded-[28px] border border-[#18352f]/10 bg-white p-6"><span className="rounded-full bg-[#f8e9df] px-3 py-1 text-xs font-black text-[#b54e2d]">{chinese?'性数配合':'Concordância'}</span><div className="mt-6 border-b border-[#18352f]/10 pb-5"><p className="text-xs font-bold text-[#18352f]/40">{c.youSaid}</p><p className="mt-1 text-lg text-[#18352f]/45 line-through">As cidade são bonito.</p></div><div className="pt-5"><p className="text-xs font-bold text-[#2f6b57]">{c.recommended}</p><p className="mt-1 text-2xl font-black leading-relaxed">As <span className="rounded bg-[#e8f1ec] px-1 text-[#2f6b57]">cidades</span> são <span className="rounded bg-[#e8f1ec] px-1 text-[#2f6b57]">bonitas</span>.</p><p className="mt-2 text-sm text-[#18352f]/55">{chinese?'这些城市很美。':'Estas cidades são bonitas.'}</p></div><button onClick={onPlay} className={`mt-6 flex w-full items-center justify-center gap-3 rounded-2xl py-4 text-sm font-black ${playing?'bg-[#f2ca88]':'bg-[#18352f] text-white'}`}><span>{playing?'◼':'▶'}</span>{playing?c.playing:c.listen}</button></article><section className="mt-6 rounded-[24px] bg-[#e8f1ec] p-5 text-center"><p className="text-sm font-bold">{c.turn}</p><p className="mt-1 text-xs text-[#18352f]/50">{c.recordTip}</p><button className="record-button small mx-auto mt-4" aria-label={c.startRec}><span>●</span></button></section><button onClick={onMaster} className={`mt-6 w-full rounded-2xl border py-4 text-sm font-black transition ${mastered?'border-[#2f6b57] bg-[#2f6b57] text-white':'border-[#18352f]/15 bg-white'}`}>{mastered?c.mastered:c.mark}</button><Nav c={c} active="review" onPractice={onPractice}/></div>;
}

type PracticeMode = 'level-select' | 'hub' | 'vocab' | 'verbs' | 'gender' | 'skills' | 'listening' | 'speaking' | 'reading' | 'writing' | 'profile';
type VocabPhase = 'learn' | 'quiz' | 'review' | 'done';
type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
type VocabLoopStats = {
  cycle: number;
  sessions: number;
  completedTopics: number[];
  mistakeWords: string[];
  lastCompletedDate: string;
};
type DailyLearningRecord = { completedStages: number; completed: boolean };
type LevelLearningProgress = { lesson: number; stage: number; startedOn: string; history: Record<string, DailyLearningRecord> };
type LearningProgress = Partial<Record<CEFRLevel, LevelLearningProgress>>;

function getLocalDayKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const defaultVocabLoopStats: VocabLoopStats = {
  cycle: 1,
  sessions: 0,
  completedTopics: [],
  mistakeWords: [],
  lastCompletedDate: '',
};

const cefrLevels: CEFRLevel[] = ['A1','A2','B1','B2','C1','C2'];
const cefrInfo: Record<CEFRLevel, { zh: string; pt: string }> = {
  A1: { zh: '基础生存表达 · 熟悉词汇和短句', pt: 'Sobrevivência · palavras e frases curtas' },
  A2: { zh: '日常沟通 · 简单叙述和具体信息', pt: 'Rotina · descrições simples e concretas' },
  B1: { zh: '独立表达 · 经历、计划和个人观点', pt: 'Autonomia · experiências, planos e opiniões' },
  B2: { zh: '流利交流 · 论证、比较和抽象话题', pt: 'Fluência · argumentos e temas abstratos' },
  C1: { zh: '高级运用 · 正式表达和复杂结构', pt: 'Avançado · registro formal e estruturas complexas' },
  C2: { zh: '精通表达 · 语义细节、语体与综合分析', pt: 'Domínio · nuance, registro e síntese crítica' },
};

const cefrExercises: Record<CEFRLevel, {
  listening: { text: string; questionZh: string; questionPt: string; options: string[]; answer: number };
  speaking: { promptZh: string; promptPt: string; cues: string[]; model: string };
  reading: { text: string; questionZh: string; questionPt: string; options: string[]; answer: number };
  writing: { promptZh: string; promptPt: string; minWords: number; hints: string[] };
}> = {
  A1: {
    listening: { text: 'Bom dia. Eu quero um café pequeno com leite, por favor.', questionZh: '说话者想点什么？', questionPt: 'O que a pessoa quer pedir?', options: ['Um café pequeno com leite','Um chá grande','Um suco sem gelo'], answer: 0 },
    speaking: { promptZh: '向店员点一杯饮料，并说“请”。', promptPt: 'Peça uma bebida e use por favor.', cues: ['Eu quero…','Um/uma…','por favor'], model: 'Bom dia. Eu quero um café pequeno, por favor.' },
    reading: { text: 'CAFÉ CENTRAL — Aberto de segunda a sexta, das 8h às 18h.', questionZh: '咖啡馆周六营业吗？', questionPt: 'O café abre no sábado?', options: ['Sim','Não','Só à tarde'], answer: 1 },
    writing: { promptZh: '用葡语写 3 句话介绍你的姓名、国家和喜欢的事物。', promptPt: 'Escreva três frases sobre seu nome, país e algo de que gosta.', minWords: 12, hints: ['Meu nome é…','Sou da…','Gosto de…'] },
  },
  A2: {
    listening: { text: 'A consulta estava marcada para as duas, mas foi adiada para as três e meia.', questionZh: '预约改到了几点？', questionPt: 'Para que horas a consulta foi adiada?', options: ['Duas horas','Três horas','Três e meia'], answer: 2 },
    speaking: { promptZh: '描述你昨天的日常安排，至少使用三个过去时动词。', promptPt: 'Descreva sua rotina de ontem usando pelo menos três verbos no passado.', cues: ['Ontem…','Depois…','À noite…'], model: 'Ontem acordei cedo, trabalhei até as cinco e depois jantei com uma amiga.' },
    reading: { text: 'Olá, Ana! Vou chegar vinte minutos atrasado porque o ônibus demorou. Podemos nos encontrar na entrada do cinema?', questionZh: '对方为什么会迟到？', questionPt: 'Por que a pessoa vai se atrasar?', options: ['O filme mudou','O ônibus demorou','Ela perdeu o ingresso'], answer: 1 },
    writing: { promptZh: '给朋友写一条信息，解释你为什么迟到，并提出新的见面时间。', promptPt: 'Escreva uma mensagem explicando um atraso e propondo um novo horário.', minWords: 25, hints: ['Desculpa…','porque…','Podemos…?'] },
  },
  B1: {
    listening: { text: 'Quando comecei a trabalhar de casa, achei difícil organizar o tempo. Depois criei uma rotina e passei a ser mais produtivo.', questionZh: '什么帮助说话者提高了效率？', questionPt: 'O que ajudou a pessoa a ser mais produtiva?', options: ['Mudar de emprego','Criar uma rotina','Trabalhar menos horas'], answer: 1 },
    speaking: { promptZh: '讲述一次旅行中出现的问题，以及你如何解决。', promptPt: 'Conte um problema ocorrido em uma viagem e explique como o resolveu.', cues: ['No início…','Por causa de…','No fim…'], model: 'Durante uma viagem, perdi o último trem. Procurei informações e consegui dividir um táxi com outros passageiros.' },
    reading: { text: 'Muitas pessoas preferem estudar em grupo porque podem trocar ideias. Outras aprendem melhor sozinhas, pois precisam de silêncio e autonomia.', questionZh: '文章的主要观点是什么？', questionPt: 'Qual é a ideia principal?', options: ['Só o estudo em grupo funciona','Cada pessoa pode preferir uma forma de estudar','Estudar sozinho é sempre mais rápido'], answer: 1 },
    writing: { promptZh: '说明你更喜欢独自学习还是小组学习，并给出两个理由。', promptPt: 'Explique se prefere estudar sozinho ou em grupo e dê dois motivos.', minWords: 55, hints: ['Na minha opinião…','Além disso…','Por isso…'] },
  },
  B2: {
    listening: { text: 'Embora o trabalho remoto ofereça flexibilidade, algumas equipes relatam dificuldades para manter a comunicação espontânea e o sentimento de pertencimento.', questionZh: '说话者强调了远程工作的什么矛盾？', questionPt: 'Que contraste é destacado sobre o trabalho remoto?', options: ['Flexibilidade e dificuldade de conexão','Salário e produtividade','Tecnologia e custos'], answer: 0 },
    speaking: { promptZh: '讨论远程办公的优缺点，并提出一种平衡方案。', promptPt: 'Discuta vantagens e desvantagens do trabalho remoto e proponha um equilíbrio.', cues: ['Por um lado…','Em contrapartida…','Uma solução seria…'], model: 'Por um lado, o trabalho remoto aumenta a flexibilidade. Em contrapartida, pode enfraquecer a colaboração. Um modelo híbrido bem planejado seria uma solução.' },
    reading: { text: 'A adoção de bicicletas compartilhadas reduziu trajetos curtos de carro. No entanto, sem ciclovias seguras, a iniciativa tende a beneficiar apenas áreas centrais.', questionZh: '作者认为项目的主要限制是什么？', questionPt: 'Qual é a principal limitação do projeto?', options: ['O preço das bicicletas','A falta de infraestrutura segura','A duração dos trajetos'], answer: 1 },
    writing: { promptZh: '就城市是否应限制市中心汽车通行写一篇短论述。', promptPt: 'Escreva um texto argumentativo sobre limitar carros no centro das cidades.', minWords: 90, hints: ['É preciso considerar…','No entanto…','Em síntese…'] },
  },
  C1: {
    listening: { text: 'A medida foi apresentada como provisória; ainda assim, especialistas receiam que, uma vez normalizada, ela se converta silenciosamente em política permanente.', questionZh: '专家担心的隐含风险是什么？', questionPt: 'Qual risco implícito preocupa os especialistas?', options: ['A medida ser cancelada cedo','Uma solução temporária tornar-se permanente','A política ser muito cara'], answer: 1 },
    speaking: { promptZh: '以正式语体分析一项公共政策的意外后果。', promptPt: 'Analise, em registro formal, consequências imprevistas de uma política pública.', cues: ['Cumpre observar…','À medida que…','Daí a necessidade de…'], model: 'Cumpre observar que políticas bem-intencionadas podem gerar incentivos inesperados. Daí a necessidade de avaliação contínua e mecanismos de revisão.' },
    reading: { text: 'A abundância de informação não garante uma sociedade mais bem informada. Sem critérios de verificação, o excesso pode diluir a atenção e favorecer conteúdos emocionalmente apelativos.', questionZh: '作者质疑了哪一种假设？', questionPt: 'Que pressuposto o autor questiona?', options: ['Mais informação produz automaticamente mais conhecimento','Conteúdo emocional nunca convence','Verificar fontes é impossível'], answer: 0 },
    writing: { promptZh: '分析信息过载如何影响公共讨论，并提出应对原则。', promptPt: 'Analise como a sobrecarga de informação afeta o debate público e proponha princípios de resposta.', minWords: 140, hints: ['Não se trata apenas de…','Sob essa perspectiva…','Convém, portanto…'] },
  },
  C2: {
    listening: { text: 'A aparente neutralidade do discurso não elimina seu posicionamento; muitas vezes, apenas o transfere para escolhas lexicais e pressupostos que passam despercebidos.', questionZh: '这句话如何重新定义“中立”？', questionPt: 'Como a frase redefine a neutralidade?', options: ['Como ausência total de posição','Como posição ocultada por escolhas discursivas','Como uso exclusivo de fatos'], answer: 1 },
    speaking: { promptZh: '比较两种相反观点，指出各自隐含前提，并形成有细微差别的综合判断。', promptPt: 'Compare posições opostas, explicite pressupostos e formule uma síntese matizada.', cues: ['À primeira vista…','Tal leitura pressupõe…','Sem desconsiderar…'], model: 'À primeira vista, as posições parecem inconciliáveis. Contudo, ambas pressupõem critérios distintos de responsabilidade; reconhecê-los permite uma síntese menos simplificadora.' },
    reading: { text: 'Ao converter toda experiência em dado mensurável, corre-se o risco de confundir precisão com compreensão. O que escapa à métrica não é necessariamente irrelevante; pode ser justamente aquilo que lhe dá sentido.', questionZh: '作者区分了哪两个概念？', questionPt: 'Que distinção central o texto estabelece?', options: ['速度与效率','精确测量与真正理解','经验与记忆'], answer: 1 },
    writing: { promptZh: '围绕“可测量的不一定最重要”写一篇有让步、反论点和综合结论的短文。', promptPt: 'Discuta “o que é mensurável nem sempre é o mais importante”, com concessão, contraponto e síntese.', minWords: 190, hints: ['Seria simplista afirmar…','Ainda que se reconheça…','Em última análise…'] },
  },
};

const cefrExplanations: Record<CEFRLevel, {
  listening: { zh: string; pt: string; key: string };
  reading: { zh: string; pt: string; key: string };
  speaking: { zh: string; pt: string };
  writingZh: string[];
  writingPt: string[];
}> = {
  A1: {
    listening: { key: 'um café pequeno com leite', zh: '定位短语直接给出了饮品、尺寸和是否加奶。chá 和 suco 在原文中都没有出现，属于干扰项。', pt: 'A expressão informa diretamente a bebida, o tamanho e o leite. Chá e suco não aparecem no áudio.' },
    reading: { key: 'de segunda a sexta', zh: '这表示“周一到周五”，因此不包含 sábado（周六）。时间 8h–18h 只说明工作日营业时间。', pt: 'De segunda a sexta exclui o sábado. O horário das 8h às 18h vale apenas nesses dias.' },
    speaking: { zh: '参考表达由“问候＋Eu quero＋饮品＋por favor”组成。A1 重点是信息完整，不需要复杂句。', pt: 'O modelo segue saudação + Eu quero + bebida + por favor. No A1, priorize clareza e informação completa.' },
    writingZh: ['是否写出姓名、国家和喜好三项信息', '是否使用 Meu nome é / Sou de / Gosto de 等基础结构', '名词前的冠词及形容词性数是否一致'],
    writingPt: ['Incluiu nome, país e preferência', 'Usou estruturas básicas como Meu nome é / Sou de / Gosto de', 'Revisou artigos e concordância simples'],
  },
  A2: {
    listening: { key: 'foi adiada para as três e meia', zh: 'adiar 表示“推迟”。原定两点不是最终时间；para 后面的 três e meia 才是变更后的预约时间。', pt: 'Adiar significa passar para mais tarde. Duas era o horário original; três e meia é o novo horário.' },
    reading: { key: 'porque o ônibus demorou', zh: 'porque 明确引出迟到原因：公交车耽搁了。cinema 只是见面地点，ingresso 在原文中没有出现。', pt: 'Porque introduz a causa do atraso: o ônibus demorou. Cinema é apenas o local; ingresso não aparece.' },
    speaking: { zh: '参考表达按时间顺序使用 acordei、trabalhei、jantei 三个简单过去时，并用 depois 连接事件。', pt: 'O modelo organiza os fatos em ordem e usa acordei, trabalhei e jantei no pretérito perfeito, ligados por depois.' },
    writingZh: ['是否说明迟到原因，而不只是道歉', '是否提出具体的新时间', '是否正确使用 porque、podemos 和时间表达'],
    writingPt: ['Explicou a causa do atraso', 'Propôs um horário concreto', 'Revisou porque, podemos e as horas'],
  },
  B1: {
    listening: { key: 'criei uma rotina e passei a ser mais produtivo', zh: '效率提升发生在建立规律之后。trabalhar de casa 是背景，真正的解决办法是 criar uma rotina。', pt: 'A produtividade melhorou depois da criação de uma rotina. Trabalhar de casa é o contexto, não a solução.' },
    reading: { key: 'Muitas pessoas… Outras…', zh: '作者并列了两种有效学习方式，没有宣布唯一正确答案。核心是学习偏好因人而异。', pt: 'O texto apresenta duas formas válidas e não declara uma única melhor. A preferência depende da pessoa.' },
    speaking: { zh: '参考答案包含背景、问题、采取的行动和结果。B1 应能用过去时连贯叙事，并用 consegui 表达解决结果。', pt: 'O modelo inclui contexto, problema, ação e resultado. No B1, conecte a narrativa no passado e expresse a solução.' },
    writingZh: ['开头是否明确表明个人选择', '是否给出两个展开过的理由或例子', '是否使用 além disso、por isso 等连接词组织段落'],
    writingPt: ['Apresentou uma preferência clara', 'Desenvolveu dois motivos ou exemplos', 'Usou conectores como além disso e por isso'],
  },
  B2: {
    listening: { key: 'Embora… flexibilidade / dificuldades… comunicação', zh: 'embora 引出让步：远程办公有灵活性；主句转向限制——自发沟通和归属感更难维持。', pt: 'Embora introduz a concessão: há flexibilidade. O contraste está na dificuldade de comunicação e pertencimento.' },
    reading: { key: 'sem ciclovias seguras', zh: '作者先承认共享单车减少短途开车，再用 no entanto 指出限制。转折后的“缺乏安全自行车道”是答案依据。', pt: 'O texto reconhece o benefício e, após no entanto, identifica a falta de ciclovias seguras como limitação.' },
    speaking: { zh: '参考表达使用 por um lado / em contrapartida 建立平衡论证，再用条件式 seria 提出不过度绝对化的方案。', pt: 'O modelo equilibra argumentos com por um lado / em contrapartida e usa seria para propor uma solução ponderada.' },
    writingZh: ['是否同时处理支持与反对理由', '是否用事实、后果或例子展开论点', '结论是否回应题目并避免简单重复'],
    writingPt: ['Tratou argumentos favoráveis e contrários', 'Desenvolveu efeitos ou exemplos', 'Concluiu respondendo ao tema sem mera repetição'],
  },
  C1: {
    listening: { key: 'provisória… se converta… em política permanente', zh: '风险不是措施立即失败，而是“临时措施”被正常化后悄然永久化。ainda assim 标记了表面说法与深层担忧的反差。', pt: 'O risco não é o fracasso imediato, mas a normalização de algo provisório até se tornar permanente. Ainda assim marca o contraste.' },
    reading: { key: 'A abundância de informação não garante…', zh: '作者否定“信息数量自动带来更好认知”的假设，并用缺少验证标准、注意力被稀释解释原因。', pt: 'O autor rejeita a ideia de que quantidade produz conhecimento automaticamente e explica isso pela falta de critérios e dispersão da atenção.' },
    speaking: { zh: '参考表达使用正式框架 Cumpre observar… / Daí a necessidade…，先提出风险，再推导治理建议。C1 要求语体稳定且逻辑显性。', pt: 'O modelo usa um enquadramento formal, apresenta o risco e deriva uma recomendação. No C1, mantenha registro e lógica explícitos.' },
    writingZh: ['是否提出清晰中心论点并界定“信息过载”', '段落之间是否体现因果、让步与推论关系', '是否使用正式而准确的词汇，避免口语化堆砌'],
    writingPt: ['Definiu o problema e uma tese clara', 'Articulou causa, concessão e consequência entre parágrafos', 'Manteve vocabulário preciso e registro formal'],
  },
  C2: {
    listening: { key: 'transfere para escolhas lexicais e pressupostos', zh: '说话者并非否认中立语气，而是指出立场会隐藏在选词和未明说的前提里。因此答案是“被话语选择遮蔽的立场”。', pt: 'O enunciado não nega o tom neutro; mostra que a posição migra para escolhas lexicais e pressupostos implícitos.' },
    reading: { key: 'confundir precisão com compreensão', zh: '核心对立是“能精确量化”与“真正理解意义”。后句强调无法量化的内容仍可能构成经验的意义。', pt: 'A oposição central é entre medir com precisão e compreender o sentido. O não mensurável pode ser justamente o mais significativo.' },
    speaking: { zh: '参考表达先承认表面对立，再揭示双方不同的责任前提，最后形成非二元综合。C2 重点是语义限定、让步和立场校准。', pt: 'O modelo reconhece a oposição, explicita pressupostos distintos e produz uma síntese não binária. No C2, nuance e calibração são centrais.' },
    writingZh: ['是否真正回应“测量”与“重要性”的概念差异', '是否包含让步、反论点及综合，而非单边陈述', '是否使用限定语控制断言强度并保持语义精确'],
    writingPt: ['Distinguiu mensuração de relevância', 'Incluiu concessão, contraponto e síntese', 'Calibrou afirmações com precisão lexical e modalização'],
  },
};

const verbQuestions = [
  { tenseZh: '规则动词 · 现在时', tensePt: 'Regular · presente', infinitive: 'falar', subject: 'eu', sentence: 'Eu ___ português todos os dias.', accepted: [{ form: 'falo', zh: '-ar 动词现在时 eu 形式通常去掉 -ar，加 -o：falar → falo。', pt: 'No presente, verbos em -ar tomam -o com eu: falar → falo.' }] },
  { tenseZh: '规则动词 · 现在时', tensePt: 'Regular · presente', infinitive: 'comer', subject: 'nós', sentence: 'Nós ___ em casa durante a semana.', accepted: [{ form: 'comemos', zh: '-er 动词现在时 nós 形式保留词干，加 -emos：comer → comemos。', pt: 'No presente, verbos em -er usam -emos com nós: comer → comemos.' }] },
  { tenseZh: '规则动词 · 现在时', tensePt: 'Regular · presente', infinitive: 'abrir', subject: 'eles', sentence: 'Eles ___ a loja às nove.', accepted: [{ form: 'abrem', zh: '-ir 动词现在时 eles 形式通常加 -em：abrir → abrem。', pt: 'No presente, verbos em -ir usam -em com eles: abrir → abrem.' }] },
  { tenseZh: '规则动词 · 简单过去时', tensePt: 'Regular · pretérito perfeito', infinitive: 'estudar', subject: 'ela', sentence: 'Ontem ela ___ por duas horas.', accepted: [{ form: 'estudou', zh: '-ar 动词简单过去时 ela 形式加 -ou：estudar → estudou。', pt: 'No pretérito perfeito, ela em verbos -ar recebe -ou: estudou.' }] },
  { tenseZh: '规则动词 · 未完成过去时', tensePt: 'Regular · imperfeito', infinitive: 'morar', subject: 'eu', sentence: 'Quando era criança, eu ___ perto da praia.', accepted: [{ form: 'morava', zh: '过去的持续状态或习惯用未完成过去时：eu morava。', pt: 'Para hábito ou estado no passado, usamos o imperfeito: eu morava.' }] },
  { tenseZh: '规则动词 · 将来时', tensePt: 'Regular · futuro', infinitive: 'viajar', subject: 'nós', sentence: 'No próximo mês nós ___ para o Brasil.', accepted: [{ form: 'viajaremos', zh: '正式将来时 nós 形式：viajar → viajaremos。', pt: 'Futuro formal com nós: viajar → viajaremos.' }] },
  { tenseZh: '规则动词 · 条件式', tensePt: 'Regular · condicional', infinitive: 'ajudar', subject: 'eu', sentence: 'Se pudesse, eu ___ você agora.', accepted: [{ form: 'ajudaria', zh: 'se pudesse 搭配条件式：eu ajudaria。', pt: 'Se pudesse combina com o condicional: eu ajudaria.' }] },
  { tenseZh: '不规则 · 现在时', tensePt: 'Irregular · presente', infinitive: 'ser', subject: 'nós', sentence: 'Nós ___ estudantes de português.', accepted: [{ form: 'somos', zh: 'ser 是高频不规则动词：nós somos。', pt: 'Ser é irregular: nós somos.' }] },
  { tenseZh: '不规则 · 现在时', tensePt: 'Irregular · presente', infinitive: 'estar', subject: 'eu', sentence: 'Hoje eu ___ um pouco cansado.', accepted: [{ form: 'estou', zh: 'estar 的 eu 形式是不规则的：eu estou。', pt: 'A forma de eu em estar é irregular: eu estou.' }] },
  { tenseZh: '不规则 · 现在时', tensePt: 'Irregular · presente', infinitive: 'ter', subject: 'ela', sentence: 'Ela ___ uma reunião hoje.', accepted: [{ form: 'tem', zh: 'ter 的第三人称单数是 tem。', pt: 'A terceira pessoa singular de ter é tem.' }] },
  { tenseZh: '不规则 · 现在时', tensePt: 'Irregular · presente', infinitive: 'ir', subject: 'eles', sentence: 'Eles ___ ao mercado depois da aula.', accepted: [{ form: 'vão', zh: 'ir 的 eles 形式是不规则的：eles vão。', pt: 'Ir é irregular: eles vão.' }] },
  { tenseZh: '不规则 · 简单过去时', tensePt: 'Irregular · pretérito perfeito', infinitive: 'fazer', subject: 'eu', sentence: 'Ontem eu ___ a tarefa cedo.', accepted: [{ form: 'fiz', zh: 'fazer 的简单过去时 eu 形式是不规则的：fiz。', pt: 'No pretérito perfeito, fazer com eu é fiz.' }] },
  { tenseZh: '不规则 · 简单过去时', tensePt: 'Irregular · pretérito perfeito', infinitive: 'ir', subject: 'nós', sentence: 'No sábado nós ___ ao centro.', accepted: [{ form: 'fomos', zh: 'ir 的简单过去时 nós 形式是 fomos，和 ser 同形。', pt: 'No pretérito perfeito, ir com nós é fomos, igual a ser.' }] },
  { tenseZh: '不规则 · 未完成过去时', tensePt: 'Irregular · imperfeito', infinitive: 'ser', subject: 'ela', sentence: 'Antes, ela ___ muito tímida.', accepted: [{ form: 'era', zh: 'ser 的未完成过去时常用 era 表示过去状态。', pt: 'O imperfeito de ser usa era para estados no passado.' }] },
  { tenseZh: '不规则 · 条件式', tensePt: 'Irregular · condicional', infinitive: 'poder', subject: 'nós', sentence: 'Nós ___ sair mais cedo, se terminássemos o trabalho.', accepted: [{ form: 'poderíamos', zh: 'poder 的条件式 nós 形式是 poderíamos，常和 se 条件句搭配。', pt: 'O condicional de poder com nós é poderíamos.' }] },
  { tenseZh: '虚拟式 · 现在', tensePt: 'Subjuntivo · presente', infinitive: 'falar', subject: 'você', sentence: 'É importante que você ___ devagar.', accepted: [{ form: 'fale', zh: 'é importante que 后常用现在虚拟式：você fale。', pt: 'Depois de é importante que, usamos o presente do subjuntivo: você fale.' }] },
  { tenseZh: '虚拟式 · 现在', tensePt: 'Subjuntivo · presente', infinitive: 'ter', subject: 'ela', sentence: 'Espero que ela ___ tempo amanhã.', accepted: [{ form: 'tenha', zh: 'ter 的现在虚拟式第三人称是 tenha。', pt: 'O presente do subjuntivo de ter na terceira pessoa é tenha.' }] },
  { tenseZh: '虚拟式 · 过去', tensePt: 'Subjuntivo · imperfeito', infinitive: 'estar', subject: 'ela', sentence: 'Se ela ___ aqui, ficaria feliz.', accepted: [{ form: 'estivesse', zh: 'se + 过去虚拟式搭配条件式 ficaria：estivesse。', pt: 'Se + imperfeito do subjuntivo combina com ficaria: estivesse.' }] },
  { tenseZh: '虚拟式 · 将来', tensePt: 'Subjuntivo · futuro', infinitive: 'chegar', subject: 'vocês', sentence: 'Quando vocês ___, começaremos a reunião.', accepted: [{ form: 'chegarem', zh: 'quando 指未来未发生动作时，用将来虚拟式：chegarem。', pt: 'Quando aponta para ação futura não realizada; usamos chegarem.' }] },
  { tenseZh: '虚拟式 · 将来', tensePt: 'Subjuntivo · futuro', infinitive: 'ter', subject: 'eu', sentence: 'Quando eu ___ tempo, vou estudar português.', accepted: [{ form: 'tiver', zh: 'ter 的将来虚拟式 eu 形式是 tiver。', pt: 'O futuro do subjuntivo de ter com eu é tiver.' }] },
];

const pronouns = ['eu', 'você/ele/ela', 'nós', 'vocês/eles/elas'];

const commonTenses = [
  { zh: '现在时', pt: 'Presente' },
  { zh: '简单过去时', pt: 'Pretérito perfeito' },
  { zh: '未完成过去时', pt: 'Pretérito imperfeito' },
  { zh: '将来时', pt: 'Futuro' },
  { zh: '条件式', pt: 'Condicional' },
];

const regularConjugationTables = [
  {
    ending: '-ar',
    verb: 'falar',
    titleZh: '-ar 规则动词',
    titlePt: 'Verbos regulares em -ar',
    rows: [
      { tenseZh: '现在时', tensePt: 'Presente', forms: ['falo', 'fala', 'falamos', 'falam'], example: 'Eu falo português todos os dias.' },
      { tenseZh: '简单过去时', tensePt: 'Pretérito perfeito', forms: ['falei', 'falou', 'falamos', 'falaram'], example: 'Ontem falei com a professora.' },
      { tenseZh: '未完成过去时', tensePt: 'Pretérito imperfeito', forms: ['falava', 'falava', 'falávamos', 'falavam'], example: 'Antes, eu falava pouco em público.' },
      { tenseZh: '将来时', tensePt: 'Futuro', forms: ['falarei', 'falará', 'falaremos', 'falarão'], example: 'Amanhã falaremos sobre viagens.' },
      { tenseZh: '条件式', tensePt: 'Condicional', forms: ['falaria', 'falaria', 'falaríamos', 'falariam'], example: 'Eu falaria mais devagar se fosse preciso.' },
    ],
  },
  {
    ending: '-er',
    verb: 'comer',
    titleZh: '-er 规则动词',
    titlePt: 'Verbos regulares em -er',
    rows: [
      { tenseZh: '现在时', tensePt: 'Presente', forms: ['como', 'come', 'comemos', 'comem'], example: 'Nós comemos em casa hoje.' },
      { tenseZh: '简单过去时', tensePt: 'Pretérito perfeito', forms: ['comi', 'comeu', 'comemos', 'comeram'], example: 'Ontem comi peixe no almoço.' },
      { tenseZh: '未完成过去时', tensePt: 'Pretérito imperfeito', forms: ['comia', 'comia', 'comíamos', 'comiam'], example: 'Quando era criança, eu comia cedo.' },
      { tenseZh: '将来时', tensePt: 'Futuro', forms: ['comerei', 'comerá', 'comeremos', 'comerão'], example: 'No sábado comeremos fora.' },
      { tenseZh: '条件式', tensePt: 'Condicional', forms: ['comeria', 'comeria', 'comeríamos', 'comeriam'], example: 'Eu comeria mais se não estivesse cansado.' },
    ],
  },
  {
    ending: '-ir',
    verb: 'abrir',
    titleZh: '-ir 规则动词',
    titlePt: 'Verbos regulares em -ir',
    rows: [
      { tenseZh: '现在时', tensePt: 'Presente', forms: ['abro', 'abre', 'abrimos', 'abrem'], example: 'A loja abre às nove.' },
      { tenseZh: '简单过去时', tensePt: 'Pretérito perfeito', forms: ['abri', 'abriu', 'abrimos', 'abriram'], example: 'Eu abri a janela de manhã.' },
      { tenseZh: '未完成过去时', tensePt: 'Pretérito imperfeito', forms: ['abria', 'abria', 'abríamos', 'abriam'], example: 'Antes, eles abriam a loja cedo.' },
      { tenseZh: '将来时', tensePt: 'Futuro', forms: ['abrirei', 'abrirá', 'abriremos', 'abrirão'], example: 'Abriremos uma nova turma em breve.' },
      { tenseZh: '条件式', tensePt: 'Condicional', forms: ['abriria', 'abriria', 'abriríamos', 'abririam'], example: 'Eu abriria uma exceção neste caso.' },
    ],
  },
];

const irregularConjugationTables = [
  {
    verb: 'ser',
    titleZh: 'ser · 是/成为',
    titlePt: 'ser · ser/estar em essência',
    rows: [
      { tenseZh: '现在时', tensePt: 'Presente', forms: ['sou', 'é', 'somos', 'são'], example: 'Nós somos estudantes.' },
      { tenseZh: '简单过去时', tensePt: 'Pretérito perfeito', forms: ['fui', 'foi', 'fomos', 'foram'], example: 'A reunião foi útil.' },
      { tenseZh: '未完成过去时', tensePt: 'Pretérito imperfeito', forms: ['era', 'era', 'éramos', 'eram'], example: 'Antes, ela era tímida.' },
      { tenseZh: '将来时', tensePt: 'Futuro', forms: ['serei', 'será', 'seremos', 'serão'], example: 'Serei mais confiante.' },
      { tenseZh: '条件式', tensePt: 'Condicional', forms: ['seria', 'seria', 'seríamos', 'seriam'], example: 'Seria melhor estudar agora.' },
    ],
  },
  {
    verb: 'estar',
    titleZh: 'estar · 处于/在',
    titlePt: 'estar · estado/localização',
    rows: [
      { tenseZh: '现在时', tensePt: 'Presente', forms: ['estou', 'está', 'estamos', 'estão'], example: 'Estou pronto para começar.' },
      { tenseZh: '简单过去时', tensePt: 'Pretérito perfeito', forms: ['estive', 'esteve', 'estivemos', 'estiveram'], example: 'Estive em São Paulo ontem.' },
      { tenseZh: '未完成过去时', tensePt: 'Pretérito imperfeito', forms: ['estava', 'estava', 'estávamos', 'estavam'], example: 'Eu estava em casa.' },
      { tenseZh: '将来时', tensePt: 'Futuro', forms: ['estarei', 'estará', 'estaremos', 'estarão'], example: 'Estaremos prontos amanhã.' },
      { tenseZh: '条件式', tensePt: 'Condicional', forms: ['estaria', 'estaria', 'estaríamos', 'estariam'], example: 'Eu estaria feliz com isso.' },
    ],
  },
  {
    verb: 'ter',
    titleZh: 'ter · 有',
    titlePt: 'ter · possuir',
    rows: [
      { tenseZh: '现在时', tensePt: 'Presente', forms: ['tenho', 'tem', 'temos', 'têm'], example: 'Tenho tempo agora.' },
      { tenseZh: '简单过去时', tensePt: 'Pretérito perfeito', forms: ['tive', 'teve', 'tivemos', 'tiveram'], example: 'Tivemos uma boa aula.' },
      { tenseZh: '未完成过去时', tensePt: 'Pretérito imperfeito', forms: ['tinha', 'tinha', 'tínhamos', 'tinham'], example: 'Eu tinha tempo.' },
      { tenseZh: '将来时', tensePt: 'Futuro', forms: ['terei', 'terá', 'teremos', 'terão'], example: 'Teremos aula amanhã.' },
      { tenseZh: '条件式', tensePt: 'Condicional', forms: ['teria', 'teria', 'teríamos', 'teriam'], example: 'Eu teria mais tempo.' },
    ],
  },
  {
    verb: 'ir',
    titleZh: 'ir · 去',
    titlePt: 'ir · movimento',
    rows: [
      { tenseZh: '现在时', tensePt: 'Presente', forms: ['vou', 'vai', 'vamos', 'vão'], example: 'Eles vão ao mercado.' },
      { tenseZh: '简单过去时', tensePt: 'Pretérito perfeito', forms: ['fui', 'foi', 'fomos', 'foram'], example: 'Nós fomos ao centro.' },
      { tenseZh: '未完成过去时', tensePt: 'Pretérito imperfeito', forms: ['ia', 'ia', 'íamos', 'iam'], example: 'Eu ia ao curso.' },
      { tenseZh: '将来时', tensePt: 'Futuro', forms: ['irei', 'irá', 'iremos', 'irão'], example: 'Iremos juntos.' },
      { tenseZh: '条件式', tensePt: 'Condicional', forms: ['iria', 'iria', 'iríamos', 'iriam'], example: 'Eu iria se pudesse.' },
    ],
  },
  {
    verb: 'fazer',
    titleZh: 'fazer · 做',
    titlePt: 'fazer · fazer',
    rows: [
      { tenseZh: '现在时', tensePt: 'Presente', forms: ['faço', 'faz', 'fazemos', 'fazem'], example: 'Faço exercícios todos os dias.' },
      { tenseZh: '简单过去时', tensePt: 'Pretérito perfeito', forms: ['fiz', 'fez', 'fizemos', 'fizeram'], example: 'Ela fez a tarefa cedo.' },
      { tenseZh: '未完成过去时', tensePt: 'Pretérito imperfeito', forms: ['fazia', 'fazia', 'fazíamos', 'faziam'], example: 'Eu fazia revisão.' },
      { tenseZh: '将来时', tensePt: 'Futuro', forms: ['farei', 'fará', 'faremos', 'farão'], example: 'Farei isso hoje.' },
      { tenseZh: '条件式', tensePt: 'Condicional', forms: ['faria', 'faria', 'faríamos', 'fariam'], example: 'Eu faria de novo.' },
    ],
  },
  {
    verb: 'poder',
    titleZh: 'poder · 能够',
    titlePt: 'poder · capacidade/possibilidade',
    rows: [
      { tenseZh: '现在时', tensePt: 'Presente', forms: ['posso', 'pode', 'podemos', 'podem'], example: 'Posso ajudar você.' },
      { tenseZh: '简单过去时', tensePt: 'Pretérito perfeito', forms: ['pude', 'pôde', 'pudemos', 'puderam'], example: 'Ontem não pude estudar.' },
      { tenseZh: '未完成过去时', tensePt: 'Pretérito imperfeito', forms: ['podia', 'podia', 'podíamos', 'podiam'], example: 'Eu podia estudar mais.' },
      { tenseZh: '将来时', tensePt: 'Futuro', forms: ['poderei', 'poderá', 'poderemos', 'poderão'], example: 'Poderemos conversar amanhã.' },
      { tenseZh: '条件式', tensePt: 'Condicional', forms: ['poderia', 'poderia', 'poderíamos', 'poderiam'], example: 'Poderíamos sair mais cedo.' },
    ],
  },
];

type GenderValue = 'masculine' | 'feminine' | 'common';

const genderQuestions: Array<{ word: string; gender: GenderValue; article: string; zh: string; tipZh: string; tipPt: string }> = [
  // 第 1 关：高频词与基础词尾规律
  { word: 'livro', gender: 'masculine', article: 'o', zh: '书', tipZh: '以 -o 结尾的名词通常是阳性，这是最常见的基础规律。', tipPt: 'Substantivos terminados em -o costumam ser masculinos.' },
  { word: 'casa', gender: 'feminine', article: 'a', zh: '家；房子', tipZh: '以 -a 结尾的名词通常是阴性。', tipPt: 'Substantivos terminados em -a costumam ser femininos.' },
  { word: 'problema', gender: 'masculine', article: 'o', zh: '问题', tipZh: '来自希腊语的 -ma 名词通常是阳性。', tipPt: 'Substantivos de origem grega em -ma costumam ser masculinos.' },
  { word: 'viagem', gender: 'feminine', article: 'a', zh: '旅行', tipZh: '多数以 -agem 结尾的名词是阴性。', tipPt: 'A maioria dos substantivos em -agem é feminina.' },
  { word: 'estudante', gender: 'common', article: 'o/a', zh: '学生', tipZh: '通性名词形式不变，根据人物说 o estudante 或 a estudante。', tipPt: 'É comum de dois gêneros: o estudante ou a estudante.' },
  { word: 'cidade', gender: 'feminine', article: 'a', zh: '城市', tipZh: '多数以 -dade 结尾的名词是阴性。', tipPt: 'Substantivos em -dade costumam ser femininos.' },
  { word: 'trabalho', gender: 'masculine', article: 'o', zh: '工作', tipZh: 'trabalho 是阳性名词，使用 o trabalho。', tipPt: 'Trabalho é masculino: dizemos o trabalho.' },
  { word: 'mesa', gender: 'feminine', article: 'a', zh: '桌子', tipZh: 'mesa 是阴性名词，使用 a mesa。', tipPt: 'Mesa é feminino: dizemos a mesa.' },
  { word: 'colega', gender: 'common', article: 'o/a', zh: '同事；同学', tipZh: '形式不变：男性说 o colega，女性说 a colega。', tipPt: 'A forma não muda: o colega ou a colega.' },
  { word: 'sistema', gender: 'masculine', article: 'o', zh: '系统', tipZh: 'sistema 虽以 -a 结尾，但和许多希腊语来源的 -ma 名词一样是阳性。', tipPt: 'Apesar do -a, sistema é masculino, como muitos nomes gregos em -ma.' },

  // 第 2 关：常见例外与人物通性名词
  { word: 'mapa', gender: 'masculine', article: 'o', zh: '地图', tipZh: '虽然以 -a 结尾，mapa 是阳性例外。', tipPt: 'Apesar de terminar em -a, mapa é masculino.' },
  { word: 'dia', gender: 'masculine', article: 'o', zh: '天；日', tipZh: 'dia 以 -a 结尾，但固定使用阳性冠词 o。', tipPt: 'Dia termina em -a, mas é masculino: o dia.' },
  { word: 'mão', gender: 'feminine', article: 'a', zh: '手', tipZh: 'mão 是需要记住的阴性例外：a mão。', tipPt: 'Mão é uma exceção feminina: a mão.' },
  { word: 'foto', gender: 'feminine', article: 'a', zh: '照片', tipZh: 'foto 是 fotografia 的缩略形式，因此保留阴性。', tipPt: 'Foto vem de fotografia e mantém o gênero feminino.' },
  { word: 'clima', gender: 'masculine', article: 'o', zh: '气候', tipZh: 'clima 虽以 -a 结尾，却是阳性名词。', tipPt: 'Clima termina em -a, mas é masculino.' },
  { word: 'árvore', gender: 'feminine', article: 'a', zh: '树', tipZh: '词尾不明显时要连同冠词记忆：a árvore。', tipPt: 'Quando a terminação não ajuda, memorize com o artigo: a árvore.' },
  { word: 'artista', gender: 'common', article: 'o/a', zh: '艺术家', tipZh: '人物性别由冠词表达：o artista / a artista。', tipPt: 'O artigo indica a pessoa: o artista / a artista.' },
  { word: 'dentista', gender: 'common', article: 'o/a', zh: '牙医', tipZh: 'dentista 的形式不变，可搭配 o 或 a。', tipPt: 'Dentista não muda de forma: o dentista / a dentista.' },
  { word: 'jovem', gender: 'common', article: 'o/a', zh: '年轻人', tipZh: '指人物时用冠词区分：o jovem / a jovem。', tipPt: 'Para pessoas, o artigo distingue: o jovem / a jovem.' },
  { word: 'gerente', gender: 'common', article: 'o/a', zh: '经理', tipZh: 'gerente 常作通性名词：o gerente / a gerente。', tipPt: 'Gerente é geralmente comum de dois gêneros: o gerente / a gerente.' },

  // 第 3 关：抽象词尾与需要单独记忆的名词
  { word: 'liberdade', gender: 'feminine', article: 'a', zh: '自由', tipZh: '抽象名词后缀 -dade 通常为阴性。', tipPt: 'O sufixo abstrato -dade normalmente forma substantivos femininos.' },
  { word: 'decisão', gender: 'feminine', article: 'a', zh: '决定', tipZh: 'decisão 是阴性名词；不要只根据 -ão 猜测性别。', tipPt: 'Decisão é feminino; a terminação -ão, sozinha, não determina o gênero.' },
  { word: 'idioma', gender: 'masculine', article: 'o', zh: '语言', tipZh: 'idioma 是希腊语来源的 -ma 阳性名词。', tipPt: 'Idioma é um substantivo masculino de origem grega em -ma.' },
  { word: 'análise', gender: 'feminine', article: 'a', zh: '分析', tipZh: 'análise 固定使用阴性冠词 a，需要和冠词一起记。', tipPt: 'Análise é feminino; vale a pena memorizar junto com o artigo.' },
  { word: 'coração', gender: 'masculine', article: 'o', zh: '心；心脏', tipZh: 'coração 是阳性。以 -ão 结尾的词性别不统一，需要逐词积累。', tipPt: 'Coração é masculino; palavras em -ão não têm um único gênero.' },
  { word: 'ponte', gender: 'feminine', article: 'a', zh: '桥', tipZh: 'ponte 使用阴性冠词 a；词尾 -e 不能可靠判断性别。', tipPt: 'Ponte é feminino; a terminação -e não permite prever sempre o gênero.' },
  { word: 'lápis', gender: 'masculine', article: 'o', zh: '铅笔', tipZh: 'lápis 是阳性，而且单复数形式相同：o lápis / os lápis。', tipPt: 'Lápis é masculino e tem a mesma forma no plural: o lápis / os lápis.' },
  { word: 'origem', gender: 'feminine', article: 'a', zh: '起源', tipZh: 'origem 是阴性；多数以 -agem 结尾为阴性，但 -gem 词仍建议连冠词记忆。', tipPt: 'Origem é feminino; memorize a palavra junto com o artigo.' },
  { word: 'vítima', gender: 'feminine', article: 'a', zh: '受害者', tipZh: 'vítima 的语法性别始终是阴性，即使指男性也说 a vítima。', tipPt: 'Vítima é gramaticalmente feminino, mesmo quando se refere a um homem.' },
  { word: 'modelo', gender: 'common', article: 'o/a', zh: '模特', tipZh: '指职业中的人物时，通常说 o modelo / a modelo。', tipPt: 'Para a profissão, usamos normalmente o modelo / a modelo.' },
];

const GENDER_STAGE_SIZE = 10;
const GENDER_STAGE_COUNT = genderQuestions.length / GENDER_STAGE_SIZE;
const VOCAB_CONTENT_VERSION = 'oi-v5-2600-20260912';

function PracticeHub({ c, language, onHome }: { c: Copy; language: Language; onHome: () => void }) {
  const [mode, setMode] = useState<PracticeMode>('level-select');
  const [reviewingStage, setReviewingStage] = useState<number|null>(null);
  const [checkedIn, setCheckedIn] = useState(false);
  const [knownWords, setKnownWords] = useState<number[]>([]);
  const [vocabSentences, setVocabSentences] = useState<string[]>([]);
  const [vocabDeckIndex, setVocabDeckIndex] = useState(0);
  const [vocabPhase, setVocabPhase] = useState<VocabPhase>('learn');
  const [vocabQuizIndex, setVocabQuizIndex] = useState(0);
  const [vocabQuizChoice, setVocabQuizChoice] = useState<number|null>(null);
  const [vocabQuizScore, setVocabQuizScore] = useState(0);
  const [vocabPracticeResult, setVocabPracticeResult] = useState<'idle'|'correct'|'wrong'>('idle');
  const [vocabLoopStats, setVocabLoopStats] = useState<VocabLoopStats>(defaultVocabLoopStats);
  const [revealedReview, setRevealedReview] = useState<number[]>([]);
  const [verbStep, setVerbStep] = useState(0);
  const [verbRound, setVerbRound] = useState(0);
  const [verbScore, setVerbScore] = useState(0);
  const [verbComplete, setVerbComplete] = useState(false);
  const [verbMistakes, setVerbMistakes] = useState<string[]>([]);
  const [verbAnswer, setVerbAnswer] = useState('');
  const [verbResult, setVerbResult] = useState<'idle'|'correct'|'wrong'>('idle');
  const [verbExplanation, setVerbExplanation] = useState('');
  const [genderStage, setGenderStage] = useState(0);
  const [genderStep, setGenderStep] = useState(0);
  const [genderScore, setGenderScore] = useState(0);
  const [genderComplete, setGenderComplete] = useState(false);
  const [genderChoice, setGenderChoice] = useState<GenderValue|null>(null);
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel>('A1');
  const [comprehensionAnswer, setComprehensionAnswer] = useState<number|null>(null);
  const [speakingActive, setSpeakingActive] = useState(false);
  const [showSpeakingModel, setShowSpeakingModel] = useState(false);
  const [writingText, setWritingText] = useState('');
  const [writingEvaluated, setWritingEvaluated] = useState(false);
  const [learningProgress, setLearningProgress] = useState<LearningProgress>({});
  const [profileMonthIndex, setProfileMonthIndex] = useState(() => {
    const today = new Date();
    const monthIndex = (today.getFullYear() - 2026) * 12 + today.getMonth() - 5;
    return Math.max(0, Math.min(13, monthIndex));
  });
  const dayKey = getLocalDayKey();
  const vocabDeck = vocabularyDecks[vocabDeckIndex] || vocabularyDecks[0];
  const todaysWords = vocabDeck.words;
  const vocabQuizWord = todaysWords[vocabQuizIndex];
  const vocabWordPractice = getVocabularyPractice(vocabQuizWord);
  const quizBase = [vocabQuizIndex, (vocabQuizIndex + 3) % todaysWords.length, (vocabQuizIndex + 7) % todaysWords.length];
  const quizShift = vocabQuizIndex % 3;
  const vocabQuizChoices = [...quizBase.slice(quizShift), ...quizBase.slice(0, quizShift)];
  const reviewIndices = [0, 2, 4, 6, 8];
  const completedVocabWords = knownWords.length;
  const vocabularyLevel: VocabularyDeck['level'] = selectedLevel;
  const levelDeckIndices = vocabularyDecks.map((deck,index)=>deck.level===vocabularyLevel?index:-1).filter(index=>index>=0);
  const levelDeckPosition = Math.max(0, levelDeckIndices.indexOf(vocabDeckIndex));
  const nextDeckIndex = levelDeckIndices[(levelDeckPosition + 1) % levelDeckIndices.length];
  const nextVocabDeck = vocabularyDecks[nextDeckIndex];
  const nextCycle = levelDeckPosition === levelDeckIndices.length - 1 ? vocabLoopStats.cycle + 1 : vocabLoopStats.cycle;
  const loopFocusIndex = (vocabLoopStats.cycle - 1) % 4;
  const totalVocabularyWords = levelDeckIndices.reduce((sum, index) => sum + vocabularyDecks[index].words.length, 0);
  const learnedWordEstimate = Math.min(totalVocabularyWords, vocabLoopStats.completedTopics.filter(index=>levelDeckIndices.includes(index)).length * 10);
  const weeklySessions = vocabLoopStats.sessions % 7;
  const activeMistakeWords = vocabLoopStats.mistakeWords.slice(0, 5);
  const allVocabularyItems = vocabularyDecks.flatMap((deck, deckIndex) => deck.words.map((word, wordIndex) => ({ word, id: deckIndex * 100 + wordIndex })));
  const mistakeReviewItems = activeMistakeWords.map(word => allVocabularyItems.find(item => item.word.pt === word)).filter((item): item is { word: VocabularyWord; id: number } => Boolean(item));
  const regularReviewItems = reviewIndices.map(index => ({ word: todaysWords[index], id: vocabDeckIndex * 100 + index }));
  const reviewItems = [...mistakeReviewItems, ...regularReviewItems.filter(item => !mistakeReviewItems.some(mistake => mistake.word.pt === item.word.pt))].slice(0, 5);
  const vocabProgressPercent = vocabPhase === 'learn' ? completedVocabWords * 4
    : vocabPhase === 'quiz' ? 40 + (vocabQuizIndex + (vocabQuizChoice === null ? 0 : 1)) * 4
    : vocabPhase === 'review' ? 80 + revealedReview.length * 4
    : 100;
  const verbStartIndex = Array.from(`${dayKey}-${selectedLevel}`).reduce((sum, character) => sum + character.charCodeAt(0), 0) % verbQuestions.length;
  const verb = verbQuestions[(verbStartIndex + verbRound * 5 + verbStep) % verbQuestions.length];
  const gender = genderQuestions[genderStage * GENDER_STAGE_SIZE + genderStep];
  const visibleGenderScore = genderScore + (genderChoice === gender.gender ? 1 : 0);
  const levelExercise = cefrExercises[selectedLevel];
  const writingWordCount = writingText.trim() ? writingText.trim().split(/\s+/).length : 0;
  const activeLearningProgress: LevelLearningProgress = learningProgress[selectedLevel] || { lesson: 0, stage: 0, startedOn: dayKey, history: {} };
  const todayLearningRecord = activeLearningProgress.history[dayKey];
  const levelLibraryNote = language === 'zh'
    ? `${selectedLevel}：${levelDeckIndices.length} 节日课 · ${totalVocabularyWords} 个词 · 完整词库共 ${vocabularyDecks.reduce((sum, deck) => sum + deck.words.length, 0)} 词`
    : `${selectedLevel}: ${levelDeckIndices.length} lições · ${totalVocabularyWords} palavras · ${vocabularyDecks.reduce((sum, deck) => sum + deck.words.length, 0)} no total`;
  const recentLearningDays = Array.from({length: 7}, (_, offset) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - offset));
    const key = getLocalDayKey(date);
    const record = activeLearningProgress.history[key];
    return { key, day: date.toLocaleDateString(language==='zh'?'zh-CN':'pt-BR',{weekday:'short'}).replace('.', ''), date: date.getDate(), record, beforeStart: key < activeLearningProgress.startedOn };
  });
  const ui = language === 'zh' ? {
    title: '每日学习', subtitle: '今天只做一套练习，15–20 分钟完成。', streak: '连续学习 4 天', vocab: '每日词汇日课', vocabMeta: '15–20 分钟 · 词义＋词形填空＋回忆', verbs: '变位巩固', verbsMeta: '基本时态＋不规则变位', gender: '名词性别闯关', genderMeta: '每日 10 题 · 3 关进阶', today: '今日词汇日课', todayTask: '今日练习', todayTaskMeta: '系统已为你排好顺序，跟着做就可以', startToday: '开始今日练习', reviewEntry: '错题复习', reviewEntryMeta: '复习今天和之前不熟悉的内容', progressEntry: '学习进度', progressEntryMeta: '查看打卡、主题与循环进度', specialTitle: '专项练习', specialMeta: '想加练时再选择，不计入今日必做任务', example: '口语例句', learned: '已理解', progress: '今日进度', check: '进入词义与词形练习', checked: '✓ 今日词汇目标完成', learnPhase: '理解词汇', learnTime: '约 5 分钟', quizPhase: '词义＋句中填词', quizTime: '约 10 分钟', reviewPhase: '回忆复习', reviewTime: '约 3 分钟', library: '48 节日课 · 480 个高频词 · 480 个例句', lesson: '第', lessonSuffix: '课', listen: '听发音', sentenceTask: '理解词义后，完成新的情境句', sentencePlaceholder: '输入空格中缺少的葡语形式', sentenceHint: '注意主语、单复数和词尾重音符号。', saveSentence: '检查填词', sentenceSaved: '词形正确', practiceKindVerb: '动词变位', practiceKindPlural: '名词单复数', practiceKindAgreement: '性数配合', practiceKindContext: '语境用词', answerAnalysis: '答案解析', retryForm: '修改后再检查', quizPrompt: '先结合单词和例句，选择正确含义', chooseMeaning: '选择中文含义', tryAgain: '重新选择', nextQuiz: '下一题', startReview: '进入回忆复习', reveal: '点击回忆答案', remembered: '已回忆', finishToday: '完成今日 15–20 分钟打卡', dailyDone: '今天的词汇日课完成！', dailySummary: '你完成了 10 个新词、10 个词义判断、10 个句中词形填空和 5 次主动回忆。', tomorrowTopic: '下一课', extraLesson: '继续加练下一课', reviewAgain: '再复习一次', verbTitle: '动词时态与不规则变位', answer: '输入动词形式', verify: '检查答案', correct: '正确！', wrong: '当前语境的建议答案是', accepted: '你的答案在这个句子中也成立。', next: '下一题', genderTitle: '判断这个名词的语法性别', choose: '选择类别', neutralNote: '葡语名词没有真正的“中性”；这里用“通性”表示形式相同、可随人物使用阳性或阴性冠词。', masculine: '阳性', feminine: '阴性', common: '中性／通性', stage: '第', stageSuffix: '关', question: '题目', score: '答对', goalDone: '今日目标完成！', result: '本关成绩', nextStage: '挑战下一关', restartStage: '重闯第一关', tomorrow: '明天继续', back: '返回学习中心'
  } : {
    title: 'Estudo diário', subtitle: 'Uma sessão por dia, concluída em 15–20 minutos.', streak: '4 dias seguidos', vocab: 'Sessão diária de vocabulário', vocabMeta: '15–20 min · significado + forma + revisão', verbs: 'Conjugação', verbsMeta: 'tempos básicos + irregulares', gender: 'Desafio de gênero', genderMeta: '10 questões por dia · 3 fases', today: 'SESSÃO DE VOCABULÁRIO', todayTask: 'Sessão de hoje', todayTaskMeta: 'A ordem já está pronta; basta seguir as etapas', startToday: 'Começar a sessão', reviewEntry: 'Revisar erros', reviewEntryMeta: 'Reveja o que ainda não está firme', progressEntry: 'Meu progresso', progressEntryMeta: 'Dias, temas e ciclo atual', specialTitle: 'Prática extra', specialMeta: 'Escolha apenas quando quiser treinar mais', example: 'Exemplo natural', learned: 'Entendi', progress: 'Progresso de hoje', check: 'Praticar significado e forma', checked: '✓ Meta de vocabulário concluída', learnPhase: 'Compreender palavras', learnTime: 'cerca de 5 min', quizPhase: 'Significado + lacuna', quizTime: 'cerca de 10 min', reviewPhase: 'Revisão ativa', reviewTime: 'cerca de 3 min', library: '48 lições · 480 palavras frequentes · 480 exemplos', lesson: 'Lição', lessonSuffix: '', listen: 'Ouvir', sentenceTask: 'Depois de compreender, complete uma nova frase', sentencePlaceholder: 'Digite a forma portuguesa que falta', sentenceHint: 'Observe o sujeito, o plural e os acentos.', saveSentence: 'Verificar lacuna', sentenceSaved: 'Forma correta', practiceKindVerb: 'Conjugação verbal', practiceKindPlural: 'Singular e plural', practiceKindAgreement: 'Concordância', practiceKindContext: 'Uso em contexto', answerAnalysis: 'Explicação da resposta', retryForm: 'Corrigir e verificar novamente', quizPrompt: 'Primeiro, escolha o significado pelo contexto', chooseMeaning: 'Escolha o significado', tryAgain: 'Escolher novamente', nextQuiz: 'Próxima questão', startReview: 'Começar revisão ativa', reveal: 'Toque para lembrar', remembered: 'Relembrado', finishToday: 'Concluir sessão de 15–20 minutos', dailyDone: 'Sessão de hoje concluída!', dailySummary: 'Você estudou 10 palavras, acertou 10 significados, completou 10 formas em frases e fez 5 recordações ativas.', tomorrowTopic: 'Próxima lição', extraLesson: 'Estudar a próxima lição', reviewAgain: 'Revisar novamente', verbTitle: 'Tempos verbais e irregulares', answer: 'Digite a forma verbal', verify: 'Verificar', correct: 'Correto!', wrong: 'A resposta sugerida neste contexto é', accepted: 'Sua resposta também é válida nesta frase.', next: 'Próxima', genderTitle: 'Identifique o gênero gramatical', choose: 'Escolha a categoria', neutralNote: 'O português não tem gênero neutro nos substantivos; “comum” indica a mesma forma com artigo masculino ou feminino.', masculine: 'Masculino', feminine: 'Feminino', common: 'Comum', stage: 'Fase', stageSuffix: '', question: 'Questão', score: 'Acertos', goalDone: 'Meta de hoje concluída!', result: 'Resultado desta fase', nextStage: 'Desafiar próxima fase', restartStage: 'Recomeçar a fase 1', tomorrow: 'Continuar amanhã', back: 'Voltar ao centro'
  };

  const skillUi = language === 'zh' ? {
    title: '听说读写分级训练', subtitle: '选择等级后，四项能力会使用同一难度标准。', listening: '听力', listeningMeta: '听真实语速并完成理解题', speaking: '口语', speakingMeta: '根据情景组织表达', reading: '阅读', readingMeta: '理解主旨、细节与观点', writing: '写作', writingMeta: '按等级完成结构化表达', chooseLevel: '当前难度', play: '▶ 播放听力', replay: '↻ 再听一次', question: '理解问题', correct: '回答正确', wrong: '答案不正确', correctAnswer: '正确答案', evidence: '定位依据', analysis: '详细解析', transcript: '听力原文', speakingTask: '口语任务', goals: '表达目标', model: '听参考表达并查看解析', modelAnswer: '参考表达', startSpeaking: '开始口语计时', finishSpeaking: '完成本次口语', readingTask: '阅读材料', writingTask: '写作任务', minWords: '建议最低字数', evaluate: '查看详细反馈', enough: '已达到本级建议长度。', short: '内容还偏短，请根据提示继续补充。', rubric: '本级检查清单', words: '词', back: '返回分级训练'
  } : {
    title: 'Treino por competências', subtitle: 'Escolha o nível; as quatro competências seguem a mesma dificuldade.', listening: 'Ouvir', listeningMeta: 'Compreensão em velocidade adequada', speaking: 'Falar', speakingMeta: 'Produção oral em contexto', reading: 'Ler', readingMeta: 'Ideia principal, detalhes e opinião', writing: 'Escrever', writingMeta: 'Produção estruturada por nível', chooseLevel: 'Nível atual', play: '▶ Ouvir', replay: '↻ Ouvir novamente', question: 'Questão de compreensão', correct: 'Resposta correta', wrong: 'Resposta incorreta', correctAnswer: 'Resposta certa', evidence: 'Evidência', analysis: 'Explicação detalhada', transcript: 'Transcrição', speakingTask: 'Tarefa oral', goals: 'Objetivos', model: 'Ouvir modelo e ver análise', modelAnswer: 'Resposta-modelo', startSpeaking: 'Iniciar prática oral', finishSpeaking: 'Concluir prática oral', readingTask: 'Texto para leitura', writingTask: 'Tarefa escrita', minWords: 'Mínimo sugerido', evaluate: 'Ver feedback detalhado', enough: 'Você atingiu a extensão sugerida.', short: 'O texto ainda está curto; desenvolva as ideias com as pistas.', rubric: 'Lista de revisão do nível', words: 'palavras', back: 'Voltar ao treino'
  };
  const loopUi = language === 'zh' ? {
    title: '每日闭环设置',
    summary: '每天固定：新词理解 → 词形填空 → 主动回忆 → 错题回流',
    cycle: '当前循环',
    cycleNames: ['新词开荒', '复习强化', '语法加固', '听说回忆'],
    todayPlan: ['5–10 个新词', '10 道语境填空', '5 个旧词回忆', '错题进入明日复习'],
    sessions: '打卡天数',
    words: '已覆盖词汇',
    topics: '主题进度',
    mistakes: '错题池',
    weekly: '周测进度',
    weeklyReady: '周测已解锁',
    weeklyLeft: '再完成',
    weeklyUnit: '天解锁周测',
    noMistakes: '暂无错题',
    afterAll: '完成本等级日课后会自动进入下一轮，不会结束。',
    nextCycle: '下一轮',
  } : {
    title: 'Ciclo diário',
    summary: 'Todos os dias: palavra nova → lacuna → revisão ativa → erro volta amanhã',
    cycle: 'Ciclo atual',
    cycleNames: ['Palavras novas', 'Reforço', 'Gramática', 'Escuta e fala'],
    todayPlan: ['5–10 palavras', '10 lacunas em contexto', '5 revisões antigas', 'Erros voltam amanhã'],
    sessions: 'Dias concluídos',
    words: 'Palavras cobertas',
    topics: 'Temas',
    mistakes: 'Banco de erros',
    weekly: 'Teste semanal',
    weeklyReady: 'Teste desbloqueado',
    weeklyLeft: 'Faltam',
    weeklyUnit: 'dias',
    noMistakes: 'Sem erros por enquanto',
    afterAll: 'Depois das lições deste nível, o app entra automaticamente no próximo ciclo.',
    nextCycle: 'Próximo ciclo',
  };
  const completedDayKeys = new Set(Object.values(learningProgress).flatMap(progress => Object.entries(progress?.history || {}).filter(([, record]) => record.completed).map(([date]) => date)));
  const activeCompletedDays = Object.values(activeLearningProgress.history).filter(record => record.completed).length;
  const latestCompletedDay = Array.from(completedDayKeys).filter(key => key <= dayKey).sort().at(-1);
  let profileStreakDays = 0;
  if (latestCompletedDay) {
    const streakDate = new Date(`${latestCompletedDay}T00:00:00`);
    while (completedDayKeys.has(getLocalDayKey(streakDate))) {
      profileStreakDays += 1;
      streakDate.setDate(streakDate.getDate() - 1);
    }
  }
  const currentLevelProgress = levelDeckIndices.length ? Math.min(100, Math.round((activeLearningProgress.lesson / levelDeckIndices.length) * 100)) : 0;
  const currentMonthPrefix = dayKey.slice(0, 7);
  const daysElapsedThisMonth = new Date().getDate();
  const completedThisMonth = Array.from(completedDayKeys).filter(key => key.startsWith(currentMonthPrefix)).length;
  const monthlyCompletionRate = Math.min(100, Math.round((completedThisMonth / daysElapsedThisMonth) * 100));
  const profileNickname = 'Huanru';
  const profileUi = language === 'zh' ? {
    title: '我的学习',
    subtitle: '今天的状态、等级进度和词汇掌握都放在这里。',
    nickname: '昵称',
    streak: '连续学习',
    totalDays: '累计学习',
    todayDone: '今日状态',
    done: '已完成',
    pending: '未完成',
    levelProgress: '等级进度',
    currentLesson: '当前课程',
    learnedWords: '已学词汇',
    reviewWords: '待复习词',
    monthRate: '本月完成率',
    vocabulary: '词汇掌握',
    practice: '练习记录',
    settings: '设置',
    checkinCalendar: '打卡日历',
    checkinRange: '2026.06 - 2027.07',
    dailyGoal: '每日目标',
    display: '显示语言',
    level: '当前等级',
    next: '下一步',
  } : {
    title: 'Meu perfil',
    subtitle: 'Seu estado de hoje, progresso do nível e vocabulário.',
    nickname: 'Apelido',
    streak: 'Sequência',
    totalDays: 'Dias no total',
    todayDone: 'Hoje',
    done: 'Concluído',
    pending: 'Pendente',
    levelProgress: 'Progresso do nível',
    currentLesson: 'Lição atual',
    learnedWords: 'Palavras estudadas',
    reviewWords: 'Para revisar',
    monthRate: 'Mês concluído',
    vocabulary: 'Vocabulário',
    practice: 'Registros',
    settings: 'Configurações',
    checkinCalendar: 'Calendário',
    checkinRange: '06/2026 - 07/2027',
    dailyGoal: 'Meta diária',
    display: 'Idioma',
    level: 'Nível atual',
    next: 'Próximo',
  };
  const profileCalendarMonths = Array.from({ length: 14 }, (_, monthOffset) => {
    const date = new Date(2026, 5 + monthOffset, 1);
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstWeekday = date.getDay();
    const days = Array.from({ length: daysInMonth }, (_, dayIndex) => {
      const day = dayIndex + 1;
      const key = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const record = activeLearningProgress.history[key];
      return { key, day, record };
    });
    return { key: `${year}-${month + 1}`, label: `${year}.${String(month + 1).padStart(2, '0')}`, firstWeekday, days };
  });
  const profileCalendarMonth = profileCalendarMonths[profileMonthIndex] || profileCalendarMonths[0];
  const journeyStages: Array<{ mode: PracticeMode; icon: string; title: string; meta: string }> = [
    { mode: 'vocab', icon: 'Aa', title: language==='zh'?`${selectedLevel} 词汇热身`:`Vocabulário ${selectedLevel}`, meta: language==='zh'?'词义、例句与词形':'Significado, frase e forma' },
    { mode: 'listening', icon: '◖))', title: skillUi.listening, meta: skillUi.listeningMeta },
    { mode: 'reading', icon: '文', title: skillUi.reading, meta: skillUi.readingMeta },
    { mode: 'speaking', icon: '◉', title: skillUi.speaking, meta: skillUi.speakingMeta },
  ];

  useEffect(() => {
    if (localStorage.getItem('fala-vocab-content-version') === VOCAB_CONTENT_VERSION) return;
    const stalePrefixes = ['fala-vocab-session-', 'fala-checkin-', 'fala-vocab-next-deck', 'fala-vocab-loop'];
    for (let index = localStorage.length - 1; index >= 0; index -= 1) {
      const key = localStorage.key(index);
      if (key && stalePrefixes.some(prefix => key.startsWith(prefix))) localStorage.removeItem(key);
    }
    localStorage.setItem('fala-vocab-content-version', VOCAB_CONTENT_VERSION);
  }, []);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('fala-learning-progress') || '{}');
      if (saved && typeof saved === 'object') {
        const migrated = { ...saved } as LearningProgress;
        for (const level of cefrLevels) {
          const current = migrated[level];
          if (!current) continue;
          const history = Object.fromEntries(Object.entries(current.history || {}).map(([date, record]) => [date, {
            ...record,
            completedStages: record.completed || record.completedStages >= journeyStages.length ? journeyStages.length : Math.min(record.completedStages, journeyStages.length),
            completed: record.completed || record.completedStages >= journeyStages.length,
          }]));
          migrated[level] = { ...current, stage: Math.min(current.stage, journeyStages.length - 1), history };
        }
        localStorage.setItem('fala-learning-progress', JSON.stringify(migrated));
        setLearningProgress(migrated);
      }
    } catch {
      setLearningProgress({});
    }
  }, []);

  useEffect(() => {
    const savedLevel = localStorage.getItem('fala-cefr-level');
    const activeLevel = cefrLevels.includes(savedLevel as CEFRLevel) ? savedLevel as CEFRLevel : selectedLevel;
    if (activeLevel !== selectedLevel) setSelectedLevel(activeLevel);

    setCheckedIn(localStorage.getItem(`fala-checkin-${dayKey}-${selectedLevel}`) === 'done');
    try {
      const savedLoop = JSON.parse(localStorage.getItem(`fala-vocab-loop-${selectedLevel}`) || localStorage.getItem('fala-vocab-loop') || 'null');
      if (savedLoop) {
        setVocabLoopStats({
          cycle: Math.max(1, Number(savedLoop.cycle) || 1),
          sessions: Math.max(0, Number(savedLoop.sessions) || 0),
          completedTopics: Array.isArray(savedLoop.completedTopics) ? savedLoop.completedTopics.filter((item: unknown) => Number.isInteger(item)) : [],
          mistakeWords: Array.isArray(savedLoop.mistakeWords) ? savedLoop.mistakeWords.filter((item: unknown) => typeof item === 'string') : [],
          lastCompletedDate: typeof savedLoop.lastCompletedDate === 'string' ? savedLoop.lastCompletedDate : '',
        });
      }
    } catch {
      setVocabLoopStats(defaultVocabLoopStats);
    }
    try {
      const savedVocab = JSON.parse(localStorage.getItem(`fala-vocab-session-${dayKey}-${selectedLevel}`) || 'null');
      if (savedVocab) {
        setVocabDeckIndex(Math.max(0, Math.min(vocabularyDecks.length - 1, Number(savedVocab.deckIndex) || 0)));
        setKnownWords(Array.isArray(savedVocab.knownWords) ? savedVocab.knownWords : []);
        setVocabSentences(Array.isArray(savedVocab.sentences) ? savedVocab.sentences : []);
        setVocabPhase(['learn', 'quiz', 'review', 'done'].includes(savedVocab.phase) ? savedVocab.phase : 'learn');
        setVocabQuizIndex(Math.max(0, Math.min(9, Number(savedVocab.quizIndex) || 0)));
        setVocabQuizScore(Math.max(0, Math.min(10, Number(savedVocab.quizScore) || 0)));
        setRevealedReview(Array.isArray(savedVocab.revealedReview) ? savedVocab.revealedReview : []);
      } else {
        const nextDeck = Number(localStorage.getItem(`fala-vocab-next-deck-${selectedLevel}`) || localStorage.getItem('fala-vocab-next-deck') || 0);
        setVocabDeckIndex(Math.max(0, Math.min(vocabularyDecks.length - 1, nextDeck)));
      }
    } catch {
      setVocabDeckIndex(0);
      setKnownWords([]);
      setVocabSentences([]);
      setVocabPhase('learn');
      setVocabQuizIndex(0);
      setVocabQuizScore(0);
      setRevealedReview([]);
    }
    try {
      const savedGender = JSON.parse(localStorage.getItem(`fala-gender-${dayKey}-${selectedLevel}`) || 'null');
      if (savedGender) {
        setGenderStage(Math.max(0, Math.min(GENDER_STAGE_COUNT - 1, Number(savedGender.stage) || 0)));
        setGenderStep(Math.max(0, Math.min(GENDER_STAGE_SIZE - 1, Number(savedGender.step) || 0)));
        setGenderScore(Math.max(0, Math.min(GENDER_STAGE_SIZE, Number(savedGender.score) || 0)));
        setGenderComplete(Boolean(savedGender.complete));
      } else {
        const nextStage = Number(localStorage.getItem('fala-gender-next-stage') || 0);
        setGenderStage(Math.max(0, Math.min(GENDER_STAGE_COUNT - 1, nextStage)));
      }
    } catch {
      setGenderStage(0);
      setGenderStep(0);
      setGenderScore(0);
      setGenderComplete(false);
    }
    try {
      const savedVerb = JSON.parse(localStorage.getItem(`fala-verb-session-${dayKey}-${selectedLevel}`) || 'null');
      setVerbStep(savedVerb ? Math.max(0, Math.min(4, Number(savedVerb.step) || 0)) : 0);
      setVerbRound(savedVerb ? Math.max(0, Number(savedVerb.round) || 0) : 0);
      setVerbScore(savedVerb ? Math.max(0, Math.min(5, Number(savedVerb.score) || 0)) : 0);
      setVerbComplete(Boolean(savedVerb?.complete));
      setVerbMistakes(Array.isArray(savedVerb?.mistakes) ? savedVerb.mistakes.filter((item: unknown) => typeof item === 'string') : []);
      setVerbAnswer('');
      setVerbResult('idle');
      setVerbExplanation('');
    } catch {
      setVerbStep(0);
      setVerbRound(0);
      setVerbScore(0);
      setVerbComplete(false);
      setVerbMistakes([]);
    }
  }, [dayKey, selectedLevel]);

  function chooseLevel(level: CEFRLevel) {
    setSelectedLevel(level);
    localStorage.setItem('fala-cefr-level', level);
    setComprehensionAnswer(null);
    setWritingText('');
    setWritingEvaluated(false);
    setSpeakingActive(false);
    setShowSpeakingModel(false);
  }

  function saveLearningProgress(next: LearningProgress) {
    setLearningProgress(next);
    localStorage.setItem('fala-learning-progress', JSON.stringify(next));
  }

  function completeJourneyStage(stageIndex: number) {
    setLearningProgress(previous => {
      const current = previous[selectedLevel] || { lesson: 0, stage: 0, startedOn: dayKey, history: {} };
      const todayRecord = current.history[dayKey];
      if (todayRecord?.completed || stageIndex !== current.stage) return previous;
      const finishedDay = stageIndex === journeyStages.length - 1;
      const updated: LevelLearningProgress = {
        ...current,
        lesson: finishedDay ? current.lesson + 1 : current.lesson,
        stage: finishedDay ? 0 : stageIndex + 1,
        history: { ...current.history, [dayKey]: { completedStages: stageIndex + 1, completed: finishedDay } },
      };
      const next = { ...previous, [selectedLevel]: updated };
      localStorage.setItem('fala-learning-progress', JSON.stringify(next));
      return next;
    });
  }

  function openJourneyStage(stageIndex: number, nextMode: PracticeMode) {
    const completedStages = todayLearningRecord?.completedStages || 0;
    const canOpen = Boolean(todayLearningRecord?.completed) || stageIndex <= activeLearningProgress.stage || stageIndex < completedStages;
    if (!canOpen) return;
    const isReview = Boolean(todayLearningRecord?.completed) || stageIndex < activeLearningProgress.stage;
    setReviewingStage(isReview ? stageIndex : null);
    if (nextMode === 'listening' || nextMode === 'reading') setComprehensionAnswer(null);
    if (nextMode === 'speaking') { setSpeakingActive(false); setShowSpeakingModel(false); }
    if (nextMode === 'writing') { setWritingText(''); setWritingEvaluated(false); }
    if (nextMode === 'verbs') { setVerbAnswer(''); setVerbResult('idle'); setVerbExplanation(''); }
    setMode(nextMode);
  }

  function returnToJourney() {
    setReviewingStage(null);
    setMode('hub');
  }

  function enterLevelJourney() {
    const targetLevel: VocabularyDeck['level'] = selectedLevel;
    const current = learningProgress[selectedLevel] || { lesson: 0, stage: 0, startedOn: dayKey, history: {} };
    const availableDecks = vocabularyDecks.map((deck,index)=>deck.level===targetLevel?index:-1).filter(index=>index>=0);
    const lessonDeck = availableDecks[current.lesson % availableDecks.length];
    if (!learningProgress[selectedLevel]) saveLearningProgress({ ...learningProgress, [selectedLevel]: current });
    if (lessonDeck >= 0) setVocabDeckIndex(lessonDeck);
    setReviewingStage(null);
    setMode('hub');
  }

  function openSkill(nextMode: PracticeMode) {
    setMode(nextMode);
    setComprehensionAnswer(null);
    setWritingText('');
    setWritingEvaluated(false);
    setSpeakingActive(false);
    setShowSpeakingModel(false);
  }

  function playPortuguese(textToSpeak: string) {
    void playPortugueseAudio(textToSpeak, selectedLevel);
  }

  function saveVocabSession(overrides: Partial<{ deckIndex: number; knownWords: number[]; sentences: string[]; phase: VocabPhase; quizIndex: number; quizScore: number; revealedReview: number[]; completed: boolean }>) {
    localStorage.setItem(`fala-vocab-session-${dayKey}-${selectedLevel}`, JSON.stringify({
      deckIndex: vocabDeckIndex,
      knownWords,
      sentences: vocabSentences,
      phase: vocabPhase,
      quizIndex: vocabQuizIndex,
      quizScore: vocabQuizScore,
      revealedReview,
      completed: vocabPhase === 'done',
      ...overrides,
    }));
  }

  function saveVocabLoopStats(nextStats: VocabLoopStats) {
    setVocabLoopStats(nextStats);
    localStorage.setItem(`fala-vocab-loop-${selectedLevel}`, JSON.stringify(nextStats));
  }

  function recordVocabMistake(word: string) {
    const nextMistakes = [word, ...vocabLoopStats.mistakeWords.filter(item => item !== word)].slice(0, 30);
    saveVocabLoopStats({ ...vocabLoopStats, mistakeWords: nextMistakes });
  }

  function updateVocabSentence(index: number, sentence: string) {
    const next = [...vocabSentences];
    next[index] = sentence;
    setVocabSentences(next);
    setVocabPracticeResult('idle');
    saveVocabSession({ sentences: next });
  }

  function checkVocabPractice(event: FormEvent) {
    event.preventDefault();
    const answer = (vocabSentences[vocabQuizIndex] || '').trim().toLocaleLowerCase('pt-BR').replace(/\s+/g, ' ');
    const expected = vocabWordPractice.answer.toLocaleLowerCase('pt-BR').replace(/\s+/g, ' ');
    const correct = answer === expected;
    setVocabPracticeResult(correct ? 'correct' : 'wrong');
    if (!correct) recordVocabMistake(vocabQuizWord.pt);
  }

  function completeVocabWord(index: number) {
    const next = knownWords.includes(index) ? knownWords.filter(item => item !== index) : [...knownWords, index];
    setKnownWords(next);
    saveVocabSession({ knownWords: next });
  }

  function startVocabQuiz() {
    if (knownWords.length < 10) return;
    setVocabPhase('quiz');
    setVocabQuizIndex(0);
    setVocabQuizChoice(null);
    setVocabQuizScore(0);
    setVocabPracticeResult('idle');
    saveVocabSession({ phase: 'quiz', quizIndex: 0, quizScore: 0 });
  }

  function chooseVocabAnswer(index: number) {
    if (vocabQuizChoice === null) {
      setVocabQuizChoice(index);
      setVocabPracticeResult('idle');
      if (index !== vocabQuizIndex) recordVocabMistake(vocabQuizWord.pt);
    }
  }

  function advanceVocabQuiz() {
    if (vocabQuizChoice !== vocabQuizIndex || vocabPracticeResult !== 'correct') return;
    const nextScore = vocabQuizScore + (vocabQuizChoice === vocabQuizIndex ? 1 : 0);
    if (vocabQuizIndex === todaysWords.length - 1) {
      setVocabQuizScore(nextScore);
      setVocabQuizChoice(null);
      setVocabPracticeResult('idle');
      setVocabPhase('review');
      saveVocabSession({ phase: 'review', quizIndex: vocabQuizIndex, quizScore: nextScore });
      return;
    }
    const nextIndex = vocabQuizIndex + 1;
    setVocabQuizScore(nextScore);
    setVocabQuizIndex(nextIndex);
    setVocabQuizChoice(null);
    setVocabPracticeResult('idle');
    saveVocabSession({ quizIndex: nextIndex, quizScore: nextScore });
  }

  function revealReviewWord(index: number) {
    if (revealedReview.includes(index)) return;
    const next = [...revealedReview, index];
    setRevealedReview(next);
    saveVocabSession({ revealedReview: next });
  }

  function completeCheckIn() {
    if (revealedReview.length < reviewItems.length) return;
    const completedTopics = [...new Set([...vocabLoopStats.completedTopics, vocabDeckIndex])];
    const countedToday = vocabLoopStats.lastCompletedDate === dayKey;
    const nextStats = {
      ...vocabLoopStats,
      sessions: countedToday ? vocabLoopStats.sessions : vocabLoopStats.sessions + 1,
      completedTopics,
      lastCompletedDate: dayKey,
    };
    saveVocabLoopStats(nextStats);
    localStorage.setItem(`fala-checkin-${dayKey}-${selectedLevel}`, 'done');
    localStorage.setItem(`fala-vocab-next-deck-${selectedLevel}`, String(nextDeckIndex));
    setCheckedIn(true);
    setVocabPhase('done');
    saveVocabSession({ phase: 'done', completed: true });
    completeJourneyStage(0);
  }

  function startNextVocabDeck() {
    const nextDeck = nextDeckIndex;
    if (levelDeckIndices.indexOf(nextDeck) === 0) {
      const nextStats = { ...vocabLoopStats, cycle: vocabLoopStats.cycle + 1, completedTopics: [] };
      saveVocabLoopStats(nextStats);
    }
    setVocabDeckIndex(nextDeck);
    setKnownWords([]);
    setVocabSentences([]);
    setVocabPhase('learn');
    setVocabQuizIndex(0);
    setVocabQuizChoice(null);
    setVocabQuizScore(0);
    setVocabPracticeResult('idle');
    setRevealedReview([]);
    localStorage.setItem(`fala-vocab-next-deck-${selectedLevel}`, String(nextDeck));
    saveVocabSession({ deckIndex: nextDeck, knownWords: [], sentences: [], phase: 'learn', quizIndex: 0, quizScore: 0, revealedReview: [], completed: false });
  }

  function restartVocabReview() {
    setVocabPhase('review');
    setRevealedReview([]);
    saveVocabSession({ phase: 'review', revealedReview: [], completed: false });
  }

  function checkVerb(event: FormEvent) {
    event.preventDefault();
    if (verbResult !== 'idle' || verbComplete) return;
    const answer = verbAnswer.trim().toLocaleLowerCase('pt-BR');
    const match = verb.accepted.find(item => item.form === answer);
    const nextScore = verbScore + (match ? 1 : 0);
    const nextMistakes = match ? verbMistakes : [...verbMistakes, `${verb.infinitive}: ${verb.accepted.map(item => item.form).join(' / ')}`];
    setVerbResult(match ? 'correct' : 'wrong');
    setVerbScore(nextScore);
    setVerbMistakes(nextMistakes);
    setVerbExplanation(match ? (language === 'zh' ? match.zh : match.pt) : (language === 'zh' ? verb.accepted[0].zh : verb.accepted[0].pt));
    localStorage.setItem(`fala-verb-session-${dayKey}-${selectedLevel}`, JSON.stringify({ step: verbStep, round: verbRound, score: nextScore, mistakes: nextMistakes, complete: false }));
  }

  function nextVerb() {
    if (verbStep === 4) {
      setVerbComplete(true);
      localStorage.setItem(`fala-verb-session-${dayKey}-${selectedLevel}`, JSON.stringify({ step: 4, round: verbRound, score: verbScore, mistakes: verbMistakes, complete: true }));
      return;
    }
    const nextStep = verbStep + 1;
    setVerbStep(nextStep);
    setVerbAnswer('');
    setVerbResult('idle');
    setVerbExplanation('');
    localStorage.setItem(`fala-verb-session-${dayKey}-${selectedLevel}`, JSON.stringify({ step: nextStep, round: verbRound, score: verbScore, mistakes: verbMistakes, complete: false }));
  }

  function restartVerbPractice() {
    const nextRound = verbRound + 1;
    setVerbStep(0);
    setVerbRound(nextRound);
    setVerbScore(0);
    setVerbComplete(false);
    setVerbMistakes([]);
    setVerbAnswer('');
    setVerbResult('idle');
    setVerbExplanation('');
    localStorage.setItem(`fala-verb-session-${dayKey}-${selectedLevel}`, JSON.stringify({ step: 0, round: nextRound, score: 0, mistakes: [], complete: false }));
  }

  function nextGender(choice: GenderValue) {
    if (genderChoice === null) setGenderChoice(choice);
  }

  function advanceGender() {
    if (genderChoice === null) return;
    const nextScore = genderScore + (genderChoice === gender.gender ? 1 : 0);
    if (genderStep === GENDER_STAGE_SIZE - 1) {
      setGenderScore(nextScore);
      setGenderComplete(true);
      setGenderChoice(null);
      localStorage.setItem(`fala-gender-${dayKey}-${selectedLevel}`, JSON.stringify({ stage: genderStage, step: genderStep, score: nextScore, complete: true }));
      localStorage.setItem('fala-gender-next-stage', String((genderStage + 1) % GENDER_STAGE_COUNT));
      return;
    }
    const nextStep = genderStep + 1;
    setGenderScore(nextScore);
    setGenderStep(nextStep);
    setGenderChoice(null);
    localStorage.setItem(`fala-gender-${dayKey}-${selectedLevel}`, JSON.stringify({ stage: genderStage, step: nextStep, score: nextScore, complete: false }));
  }

  function startNextGenderStage() {
    const nextStage = (genderStage + 1) % GENDER_STAGE_COUNT;
    setGenderStage(nextStage);
    setGenderStep(0);
    setGenderScore(0);
    setGenderComplete(false);
    setGenderChoice(null);
    localStorage.setItem('fala-gender-next-stage', String(nextStage));
    localStorage.setItem(`fala-gender-${dayKey}-${selectedLevel}`, JSON.stringify({ stage: nextStage, step: 0, score: 0, complete: false }));
  }

  function finishGenderToday() {
    localStorage.setItem('fala-gender-next-stage', String((genderStage + 1) % GENDER_STAGE_COUNT));
    setMode('hub');
  }

  if (mode === 'level-select') return <div className="screen-enter min-h-[790px] px-6 pb-10 pt-7">
    <header className="learning-header"><div><p className="eyebrow">Fala Português</p><h1>{language==='zh'?'选择你的难度':'Escolha o seu nível'}</h1></div><div aria-label={c.profile}>Q</div></header>
    <section className="level-gate-hero mt-7"><span>01</span><h2>{language==='zh'?'先确定起点，再开始闯关':'Defina o ponto de partida'}</h2><p>{language==='zh'?'选择最接近你当前水平的等级，之后仍可以随时更改。':'Escolha o nível mais próximo do seu momento atual. Você poderá mudar depois.'}</p></section>
    <div className="level-gate-grid mt-5">{cefrLevels.map((level,index)=><button key={level} onClick={()=>chooseLevel(level)} className={selectedLevel===level?'active':''}><span>{index+1}</span><strong>{level}</strong><small>{language==='zh'?cefrInfo[level].zh:cefrInfo[level].pt}</small><b>{selectedLevel===level?'✓':'→'}</b></button>)}</div>
    <section className="selected-level-panel mt-5"><div><small>{language==='zh'?'当前选择':'Nível escolhido'}</small><strong>{selectedLevel}</strong></div><p>{language==='zh'?cefrInfo[selectedLevel].zh:cefrInfo[selectedLevel].pt}</p></section>
    <button className="enter-journey-button mt-4" onClick={enterLevelJourney}><span>{todayLearningRecord?.completed?(language==='zh'?'查看今日记录':'Ver o registo de hoje'):activeLearningProgress.stage>0?(language==='zh'?`继续第 ${activeLearningProgress.stage+1} 关`:`Continuar na fase ${activeLearningProgress.stage+1}`):(language==='zh'?`开始第 ${activeLearningProgress.lesson+1} 课`:`Começar a lição ${activeLearningProgress.lesson+1}`)}</span><b>→</b></button>
  </div>;

  if (mode === 'hub') return <div className="screen-enter min-h-[790px] px-6 pb-28 pt-7">
    <header className="journey-header"><button onClick={()=>setMode('level-select')} aria-label={c.back}>←</button><div><p>{language==='zh'?'我的学习地图':'Meu mapa de estudo'}</p><h1>{selectedLevel} · {todayLearningRecord?.completed?(language==='zh'?'今日完成':'Concluído hoje'):(language==='zh'?`第 ${activeLearningProgress.lesson+1} 课`:`Lição ${activeLearningProgress.lesson+1}`)}</h1></div><strong>🔥 {Object.values(activeLearningProgress.history).filter(record=>record.completed).length}</strong></header>
    <section className="journey-status mt-6"><div><span>{language==='zh'?'今日闯关进度':'Progresso de hoje'}</span><b>{todayLearningRecord?.completedStages || 0}/{journeyStages.length}</b></div><div><span style={{width:`${Math.max(5, ((todayLearningRecord?.completedStages || 0) / journeyStages.length) * 100)}%`}}/></div><small>{todayLearningRecord?.completed?(language==='zh'?'今天的任务已完成；四关均可点击复习，明天自动进入下一课。':'Tarefa concluída. Você pode rever qualquer fase; amanhã continuará na próxima lição.'):(language==='zh'?'完成一关自动解锁下一关；已完成关卡可以返回复习且不重复计入进度。':'Conclua uma fase para liberar a próxima. Fases concluídas podem ser revistas sem duplicar o progresso.')}</small></section>
    <section className="learning-history mt-4"><div className="learning-history-title"><strong>{language==='zh'?'最近7天':'Últimos 7 dias'}</strong><small>{language==='zh'?'完成 · 学习中 · 未学习':'Concluído · Em curso · Sem estudo'}</small></div><div className="learning-history-days">{recentLearningDays.map(item=><div key={item.key} className={item.beforeStart?'future':item.record?.completed?'done':item.record?'partial':'missed'}><span>{item.day}</span><b>{item.record?.completed?'✓':item.record?item.record.completedStages:'·'}</b><small>{item.date}</small></div>)}</div></section>
    <div className="journey-map mt-7">{journeyStages.map((stage,index)=>{const completed=(todayLearningRecord?.completedStages||0)>index; const locked=!todayLearningRecord?.completed&&index>activeLearningProgress.stage; const current=!todayLearningRecord?.completed&&index===activeLearningProgress.stage; return <div key={stage.mode} className={`journey-node node-${index+1} ${completed?'complete':''} ${locked?'locked':''} ${current?'current':''}`}><button disabled={locked} onClick={()=>openJourneyStage(index,stage.mode)}><span>{completed?'✓':locked?'🔒':stage.icon}</span><b>{index+1}</b></button><div><small>{completed?(language==='zh'?'已完成 · 点击复习':'Concluído · Rever'):locked?(language==='zh'?'完成上一关解锁':'Complete a fase anterior'):(language==='zh'?`当前 · 第 ${index+1} 关`:`Atual · Fase ${index+1}`)}</small><strong>{stage.title}</strong><p>{stage.meta}</p></div></div>})}</div>
    <Nav c={c} active="practice" onPractice={()=>setMode('hub')} onVerbs={()=>setMode('verbs')} onProfile={()=>setMode('profile')}/>
  </div>;

  if (mode === 'profile') return <div className="screen-enter min-h-[790px] px-6 pb-28 pt-7">
    <header className="profile-header"><div><p className="eyebrow">{profileUi.nickname}</p><h1>{profileNickname}</h1><small>{profileUi.subtitle}</small></div><span>{selectedLevel}</span></header>
    <section className="profile-overview mt-6">
      <article><small>{profileUi.streak}</small><strong>{profileStreakDays}</strong><span>{language==='zh'?'天':'dias'}</span></article>
      <article><small>{profileUi.totalDays}</small><strong>{completedDayKeys.size}</strong><span>{language==='zh'?'天':'dias'}</span></article>
      <article className={todayLearningRecord?.completed?'done':''}><small>{profileUi.todayDone}</small><strong>{todayLearningRecord?.completed?'✓':(todayLearningRecord?.completedStages || 0)}</strong><span>{todayLearningRecord?.completed?profileUi.done:profileUi.pending}</span></article>
    </section>
    <section className="profile-card mt-4">
      <div className="profile-card-title"><strong>{profileUi.levelProgress}</strong><span>{currentLevelProgress}%</span></div>
      <div className="profile-progress"><span style={{width:`${Math.max(6,currentLevelProgress)}%`}}/></div>
      <div className="profile-metrics">
        <span><b>{selectedLevel} · {activeLearningProgress.lesson + 1}/{levelDeckIndices.length}</b><small>{profileUi.currentLesson}</small></span>
        <span><b>{learnedWordEstimate}</b><small>{profileUi.learnedWords}</small></span>
        <span><b>{monthlyCompletionRate}%</b><small>{profileUi.monthRate}</small></span>
      </div>
    </section>
    <section className="profile-calendar mt-4">
      <div className="profile-calendar-head">
        <button type="button" onClick={()=>setProfileMonthIndex(index=>Math.max(0,index-1))} disabled={profileMonthIndex===0}>↑</button>
        <div><strong>{profileUi.checkinCalendar}</strong><span>{profileCalendarMonth.label} · {profileUi.checkinRange}</span></div>
        <button type="button" onClick={()=>setProfileMonthIndex(index=>Math.min(profileCalendarMonths.length-1,index+1))} disabled={profileMonthIndex===profileCalendarMonths.length-1}>↓</button>
      </div>
      <div className="profile-calendar-legend"><span className="done"/>{language==='zh'?'已完成':'Concluído'}<span className="partial"/>{language==='zh'?'学习中':'Em curso'}<span/>{language==='zh'?'未学习':'Sem estudo'}</div>
      <div className="profile-month-grid">
        {Array.from({length: profileCalendarMonth.firstWeekday}).map((_, index) => <i key={`empty-${index}`}/>)}
        {profileCalendarMonth.days.map(item => <span key={item.key} className={item.record?.completed?'done':item.record?'partial':''}>{item.day}</span>)}
      </div>
    </section>
    <section className="profile-two-col mt-4">
      <article className="profile-card compact"><div className="profile-card-title"><strong>{profileUi.vocabulary}</strong><span>{vocabLoopStats.cycle}</span></div><p><b>{learnedWordEstimate}</b>{profileUi.learnedWords}</p><p><b>{activeMistakeWords.length}</b>{profileUi.reviewWords}</p></article>
      <article className="profile-card compact"><div className="profile-card-title"><strong>{profileUi.practice}</strong><span>{profileUi.next}</span></div><p><b>{Object.values(activeLearningProgress.history).filter(record=>record.completedStages>=2).length}</b>{skillUi.listening}</p><p><b>{Object.values(activeLearningProgress.history).filter(record=>record.completedStages>=4).length}</b>{skillUi.speaking}</p></article>
    </section>
    <section className="profile-settings mt-4">
      <h2>{profileUi.settings}</h2>
      <div><span>{profileUi.nickname}</span><strong>{profileNickname}</strong></div>
      <div><span>{profileUi.level}</span><strong>{selectedLevel}</strong></div>
      <div><span>{profileUi.dailyGoal}</span><strong>10 {language==='zh'?'词 / 天':'palavras/dia'}</strong></div>
      <div><span>{profileUi.display}</span><strong>{language==='zh'?'中文':'Português'}</strong></div>
    </section>
    <Nav c={c} active="profile" onPractice={()=>setMode('hub')} onVerbs={()=>setMode('verbs')} onProfile={()=>setMode('profile')}/>
  </div>;

  if (mode === 'skills') return <div className="screen-enter min-h-[790px] px-6 pb-8 pt-7">
    <TopBar c={c} title={skillUi.title} onBack={()=>setMode('hub')}/>
    <section className="cefr-panel mt-7 rounded-[26px] p-5"><div className="flex items-end justify-between gap-3"><div><p className="eyebrow">{skillUi.chooseLevel}</p><h1 className="mt-1 text-3xl font-black">{selectedLevel}</h1></div><span className="cefr-badge">CEFR</span></div><p className="mt-3 text-sm text-[#18352f]/60">{language==='zh'?cefrInfo[selectedLevel].zh:cefrInfo[selectedLevel].pt}</p><div className="cefr-selector mt-5">{cefrLevels.map(level=><button key={level} onClick={()=>chooseLevel(level)} className={selectedLevel===level?'active':''}>{level}</button>)}</div></section>
    <p className="mt-5 text-sm text-[#18352f]/60">{skillUi.subtitle}</p>
    <div className="skill-grid mt-4">
      <button onClick={()=>openSkill('listening')}><span>🎧</span><strong>{skillUi.listening}</strong><small>{skillUi.listeningMeta}</small></button>
      <button onClick={()=>openSkill('speaking')}><span>◉</span><strong>{skillUi.speaking}</strong><small>{skillUi.speakingMeta}</small></button>
      <button onClick={()=>openSkill('reading')}><span>文</span><strong>{skillUi.reading}</strong><small>{skillUi.readingMeta}</small></button>
    </div>
    <button onClick={()=>setMode('hub')} className="mt-6 w-full text-sm font-bold text-[#18352f]/55">← {ui.back}</button>
  </div>;

  return <div className="screen-enter min-h-[790px] px-6 pb-8 pt-7">
    <TopBar c={c} title={mode==='vocab'?ui.vocab:mode==='verbs'?ui.verbs:mode==='gender'?ui.gender:mode==='listening'?skillUi.listening:mode==='speaking'?skillUi.speaking:mode==='reading'?skillUi.reading:skillUi.writing} onBack={returnToJourney}/>
    {reviewingStage!==null&&<section className="review-mode-banner mt-5"><div><span>↻</span><p><strong>{language==='zh'?`正在复习第 ${reviewingStage+1} 关`:`Revisão da fase ${reviewingStage+1}`}</strong><small>{language==='zh'?'本次练习不会重复增加今日进度':'Esta revisão não duplica o progresso de hoje'}</small></p></div><button onClick={returnToJourney}>{language==='zh'?'返回学习地图':'Voltar ao mapa'} →</button></section>}
    {mode === 'vocab' && <section className="study-panel vocab-session mt-8 rounded-[28px] p-5">
      <div className="vocab-deck-hero">
        <div><p className="eyebrow">{ui.today}</p><h1>{language === 'zh' ? vocabDeck.topicZh : vocabDeck.topicPt}</h1><small>{ui.lesson} {levelDeckPosition + 1}{ui.lessonSuffix} / {levelDeckIndices.length} · {vocabDeck.level}</small></div>
        <strong>15–20<small>MIN</small></strong>
      </div>
      <p className="vocab-library-note">{levelLibraryNote}</p>
      <div className="vocab-loop-summary">
        <span><b>{loopUi.cycle} {vocabLoopStats.cycle}</b>{loopUi.cycleNames[loopFocusIndex]}</span>
        <span><b>{loopUi.topics}</b>{vocabLoopStats.completedTopics.filter(index=>levelDeckIndices.includes(index)).length}/{levelDeckIndices.length}</span>
        <span><b>{loopUi.weekly}</b>{weeklySessions === 0 && vocabLoopStats.sessions > 0 ? loopUi.weeklyReady : `${loopUi.weeklyLeft} ${7 - weeklySessions} ${loopUi.weeklyUnit}`}</span>
      </div>
      {activeMistakeWords.length > 0 && <p className="vocab-mistake-note">{loopUi.mistakes}: {activeMistakeWords.join(' · ')}</p>}
      <div className="vocab-session-route">
        <div className={vocabPhase === 'learn' ? 'active' : vocabPhase !== 'learn' ? 'done' : ''}><b>1</b><span>{ui.learnPhase}<small>{ui.learnTime}</small></span></div>
        <div className={vocabPhase === 'quiz' ? 'active' : ['review','done'].includes(vocabPhase) ? 'done' : ''}><b>2</b><span>{ui.quizPhase}<small>{ui.quizTime}</small></span></div>
        <div className={vocabPhase === 'review' ? 'active' : vocabPhase === 'done' ? 'done' : ''}><b>3</b><span>{ui.reviewPhase}<small>{ui.reviewTime}</small></span></div>
      </div>
      <div className="vocab-progress mt-4"><span style={{width:`${vocabProgressPercent}%`}}/></div>

      {vocabPhase === 'learn' && <>
        <div className="vocab-section-heading"><span>{ui.learnPhase}</span><strong>{completedVocabWords}/10</strong></div>
        <div className="vocab-list mt-4">{todaysWords.map((word,index)=>{
          const wordComplete = knownWords.includes(index);
          return <article key={word.pt} className={wordComplete?'learned':''}>
            <span className="vocab-number">{index+1}</span>
            <button className="vocab-word-main" onClick={()=>completeVocabWord(index)}><strong>{word.pt}</strong><small>{word.zh}</small><em>{word.example}</em></button>
            <button className="vocab-audio" onClick={()=>playPortuguese(word.example)} aria-label={`${ui.listen}: ${word.pt}`}><b>▶</b><small>{ui.listen}</small></button>
          </article>;
        })}</div>
        <button onClick={startVocabQuiz} disabled={completedVocabWords<10} className="primary-wide mt-6"><span>2</span>{ui.check} · {completedVocabWords}/10</button>
      </>}

      {vocabPhase === 'quiz' && <div className="vocab-quiz mt-6">
        <div className="vocab-quiz-status"><span>{ui.quizPhase}</span><b>{vocabQuizIndex + 1}/10</b><small>✓ {ui.score} {vocabQuizScore + (vocabQuizChoice === vocabQuizIndex ? 1 : 0)}</small></div>
        <p className="vocab-quiz-instruction">{ui.quizPrompt}</p>
        <div className="vocab-context-card"><button onClick={()=>playPortuguese(vocabQuizWord.example)} aria-label={ui.listen}>▶</button><span><strong>{vocabQuizWord.pt}</strong><small>{vocabQuizWord.example}</small></span></div>
        <p className="vocab-choice-label">{ui.chooseMeaning}</p>
        <div className="vocab-meaning-options">{vocabQuizChoices.map(index=><button key={index} disabled={vocabQuizChoice !== null} onClick={()=>chooseVocabAnswer(index)} className={vocabQuizChoice === null ? '' : index === vocabQuizIndex ? 'correct' : vocabQuizChoice === index ? 'wrong' : ''}>{todaysWords[index].zh}</button>)}</div>
        {vocabQuizChoice !== null && <div className={`answer-feedback mt-5 ${vocabQuizChoice === vocabQuizIndex ? 'correct' : 'wrong'}`}>
          <strong>{vocabQuizChoice === vocabQuizIndex ? `${ui.correct} ${vocabQuizWord.pt}` : `${ui.wrong} “${vocabQuizWord.zh}”`}</strong>
          <small>{vocabQuizWord.example}</small>
          <div className="grammar-detail">{language === 'zh' ? `先用例句理解 ${vocabQuizWord.pt}，再把“词义＋句子”一起记，比孤立背词更牢。` : `Aprenda ${vocabQuizWord.pt} junto com a frase: significado e contexto formam uma memória mais forte.`}</div>
          {vocabQuizChoice === vocabQuizIndex ? <>
            <div className="vocab-quiz-compose vocab-cloze-practice">
              <div className="vocab-practice-heading">
                <span>{vocabWordPractice.kind === 'verb' ? ui.practiceKindVerb : vocabWordPractice.kind === 'plural' ? ui.practiceKindPlural : vocabWordPractice.kind === 'agreement' ? ui.practiceKindAgreement : ui.practiceKindContext}</span>
                <button type="button" onClick={()=>playPortuguese(vocabWordPractice.sentence.replace('___', vocabWordPractice.answer))} aria-label={ui.listen}>▶ {ui.listen}</button>
              </div>
              <label htmlFor="vocab-quiz-sentence">{ui.sentenceTask}</label>
              <p className="vocab-cloze-instruction">{language === 'zh' ? vocabWordPractice.instructionZh : vocabWordPractice.instructionPt}</p>
              <p className="vocab-cloze-sentence">{vocabWordPractice.sentence}</p>
              <form onSubmit={checkVocabPractice}>
                <input id="vocab-quiz-sentence" value={vocabSentences[vocabQuizIndex] || ''} onChange={event=>updateVocabSentence(vocabQuizIndex,event.target.value)} placeholder={ui.sentencePlaceholder} autoComplete="off" spellCheck={false}/>
                <button type="submit" disabled={!(vocabSentences[vocabQuizIndex] || '').trim()}>✓ {ui.saveSentence}</button>
              </form>
              <small className="vocab-answer-hint">{ui.sentenceHint}</small>
              {vocabPracticeResult !== 'idle' && <div className={`vocab-practice-feedback ${vocabPracticeResult}`}>
                <strong>{vocabPracticeResult === 'correct' ? `✓ ${ui.sentenceSaved}: ${vocabWordPractice.answer}` : `${ui.wrong} “${vocabWordPractice.answer}”`}</strong>
                <small>{ui.answerAnalysis}</small>
                <p>{language === 'zh' ? vocabWordPractice.explanationZh : vocabWordPractice.explanationPt}</p>
                {vocabPracticeResult === 'wrong' && <em>↻ {ui.retryForm}</em>}
              </div>}
            </div>
            <button className="next-question" disabled={vocabPracticeResult !== 'correct'} onClick={advanceVocabQuiz}><span>{vocabQuizIndex === 9 ? ui.startReview : ui.nextQuiz}</span><b aria-hidden="true">→</b></button>
          </> : <button className="retry-choice" onClick={()=>{setVocabQuizChoice(null);setVocabPracticeResult('idle')}}>↻ {ui.tryAgain}</button>}
        </div>}
      </div>}

      {vocabPhase === 'review' && <div className="vocab-review mt-6">
        <div className="vocab-quiz-status"><span>{ui.reviewPhase}</span><b>{revealedReview.length}/{reviewItems.length}</b><small>✓ {ui.score} {vocabQuizScore}/10</small></div>
        <p className="vocab-quiz-instruction">{language === 'zh' ? '先看中文在心里说出葡语，再点击卡片核对。' : 'Veja o significado, diga a palavra em voz alta e toque para conferir.'}</p>
        <div className="recall-list">{reviewItems.map(item=>{
          const word = item.word;
          const revealed = revealedReview.includes(item.id);
          return <button key={`${item.id}-${word.pt}`} onClick={()=>revealReviewWord(item.id)} className={revealed?'revealed':''}><span>{word.zh}</span><strong>{revealed?word.pt:'••••••'}</strong><small>{revealed?word.example:ui.reveal}</small></button>;
        })}</div>
        <button onClick={completeCheckIn} disabled={revealedReview.length<reviewItems.length} className="primary-wide mt-6"><span>✓</span>{ui.finishToday} · {revealedReview.length}/{reviewItems.length}</button>
      </div>}

      {vocabPhase === 'done' && <div className="answer-feedback correct vocab-complete mt-7">
        <span className="completion-medal" aria-hidden="true">★</span>
        <p className="eyebrow">{ui.checked}</p>
        <h1>{ui.dailyDone}</h1>
        <p>{ui.dailySummary}</p>
        <div className="vocab-day-result"><span>{ui.result}<b>{vocabQuizScore}/10</b></span><span>{vocabLoopStats.sessions}<small>{loopUi.sessions}</small></span><span>{vocabLoopStats.mistakeWords.length}<small>{loopUi.mistakes}</small></span></div>
        <p className="vocab-loop-done">{levelDeckPosition === levelDeckIndices.length - 1 ? `${loopUi.afterAll} ${loopUi.nextCycle}: ${nextCycle} · ${loopUi.cycleNames[(nextCycle - 1) % 4]}` : loopUi.afterAll}</p>
        <div className="next-topic"><small>{ui.tomorrowTopic}</small><strong>{language === 'zh' ? nextVocabDeck.topicZh : nextVocabDeck.topicPt} · {nextVocabDeck.level}</strong></div>
        <button className="next-question" onClick={startNextVocabDeck}><span>{ui.extraLesson}</span><b aria-hidden="true">→</b></button>
        <button className="tomorrow-button" onClick={restartVocabReview}>{ui.reviewAgain}</button>
      </div>}
    </section>}
    {mode === 'verbs' && <section className="study-panel verb-reference mt-8 rounded-[28px] p-5">
      <div className="verb-reference-hero">
        <p className="eyebrow">{language === 'zh' ? '知识巩固' : 'Revisão gramatical'}</p>
        <h1>{language === 'zh' ? '常见动词变位表' : 'Tabela de conjugação'}</h1>
        <p>{language === 'zh' ? '左边看动词，上方看时态，格子里只保留常用人称变位。' : 'Verbos à esquerda, tempos no topo e apenas formas nas células.'}</p>
      </div>
      <div className="verb-reference-section">
        <h2>{language === 'zh' ? '规则动词变位' : 'Verbos regulares'}</h2>
        <div className="conjugation-sheet"><table><thead><tr><th>{language === 'zh' ? '动词' : 'Verbo'}</th>{commonTenses.map(tense => <th key={tense.zh}>{language === 'zh' ? tense.zh : tense.pt}</th>)}</tr></thead><tbody>
          {regularConjugationTables.map(table => <tr key={table.verb}><th><span>{table.ending}</span><strong>{table.verb}</strong></th>{commonTenses.map(tense => {
            const row = table.rows.find(item => item.tenseZh === tense.zh);
            return <td key={`${table.verb}-${tense.zh}`}>{row ? row.forms.map((form, index) => <span key={`${form}-${index}`}>{form}</span>) : null}</td>;
          })}</tr>)}
        </tbody></table></div>
      </div>
      <div className="verb-reference-section">
        <h2>{language === 'zh' ? '高频不规则变位' : 'Irregulares frequentes'}</h2>
        <div className="conjugation-sheet irregular"><table><thead><tr><th>{language === 'zh' ? '动词' : 'Verbo'}</th>{commonTenses.map(tense => <th key={tense.zh}>{language === 'zh' ? tense.zh : tense.pt}</th>)}</tr></thead><tbody>
          {irregularConjugationTables.map(table => <tr key={table.verb}><th><span>{table.verb}</span><strong>{language === 'zh' ? table.titleZh : table.titlePt}</strong></th>{commonTenses.map(tense => {
            const row = table.rows.find(item => item.tenseZh === tense.zh);
            return <td key={`${table.verb}-${tense.zh}`}>{row ? row.forms.map((form, index) => <span key={`${form}-${index}`}>{form}</span>) : null}</td>;
          })}</tr>)}
        </tbody></table></div>
      </div>
    </section>}
    {mode === 'gender' && (genderComplete ?
      <section className="study-panel gender-complete mt-8 rounded-[28px] p-6 text-center">
        <div className="answer-feedback correct gender-success">
          <span className="completion-medal" aria-hidden="true">★</span>
          <p className="eyebrow">{ui.stage} {genderStage + 1}{ui.stageSuffix} · 10/10</p>
          <h1>{ui.goalDone}</h1>
          <div className="completion-stars" aria-label={`${visibleGenderScore} / 10`}>
            {[0, 1, 2].map(star => <span key={star} className={visibleGenderScore >= [5, 8, 10][star] ? 'earned' : ''}>★</span>)}
          </div>
          <p className="completion-score"><span>{ui.result}</span><strong>{visibleGenderScore}<small>/10</small></strong></p>
          <button className="next-question" onClick={startNextGenderStage}>
            <span>{genderStage === GENDER_STAGE_COUNT - 1 ? ui.restartStage : ui.nextStage}</span><b aria-hidden="true">→</b>
          </button>
          <button className="tomorrow-button" onClick={finishGenderToday}>{ui.tomorrow}</button>
        </div>
      </section>
      :
      <section className="study-panel mt-8 rounded-[28px] p-6 text-center">
        <div className="gender-game-status">
          <span>{ui.stage} {genderStage + 1}{ui.stageSuffix}</span>
          <b>{ui.question} {genderStep + 1}/10</b>
          <small>✓ {ui.score} {visibleGenderScore}</small>
        </div>
        <div className="gender-progress"><span style={{width: `${(genderStep + (genderChoice ? 1 : 0)) * 10}%`}} /></div>
        <p className="eyebrow mt-6">{ui.genderTitle}</p>
        <h1 className="mt-5 text-4xl font-black">{gender.word}</h1>
        <p className="mt-2 text-sm text-[#18352f]/55">{gender.zh}</p>
        <p className="gender-note mt-5">{ui.neutralNote}</p>
        <p className="mt-6 text-xs font-bold text-[#18352f]/55">{ui.choose}</p>
        <div className="gender-choices mt-3">
          <button disabled={genderChoice !== null} onClick={()=>nextGender('masculine')} className={genderChoice==='masculine'?'selected':''}><b>M</b><small>{ui.masculine}</small></button>
          <button disabled={genderChoice !== null} onClick={()=>nextGender('feminine')} className={genderChoice==='feminine'?'selected':''}><b>F</b><small>{ui.feminine}</small></button>
          <button disabled={genderChoice !== null} onClick={()=>nextGender('common')} className={genderChoice==='common'?'selected':''}><b>C</b><small>{ui.common}</small></button>
        </div>
        {genderChoice && <div className={`answer-feedback mt-6 ${genderChoice===gender.gender?'correct':'wrong'}`}>
          <strong>{genderChoice===gender.gender?'✓ ': '→ '}{gender.article} {gender.word}</strong>
          <small>{language==='zh'?gender.tipZh:gender.tipPt}</small>
          <div className="grammar-detail">{language==='zh'?(gender.gender==='masculine'?`使用阳性冠词 o；形容词通常用阳性形式，例如 o ${gender.word} difícil。`:gender.gender==='feminine'?`使用阴性冠词 a；形容词通常用阴性形式，例如 a ${gender.word} importante。`:`名词形式不变，冠词随所指人物变化：o ${gender.word} / a ${gender.word}。`):(gender.gender==='masculine'?`Usa o artigo o e, em geral, concordância masculina.`:gender.gender==='feminine'?`Usa o artigo a e, em geral, concordância feminina.`:`A forma não muda; o artigo acompanha a pessoa: o ${gender.word} / a ${gender.word}.`)}</div>
          <button className="next-question" onClick={advanceGender}><span>{genderStep === GENDER_STAGE_SIZE - 1 ? ui.result : ui.next}</span><b aria-hidden="true">→</b></button>
        </div>}
      </section>
    )}
    {mode === 'listening' && <section className="study-panel skill-exercise mt-8 rounded-[28px] p-6"><div className="skill-level-row"><span>{selectedLevel}</span><small>{language==='zh'?cefrInfo[selectedLevel].zh:cefrInfo[selectedLevel].pt}</small></div><div className="audio-stage mt-6"><span>◖)))</span><p>{language==='zh'?'先听，不看文本':'Ouça antes de ler'}</p><button onClick={()=>playPortuguese(levelExercise.listening.text)}>{comprehensionAnswer===null?skillUi.play:skillUi.replay}</button></div><p className="mt-6 text-xs font-black text-[#18352f]/55">{skillUi.question}</p><h2 className="mt-2 text-lg font-black">{language==='zh'?levelExercise.listening.questionZh:levelExercise.listening.questionPt}</h2><div className="exercise-options mt-4">{levelExercise.listening.options.map((option,index)=><button key={option} onClick={()=>{setComprehensionAnswer(index);if(index===levelExercise.listening.answer)completeJourneyStage(1)}} className={comprehensionAnswer===index?(index===levelExercise.listening.answer?'correct':'wrong'):''}>{option}</button>)}</div>{comprehensionAnswer!==null&&<div className={`answer-feedback detailed mt-5 ${comprehensionAnswer===levelExercise.listening.answer?'correct':'wrong'}`}><strong>{comprehensionAnswer===levelExercise.listening.answer?skillUi.correct:skillUi.wrong}</strong><dl><div><dt>{skillUi.correctAnswer}</dt><dd>{levelExercise.listening.options[levelExercise.listening.answer]}</dd></div><div><dt>{skillUi.evidence}</dt><dd>“{cefrExplanations[selectedLevel].listening.key}”</dd></div><div><dt>{skillUi.analysis}</dt><dd>{language==='zh'?cefrExplanations[selectedLevel].listening.zh:cefrExplanations[selectedLevel].listening.pt}</dd></div><div><dt>{skillUi.transcript}</dt><dd>{levelExercise.listening.text}</dd></div></dl></div>}</section>}
    {mode === 'speaking' && <section className="study-panel skill-exercise mt-8 rounded-[28px] p-6"><div className="skill-level-row"><span>{selectedLevel}</span><small>{skillUi.speakingTask}</small></div><h1 className="mt-5 text-xl font-black leading-relaxed">{language==='zh'?levelExercise.speaking.promptZh:levelExercise.speaking.promptPt}</h1><p className="mt-6 text-xs font-black text-[#18352f]/55">{skillUi.goals}</p><div className="speaking-cues mt-3">{levelExercise.speaking.cues.map(cue=><span key={cue}>{cue}</span>)}</div><button onClick={()=>{playPortuguese(levelExercise.speaking.model);setShowSpeakingModel(true)}} className="model-button mt-6">▶ {skillUi.model}</button>{showSpeakingModel&&<div className="model-analysis mt-4"><strong>{skillUi.modelAnswer}</strong><p>{levelExercise.speaking.model}</p><small>{language==='zh'?cefrExplanations[selectedLevel].speaking.zh:cefrExplanations[selectedLevel].speaking.pt}</small></div>}<div className={`speaking-timer mt-6 ${speakingActive?'active':''}`}><span>{speakingActive?'●':'○'}</span><p>{speakingActive?(language==='zh'?'请连续表达，尽量覆盖三个目标':'Fale continuamente e use os três objetivos'):(language==='zh'?'准备好后开始口语计时':'Comece quando estiver pronto')}</p></div><button onClick={()=>{if(speakingActive)completeJourneyStage(3);setSpeakingActive(!speakingActive)}} className="primary-wide mt-5"><span>{speakingActive?'✓':'◉'}</span>{speakingActive?skillUi.finishSpeaking:skillUi.startSpeaking}</button></section>}
    {mode === 'reading' && <section className="study-panel skill-exercise mt-8 rounded-[28px] p-6"><div className="skill-level-row"><span>{selectedLevel}</span><small>{skillUi.readingTask}</small></div><article className="reading-passage mt-5">{levelExercise.reading.text}</article><p className="mt-6 text-xs font-black text-[#18352f]/55">{skillUi.question}</p><h2 className="mt-2 text-lg font-black">{language==='zh'?levelExercise.reading.questionZh:levelExercise.reading.questionPt}</h2><div className="exercise-options mt-4">{levelExercise.reading.options.map((option,index)=><button key={option} onClick={()=>{setComprehensionAnswer(index);if(index===levelExercise.reading.answer)completeJourneyStage(2)}} className={comprehensionAnswer===index?(index===levelExercise.reading.answer?'correct':'wrong'):''}>{option}</button>)}</div>{comprehensionAnswer!==null&&<div className={`answer-feedback detailed mt-5 ${comprehensionAnswer===levelExercise.reading.answer?'correct':'wrong'}`}><strong>{comprehensionAnswer===levelExercise.reading.answer?skillUi.correct:skillUi.wrong}</strong><dl><div><dt>{skillUi.correctAnswer}</dt><dd>{levelExercise.reading.options[levelExercise.reading.answer]}</dd></div><div><dt>{skillUi.evidence}</dt><dd>“{cefrExplanations[selectedLevel].reading.key}”</dd></div><div><dt>{skillUi.analysis}</dt><dd>{language==='zh'?cefrExplanations[selectedLevel].reading.zh:cefrExplanations[selectedLevel].reading.pt}</dd></div></dl></div>}</section>}
    <button onClick={returnToJourney} className="mt-6 w-full text-sm font-bold text-[#18352f]/55">← {reviewingStage!==null?(language==='zh'?'返回学习地图':'Voltar ao mapa'):ui.back}</button>
  </div>;
}

function TopBar({ c, title, onBack, action }: { c: Copy; title: string; onBack: () => void; action?: string }) { return <header className="grid grid-cols-[44px_1fr_44px] items-center"><button onClick={onBack} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f1ec] text-lg font-black" aria-label={c.back}>←</button><h1 className="text-center text-base font-black">{title}</h1><span className="text-right text-xs font-bold text-[#18352f]/45">{action}</span></header>; }

function Nav({ c, active, onPractice, onVerbs = onPractice, onProfile = onPractice }: { c: Copy; active: 'practice'|'verbs'|'profile'|'review'; onPractice: () => void; onVerbs?: () => void; onProfile?: () => void }) { return <nav className="absolute-nav flex items-center justify-around" aria-label={c.navigation}><button onClick={onPractice} className={active==='practice'?'nav-active':''}>◉<span>{c.nav[1]}</span></button><button onClick={onVerbs} className={active==='verbs'?'nav-active':''}>V<span>{c === text.zh ? '巩固' : 'Revisão'}</span></button><button onClick={onProfile} className={active==='profile'?'nav-active':''}>◎<span>{c.nav[3]}</span></button></nav>; }
