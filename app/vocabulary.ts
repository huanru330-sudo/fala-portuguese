export type VocabularyWord = {
  pt: string;
  zh: string;
  example: string;
};

export type VocabularyDeck = {
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  topicZh: string;
  topicPt: string;
  words: VocabularyWord[];
};

export type VocabularyPractice = {
  kind: 'verb' | 'plural' | 'agreement' | 'context';
  sentence: string;
  answer: string;
  instructionZh: string;
  instructionPt: string;
  explanationZh: string;
  explanationPt: string;
};

type VerbSeed = { answer: string; subject: string; sentence: string; contextZh: string; contextPt: string };

const verbPractice: Record<string, VerbSeed> = {
  ser: { answer: 'somos', subject: 'nós', sentence: 'Nós ___ estudantes de português.', contextZh: '身份说明', contextPt: 'identificação' },
  ter: { answer: 'tem', subject: 'ela', sentence: 'Ela ___ duas reuniões hoje.', contextZh: '现在的情况', contextPt: 'situação atual' },
  fazer: { answer: 'faço', subject: 'eu', sentence: 'Eu ___ café todas as manhãs.', contextZh: '日常习惯', contextPt: 'hábito diário' },
  ir: { answer: 'vamos', subject: 'nós', sentence: 'Nós ___ ao mercado aos sábados.', contextZh: '日常习惯', contextPt: 'hábito' },
  poder: { answer: 'podem', subject: 'vocês', sentence: 'Vocês ___ entrar agora.', contextZh: '现在具备的可能性', contextPt: 'possibilidade atual' },
  querer: { answer: 'quero', subject: 'eu', sentence: 'Eu ___ aprender português.', contextZh: '现在的愿望', contextPt: 'vontade atual' },
  precisar: { answer: 'precisa', subject: 'ela', sentence: 'Ela ___ descansar um pouco.', contextZh: '现在的需要', contextPt: 'necessidade atual' },
  gostar: { answer: 'gostamos', subject: 'nós', sentence: 'Nós ___ de música brasileira.', contextZh: '现在的喜好', contextPt: 'preferência atual' },
  falar: { answer: 'falam', subject: 'eles', sentence: 'Eles ___ português no trabalho.', contextZh: '经常发生的动作', contextPt: 'ação habitual' },
  chegar: { answer: 'chego', subject: 'eu', sentence: 'Eu ___ cedo todos os dias.', contextZh: '日常习惯', contextPt: 'hábito diário' },
  pagar: { answer: 'pagamos', subject: 'nós', sentence: 'Nós ___ a conta com cartão.', contextZh: '一般做法', contextPt: 'ação habitual' },
  comprar: { answer: 'compra', subject: 'ela', sentence: 'Ela ___ frutas no mercado.', contextZh: '日常行为', contextPt: 'ação habitual' },
  experimentar: { answer: 'experimento', subject: 'eu', sentence: 'Eu sempre ___ a roupa antes de comprar.', contextZh: '日常习惯', contextPt: 'hábito' },
  entender: { answer: 'entendemos', subject: 'nós', sentence: 'Nós ___ a pergunta agora.', contextZh: '现在的理解状态', contextPt: 'compreensão atual' },
  explicar: { answer: 'explica', subject: 'ela', sentence: 'Ela ___ a regra com clareza.', contextZh: '经常发生的动作', contextPt: 'ação habitual' },
  concordar: { answer: 'concordo', subject: 'eu', sentence: 'Eu ___ com a sua opinião.', contextZh: '现在的看法', contextPt: 'opinião atual' },
  lembrar: { answer: 'lembra', subject: 'você', sentence: 'Você ___ o nome dele?', contextZh: '现在是否记得', contextPt: 'memória atual' },
  esquecer: { answer: 'esquecem', subject: 'eles', sentence: 'Eles sempre ___ as chaves.', contextZh: '反复发生的动作', contextPt: 'ação repetida' },
  aprender: { answer: 'aprendemos', subject: 'nós', sentence: 'Nós ___ palavras novas todos os dias.', contextZh: '日常学习', contextPt: 'aprendizagem habitual' },
  estudar: { answer: 'estuda', subject: 'ela', sentence: 'Ela ___ português à noite.', contextZh: '日常习惯', contextPt: 'hábito diário' },
  melhorar: { answer: 'melhora', subject: 'a prática', sentence: 'A prática ___ a pronúncia.', contextZh: '一般事实', contextPt: 'facto geral' },
  praticar: { answer: 'praticamos', subject: 'nós', sentence: 'Nós ___ português todos os dias.', contextZh: '日常习惯', contextPt: 'hábito diário' },
  dormir: { answer: 'durmo', subject: 'eu', sentence: 'Eu ___ oito horas por noite.', contextZh: '日常习惯', contextPt: 'hábito diário' },
  acordar: { answer: 'acorda', subject: 'ela', sentence: 'Ela ___ às sete todos os dias.', contextZh: '日常习惯', contextPt: 'hábito diário' },
  caminhar: { answer: 'caminhamos', subject: 'nós', sentence: 'Nós ___ no parque aos domingos.', contextZh: '日常习惯', contextPt: 'hábito' },
  respirar: { answer: 'respiro', subject: 'eu', sentence: 'Eu ___ devagar para me acalmar.', contextZh: '现在的动作', contextPt: 'ação atual' },
  descansar: { answer: 'descansam', subject: 'vocês', sentence: 'Vocês ___ depois do almoço.', contextZh: '日常习惯', contextPt: 'hábito' },
  marcar: { answer: 'marco', subject: 'eu', sentence: 'Eu ___ a reunião para quinta-feira.', contextZh: '现在的安排', contextPt: 'agendamento atual' },
  adiar: { answer: 'adiamos', subject: 'nós', sentence: 'Nós ___ a reunião quando necessário.', contextZh: '一般做法', contextPt: 'ação habitual' },
  começar: { answer: 'começa', subject: 'a aula', sentence: 'A aula ___ às nove.', contextZh: '固定时间安排', contextPt: 'horário regular' },
  terminar: { answer: 'terminam', subject: 'eles', sentence: 'Eles ___ o trabalho às seis.', contextZh: '日常安排', contextPt: 'rotina' },
  considerar: { answer: 'consideramos', subject: 'nós', sentence: 'Nós ___ todas as opções.', contextZh: '现在的做法', contextPt: 'ação atual' },
  depender: { answer: 'depende', subject: 'a escolha', sentence: 'A escolha ___ do preço.', contextZh: '一般事实', contextPt: 'facto geral' },
  reduzir: { answer: 'reduzimos', subject: 'nós', sentence: 'Nós ___ o uso de plástico.', contextZh: '现在采取的行动', contextPt: 'ação atual' },
  aumentar: { answer: 'aumentam', subject: 'os preços', sentence: 'Os preços ___ todos os anos.', contextZh: '反复发生的变化', contextPt: 'mudança recorrente' },
};

type NounSeed = { plural: string; article: 'o' | 'a'; sentence: string };

const nounPractice: Record<string, NounSeed> = {
  tempo: { plural: 'tempos', article: 'o', sentence: 'Foram bons ___ para a família.' },
  casa: { plural: 'casas', article: 'a', sentence: 'Estas ___ são antigas.' },
  trabalho: { plural: 'trabalhos', article: 'o', sentence: 'Terminei dois ___ hoje.' },
  coisa: { plural: 'coisas', article: 'a', sentence: 'Tenho duas ___ para contar.' },
  pessoa: { plural: 'pessoas', article: 'a', sentence: 'Há muitas ___ na praça.' },
  café: { plural: 'cafés', article: 'o', sentence: 'Pedimos dois ___ sem açúcar.' },
  cardápio: { plural: 'cardápios', article: 'o', sentence: 'Os ___ estão na mesa.' },
  pedido: { plural: 'pedidos', article: 'o', sentence: 'Os ___ já estão prontos.' },
  conta: { plural: 'contas', article: 'a', sentence: 'As ___ chegaram ao mesmo tempo.' },
  garçom: { plural: 'garçons', article: 'o', sentence: 'Os ___ trouxeram a sobremesa.' },
  viagem: { plural: 'viagens', article: 'a', sentence: 'As duas ___ foram tranquilas.' },
  aeroporto: { plural: 'aeroportos', article: 'o', sentence: 'Os ___ ficam longe do centro.' },
  passagem: { plural: 'passagens', article: 'a', sentence: 'Comprei duas ___ pela internet.' },
  mala: { plural: 'malas', article: 'a', sentence: 'As ___ são pequenas.' },
  ônibus: { plural: 'ônibus', article: 'o', sentence: 'Os ___ passam às oito.' },
  metrô: { plural: 'metrôs', article: 'o', sentence: 'Os ___ estão cheios hoje.' },
  estação: { plural: 'estações', article: 'a', sentence: 'As ___ ficam perto daqui.' },
  preço: { plural: 'preços', article: 'o', sentence: 'Os ___ aumentaram este mês.' },
  cartão: { plural: 'cartões', article: 'o', sentence: 'Aceitamos todos estes ___.' },
  tamanho: { plural: 'tamanhos', article: 'o', sentence: 'Temos vários ___ disponíveis.' },
  loja: { plural: 'lojas', article: 'a', sentence: 'As ___ fecham às seis.' },
  quarto: { plural: 'quartos', article: 'o', sentence: 'Os ___ têm janelas grandes.' },
  cozinha: { plural: 'cozinhas', article: 'a', sentence: 'As ___ são muito espaçosas.' },
  banheiro: { plural: 'banheiros', article: 'o', sentence: 'Onde ficam os ___?' },
  rua: { plural: 'ruas', article: 'a', sentence: 'Estas ___ são tranquilas.' },
  bairro: { plural: 'bairros', article: 'o', sentence: 'Estes ___ têm muitos cafés.' },
  praça: { plural: 'praças', article: 'a', sentence: 'As ___ ficam cheias no verão.' },
  mercado: { plural: 'mercados', article: 'o', sentence: 'Os ___ abrem cedo.' },
  vizinho: { plural: 'vizinhos', article: 'o', sentence: 'Meus ___ são simpáticos.' },
  endereço: { plural: 'endereços', article: 'o', sentence: 'Pode confirmar os ___?' },
  conversa: { plural: 'conversas', article: 'a', sentence: 'Tivemos duas ___ interessantes.' },
  reunião: { plural: 'reuniões', article: 'a', sentence: 'As ___ começam às duas.' },
  projeto: { plural: 'projetos', article: 'o', sentence: 'Estamos trabalhando em dois ___.' },
  prazo: { plural: 'prazos', article: 'o', sentence: 'Os ___ terminam na sexta-feira.' },
  tarefa: { plural: 'tarefas', article: 'a', sentence: 'Terminei as ___ antes do almoço.' },
  resultado: { plural: 'resultados', article: 'o', sentence: 'Os ___ foram melhores.' },
  experiência: { plural: 'experiências', article: 'a', sentence: 'Foram duas ___ muito úteis.' },
  dor: { plural: 'dores', article: 'a', sentence: 'Estas ___ começaram ontem.' },
  remédio: { plural: 'remédios', article: 'o', sentence: 'Preciso tomar estes ___.' },
  consulta: { plural: 'consultas', article: 'a', sentence: 'Tenho duas ___ amanhã.' },
  semana: { plural: 'semanas', article: 'a', sentence: 'Passei duas ___ viajando.' },
  horário: { plural: 'horários', article: 'o', sentence: 'Quais ___ são melhores para você?' },
  opinião: { plural: 'opiniões', article: 'a', sentence: 'Respeitamos todas as ___.' },
  motivo: { plural: 'motivos', article: 'o', sentence: 'Quais foram os ___ da mudança?' },
  vantagem: { plural: 'vantagens', article: 'a', sentence: 'O curso oferece muitas ___.' },
  desvantagem: { plural: 'desvantagens', article: 'a', sentence: 'Precisamos analisar as ___.' },
  notícia: { plural: 'notícias', article: 'a', sentence: 'Li duas ___ no jornal.' },
  informação: { plural: 'informações', article: 'a', sentence: 'Estas ___ são importantes.' },
  mudança: { plural: 'mudanças', article: 'a', sentence: 'A cidade passou por muitas ___.' },
  ambiente: { plural: 'ambientes', article: 'o', sentence: 'Os ___ estão mais limpos.' },
  comunidade: { plural: 'comunidades', article: 'a', sentence: 'As ___ organizaram eventos.' },
  comportamento: { plural: 'comportamentos', article: 'o', sentence: 'A tecnologia mudou nossos ___.' },
  consequência: { plural: 'consequências', article: 'a', sentence: 'Todas as escolhas têm ___.' },
};

type AgreementSeed = { answer: string; sentence: string; target: string };

const agreementPractice: Record<string, AgreementSeed> = {
  delicioso: { answer: 'deliciosas', sentence: 'As sobremesas estão ___.', target: 'sobremesas（阴性复数）' },
  barato: { answer: 'baratas', sentence: 'Estas camisetas são ___.', target: 'camisetas（阴性复数）' },
  caro: { answer: 'caras', sentence: 'As passagens estão muito ___.', target: 'passagens（阴性复数）' },
  feliz: { answer: 'felizes', sentence: 'As crianças ficaram ___.', target: 'crianças（复数）' },
  preocupado: { answer: 'preocupadas', sentence: 'Elas estão ___ com a prova.', target: 'elas（阴性复数）' },
  cansado: { answer: 'cansados', sentence: 'Nós estamos ___ depois da viagem.', target: 'nós（复数）' },
  calmo: { answer: 'calmas', sentence: 'As crianças ficaram ___.', target: 'crianças（阴性复数）' },
  melhor: { answer: 'melhores', sentence: 'Os resultados estão ___.', target: 'resultados（复数）' },
};

function pluralRuleZh(singular: string, plural: string) {
  if (singular === plural) return '这个名词的单数和复数形式相同，数量由冠词表示。';
  if (singular.endsWith('ão') && plural.endsWith('ões')) return '这里的 -ão 在复数中变为 -ões。';
  if (singular.endsWith('m') && plural.endsWith('ns')) return '词尾 -m 在复数中变为 -ns。';
  if (/[rz]$/.test(singular)) return '以 -r 或 -z 结尾的名词通常加 -es。';
  return '这个词的复数形式在词尾加 -s。';
}

function pluralRulePt(singular: string, plural: string) {
  if (singular === plural) return 'A forma do substantivo não muda; o artigo indica o plural.';
  if (singular.endsWith('ão') && plural.endsWith('ões')) return 'Neste substantivo, -ão muda para -ões no plural.';
  if (singular.endsWith('m') && plural.endsWith('ns')) return 'No plural, a terminação -m muda para -ns.';
  if (/[rz]$/.test(singular)) return 'Substantivos terminados em -r ou -z normalmente recebem -es.';
  return 'O plural desta palavra é formado com -s.';
}

function normalizePortuguese(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');
}

function exactFormInExample(example: string, word: string) {
  const source = example.toLocaleLowerCase('pt-BR');
  const target = word.toLocaleLowerCase('pt-BR');
  let start = source.indexOf(target);
  while (start >= 0) {
    const before = start === 0 ? '' : example[start - 1];
    const after = example[start + word.length] || '';
    if ((!before || !/\p{L}/u.test(before)) && (!after || !/\p{L}/u.test(after))) return example.slice(start, start + word.length);
    start = source.indexOf(target, start + 1);
  }
  return undefined;
}

function contextGap(example: string, word: string) {
  const exact = exactFormInExample(example, word);
  if (exact) return { sentence: example.replace(exact, '___'), answer: exact };

  const tokens = example.match(/\p{L}+(?:-\p{L}+)*/gu) || [];
  const normalizedWord = normalizePortuguese(word);
  const isInfinitive = /(?:ar|er|ir)$/.test(normalizedWord);
  const verbStem = isInfinitive ? normalizedWord.slice(0, -2) : '';
  const flexibleStem = /[aoe]$/.test(normalizedWord) ? normalizedWord.slice(0, -1) : normalizedWord;
  const inflected = tokens.find(token => {
    const normalizedToken = normalizePortuguese(token);
    if (isInfinitive && verbStem.length >= 3 && normalizedToken.startsWith(verbStem)) return true;
    return flexibleStem.length >= 4 && normalizedToken.startsWith(flexibleStem);
  });

  const answer = inflected || word;
  return { sentence: inflected ? example.replace(inflected, '___') : example, answer };
}

export function getVocabularyPractice(word: VocabularyWord): VocabularyPractice {
  const verb = verbPractice[word.pt];
  if (verb) return {
    kind: 'verb', sentence: verb.sentence, answer: verb.answer,
    instructionZh: `根据主语 ${verb.subject} 和句子语境，填写 ${word.pt} 的正确变位。`,
    instructionPt: `Conjugue ${word.pt} de acordo com o sujeito ${verb.subject} e o contexto.`,
    explanationZh: `主语是 ${verb.subject}，句子表达${verb.contextZh}，所以使用直陈式现在时 ${verb.answer}。`,
    explanationPt: `O sujeito é ${verb.subject} e a frase expressa ${verb.contextPt}; por isso, usamos ${verb.answer} no presente do indicativo.`,
  };

  const noun = nounPractice[word.pt];
  if (noun) {
    const pluralArticle = noun.article === 'o' ? 'os' : 'as';
    return {
      kind: 'plural', sentence: noun.sentence, answer: noun.plural,
      instructionZh: `把名词 ${word.pt} 变成复数，完成句子。`,
      instructionPt: `Passe o substantivo ${word.pt} para o plural e complete a frase.`,
      explanationZh: `${noun.article} ${word.pt} → ${pluralArticle} ${noun.plural}。${pluralRuleZh(word.pt, noun.plural)}`,
      explanationPt: `${noun.article} ${word.pt} → ${pluralArticle} ${noun.plural}. ${pluralRulePt(word.pt, noun.plural)}`,
    };
  }

  const agreement = agreementPractice[word.pt];
  if (agreement) return {
    kind: 'agreement', sentence: agreement.sentence, answer: agreement.answer,
    instructionZh: `根据 ${agreement.target}，改变形容词 ${word.pt} 的形式。`,
    instructionPt: `Faça a concordância de ${word.pt} com o nome da frase.`,
    explanationZh: `形容词要与所修饰的名词保持性、数一致，因此 ${word.pt} 在这里变为 ${agreement.answer}。`,
    explanationPt: `O adjetivo concorda em gênero e número com o substantivo; por isso, ${word.pt} fica ${agreement.answer}.`,
  };

  const gap = contextGap(word.example, word.pt);
  const changedForm = normalizePortuguese(gap.answer) !== normalizePortuguese(word.pt);
  return {
    kind: 'context', sentence: gap.sentence, answer: gap.answer,
    instructionZh: changedForm
      ? `根据主语、时态或性数关系，填写 ${word.pt} 在句中的正确形式。`
      : `根据例句语境，把 ${word.pt} 填入正确位置。`,
    instructionPt: changedForm
      ? `Complete com a forma correta de ${word.pt}, respeitando o contexto gramatical.`
      : `Complete a frase com ${word.pt} de acordo com o contexto.`,
    explanationZh: changedForm
      ? `词典形式是 ${word.pt}；根据句子的语法关系，这里需要变为 ${gap.answer}。完整句意与原例句一致。`
      : `这里考查词义和固定用法；填入 ${gap.answer} 后，句意与原例句一致。`,
    explanationPt: changedForm
      ? `A forma de dicionário é ${word.pt}; neste contexto, a forma correta é ${gap.answer}.`
      : `Aqui praticamos o significado e o uso em contexto; ${gap.answer} completa a frase.`,
  };
}

const baseVocabularyDecks: VocabularyDeck[] = [
  {
    "level": "A1",
    "topicZh": "最常用动词",
    "topicPt": "Verbos essenciais",
    "words": [
      {
        "pt": "ser",
        "zh": "是；成为",
        "example": "Quero ser mais confiante."
      },
      {
        "pt": "ter",
        "zh": "有；拥有",
        "example": "Tenho tempo agora."
      },
      {
        "pt": "fazer",
        "zh": "做；制作",
        "example": "Vou fazer um café."
      },
      {
        "pt": "ir",
        "zh": "去；将要",
        "example": "Vou ao mercado hoje."
      },
      {
        "pt": "poder",
        "zh": "能够；可以",
        "example": "Você pode me ajudar?"
      },
      {
        "pt": "querer",
        "zh": "想要",
        "example": "Quero aprender português."
      },
      {
        "pt": "precisar",
        "zh": "需要",
        "example": "Preciso praticar mais."
      },
      {
        "pt": "gostar",
        "zh": "喜欢",
        "example": "Gosto muito desta cidade."
      },
      {
        "pt": "falar",
        "zh": "说；讲话",
        "example": "Ela fala português."
      },
      {
        "pt": "chegar",
        "zh": "到达",
        "example": "Eles chegam cedo."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "每日生活",
    "topicPt": "Rotina diária",
    "words": [
      {
        "pt": "tempo",
        "zh": "时间；天气",
        "example": "Hoje tenho pouco tempo."
      },
      {
        "pt": "casa",
        "zh": "家；房子",
        "example": "Estou em casa."
      },
      {
        "pt": "trabalho",
        "zh": "工作",
        "example": "Começo o trabalho às nove."
      },
      {
        "pt": "hoje",
        "zh": "今天",
        "example": "Hoje vou estudar."
      },
      {
        "pt": "agora",
        "zh": "现在",
        "example": "Não posso falar agora."
      },
      {
        "pt": "ainda",
        "zh": "仍然；还",
        "example": "Ainda estou aprendendo."
      },
      {
        "pt": "sempre",
        "zh": "总是",
        "example": "Ela sempre chega cedo."
      },
      {
        "pt": "também",
        "zh": "也",
        "example": "Eu também gosto."
      },
      {
        "pt": "coisa",
        "zh": "事情；东西",
        "example": "Tenho uma coisa para contar."
      },
      {
        "pt": "pessoa",
        "zh": "人",
        "example": "Ela é uma pessoa gentil."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "咖啡馆与餐厅",
    "topicPt": "Café e restaurante",
    "words": [
      {
        "pt": "café",
        "zh": "咖啡",
        "example": "Quero um café sem açúcar."
      },
      {
        "pt": "água",
        "zh": "水",
        "example": "Pode trazer uma água, por favor?"
      },
      {
        "pt": "leite",
        "zh": "牛奶",
        "example": "Prefiro café com leite."
      },
      {
        "pt": "cardápio",
        "zh": "菜单",
        "example": "Posso ver o cardápio?"
      },
      {
        "pt": "pedido",
        "zh": "点单；订单",
        "example": "O meu pedido já está pronto."
      },
      {
        "pt": "conta",
        "zh": "账单",
        "example": "A conta, por favor."
      },
      {
        "pt": "fome",
        "zh": "饥饿",
        "example": "Estou com muita fome."
      },
      {
        "pt": "delicioso",
        "zh": "美味的",
        "example": "Este pão de queijo está delicioso."
      },
      {
        "pt": "garçom",
        "zh": "男服务员",
        "example": "O garçom trouxe a sobremesa."
      },
      {
        "pt": "pagar",
        "zh": "付款",
        "example": "Vou pagar com cartão."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "旅行与交通",
    "topicPt": "Viagem e transporte",
    "words": [
      {
        "pt": "viagem",
        "zh": "旅行",
        "example": "A viagem foi muito tranquila."
      },
      {
        "pt": "aeroporto",
        "zh": "机场",
        "example": "Chegamos cedo ao aeroporto."
      },
      {
        "pt": "passagem",
        "zh": "票；交通票",
        "example": "Comprei a passagem pela internet."
      },
      {
        "pt": "mala",
        "zh": "行李箱",
        "example": "Minha mala é pequena."
      },
      {
        "pt": "ônibus",
        "zh": "公共汽车",
        "example": "O ônibus passa às oito."
      },
      {
        "pt": "metrô",
        "zh": "地铁",
        "example": "Vou de metrô até o centro."
      },
      {
        "pt": "estação",
        "zh": "车站",
        "example": "A estação fica perto daqui."
      },
      {
        "pt": "direita",
        "zh": "右边",
        "example": "Vire à direita depois do banco."
      },
      {
        "pt": "esquerda",
        "zh": "左边",
        "example": "A farmácia está à esquerda."
      },
      {
        "pt": "longe",
        "zh": "远",
        "example": "O hotel fica longe da praia."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "购物与价格",
    "topicPt": "Compras e preços",
    "words": [
      {
        "pt": "comprar",
        "zh": "购买",
        "example": "Quero comprar uma camiseta."
      },
      {
        "pt": "preço",
        "zh": "价格",
        "example": "Qual é o preço deste livro?"
      },
      {
        "pt": "barato",
        "zh": "便宜的",
        "example": "Este mercado é mais barato."
      },
      {
        "pt": "caro",
        "zh": "昂贵的",
        "example": "O casaco está muito caro."
      },
      {
        "pt": "dinheiro",
        "zh": "钱",
        "example": "Não tenho dinheiro em espécie."
      },
      {
        "pt": "cartão",
        "zh": "卡；银行卡",
        "example": "Aceita cartão de crédito?"
      },
      {
        "pt": "tamanho",
        "zh": "尺寸；大小",
        "example": "Você tem um tamanho maior?"
      },
      {
        "pt": "experimentar",
        "zh": "试；体验",
        "example": "Posso experimentar esta camisa?"
      },
      {
        "pt": "troco",
        "zh": "找零",
        "example": "Pode ficar com o troco."
      },
      {
        "pt": "loja",
        "zh": "商店",
        "example": "A loja fecha às seis."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "家与城市",
    "topicPt": "Casa e cidade",
    "words": [
      {
        "pt": "quarto",
        "zh": "卧室；房间",
        "example": "O meu quarto tem uma janela grande."
      },
      {
        "pt": "cozinha",
        "zh": "厨房",
        "example": "Estamos preparando o jantar na cozinha."
      },
      {
        "pt": "banheiro",
        "zh": "卫生间",
        "example": "Onde fica o banheiro?"
      },
      {
        "pt": "rua",
        "zh": "街道",
        "example": "Moro numa rua tranquila."
      },
      {
        "pt": "bairro",
        "zh": "街区；社区",
        "example": "Este bairro tem muitos cafés."
      },
      {
        "pt": "praça",
        "zh": "广场",
        "example": "Vamos nos encontrar na praça."
      },
      {
        "pt": "mercado",
        "zh": "市场；超市",
        "example": "Preciso passar no mercado."
      },
      {
        "pt": "vizinho",
        "zh": "邻居",
        "example": "Meu vizinho é muito simpático."
      },
      {
        "pt": "perto",
        "zh": "近",
        "example": "Há uma padaria perto de casa."
      },
      {
        "pt": "endereço",
        "zh": "地址",
        "example": "Pode confirmar o endereço?"
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "问候与礼貌",
    "topicPt": "Saudações e cortesia",
    "words": [
      {
        "pt": "olá",
        "zh": "你好",
        "example": "Olá, tudo bem?"
      },
      {
        "pt": "bom dia",
        "zh": "早上好",
        "example": "Bom dia, senhora Ana."
      },
      {
        "pt": "boa tarde",
        "zh": "下午好",
        "example": "Boa tarde, como vai?"
      },
      {
        "pt": "boa noite",
        "zh": "晚上好；晚安",
        "example": "Boa noite, até amanhã."
      },
      {
        "pt": "obrigado",
        "zh": "谢谢（男性说）",
        "example": "Muito obrigado pela ajuda."
      },
      {
        "pt": "obrigada",
        "zh": "谢谢（女性说）",
        "example": "Muito obrigada pelo convite."
      },
      {
        "pt": "desculpa",
        "zh": "对不起；抱歉",
        "example": "Desculpa pelo atraso."
      },
      {
        "pt": "com licença",
        "zh": "劳驾；借过",
        "example": "Com licença, posso entrar?"
      },
      {
        "pt": "por favor",
        "zh": "请",
        "example": "Uma água, por favor."
      },
      {
        "pt": "até logo",
        "zh": "待会儿见",
        "example": "Até logo, tenha um bom dia."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "家庭成员",
    "topicPt": "Família",
    "words": [
      {
        "pt": "família",
        "zh": "家庭",
        "example": "A minha família mora no Brasil."
      },
      {
        "pt": "mãe",
        "zh": "母亲",
        "example": "Minha mãe trabalha em casa."
      },
      {
        "pt": "pai",
        "zh": "父亲",
        "example": "Meu pai gosta de cozinhar."
      },
      {
        "pt": "irmão",
        "zh": "兄弟",
        "example": "Tenho um irmão mais velho."
      },
      {
        "pt": "irmã",
        "zh": "姐妹",
        "example": "Minha irmã estuda medicina."
      },
      {
        "pt": "filho",
        "zh": "儿子",
        "example": "O filho deles tem cinco anos."
      },
      {
        "pt": "filha",
        "zh": "女儿",
        "example": "A filha dela fala português."
      },
      {
        "pt": "avó",
        "zh": "祖母；外祖母",
        "example": "Minha avó faz um bolo delicioso."
      },
      {
        "pt": "avô",
        "zh": "祖父；外祖父",
        "example": "Meu avô caminha todas as manhãs."
      },
      {
        "pt": "casal",
        "zh": "夫妻；情侣",
        "example": "O casal mora perto da praia."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "数量与日期",
    "topicPt": "Quantidades e datas",
    "words": [
      {
        "pt": "número",
        "zh": "数字；号码",
        "example": "Qual é o número do seu telefone?"
      },
      {
        "pt": "primeiro",
        "zh": "第一；首先",
        "example": "Hoje é o meu primeiro dia."
      },
      {
        "pt": "último",
        "zh": "最后的",
        "example": "Este é o último ônibus."
      },
      {
        "pt": "muito",
        "zh": "很多；非常",
        "example": "Há muito trabalho hoje."
      },
      {
        "pt": "pouco",
        "zh": "少量；不多",
        "example": "Tenho pouco tempo agora."
      },
      {
        "pt": "metade",
        "zh": "一半",
        "example": "Comi metade do pão."
      },
      {
        "pt": "data",
        "zh": "日期",
        "example": "Qual é a data da reunião?"
      },
      {
        "pt": "mês",
        "zh": "月份；月",
        "example": "Vou viajar no próximo mês."
      },
      {
        "pt": "ano",
        "zh": "年份；年",
        "example": "Este ano quero estudar mais."
      },
      {
        "pt": "aniversário",
        "zh": "生日",
        "example": "O meu aniversário é em maio."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "一周与时间",
    "topicPt": "Semana e horas",
    "words": [
      {
        "pt": "segunda-feira",
        "zh": "星期一",
        "example": "A aula começa na segunda-feira."
      },
      {
        "pt": "terça-feira",
        "zh": "星期二",
        "example": "Trabalho em casa na terça-feira."
      },
      {
        "pt": "quarta-feira",
        "zh": "星期三",
        "example": "Temos uma reunião na quarta-feira."
      },
      {
        "pt": "quinta-feira",
        "zh": "星期四",
        "example": "Vou ao médico na quinta-feira."
      },
      {
        "pt": "sexta-feira",
        "zh": "星期五",
        "example": "Sexta-feira vamos jantar fora."
      },
      {
        "pt": "sábado",
        "zh": "星期六",
        "example": "No sábado acordo mais tarde."
      },
      {
        "pt": "domingo",
        "zh": "星期日",
        "example": "Domingo é dia de descansar."
      },
      {
        "pt": "manhã",
        "zh": "早晨；上午",
        "example": "Estudo português de manhã."
      },
      {
        "pt": "tarde",
        "zh": "下午；晚",
        "example": "Cheguei tarde ao trabalho."
      },
      {
        "pt": "noite",
        "zh": "夜晚",
        "example": "Gosto de ler à noite."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "天气与季节",
    "topicPt": "Tempo e estações",
    "words": [
      {
        "pt": "sol",
        "zh": "太阳；晴天",
        "example": "Hoje há muito sol."
      },
      {
        "pt": "chuva",
        "zh": "雨",
        "example": "A chuva começou de manhã."
      },
      {
        "pt": "vento",
        "zh": "风",
        "example": "Está fazendo muito vento."
      },
      {
        "pt": "calor",
        "zh": "炎热",
        "example": "No verão faz muito calor."
      },
      {
        "pt": "frio",
        "zh": "寒冷",
        "example": "Hoje está bastante frio."
      },
      {
        "pt": "primavera",
        "zh": "春天",
        "example": "As flores aparecem na primavera."
      },
      {
        "pt": "verão",
        "zh": "夏天",
        "example": "Vamos à praia no verão."
      },
      {
        "pt": "outono",
        "zh": "秋天",
        "example": "As folhas caem no outono."
      },
      {
        "pt": "inverno",
        "zh": "冬天",
        "example": "O inverno aqui é curto."
      },
      {
        "pt": "nublado",
        "zh": "多云的",
        "example": "O céu está nublado hoje."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "衣服与穿着",
    "topicPt": "Roupas",
    "words": [
      {
        "pt": "camisa",
        "zh": "衬衫",
        "example": "Esta camisa é azul."
      },
      {
        "pt": "camiseta",
        "zh": "T恤",
        "example": "Quero uma camiseta branca."
      },
      {
        "pt": "calça",
        "zh": "裤子",
        "example": "Esta calça ficou muito larga."
      },
      {
        "pt": "vestido",
        "zh": "连衣裙",
        "example": "Ela comprou um vestido bonito."
      },
      {
        "pt": "casaco",
        "zh": "外套",
        "example": "Leve um casaco porque está frio."
      },
      {
        "pt": "sapato",
        "zh": "鞋",
        "example": "Este sapato é confortável."
      },
      {
        "pt": "meia",
        "zh": "袜子",
        "example": "Preciso de um par de meias."
      },
      {
        "pt": "bolsa",
        "zh": "包；手提包",
        "example": "A chave está dentro da bolsa."
      },
      {
        "pt": "roupa",
        "zh": "衣服",
        "example": "A roupa já está limpa."
      },
      {
        "pt": "vestir",
        "zh": "穿；穿衣",
        "example": "Vou vestir uma camisa leve."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "食品采购",
    "topicPt": "Alimentos e mercado",
    "words": [
      {
        "pt": "pão",
        "zh": "面包",
        "example": "Compro pão fresco todos os dias."
      },
      {
        "pt": "arroz",
        "zh": "大米；米饭",
        "example": "Hoje vamos fazer arroz e feijão."
      },
      {
        "pt": "feijão",
        "zh": "豆；豆类菜肴",
        "example": "O feijão ainda está quente."
      },
      {
        "pt": "carne",
        "zh": "肉",
        "example": "Eu não como muita carne."
      },
      {
        "pt": "peixe",
        "zh": "鱼",
        "example": "Este peixe foi preparado no forno."
      },
      {
        "pt": "ovo",
        "zh": "鸡蛋",
        "example": "Quero dois ovos no café da manhã."
      },
      {
        "pt": "fruta",
        "zh": "水果",
        "example": "Gosto de comer fruta depois do almoço."
      },
      {
        "pt": "legume",
        "zh": "蔬菜",
        "example": "Precisamos comprar legumes frescos."
      },
      {
        "pt": "açúcar",
        "zh": "糖",
        "example": "Tomo café sem açúcar."
      },
      {
        "pt": "sal",
        "zh": "盐",
        "example": "Esta sopa precisa de um pouco de sal."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "三餐与烹饪",
    "topicPt": "Refeições e cozinha",
    "words": [
      {
        "pt": "café da manhã",
        "zh": "早餐",
        "example": "O café da manhã está pronto."
      },
      {
        "pt": "almoço",
        "zh": "午餐",
        "example": "O almoço começa ao meio-dia."
      },
      {
        "pt": "jantar",
        "zh": "晚餐；吃晚餐",
        "example": "Vamos jantar em casa hoje."
      },
      {
        "pt": "cozinhar",
        "zh": "做饭",
        "example": "Aprendi a cozinhar com a minha mãe."
      },
      {
        "pt": "comer",
        "zh": "吃",
        "example": "Quero comer alguma coisa leve."
      },
      {
        "pt": "beber",
        "zh": "喝",
        "example": "É importante beber bastante água."
      },
      {
        "pt": "prato",
        "zh": "盘子；菜肴",
        "example": "Este prato é típico do Nordeste."
      },
      {
        "pt": "copo",
        "zh": "杯子",
        "example": "Pode trazer um copo de água?"
      },
      {
        "pt": "colher",
        "zh": "勺子",
        "example": "Preciso de uma colher para a sopa."
      },
      {
        "pt": "faca",
        "zh": "刀",
        "example": "A faca está ao lado do prato."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "城市服务",
    "topicPt": "Serviços da cidade",
    "words": [
      {
        "pt": "banco",
        "zh": "银行",
        "example": "O banco abre às dez."
      },
      {
        "pt": "farmácia",
        "zh": "药店",
        "example": "Há uma farmácia nesta rua."
      },
      {
        "pt": "hospital",
        "zh": "医院",
        "example": "O hospital fica perto da estação."
      },
      {
        "pt": "correio",
        "zh": "邮局；邮件",
        "example": "Preciso ir ao correio hoje."
      },
      {
        "pt": "padaria",
        "zh": "面包店",
        "example": "A padaria vende pão quente."
      },
      {
        "pt": "restaurante",
        "zh": "餐馆",
        "example": "Este restaurante serve comida brasileira."
      },
      {
        "pt": "escola",
        "zh": "学校",
        "example": "A escola fica atrás da praça."
      },
      {
        "pt": "biblioteca",
        "zh": "图书馆",
        "example": "Estudo na biblioteca à tarde."
      },
      {
        "pt": "parque",
        "zh": "公园",
        "example": "As crianças brincam no parque."
      },
      {
        "pt": "posto",
        "zh": "服务站；岗位",
        "example": "Há um posto de saúde no bairro."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "问路与位置",
    "topicPt": "Direções e localização",
    "words": [
      {
        "pt": "aqui",
        "zh": "这里",
        "example": "Pode esperar aqui."
      },
      {
        "pt": "ali",
        "zh": "那里",
        "example": "O caixa fica ali."
      },
      {
        "pt": "em frente",
        "zh": "在前面；对面",
        "example": "O hotel fica em frente ao banco."
      },
      {
        "pt": "atrás",
        "zh": "在后面",
        "example": "A garagem fica atrás da casa."
      },
      {
        "pt": "ao lado",
        "zh": "在旁边",
        "example": "O mercado fica ao lado do banco."
      },
      {
        "pt": "entre",
        "zh": "在……之间",
        "example": "A loja fica entre o banco e a farmácia."
      },
      {
        "pt": "seguir",
        "zh": "继续；沿着走",
        "example": "Você deve seguir em frente por duas quadras."
      },
      {
        "pt": "virar",
        "zh": "转弯；转向",
        "example": "É preciso virar à esquerda no semáforo."
      },
      {
        "pt": "subir",
        "zh": "上去；上升",
        "example": "Você precisa subir esta rua."
      },
      {
        "pt": "descer",
        "zh": "下去；下车",
        "example": "Vou descer na próxima parada."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "酒店住宿",
    "topicPt": "Hotel e hospedagem",
    "words": [
      {
        "pt": "hotel",
        "zh": "酒店",
        "example": "O hotel fica no centro."
      },
      {
        "pt": "reserva",
        "zh": "预订",
        "example": "Tenho uma reserva para duas noites."
      },
      {
        "pt": "recepção",
        "zh": "前台；接待处",
        "example": "A recepção funciona vinte e quatro horas."
      },
      {
        "pt": "chave",
        "zh": "钥匙",
        "example": "Aqui está a chave do quarto."
      },
      {
        "pt": "cama",
        "zh": "床",
        "example": "O quarto tem duas camas."
      },
      {
        "pt": "toalha",
        "zh": "毛巾",
        "example": "Pode trazer outra toalha?"
      },
      {
        "pt": "elevador",
        "zh": "电梯",
        "example": "O elevador está no fim do corredor."
      },
      {
        "pt": "andar",
        "zh": "楼层；行走",
        "example": "O meu quarto fica no terceiro andar."
      },
      {
        "pt": "entrada",
        "zh": "入口；入住",
        "example": "A entrada é a partir das duas."
      },
      {
        "pt": "saída",
        "zh": "出口；退房",
        "example": "A saída deve ser feita até meio-dia."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "手机与沟通",
    "topicPt": "Celular e comunicação",
    "words": [
      {
        "pt": "telefone",
        "zh": "电话；手机",
        "example": "O telefone está tocando."
      },
      {
        "pt": "mensagem",
        "zh": "消息；短信",
        "example": "Enviei uma mensagem para você."
      },
      {
        "pt": "ligar",
        "zh": "打电话；开启",
        "example": "Vou ligar para minha mãe."
      },
      {
        "pt": "responder",
        "zh": "回答；回复",
        "example": "Pode responder à minha pergunta?"
      },
      {
        "pt": "perguntar",
        "zh": "询问",
        "example": "Quero perguntar uma coisa."
      },
      {
        "pt": "nome",
        "zh": "名字",
        "example": "Como se escreve o seu nome?"
      },
      {
        "pt": "email",
        "zh": "电子邮件",
        "example": "Mande o documento por email."
      },
      {
        "pt": "foto",
        "zh": "照片",
        "example": "Tirei uma foto da praia."
      },
      {
        "pt": "internet",
        "zh": "互联网",
        "example": "A internet está lenta hoje."
      },
      {
        "pt": "senha",
        "zh": "密码",
        "example": "Esqueci a senha do aplicativo."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "颜色",
    "topicPt": "Cores",
    "words": [
      {
        "pt": "branco",
        "zh": "白色的",
        "example": "A parede é branca."
      },
      {
        "pt": "preto",
        "zh": "黑色的",
        "example": "O sapato é preto."
      },
      {
        "pt": "vermelho",
        "zh": "红色的",
        "example": "A maçã é vermelha."
      },
      {
        "pt": "azul",
        "zh": "蓝色的",
        "example": "O céu está azul."
      },
      {
        "pt": "verde",
        "zh": "绿色的",
        "example": "A mochila é verde."
      },
      {
        "pt": "amarelo",
        "zh": "黄色的",
        "example": "A flor é amarela."
      },
      {
        "pt": "rosa",
        "zh": "粉色的",
        "example": "Ela usa uma blusa rosa."
      },
      {
        "pt": "marrom",
        "zh": "棕色的",
        "example": "A mesa é marrom."
      },
      {
        "pt": "cinza",
        "zh": "灰色的",
        "example": "O carro cinza é meu."
      },
      {
        "pt": "colorido",
        "zh": "彩色的",
        "example": "O desenho ficou colorido."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "形状与尺寸",
    "topicPt": "Formas e medidas",
    "words": [
      {
        "pt": "redondo",
        "zh": "圆形的",
        "example": "O prato é redondo."
      },
      {
        "pt": "quadrado",
        "zh": "方形的",
        "example": "O quadro é quadrado."
      },
      {
        "pt": "reto",
        "zh": "直的",
        "example": "Siga por este caminho reto."
      },
      {
        "pt": "curvo",
        "zh": "弯曲的",
        "example": "A estrada é curva."
      },
      {
        "pt": "grande",
        "zh": "大的",
        "example": "A sala é grande."
      },
      {
        "pt": "pequeno",
        "zh": "小的",
        "example": "Meu celular é pequeno."
      },
      {
        "pt": "largo",
        "zh": "宽的",
        "example": "Este corredor é largo."
      },
      {
        "pt": "estreito",
        "zh": "窄的",
        "example": "A rua é estreita."
      },
      {
        "pt": "alto",
        "zh": "高的",
        "example": "O prédio é alto."
      },
      {
        "pt": "baixo",
        "zh": "低的；矮的",
        "example": "A cadeira é baixa."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "基础数字",
    "topicPt": "Números básicos",
    "words": [
      {
        "pt": "zero",
        "zh": "零",
        "example": "O resultado foi zero."
      },
      {
        "pt": "um",
        "zh": "一",
        "example": "Quero um suco."
      },
      {
        "pt": "dois",
        "zh": "二",
        "example": "Tenho dois gatos."
      },
      {
        "pt": "três",
        "zh": "三",
        "example": "Comprei três bananas."
      },
      {
        "pt": "quatro",
        "zh": "四",
        "example": "A mesa tem quatro cadeiras."
      },
      {
        "pt": "cinco",
        "zh": "五",
        "example": "A aula dura cinco minutos."
      },
      {
        "pt": "seis",
        "zh": "六",
        "example": "Acordo às seis."
      },
      {
        "pt": "sete",
        "zh": "七",
        "example": "Ela tem sete livros."
      },
      {
        "pt": "oito",
        "zh": "八",
        "example": "O filme começa às oito."
      },
      {
        "pt": "nove",
        "zh": "九",
        "example": "Trabalho às nove."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "房屋空间",
    "topicPt": "Espaços da casa",
    "words": [
      {
        "pt": "sala",
        "zh": "客厅",
        "example": "A televisão fica na sala."
      },
      {
        "pt": "garagem",
        "zh": "车库",
        "example": "O carro está na garagem."
      },
      {
        "pt": "varanda",
        "zh": "阳台",
        "example": "Tomamos café na varanda."
      },
      {
        "pt": "jardim",
        "zh": "花园",
        "example": "Há flores no jardim."
      },
      {
        "pt": "corredor",
        "zh": "走廊",
        "example": "O banheiro fica no corredor."
      },
      {
        "pt": "porta",
        "zh": "门",
        "example": "Feche a porta, por favor."
      },
      {
        "pt": "janela",
        "zh": "窗户",
        "example": "A janela está aberta."
      },
      {
        "pt": "parede",
        "zh": "墙",
        "example": "A parede precisa de tinta."
      },
      {
        "pt": "teto",
        "zh": "天花板；屋顶",
        "example": "A luz fica no teto."
      },
      {
        "pt": "chão",
        "zh": "地板；地面",
        "example": "O chão está limpo."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "家具",
    "topicPt": "Móveis",
    "words": [
      {
        "pt": "mesa",
        "zh": "桌子",
        "example": "O livro está na mesa."
      },
      {
        "pt": "cadeira",
        "zh": "椅子",
        "example": "Sente-se nesta cadeira."
      },
      {
        "pt": "sofá",
        "zh": "沙发",
        "example": "Estamos no sofá."
      },
      {
        "pt": "estante",
        "zh": "书架",
        "example": "Os livros ficam na estante."
      },
      {
        "pt": "gaveta",
        "zh": "抽屉",
        "example": "A caneta está na gaveta."
      },
      {
        "pt": "escrivaninha",
        "zh": "书桌",
        "example": "Estudo na escrivaninha."
      },
      {
        "pt": "espelho",
        "zh": "镜子",
        "example": "O espelho fica no quarto."
      },
      {
        "pt": "tapete",
        "zh": "地毯",
        "example": "O gato dorme no tapete."
      },
      {
        "pt": "cortina",
        "zh": "窗帘",
        "example": "A cortina é azul."
      },
      {
        "pt": "prateleira",
        "zh": "搁板",
        "example": "Coloque o copo na prateleira."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "家用电器",
    "topicPt": "Eletrodomésticos",
    "words": [
      {
        "pt": "geladeira",
        "zh": "冰箱",
        "example": "O leite está na geladeira."
      },
      {
        "pt": "fogão",
        "zh": "炉灶",
        "example": "A panela está no fogão."
      },
      {
        "pt": "forno",
        "zh": "烤箱",
        "example": "O pão está no forno."
      },
      {
        "pt": "micro-ondas",
        "zh": "微波炉",
        "example": "Aqueça a comida no micro-ondas."
      },
      {
        "pt": "ventilador",
        "zh": "电风扇",
        "example": "Ligue o ventilador."
      },
      {
        "pt": "chuveiro",
        "zh": "淋浴器",
        "example": "O chuveiro está quente."
      },
      {
        "pt": "máquina de lavar",
        "zh": "洗衣机",
        "example": "A roupa está na máquina de lavar."
      },
      {
        "pt": "aspirador",
        "zh": "吸尘器",
        "example": "Uso o aspirador na sala."
      },
      {
        "pt": "liquidificador",
        "zh": "搅拌机",
        "example": "Bata a fruta no liquidificador."
      },
      {
        "pt": "ferro de passar",
        "zh": "熨斗",
        "example": "O ferro de passar está quente."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "浴室用品",
    "topicPt": "Objetos do banheiro",
    "words": [
      {
        "pt": "sabonete",
        "zh": "肥皂",
        "example": "Lave as mãos com sabonete."
      },
      {
        "pt": "xampu",
        "zh": "洗发水",
        "example": "Preciso comprar xampu."
      },
      {
        "pt": "escova de dentes",
        "zh": "牙刷",
        "example": "Esta é minha escova de dentes."
      },
      {
        "pt": "pasta de dente",
        "zh": "牙膏",
        "example": "A pasta de dente acabou."
      },
      {
        "pt": "pente",
        "zh": "梳子",
        "example": "O pente está na bolsa."
      },
      {
        "pt": "papel higiênico",
        "zh": "卫生纸",
        "example": "Falta papel higiênico."
      },
      {
        "pt": "pia",
        "zh": "洗手池",
        "example": "A pia está molhada."
      },
      {
        "pt": "torneira",
        "zh": "水龙头",
        "example": "Feche a torneira."
      },
      {
        "pt": "banheira",
        "zh": "浴缸",
        "example": "A criança está na banheira."
      },
      {
        "pt": "secador",
        "zh": "吹风机",
        "example": "Usei o secador de cabelo."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "清洁用品",
    "topicPt": "Produtos de limpeza",
    "words": [
      {
        "pt": "vassoura",
        "zh": "扫帚",
        "example": "A vassoura está atrás da porta."
      },
      {
        "pt": "rodo",
        "zh": "刮水器",
        "example": "Passe o rodo no chão."
      },
      {
        "pt": "balde",
        "zh": "水桶",
        "example": "Encha o balde com água."
      },
      {
        "pt": "esponja",
        "zh": "海绵",
        "example": "Lave o prato com a esponja."
      },
      {
        "pt": "detergente",
        "zh": "洗洁精",
        "example": "Use pouco detergente."
      },
      {
        "pt": "sabão",
        "zh": "洗涤剂；肥皂",
        "example": "Comprei sabão para a roupa."
      },
      {
        "pt": "pano",
        "zh": "抹布；布",
        "example": "Limpe a mesa com um pano."
      },
      {
        "pt": "escova",
        "zh": "刷子",
        "example": "Use esta escova pequena."
      },
      {
        "pt": "limpeza",
        "zh": "清洁",
        "example": "A limpeza termina cedo."
      },
      {
        "pt": "poeira",
        "zh": "灰尘",
        "example": "Há poeira na estante."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "厨房用具",
    "topicPt": "Utensílios de cozinha",
    "words": [
      {
        "pt": "panela",
        "zh": "锅",
        "example": "A sopa está na panela."
      },
      {
        "pt": "frigideira",
        "zh": "煎锅",
        "example": "O ovo está na frigideira."
      },
      {
        "pt": "garfo",
        "zh": "叉子",
        "example": "Comemos salada com garfo."
      },
      {
        "pt": "xícara",
        "zh": "杯子",
        "example": "Quero uma xícara de chá."
      },
      {
        "pt": "tigela",
        "zh": "碗",
        "example": "Coloque a fruta na tigela."
      },
      {
        "pt": "garrafa",
        "zh": "瓶子",
        "example": "A garrafa está vazia."
      },
      {
        "pt": "jarra",
        "zh": "壶；水罐",
        "example": "Há suco na jarra."
      },
      {
        "pt": "guardanapo",
        "zh": "餐巾",
        "example": "Preciso de um guardanapo."
      },
      {
        "pt": "abridor",
        "zh": "开瓶器",
        "example": "Onde está o abridor?"
      },
      {
        "pt": "tábua",
        "zh": "砧板；木板",
        "example": "Corte o tomate na tábua."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "常见蔬菜",
    "topicPt": "Legumes comuns",
    "words": [
      {
        "pt": "tomate",
        "zh": "番茄",
        "example": "O tomate está maduro."
      },
      {
        "pt": "batata",
        "zh": "土豆",
        "example": "Vou cozinhar a batata."
      },
      {
        "pt": "cenoura",
        "zh": "胡萝卜",
        "example": "A cenoura está fresca."
      },
      {
        "pt": "cebola",
        "zh": "洋葱",
        "example": "Corte a cebola pequena."
      },
      {
        "pt": "alho",
        "zh": "大蒜",
        "example": "A receita leva alho."
      },
      {
        "pt": "alface",
        "zh": "生菜",
        "example": "Comprei alface para a salada."
      },
      {
        "pt": "milho",
        "zh": "玉米",
        "example": "A sopa tem milho."
      },
      {
        "pt": "abóbora",
        "zh": "南瓜",
        "example": "A abóbora está no forno."
      },
      {
        "pt": "pepino",
        "zh": "黄瓜",
        "example": "Gosto de pepino na salada."
      },
      {
        "pt": "pimentão",
        "zh": "甜椒",
        "example": "O pimentão vermelho é doce."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "常见水果",
    "topicPt": "Frutas comuns",
    "words": [
      {
        "pt": "banana",
        "zh": "香蕉",
        "example": "Como uma banana de manhã."
      },
      {
        "pt": "maçã",
        "zh": "苹果",
        "example": "A maçã está doce."
      },
      {
        "pt": "laranja",
        "zh": "橙子",
        "example": "Quero suco de laranja."
      },
      {
        "pt": "limão",
        "zh": "柠檬",
        "example": "Coloque limão na água."
      },
      {
        "pt": "morango",
        "zh": "草莓",
        "example": "O morango está maduro."
      },
      {
        "pt": "uva",
        "zh": "葡萄",
        "example": "Comprei uvas verdes."
      },
      {
        "pt": "abacaxi",
        "zh": "菠萝",
        "example": "Corte o abacaxi em pedaços."
      },
      {
        "pt": "manga",
        "zh": "芒果",
        "example": "A manga está muito doce."
      },
      {
        "pt": "melancia",
        "zh": "西瓜",
        "example": "A melancia está gelada."
      },
      {
        "pt": "mamão",
        "zh": "木瓜",
        "example": "Como mamão no café da manhã."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "饮料",
    "topicPt": "Bebidas",
    "words": [
      {
        "pt": "chá",
        "zh": "茶",
        "example": "Tomo chá antes de dormir."
      },
      {
        "pt": "suco",
        "zh": "果汁",
        "example": "Quero um suco natural."
      },
      {
        "pt": "refrigerante",
        "zh": "汽水",
        "example": "Ele não bebe refrigerante."
      },
      {
        "pt": "cerveja",
        "zh": "啤酒",
        "example": "A cerveja está gelada."
      },
      {
        "pt": "vinho",
        "zh": "葡萄酒",
        "example": "Eles pediram uma taça de vinho."
      },
      {
        "pt": "água mineral",
        "zh": "矿泉水",
        "example": "Prefiro água mineral sem gás."
      },
      {
        "pt": "água com gás",
        "zh": "气泡水",
        "example": "Ela pediu água com gás."
      },
      {
        "pt": "chocolate quente",
        "zh": "热巧克力",
        "example": "Hoje quero chocolate quente."
      },
      {
        "pt": "vitamina",
        "zh": "水果奶昔；维生素",
        "example": "Faço vitamina de banana."
      },
      {
        "pt": "coco",
        "zh": "椰子",
        "example": "Bebemos água de coco."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "点心与甜品",
    "topicPt": "Lanches e sobremesas",
    "words": [
      {
        "pt": "bolo",
        "zh": "蛋糕",
        "example": "O bolo está delicioso."
      },
      {
        "pt": "biscoito",
        "zh": "饼干",
        "example": "Comi dois biscoitos."
      },
      {
        "pt": "sanduíche",
        "zh": "三明治",
        "example": "Preparei um sanduíche simples."
      },
      {
        "pt": "queijo",
        "zh": "奶酪",
        "example": "Este queijo é mineiro."
      },
      {
        "pt": "presunto",
        "zh": "火腿",
        "example": "O sanduíche leva presunto."
      },
      {
        "pt": "sorvete",
        "zh": "冰淇淋",
        "example": "Quero sorvete de chocolate."
      },
      {
        "pt": "chocolate",
        "zh": "巧克力",
        "example": "Ela gosta de chocolate amargo."
      },
      {
        "pt": "doce",
        "zh": "甜食；甜的",
        "example": "Este doce é brasileiro."
      },
      {
        "pt": "pipoca",
        "zh": "爆米花",
        "example": "Fiz pipoca para o filme."
      },
      {
        "pt": "lanche",
        "zh": "小吃；加餐",
        "example": "Levei um lanche para o trabalho."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "味道与口感",
    "topicPt": "Sabores e texturas",
    "words": [
      {
        "pt": "salgado",
        "zh": "咸的；咸点",
        "example": "A sopa está salgada."
      },
      {
        "pt": "amargo",
        "zh": "苦的",
        "example": "Este café está amargo."
      },
      {
        "pt": "azedo",
        "zh": "酸的",
        "example": "O limão é azedo."
      },
      {
        "pt": "picante",
        "zh": "辣的",
        "example": "O molho está picante."
      },
      {
        "pt": "quente",
        "zh": "热的",
        "example": "O café ainda está quente."
      },
      {
        "pt": "gelado",
        "zh": "冰凉的",
        "example": "O suco está gelado."
      },
      {
        "pt": "fresco",
        "zh": "新鲜的",
        "example": "O pão está fresco."
      },
      {
        "pt": "macio",
        "zh": "柔软的",
        "example": "O bolo ficou macio."
      },
      {
        "pt": "duro",
        "zh": "硬的",
        "example": "Este pão está duro."
      },
      {
        "pt": "sabor",
        "zh": "味道",
        "example": "Adoro o sabor da manga."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "餐厅交流",
    "topicPt": "No restaurante",
    "words": [
      {
        "pt": "mesa para dois",
        "zh": "两人桌",
        "example": "Queremos uma mesa para dois."
      },
      {
        "pt": "entrada do prato",
        "zh": "前菜",
        "example": "Vou pedir uma entrada do prato."
      },
      {
        "pt": "prato principal",
        "zh": "主菜",
        "example": "O prato principal chega logo."
      },
      {
        "pt": "sobremesa",
        "zh": "甜点",
        "example": "Quero uma sobremesa pequena."
      },
      {
        "pt": "buffet",
        "zh": "自助餐",
        "example": "O restaurante oferece buffet."
      },
      {
        "pt": "porção",
        "zh": "一份",
        "example": "Pedimos uma porção de batatas."
      },
      {
        "pt": "sem gelo",
        "zh": "不加冰",
        "example": "Quero água sem gelo."
      },
      {
        "pt": "sem pimenta",
        "zh": "不加辣椒",
        "example": "Prepare o prato sem pimenta."
      },
      {
        "pt": "bom apetite",
        "zh": "用餐愉快",
        "example": "Bom apetite para todos!"
      },
      {
        "pt": "reservar uma mesa",
        "zh": "订桌",
        "example": "Quero reservar uma mesa para amanhã."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "购物物品",
    "topicPt": "Itens de compra",
    "words": [
      {
        "pt": "produto",
        "zh": "商品；产品",
        "example": "Este produto está em promoção."
      },
      {
        "pt": "cesta",
        "zh": "篮子",
        "example": "Coloque as frutas na cesta."
      },
      {
        "pt": "carrinho",
        "zh": "购物车；小推车",
        "example": "O carrinho está cheio."
      },
      {
        "pt": "caixa",
        "zh": "收银台；盒子",
        "example": "Vou pagar no caixa."
      },
      {
        "pt": "sacola",
        "zh": "购物袋",
        "example": "Preciso de uma sacola."
      },
      {
        "pt": "etiqueta",
        "zh": "标签",
        "example": "O preço está na etiqueta."
      },
      {
        "pt": "recibo",
        "zh": "收据",
        "example": "Guarde o recibo da compra."
      },
      {
        "pt": "promoção",
        "zh": "促销",
        "example": "Esta camisa está em promoção."
      },
      {
        "pt": "desconto",
        "zh": "折扣",
        "example": "O desconto é de dez por cento."
      },
      {
        "pt": "fila",
        "zh": "队伍",
        "example": "A fila está longa."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "付款方式",
    "topicPt": "Pagamentos",
    "words": [
      {
        "pt": "moeda",
        "zh": "硬币；货币",
        "example": "Tenho uma moeda de um real."
      },
      {
        "pt": "nota de dinheiro",
        "zh": "纸币",
        "example": "Só tenho uma nota de dinheiro."
      },
      {
        "pt": "crédito",
        "zh": "信用卡方式；信用",
        "example": "Vou pagar no crédito."
      },
      {
        "pt": "débito",
        "zh": "借记卡方式；欠款",
        "example": "Prefiro pagar no débito."
      },
      {
        "pt": "pix",
        "zh": "巴西即时转账",
        "example": "Posso pagar por Pix?"
      },
      {
        "pt": "parcelar",
        "zh": "分期付款",
        "example": "É possível parcelar a compra?"
      },
      {
        "pt": "à vista",
        "zh": "一次付清",
        "example": "Vou pagar à vista."
      },
      {
        "pt": "total",
        "zh": "总额；总计",
        "example": "Qual é o valor total?"
      },
      {
        "pt": "cupom",
        "zh": "优惠券",
        "example": "Tenho um cupom de desconto."
      },
      {
        "pt": "valor",
        "zh": "金额；价值",
        "example": "Confira o valor na tela."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "服饰配件",
    "topicPt": "Acessórios",
    "words": [
      {
        "pt": "chapéu",
        "zh": "帽子",
        "example": "Use um chapéu no sol."
      },
      {
        "pt": "boné",
        "zh": "鸭舌帽",
        "example": "Meu boné é azul."
      },
      {
        "pt": "cinto",
        "zh": "腰带",
        "example": "Este cinto é de couro."
      },
      {
        "pt": "óculos",
        "zh": "眼镜",
        "example": "Onde estão meus óculos?"
      },
      {
        "pt": "relógio",
        "zh": "手表；钟",
        "example": "Meu relógio está atrasado."
      },
      {
        "pt": "brinco",
        "zh": "耳环",
        "example": "Ela usa brincos pequenos."
      },
      {
        "pt": "colar",
        "zh": "项链",
        "example": "O colar é bonito."
      },
      {
        "pt": "anel",
        "zh": "戒指",
        "example": "O anel está na caixa."
      },
      {
        "pt": "guarda-chuva",
        "zh": "雨伞",
        "example": "Leve o guarda-chuva hoje."
      },
      {
        "pt": "mochila",
        "zh": "双肩包",
        "example": "O caderno está na mochila."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "外貌描述",
    "topicPt": "Aparência",
    "words": [
      {
        "pt": "cabelo",
        "zh": "头发",
        "example": "Meu cabelo está curto."
      },
      {
        "pt": "liso",
        "zh": "直的；平滑的",
        "example": "Ela tem cabelo liso."
      },
      {
        "pt": "cacheado",
        "zh": "卷曲的",
        "example": "O cabelo dele é cacheado."
      },
      {
        "pt": "loiro",
        "zh": "金发的",
        "example": "O menino é loiro."
      },
      {
        "pt": "moreno",
        "zh": "深色头发的；肤色较深的",
        "example": "Ela tem cabelo moreno."
      },
      {
        "pt": "barba",
        "zh": "胡须",
        "example": "Ele tem barba curta."
      },
      {
        "pt": "bonito",
        "zh": "好看的",
        "example": "Este lugar é bonito."
      },
      {
        "pt": "jovem",
        "zh": "年轻的",
        "example": "A professora é jovem."
      },
      {
        "pt": "velho",
        "zh": "年老的；旧的",
        "example": "Este prédio é velho."
      },
      {
        "pt": "aparência",
        "zh": "外貌",
        "example": "A aparência não é tudo."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "身体部位",
    "topicPt": "Partes do corpo",
    "words": [
      {
        "pt": "braço",
        "zh": "手臂",
        "example": "Meu braço está cansado."
      },
      {
        "pt": "perna",
        "zh": "腿",
        "example": "Ela machucou a perna."
      },
      {
        "pt": "mão",
        "zh": "手",
        "example": "Lave bem as mãos."
      },
      {
        "pt": "pé",
        "zh": "脚",
        "example": "Meu pé está frio."
      },
      {
        "pt": "dedo",
        "zh": "手指；脚趾",
        "example": "Cortei o dedo na cozinha."
      },
      {
        "pt": "costas",
        "zh": "背部",
        "example": "Estou com dor nas costas."
      },
      {
        "pt": "ombro",
        "zh": "肩膀",
        "example": "A bolsa está no ombro."
      },
      {
        "pt": "joelho",
        "zh": "膝盖",
        "example": "Meu joelho está melhor."
      },
      {
        "pt": "barriga",
        "zh": "肚子",
        "example": "Minha barriga está cheia."
      },
      {
        "pt": "corpo",
        "zh": "身体",
        "example": "O corpo precisa de descanso."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "面部",
    "topicPt": "O rosto",
    "words": [
      {
        "pt": "rosto",
        "zh": "脸",
        "example": "Lave o rosto com água."
      },
      {
        "pt": "olho",
        "zh": "眼睛",
        "example": "Meus olhos são castanhos."
      },
      {
        "pt": "nariz",
        "zh": "鼻子",
        "example": "Meu nariz está frio."
      },
      {
        "pt": "boca",
        "zh": "嘴",
        "example": "Abra a boca, por favor."
      },
      {
        "pt": "orelha",
        "zh": "耳朵",
        "example": "O brinco está na orelha."
      },
      {
        "pt": "dente",
        "zh": "牙齿",
        "example": "Este dente está doendo."
      },
      {
        "pt": "língua",
        "zh": "舌头；语言",
        "example": "Queimei a língua com café."
      },
      {
        "pt": "bochecha",
        "zh": "脸颊",
        "example": "A criança tem bochechas vermelhas."
      },
      {
        "pt": "testa",
        "zh": "额头",
        "example": "Ela colocou a mão na testa."
      },
      {
        "pt": "queixo",
        "zh": "下巴",
        "example": "Ele tocou o queixo."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "常见不适",
    "topicPt": "Mal-estar",
    "words": [
      {
        "pt": "resfriado",
        "zh": "感冒",
        "example": "Hoje estou com resfriado."
      },
      {
        "pt": "enjoo",
        "zh": "恶心",
        "example": "Hoje estou com enjoo."
      },
      {
        "pt": "tontura",
        "zh": "头晕",
        "example": "Hoje estou com tontura."
      },
      {
        "pt": "alergia",
        "zh": "过敏",
        "example": "Hoje estou com alergia."
      },
      {
        "pt": "corte",
        "zh": "伤口",
        "example": "Hoje estou com corte."
      },
      {
        "pt": "queimadura",
        "zh": "烫伤；烧伤",
        "example": "Hoje estou com queimadura."
      },
      {
        "pt": "cólica",
        "zh": "绞痛",
        "example": "Hoje estou com cólica."
      },
      {
        "pt": "coceira",
        "zh": "瘙痒",
        "example": "Hoje estou com coceira."
      },
      {
        "pt": "cansaço",
        "zh": "疲劳",
        "example": "Hoje estou com cansaço."
      },
      {
        "pt": "fraqueza",
        "zh": "虚弱",
        "example": "Hoje estou com fraqueza."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "个人卫生",
    "topicPt": "Higiene pessoal",
    "words": [
      {
        "pt": "desodorante",
        "zh": "除臭剂",
        "example": "Uso desodorante todos os dias."
      },
      {
        "pt": "perfume",
        "zh": "香水",
        "example": "Uso perfume todos os dias."
      },
      {
        "pt": "creme",
        "zh": "乳霜",
        "example": "Uso creme todos os dias."
      },
      {
        "pt": "protetor solar",
        "zh": "防晒霜",
        "example": "Uso protetor solar todos os dias."
      },
      {
        "pt": "fio dental",
        "zh": "牙线",
        "example": "Uso fio dental todos os dias."
      },
      {
        "pt": "lenço",
        "zh": "纸巾；手帕",
        "example": "Uso lenço todos os dias."
      },
      {
        "pt": "algodão",
        "zh": "棉花",
        "example": "Uso algodão todos os dias."
      },
      {
        "pt": "barbeador",
        "zh": "剃须刀",
        "example": "Uso barbeador todos os dias."
      },
      {
        "pt": "cortador de unha",
        "zh": "指甲剪",
        "example": "Uso cortador de unha todos os dias."
      },
      {
        "pt": "maquiagem",
        "zh": "化妆品",
        "example": "Uso maquiagem todos os dias."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "早晨习惯",
    "topicPt": "Rotina da manhã",
    "words": [
      {
        "pt": "despertar",
        "zh": "醒来",
        "example": "De manhã, vou despertar."
      },
      {
        "pt": "espreguiçar-se",
        "zh": "伸懒腰",
        "example": "De manhã, vou espreguiçar-se."
      },
      {
        "pt": "escovar os dentes",
        "zh": "刷牙",
        "example": "De manhã, vou escovar os dentes."
      },
      {
        "pt": "pentear o cabelo",
        "zh": "梳头",
        "example": "De manhã, vou pentear o cabelo."
      },
      {
        "pt": "lavar o rosto",
        "zh": "洗脸",
        "example": "De manhã, vou lavar o rosto."
      },
      {
        "pt": "preparar o café",
        "zh": "准备咖啡",
        "example": "De manhã, vou preparar o café."
      },
      {
        "pt": "tomar café",
        "zh": "喝咖啡",
        "example": "De manhã, vou tomar café."
      },
      {
        "pt": "abrir a cortina",
        "zh": "拉开窗帘",
        "example": "De manhã, vou abrir a cortina."
      },
      {
        "pt": "olhar o relógio",
        "zh": "看时间",
        "example": "De manhã, vou olhar o relógio."
      },
      {
        "pt": "calçar os sapatos",
        "zh": "穿鞋",
        "example": "De manhã, vou calçar os sapatos."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "晚间习惯",
    "topicPt": "Rotina da noite",
    "words": [
      {
        "pt": "tirar os sapatos",
        "zh": "脱鞋",
        "example": "À noite, vou tirar os sapatos."
      },
      {
        "pt": "trocar de roupa",
        "zh": "换衣服",
        "example": "À noite, vou trocar de roupa."
      },
      {
        "pt": "preparar o jantar",
        "zh": "准备晚饭",
        "example": "À noite, vou preparar o jantar."
      },
      {
        "pt": "lavar a louça",
        "zh": "洗餐具",
        "example": "À noite, vou lavar a louça."
      },
      {
        "pt": "assistir à televisão",
        "zh": "看电视",
        "example": "À noite, vou assistir à televisão."
      },
      {
        "pt": "ler um pouco",
        "zh": "读一会儿",
        "example": "À noite, vou ler um pouco."
      },
      {
        "pt": "colocar o despertador",
        "zh": "设置闹钟",
        "example": "À noite, vou colocar o despertador."
      },
      {
        "pt": "apagar a luz",
        "zh": "关灯",
        "example": "À noite, vou apagar a luz."
      },
      {
        "pt": "deitar-se",
        "zh": "躺下；上床",
        "example": "À noite, vou deitar-se."
      },
      {
        "pt": "adormecer",
        "zh": "入睡",
        "example": "À noite, vou adormecer."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "基本移动",
    "topicPt": "Movimentos básicos",
    "words": [
      {
        "pt": "sentar-se",
        "zh": "坐下",
        "example": "Eu consigo sentar-se sozinho."
      },
      {
        "pt": "ficar de pé",
        "zh": "站立",
        "example": "Eu consigo ficar de pé sozinho."
      },
      {
        "pt": "caminhar devagar",
        "zh": "慢慢走",
        "example": "Eu consigo caminhar devagar sozinho."
      },
      {
        "pt": "correr rápido",
        "zh": "快速跑",
        "example": "Eu consigo correr rápido sozinho."
      },
      {
        "pt": "pular",
        "zh": "跳",
        "example": "Eu consigo pular sozinho."
      },
      {
        "pt": "dançar devagar",
        "zh": "慢慢跳舞",
        "example": "Eu consigo dançar devagar sozinho."
      },
      {
        "pt": "parar",
        "zh": "停下",
        "example": "Eu consigo parar sozinho."
      },
      {
        "pt": "continuar",
        "zh": "继续",
        "example": "Eu consigo continuar sozinho."
      },
      {
        "pt": "atravessar",
        "zh": "穿过",
        "example": "Eu consigo atravessar sozinho."
      },
      {
        "pt": "retornar",
        "zh": "返回",
        "example": "Eu consigo retornar sozinho."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "课堂用品",
    "topicPt": "Material escolar",
    "words": [
      {
        "pt": "caneta",
        "zh": "钢笔；圆珠笔",
        "example": "Preciso de caneta para a aula."
      },
      {
        "pt": "lápis",
        "zh": "铅笔",
        "example": "Preciso de lápis para a aula."
      },
      {
        "pt": "borracha",
        "zh": "橡皮",
        "example": "Preciso de borracha para a aula."
      },
      {
        "pt": "régua",
        "zh": "尺子",
        "example": "Preciso de régua para a aula."
      },
      {
        "pt": "tesoura",
        "zh": "剪刀",
        "example": "Preciso de tesoura para a aula."
      },
      {
        "pt": "cola",
        "zh": "胶水",
        "example": "Preciso de cola para a aula."
      },
      {
        "pt": "papel",
        "zh": "纸",
        "example": "Preciso de papel para a aula."
      },
      {
        "pt": "folha",
        "zh": "纸张；叶子",
        "example": "Preciso de folha para a aula."
      },
      {
        "pt": "livro didático",
        "zh": "课本",
        "example": "Preciso de livro didático para a aula."
      },
      {
        "pt": "dicionário",
        "zh": "词典",
        "example": "Preciso de dicionário para a aula."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "学习动作",
    "topicPt": "Ações de estudo",
    "words": [
      {
        "pt": "copiar",
        "zh": "抄写",
        "example": "Na aula, vou copiar."
      },
      {
        "pt": "repetir",
        "zh": "重复",
        "example": "Na aula, vou repetir."
      },
      {
        "pt": "soletrar",
        "zh": "拼写",
        "example": "Na aula, vou soletrar."
      },
      {
        "pt": "pronunciar",
        "zh": "发音",
        "example": "Na aula, vou pronunciar."
      },
      {
        "pt": "ouvir o professor",
        "zh": "听老师讲",
        "example": "Na aula, vou ouvir o professor."
      },
      {
        "pt": "responder ao exercício",
        "zh": "回答练习",
        "example": "Na aula, vou responder ao exercício."
      },
      {
        "pt": "marcar a resposta",
        "zh": "标记答案",
        "example": "Na aula, vou marcar a resposta."
      },
      {
        "pt": "corrigir a frase",
        "zh": "改正句子",
        "example": "Na aula, vou corrigir a frase."
      },
      {
        "pt": "memorizar",
        "zh": "记忆",
        "example": "Na aula, vou memorizar."
      },
      {
        "pt": "revisar",
        "zh": "复习",
        "example": "Na aula, vou revisar."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "常见职业",
    "topicPt": "Profissões comuns",
    "words": [
      {
        "pt": "médico",
        "zh": "医生",
        "example": "Ela trabalha como médico."
      },
      {
        "pt": "enfermeiro",
        "zh": "护士",
        "example": "Ela trabalha como enfermeiro."
      },
      {
        "pt": "dentista",
        "zh": "牙医",
        "example": "Ela trabalha como dentista."
      },
      {
        "pt": "motorista",
        "zh": "司机",
        "example": "Ela trabalha como motorista."
      },
      {
        "pt": "cozinheiro",
        "zh": "厨师",
        "example": "Ela trabalha como cozinheiro."
      },
      {
        "pt": "vendedor",
        "zh": "销售员",
        "example": "Ela trabalha como vendedor."
      },
      {
        "pt": "engenheiro",
        "zh": "工程师",
        "example": "Ela trabalha como engenheiro."
      },
      {
        "pt": "secretário",
        "zh": "秘书",
        "example": "Ela trabalha como secretário."
      },
      {
        "pt": "policial",
        "zh": "警察",
        "example": "Ela trabalha como policial."
      },
      {
        "pt": "atendente",
        "zh": "服务人员",
        "example": "Ela trabalha como atendente."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "工作场所",
    "topicPt": "Locais de trabalho",
    "words": [
      {
        "pt": "escritório",
        "zh": "办公室",
        "example": "Hoje trabalho no escritório."
      },
      {
        "pt": "consultório",
        "zh": "诊所",
        "example": "Hoje trabalho no consultório."
      },
      {
        "pt": "fábrica",
        "zh": "工厂",
        "example": "Hoje trabalho no fábrica."
      },
      {
        "pt": "supermercado",
        "zh": "超市",
        "example": "Hoje trabalho no supermercado."
      },
      {
        "pt": "salão",
        "zh": "沙龙；大厅",
        "example": "Hoje trabalho no salão."
      },
      {
        "pt": "oficina",
        "zh": "修理厂；工作室",
        "example": "Hoje trabalho no oficina."
      },
      {
        "pt": "laboratório",
        "zh": "实验室",
        "example": "Hoje trabalho no laboratório."
      },
      {
        "pt": "depósito",
        "zh": "仓库",
        "example": "Hoje trabalho no depósito."
      },
      {
        "pt": "canteiro de obras",
        "zh": "建筑工地",
        "example": "Hoje trabalho no canteiro de obras."
      },
      {
        "pt": "recepção do hotel",
        "zh": "酒店前台",
        "example": "Hoje trabalho no recepção do hotel."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "办公用品",
    "topicPt": "Objetos de escritório",
    "words": [
      {
        "pt": "impressora",
        "zh": "打印机",
        "example": "O escritório tem impressora."
      },
      {
        "pt": "teclado",
        "zh": "键盘",
        "example": "O escritório tem teclado."
      },
      {
        "pt": "mouse",
        "zh": "鼠标",
        "example": "O escritório tem mouse."
      },
      {
        "pt": "monitor",
        "zh": "显示器",
        "example": "O escritório tem monitor."
      },
      {
        "pt": "agenda",
        "zh": "日程本",
        "example": "O escritório tem agenda."
      },
      {
        "pt": "calendário",
        "zh": "日历",
        "example": "O escritório tem calendário."
      },
      {
        "pt": "envelope",
        "zh": "信封",
        "example": "O escritório tem envelope."
      },
      {
        "pt": "grampeador",
        "zh": "订书机",
        "example": "O escritório tem grampeador."
      },
      {
        "pt": "clipe",
        "zh": "回形针",
        "example": "O escritório tem clipe."
      },
      {
        "pt": "pasta",
        "zh": "文件夹",
        "example": "O escritório tem pasta."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "交通工具",
    "topicPt": "Meios de transporte",
    "words": [
      {
        "pt": "carro",
        "zh": "汽车",
        "example": "Hoje vou de carro."
      },
      {
        "pt": "bicicleta",
        "zh": "自行车",
        "example": "Hoje vou de bicicleta."
      },
      {
        "pt": "moto",
        "zh": "摩托车",
        "example": "Hoje vou de moto."
      },
      {
        "pt": "trem",
        "zh": "火车",
        "example": "Hoje vou de trem."
      },
      {
        "pt": "avião",
        "zh": "飞机",
        "example": "Hoje vou de avião."
      },
      {
        "pt": "barco",
        "zh": "船",
        "example": "Hoje vou de barco."
      },
      {
        "pt": "táxi",
        "zh": "出租车",
        "example": "Hoje vou de táxi."
      },
      {
        "pt": "van",
        "zh": "面包车",
        "example": "Hoje vou de van."
      },
      {
        "pt": "caminhão",
        "zh": "卡车",
        "example": "Hoje vou de caminhão."
      },
      {
        "pt": "patinete",
        "zh": "滑板车",
        "example": "Hoje vou de patinete."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "道路设施",
    "topicPt": "Na rua",
    "words": [
      {
        "pt": "semáforo",
        "zh": "红绿灯",
        "example": "Há semáforo nesta rua."
      },
      {
        "pt": "faixa de pedestres",
        "zh": "人行横道",
        "example": "Há faixa de pedestres nesta rua."
      },
      {
        "pt": "calçada",
        "zh": "人行道",
        "example": "Há calçada nesta rua."
      },
      {
        "pt": "cruzamento",
        "zh": "十字路口",
        "example": "Há cruzamento nesta rua."
      },
      {
        "pt": "ponte",
        "zh": "桥",
        "example": "Há ponte nesta rua."
      },
      {
        "pt": "túnel",
        "zh": "隧道",
        "example": "Há túnel nesta rua."
      },
      {
        "pt": "avenida",
        "zh": "大街",
        "example": "Há avenida nesta rua."
      },
      {
        "pt": "esquina",
        "zh": "街角",
        "example": "Há esquina nesta rua."
      },
      {
        "pt": "placa",
        "zh": "标志牌",
        "example": "Há placa nesta rua."
      },
      {
        "pt": "parada de ônibus",
        "zh": "公交车站",
        "example": "Há parada de ônibus nesta rua."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "机场出行",
    "topicPt": "No aeroporto",
    "words": [
      {
        "pt": "portão de embarque",
        "zh": "登机口",
        "example": "Procuro portão de embarque no aeroporto."
      },
      {
        "pt": "balcão de check-in",
        "zh": "值机柜台",
        "example": "Procuro balcão de check-in no aeroporto."
      },
      {
        "pt": "cartão de embarque",
        "zh": "登机牌",
        "example": "Procuro cartão de embarque no aeroporto."
      },
      {
        "pt": "documento",
        "zh": "证件；文件",
        "example": "Procuro documento no aeroporto."
      },
      {
        "pt": "passaporte",
        "zh": "护照",
        "example": "Procuro passaporte no aeroporto."
      },
      {
        "pt": "voo",
        "zh": "航班",
        "example": "Procuro voo no aeroporto."
      },
      {
        "pt": "bagagem",
        "zh": "行李",
        "example": "Procuro bagagem no aeroporto."
      },
      {
        "pt": "assento",
        "zh": "座位",
        "example": "Procuro assento no aeroporto."
      },
      {
        "pt": "segurança",
        "zh": "安检；安全",
        "example": "Procuro segurança no aeroporto."
      },
      {
        "pt": "terminal",
        "zh": "航站楼",
        "example": "Procuro terminal no aeroporto."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "公交出行",
    "topicPt": "No ônibus",
    "words": [
      {
        "pt": "bilhete",
        "zh": "车票",
        "example": "Preciso de bilhete no ônibus."
      },
      {
        "pt": "motorista do ônibus",
        "zh": "公交司机",
        "example": "Preciso de motorista do ônibus no ônibus."
      },
      {
        "pt": "cobrador",
        "zh": "售票员",
        "example": "Preciso de cobrador no ônibus."
      },
      {
        "pt": "catraca",
        "zh": "闸机",
        "example": "Preciso de catraca no ônibus."
      },
      {
        "pt": "mapa da linha",
        "zh": "线路图",
        "example": "Preciso de mapa da linha no ônibus."
      },
      {
        "pt": "ponto final",
        "zh": "终点站",
        "example": "Preciso de ponto final no ônibus."
      },
      {
        "pt": "próxima parada",
        "zh": "下一站",
        "example": "Preciso de próxima parada no ônibus."
      },
      {
        "pt": "assento livre",
        "zh": "空座位",
        "example": "Preciso de assento livre no ônibus."
      },
      {
        "pt": "janela aberta",
        "zh": "开着的窗",
        "example": "Preciso de janela aberta no ônibus."
      },
      {
        "pt": "saída de emergência",
        "zh": "紧急出口",
        "example": "Preciso de saída de emergência no ônibus."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "自然景物",
    "topicPt": "Natureza",
    "words": [
      {
        "pt": "céu",
        "zh": "天空",
        "example": "Vejo céu na natureza."
      },
      {
        "pt": "nuvem",
        "zh": "云",
        "example": "Vejo nuvem na natureza."
      },
      {
        "pt": "estrela",
        "zh": "星星",
        "example": "Vejo estrela na natureza."
      },
      {
        "pt": "lua",
        "zh": "月亮",
        "example": "Vejo lua na natureza."
      },
      {
        "pt": "terra",
        "zh": "土地；地球",
        "example": "Vejo terra na natureza."
      },
      {
        "pt": "pedra",
        "zh": "石头",
        "example": "Vejo pedra na natureza."
      },
      {
        "pt": "areia",
        "zh": "沙子",
        "example": "Vejo areia na natureza."
      },
      {
        "pt": "cachoeira",
        "zh": "瀑布",
        "example": "Vejo cachoeira na natureza."
      },
      {
        "pt": "lago",
        "zh": "湖",
        "example": "Vejo lago na natureza."
      },
      {
        "pt": "ilha",
        "zh": "岛",
        "example": "Vejo ilha na natureza."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "宠物",
    "topicPt": "Animais de estimação",
    "words": [
      {
        "pt": "cachorro",
        "zh": "狗",
        "example": "Em casa, temos cachorro."
      },
      {
        "pt": "gato",
        "zh": "猫",
        "example": "Em casa, temos gato."
      },
      {
        "pt": "pássaro",
        "zh": "鸟",
        "example": "Em casa, temos pássaro."
      },
      {
        "pt": "coelho",
        "zh": "兔子",
        "example": "Em casa, temos coelho."
      },
      {
        "pt": "peixinho",
        "zh": "小鱼",
        "example": "Em casa, temos peixinho."
      },
      {
        "pt": "tartaruga",
        "zh": "乌龟",
        "example": "Em casa, temos tartaruga."
      },
      {
        "pt": "hamster",
        "zh": "仓鼠",
        "example": "Em casa, temos hamster."
      },
      {
        "pt": "ração",
        "zh": "宠物粮",
        "example": "Em casa, temos ração."
      },
      {
        "pt": "coleira",
        "zh": "项圈",
        "example": "Em casa, temos coleira."
      },
      {
        "pt": "aquário",
        "zh": "鱼缸",
        "example": "Em casa, temos aquário."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "农场动物",
    "topicPt": "Animais da fazenda",
    "words": [
      {
        "pt": "vaca",
        "zh": "奶牛",
        "example": "Na fazenda, há vaca."
      },
      {
        "pt": "cavalo",
        "zh": "马",
        "example": "Na fazenda, há cavalo."
      },
      {
        "pt": "porco",
        "zh": "猪",
        "example": "Na fazenda, há porco."
      },
      {
        "pt": "galinha",
        "zh": "母鸡",
        "example": "Na fazenda, há galinha."
      },
      {
        "pt": "galo",
        "zh": "公鸡",
        "example": "Na fazenda, há galo."
      },
      {
        "pt": "pato",
        "zh": "鸭子",
        "example": "Na fazenda, há pato."
      },
      {
        "pt": "ovelha",
        "zh": "绵羊",
        "example": "Na fazenda, há ovelha."
      },
      {
        "pt": "cabra",
        "zh": "山羊",
        "example": "Na fazenda, há cabra."
      },
      {
        "pt": "bezerro",
        "zh": "小牛",
        "example": "Na fazenda, há bezerro."
      },
      {
        "pt": "pintinho",
        "zh": "小鸡",
        "example": "Na fazenda, há pintinho."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "野生动物",
    "topicPt": "Animais selvagens",
    "words": [
      {
        "pt": "leão",
        "zh": "狮子",
        "example": "No zoológico, vi leão."
      },
      {
        "pt": "tigre",
        "zh": "老虎",
        "example": "No zoológico, vi tigre."
      },
      {
        "pt": "elefante",
        "zh": "大象",
        "example": "No zoológico, vi elefante."
      },
      {
        "pt": "macaco",
        "zh": "猴子",
        "example": "No zoológico, vi macaco."
      },
      {
        "pt": "girafa",
        "zh": "长颈鹿",
        "example": "No zoológico, vi girafa."
      },
      {
        "pt": "urso",
        "zh": "熊",
        "example": "No zoológico, vi urso."
      },
      {
        "pt": "lobo",
        "zh": "狼",
        "example": "No zoológico, vi lobo."
      },
      {
        "pt": "raposa",
        "zh": "狐狸",
        "example": "No zoológico, vi raposa."
      },
      {
        "pt": "cobra",
        "zh": "蛇",
        "example": "No zoológico, vi cobra."
      },
      {
        "pt": "jacaré",
        "zh": "鳄鱼",
        "example": "No zoológico, vi jacaré."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "手工爱好",
    "topicPt": "Hobbies manuais",
    "words": [
      {
        "pt": "pintar",
        "zh": "绘画；涂色",
        "example": "Gosto de pintar no fim de semana."
      },
      {
        "pt": "costurar",
        "zh": "缝纫",
        "example": "Gosto de costurar no fim de semana."
      },
      {
        "pt": "tricotar",
        "zh": "编织",
        "example": "Gosto de tricotar no fim de semana."
      },
      {
        "pt": "fotografar",
        "zh": "拍照",
        "example": "Gosto de fotografar no fim de semana."
      },
      {
        "pt": "montar quebra-cabeça",
        "zh": "拼拼图",
        "example": "Gosto de montar quebra-cabeça no fim de semana."
      },
      {
        "pt": "fazer artesanato",
        "zh": "做手工",
        "example": "Gosto de fazer artesanato no fim de semana."
      },
      {
        "pt": "cuidar das plantas",
        "zh": "照料植物",
        "example": "Gosto de cuidar das plantas no fim de semana."
      },
      {
        "pt": "colecionar moedas",
        "zh": "收集硬币",
        "example": "Gosto de colecionar moedas no fim de semana."
      },
      {
        "pt": "modelar argila",
        "zh": "捏陶土",
        "example": "Gosto de modelar argila no fim de semana."
      },
      {
        "pt": "decorar a casa",
        "zh": "装饰房屋",
        "example": "Gosto de decorar a casa no fim de semana."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "基础运动",
    "topicPt": "Esportes básicos",
    "words": [
      {
        "pt": "futebol",
        "zh": "足球",
        "example": "Gosto de futebol com amigos."
      },
      {
        "pt": "basquete",
        "zh": "篮球",
        "example": "Gosto de basquete com amigos."
      },
      {
        "pt": "vôlei",
        "zh": "排球",
        "example": "Gosto de vôlei com amigos."
      },
      {
        "pt": "tênis",
        "zh": "网球",
        "example": "Gosto de tênis com amigos."
      },
      {
        "pt": "ciclismo",
        "zh": "骑行",
        "example": "Gosto de ciclismo com amigos."
      },
      {
        "pt": "ginástica",
        "zh": "体操",
        "example": "Gosto de ginástica com amigos."
      },
      {
        "pt": "surfe",
        "zh": "冲浪",
        "example": "Gosto de surfe com amigos."
      },
      {
        "pt": "boxe",
        "zh": "拳击",
        "example": "Gosto de boxe com amigos."
      },
      {
        "pt": "pingue-pongue",
        "zh": "乒乓球",
        "example": "Gosto de pingue-pongue com amigos."
      },
      {
        "pt": "badminton",
        "zh": "羽毛球",
        "example": "Gosto de badminton com amigos."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "音乐基础",
    "topicPt": "Música",
    "words": [
      {
        "pt": "canção",
        "zh": "歌曲",
        "example": "Na música, ouvimos canção."
      },
      {
        "pt": "voz",
        "zh": "声音；嗓音",
        "example": "Na música, ouvimos voz."
      },
      {
        "pt": "violão",
        "zh": "吉他",
        "example": "Na música, ouvimos violão."
      },
      {
        "pt": "piano",
        "zh": "钢琴",
        "example": "Na música, ouvimos piano."
      },
      {
        "pt": "bateria musical",
        "zh": "架子鼓",
        "example": "Na música, ouvimos bateria musical."
      },
      {
        "pt": "flauta",
        "zh": "长笛",
        "example": "Na música, ouvimos flauta."
      },
      {
        "pt": "ritmo",
        "zh": "节奏",
        "example": "Na música, ouvimos ritmo."
      },
      {
        "pt": "letra da música",
        "zh": "歌词",
        "example": "Na música, ouvimos letra da música."
      },
      {
        "pt": "cantor",
        "zh": "歌手",
        "example": "Na música, ouvimos cantor."
      },
      {
        "pt": "banda",
        "zh": "乐队",
        "example": "Na música, ouvimos banda."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "影视节目",
    "topicPt": "Cinema e televisão",
    "words": [
      {
        "pt": "série",
        "zh": "电视剧",
        "example": "Hoje quero ver série."
      },
      {
        "pt": "programa",
        "zh": "节目",
        "example": "Hoje quero ver programa."
      },
      {
        "pt": "desenho animado",
        "zh": "动画片",
        "example": "Hoje quero ver desenho animado."
      },
      {
        "pt": "documentário",
        "zh": "纪录片",
        "example": "Hoje quero ver documentário."
      },
      {
        "pt": "comédia",
        "zh": "喜剧",
        "example": "Hoje quero ver comédia."
      },
      {
        "pt": "aventura",
        "zh": "冒险片",
        "example": "Hoje quero ver aventura."
      },
      {
        "pt": "episódio",
        "zh": "一集",
        "example": "Hoje quero ver episódio."
      },
      {
        "pt": "canal",
        "zh": "频道",
        "example": "Hoje quero ver canal."
      },
      {
        "pt": "controle remoto",
        "zh": "遥控器",
        "example": "Hoje quero ver controle remoto."
      },
      {
        "pt": "legenda",
        "zh": "字幕",
        "example": "Hoje quero ver legenda."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "积极感受",
    "topicPt": "Sentimentos positivos",
    "words": [
      {
        "pt": "alegria",
        "zh": "喜悦",
        "example": "Hoje sinto alegria."
      },
      {
        "pt": "amor",
        "zh": "爱",
        "example": "Hoje sinto amor."
      },
      {
        "pt": "esperança",
        "zh": "希望",
        "example": "Hoje sinto esperança."
      },
      {
        "pt": "paz",
        "zh": "平静",
        "example": "Hoje sinto paz."
      },
      {
        "pt": "coragem",
        "zh": "勇气",
        "example": "Hoje sinto coragem."
      },
      {
        "pt": "interesse",
        "zh": "兴趣",
        "example": "Hoje sinto interesse."
      },
      {
        "pt": "prazer",
        "zh": "愉快",
        "example": "Hoje sinto prazer."
      },
      {
        "pt": "alívio",
        "zh": "宽慰",
        "example": "Hoje sinto alívio."
      },
      {
        "pt": "carinho",
        "zh": "关爱",
        "example": "Hoje sinto carinho."
      },
      {
        "pt": "gratidão",
        "zh": "感激",
        "example": "Hoje sinto gratidão."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "性格特点",
    "topicPt": "Personalidade",
    "words": [
      {
        "pt": "amável",
        "zh": "和蔼的",
        "example": "Meu amigo é muito amável."
      },
      {
        "pt": "educado",
        "zh": "有礼貌的",
        "example": "Meu amigo é muito educado."
      },
      {
        "pt": "honesto",
        "zh": "诚实的",
        "example": "Meu amigo é muito honesto."
      },
      {
        "pt": "paciente",
        "zh": "有耐心的",
        "example": "Meu amigo é muito paciente."
      },
      {
        "pt": "tímido",
        "zh": "害羞的",
        "example": "Meu amigo é muito tímido."
      },
      {
        "pt": "sério",
        "zh": "严肃的",
        "example": "Meu amigo é muito sério."
      },
      {
        "pt": "engraçado",
        "zh": "风趣的",
        "example": "Meu amigo é muito engraçado."
      },
      {
        "pt": "generoso",
        "zh": "慷慨的",
        "example": "Meu amigo é muito generoso."
      },
      {
        "pt": "curioso",
        "zh": "好奇的",
        "example": "Meu amigo é muito curioso."
      },
      {
        "pt": "ativo",
        "zh": "活跃的",
        "example": "Meu amigo é muito ativo."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "身体状态",
    "topicPt": "Estados físicos",
    "words": [
      {
        "pt": "acordado",
        "zh": "醒着的",
        "example": "Depois do trabalho, estou acordado."
      },
      {
        "pt": "sonolento",
        "zh": "困倦的",
        "example": "Depois do trabalho, estou sonolento."
      },
      {
        "pt": "descansado",
        "zh": "休息好的",
        "example": "Depois do trabalho, estou descansado."
      },
      {
        "pt": "ocupado",
        "zh": "忙碌的",
        "example": "Depois do trabalho, estou ocupado."
      },
      {
        "pt": "livre",
        "zh": "空闲的；自由的",
        "example": "Depois do trabalho, estou livre."
      },
      {
        "pt": "com sede",
        "zh": "口渴",
        "example": "Depois do trabalho, estou com sede."
      },
      {
        "pt": "com sono",
        "zh": "困倦",
        "example": "Depois do trabalho, estou com sono."
      },
      {
        "pt": "com pressa",
        "zh": "匆忙",
        "example": "Depois do trabalho, estou com pressa."
      },
      {
        "pt": "com frio",
        "zh": "觉得冷",
        "example": "Depois do trabalho, estou com frio."
      },
      {
        "pt": "com calor",
        "zh": "觉得热",
        "example": "Depois do trabalho, estou com calor."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "月份上半年",
    "topicPt": "Meses: primeiro semestre",
    "words": [
      {
        "pt": "janeiro",
        "zh": "一月",
        "example": "Meu curso começa em janeiro."
      },
      {
        "pt": "fevereiro",
        "zh": "二月",
        "example": "Meu curso começa em fevereiro."
      },
      {
        "pt": "março",
        "zh": "三月",
        "example": "Meu curso começa em março."
      },
      {
        "pt": "abril",
        "zh": "四月",
        "example": "Meu curso começa em abril."
      },
      {
        "pt": "maio",
        "zh": "五月",
        "example": "Meu curso começa em maio."
      },
      {
        "pt": "junho",
        "zh": "六月",
        "example": "Meu curso começa em junho."
      },
      {
        "pt": "início do ano",
        "zh": "年初",
        "example": "Meu curso começa em início do ano."
      },
      {
        "pt": "fim do mês",
        "zh": "月底",
        "example": "Meu curso começa em fim do mês."
      },
      {
        "pt": "primeiro semestre",
        "zh": "上半年",
        "example": "Meu curso começa em primeiro semestre."
      },
      {
        "pt": "meados de maio",
        "zh": "五月中旬",
        "example": "Meu curso começa em meados de maio."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "月份下半年",
    "topicPt": "Meses: segundo semestre",
    "words": [
      {
        "pt": "julho",
        "zh": "七月",
        "example": "Vou viajar em julho."
      },
      {
        "pt": "agosto",
        "zh": "八月",
        "example": "Vou viajar em agosto."
      },
      {
        "pt": "setembro",
        "zh": "九月",
        "example": "Vou viajar em setembro."
      },
      {
        "pt": "outubro",
        "zh": "十月",
        "example": "Vou viajar em outubro."
      },
      {
        "pt": "novembro",
        "zh": "十一月",
        "example": "Vou viajar em novembro."
      },
      {
        "pt": "dezembro",
        "zh": "十二月",
        "example": "Vou viajar em dezembro."
      },
      {
        "pt": "segundo semestre",
        "zh": "下半年",
        "example": "Vou viajar em segundo semestre."
      },
      {
        "pt": "fim do ano",
        "zh": "年末",
        "example": "Vou viajar em fim do ano."
      },
      {
        "pt": "começo de agosto",
        "zh": "八月初",
        "example": "Vou viajar em começo de agosto."
      },
      {
        "pt": "meados de dezembro",
        "zh": "十二月中旬",
        "example": "Vou viajar em meados de dezembro."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "钟点表达",
    "topicPt": "Horas do dia",
    "words": [
      {
        "pt": "ao meio-dia",
        "zh": "在中午",
        "example": "Chego ao meio-dia."
      },
      {
        "pt": "à meia-noite",
        "zh": "在午夜",
        "example": "Chego à meia-noite."
      },
      {
        "pt": "às sete e meia",
        "zh": "在七点半",
        "example": "Chego às sete e meia."
      },
      {
        "pt": "às oito em ponto",
        "zh": "在八点整",
        "example": "Chego às oito em ponto."
      },
      {
        "pt": "daqui a uma hora",
        "zh": "一小时后",
        "example": "Chego daqui a uma hora."
      },
      {
        "pt": "em dez minutos",
        "zh": "十分钟后",
        "example": "Chego em dez minutos."
      },
      {
        "pt": "antes das nove",
        "zh": "九点前",
        "example": "Chego antes das nove."
      },
      {
        "pt": "depois das cinco",
        "zh": "五点后",
        "example": "Chego depois das cinco."
      },
      {
        "pt": "por volta das seis",
        "zh": "六点左右",
        "example": "Chego por volta das seis."
      },
      {
        "pt": "no começo da tarde",
        "zh": "下午初",
        "example": "Chego no começo da tarde."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "频率表达",
    "topicPt": "Frequência",
    "words": [
      {
        "pt": "todo dia",
        "zh": "每天",
        "example": "Eu estudo português todo dia."
      },
      {
        "pt": "às vezes",
        "zh": "有时",
        "example": "Eu estudo português às vezes."
      },
      {
        "pt": "quase sempre",
        "zh": "几乎总是",
        "example": "Eu estudo português quase sempre."
      },
      {
        "pt": "raramente",
        "zh": "很少",
        "example": "Eu estudo português raramente."
      },
      {
        "pt": "nunca",
        "zh": "从不",
        "example": "Eu estudo português nunca."
      },
      {
        "pt": "uma vez por semana",
        "zh": "每周一次",
        "example": "Eu estudo português uma vez por semana."
      },
      {
        "pt": "duas vezes por mês",
        "zh": "每月两次",
        "example": "Eu estudo português duas vezes por mês."
      },
      {
        "pt": "de vez em quando",
        "zh": "偶尔",
        "example": "Eu estudo português de vez em quando."
      },
      {
        "pt": "todos os fins de semana",
        "zh": "每个周末",
        "example": "Eu estudo português todos os fins de semana."
      },
      {
        "pt": "uma vez ao dia",
        "zh": "每天一次",
        "example": "Eu estudo português uma vez ao dia."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "礼貌回应",
    "topicPt": "Respostas de cortesia",
    "words": [
      {
        "pt": "de nada",
        "zh": "不客气",
        "example": "Em português, posso dizer: “de nada”."
      },
      {
        "pt": "imagina",
        "zh": "别客气",
        "example": "Em português, posso dizer: “imagina”."
      },
      {
        "pt": "pois não",
        "zh": "好的；请讲",
        "example": "Em português, posso dizer: “pois não”."
      },
      {
        "pt": "com certeza",
        "zh": "当然；确定",
        "example": "Em português, posso dizer: “com certeza”."
      },
      {
        "pt": "tudo bem",
        "zh": "没关系；一切都好",
        "example": "Em português, posso dizer: “tudo bem”."
      },
      {
        "pt": "sem problema",
        "zh": "没问题",
        "example": "Em português, posso dizer: “sem problema”."
      },
      {
        "pt": "desculpe",
        "zh": "请原谅",
        "example": "Em português, posso dizer: “desculpe”."
      },
      {
        "pt": "obrigado pela atenção",
        "zh": "谢谢关注",
        "example": "Em português, posso dizer: “obrigado pela atenção”."
      },
      {
        "pt": "seja bem-vindo",
        "zh": "欢迎",
        "example": "Em português, posso dizer: “seja bem-vindo”."
      },
      {
        "pt": "até amanhã",
        "zh": "明天见",
        "example": "Em português, posso dizer: “até amanhã”."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "自我介绍",
    "topicPt": "Apresentação pessoal",
    "words": [
      {
        "pt": "meu nome é",
        "zh": "我的名字是",
        "example": "Na apresentação, digo: “meu nome é”."
      },
      {
        "pt": "eu sou estudante",
        "zh": "我是学生",
        "example": "Na apresentação, digo: “eu sou estudante”."
      },
      {
        "pt": "eu moro aqui",
        "zh": "我住在这里",
        "example": "Na apresentação, digo: “eu moro aqui”."
      },
      {
        "pt": "tenho vinte anos",
        "zh": "我二十岁",
        "example": "Na apresentação, digo: “tenho vinte anos”."
      },
      {
        "pt": "sou da China",
        "zh": "我来自中国",
        "example": "Na apresentação, digo: “sou da China”."
      },
      {
        "pt": "falo chinês",
        "zh": "我说中文",
        "example": "Na apresentação, digo: “falo chinês”."
      },
      {
        "pt": "estudo português",
        "zh": "我学习葡语",
        "example": "Na apresentação, digo: “estudo português”."
      },
      {
        "pt": "trabalho em casa",
        "zh": "我在家工作",
        "example": "Na apresentação, digo: “trabalho em casa”."
      },
      {
        "pt": "prazer em conhecer",
        "zh": "很高兴认识你",
        "example": "Na apresentação, digo: “prazer em conhecer”."
      },
      {
        "pt": "este é meu amigo",
        "zh": "这是我的朋友",
        "example": "Na apresentação, digo: “este é meu amigo”."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "常用疑问",
    "topicPt": "Perguntas comuns",
    "words": [
      {
        "pt": "quem é",
        "zh": "是谁",
        "example": "Quero perguntar: “quem é?”"
      },
      {
        "pt": "o que é",
        "zh": "是什么",
        "example": "Quero perguntar: “o que é?”"
      },
      {
        "pt": "onde fica",
        "zh": "在哪里",
        "example": "Quero perguntar: “onde fica?”"
      },
      {
        "pt": "quando começa",
        "zh": "什么时候开始",
        "example": "Quero perguntar: “quando começa?”"
      },
      {
        "pt": "como funciona",
        "zh": "如何运作",
        "example": "Quero perguntar: “como funciona?”"
      },
      {
        "pt": "quanto custa",
        "zh": "多少钱",
        "example": "Quero perguntar: “quanto custa?”"
      },
      {
        "pt": "qual você prefere",
        "zh": "你更喜欢哪个",
        "example": "Quero perguntar: “qual você prefere?”"
      },
      {
        "pt": "por que não",
        "zh": "为什么不",
        "example": "Quero perguntar: “por que não?”"
      },
      {
        "pt": "que horas são",
        "zh": "几点了",
        "example": "Quero perguntar: “que horas são?”"
      },
      {
        "pt": "tem certeza",
        "zh": "你确定吗",
        "example": "Quero perguntar: “tem certeza?”"
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "基础连接词",
    "topicPt": "Conectores básicos",
    "words": [
      {
        "pt": "e",
        "zh": "和；并且",
        "example": "Esta frase usa “e”."
      },
      {
        "pt": "ou",
        "zh": "或者",
        "example": "Esta frase usa “ou”."
      },
      {
        "pt": "mas",
        "zh": "但是",
        "example": "Esta frase usa “mas”."
      },
      {
        "pt": "porque",
        "zh": "因为",
        "example": "Esta frase usa “porque”."
      },
      {
        "pt": "então",
        "zh": "那么；所以",
        "example": "Esta frase usa “então”."
      },
      {
        "pt": "se",
        "zh": "如果",
        "example": "Esta frase usa “se”."
      },
      {
        "pt": "quando",
        "zh": "当……时",
        "example": "Esta frase usa “quando”."
      },
      {
        "pt": "antes",
        "zh": "之前",
        "example": "Esta frase usa “antes”."
      },
      {
        "pt": "depois disso",
        "zh": "在那之后",
        "example": "Esta frase usa “depois disso”."
      },
      {
        "pt": "por exemplo",
        "zh": "例如",
        "example": "Esta frase usa “por exemplo”."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "位置介词",
    "topicPt": "Preposições de lugar",
    "words": [
      {
        "pt": "dentro",
        "zh": "在里面",
        "example": "A bola está dentro da caixa."
      },
      {
        "pt": "fora",
        "zh": "在外面",
        "example": "A bola está fora da caixa."
      },
      {
        "pt": "em cima",
        "zh": "在上面",
        "example": "A bola está em cima da caixa."
      },
      {
        "pt": "embaixo",
        "zh": "在下面",
        "example": "A bola está embaixo da caixa."
      },
      {
        "pt": "na frente",
        "zh": "在前面",
        "example": "A bola está na frente da caixa."
      },
      {
        "pt": "do lado direito",
        "zh": "在右边",
        "example": "A bola está do lado direito da caixa."
      },
      {
        "pt": "do lado esquerdo",
        "zh": "在左边",
        "example": "A bola está do lado esquerdo da caixa."
      },
      {
        "pt": "próximo",
        "zh": "在附近",
        "example": "A bola está próximo da caixa."
      },
      {
        "pt": "distante",
        "zh": "在远处",
        "example": "A bola está distante da caixa."
      },
      {
        "pt": "ao redor",
        "zh": "在周围",
        "example": "A bola está ao redor da caixa."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "方式副词",
    "topicPt": "Advérbios de modo",
    "words": [
      {
        "pt": "bem",
        "zh": "好地",
        "example": "Faça o exercício bem."
      },
      {
        "pt": "mal",
        "zh": "不好地",
        "example": "Faça o exercício mal."
      },
      {
        "pt": "devagar",
        "zh": "慢慢地",
        "example": "Faça o exercício devagar."
      },
      {
        "pt": "rápido",
        "zh": "快速地",
        "example": "Faça o exercício rápido."
      },
      {
        "pt": "junto",
        "zh": "一起",
        "example": "Faça o exercício junto."
      },
      {
        "pt": "separado",
        "zh": "分开地",
        "example": "Faça o exercício separado."
      },
      {
        "pt": "sozinho",
        "zh": "独自地",
        "example": "Faça o exercício sozinho."
      },
      {
        "pt": "em silêncio",
        "zh": "安静地",
        "example": "Faça o exercício em silêncio."
      },
      {
        "pt": "com cuidado",
        "zh": "小心地",
        "example": "Faça o exercício com cuidado."
      },
      {
        "pt": "com calma",
        "zh": "冷静地",
        "example": "Faça o exercício com calma."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "常用形容词一",
    "topicPt": "Adjetivos comuns I",
    "words": [
      {
        "pt": "fácil",
        "zh": "容易的",
        "example": "O exercício parece fácil."
      },
      {
        "pt": "difícil",
        "zh": "困难的",
        "example": "O exercício parece difícil."
      },
      {
        "pt": "simples",
        "zh": "简单的",
        "example": "O exercício parece simples."
      },
      {
        "pt": "importante",
        "zh": "重要的",
        "example": "O exercício parece importante."
      },
      {
        "pt": "interessante",
        "zh": "有趣的",
        "example": "O exercício parece interessante."
      },
      {
        "pt": "correto",
        "zh": "正确的",
        "example": "O exercício parece correto."
      },
      {
        "pt": "errado",
        "zh": "错误的",
        "example": "O exercício parece errado."
      },
      {
        "pt": "possível",
        "zh": "可能的",
        "example": "O exercício parece possível."
      },
      {
        "pt": "necessário",
        "zh": "必要的",
        "example": "O exercício parece necessário."
      },
      {
        "pt": "diferente",
        "zh": "不同的",
        "example": "O exercício parece diferente."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "常用形容词二",
    "topicPt": "Adjetivos comuns II",
    "words": [
      {
        "pt": "limpo",
        "zh": "干净的",
        "example": "O quarto está limpo."
      },
      {
        "pt": "sujo",
        "zh": "脏的",
        "example": "O quarto está sujo."
      },
      {
        "pt": "claro",
        "zh": "明亮的；清楚的",
        "example": "O quarto está claro."
      },
      {
        "pt": "escuro",
        "zh": "黑暗的",
        "example": "O quarto está escuro."
      },
      {
        "pt": "cheio",
        "zh": "满的",
        "example": "O quarto está cheio."
      },
      {
        "pt": "vazio",
        "zh": "空的",
        "example": "O quarto está vazio."
      },
      {
        "pt": "aberto",
        "zh": "开着的",
        "example": "O quarto está aberto."
      },
      {
        "pt": "fechado",
        "zh": "关着的",
        "example": "O quarto está fechado."
      },
      {
        "pt": "novo",
        "zh": "新的",
        "example": "O quarto está novo."
      },
      {
        "pt": "confortável",
        "zh": "舒适的",
        "example": "O quarto está confortável."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "感官动词",
    "topicPt": "Verbos dos sentidos",
    "words": [
      {
        "pt": "ver",
        "zh": "看见",
        "example": "Eu posso ver daqui."
      },
      {
        "pt": "ouvir",
        "zh": "听见",
        "example": "Eu posso ouvir daqui."
      },
      {
        "pt": "sentir",
        "zh": "感觉；闻到",
        "example": "Eu posso sentir daqui."
      },
      {
        "pt": "olhar",
        "zh": "看",
        "example": "Eu posso olhar daqui."
      },
      {
        "pt": "escutar",
        "zh": "听",
        "example": "Eu posso escutar daqui."
      },
      {
        "pt": "cheirar",
        "zh": "闻",
        "example": "Eu posso cheirar daqui."
      },
      {
        "pt": "tocar",
        "zh": "触摸",
        "example": "Eu posso tocar daqui."
      },
      {
        "pt": "provar",
        "zh": "品尝",
        "example": "Eu posso provar daqui."
      },
      {
        "pt": "observar",
        "zh": "观察",
        "example": "Eu posso observar daqui."
      },
      {
        "pt": "notar",
        "zh": "注意到",
        "example": "Eu posso notar daqui."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "交流动作",
    "topicPt": "Ações de comunicação",
    "words": [
      {
        "pt": "dizer",
        "zh": "说",
        "example": "Hoje preciso dizer."
      },
      {
        "pt": "contar",
        "zh": "讲述；数数",
        "example": "Hoje preciso contar."
      },
      {
        "pt": "chamar",
        "zh": "呼叫；称呼",
        "example": "Hoje preciso chamar."
      },
      {
        "pt": "mostrar",
        "zh": "展示",
        "example": "Hoje preciso mostrar."
      },
      {
        "pt": "pedir",
        "zh": "请求；点单",
        "example": "Hoje preciso pedir."
      },
      {
        "pt": "agradecer",
        "zh": "感谢",
        "example": "Hoje preciso agradecer."
      },
      {
        "pt": "cumprimentar",
        "zh": "问候",
        "example": "Hoje preciso cumprimentar."
      },
      {
        "pt": "conversar",
        "zh": "交谈",
        "example": "Hoje preciso conversar."
      },
      {
        "pt": "telefonar",
        "zh": "打电话",
        "example": "Hoje preciso telefonar."
      },
      {
        "pt": "mandar mensagem",
        "zh": "发消息",
        "example": "Hoje preciso mandar mensagem."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "给予与接收",
    "topicPt": "Dar e receber",
    "words": [
      {
        "pt": "dar",
        "zh": "给",
        "example": "Eu posso dar agora."
      },
      {
        "pt": "receber um presente",
        "zh": "收到礼物",
        "example": "Eu posso receber um presente agora."
      },
      {
        "pt": "emprestar",
        "zh": "借给",
        "example": "Eu posso emprestar agora."
      },
      {
        "pt": "pegar emprestado",
        "zh": "借入",
        "example": "Eu posso pegar emprestado agora."
      },
      {
        "pt": "entregar",
        "zh": "交付",
        "example": "Eu posso entregar agora."
      },
      {
        "pt": "buscar",
        "zh": "去取；寻找",
        "example": "Eu posso buscar agora."
      },
      {
        "pt": "dividir",
        "zh": "分享；分开",
        "example": "Eu posso dividir agora."
      },
      {
        "pt": "oferecer",
        "zh": "提供",
        "example": "Eu posso oferecer agora."
      },
      {
        "pt": "aceitar",
        "zh": "接受",
        "example": "Eu posso aceitar agora."
      },
      {
        "pt": "recusar",
        "zh": "拒绝",
        "example": "Eu posso recusar agora."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "居家动作",
    "topicPt": "Ações em casa",
    "words": [
      {
        "pt": "varrer",
        "zh": "扫地",
        "example": "Em casa, preciso varrer."
      },
      {
        "pt": "passar pano",
        "zh": "拖地；擦拭",
        "example": "Em casa, preciso passar pano."
      },
      {
        "pt": "tirar o lixo",
        "zh": "倒垃圾",
        "example": "Em casa, preciso tirar o lixo."
      },
      {
        "pt": "dobrar a roupa",
        "zh": "叠衣服",
        "example": "Em casa, preciso dobrar a roupa."
      },
      {
        "pt": "fazer a cama",
        "zh": "整理床铺",
        "example": "Em casa, preciso fazer a cama."
      },
      {
        "pt": "regar as plantas",
        "zh": "给植物浇水",
        "example": "Em casa, preciso regar as plantas."
      },
      {
        "pt": "alimentar o cachorro",
        "zh": "喂狗",
        "example": "Em casa, preciso alimentar o cachorro."
      },
      {
        "pt": "consertar a cadeira",
        "zh": "修椅子",
        "example": "Em casa, preciso consertar a cadeira."
      },
      {
        "pt": "pendurar a toalha",
        "zh": "挂毛巾",
        "example": "Em casa, preciso pendurar a toalha."
      },
      {
        "pt": "abrir a janela",
        "zh": "开窗",
        "example": "Em casa, preciso abrir a janela."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "烹饪动作",
    "topicPt": "Ações na cozinha",
    "words": [
      {
        "pt": "cortar",
        "zh": "切",
        "example": "Para cozinhar, vou cortar."
      },
      {
        "pt": "misturar",
        "zh": "混合",
        "example": "Para cozinhar, vou misturar."
      },
      {
        "pt": "ferver",
        "zh": "煮沸",
        "example": "Para cozinhar, vou ferver."
      },
      {
        "pt": "assar",
        "zh": "烘烤",
        "example": "Para cozinhar, vou assar."
      },
      {
        "pt": "fritar",
        "zh": "油炸；煎",
        "example": "Para cozinhar, vou fritar."
      },
      {
        "pt": "esquentar",
        "zh": "加热",
        "example": "Para cozinhar, vou esquentar."
      },
      {
        "pt": "servir",
        "zh": "上菜；服务",
        "example": "Para cozinhar, vou servir."
      },
      {
        "pt": "colocar sal",
        "zh": "放盐",
        "example": "Para cozinhar, vou colocar sal."
      },
      {
        "pt": "lavar os legumes",
        "zh": "洗蔬菜",
        "example": "Para cozinhar, vou lavar os legumes."
      },
      {
        "pt": "preparar a salada",
        "zh": "准备沙拉",
        "example": "Para cozinhar, vou preparar a salada."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "旅行动作",
    "topicPt": "Ações de viagem",
    "words": [
      {
        "pt": "embarcar",
        "zh": "登机；上船",
        "example": "Durante a viagem, vou embarcar."
      },
      {
        "pt": "viajar",
        "zh": "旅行",
        "example": "Durante a viagem, vou viajar."
      },
      {
        "pt": "visitar um museu",
        "zh": "参观博物馆",
        "example": "Durante a viagem, vou visitar um museu."
      },
      {
        "pt": "tirar fotos",
        "zh": "拍照",
        "example": "Durante a viagem, vou tirar fotos."
      },
      {
        "pt": "consultar o mapa",
        "zh": "查看地图",
        "example": "Durante a viagem, vou consultar o mapa."
      },
      {
        "pt": "comprar lembranças",
        "zh": "买纪念品",
        "example": "Durante a viagem, vou comprar lembranças."
      },
      {
        "pt": "confirmar a reserva",
        "zh": "确认预订",
        "example": "Durante a viagem, vou confirmar a reserva."
      },
      {
        "pt": "fazer as malas",
        "zh": "收拾行李",
        "example": "Durante a viagem, vou fazer as malas."
      },
      {
        "pt": "pegar um táxi",
        "zh": "乘出租车",
        "example": "Durante a viagem, vou pegar um táxi."
      },
      {
        "pt": "voltar para casa",
        "zh": "回家",
        "example": "Durante a viagem, vou voltar para casa."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "休闲活动",
    "topicPt": "Atividades de lazer",
    "words": [
      {
        "pt": "passear",
        "zh": "散步；游览",
        "example": "No tempo livre, gosto de passear."
      },
      {
        "pt": "brincar",
        "zh": "玩耍",
        "example": "No tempo livre, gosto de brincar."
      },
      {
        "pt": "descobrir lugares",
        "zh": "探索地方",
        "example": "No tempo livre, gosto de descobrir lugares."
      },
      {
        "pt": "ouvir música",
        "zh": "听音乐",
        "example": "No tempo livre, gosto de ouvir música."
      },
      {
        "pt": "ver filmes",
        "zh": "看电影",
        "example": "No tempo livre, gosto de ver filmes."
      },
      {
        "pt": "ler histórias",
        "zh": "读故事",
        "example": "No tempo livre, gosto de ler histórias."
      },
      {
        "pt": "jogar cartas",
        "zh": "玩纸牌",
        "example": "No tempo livre, gosto de jogar cartas."
      },
      {
        "pt": "fazer piquenique",
        "zh": "野餐",
        "example": "No tempo livre, gosto de fazer piquenique."
      },
      {
        "pt": "descansar na rede",
        "zh": "在吊床休息",
        "example": "No tempo livre, gosto de descansar na rede."
      },
      {
        "pt": "encontrar amigos",
        "zh": "见朋友",
        "example": "No tempo livre, gosto de encontrar amigos."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "常用意愿表达",
    "topicPt": "Expressões de vontade",
    "words": [
      {
        "pt": "quero aprender",
        "zh": "我想学习",
        "example": "Hoje eu digo: “quero aprender”."
      },
      {
        "pt": "preciso sair",
        "zh": "我需要离开",
        "example": "Hoje eu digo: “preciso sair”."
      },
      {
        "pt": "posso entrar",
        "zh": "我可以进去",
        "example": "Hoje eu digo: “posso entrar”."
      },
      {
        "pt": "vou tentar",
        "zh": "我要尝试",
        "example": "Hoje eu digo: “vou tentar”."
      },
      {
        "pt": "prefiro ficar",
        "zh": "我更想留下",
        "example": "Hoje eu digo: “prefiro ficar”."
      },
      {
        "pt": "gostaria de pedir",
        "zh": "我想点单",
        "example": "Hoje eu digo: “gostaria de pedir”."
      },
      {
        "pt": "não quero",
        "zh": "我不想",
        "example": "Hoje eu digo: “não quero”."
      },
      {
        "pt": "quero saber",
        "zh": "我想知道",
        "example": "Hoje eu digo: “quero saber”."
      },
      {
        "pt": "preciso entender",
        "zh": "我需要理解",
        "example": "Hoje eu digo: “preciso entender”."
      },
      {
        "pt": "posso ajudar",
        "zh": "我可以帮忙",
        "example": "Hoje eu digo: “posso ajudar”."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "健康常用语",
    "topicPt": "Frases de saúde",
    "words": [
      {
        "pt": "não me sinto bem",
        "zh": "我感觉不舒服",
        "example": "No atendimento, digo: “não me sinto bem”."
      },
      {
        "pt": "estou com dor",
        "zh": "我疼",
        "example": "No atendimento, digo: “estou com dor”."
      },
      {
        "pt": "preciso de um médico",
        "zh": "我需要医生",
        "example": "No atendimento, digo: “preciso de um médico”."
      },
      {
        "pt": "tenho alergia",
        "zh": "我过敏",
        "example": "No atendimento, digo: “tenho alergia”."
      },
      {
        "pt": "estou melhor",
        "zh": "我好多了",
        "example": "No atendimento, digo: “estou melhor”."
      },
      {
        "pt": "onde dói",
        "zh": "哪里疼",
        "example": "No atendimento, digo: “onde dói”."
      },
      {
        "pt": "abra a boca",
        "zh": "请张嘴",
        "example": "No atendimento, digo: “abra a boca”."
      },
      {
        "pt": "respire fundo",
        "zh": "请深呼吸",
        "example": "No atendimento, digo: “respire fundo”."
      },
      {
        "pt": "tome este remédio",
        "zh": "服用这个药",
        "example": "No atendimento, digo: “tome este remédio”."
      },
      {
        "pt": "descanse hoje",
        "zh": "今天休息",
        "example": "No atendimento, digo: “descanse hoje”."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "大家庭",
    "topicPt": "Família ampliada",
    "words": [
      {
        "pt": "tio",
        "zh": "叔伯；舅舅",
        "example": "Na minha família há tio."
      },
      {
        "pt": "tia",
        "zh": "姑姨；舅妈",
        "example": "Na minha família há tia."
      },
      {
        "pt": "primo",
        "zh": "堂表兄弟",
        "example": "Na minha família há primo."
      },
      {
        "pt": "prima",
        "zh": "堂表姐妹",
        "example": "Na minha família há prima."
      },
      {
        "pt": "neto",
        "zh": "孙子；外孙",
        "example": "Na minha família há neto."
      },
      {
        "pt": "neta",
        "zh": "孙女；外孙女",
        "example": "Na minha família há neta."
      },
      {
        "pt": "sobrinho",
        "zh": "侄子；外甥",
        "example": "Na minha família há sobrinho."
      },
      {
        "pt": "sobrinha",
        "zh": "侄女；外甥女",
        "example": "Na minha família há sobrinha."
      },
      {
        "pt": "marido",
        "zh": "丈夫",
        "example": "Na minha família há marido."
      },
      {
        "pt": "esposa",
        "zh": "妻子",
        "example": "Na minha família há esposa."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "人际关系",
    "topicPt": "Relações pessoais",
    "words": [
      {
        "pt": "amizade",
        "zh": "友谊",
        "example": "Esta palavra fala de relação: amizade."
      },
      {
        "pt": "namorado",
        "zh": "男朋友",
        "example": "Esta palavra fala de relação: namorado."
      },
      {
        "pt": "namorada",
        "zh": "女朋友",
        "example": "Esta palavra fala de relação: namorada."
      },
      {
        "pt": "companheiro",
        "zh": "伴侣；伙伴",
        "example": "Esta palavra fala de relação: companheiro."
      },
      {
        "pt": "grupo",
        "zh": "群体",
        "example": "Esta palavra fala de relação: grupo."
      },
      {
        "pt": "turma",
        "zh": "班级；群体",
        "example": "Esta palavra fala de relação: turma."
      },
      {
        "pt": "parente",
        "zh": "亲戚",
        "example": "Esta palavra fala de relação: parente."
      },
      {
        "pt": "convidado",
        "zh": "客人",
        "example": "Esta palavra fala de relação: convidado."
      },
      {
        "pt": "dono",
        "zh": "主人；所有者",
        "example": "Esta palavra fala de relação: dono."
      },
      {
        "pt": "morador",
        "zh": "居民",
        "example": "Esta palavra fala de relação: morador."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "城市地点",
    "topicPt": "Lugares da cidade",
    "words": [
      {
        "pt": "prefeitura",
        "zh": "市政府",
        "example": "Na cidade, procuro prefeitura."
      },
      {
        "pt": "delegacia",
        "zh": "警察局",
        "example": "Na cidade, procuro delegacia."
      },
      {
        "pt": "igreja",
        "zh": "教堂",
        "example": "Na cidade, procuro igreja."
      },
      {
        "pt": "shopping",
        "zh": "购物中心",
        "example": "Na cidade, procuro shopping."
      },
      {
        "pt": "cinema",
        "zh": "电影院",
        "example": "Na cidade, procuro cinema."
      },
      {
        "pt": "academia",
        "zh": "健身房",
        "example": "Na cidade, procuro academia."
      },
      {
        "pt": "estádio",
        "zh": "体育场",
        "example": "Na cidade, procuro estádio."
      },
      {
        "pt": "feira",
        "zh": "集市",
        "example": "Na cidade, procuro feira."
      },
      {
        "pt": "posto de gasolina",
        "zh": "加油站",
        "example": "Na cidade, procuro posto de gasolina."
      },
      {
        "pt": "rodoviária",
        "zh": "长途汽车站",
        "example": "Na cidade, procuro rodoviária."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "公共服务",
    "topicPt": "Serviços públicos",
    "words": [
      {
        "pt": "transporte público",
        "zh": "公共交通",
        "example": "Preciso usar transporte público hoje."
      },
      {
        "pt": "posto de saúde",
        "zh": "社区诊所",
        "example": "Preciso usar posto de saúde hoje."
      },
      {
        "pt": "coleta de lixo",
        "zh": "垃圾收集",
        "example": "Preciso usar coleta de lixo hoje."
      },
      {
        "pt": "água potável",
        "zh": "饮用水",
        "example": "Preciso usar água potável hoje."
      },
      {
        "pt": "energia elétrica",
        "zh": "电力",
        "example": "Preciso usar energia elétrica hoje."
      },
      {
        "pt": "iluminação pública",
        "zh": "公共照明",
        "example": "Preciso usar iluminação pública hoje."
      },
      {
        "pt": "correios",
        "zh": "邮政服务",
        "example": "Preciso usar correios hoje."
      },
      {
        "pt": "guarda municipal",
        "zh": "市政警卫",
        "example": "Preciso usar guarda municipal hoje."
      },
      {
        "pt": "serviço de informação",
        "zh": "咨询服务",
        "example": "Preciso usar serviço de informação hoje."
      },
      {
        "pt": "banheiro público",
        "zh": "公共卫生间",
        "example": "Preciso usar banheiro público hoje."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "酒店用品",
    "topicPt": "No quarto do hotel",
    "words": [
      {
        "pt": "travesseiro",
        "zh": "枕头",
        "example": "No hotel, preciso de travesseiro."
      },
      {
        "pt": "cobertor",
        "zh": "毯子",
        "example": "No hotel, preciso de cobertor."
      },
      {
        "pt": "lençol",
        "zh": "床单",
        "example": "No hotel, preciso de lençol."
      },
      {
        "pt": "ar-condicionado",
        "zh": "空调",
        "example": "No hotel, preciso de ar-condicionado."
      },
      {
        "pt": "frigobar",
        "zh": "迷你冰箱",
        "example": "No hotel, preciso de frigobar."
      },
      {
        "pt": "controle da televisão",
        "zh": "电视遥控器",
        "example": "No hotel, preciso de controle da televisão."
      },
      {
        "pt": "serviço de quarto",
        "zh": "客房服务",
        "example": "No hotel, preciso de serviço de quarto."
      },
      {
        "pt": "café incluído",
        "zh": "含早餐",
        "example": "No hotel, preciso de café incluído."
      },
      {
        "pt": "quarto individual",
        "zh": "单人间",
        "example": "No hotel, preciso de quarto individual."
      },
      {
        "pt": "quarto duplo",
        "zh": "双人间",
        "example": "No hotel, preciso de quarto duplo."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "海边活动",
    "topicPt": "Na praia",
    "words": [
      {
        "pt": "guarda-sol",
        "zh": "遮阳伞",
        "example": "Na praia, quero guarda-sol."
      },
      {
        "pt": "cadeira de praia",
        "zh": "沙滩椅",
        "example": "Na praia, quero cadeira de praia."
      },
      {
        "pt": "toalha de praia",
        "zh": "沙滩巾",
        "example": "Na praia, quero toalha de praia."
      },
      {
        "pt": "óculos de sol",
        "zh": "太阳镜",
        "example": "Na praia, quero óculos de sol."
      },
      {
        "pt": "chinelo",
        "zh": "人字拖",
        "example": "Na praia, quero chinelo."
      },
      {
        "pt": "maiô",
        "zh": "连体泳衣",
        "example": "Na praia, quero maiô."
      },
      {
        "pt": "biquíni",
        "zh": "比基尼",
        "example": "Na praia, quero biquíni."
      },
      {
        "pt": "esteira de praia",
        "zh": "沙滩垫",
        "example": "Na praia, quero esteira de praia."
      },
      {
        "pt": "bola de praia",
        "zh": "沙滩球",
        "example": "Na praia, quero bola de praia."
      },
      {
        "pt": "água de coco",
        "zh": "椰子水",
        "example": "Na praia, quero água de coco."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "乡村生活",
    "topicPt": "Vida no campo",
    "words": [
      {
        "pt": "fazenda",
        "zh": "农场",
        "example": "No campo, vejo fazenda."
      },
      {
        "pt": "horta",
        "zh": "菜园",
        "example": "No campo, vejo horta."
      },
      {
        "pt": "celeiro",
        "zh": "谷仓",
        "example": "No campo, vejo celeiro."
      },
      {
        "pt": "cerca",
        "zh": "围栏",
        "example": "No campo, vejo cerca."
      },
      {
        "pt": "trator",
        "zh": "拖拉机",
        "example": "No campo, vejo trator."
      },
      {
        "pt": "plantação",
        "zh": "种植园；作物",
        "example": "No campo, vejo plantação."
      },
      {
        "pt": "estrada de terra",
        "zh": "土路",
        "example": "No campo, vejo estrada de terra."
      },
      {
        "pt": "poço",
        "zh": "水井",
        "example": "No campo, vejo poço."
      },
      {
        "pt": "grama",
        "zh": "草地",
        "example": "No campo, vejo grama."
      },
      {
        "pt": "semente",
        "zh": "种子",
        "example": "No campo, vejo semente."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "数码设备",
    "topicPt": "Aparelhos digitais",
    "words": [
      {
        "pt": "tablet",
        "zh": "平板电脑",
        "example": "Hoje uso tablet."
      },
      {
        "pt": "fone de ouvido",
        "zh": "耳机",
        "example": "Hoje uso fone de ouvido."
      },
      {
        "pt": "caixa de som",
        "zh": "音箱",
        "example": "Hoje uso caixa de som."
      },
      {
        "pt": "câmera",
        "zh": "相机",
        "example": "Hoje uso câmera."
      },
      {
        "pt": "carregador",
        "zh": "充电器",
        "example": "Hoje uso carregador."
      },
      {
        "pt": "cabo",
        "zh": "数据线；电缆",
        "example": "Hoje uso cabo."
      },
      {
        "pt": "bateria",
        "zh": "电池",
        "example": "Hoje uso bateria."
      },
      {
        "pt": "tomada",
        "zh": "插座",
        "example": "Hoje uso tomada."
      },
      {
        "pt": "botão",
        "zh": "按钮",
        "example": "Hoje uso botão."
      },
      {
        "pt": "memória",
        "zh": "存储；记忆",
        "example": "Hoje uso memória."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "网络基础",
    "topicPt": "Internet básica",
    "words": [
      {
        "pt": "site",
        "zh": "网站",
        "example": "Na internet, uso site."
      },
      {
        "pt": "link",
        "zh": "链接",
        "example": "Na internet, uso link."
      },
      {
        "pt": "página",
        "zh": "页面",
        "example": "Na internet, uso página."
      },
      {
        "pt": "perfil",
        "zh": "个人主页",
        "example": "Na internet, uso perfil."
      },
      {
        "pt": "contato",
        "zh": "联系人",
        "example": "Na internet, uso contato."
      },
      {
        "pt": "comentário",
        "zh": "评论",
        "example": "Na internet, uso comentário."
      },
      {
        "pt": "busca",
        "zh": "搜索",
        "example": "Na internet, uso busca."
      },
      {
        "pt": "conta digital",
        "zh": "网络账户",
        "example": "Na internet, uso conta digital."
      },
      {
        "pt": "nome de usuário",
        "zh": "用户名",
        "example": "Na internet, uso nome de usuário."
      },
      {
        "pt": "conexão",
        "zh": "连接",
        "example": "Na internet, uso conexão."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "手机操作",
    "topicPt": "Ações no celular",
    "words": [
      {
        "pt": "clicar",
        "zh": "点击",
        "example": "No celular, vou clicar."
      },
      {
        "pt": "digitar",
        "zh": "输入",
        "example": "No celular, vou digitar."
      },
      {
        "pt": "deslizar",
        "zh": "滑动",
        "example": "No celular, vou deslizar."
      },
      {
        "pt": "salvar",
        "zh": "保存",
        "example": "No celular, vou salvar."
      },
      {
        "pt": "apagar uma foto",
        "zh": "删除照片",
        "example": "No celular, vou apagar uma foto."
      },
      {
        "pt": "gravar um áudio",
        "zh": "录音",
        "example": "No celular, vou gravar um áudio."
      },
      {
        "pt": "atender a ligação",
        "zh": "接电话",
        "example": "No celular, vou atender a ligação."
      },
      {
        "pt": "desligar",
        "zh": "关闭；挂断",
        "example": "No celular, vou desligar."
      },
      {
        "pt": "aumentar o volume",
        "zh": "调大音量",
        "example": "No celular, vou aumentar o volume."
      },
      {
        "pt": "ativar o Wi-Fi",
        "zh": "开启无线网络",
        "example": "No celular, vou ativar o Wi-Fi."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "环保日常",
    "topicPt": "Cuidados com o ambiente",
    "words": [
      {
        "pt": "reciclar",
        "zh": "回收利用",
        "example": "Para ajudar, vou reciclar."
      },
      {
        "pt": "economizar água",
        "zh": "节约用水",
        "example": "Para ajudar, vou economizar água."
      },
      {
        "pt": "separar o lixo",
        "zh": "垃圾分类",
        "example": "Para ajudar, vou separar o lixo."
      },
      {
        "pt": "reutilizar",
        "zh": "重复使用",
        "example": "Para ajudar, vou reutilizar."
      },
      {
        "pt": "plantar uma árvore",
        "zh": "种树",
        "example": "Para ajudar, vou plantar uma árvore."
      },
      {
        "pt": "usar menos plástico",
        "zh": "少用塑料",
        "example": "Para ajudar, vou usar menos plástico."
      },
      {
        "pt": "apagar as luzes",
        "zh": "关灯",
        "example": "Para ajudar, vou apagar as luzes."
      },
      {
        "pt": "levar minha garrafa",
        "zh": "自带水瓶",
        "example": "Para ajudar, vou levar minha garrafa."
      },
      {
        "pt": "usar bicicleta",
        "zh": "骑自行车",
        "example": "Para ajudar, vou usar bicicleta."
      },
      {
        "pt": "cuidar da natureza",
        "zh": "爱护自然",
        "example": "Para ajudar, vou cuidar da natureza."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "庆祝活动",
    "topicPt": "Festas e celebrações",
    "words": [
      {
        "pt": "festa",
        "zh": "聚会；庆典",
        "example": "Para a festa, precisamos de festa."
      },
      {
        "pt": "presente",
        "zh": "礼物",
        "example": "Para a festa, precisamos de presente."
      },
      {
        "pt": "convite",
        "zh": "邀请函",
        "example": "Para a festa, precisamos de convite."
      },
      {
        "pt": "balão",
        "zh": "气球",
        "example": "Para a festa, precisamos de balão."
      },
      {
        "pt": "vela",
        "zh": "蜡烛",
        "example": "Para a festa, precisamos de vela."
      },
      {
        "pt": "decoração",
        "zh": "装饰",
        "example": "Para a festa, precisamos de decoração."
      },
      {
        "pt": "música alegre",
        "zh": "欢快音乐",
        "example": "Para a festa, precisamos de música alegre."
      },
      {
        "pt": "docinhos",
        "zh": "小甜点",
        "example": "Para a festa, precisamos de docinhos."
      },
      {
        "pt": "parabéns",
        "zh": "祝贺；生日歌",
        "example": "Para a festa, precisamos de parabéns."
      },
      {
        "pt": "abraço",
        "zh": "拥抱",
        "example": "Para a festa, precisamos de abraço."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "紧急情况",
    "topicPt": "Emergências simples",
    "words": [
      {
        "pt": "socorro",
        "zh": "救命",
        "example": "Em uma emergência, digo: “socorro”."
      },
      {
        "pt": "chame a polícia",
        "zh": "叫警察",
        "example": "Em uma emergência, digo: “chame a polícia”."
      },
      {
        "pt": "chame uma ambulância",
        "zh": "叫救护车",
        "example": "Em uma emergência, digo: “chame uma ambulância”."
      },
      {
        "pt": "há um incêndio",
        "zh": "发生火灾",
        "example": "Em uma emergência, digo: “há um incêndio”."
      },
      {
        "pt": "perdi meu documento",
        "zh": "我丢了证件",
        "example": "Em uma emergência, digo: “perdi meu documento”."
      },
      {
        "pt": "meu celular sumiu",
        "zh": "我的手机不见了",
        "example": "Em uma emergência, digo: “meu celular sumiu”."
      },
      {
        "pt": "estou perdido",
        "zh": "我迷路了",
        "example": "Em uma emergência, digo: “estou perdido”."
      },
      {
        "pt": "preciso de ajuda",
        "zh": "我需要帮助",
        "example": "Em uma emergência, digo: “preciso de ajuda”."
      },
      {
        "pt": "onde é a saída",
        "zh": "出口在哪里",
        "example": "Em uma emergência, digo: “onde é a saída”."
      },
      {
        "pt": "fique aqui",
        "zh": "留在这里",
        "example": "Em uma emergência, digo: “fique aqui”."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "容器与数量",
    "topicPt": "Recipientes e quantidades",
    "words": [
      {
        "pt": "um pacote de arroz",
        "zh": "一包米",
        "example": "Quero um pacote de arroz para a compra."
      },
      {
        "pt": "uma lata de milho",
        "zh": "一罐玉米",
        "example": "Quero uma lata de milho para a compra."
      },
      {
        "pt": "uma caixa de leite",
        "zh": "一盒牛奶",
        "example": "Quero uma caixa de leite para a compra."
      },
      {
        "pt": "uma dúzia de ovos",
        "zh": "一打鸡蛋",
        "example": "Quero uma dúzia de ovos para a compra."
      },
      {
        "pt": "um quilo de batatas",
        "zh": "一公斤土豆",
        "example": "Quero um quilo de batatas para a compra."
      },
      {
        "pt": "meio quilo de queijo",
        "zh": "半公斤奶酪",
        "example": "Quero meio quilo de queijo para a compra."
      },
      {
        "pt": "uma fatia de bolo",
        "zh": "一片蛋糕",
        "example": "Quero uma fatia de bolo para a compra."
      },
      {
        "pt": "um pedaço de pão",
        "zh": "一块面包",
        "example": "Quero um pedaço de pão para a compra."
      },
      {
        "pt": "um litro de água",
        "zh": "一升水",
        "example": "Quero um litro de água para a compra."
      },
      {
        "pt": "um par de meias",
        "zh": "一双袜子",
        "example": "Quero um par de meias para a compra."
      }
    ]
  },
  {
    "level": "A1",
    "topicZh": "描述地点",
    "topicPt": "Descrição de lugares",
    "words": [
      {
        "pt": "tranquilo",
        "zh": "安静的",
        "example": "Este lugar é tranquilo."
      },
      {
        "pt": "movimentado",
        "zh": "热闹的；繁忙的",
        "example": "Este lugar é movimentado."
      },
      {
        "pt": "bonito por dentro",
        "zh": "内部漂亮的",
        "example": "Este lugar é bonito por dentro."
      },
      {
        "pt": "fácil de encontrar",
        "zh": "容易找到的",
        "example": "Este lugar é fácil de encontrar."
      },
      {
        "pt": "perto do centro",
        "zh": "靠近市中心的",
        "example": "Este lugar é perto do centro."
      },
      {
        "pt": "aberto ao público",
        "zh": "向公众开放的",
        "example": "Este lugar é aberto ao público."
      },
      {
        "pt": "bem iluminado",
        "zh": "光线充足的",
        "example": "Este lugar é bem iluminado."
      },
      {
        "pt": "cheio de árvores",
        "zh": "树木繁多的",
        "example": "Este lugar é cheio de árvores."
      },
      {
        "pt": "bom para crianças",
        "zh": "适合儿童的",
        "example": "Este lugar é bom para crianças."
      },
      {
        "pt": "longe de casa",
        "zh": "离家远的",
        "example": "Este lugar é longe de casa."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "情绪与交流",
    "topicPt": "Emoções e conversa",
    "words": [
      {
        "pt": "feliz",
        "zh": "开心的",
        "example": "Fiquei feliz com a notícia."
      },
      {
        "pt": "preocupado",
        "zh": "担心的",
        "example": "Estou preocupado com a prova."
      },
      {
        "pt": "cansado",
        "zh": "疲惫的",
        "example": "Hoje estou um pouco cansado."
      },
      {
        "pt": "calmo",
        "zh": "平静的",
        "example": "Respire fundo e fique calmo."
      },
      {
        "pt": "entender",
        "zh": "理解",
        "example": "Não entendi a última pergunta."
      },
      {
        "pt": "explicar",
        "zh": "解释",
        "example": "Você pode explicar de novo?"
      },
      {
        "pt": "concordar",
        "zh": "同意",
        "example": "Concordo com a sua ideia."
      },
      {
        "pt": "lembrar",
        "zh": "记得；想起",
        "example": "Não consigo lembrar o nome dela."
      },
      {
        "pt": "esquecer",
        "zh": "忘记",
        "example": "Esqueci as chaves em casa."
      },
      {
        "pt": "conversa",
        "zh": "谈话",
        "example": "Tivemos uma conversa interessante."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "学习与工作",
    "topicPt": "Estudo e trabalho",
    "words": [
      {
        "pt": "aprender",
        "zh": "学习；学会",
        "example": "Quero aprender dez palavras por dia."
      },
      {
        "pt": "estudar",
        "zh": "学习；用功",
        "example": "Estudo português todas as manhãs."
      },
      {
        "pt": "reunião",
        "zh": "会议",
        "example": "A reunião começa às duas."
      },
      {
        "pt": "projeto",
        "zh": "项目",
        "example": "Estamos trabalhando num projeto novo."
      },
      {
        "pt": "prazo",
        "zh": "期限",
        "example": "O prazo termina na sexta-feira."
      },
      {
        "pt": "tarefa",
        "zh": "任务；作业",
        "example": "Terminei a tarefa antes do almoço."
      },
      {
        "pt": "melhorar",
        "zh": "改善；提高",
        "example": "Quero melhorar a minha pronúncia."
      },
      {
        "pt": "praticar",
        "zh": "练习",
        "example": "É importante praticar todos os dias."
      },
      {
        "pt": "resultado",
        "zh": "结果",
        "example": "O resultado foi melhor do que esperávamos."
      },
      {
        "pt": "experiência",
        "zh": "经验；经历",
        "example": "Foi uma experiência muito útil."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "健康与身体",
    "topicPt": "Saúde e corpo",
    "words": [
      {
        "pt": "saúde",
        "zh": "健康",
        "example": "Dormir bem faz bem à saúde."
      },
      {
        "pt": "dor",
        "zh": "疼痛",
        "example": "Estou com dor de cabeça."
      },
      {
        "pt": "remédio",
        "zh": "药",
        "example": "Preciso tomar este remédio depois do almoço."
      },
      {
        "pt": "consulta",
        "zh": "问诊；预约",
        "example": "Tenho uma consulta amanhã."
      },
      {
        "pt": "dormir",
        "zh": "睡觉",
        "example": "Preciso dormir mais cedo."
      },
      {
        "pt": "acordar",
        "zh": "醒来；起床",
        "example": "Acordo às sete todos os dias."
      },
      {
        "pt": "caminhar",
        "zh": "步行；散步",
        "example": "Gosto de caminhar no parque."
      },
      {
        "pt": "respirar",
        "zh": "呼吸",
        "example": "Respire devagar pelo nariz."
      },
      {
        "pt": "melhor",
        "zh": "更好的；好些",
        "example": "Hoje já estou me sentindo melhor."
      },
      {
        "pt": "descansar",
        "zh": "休息",
        "example": "Você precisa descansar um pouco."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "时间与计划",
    "topicPt": "Tempo e planos",
    "words": [
      {
        "pt": "amanhã",
        "zh": "明天",
        "example": "Amanhã vou visitar meus amigos."
      },
      {
        "pt": "ontem",
        "zh": "昨天",
        "example": "Ontem trabalhei até tarde."
      },
      {
        "pt": "semana",
        "zh": "星期；周",
        "example": "Tenho duas reuniões esta semana."
      },
      {
        "pt": "horário",
        "zh": "时间；时刻表",
        "example": "Qual horário é melhor para você?"
      },
      {
        "pt": "marcar",
        "zh": "安排；标记",
        "example": "Podemos marcar para quinta-feira."
      },
      {
        "pt": "adiar",
        "zh": "推迟",
        "example": "Precisamos adiar a reunião."
      },
      {
        "pt": "começar",
        "zh": "开始",
        "example": "A aula vai começar agora."
      },
      {
        "pt": "terminar",
        "zh": "结束；完成",
        "example": "Quero terminar este trabalho hoje."
      },
      {
        "pt": "durante",
        "zh": "在……期间",
        "example": "Não usei o celular durante a aula."
      },
      {
        "pt": "depois",
        "zh": "之后",
        "example": "Falamos sobre isso depois."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "日常动作",
    "topicPt": "Ações do dia a dia",
    "words": [
      {
        "pt": "levantar",
        "zh": "起床；举起",
        "example": "Preciso me levantar às sete."
      },
      {
        "pt": "tomar banho",
        "zh": "洗澡",
        "example": "Vou tomar banho antes do café da manhã."
      },
      {
        "pt": "sair",
        "zh": "出去；离开",
        "example": "Preciso sair de casa às oito."
      },
      {
        "pt": "voltar",
        "zh": "回来",
        "example": "Quero voltar do trabalho às seis."
      },
      {
        "pt": "entrar",
        "zh": "进入",
        "example": "Ela decidiu entrar na sala sem fazer barulho."
      },
      {
        "pt": "esperar",
        "zh": "等待；希望",
        "example": "Você pode esperar um momento?"
      },
      {
        "pt": "procurar",
        "zh": "寻找",
        "example": "Vou procurar as minhas chaves."
      },
      {
        "pt": "encontrar",
        "zh": "找到；遇见",
        "example": "Espero encontrar um amigo no metrô."
      },
      {
        "pt": "levar",
        "zh": "带走；花费时间",
        "example": "Vou levar um guarda-chuva."
      },
      {
        "pt": "trazer",
        "zh": "带来",
        "example": "Pode trazer o cardápio?"
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "家务与整理",
    "topicPt": "Tarefas domésticas",
    "words": [
      {
        "pt": "limpar",
        "zh": "打扫；清洁",
        "example": "Preciso limpar a cozinha."
      },
      {
        "pt": "lavar",
        "zh": "清洗",
        "example": "Vou lavar a roupa amanhã."
      },
      {
        "pt": "arrumar",
        "zh": "整理；修理",
        "example": "Ela vai arrumar o quarto."
      },
      {
        "pt": "guardar",
        "zh": "收好；保存",
        "example": "É melhor guardar os copos no armário."
      },
      {
        "pt": "abrir",
        "zh": "打开",
        "example": "Pode abrir a janela?"
      },
      {
        "pt": "fechar",
        "zh": "关闭",
        "example": "Não se esqueça de fechar a porta."
      },
      {
        "pt": "acender",
        "zh": "打开灯；点燃",
        "example": "Vou acender a luz."
      },
      {
        "pt": "apagar",
        "zh": "关掉；擦除",
        "example": "Não se esqueça de apagar a luz."
      },
      {
        "pt": "lixo",
        "zh": "垃圾",
        "example": "Leve o lixo para fora."
      },
      {
        "pt": "armário",
        "zh": "柜子；衣柜",
        "example": "Os pratos estão no armário."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "朋友与关系",
    "topicPt": "Amizade e relações",
    "words": [
      {
        "pt": "amigo",
        "zh": "朋友",
        "example": "Meu melhor amigo mora longe."
      },
      {
        "pt": "colega",
        "zh": "同事；同学",
        "example": "Almocei com uma colega do trabalho."
      },
      {
        "pt": "conhecer",
        "zh": "认识；了解",
        "example": "Quero conhecer melhor a cidade."
      },
      {
        "pt": "convidar",
        "zh": "邀请",
        "example": "Vamos convidar nossos vizinhos."
      },
      {
        "pt": "ajudar",
        "zh": "帮助",
        "example": "Ela gosta de ajudar os amigos."
      },
      {
        "pt": "visitar",
        "zh": "拜访；参观",
        "example": "Vou visitar meus avós no domingo."
      },
      {
        "pt": "encontro",
        "zh": "见面；约会",
        "example": "Marcamos um encontro para sexta-feira."
      },
      {
        "pt": "confiança",
        "zh": "信任；自信",
        "example": "A confiança cresce com o tempo."
      },
      {
        "pt": "gentil",
        "zh": "友善的",
        "example": "O atendente foi muito gentil."
      },
      {
        "pt": "sozinho",
        "zh": "独自的",
        "example": "Hoje quero ficar sozinho em casa."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "感受与反应",
    "topicPt": "Sentimentos e reações",
    "words": [
      {
        "pt": "alegre",
        "zh": "高兴的",
        "example": "Ela ficou alegre com a visita."
      },
      {
        "pt": "triste",
        "zh": "难过的",
        "example": "Fiquei triste com a notícia."
      },
      {
        "pt": "nervoso",
        "zh": "紧张的",
        "example": "Estou nervoso antes da entrevista."
      },
      {
        "pt": "surpreso",
        "zh": "惊讶的",
        "example": "Todos ficaram surpresos com o resultado."
      },
      {
        "pt": "orgulhoso",
        "zh": "自豪的",
        "example": "Estou orgulhoso do meu progresso."
      },
      {
        "pt": "vergonha",
        "zh": "羞耻；不好意思",
        "example": "Tenho vergonha de falar em público."
      },
      {
        "pt": "medo",
        "zh": "害怕；恐惧",
        "example": "Ela tem medo de avião."
      },
      {
        "pt": "saudade",
        "zh": "思念",
        "example": "Sinto saudade da minha família."
      },
      {
        "pt": "sorrir",
        "zh": "微笑",
        "example": "Ela começou a sorrir quando me viu."
      },
      {
        "pt": "chorar",
        "zh": "哭",
        "example": "A criança começou a chorar."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "身体与症状",
    "topicPt": "Corpo e sintomas",
    "words": [
      {
        "pt": "cabeça",
        "zh": "头；头脑",
        "example": "Estou com dor de cabeça."
      },
      {
        "pt": "garganta",
        "zh": "喉咙",
        "example": "Minha garganta está doendo."
      },
      {
        "pt": "estômago",
        "zh": "胃",
        "example": "Ele sentiu uma dor no estômago."
      },
      {
        "pt": "febre",
        "zh": "发烧",
        "example": "A criança está com febre."
      },
      {
        "pt": "tosse",
        "zh": "咳嗽",
        "example": "Esta tosse começou ontem."
      },
      {
        "pt": "gripe",
        "zh": "流感",
        "example": "Acho que estou com gripe."
      },
      {
        "pt": "doente",
        "zh": "生病的",
        "example": "Ela ficou doente durante a viagem."
      },
      {
        "pt": "recuperar-se",
        "zh": "康复；恢复",
        "example": "Ela precisa recuperar-se antes de voltar ao trabalho."
      },
      {
        "pt": "machucar",
        "zh": "弄伤",
        "example": "É fácil machucar o braço sem aquecimento."
      },
      {
        "pt": "emergência",
        "zh": "紧急情况",
        "example": "Ligue para a emergência."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "运动与习惯",
    "topicPt": "Exercício e hábitos",
    "words": [
      {
        "pt": "exercício",
        "zh": "运动；练习",
        "example": "Faço exercício três vezes por semana."
      },
      {
        "pt": "correr",
        "zh": "跑步",
        "example": "Gosto de correr no parque."
      },
      {
        "pt": "nadar",
        "zh": "游泳",
        "example": "Aprendi a nadar quando era criança."
      },
      {
        "pt": "jogar",
        "zh": "玩；进行球类运动",
        "example": "Eles gostam de jogar futebol aos sábados."
      },
      {
        "pt": "treinar",
        "zh": "训练",
        "example": "Preciso treinar antes da corrida."
      },
      {
        "pt": "força",
        "zh": "力量",
        "example": "Este exercício aumenta a força."
      },
      {
        "pt": "energia",
        "zh": "精力；能源",
        "example": "Dormir bem me dá mais energia."
      },
      {
        "pt": "hábito",
        "zh": "习惯",
        "example": "Ler todos os dias é um bom hábito."
      },
      {
        "pt": "saudável",
        "zh": "健康的",
        "example": "Quero ter uma alimentação saudável."
      },
      {
        "pt": "alongar",
        "zh": "拉伸",
        "example": "É importante alongar antes de correr."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "课堂学习",
    "topicPt": "Na sala de aula",
    "words": [
      {
        "pt": "professor",
        "zh": "老师（男性）",
        "example": "O professor explicou a matéria."
      },
      {
        "pt": "aluno",
        "zh": "学生",
        "example": "Cada aluno recebeu um livro."
      },
      {
        "pt": "aula",
        "zh": "课程；课堂",
        "example": "A aula de português foi divertida."
      },
      {
        "pt": "prova",
        "zh": "考试；证明",
        "example": "Tenho uma prova na próxima semana."
      },
      {
        "pt": "nota",
        "zh": "成绩；笔记",
        "example": "Ela tirou uma boa nota."
      },
      {
        "pt": "pergunta",
        "zh": "问题",
        "example": "Tenho uma pergunta sobre esta regra."
      },
      {
        "pt": "resposta",
        "zh": "回答；答案",
        "example": "Não sei a resposta correta."
      },
      {
        "pt": "caderno",
        "zh": "笔记本",
        "example": "Anote a frase no caderno."
      },
      {
        "pt": "ler",
        "zh": "阅读",
        "example": "Gosto de ler textos curtos."
      },
      {
        "pt": "escrever",
        "zh": "写",
        "example": "Você deve escrever uma frase com esta palavra."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "办公室沟通",
    "topicPt": "No escritório",
    "words": [
      {
        "pt": "empresa",
        "zh": "公司",
        "example": "A empresa abriu um novo escritório."
      },
      {
        "pt": "chefe",
        "zh": "上司；负责人",
        "example": "Meu chefe marcou uma reunião."
      },
      {
        "pt": "equipe",
        "zh": "团队",
        "example": "A equipe terminou o projeto."
      },
      {
        "pt": "cliente",
        "zh": "客户",
        "example": "Precisamos responder ao cliente hoje."
      },
      {
        "pt": "relatório",
        "zh": "报告",
        "example": "Enviei o relatório por email."
      },
      {
        "pt": "arquivo",
        "zh": "文件；档案",
        "example": "Não consigo abrir este arquivo."
      },
      {
        "pt": "computador",
        "zh": "电脑",
        "example": "O computador está muito lento."
      },
      {
        "pt": "imprimir",
        "zh": "打印",
        "example": "Pode imprimir este documento?"
      },
      {
        "pt": "organizar",
        "zh": "组织；整理",
        "example": "Vamos organizar as tarefas da semana."
      },
      {
        "pt": "participar",
        "zh": "参加",
        "example": "Ela vai participar da reunião."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "网络生活",
    "topicPt": "Vida digital",
    "words": [
      {
        "pt": "aplicativo",
        "zh": "应用程序",
        "example": "Baixei um aplicativo para estudar."
      },
      {
        "pt": "tela",
        "zh": "屏幕",
        "example": "A tela do celular está quebrada."
      },
      {
        "pt": "carregar",
        "zh": "充电；装载",
        "example": "Preciso carregar o telefone."
      },
      {
        "pt": "baixar",
        "zh": "下载；降低",
        "example": "Você pode baixar o arquivo aqui."
      },
      {
        "pt": "enviar",
        "zh": "发送",
        "example": "Vou enviar as fotos amanhã."
      },
      {
        "pt": "receber",
        "zh": "接收；收到",
        "example": "Espero receber uma mensagem importante."
      },
      {
        "pt": "conectar",
        "zh": "连接",
        "example": "Não consigo conectar o computador à internet."
      },
      {
        "pt": "rede",
        "zh": "网络",
        "example": "A rede está fora do ar."
      },
      {
        "pt": "vídeo",
        "zh": "视频",
        "example": "Assisti a um vídeo em português."
      },
      {
        "pt": "pesquisar",
        "zh": "搜索；研究",
        "example": "Vou pesquisar o significado desta palavra."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "休闲与文化",
    "topicPt": "Lazer e cultura",
    "words": [
      {
        "pt": "filme",
        "zh": "电影",
        "example": "Vimos um filme brasileiro ontem."
      },
      {
        "pt": "música",
        "zh": "音乐",
        "example": "Escuto música enquanto trabalho."
      },
      {
        "pt": "livro",
        "zh": "书",
        "example": "Este livro conta uma história real."
      },
      {
        "pt": "show",
        "zh": "演出；节目",
        "example": "O show começa às nove."
      },
      {
        "pt": "museu",
        "zh": "博物馆",
        "example": "Visitamos o museu no sábado."
      },
      {
        "pt": "teatro",
        "zh": "剧院；戏剧",
        "example": "Comprei dois ingressos para o teatro."
      },
      {
        "pt": "dançar",
        "zh": "跳舞",
        "example": "Ela adora dançar forró."
      },
      {
        "pt": "cantar",
        "zh": "唱歌",
        "example": "Todos começaram a cantar juntos."
      },
      {
        "pt": "desenhar",
        "zh": "画画；绘制",
        "example": "A criança gosta de desenhar animais."
      },
      {
        "pt": "divertido",
        "zh": "有趣的；好玩的",
        "example": "O passeio foi muito divertido."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "自然与户外",
    "topicPt": "Natureza e ar livre",
    "words": [
      {
        "pt": "praia",
        "zh": "海滩",
        "example": "A praia está cheia hoje."
      },
      {
        "pt": "mar",
        "zh": "海",
        "example": "O mar está calmo esta manhã."
      },
      {
        "pt": "montanha",
        "zh": "山",
        "example": "Subimos a montanha bem cedo."
      },
      {
        "pt": "rio",
        "zh": "河流",
        "example": "O rio passa perto da cidade."
      },
      {
        "pt": "árvore",
        "zh": "树",
        "example": "Há muitas árvores neste parque."
      },
      {
        "pt": "flor",
        "zh": "花",
        "example": "Esta flor tem um cheiro agradável."
      },
      {
        "pt": "animal",
        "zh": "动物",
        "example": "Este animal vive na fazenda."
      },
      {
        "pt": "campo",
        "zh": "乡村；田野",
        "example": "Meus avós moram no campo."
      },
      {
        "pt": "trilha",
        "zh": "小径；徒步路线",
        "example": "A trilha leva até a cachoeira."
      },
      {
        "pt": "paisagem",
        "zh": "风景",
        "example": "A paisagem daqui é linda."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "旅行问题",
    "topicPt": "Problemas de viagem",
    "words": [
      {
        "pt": "perder",
        "zh": "丢失；错过",
        "example": "Tenho medo de perder o ônibus."
      },
      {
        "pt": "cancelar",
        "zh": "取消",
        "example": "A companhia decidiu cancelar o voo."
      },
      {
        "pt": "atrasado",
        "zh": "迟到的",
        "example": "Cheguei atrasado à estação."
      },
      {
        "pt": "quebrado",
        "zh": "坏了的；破损的",
        "example": "O ar-condicionado está quebrado."
      },
      {
        "pt": "barulho",
        "zh": "噪声",
        "example": "Há muito barulho neste quarto."
      },
      {
        "pt": "reclamar",
        "zh": "投诉；抱怨",
        "example": "Preciso reclamar na recepção."
      },
      {
        "pt": "resolver",
        "zh": "解决",
        "example": "O funcionário conseguiu resolver o problema."
      },
      {
        "pt": "trocar",
        "zh": "更换；交换",
        "example": "Quero trocar de quarto."
      },
      {
        "pt": "devolver",
        "zh": "归还；退货",
        "example": "Preciso devolver o carro amanhã."
      },
      {
        "pt": "ajuda",
        "zh": "帮助",
        "example": "Pedi ajuda a uma funcionária."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "日常安排与责任",
    "topicPt": "Rotina e responsabilidades",
    "words": [
      {
        "pt": "dar tempo",
        "zh": "来得及；有时间",
        "example": "Se sairmos agora, ainda dá tempo de pegar o ônibus."
      },
      {
        "pt": "estar com pressa",
        "zh": "赶时间",
        "example": "Hoje estou com pressa porque tenho uma consulta."
      },
      {
        "pt": "ficar pronto",
        "zh": "准备好；完成",
        "example": "O jantar fica pronto em vinte minutos."
      },
      {
        "pt": "ter compromisso",
        "zh": "有约；有安排",
        "example": "Não posso sair hoje porque tenho outro compromisso."
      },
      {
        "pt": "cumprir uma tarefa",
        "zh": "完成任务",
        "example": "Consegui cumprir todas as tarefas antes do almoço."
      },
      {
        "pt": "deixar para depois",
        "zh": "留到以后再做",
        "example": "Não deixe esse trabalho para depois."
      },
      {
        "pt": "perder a hora",
        "zh": "误点；睡过头",
        "example": "Perdi a hora e cheguei atrasada ao curso."
      },
      {
        "pt": "estar ocupado",
        "zh": "正忙",
        "example": "Estou ocupado agora, mas posso ligar mais tarde."
      },
      {
        "pt": "ter tempo livre",
        "zh": "有空闲时间",
        "example": "Quando tenho tempo livre, gosto de cozinhar."
      },
      {
        "pt": "mudar os planos",
        "zh": "改变计划",
        "example": "Começou a chover, então mudamos os planos."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "旅行安排",
    "topicPt": "Organização de viagem",
    "words": [
      {
        "pt": "comprar a passagem",
        "zh": "购买车票；机票",
        "example": "Comprei a passagem de volta pela internet."
      },
      {
        "pt": "fazer as malas",
        "zh": "收拾行李",
        "example": "Vou fazer as malas na noite anterior à viagem."
      },
      {
        "pt": "confirmar a reserva",
        "zh": "确认预订",
        "example": "Liguei para o hotel para confirmar a reserva."
      },
      {
        "pt": "pegar um voo",
        "zh": "搭乘航班",
        "example": "Amanhã cedo vamos pegar um voo para Recife."
      },
      {
        "pt": "fazer escala",
        "zh": "中途转机；经停",
        "example": "O avião faz escala em Brasília antes de chegar."
      },
      {
        "pt": "despachar a bagagem",
        "zh": "托运行李",
        "example": "Precisamos despachar a bagagem neste balcão."
      },
      {
        "pt": "mostrar o passaporte",
        "zh": "出示护照",
        "example": "Mostre o passaporte antes de passar pela imigração."
      },
      {
        "pt": "perder a conexão",
        "zh": "错过转机",
        "example": "O primeiro voo atrasou e perdemos a conexão."
      },
      {
        "pt": "pedir informações",
        "zh": "询问信息",
        "example": "Pedi informações sobre o ônibus para o centro."
      },
      {
        "pt": "chegar ao destino",
        "zh": "到达目的地",
        "example": "Chegaremos ao destino no início da tarde."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "公共服务与手续",
    "topicPt": "Serviços e documentos",
    "words": [
      {
        "pt": "preencher um formulário",
        "zh": "填写表格",
        "example": "Você precisa preencher este formulário com seus dados."
      },
      {
        "pt": "apresentar um documento",
        "zh": "出示证件",
        "example": "É necessário apresentar um documento com foto."
      },
      {
        "pt": "tirar uma senha",
        "zh": "领取排队号",
        "example": "Primeiro tire uma senha e espere ser chamado."
      },
      {
        "pt": "aguardar atendimento",
        "zh": "等候办理",
        "example": "Aguarde atendimento perto do balcão número três."
      },
      {
        "pt": "comprovar o endereço",
        "zh": "证明住址",
        "example": "Levei uma conta de luz para comprovar o endereço."
      },
      {
        "pt": "pedir uma segunda via",
        "zh": "申请补发；副本",
        "example": "Pedi uma segunda via do cartão que perdi."
      },
      {
        "pt": "renovar o documento",
        "zh": "更新证件",
        "example": "Meu documento vence em maio e preciso renová-lo."
      },
      {
        "pt": "marcar atendimento",
        "zh": "预约办理",
        "example": "É possível marcar atendimento pelo site."
      },
      {
        "pt": "pagar uma taxa",
        "zh": "缴纳费用",
        "example": "Depois de preencher o pedido, paguei a taxa."
      },
      {
        "pt": "guardar o comprovante",
        "zh": "保存凭证",
        "example": "Guarde o comprovante até receber o documento."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "身体不适与就医",
    "topicPt": "Sintomas e cuidados",
    "words": [
      {
        "pt": "sentir tontura",
        "zh": "感到头晕",
        "example": "Senti tontura quando me levantei rapidamente."
      },
      {
        "pt": "estar enjoado",
        "zh": "感到恶心",
        "example": "Ele ficou enjoado durante a viagem de ônibus."
      },
      {
        "pt": "ter alergia a",
        "zh": "对……过敏",
        "example": "Tenho alergia a alguns tipos de sabonete."
      },
      {
        "pt": "medir a pressão",
        "zh": "测量血压",
        "example": "A enfermeira mediu minha pressão antes da consulta."
      },
      {
        "pt": "fazer um exame",
        "zh": "做检查",
        "example": "O médico pediu que eu fizesse um exame de sangue."
      },
      {
        "pt": "seguir o tratamento",
        "zh": "遵循治疗方案",
        "example": "Siga o tratamento até o último dia."
      },
      {
        "pt": "tomar cuidado",
        "zh": "当心；注意",
        "example": "Tome cuidado para não molhar o curativo."
      },
      {
        "pt": "ficar de repouso",
        "zh": "卧床休息",
        "example": "Depois da cirurgia, ela ficou de repouso por uma semana."
      },
      {
        "pt": "melhorar aos poucos",
        "zh": "逐渐好转",
        "example": "Com o remédio, a tosse melhorou aos poucos."
      },
      {
        "pt": "procurar atendimento",
        "zh": "寻求医疗服务",
        "example": "Se a febre aumentar, procure atendimento médico."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "购物问题与售后",
    "topicPt": "Compras e pós-venda",
    "words": [
      {
        "pt": "estar em promoção",
        "zh": "正在促销",
        "example": "Esses sapatos estão em promoção até domingo."
      },
      {
        "pt": "ficar apertado",
        "zh": "穿起来紧",
        "example": "A camisa ficou apertada nos ombros."
      },
      {
        "pt": "ficar largo",
        "zh": "穿起来宽松",
        "example": "Este modelo ficou largo na cintura."
      },
      {
        "pt": "experimentar outro tamanho",
        "zh": "试另一个尺码",
        "example": "Posso experimentar outro tamanho desta calça?"
      },
      {
        "pt": "pedir desconto",
        "zh": "要求优惠",
        "example": "Ela pediu desconto porque comprou três peças."
      },
      {
        "pt": "trocar por outro",
        "zh": "换成另一个",
        "example": "O aparelho não funciona; quero trocá-lo por outro."
      },
      {
        "pt": "receber o reembolso",
        "zh": "收到退款",
        "example": "Recebi o reembolso cinco dias depois da devolução."
      },
      {
        "pt": "guardar a nota fiscal",
        "zh": "保留发票",
        "example": "Guarde a nota fiscal caso o produto apresente defeito."
      },
      {
        "pt": "acompanhar a entrega",
        "zh": "追踪配送",
        "example": "Você pode acompanhar a entrega pelo aplicativo."
      },
      {
        "pt": "estar fora de estoque",
        "zh": "缺货",
        "example": "A cor azul está fora de estoque no momento."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "邀请与约会",
    "topicPt": "Convites e encontros",
    "words": [
      {
        "pt": "combinar de sair",
        "zh": "约好一起出去",
        "example": "Combinamos de sair depois da aula."
      },
      {
        "pt": "aceitar o convite",
        "zh": "接受邀请",
        "example": "Aceitei o convite para jantar na casa deles."
      },
      {
        "pt": "recusar com educação",
        "zh": "礼貌拒绝",
        "example": "Ela agradeceu, mas recusou o convite com educação."
      },
      {
        "pt": "confirmar presença",
        "zh": "确认出席",
        "example": "Confirme sua presença até quinta-feira, por favor."
      },
      {
        "pt": "chegar na hora",
        "zh": "准时到达",
        "example": "Quero chegar na hora para ajudar com a mesa."
      },
      {
        "pt": "levar alguma coisa",
        "zh": "带点东西",
        "example": "Você quer que eu leve alguma coisa para a festa?"
      },
      {
        "pt": "apresentar alguém",
        "zh": "介绍某人",
        "example": "Vou apresentar você aos meus colegas."
      },
      {
        "pt": "puxar conversa",
        "zh": "主动攀谈",
        "example": "Ele puxou conversa enquanto esperávamos o café."
      },
      {
        "pt": "manter contato",
        "zh": "保持联系",
        "example": "Mesmo morando longe, nós mantemos contato."
      },
      {
        "pt": "despedir-se de alguém",
        "zh": "向某人道别",
        "example": "Fui à estação para me despedir dos meus amigos."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "讲述过去经历",
    "topicPt": "Relatar experiências passadas",
    "words": [
      {
        "pt": "no ano passado",
        "zh": "去年",
        "example": "No ano passado, fiz um curso de português."
      },
      {
        "pt": "há alguns dias",
        "zh": "几天前",
        "example": "Há alguns dias, encontrei uma antiga colega."
      },
      {
        "pt": "naquela época",
        "zh": "在那个时候",
        "example": "Naquela época, eu ainda morava com meus pais."
      },
      {
        "pt": "de repente",
        "zh": "突然",
        "example": "De repente, todas as luzes se apagaram."
      },
      {
        "pt": "logo depois",
        "zh": "紧接着",
        "example": "Terminamos o almoço e, logo depois, saímos."
      },
      {
        "pt": "pela primeira vez",
        "zh": "第一次",
        "example": "Viajei sozinho pela primeira vez aos dezoito anos."
      },
      {
        "pt": "acabar de",
        "zh": "刚刚做完",
        "example": "Acabei de receber uma mensagem do hotel."
      },
      {
        "pt": "costumava",
        "zh": "过去常常",
        "example": "Quando era criança, costumava brincar nesta praça."
      },
      {
        "pt": "acontecer",
        "zh": "发生",
        "example": "O que aconteceu depois da reunião?"
      },
      {
        "pt": "dar certo",
        "zh": "成功；进展顺利",
        "example": "Tentamos outra solução e, no fim, deu certo."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "谈论未来计划",
    "topicPt": "Planos para o futuro",
    "words": [
      {
        "pt": "daqui a pouco",
        "zh": "过一会儿",
        "example": "Daqui a pouco, vou sair para o trabalho."
      },
      {
        "pt": "daqui a dois meses",
        "zh": "两个月后",
        "example": "Daqui a dois meses, começaremos um curso novo."
      },
      {
        "pt": "no próximo feriado",
        "zh": "下个假期",
        "example": "No próximo feriado, queremos conhecer outra cidade."
      },
      {
        "pt": "pretender",
        "zh": "打算",
        "example": "Pretendo economizar dinheiro para viajar em julho."
      },
      {
        "pt": "pensar em",
        "zh": "考虑做……",
        "example": "Estou pensando em mudar de apartamento."
      },
      {
        "pt": "ter vontade de",
        "zh": "想要做……",
        "example": "Tenho vontade de aprender a tocar violão."
      },
      {
        "pt": "estar planejando",
        "zh": "正在计划",
        "example": "Estamos planejando visitar o sul do país."
      },
      {
        "pt": "esperar que",
        "zh": "希望……",
        "example": "Espero que o tempo esteja bom amanhã."
      },
      {
        "pt": "assim que possível",
        "zh": "一有可能就；尽快",
        "example": "Vou responder à mensagem assim que possível."
      },
      {
        "pt": "até o fim do mês",
        "zh": "在月底前",
        "example": "Quero terminar o projeto até o fim do mês."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "表达意见与偏好",
    "topicPt": "Opiniões e preferências",
    "words": [
      {
        "pt": "na minha opinião",
        "zh": "依我看",
        "example": "Na minha opinião, este caminho é mais seguro."
      },
      {
        "pt": "ter razão",
        "zh": "有道理；是对的",
        "example": "Você tem razão: precisamos sair mais cedo."
      },
      {
        "pt": "não ter certeza",
        "zh": "不确定",
        "example": "Não tenho certeza de que a loja esteja aberta."
      },
      {
        "pt": "preferir uma coisa a outra",
        "zh": "更喜欢某物而非另一物",
        "example": "Prefiro o ônibus ao carro nos dias de trânsito."
      },
      {
        "pt": "gostar mais de",
        "zh": "更喜欢",
        "example": "Gosto mais de filmes do que de séries."
      },
      {
        "pt": "achar interessante",
        "zh": "觉得有趣",
        "example": "Achei interessante a ideia de estudar em grupo."
      },
      {
        "pt": "parecer uma boa ideia",
        "zh": "似乎是个好主意",
        "example": "Viajar de trem parece uma boa ideia."
      },
      {
        "pt": "estar de acordo",
        "zh": "同意",
        "example": "Todos estão de acordo com a nova data."
      },
      {
        "pt": "mudar de ideia",
        "zh": "改变主意",
        "example": "Eu ia ficar em casa, mas mudei de ideia."
      },
      {
        "pt": "depender da situação",
        "zh": "视情况而定",
        "example": "Posso aceitar, mas depende da situação."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "家中故障与处理",
    "topicPt": "Problemas em casa",
    "words": [
      {
        "pt": "faltar luz",
        "zh": "停电",
        "example": "Faltou luz no bairro durante a tempestade."
      },
      {
        "pt": "acabar a água",
        "zh": "停水；水用完",
        "example": "A água acabou enquanto eu tomava banho."
      },
      {
        "pt": "a torneira pingar",
        "zh": "水龙头滴水",
        "example": "A torneira da cozinha está pingando desde ontem."
      },
      {
        "pt": "a pia entupir",
        "zh": "水槽堵塞",
        "example": "A pia entupiu e a água não desce."
      },
      {
        "pt": "a lâmpada queimar",
        "zh": "灯泡烧坏",
        "example": "A lâmpada do corredor queimou esta manhã."
      },
      {
        "pt": "chamar um técnico",
        "zh": "叫维修人员",
        "example": "Vou chamar um técnico para olhar a geladeira."
      },
      {
        "pt": "pedir um orçamento",
        "zh": "请求报价",
        "example": "Pedimos um orçamento antes de autorizar o conserto."
      },
      {
        "pt": "combinar uma visita",
        "zh": "约定上门时间",
        "example": "Combinei uma visita com o eletricista para amanhã."
      },
      {
        "pt": "consertar o aparelho",
        "zh": "修理设备",
        "example": "O técnico conseguiu consertar o aparelho no mesmo dia."
      },
      {
        "pt": "funcionar novamente",
        "zh": "重新运转",
        "example": "Depois da troca da peça, a máquina funcionou novamente."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "学习与工作组织",
    "topicPt": "Organização dos estudos e do trabalho",
    "words": [
      {
        "pt": "anotar os pontos principais",
        "zh": "记下要点",
        "example": "Anotei os pontos principais durante a apresentação."
      },
      {
        "pt": "dividir o trabalho",
        "zh": "分配工作",
        "example": "Dividimos o trabalho entre os quatro colegas."
      },
      {
        "pt": "entregar no prazo",
        "zh": "按时提交",
        "example": "Ela terminou o relatório e o entregou no prazo."
      },
      {
        "pt": "pedir ajuda",
        "zh": "寻求帮助",
        "example": "Quando não entendo, peço ajuda ao professor."
      },
      {
        "pt": "tirar uma dúvida",
        "zh": "解决疑问",
        "example": "Gostaria de tirar uma dúvida sobre este exercício."
      },
      {
        "pt": "prestar atenção",
        "zh": "集中注意力",
        "example": "Preste atenção às terminações dos verbos."
      },
      {
        "pt": "cometer um erro",
        "zh": "犯错",
        "example": "Cometi um erro ao copiar o número."
      },
      {
        "pt": "corrigir a resposta",
        "zh": "订正答案",
        "example": "Leia a explicação antes de corrigir a resposta."
      },
      {
        "pt": "acompanhar o progresso",
        "zh": "跟踪进度",
        "example": "Uso o calendário para acompanhar meu progresso."
      },
      {
        "pt": "alcançar uma meta",
        "zh": "达成目标",
        "example": "Estudei todos os dias e alcancei minha meta."
      }
    ]
  },
  {
    "level": "A2",
    "topicZh": "手机与线上服务",
    "topicPt": "Celular e serviços digitais",
    "words": [
      {
        "pt": "criar uma conta",
        "zh": "创建账户",
        "example": "Criei uma conta usando meu endereço de email."
      },
      {
        "pt": "entrar com a senha",
        "zh": "使用密码登录",
        "example": "Não consigo entrar com a senha antiga."
      },
      {
        "pt": "recuperar o acesso",
        "zh": "恢复访问权限",
        "example": "Recebi um código para recuperar o acesso."
      },
      {
        "pt": "ativar as notificações",
        "zh": "开启通知",
        "example": "Ative as notificações para não perder os avisos."
      },
      {
        "pt": "compartilhar a localização",
        "zh": "共享位置",
        "example": "Compartilhei minha localização com o motorista."
      },
      {
        "pt": "anexar um arquivo",
        "zh": "附加文件",
        "example": "Esqueci de anexar o arquivo ao email."
      },
      {
        "pt": "fazer uma videochamada",
        "zh": "进行视频通话",
        "example": "Fizemos uma videochamada com nossos parentes."
      },
      {
        "pt": "ficar sem sinal",
        "zh": "没有信号",
        "example": "Na estrada, o celular ficou sem sinal."
      },
      {
        "pt": "carregar a bateria",
        "zh": "给电池充电",
        "example": "Preciso carregar a bateria antes de sair."
      },
      {
        "pt": "atualizar o sistema",
        "zh": "更新系统",
        "example": "O telefone reiniciou depois de atualizar o sistema."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "观点与连接表达",
    "topicPt": "Opinião e conectores",
    "words": [
      {
        "pt": "opinião",
        "zh": "观点；意见",
        "example": "Na minha opinião, a mudança foi positiva."
      },
      {
        "pt": "embora",
        "zh": "尽管；虽然",
        "example": "Embora esteja cansada, ela vai continuar."
      },
      {
        "pt": "porém",
        "zh": "然而",
        "example": "A ideia é boa, porém custa muito."
      },
      {
        "pt": "portanto",
        "zh": "因此",
        "example": "Não havia ônibus; portanto, fomos a pé."
      },
      {
        "pt": "além disso",
        "zh": "此外",
        "example": "O curso é prático e, além disso, é gratuito."
      },
      {
        "pt": "motivo",
        "zh": "原因；理由",
        "example": "Qual foi o motivo da mudança?"
      },
      {
        "pt": "vantagem",
        "zh": "优点；优势",
        "example": "A principal vantagem é a flexibilidade."
      },
      {
        "pt": "desvantagem",
        "zh": "缺点；劣势",
        "example": "A distância é uma grande desvantagem."
      },
      {
        "pt": "considerar",
        "zh": "考虑；认为",
        "example": "Precisamos considerar todas as opções."
      },
      {
        "pt": "depender",
        "zh": "取决于；依赖",
        "example": "A escolha depende do seu objetivo."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "社会、媒体与环境",
    "topicPt": "Sociedade, mídia e ambiente",
    "words": [
      {
        "pt": "notícia",
        "zh": "新闻；消息",
        "example": "Li a notícia no jornal de manhã."
      },
      {
        "pt": "informação",
        "zh": "信息",
        "example": "É importante verificar a informação."
      },
      {
        "pt": "mudança",
        "zh": "变化；改变",
        "example": "A cidade passou por uma grande mudança."
      },
      {
        "pt": "ambiente",
        "zh": "环境；氛围",
        "example": "Precisamos proteger o meio ambiente."
      },
      {
        "pt": "consumo",
        "zh": "消费；消耗",
        "example": "O consumo de água diminuiu este ano."
      },
      {
        "pt": "reduzir",
        "zh": "减少",
        "example": "Queremos reduzir o uso de plástico."
      },
      {
        "pt": "aumentar",
        "zh": "增加；提高",
        "example": "Os preços podem aumentar no próximo mês."
      },
      {
        "pt": "comunidade",
        "zh": "社区；群体",
        "example": "A comunidade organizou um evento."
      },
      {
        "pt": "comportamento",
        "zh": "行为；表现",
        "example": "A tecnologia mudou nosso comportamento."
      },
      {
        "pt": "consequência",
        "zh": "后果；结果",
        "example": "Toda escolha tem uma consequência."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "表达观点",
    "topicPt": "Expressar opiniões",
    "words": [
      {
        "pt": "acreditar",
        "zh": "相信；认为",
        "example": "É importante acreditar no próprio progresso."
      },
      {
        "pt": "achar",
        "zh": "认为；找到",
        "example": "Você pode achar esta solução melhor."
      },
      {
        "pt": "parecer",
        "zh": "看起来；似乎",
        "example": "A proposta pode parecer interessante."
      },
      {
        "pt": "defender",
        "zh": "维护；主张",
        "example": "Ela soube defender o seu ponto de vista."
      },
      {
        "pt": "discordar",
        "zh": "不同意",
        "example": "É possível discordar com respeito."
      },
      {
        "pt": "argumento",
        "zh": "论点；理由",
        "example": "O argumento dele foi convincente."
      },
      {
        "pt": "ponto de vista",
        "zh": "观点；视角",
        "example": "Precisamos ouvir outro ponto de vista."
      },
      {
        "pt": "segundo",
        "zh": "根据；按照",
        "example": "Segundo a pesquisa, o consumo caiu."
      },
      {
        "pt": "na verdade",
        "zh": "事实上",
        "example": "Na verdade, a situação é mais complexa."
      },
      {
        "pt": "talvez",
        "zh": "也许",
        "example": "Talvez seja melhor esperar."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "原因与结果",
    "topicPt": "Causa e consequência",
    "words": [
      {
        "pt": "causa",
        "zh": "原因；成因",
        "example": "Ainda não sabemos a causa do problema."
      },
      {
        "pt": "efeito",
        "zh": "效果；影响",
        "example": "A mudança teve um efeito positivo."
      },
      {
        "pt": "devido a",
        "zh": "由于",
        "example": "O voo atrasou devido a um problema técnico."
      },
      {
        "pt": "por causa de",
        "zh": "因为",
        "example": "Ficamos em casa por causa de uma tempestade."
      },
      {
        "pt": "assim",
        "zh": "这样；因此",
        "example": "O custo caiu e, assim, mais pessoas participaram."
      },
      {
        "pt": "por isso",
        "zh": "因此",
        "example": "Estava doente, por isso não fui trabalhar."
      },
      {
        "pt": "provocar",
        "zh": "引起；导致",
        "example": "A notícia pode provocar muitas reações."
      },
      {
        "pt": "resultar",
        "zh": "导致；产生结果",
        "example": "O esforço pode resultar numa grande melhoria."
      },
      {
        "pt": "impacto",
        "zh": "影响；冲击",
        "example": "A decisão terá impacto na comunidade."
      },
      {
        "pt": "responsável",
        "zh": "负责的；责任人",
        "example": "Cada pessoa é responsável pelas suas escolhas."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "新闻与媒体",
    "topicPt": "Notícias e mídia",
    "words": [
      {
        "pt": "jornal",
        "zh": "报纸；新闻媒体",
        "example": "Li a reportagem no jornal."
      },
      {
        "pt": "reportagem",
        "zh": "新闻报道",
        "example": "A reportagem apresenta dados recentes."
      },
      {
        "pt": "fonte",
        "zh": "来源；消息源",
        "example": "É importante verificar a fonte."
      },
      {
        "pt": "entrevista",
        "zh": "采访；面试",
        "example": "A entrevista foi transmitida ao vivo."
      },
      {
        "pt": "publicar",
        "zh": "发布；出版",
        "example": "O jornal vai publicar a notícia amanhã."
      },
      {
        "pt": "compartilhar",
        "zh": "分享",
        "example": "Devemos evitar compartilhar informações falsas."
      },
      {
        "pt": "conteúdo",
        "zh": "内容",
        "example": "Este canal produz conteúdo educativo."
      },
      {
        "pt": "público",
        "zh": "公众；公共的",
        "example": "A campanha chamou a atenção do público."
      },
      {
        "pt": "verdadeiro",
        "zh": "真实的；正确的",
        "example": "Nem tudo na internet é verdadeiro."
      },
      {
        "pt": "falso",
        "zh": "虚假的；错误的",
        "example": "A mensagem continha dados falsos."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "环境行动",
    "topicPt": "Ações ambientais",
    "words": [
      {
        "pt": "reciclar",
        "zh": "回收利用",
        "example": "Precisamos reciclar mais plástico."
      },
      {
        "pt": "separar",
        "zh": "分开；分类",
        "example": "É preciso separar o papel do lixo orgânico."
      },
      {
        "pt": "economizar",
        "zh": "节省",
        "example": "Podemos economizar água no dia a dia."
      },
      {
        "pt": "desperdício",
        "zh": "浪费",
        "example": "O desperdício de comida ainda é alto."
      },
      {
        "pt": "poluição",
        "zh": "污染",
        "example": "A poluição afeta a qualidade do ar."
      },
      {
        "pt": "sustentável",
        "zh": "可持续的",
        "example": "A cidade procura uma solução sustentável."
      },
      {
        "pt": "recurso",
        "zh": "资源；手段",
        "example": "A água é um recurso essencial."
      },
      {
        "pt": "preservar",
        "zh": "保护；保存",
        "example": "Devemos preservar as áreas verdes."
      },
      {
        "pt": "clima",
        "zh": "气候",
        "example": "As mudanças no clima afetam a agricultura."
      },
      {
        "pt": "energia renovável",
        "zh": "可再生能源",
        "example": "O país investiu em energia renovável."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "经济与个人财务",
    "topicPt": "Economia e finanças pessoais",
    "words": [
      {
        "pt": "salário",
        "zh": "工资",
        "example": "O salário é pago no fim do mês."
      },
      {
        "pt": "despesa",
        "zh": "支出；费用",
        "example": "Precisamos controlar as despesas."
      },
      {
        "pt": "orçamento",
        "zh": "预算",
        "example": "A viagem ficou dentro do orçamento."
      },
      {
        "pt": "poupar",
        "zh": "储蓄；节省",
        "example": "Quero poupar dinheiro para estudar fora."
      },
      {
        "pt": "investir",
        "zh": "投资；投入",
        "example": "Ela decidiu investir na própria formação."
      },
      {
        "pt": "dívida",
        "zh": "债务",
        "example": "Ele conseguiu pagar a dívida."
      },
      {
        "pt": "renda",
        "zh": "收入",
        "example": "A família tem duas fontes de renda."
      },
      {
        "pt": "custo",
        "zh": "成本；费用",
        "example": "O custo de vida aumentou."
      },
      {
        "pt": "desconto",
        "zh": "折扣",
        "example": "A loja ofereceu um desconto de vinte por cento."
      },
      {
        "pt": "parcela",
        "zh": "分期付款的一期",
        "example": "Paguei o computador em dez parcelas."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "公共服务与公民生活",
    "topicPt": "Serviços públicos e cidadania",
    "words": [
      {
        "pt": "prefeitura",
        "zh": "市政府",
        "example": "A prefeitura anunciou novas medidas."
      },
      {
        "pt": "imposto",
        "zh": "税",
        "example": "O prazo para pagar o imposto termina amanhã."
      },
      {
        "pt": "direito",
        "zh": "权利；法律",
        "example": "Todos têm direito à informação."
      },
      {
        "pt": "dever",
        "zh": "义务；应该",
        "example": "É dever do cidadão respeitar as leis."
      },
      {
        "pt": "lei",
        "zh": "法律",
        "example": "A nova lei entrou em vigor este mês."
      },
      {
        "pt": "eleição",
        "zh": "选举",
        "example": "A eleição será realizada no domingo."
      },
      {
        "pt": "votar",
        "zh": "投票",
        "example": "Milhões de pessoas foram votar."
      },
      {
        "pt": "segurança",
        "zh": "安全",
        "example": "A segurança do bairro melhorou."
      },
      {
        "pt": "transporte público",
        "zh": "公共交通",
        "example": "O transporte público precisa ser mais eficiente."
      },
      {
        "pt": "atendimento",
        "zh": "服务；接待",
        "example": "O atendimento pode ser feito pela internet."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "职业发展",
    "topicPt": "Desenvolvimento profissional",
    "words": [
      {
        "pt": "carreira",
        "zh": "职业生涯",
        "example": "Ela quer mudar de carreira."
      },
      {
        "pt": "currículo",
        "zh": "简历；课程体系",
        "example": "Atualizei o meu currículo ontem."
      },
      {
        "pt": "vaga",
        "zh": "职位空缺；空位",
        "example": "A empresa abriu uma nova vaga."
      },
      {
        "pt": "candidato",
        "zh": "候选人；应聘者",
        "example": "Cada candidato fará uma entrevista."
      },
      {
        "pt": "competência",
        "zh": "能力；胜任力",
        "example": "Comunicação é uma competência importante."
      },
      {
        "pt": "habilidade",
        "zh": "技能",
        "example": "Quero desenvolver minhas habilidades digitais."
      },
      {
        "pt": "oportunidade",
        "zh": "机会",
        "example": "Este curso criou novas oportunidades."
      },
      {
        "pt": "promoção",
        "zh": "晋升；促销",
        "example": "Ela recebeu uma promoção no trabalho."
      },
      {
        "pt": "responsabilidade",
        "zh": "责任",
        "example": "O cargo exige muita responsabilidade."
      },
      {
        "pt": "liderança",
        "zh": "领导力",
        "example": "O projeto ajudou a desenvolver sua liderança."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "社会关系",
    "topicPt": "Relações sociais",
    "words": [
      {
        "pt": "respeito",
        "zh": "尊重",
        "example": "O diálogo exige respeito."
      },
      {
        "pt": "apoio",
        "zh": "支持",
        "example": "Recebi muito apoio dos meus amigos."
      },
      {
        "pt": "conflito",
        "zh": "冲突",
        "example": "Eles resolveram o conflito por meio do diálogo."
      },
      {
        "pt": "acordo",
        "zh": "协议；共识",
        "example": "As duas partes chegaram a um acordo."
      },
      {
        "pt": "diferença",
        "zh": "差异；不同",
        "example": "Precisamos respeitar as diferenças."
      },
      {
        "pt": "igualdade",
        "zh": "平等",
        "example": "A organização promove a igualdade."
      },
      {
        "pt": "preconceito",
        "zh": "偏见",
        "example": "A educação ajuda a combater o preconceito."
      },
      {
        "pt": "inclusão",
        "zh": "包容；纳入",
        "example": "A escola criou um programa de inclusão."
      },
      {
        "pt": "cooperação",
        "zh": "合作",
        "example": "A cooperação foi essencial para o resultado."
      },
      {
        "pt": "convivência",
        "zh": "相处；共处",
        "example": "A boa convivência depende de diálogo."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "抽象感受",
    "topicPt": "Sentimentos abstratos",
    "words": [
      {
        "pt": "ansiedade",
        "zh": "焦虑",
        "example": "A ansiedade aumentou antes da prova."
      },
      {
        "pt": "alívio",
        "zh": "宽慰；缓解",
        "example": "Senti um grande alívio ao receber a notícia."
      },
      {
        "pt": "frustração",
        "zh": "挫败感",
        "example": "Ele falou sobre sua frustração."
      },
      {
        "pt": "esperança",
        "zh": "希望",
        "example": "Ainda temos esperança de encontrar uma solução."
      },
      {
        "pt": "coragem",
        "zh": "勇气",
        "example": "Foi preciso coragem para começar de novo."
      },
      {
        "pt": "paciência",
        "zh": "耐心",
        "example": "Aprender uma língua exige paciência."
      },
      {
        "pt": "curiosidade",
        "zh": "好奇心",
        "example": "A curiosidade ajuda no aprendizado."
      },
      {
        "pt": "motivação",
        "zh": "动力；动机",
        "example": "Minha motivação cresce quando vejo progresso."
      },
      {
        "pt": "satisfação",
        "zh": "满足；满意",
        "example": "Ela demonstrou satisfação com o trabalho."
      },
      {
        "pt": "incerteza",
        "zh": "不确定性",
        "example": "A mudança trouxe alguma incerteza."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "分析与解决问题",
    "topicPt": "Resolver problemas",
    "words": [
      {
        "pt": "problema",
        "zh": "问题",
        "example": "Precisamos definir o problema primeiro."
      },
      {
        "pt": "solução",
        "zh": "解决方案",
        "example": "A equipe encontrou uma solução simples."
      },
      {
        "pt": "alternativa",
        "zh": "替代方案；选择",
        "example": "Vamos considerar outra alternativa."
      },
      {
        "pt": "prioridade",
        "zh": "优先事项",
        "example": "A segurança deve ser nossa prioridade."
      },
      {
        "pt": "etapa",
        "zh": "阶段；步骤",
        "example": "A primeira etapa já foi concluída."
      },
      {
        "pt": "avaliar",
        "zh": "评估",
        "example": "Precisamos avaliar os riscos."
      },
      {
        "pt": "identificar",
        "zh": "识别；确定",
        "example": "O relatório ajuda a identificar três causas principais."
      },
      {
        "pt": "comparar",
        "zh": "比较",
        "example": "É melhor comparar os preços antes de comprar."
      },
      {
        "pt": "decidir",
        "zh": "决定",
        "example": "Precisamos decidir qual caminho seguir."
      },
      {
        "pt": "adaptar",
        "zh": "适应；调整",
        "example": "Foi necessário adaptar o plano."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "学术与信息处理",
    "topicPt": "Estudo e informação",
    "words": [
      {
        "pt": "analisar",
        "zh": "分析",
        "example": "Vamos analisar os resultados da pesquisa."
      },
      {
        "pt": "resumir",
        "zh": "总结",
        "example": "Tente resumir o texto em três frases."
      },
      {
        "pt": "descrever",
        "zh": "描述",
        "example": "O autor procura descrever uma mudança importante."
      },
      {
        "pt": "demonstrar",
        "zh": "表明；展示",
        "example": "Os dados podem demonstrar uma tendência clara."
      },
      {
        "pt": "concluir",
        "zh": "得出结论；完成",
        "example": "Podemos concluir que a medida funcionou."
      },
      {
        "pt": "destacar",
        "zh": "强调；突出",
        "example": "O texto procura destacar dois benefícios."
      },
      {
        "pt": "interpretar",
        "zh": "解释；解读",
        "example": "Cada leitor pode interpretar a história de modo diferente."
      },
      {
        "pt": "evidência",
        "zh": "证据",
        "example": "Não há evidência suficiente para essa afirmação."
      },
      {
        "pt": "pesquisa",
        "zh": "研究；调查",
        "example": "A pesquisa ouviu mil participantes."
      },
      {
        "pt": "dado",
        "zh": "数据；信息",
        "example": "Este dado precisa ser confirmado."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "连接与组织表达",
    "topicPt": "Conectores e organização",
    "words": [
      {
        "pt": "enquanto",
        "zh": "当……时；而",
        "example": "Enquanto eu cozinhava, ela arrumava a mesa."
      },
      {
        "pt": "apesar de",
        "zh": "尽管",
        "example": "Apesar de estar chovendo, saímos cedo."
      },
      {
        "pt": "mesmo que",
        "zh": "即使",
        "example": "Mesmo que seja difícil, vou continuar."
      },
      {
        "pt": "caso",
        "zh": "如果；情况",
        "example": "Caso precise de ajuda, ligue para mim."
      },
      {
        "pt": "ou seja",
        "zh": "也就是说",
        "example": "O prazo acabou, ou seja, não há mais inscrições."
      },
      {
        "pt": "por exemplo",
        "zh": "例如",
        "example": "Algumas frutas, por exemplo a laranja, têm vitamina C."
      },
      {
        "pt": "em geral",
        "zh": "总体来说",
        "example": "Em geral, o serviço funciona bem."
      },
      {
        "pt": "ao contrário",
        "zh": "相反",
        "example": "Eu não achei caro; ao contrário, o preço foi justo."
      },
      {
        "pt": "por enquanto",
        "zh": "暂时；目前",
        "example": "Por enquanto, vamos manter o plano atual."
      },
      {
        "pt": "finalmente",
        "zh": "最后；终于",
        "example": "Finalmente conseguimos resolver o problema."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "住房与租赁",
    "topicPt": "Moradia e aluguel",
    "words": [
      {
        "pt": "aluguel",
        "zh": "房租",
        "example": "O aluguel aumentou no início do ano."
      },
      {
        "pt": "inquilino",
        "zh": "房客",
        "example": "O inquilino avisou que vai se mudar."
      },
      {
        "pt": "proprietário",
        "zh": "房东；业主",
        "example": "O proprietário concordou em fazer o reparo."
      },
      {
        "pt": "imóvel",
        "zh": "房产",
        "example": "Eles visitaram três imóveis no sábado."
      },
      {
        "pt": "condomínio",
        "zh": "公寓管理费；住宅区",
        "example": "O condomínio inclui água e segurança."
      },
      {
        "pt": "mudança de casa",
        "zh": "搬家",
        "example": "A mudança de casa levou o dia inteiro."
      },
      {
        "pt": "reforma",
        "zh": "装修；翻修",
        "example": "A reforma da cozinha termina em junho."
      },
      {
        "pt": "vazamento",
        "zh": "漏水",
        "example": "Há um vazamento embaixo da pia."
      },
      {
        "pt": "manutenção",
        "zh": "维护",
        "example": "O prédio precisa de manutenção regular."
      },
      {
        "pt": "fiador",
        "zh": "租房担保人",
        "example": "A imobiliária pediu um fiador para o contrato."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "饮食与营养",
    "topicPt": "Alimentação e nutrição",
    "words": [
      {
        "pt": "alimentação",
        "zh": "饮食",
        "example": "Uma alimentação equilibrada melhora a disposição."
      },
      {
        "pt": "nutriente",
        "zh": "营养素",
        "example": "Cada alimento oferece nutrientes diferentes."
      },
      {
        "pt": "ingrediente",
        "zh": "食材；配料",
        "example": "Confira os ingredientes antes de comprar."
      },
      {
        "pt": "receita",
        "zh": "食谱",
        "example": "Segui uma receita simples de pão."
      },
      {
        "pt": "tempero",
        "zh": "调味料",
        "example": "Este tempero combina bem com peixe."
      },
      {
        "pt": "porção",
        "zh": "一份；分量",
        "example": "O restaurante serve porções generosas."
      },
      {
        "pt": "apetite",
        "zh": "食欲",
        "example": "Perdi o apetite por causa do calor."
      },
      {
        "pt": "dieta",
        "zh": "饮食方案",
        "example": "Ela mudou a dieta por orientação médica."
      },
      {
        "pt": "equilibrado",
        "zh": "均衡的",
        "example": "Procuro manter um cardápio equilibrado."
      },
      {
        "pt": "evitar",
        "zh": "避免",
        "example": "É melhor evitar alimentos muito salgados."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "出行与交通状况",
    "topicPt": "Deslocamento e trânsito",
    "words": [
      {
        "pt": "trânsito",
        "zh": "交通状况",
        "example": "O trânsito estava intenso no centro."
      },
      {
        "pt": "engarrafamento",
        "zh": "堵车",
        "example": "Ficamos presos em um engarrafamento."
      },
      {
        "pt": "trajeto",
        "zh": "路线；行程",
        "example": "Este trajeto leva cerca de quarenta minutos."
      },
      {
        "pt": "desvio",
        "zh": "绕行路线",
        "example": "A obra obrigou os motoristas a fazer um desvio."
      },
      {
        "pt": "faixa",
        "zh": "车道；条带",
        "example": "O ônibus circula numa faixa exclusiva."
      },
      {
        "pt": "pedestre",
        "zh": "行人",
        "example": "O motorista parou para o pedestre atravessar."
      },
      {
        "pt": "cruzamento",
        "zh": "十字路口",
        "example": "Houve um acidente naquele cruzamento."
      },
      {
        "pt": "passageiro",
        "zh": "乘客",
        "example": "Os passageiros aguardaram na plataforma."
      },
      {
        "pt": "embarque",
        "zh": "登乘",
        "example": "O embarque começa meia hora antes do voo."
      },
      {
        "pt": "desembarque",
        "zh": "下客；抵达",
        "example": "A área de desembarque fica no térreo."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "医疗与康复",
    "topicPt": "Cuidados de saúde",
    "words": [
      {
        "pt": "consulta",
        "zh": "问诊；会诊",
        "example": "Marquei uma consulta para sexta-feira."
      },
      {
        "pt": "diagnóstico",
        "zh": "诊断",
        "example": "O médico explicou o diagnóstico com calma."
      },
      {
        "pt": "tratamento",
        "zh": "治疗",
        "example": "O tratamento deve continuar por duas semanas."
      },
      {
        "pt": "receita médica",
        "zh": "处方",
        "example": "É preciso apresentar a receita médica."
      },
      {
        "pt": "exame",
        "zh": "检查；考试",
        "example": "O resultado do exame sai amanhã."
      },
      {
        "pt": "sintoma",
        "zh": "症状",
        "example": "A febre pode ser um sintoma da infecção."
      },
      {
        "pt": "prevenção",
        "zh": "预防",
        "example": "A prevenção reduz o risco de doenças."
      },
      {
        "pt": "vacina",
        "zh": "疫苗",
        "example": "A vacina está disponível no posto de saúde."
      },
      {
        "pt": "cicatrizar",
        "zh": "愈合",
        "example": "O corte levou alguns dias para cicatrizar."
      },
      {
        "pt": "bem-estar",
        "zh": "身心健康",
        "example": "Dormir bem contribui para o bem-estar."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "大学与学习方法",
    "topicPt": "Universidade e métodos de estudo",
    "words": [
      {
        "pt": "disciplina",
        "zh": "课程；纪律",
        "example": "Esta disciplina exige bastante leitura."
      },
      {
        "pt": "matrícula",
        "zh": "注册；入学登记",
        "example": "A matrícula deve ser feita pela internet."
      },
      {
        "pt": "bolsa de estudos",
        "zh": "奖学金",
        "example": "Ela conseguiu uma bolsa de estudos integral."
      },
      {
        "pt": "prazo",
        "zh": "期限",
        "example": "O prazo para entregar o trabalho termina hoje."
      },
      {
        "pt": "bibliografia",
        "zh": "参考书目",
        "example": "O professor indicou uma bibliografia atualizada."
      },
      {
        "pt": "anotação",
        "zh": "笔记",
        "example": "Revisei minhas anotações antes da prova."
      },
      {
        "pt": "memorizar",
        "zh": "记住",
        "example": "Criar exemplos ajuda a memorizar palavras."
      },
      {
        "pt": "revisar",
        "zh": "复习；修改",
        "example": "Vou revisar o conteúdo no fim de semana."
      },
      {
        "pt": "aprendizado",
        "zh": "学习过程",
        "example": "A prática diária acelera o aprendizado."
      },
      {
        "pt": "desempenho",
        "zh": "表现；成绩",
        "example": "Seu desempenho melhorou neste semestre."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "职场日常",
    "topicPt": "Rotina profissional",
    "words": [
      {
        "pt": "expediente",
        "zh": "工作时间",
        "example": "Meu expediente termina às seis."
      },
      {
        "pt": "tarefa",
        "zh": "任务",
        "example": "Dividimos a tarefa entre quatro pessoas."
      },
      {
        "pt": "demanda",
        "zh": "需求；工作请求",
        "example": "A equipe recebeu uma demanda urgente."
      },
      {
        "pt": "departamento",
        "zh": "部门",
        "example": "O documento foi enviado ao departamento financeiro."
      },
      {
        "pt": "funcionário",
        "zh": "员工",
        "example": "Cada funcionário recebeu um crachá novo."
      },
      {
        "pt": "contratar",
        "zh": "雇用",
        "example": "A empresa pretende contratar mais técnicos."
      },
      {
        "pt": "demitir",
        "zh": "解雇",
        "example": "A direção decidiu não demitir ninguém."
      },
      {
        "pt": "negociar",
        "zh": "谈判；协商",
        "example": "Precisamos negociar um prazo maior."
      },
      {
        "pt": "cumprir",
        "zh": "履行；按时完成",
        "example": "Todos devem cumprir as normas de segurança."
      },
      {
        "pt": "entregar",
        "zh": "交付",
        "example": "Vou entregar o relatório até amanhã."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "会议与协作",
    "topicPt": "Reuniões e colaboração",
    "words": [
      {
        "pt": "pauta",
        "zh": "议程",
        "example": "O orçamento é o primeiro item da pauta."
      },
      {
        "pt": "ata",
        "zh": "会议记录",
        "example": "A secretária enviou a ata por email."
      },
      {
        "pt": "participante",
        "zh": "参与者",
        "example": "Cada participante apresentou uma sugestão."
      },
      {
        "pt": "debate",
        "zh": "讨论；辩论",
        "example": "O tema gerou um debate produtivo."
      },
      {
        "pt": "sugestão",
        "zh": "建议",
        "example": "Sua sugestão foi aceita pela equipe."
      },
      {
        "pt": "consenso",
        "zh": "共识",
        "example": "Ainda não chegamos a um consenso."
      },
      {
        "pt": "discordância",
        "zh": "分歧",
        "example": "A discordância foi resolvida com diálogo."
      },
      {
        "pt": "coordenar",
        "zh": "协调",
        "example": "Ela vai coordenar as próximas etapas."
      },
      {
        "pt": "contribuir",
        "zh": "贡献",
        "example": "Todos podem contribuir com novas ideias."
      },
      {
        "pt": "colaborar",
        "zh": "合作",
        "example": "Os setores precisam colaborar entre si."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "网络安全",
    "topicPt": "Segurança digital",
    "words": [
      {
        "pt": "privacidade",
        "zh": "隐私",
        "example": "Revise as configurações de privacidade."
      },
      {
        "pt": "golpe",
        "zh": "骗局",
        "example": "Ele percebeu que a mensagem era um golpe."
      },
      {
        "pt": "fraude",
        "zh": "欺诈",
        "example": "O banco bloqueou uma tentativa de fraude."
      },
      {
        "pt": "link suspeito",
        "zh": "可疑链接",
        "example": "Não clique em nenhum link suspeito."
      },
      {
        "pt": "código de acesso",
        "zh": "访问码",
        "example": "Nunca compartilhe seu código de acesso."
      },
      {
        "pt": "verificação",
        "zh": "验证",
        "example": "O aplicativo exige verificação em duas etapas."
      },
      {
        "pt": "proteger",
        "zh": "保护",
        "example": "Uma senha forte ajuda a proteger seus dados."
      },
      {
        "pt": "vazar",
        "zh": "泄露",
        "example": "Informações pessoais podem vazar na internet."
      },
      {
        "pt": "denunciar",
        "zh": "举报",
        "example": "Você pode denunciar um perfil falso."
      },
      {
        "pt": "atualização",
        "zh": "更新",
        "example": "Instale a atualização de segurança disponível."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "电影与文学",
    "topicPt": "Cinema e literatura",
    "words": [
      {
        "pt": "enredo",
        "zh": "情节",
        "example": "O enredo fica mais interessante no final."
      },
      {
        "pt": "personagem",
        "zh": "人物角色",
        "example": "A personagem principal enfrenta uma escolha difícil."
      },
      {
        "pt": "cenário",
        "zh": "场景；背景",
        "example": "A história tem como cenário uma cidade pequena."
      },
      {
        "pt": "diretor",
        "zh": "导演",
        "example": "O diretor conversou com o público após o filme."
      },
      {
        "pt": "autor",
        "zh": "作者",
        "example": "O autor publicou seu primeiro romance."
      },
      {
        "pt": "capítulo",
        "zh": "章节",
        "example": "Li dois capítulos antes de dormir."
      },
      {
        "pt": "narrador",
        "zh": "叙述者",
        "example": "O narrador conhece os pensamentos das personagens."
      },
      {
        "pt": "crítica",
        "zh": "评论；批评",
        "example": "O filme recebeu uma crítica favorável."
      },
      {
        "pt": "estreia",
        "zh": "首映；首次亮相",
        "example": "A estreia do documentário será na quinta-feira."
      },
      {
        "pt": "adaptação",
        "zh": "改编",
        "example": "A série é uma adaptação de um livro."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "友谊与界限",
    "topicPt": "Amizade e limites",
    "words": [
      {
        "pt": "amizade",
        "zh": "友谊",
        "example": "Nossa amizade começou na universidade."
      },
      {
        "pt": "limite",
        "zh": "界限；限制",
        "example": "É importante estabelecer limites saudáveis."
      },
      {
        "pt": "sinceridade",
        "zh": "真诚",
        "example": "Ela respondeu com sinceridade."
      },
      {
        "pt": "lealdade",
        "zh": "忠诚",
        "example": "A lealdade fortalece uma amizade."
      },
      {
        "pt": "mal-entendido",
        "zh": "误会",
        "example": "Tudo começou por causa de um mal-entendido."
      },
      {
        "pt": "reconciliar-se",
        "zh": "和好",
        "example": "Os dois conseguiram se reconciliar."
      },
      {
        "pt": "perdoar",
        "zh": "原谅",
        "example": "Perdoar não significa esquecer o que aconteceu."
      },
      {
        "pt": "confiar",
        "zh": "信任",
        "example": "Preciso confiar mais na minha equipe."
      },
      {
        "pt": "afastar-se",
        "zh": "疏远；离开",
        "example": "Ele decidiu se afastar por algum tempo."
      },
      {
        "pt": "manter contato",
        "zh": "保持联系",
        "example": "Mesmo longe, tentamos manter contato."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "情绪管理",
    "topicPt": "Gestão das emoções",
    "words": [
      {
        "pt": "preocupação",
        "zh": "担忧",
        "example": "A falta de notícias causou preocupação."
      },
      {
        "pt": "insegurança",
        "zh": "不安全感",
        "example": "Ela superou a insegurança aos poucos."
      },
      {
        "pt": "decepção",
        "zh": "失望",
        "example": "O cancelamento foi uma grande decepção."
      },
      {
        "pt": "entusiasmo",
        "zh": "热情",
        "example": "Os alunos receberam a ideia com entusiasmo."
      },
      {
        "pt": "calma",
        "zh": "冷静",
        "example": "Respire fundo e tente manter a calma."
      },
      {
        "pt": "estresse",
        "zh": "压力",
        "example": "O excesso de trabalho aumenta o estresse."
      },
      {
        "pt": "lidar com",
        "zh": "应对",
        "example": "Aprendi a lidar com situações imprevistas."
      },
      {
        "pt": "acalmar-se",
        "zh": "平静下来",
        "example": "Ele saiu para se acalmar."
      },
      {
        "pt": "expressar",
        "zh": "表达",
        "example": "Nem sempre é fácil expressar sentimentos."
      },
      {
        "pt": "superar",
        "zh": "克服",
        "example": "Ela conseguiu superar uma fase difícil."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "消费与售后",
    "topicPt": "Consumo e pós-venda",
    "words": [
      {
        "pt": "garantia",
        "zh": "保修",
        "example": "O aparelho ainda está na garantia."
      },
      {
        "pt": "troca",
        "zh": "更换；交换",
        "example": "A loja permitiu a troca do produto."
      },
      {
        "pt": "reembolso",
        "zh": "退款",
        "example": "Solicitei o reembolso pelo aplicativo."
      },
      {
        "pt": "nota fiscal",
        "zh": "发票",
        "example": "Guarde a nota fiscal da compra."
      },
      {
        "pt": "defeito",
        "zh": "缺陷",
        "example": "O celular apresentou um defeito na tela."
      },
      {
        "pt": "reclamação",
        "zh": "投诉",
        "example": "A empresa respondeu à reclamação rapidamente."
      },
      {
        "pt": "consumidor",
        "zh": "消费者",
        "example": "O consumidor tem direito a informações claras."
      },
      {
        "pt": "fornecedor",
        "zh": "供应商",
        "example": "O fornecedor atrasou a entrega."
      },
      {
        "pt": "prazo de entrega",
        "zh": "交货期",
        "example": "O prazo de entrega é de cinco dias úteis."
      },
      {
        "pt": "custo-benefício",
        "zh": "性价比",
        "example": "Este modelo oferece um bom custo-benefício."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "气候与资源",
    "topicPt": "Clima e recursos naturais",
    "words": [
      {
        "pt": "seca",
        "zh": "干旱",
        "example": "A seca prejudicou a produção agrícola."
      },
      {
        "pt": "enchente",
        "zh": "洪水",
        "example": "A enchente deixou várias ruas bloqueadas."
      },
      {
        "pt": "desmatamento",
        "zh": "森林砍伐",
        "example": "O desmatamento ameaça muitas espécies."
      },
      {
        "pt": "emissão",
        "zh": "排放",
        "example": "A empresa reduziu a emissão de gases."
      },
      {
        "pt": "resíduo",
        "zh": "废弃物",
        "example": "O hospital separa os resíduos corretamente."
      },
      {
        "pt": "biodiversidade",
        "zh": "生物多样性",
        "example": "A região possui grande biodiversidade."
      },
      {
        "pt": "escassez",
        "zh": "短缺",
        "example": "A cidade enfrenta escassez de água."
      },
      {
        "pt": "reutilizar",
        "zh": "重复利用",
        "example": "Podemos reutilizar embalagens de vidro."
      },
      {
        "pt": "conservação",
        "zh": "保护；保存",
        "example": "O parque contribui para a conservação da floresta."
      },
      {
        "pt": "aquecimento global",
        "zh": "全球变暖",
        "example": "O aquecimento global altera o clima."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "城市建设",
    "topicPt": "Infraestrutura urbana",
    "words": [
      {
        "pt": "infraestrutura",
        "zh": "基础设施",
        "example": "O bairro precisa de melhor infraestrutura."
      },
      {
        "pt": "calçada",
        "zh": "人行道",
        "example": "A calçada foi reformada recentemente."
      },
      {
        "pt": "iluminação",
        "zh": "照明",
        "example": "A praça ganhou nova iluminação."
      },
      {
        "pt": "saneamento",
        "zh": "卫生基础设施",
        "example": "O saneamento básico evita muitas doenças."
      },
      {
        "pt": "abastecimento",
        "zh": "供应",
        "example": "O abastecimento de água foi interrompido."
      },
      {
        "pt": "obra",
        "zh": "工程；施工",
        "example": "A obra deve terminar em dezembro."
      },
      {
        "pt": "acessibilidade",
        "zh": "无障碍条件",
        "example": "O prédio não oferece boa acessibilidade."
      },
      {
        "pt": "morador",
        "zh": "居民",
        "example": "Os moradores participaram da audiência."
      },
      {
        "pt": "bairro",
        "zh": "街区",
        "example": "Este bairro tem comércio variado."
      },
      {
        "pt": "zona rural",
        "zh": "农村地区",
        "example": "O ônibus também atende a zona rural."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "法律与纠纷",
    "topicPt": "Direitos e conflitos",
    "words": [
      {
        "pt": "regra",
        "zh": "规则",
        "example": "Todos precisam conhecer as regras do serviço."
      },
      {
        "pt": "norma",
        "zh": "规范",
        "example": "A empresa adotou novas normas internas."
      },
      {
        "pt": "proibição",
        "zh": "禁令",
        "example": "Há uma proibição de estacionar nesta rua."
      },
      {
        "pt": "permissão",
        "zh": "许可",
        "example": "Pedimos permissão para usar o espaço."
      },
      {
        "pt": "infração",
        "zh": "违规行为",
        "example": "Estacionar ali é uma infração."
      },
      {
        "pt": "multa",
        "zh": "罚款",
        "example": "O motorista recebeu uma multa."
      },
      {
        "pt": "denúncia",
        "zh": "举报；控告",
        "example": "A denúncia será investigada pelas autoridades."
      },
      {
        "pt": "processo",
        "zh": "程序；诉讼",
        "example": "O processo pode levar vários meses."
      },
      {
        "pt": "testemunha",
        "zh": "证人",
        "example": "A testemunha contou o que havia visto."
      },
      {
        "pt": "justiça",
        "zh": "司法；正义",
        "example": "A família decidiu buscar justiça."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "时间与效率",
    "topicPt": "Organização do tempo",
    "words": [
      {
        "pt": "agenda",
        "zh": "日程表",
        "example": "Anotei o compromisso na agenda."
      },
      {
        "pt": "compromisso",
        "zh": "约定；承诺",
        "example": "Tenho um compromisso depois do almoço."
      },
      {
        "pt": "atraso",
        "zh": "延误；迟到",
        "example": "O atraso prejudicou o planejamento."
      },
      {
        "pt": "antecedência",
        "zh": "提前量",
        "example": "Compre as passagens com antecedência."
      },
      {
        "pt": "frequência",
        "zh": "频率",
        "example": "Ela pratica português com frequência."
      },
      {
        "pt": "rotina",
        "zh": "日常安排",
        "example": "Minha rotina mudou depois das férias."
      },
      {
        "pt": "intervalo",
        "zh": "间隔；休息时间",
        "example": "Fizemos um intervalo de quinze minutos."
      },
      {
        "pt": "aproveitar o tempo",
        "zh": "充分利用时间",
        "example": "Leio no ônibus para aproveitar o tempo."
      },
      {
        "pt": "dar conta de",
        "zh": "能够完成",
        "example": "Hoje não vou dar conta de todas as tarefas."
      },
      {
        "pt": "planejamento",
        "zh": "规划",
        "example": "Um bom planejamento evita atrasos."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "语言学习策略",
    "topicPt": "Estratégias para aprender línguas",
    "words": [
      {
        "pt": "fluência",
        "zh": "流利度",
        "example": "A fluência melhora com prática constante."
      },
      {
        "pt": "pronúncia",
        "zh": "发音",
        "example": "Gravar a própria voz ajuda na pronúncia."
      },
      {
        "pt": "vocabulário",
        "zh": "词汇",
        "example": "Leio notícias para ampliar meu vocabulário."
      },
      {
        "pt": "gramática",
        "zh": "语法",
        "example": "A gramática fica mais clara com exemplos."
      },
      {
        "pt": "expressão",
        "zh": "表达；短语",
        "example": "Aprendi uma expressão nova hoje."
      },
      {
        "pt": "contexto",
        "zh": "语境",
        "example": "Tente entender a palavra pelo contexto."
      },
      {
        "pt": "erro",
        "zh": "错误",
        "example": "Cada erro pode trazer um aprendizado."
      },
      {
        "pt": "corrigir",
        "zh": "纠正",
        "example": "A professora vai corrigir nossas frases."
      },
      {
        "pt": "praticar",
        "zh": "练习",
        "example": "Procuro praticar português todos os dias."
      },
      {
        "pt": "traduzir",
        "zh": "翻译",
        "example": "Não é necessário traduzir cada palavra."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "应对意外",
    "topicPt": "Imprevistos e soluções",
    "words": [
      {
        "pt": "imprevisto",
        "zh": "意外情况",
        "example": "Surgiu um imprevisto durante a viagem."
      },
      {
        "pt": "falha",
        "zh": "故障；失误",
        "example": "Uma falha no sistema atrasou o pagamento."
      },
      {
        "pt": "risco",
        "zh": "风险",
        "example": "Precisamos calcular o risco antes de decidir."
      },
      {
        "pt": "urgência",
        "zh": "紧迫性；紧急事项",
        "example": "O caso deve ser tratado com urgência."
      },
      {
        "pt": "providência",
        "zh": "应对措施",
        "example": "A direção tomou as providências necessárias."
      },
      {
        "pt": "substituir",
        "zh": "替换",
        "example": "Foi preciso substituir a peça danificada."
      },
      {
        "pt": "consertar",
        "zh": "修理",
        "example": "O técnico veio consertar a máquina."
      },
      {
        "pt": "funcionar",
        "zh": "运转；奏效",
        "example": "A nova estratégia começou a funcionar."
      },
      {
        "pt": "prevenir",
        "zh": "预防",
        "example": "A revisão ajuda a prevenir acidentes."
      },
      {
        "pt": "enfrentar",
        "zh": "面对",
        "example": "A empresa terá de enfrentar novos desafios."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "表达程度与数量",
    "topicPt": "Grau e quantidade",
    "words": [
      {
        "pt": "aproximadamente",
        "zh": "大约",
        "example": "A viagem dura aproximadamente três horas."
      },
      {
        "pt": "totalmente",
        "zh": "完全地",
        "example": "Discordo totalmente dessa conclusão."
      },
      {
        "pt": "parcialmente",
        "zh": "部分地",
        "example": "O serviço foi parcialmente restaurado."
      },
      {
        "pt": "principalmente",
        "zh": "主要地",
        "example": "Trabalho principalmente com atendimento ao cliente."
      },
      {
        "pt": "raramente",
        "zh": "很少",
        "example": "Ela raramente chega atrasada."
      },
      {
        "pt": "frequentemente",
        "zh": "经常",
        "example": "Esse problema acontece frequentemente."
      },
      {
        "pt": "a maioria",
        "zh": "大多数",
        "example": "A maioria dos alunos aprovou a mudança."
      },
      {
        "pt": "uma parte de",
        "zh": "一部分",
        "example": "Uma parte do orçamento será usada na reforma."
      },
      {
        "pt": "cerca de",
        "zh": "大约",
        "example": "Cerca de duzentas pessoas participaram."
      },
      {
        "pt": "cada vez mais",
        "zh": "越来越",
        "example": "Cada vez mais pessoas trabalham de casa."
      }
    ]
  },
  {
    "level": "B1",
    "topicZh": "叙述过去经历",
    "topicPt": "Relatar experiências passadas",
    "words": [
      {
        "pt": "de repente",
        "zh": "突然",
        "example": "De repente, todas as luzes se apagaram."
      },
      {
        "pt": "naquela época",
        "zh": "在那个时期",
        "example": "Naquela época, eu morava no interior."
      },
      {
        "pt": "anteriormente",
        "zh": "此前",
        "example": "O prédio era anteriormente uma escola."
      },
      {
        "pt": "logo depois",
        "zh": "随后",
        "example": "Terminamos o almoço e, logo depois, saímos."
      },
      {
        "pt": "desde então",
        "zh": "从那以后",
        "example": "Mudei de emprego e, desde então, estou mais tranquilo."
      },
      {
        "pt": "costumar",
        "zh": "过去常常；通常",
        "example": "Eu costumava visitar meus avós aos domingos."
      },
      {
        "pt": "perceber",
        "zh": "意识到；察觉",
        "example": "Percebi que havia esquecido a carteira."
      },
      {
        "pt": "lembrar-se",
        "zh": "想起；记得",
        "example": "Ela se lembrou do endereço correto."
      },
      {
        "pt": "acontecer",
        "zh": "发生",
        "example": "O acidente aconteceu durante a madrugada."
      },
      {
        "pt": "acabar de",
        "zh": "刚刚做完",
        "example": "Acabei de receber sua mensagem."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "论证与立场",
    "topicPt": "Argumentação e posicionamento",
    "words": [
      {
        "pt": "sustentar",
        "zh": "支持；论证",
        "example": "O autor sustenta que a medida pode reduzir a desigualdade."
      },
      {
        "pt": "contestar",
        "zh": "质疑；反驳",
        "example": "Vários especialistas contestaram os dados apresentados."
      },
      {
        "pt": "ressalva",
        "zh": "保留意见；限制条件",
        "example": "Concordo com a proposta, mas faço uma ressalva importante."
      },
      {
        "pt": "premissa",
        "zh": "前提",
        "example": "A conclusão depende de uma premissa pouco clara."
      },
      {
        "pt": "coerente",
        "zh": "连贯的；一致的",
        "example": "O argumento é coerente com as evidências disponíveis."
      },
      {
        "pt": "contraditório",
        "zh": "矛盾的",
        "example": "O relatório apresenta resultados contraditórios."
      },
      {
        "pt": "perspectiva",
        "zh": "视角；观点",
        "example": "Precisamos analisar o problema de outra perspectiva."
      },
      {
        "pt": "ponderar",
        "zh": "权衡；慎重考虑",
        "example": "É necessário ponderar os benefícios e os riscos."
      },
      {
        "pt": "convincente",
        "zh": "有说服力的",
        "example": "Ela apresentou uma explicação bastante convincente."
      },
      {
        "pt": "refutar",
        "zh": "驳斥",
        "example": "Os novos dados podem refutar essa hipótese."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "工作协商",
    "topicPt": "Negociação no trabalho",
    "words": [
      {
        "pt": "negociar",
        "zh": "协商；谈判",
        "example": "A equipe conseguiu negociar um prazo mais realista."
      },
      {
        "pt": "contrapartida",
        "zh": "交换条件；补偿",
        "example": "A empresa ofereceu flexibilidade como contrapartida."
      },
      {
        "pt": "concessão",
        "zh": "让步；特许",
        "example": "Ambas as partes fizeram uma concessão."
      },
      {
        "pt": "impasse",
        "zh": "僵局",
        "example": "A reunião terminou sem resolver o impasse."
      },
      {
        "pt": "alinhar",
        "zh": "对齐；统一意见",
        "example": "Vamos alinhar as expectativas antes de começar."
      },
      {
        "pt": "viável",
        "zh": "可行的",
        "example": "Precisamos encontrar uma solução financeiramente viável."
      },
      {
        "pt": "orçamento",
        "zh": "预算",
        "example": "O projeto ultrapassou o orçamento inicial."
      },
      {
        "pt": "cronograma",
        "zh": "时间表；进度表",
        "example": "O cronograma será revisto na próxima semana."
      },
      {
        "pt": "demanda",
        "zh": "需求；工作量",
        "example": "A demanda pelo serviço aumentou rapidamente."
      },
      {
        "pt": "consenso",
        "zh": "共识",
        "example": "O grupo chegou a um consenso depois do debate."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "媒体与可信度",
    "topicPt": "Mídia e credibilidade",
    "words": [
      {
        "pt": "fonte",
        "zh": "来源；消息源",
        "example": "A notícia não identifica a fonte da informação."
      },
      {
        "pt": "viés",
        "zh": "偏见；倾向性",
        "example": "Todo texto pode apresentar algum viés."
      },
      {
        "pt": "manchete",
        "zh": "新闻标题",
        "example": "A manchete exagerou o conteúdo da reportagem."
      },
      {
        "pt": "repercussão",
        "zh": "反响；影响",
        "example": "A entrevista teve grande repercussão nas redes sociais."
      },
      {
        "pt": "divulgar",
        "zh": "发布；传播",
        "example": "O instituto divulgará os resultados amanhã."
      },
      {
        "pt": "apurar",
        "zh": "核实；调查",
        "example": "Os jornalistas precisam apurar os fatos."
      },
      {
        "pt": "credibilidade",
        "zh": "可信度",
        "example": "A correção pública ajudou a recuperar a credibilidade."
      },
      {
        "pt": "desinformação",
        "zh": "虚假信息；误导信息",
        "example": "A campanha combate a desinformação científica."
      },
      {
        "pt": "abordagem",
        "zh": "处理方式；切入角度",
        "example": "A reportagem adotou uma abordagem equilibrada."
      },
      {
        "pt": "evidenciar",
        "zh": "表明；凸显",
        "example": "Os números evidenciam uma mudança de comportamento."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "社会与公共议题",
    "topicPt": "Sociedade e questões públicas",
    "words": [
      {
        "pt": "desigualdade",
        "zh": "不平等",
        "example": "A política pretende reduzir a desigualdade regional."
      },
      {
        "pt": "acessibilidade",
        "zh": "无障碍；可及性",
        "example": "O novo projeto melhora a acessibilidade urbana."
      },
      {
        "pt": "moradia",
        "zh": "住房",
        "example": "O custo da moradia aumentou nas grandes cidades."
      },
      {
        "pt": "iniciativa",
        "zh": "倡议；举措",
        "example": "A comunidade lançou uma iniciativa de apoio local."
      },
      {
        "pt": "engajamento",
        "zh": "参与；投入",
        "example": "O projeto depende do engajamento dos moradores."
      },
      {
        "pt": "regulamentação",
        "zh": "监管法规",
        "example": "A regulamentação entrou em vigor este ano."
      },
      {
        "pt": "abrangente",
        "zh": "全面的；广泛的",
        "example": "O plano precisa ser mais abrangente."
      },
      {
        "pt": "vulnerável",
        "zh": "脆弱的；弱势的",
        "example": "A medida protege grupos socialmente vulneráveis."
      },
      {
        "pt": "implementar",
        "zh": "实施",
        "example": "O município começou a implementar o programa."
      },
      {
        "pt": "fiscalizar",
        "zh": "监督；检查",
        "example": "Cabe ao órgão público fiscalizar o serviço."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "变化与趋势",
    "topicPt": "Mudanças e tendências",
    "words": [
      {
        "pt": "tendência",
        "zh": "趋势",
        "example": "A pesquisa confirma uma tendência de longo prazo."
      },
      {
        "pt": "oscilar",
        "zh": "波动",
        "example": "Os preços costumam oscilar ao longo do ano."
      },
      {
        "pt": "gradual",
        "zh": "逐步的",
        "example": "A recuperação foi lenta e gradual."
      },
      {
        "pt": "acentuado",
        "zh": "显著的；剧烈的",
        "example": "Houve um aumento acentuado da procura."
      },
      {
        "pt": "estabilizar",
        "zh": "稳定",
        "example": "A inflação começou a estabilizar no último trimestre."
      },
      {
        "pt": "reverter",
        "zh": "扭转；逆转",
        "example": "Será difícil reverter essa tendência rapidamente."
      },
      {
        "pt": "predominar",
        "zh": "占主导",
        "example": "O trabalho remoto passou a predominar no setor."
      },
      {
        "pt": "cenário",
        "zh": "局面；情景",
        "example": "O relatório apresenta três cenários possíveis."
      },
      {
        "pt": "projeção",
        "zh": "预测；推算",
        "example": "A projeção indica crescimento moderado."
      },
      {
        "pt": "desempenho",
        "zh": "表现；绩效",
        "example": "O desempenho melhorou apesar das dificuldades."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "抽象关系与连接",
    "topicPt": "Relações e conectores abstratos",
    "words": [
      {
        "pt": "contudo",
        "zh": "然而",
        "example": "A proposta é interessante; contudo, custa caro."
      },
      {
        "pt": "portanto",
        "zh": "因此",
        "example": "Os dados são incompletos; portanto, não podemos concluir."
      },
      {
        "pt": "ainda que",
        "zh": "即使；尽管",
        "example": "Ainda que seja complexo, o plano é possível."
      },
      {
        "pt": "na medida em que",
        "zh": "在……程度上；因为",
        "example": "A solução funciona na medida em que todos colaboram."
      },
      {
        "pt": "por conseguinte",
        "zh": "因而；所以",
        "example": "A procura caiu e, por conseguinte, os preços baixaram."
      },
      {
        "pt": "em contrapartida",
        "zh": "另一方面；作为交换",
        "example": "O salário é menor; em contrapartida, há mais flexibilidade."
      },
      {
        "pt": "sobretudo",
        "zh": "尤其",
        "example": "A mudança afeta sobretudo os trabalhadores jovens."
      },
      {
        "pt": "eventualmente",
        "zh": "偶尔；可能最终",
        "example": "O problema poderá eventualmente voltar a ocorrer."
      },
      {
        "pt": "respectivamente",
        "zh": "分别地",
        "example": "Ana e Rui chegaram às oito e às nove, respectivamente."
      },
      {
        "pt": "independentemente",
        "zh": "不论；独立地",
        "example": "Continuaremos independentemente do resultado."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "文化评论",
    "topicPt": "Crítica cultural",
    "words": [
      {
        "pt": "enredo",
        "zh": "情节",
        "example": "O enredo se desenvolve em duas épocas diferentes."
      },
      {
        "pt": "personagem",
        "zh": "人物；角色",
        "example": "A personagem principal enfrenta um dilema moral."
      },
      {
        "pt": "narrativa",
        "zh": "叙事",
        "example": "A narrativa alterna memória e realidade."
      },
      {
        "pt": "interpretação",
        "zh": "解读；表演",
        "example": "A atriz oferece uma interpretação intensa."
      },
      {
        "pt": "marcante",
        "zh": "令人印象深刻的",
        "example": "A fotografia é um dos elementos mais marcantes do filme."
      },
      {
        "pt": "sutil",
        "zh": "细腻的；微妙的",
        "example": "O texto faz uma crítica sutil à sociedade."
      },
      {
        "pt": "retratar",
        "zh": "描绘",
        "example": "O romance procura retratar a vida urbana."
      },
      {
        "pt": "desfecho",
        "zh": "结局",
        "example": "O desfecho surpreendeu grande parte do público."
      },
      {
        "pt": "referência",
        "zh": "参照；典故",
        "example": "A obra contém referências à cultura popular."
      },
      {
        "pt": "apreciação",
        "zh": "欣赏；评价",
        "example": "A apreciação da obra depende do contexto histórico."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "科技与影响",
    "topicPt": "Tecnologia e impacto",
    "words": [
      {
        "pt": "algoritmo",
        "zh": "算法",
        "example": "O algoritmo recomenda conteúdo com base no histórico."
      },
      {
        "pt": "privacidade",
        "zh": "隐私",
        "example": "Os usuários demonstraram preocupação com a privacidade."
      },
      {
        "pt": "automatizar",
        "zh": "自动化",
        "example": "A empresa pretende automatizar tarefas repetitivas."
      },
      {
        "pt": "dispositivo",
        "zh": "设备",
        "example": "O aplicativo funciona em qualquer dispositivo."
      },
      {
        "pt": "inovação",
        "zh": "创新",
        "example": "A inovação transformou o modo de prestar o serviço."
      },
      {
        "pt": "dependência",
        "zh": "依赖",
        "example": "O estudo discute a dependência das redes sociais."
      },
      {
        "pt": "impacto",
        "zh": "影响",
        "example": "Ainda não conhecemos todo o impacto da tecnologia."
      },
      {
        "pt": "ética",
        "zh": "伦理",
        "example": "O uso de dados levanta questões de ética."
      },
      {
        "pt": "monitorar",
        "zh": "监测；跟踪",
        "example": "O sistema permite monitorar o consumo em tempo real."
      },
      {
        "pt": "obsoleto",
        "zh": "过时的；淘汰的",
        "example": "O equipamento ficou obsoleto em poucos anos."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "决策与判断",
    "topicPt": "Tomada de decisão",
    "words": [
      {
        "pt": "criterioso",
        "zh": "审慎的",
        "example": "O parecer foi criterioso."
      },
      {
        "pt": "sensato",
        "zh": "明智的",
        "example": "Ela tomou uma decisão sensata."
      },
      {
        "pt": "precipitado",
        "zh": "仓促的",
        "example": "Evite julgamentos precipitados."
      },
      {
        "pt": "avaliar",
        "zh": "评估",
        "example": "A comissão avaliará os riscos."
      },
      {
        "pt": "priorizar",
        "zh": "优先处理",
        "example": "Precisamos priorizar o essencial."
      },
      {
        "pt": "alternativa",
        "zh": "替代方案",
        "example": "Buscamos uma alternativa sustentável."
      },
      {
        "pt": "consequência",
        "zh": "后果",
        "example": "Ninguém previu essa consequência."
      },
      {
        "pt": "critério",
        "zh": "标准",
        "example": "O preço não é o único critério."
      },
      {
        "pt": "optar por",
        "zh": "选择",
        "example": "Optamos por adiar a mudança."
      },
      {
        "pt": "levar em conta",
        "zh": "考虑到",
        "example": "Leve o contexto em conta."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "冲突管理",
    "topicPt": "Gestão de conflitos",
    "words": [
      {
        "pt": "divergência",
        "zh": "分歧",
        "example": "A divergência foi resolvida."
      },
      {
        "pt": "discordância",
        "zh": "异议",
        "example": "Manifestou sua discordância com respeito."
      },
      {
        "pt": "mediar",
        "zh": "调解",
        "example": "Uma colega mediou o conflito."
      },
      {
        "pt": "conciliar",
        "zh": "调和",
        "example": "É difícil conciliar esses interesses."
      },
      {
        "pt": "ceder",
        "zh": "让步",
        "example": "Nenhum lado quis ceder."
      },
      {
        "pt": "tensão",
        "zh": "紧张关系",
        "example": "A conversa reduziu a tensão."
      },
      {
        "pt": "atrito",
        "zh": "摩擦",
        "example": "Houve atrito entre as equipes."
      },
      {
        "pt": "hostil",
        "zh": "敌对的",
        "example": "O ambiente ficou hostil."
      },
      {
        "pt": "amenizar",
        "zh": "缓和",
        "example": "A medida amenizou o problema."
      },
      {
        "pt": "chegar a um acordo",
        "zh": "达成协议",
        "example": "Finalmente chegaram a um acordo."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "领导与团队",
    "topicPt": "Liderança e equipe",
    "words": [
      {
        "pt": "liderança",
        "zh": "领导力",
        "example": "Sua liderança inspira confiança."
      },
      {
        "pt": "delegar",
        "zh": "委派",
        "example": "O gerente sabe delegar tarefas."
      },
      {
        "pt": "coordenar",
        "zh": "协调",
        "example": "Ela coordena três equipes."
      },
      {
        "pt": "motivar",
        "zh": "激励",
        "example": "O desafio motivou o grupo."
      },
      {
        "pt": "autonomia",
        "zh": "自主权",
        "example": "A função exige autonomia."
      },
      {
        "pt": "colaboração",
        "zh": "协作",
        "example": "A colaboração trouxe bons resultados."
      },
      {
        "pt": "hierarquia",
        "zh": "层级",
        "example": "A empresa reduziu a hierarquia."
      },
      {
        "pt": "subordinado",
        "zh": "下属的",
        "example": "O setor subordinado enviou o relatório."
      },
      {
        "pt": "supervisionar",
        "zh": "监督",
        "example": "Ela supervisiona o atendimento."
      },
      {
        "pt": "assumir a responsabilidade",
        "zh": "承担责任",
        "example": "Ele assumiu a responsabilidade pelo erro."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "招聘与职业",
    "topicPt": "Recrutamento e carreira",
    "words": [
      {
        "pt": "vaga",
        "zh": "职位空缺",
        "example": "A vaga exige experiência."
      },
      {
        "pt": "candidato",
        "zh": "候选人",
        "example": "O candidato demonstrou segurança."
      },
      {
        "pt": "qualificação",
        "zh": "资质",
        "example": "Ela possui a qualificação necessária."
      },
      {
        "pt": "competência",
        "zh": "能力",
        "example": "Comunicação é uma competência valiosa."
      },
      {
        "pt": "trajetória",
        "zh": "职业历程",
        "example": "Sua trajetória chamou atenção."
      },
      {
        "pt": "promoção",
        "zh": "晋升",
        "example": "Ela recebeu uma promoção."
      },
      {
        "pt": "remuneração",
        "zh": "薪酬",
        "example": "A remuneração será negociada."
      },
      {
        "pt": "benefício",
        "zh": "福利",
        "example": "O plano inclui bons benefícios."
      },
      {
        "pt": "selecionar",
        "zh": "选拔",
        "example": "A empresa selecionará dois profissionais."
      },
      {
        "pt": "se candidatar",
        "zh": "应聘",
        "example": "Decidi me candidatar à vaga."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "生产力与时间",
    "topicPt": "Produtividade e tempo",
    "words": [
      {
        "pt": "produtividade",
        "zh": "生产效率",
        "example": "A produtividade aumentou este mês."
      },
      {
        "pt": "sobrecarga",
        "zh": "负担过重",
        "example": "A sobrecarga afetou a equipe."
      },
      {
        "pt": "prazo",
        "zh": "期限",
        "example": "O prazo termina amanhã."
      },
      {
        "pt": "pendência",
        "zh": "待办事项",
        "example": "Resolvi todas as pendências."
      },
      {
        "pt": "agilizar",
        "zh": "加快",
        "example": "O sistema agiliza o atendimento."
      },
      {
        "pt": "otimizar",
        "zh": "优化",
        "example": "Queremos otimizar o processo."
      },
      {
        "pt": "interrupção",
        "zh": "中断",
        "example": "As interrupções prejudicam a concentração."
      },
      {
        "pt": "produtivo",
        "zh": "高效的",
        "example": "A reunião foi produtiva."
      },
      {
        "pt": "administrar o tempo",
        "zh": "管理时间",
        "example": "Aprendi a administrar o tempo."
      },
      {
        "pt": "dar conta de",
        "zh": "应付完成",
        "example": "Não consegui dar conta de tudo."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "会议与汇报",
    "topicPt": "Reuniões e relatórios",
    "words": [
      {
        "pt": "pauta",
        "zh": "议程",
        "example": "A pauta foi enviada ontem."
      },
      {
        "pt": "ata",
        "zh": "会议记录",
        "example": "Todos aprovaram a ata."
      },
      {
        "pt": "levantamento",
        "zh": "调查汇总",
        "example": "O levantamento revelou falhas."
      },
      {
        "pt": "constatação",
        "zh": "调查结论",
        "example": "A principal constatação preocupa a diretoria."
      },
      {
        "pt": "relatar",
        "zh": "汇报",
        "example": "Ela relatou o ocorrido."
      },
      {
        "pt": "resumir",
        "zh": "概括",
        "example": "Você pode resumir a proposta?"
      },
      {
        "pt": "detalhar",
        "zh": "详述",
        "example": "O documento detalha os custos."
      },
      {
        "pt": "anexo",
        "zh": "附件",
        "example": "O orçamento segue em anexo."
      },
      {
        "pt": "participante",
        "zh": "参与者",
        "example": "Cada participante apresentou uma ideia."
      },
      {
        "pt": "ficar definido",
        "zh": "确定下来",
        "example": "Ficou definido que sairemos cedo."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "客户服务",
    "topicPt": "Atendimento ao cliente",
    "words": [
      {
        "pt": "reclamação",
        "zh": "投诉",
        "example": "A empresa recebeu uma reclamação."
      },
      {
        "pt": "reembolso",
        "zh": "退款",
        "example": "Solicitei o reembolso integral."
      },
      {
        "pt": "solicitação",
        "zh": "请求",
        "example": "Sua solicitação está em análise."
      },
      {
        "pt": "insatisfação",
        "zh": "不满",
        "example": "O cliente expressou insatisfação."
      },
      {
        "pt": "atendente",
        "zh": "客服人员",
        "example": "A atendente resolveu a dúvida."
      },
      {
        "pt": "encaminhamento",
        "zh": "转办处理",
        "example": "O caso aguarda encaminhamento."
      },
      {
        "pt": "providenciar",
        "zh": "安排办理",
        "example": "Vamos providenciar a troca."
      },
      {
        "pt": "ressarcir",
        "zh": "赔偿",
        "example": "A loja deverá ressarcir o consumidor."
      },
      {
        "pt": "cortesia",
        "zh": "礼貌周到",
        "example": "Ele tratou todos com cortesia."
      },
      {
        "pt": "entrar em contato",
        "zh": "取得联系",
        "example": "Entraremos em contato amanhã."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "创业与商业",
    "topicPt": "Empreendedorismo e negócios",
    "words": [
      {
        "pt": "empreendimento",
        "zh": "企业项目",
        "example": "O empreendimento gerou empregos."
      },
      {
        "pt": "empreendedor",
        "zh": "创业者",
        "example": "A empreendedora ampliou o negócio."
      },
      {
        "pt": "faturamento",
        "zh": "营业额",
        "example": "O faturamento cresceu bastante."
      },
      {
        "pt": "rentável",
        "zh": "盈利的",
        "example": "O serviço se tornou rentável."
      },
      {
        "pt": "investimento",
        "zh": "投资",
        "example": "O projeto requer investimento inicial."
      },
      {
        "pt": "capital",
        "zh": "资本",
        "example": "A empresa precisa captar capital."
      },
      {
        "pt": "concorrência",
        "zh": "竞争",
        "example": "A concorrência baixou os preços."
      },
      {
        "pt": "fornecedor",
        "zh": "供应商",
        "example": "Trocamos de fornecedor."
      },
      {
        "pt": "clientela",
        "zh": "客户群",
        "example": "O restaurante conquistou nova clientela."
      },
      {
        "pt": "abrir mão de",
        "zh": "放弃",
        "example": "Não abriremos mão da qualidade."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "市场营销",
    "topicPt": "Marketing e consumo",
    "words": [
      {
        "pt": "campanha",
        "zh": "营销活动",
        "example": "A campanha atingiu jovens adultos."
      },
      {
        "pt": "público-alvo",
        "zh": "目标受众",
        "example": "Definimos nosso público-alvo."
      },
      {
        "pt": "posicionamento",
        "zh": "市场定位",
        "example": "A marca mudou de posicionamento."
      },
      {
        "pt": "lançamento",
        "zh": "发布上市",
        "example": "O lançamento ocorrerá em maio."
      },
      {
        "pt": "fidelizar",
        "zh": "培养忠诚客户",
        "example": "O programa ajuda a fidelizar clientes."
      },
      {
        "pt": "divulgação",
        "zh": "宣传",
        "example": "A divulgação começou nas redes."
      },
      {
        "pt": "adesão",
        "zh": "参与接受度",
        "example": "A promoção teve grande adesão."
      },
      {
        "pt": "segmento",
        "zh": "细分市场",
        "example": "Esse segmento cresce rapidamente."
      },
      {
        "pt": "reputação",
        "zh": "声誉",
        "example": "A crise abalou a reputação da marca."
      },
      {
        "pt": "chamar a atenção",
        "zh": "引起注意",
        "example": "O anúncio chamou a atenção."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "个人财务",
    "topicPt": "Finanças pessoais",
    "words": [
      {
        "pt": "endividamento",
        "zh": "负债",
        "example": "O endividamento familiar aumentou."
      },
      {
        "pt": "poupança",
        "zh": "储蓄",
        "example": "Mantemos uma reserva na poupança."
      },
      {
        "pt": "rendimento",
        "zh": "收益收入",
        "example": "O investimento oferece baixo rendimento."
      },
      {
        "pt": "parcela",
        "zh": "分期款",
        "example": "A última parcela vence hoje."
      },
      {
        "pt": "juros",
        "zh": "利息",
        "example": "Os juros subiram novamente."
      },
      {
        "pt": "despesa",
        "zh": "开支",
        "example": "Cortamos despesas desnecessárias."
      },
      {
        "pt": "receita",
        "zh": "收入",
        "example": "A receita mensal varia."
      },
      {
        "pt": "saldo",
        "zh": "余额",
        "example": "Consultei o saldo pelo aplicativo."
      },
      {
        "pt": "quitar",
        "zh": "还清",
        "example": "Ela conseguiu quitar a dívida."
      },
      {
        "pt": "pesar no bolso",
        "zh": "造成经济负担",
        "example": "O reajuste pesou no bolso."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "经济与就业",
    "topicPt": "Economia e emprego",
    "words": [
      {
        "pt": "inflação",
        "zh": "通货膨胀",
        "example": "A inflação reduziu o poder de compra."
      },
      {
        "pt": "desemprego",
        "zh": "失业",
        "example": "O desemprego caiu no trimestre."
      },
      {
        "pt": "recessão",
        "zh": "经济衰退",
        "example": "O país enfrenta uma recessão."
      },
      {
        "pt": "retomada",
        "zh": "复苏",
        "example": "A retomada ainda é lenta."
      },
      {
        "pt": "setor",
        "zh": "行业",
        "example": "O setor industrial contratou mais."
      },
      {
        "pt": "mão de obra",
        "zh": "劳动力",
        "example": "Falta mão de obra qualificada."
      },
      {
        "pt": "informalidade",
        "zh": "非正规就业",
        "example": "A informalidade permanece elevada."
      },
      {
        "pt": "arrecadação",
        "zh": "税收收入",
        "example": "A arrecadação superou a previsão."
      },
      {
        "pt": "incentivo",
        "zh": "激励措施",
        "example": "O governo anunciou novos incentivos."
      },
      {
        "pt": "aquecer",
        "zh": "使活跃",
        "example": "O crédito pode aquecer a economia."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "住房与城市",
    "topicPt": "Habitação e cidade",
    "words": [
      {
        "pt": "aluguel",
        "zh": "租金",
        "example": "O aluguel compromete metade da renda."
      },
      {
        "pt": "condomínio",
        "zh": "公寓物业",
        "example": "O condomínio aprovou a reforma."
      },
      {
        "pt": "infraestrutura",
        "zh": "基础设施",
        "example": "O bairro carece de infraestrutura."
      },
      {
        "pt": "zoneamento",
        "zh": "城市分区",
        "example": "O zoneamento limita prédios altos."
      },
      {
        "pt": "periferia",
        "zh": "城市郊区",
        "example": "A periferia ganhou novas linhas."
      },
      {
        "pt": "ocupação",
        "zh": "占用居住",
        "example": "A ocupação do terreno é irregular."
      },
      {
        "pt": "revitalizar",
        "zh": "振兴改造",
        "example": "A prefeitura pretende revitalizar a praça."
      },
      {
        "pt": "desapropriação",
        "zh": "征收",
        "example": "A obra exigirá desapropriações."
      },
      {
        "pt": "adensamento",
        "zh": "人口建筑密集化",
        "example": "O plano prevê maior adensamento urbano."
      },
      {
        "pt": "qualidade de vida",
        "zh": "生活质量",
        "example": "O parque melhora a qualidade de vida."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "交通与出行",
    "topicPt": "Mobilidade e trânsito",
    "words": [
      {
        "pt": "mobilidade",
        "zh": "出行便利性",
        "example": "A mobilidade urbana exige planejamento."
      },
      {
        "pt": "engarrafamento",
        "zh": "交通堵塞",
        "example": "Enfrentamos um longo engarrafamento."
      },
      {
        "pt": "deslocamento",
        "zh": "通勤移动",
        "example": "Meu deslocamento leva uma hora."
      },
      {
        "pt": "faixa exclusiva",
        "zh": "专用车道",
        "example": "O ônibus usa a faixa exclusiva."
      },
      {
        "pt": "rodízio",
        "zh": "车辆限行轮换",
        "example": "O rodízio reduziu o tráfego."
      },
      {
        "pt": "pedágio",
        "zh": "通行费",
        "example": "O pedágio ficou mais caro."
      },
      {
        "pt": "engarrafar",
        "zh": "堵车",
        "example": "A avenida engarrafou cedo."
      },
      {
        "pt": "desviar",
        "zh": "绕行",
        "example": "Precisamos desviar das obras."
      },
      {
        "pt": "acessível",
        "zh": "交通便利的",
        "example": "O centro é acessível por metrô."
      },
      {
        "pt": "ficar preso no trânsito",
        "zh": "堵在路上",
        "example": "Fiquei preso no trânsito."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "环境保护",
    "topicPt": "Preservação ambiental",
    "words": [
      {
        "pt": "preservação",
        "zh": "保护",
        "example": "A preservação depende de fiscalização."
      },
      {
        "pt": "biodiversidade",
        "zh": "生物多样性",
        "example": "A região abriga grande biodiversidade."
      },
      {
        "pt": "desmatamento",
        "zh": "森林砍伐",
        "example": "O desmatamento ameaça os rios."
      },
      {
        "pt": "reflorestamento",
        "zh": "重新造林",
        "example": "O projeto incentiva o reflorestamento."
      },
      {
        "pt": "ecossistema",
        "zh": "生态系统",
        "example": "O incêndio afetou todo o ecossistema."
      },
      {
        "pt": "espécie ameaçada",
        "zh": "濒危物种",
        "example": "A onça é uma espécie ameaçada."
      },
      {
        "pt": "degradar",
        "zh": "使退化",
        "example": "O lixo degrada o solo."
      },
      {
        "pt": "conservar",
        "zh": "保护保存",
        "example": "Precisamos conservar as nascentes."
      },
      {
        "pt": "compensação ambiental",
        "zh": "环境补偿",
        "example": "A obra prevê compensação ambiental."
      },
      {
        "pt": "causar danos",
        "zh": "造成损害",
        "example": "O vazamento causou danos graves."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "气候与能源",
    "topicPt": "Clima e energia",
    "words": [
      {
        "pt": "aquecimento global",
        "zh": "全球变暖",
        "example": "O aquecimento global intensifica secas."
      },
      {
        "pt": "emissão",
        "zh": "排放",
        "example": "A indústria reduziu suas emissões."
      },
      {
        "pt": "combustível fóssil",
        "zh": "化石燃料",
        "example": "O país ainda depende de combustível fóssil."
      },
      {
        "pt": "energia renovável",
        "zh": "可再生能源",
        "example": "A energia renovável atrai investimentos."
      },
      {
        "pt": "estiagem",
        "zh": "旱季干旱",
        "example": "A estiagem prejudicou as plantações."
      },
      {
        "pt": "enchente",
        "zh": "洪灾",
        "example": "A enchente deixou famílias desalojadas."
      },
      {
        "pt": "mitigar",
        "zh": "减轻",
        "example": "Precisamos mitigar os impactos climáticos."
      },
      {
        "pt": "neutralizar",
        "zh": "抵消中和",
        "example": "A empresa pretende neutralizar suas emissões."
      },
      {
        "pt": "matriz energética",
        "zh": "能源结构",
        "example": "A matriz energética está mais diversificada."
      },
      {
        "pt": "efeito estufa",
        "zh": "温室效应",
        "example": "Certos gases agravam o efeito estufa."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "垃圾与循环经济",
    "topicPt": "Resíduos e economia circular",
    "words": [
      {
        "pt": "resíduo",
        "zh": "废弃物",
        "example": "O hospital separa resíduos perigosos."
      },
      {
        "pt": "reciclagem",
        "zh": "回收利用",
        "example": "A reciclagem reduz o desperdício."
      },
      {
        "pt": "descarte",
        "zh": "处置丢弃",
        "example": "O descarte irregular gera multas."
      },
      {
        "pt": "aterro sanitário",
        "zh": "卫生填埋场",
        "example": "O aterro sanitário está quase cheio."
      },
      {
        "pt": "reutilizar",
        "zh": "重复利用",
        "example": "Podemos reutilizar essas embalagens."
      },
      {
        "pt": "biodegradável",
        "zh": "可生物降解的",
        "example": "Prefira produtos biodegradáveis."
      },
      {
        "pt": "coleta seletiva",
        "zh": "分类收集",
        "example": "A coleta seletiva ocorre às terças."
      },
      {
        "pt": "compostagem",
        "zh": "堆肥",
        "example": "A compostagem transforma restos em adubo."
      },
      {
        "pt": "matéria-prima",
        "zh": "原材料",
        "example": "O vidro volta a ser matéria-prima."
      },
      {
        "pt": "dar destino a",
        "zh": "妥善处理",
        "example": "É preciso dar destino ao óleo usado."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "医疗体系",
    "topicPt": "Sistema de saúde",
    "words": [
      {
        "pt": "atendimento médico",
        "zh": "医疗服务",
        "example": "O atendimento médico foi rápido."
      },
      {
        "pt": "diagnóstico",
        "zh": "诊断",
        "example": "O diagnóstico precoce facilita o tratamento."
      },
      {
        "pt": "tratamento",
        "zh": "治疗",
        "example": "Ela respondeu bem ao tratamento."
      },
      {
        "pt": "encaminhamento médico",
        "zh": "医疗转诊",
        "example": "Recebi um encaminhamento médico."
      },
      {
        "pt": "prontuário",
        "zh": "病历",
        "example": "O prontuário é confidencial."
      },
      {
        "pt": "especialista",
        "zh": "专科医生",
        "example": "O clínico indicou um especialista."
      },
      {
        "pt": "alta médica",
        "zh": "出院许可",
        "example": "Ele recebeu alta médica."
      },
      {
        "pt": "internação",
        "zh": "住院",
        "example": "A internação durou três dias."
      },
      {
        "pt": "prevenção",
        "zh": "预防",
        "example": "A prevenção reduz muitos riscos."
      },
      {
        "pt": "lista de espera",
        "zh": "候诊名单",
        "example": "A lista de espera diminuiu."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "健康习惯",
    "topicPt": "Hábitos de saúde",
    "words": [
      {
        "pt": "sedentarismo",
        "zh": "久坐不动",
        "example": "O sedentarismo aumenta riscos à saúde."
      },
      {
        "pt": "alimentação equilibrada",
        "zh": "均衡饮食",
        "example": "Uma alimentação equilibrada dá energia."
      },
      {
        "pt": "hidratação",
        "zh": "补水",
        "example": "A hidratação é essencial no calor."
      },
      {
        "pt": "bem-estar",
        "zh": "身心健康",
        "example": "O descanso melhora o bem-estar."
      },
      {
        "pt": "condicionamento físico",
        "zh": "体能",
        "example": "Ela recuperou o condicionamento físico."
      },
      {
        "pt": "fortalecer",
        "zh": "增强",
        "example": "Os exercícios fortalecem os músculos."
      },
      {
        "pt": "prejudicial",
        "zh": "有害的",
        "example": "Dormir pouco é prejudicial."
      },
      {
        "pt": "moderação",
        "zh": "适度",
        "example": "Consuma açúcar com moderação."
      },
      {
        "pt": "manter-se ativo",
        "zh": "保持活跃",
        "example": "Ele procura manter-se ativo."
      },
      {
        "pt": "adotar um hábito",
        "zh": "养成习惯",
        "example": "Decidi adotar um hábito mais saudável."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "心理与情绪",
    "topicPt": "Saúde mental e emoções",
    "words": [
      {
        "pt": "ansiedade",
        "zh": "焦虑",
        "example": "A ansiedade afetou seu sono."
      },
      {
        "pt": "autoestima",
        "zh": "自尊",
        "example": "O apoio fortaleceu sua autoestima."
      },
      {
        "pt": "esgotamento",
        "zh": "精疲力竭",
        "example": "O esgotamento exige atenção."
      },
      {
        "pt": "frustração",
        "zh": "挫败感",
        "example": "Ela lidou bem com a frustração."
      },
      {
        "pt": "acolhimento",
        "zh": "关怀接纳",
        "example": "O serviço oferece acolhimento psicológico."
      },
      {
        "pt": "terapia",
        "zh": "心理治疗",
        "example": "A terapia trouxe novas perspectivas."
      },
      {
        "pt": "desabafar",
        "zh": "倾诉",
        "example": "Ele precisava desabafar com alguém."
      },
      {
        "pt": "superar",
        "zh": "克服",
        "example": "Ela superou um período difícil."
      },
      {
        "pt": "lidar com",
        "zh": "应对",
        "example": "Aprendi a lidar com a pressão."
      },
      {
        "pt": "sentir-se à vontade",
        "zh": "感觉自在",
        "example": "Sinto-me à vontade nesse grupo."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "教育政策",
    "topicPt": "Políticas educacionais",
    "words": [
      {
        "pt": "ensino público",
        "zh": "公共教育",
        "example": "O ensino público precisa de recursos."
      },
      {
        "pt": "evasão escolar",
        "zh": "辍学",
        "example": "O programa combate a evasão escolar."
      },
      {
        "pt": "alfabetização",
        "zh": "识字教育",
        "example": "A alfabetização começa na infância."
      },
      {
        "pt": "currículo",
        "zh": "课程体系",
        "example": "O currículo inclui educação financeira."
      },
      {
        "pt": "bolsa de estudo",
        "zh": "奖学金",
        "example": "Ela conseguiu uma bolsa de estudo."
      },
      {
        "pt": "desempenho escolar",
        "zh": "学业表现",
        "example": "O apoio melhorou o desempenho escolar."
      },
      {
        "pt": "capacitação docente",
        "zh": "教师培训",
        "example": "A rede ampliou a capacitação docente."
      },
      {
        "pt": "inclusão escolar",
        "zh": "学校融合教育",
        "example": "A inclusão escolar requer estrutura."
      },
      {
        "pt": "ensino integral",
        "zh": "全日制教育",
        "example": "O município expandiu o ensino integral."
      },
      {
        "pt": "reduzir a defasagem",
        "zh": "缩小学业差距",
        "example": "O reforço ajuda a reduzir a defasagem."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "大学生活",
    "topicPt": "Vida universitária",
    "words": [
      {
        "pt": "graduação",
        "zh": "本科阶段",
        "example": "Ela concluiu a graduação em direito."
      },
      {
        "pt": "pós-graduação",
        "zh": "研究生阶段",
        "example": "Pretendo fazer uma pós-graduação."
      },
      {
        "pt": "orientador",
        "zh": "导师",
        "example": "Meu orientador revisou o projeto."
      },
      {
        "pt": "monografia",
        "zh": "毕业论文",
        "example": "A monografia analisa políticas urbanas."
      },
      {
        "pt": "disciplina optativa",
        "zh": "选修课",
        "example": "Escolhi uma disciplina optativa interessante."
      },
      {
        "pt": "iniciação científica",
        "zh": "本科科研",
        "example": "Ele participa de iniciação científica."
      },
      {
        "pt": "estágio obrigatório",
        "zh": "必修实习",
        "example": "O curso exige estágio obrigatório."
      },
      {
        "pt": "matrícula",
        "zh": "注册选课",
        "example": "A matrícula termina na sexta."
      },
      {
        "pt": "trancar o curso",
        "zh": "休学停课",
        "example": "Ela decidiu trancar o curso."
      },
      {
        "pt": "entregar dentro do prazo",
        "zh": "按时提交",
        "example": "Consegui entregar o artigo dentro do prazo."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "科研基础",
    "topicPt": "Pesquisa e dados",
    "words": [
      {
        "pt": "pesquisa de campo",
        "zh": "实地研究",
        "example": "A pesquisa de campo durou seis meses."
      },
      {
        "pt": "questionário",
        "zh": "问卷",
        "example": "O questionário recebeu mil respostas."
      },
      {
        "pt": "entrevistado",
        "zh": "受访者",
        "example": "Cada entrevistado assinou o termo."
      },
      {
        "pt": "dado qualitativo",
        "zh": "定性数据",
        "example": "A entrevista gera dados qualitativos."
      },
      {
        "pt": "dado quantitativo",
        "zh": "定量数据",
        "example": "O gráfico resume os dados quantitativos."
      },
      {
        "pt": "resultado preliminar",
        "zh": "初步结果",
        "example": "O resultado preliminar parece promissor."
      },
      {
        "pt": "limitação",
        "zh": "局限",
        "example": "O estudo reconhece essa limitação."
      },
      {
        "pt": "validar",
        "zh": "验证",
        "example": "Outro teste poderá validar o método."
      },
      {
        "pt": "comparar",
        "zh": "比较",
        "example": "O artigo compara dois modelos."
      },
      {
        "pt": "chegar à conclusão",
        "zh": "得出结论",
        "example": "Os autores chegaram à mesma conclusão."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "语言学习",
    "topicPt": "Aprendizagem de idiomas",
    "words": [
      {
        "pt": "fluência",
        "zh": "流利度",
        "example": "A prática constante melhora a fluência."
      },
      {
        "pt": "pronúncia",
        "zh": "发音",
        "example": "Ela trabalha a pronúncia diariamente."
      },
      {
        "pt": "vocabulário ativo",
        "zh": "主动词汇",
        "example": "A escrita amplia o vocabulário ativo."
      },
      {
        "pt": "compreensão auditiva",
        "zh": "听力理解",
        "example": "Podcasts treinam a compreensão auditiva."
      },
      {
        "pt": "interferência linguística",
        "zh": "语言干扰",
        "example": "A interferência linguística causa alguns erros."
      },
      {
        "pt": "equivalente",
        "zh": "对应表达",
        "example": "Nem toda palavra tem equivalente exato."
      },
      {
        "pt": "contextualizar",
        "zh": "置于语境",
        "example": "O professor contextualizou a expressão."
      },
      {
        "pt": "assimilar",
        "zh": "吸收掌握",
        "example": "Levei tempo para assimilar a regra."
      },
      {
        "pt": "se expressar",
        "zh": "表达自己",
        "example": "Ela já consegue se expressar bem."
      },
      {
        "pt": "cometer um erro",
        "zh": "犯错误",
        "example": "Não tenha medo de cometer um erro."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "数字素养",
    "topicPt": "Competência digital",
    "words": [
      {
        "pt": "letramento digital",
        "zh": "数字素养",
        "example": "O curso promove letramento digital."
      },
      {
        "pt": "navegador",
        "zh": "浏览器",
        "example": "Atualize o navegador antes de entrar."
      },
      {
        "pt": "armazenamento",
        "zh": "存储",
        "example": "O aparelho tem pouco armazenamento."
      },
      {
        "pt": "backup",
        "zh": "备份",
        "example": "Faço backup toda semana."
      },
      {
        "pt": "sincronizar",
        "zh": "同步",
        "example": "O aplicativo sincroniza os arquivos."
      },
      {
        "pt": "configuração",
        "zh": "设置",
        "example": "Revise a configuração de privacidade."
      },
      {
        "pt": "compatível",
        "zh": "兼容的",
        "example": "O programa é compatível com Android."
      },
      {
        "pt": "falha técnica",
        "zh": "技术故障",
        "example": "Uma falha técnica interrompeu a transmissão."
      },
      {
        "pt": "restaurar",
        "zh": "恢复",
        "example": "Consegui restaurar o documento."
      },
      {
        "pt": "ficar sem conexão",
        "zh": "断网",
        "example": "Ficamos sem conexão durante a aula."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "网络安全",
    "topicPt": "Segurança digital",
    "words": [
      {
        "pt": "senha forte",
        "zh": "强密码",
        "example": "Use uma senha forte e exclusiva."
      },
      {
        "pt": "autenticação",
        "zh": "身份验证",
        "example": "A autenticação exige dois fatores."
      },
      {
        "pt": "fraude virtual",
        "zh": "网络诈骗",
        "example": "A polícia investiga a fraude virtual."
      },
      {
        "pt": "vazamento de dados",
        "zh": "数据泄露",
        "example": "O vazamento de dados afetou clientes."
      },
      {
        "pt": "criptografia",
        "zh": "加密",
        "example": "A criptografia protege as mensagens."
      },
      {
        "pt": "malware",
        "zh": "恶意软件",
        "example": "O antivírus detectou um malware."
      },
      {
        "pt": "suspeito",
        "zh": "可疑的",
        "example": "Não abra links suspeitos."
      },
      {
        "pt": "bloquear",
        "zh": "屏蔽锁定",
        "example": "Bloqueei o remetente desconhecido."
      },
      {
        "pt": "verificar a identidade",
        "zh": "核实身份",
        "example": "Verifique a identidade do solicitante."
      },
      {
        "pt": "cair em um golpe",
        "zh": "上当受骗",
        "example": "Quase caí em um golpe."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "社交媒体",
    "topicPt": "Redes sociais",
    "words": [
      {
        "pt": "perfil",
        "zh": "个人主页",
        "example": "Ela mantém o perfil privado."
      },
      {
        "pt": "seguidor",
        "zh": "关注者",
        "example": "O canal ganhou novos seguidores."
      },
      {
        "pt": "publicação",
        "zh": "帖子发布",
        "example": "A publicação gerou debate."
      },
      {
        "pt": "comentário ofensivo",
        "zh": "冒犯性评论",
        "example": "Denunciei um comentário ofensivo."
      },
      {
        "pt": "conteúdo patrocinado",
        "zh": "赞助内容",
        "example": "O vídeo contém conteúdo patrocinado."
      },
      {
        "pt": "alcance",
        "zh": "触达量",
        "example": "A campanha teve amplo alcance."
      },
      {
        "pt": "viralizar",
        "zh": "走红",
        "example": "O vídeo viralizou em poucas horas."
      },
      {
        "pt": "compartilhar",
        "zh": "分享",
        "example": "Evite compartilhar boatos."
      },
      {
        "pt": "silenciar",
        "zh": "静音屏蔽",
        "example": "Decidi silenciar aquela conta."
      },
      {
        "pt": "exposição excessiva",
        "zh": "过度曝光",
        "example": "A exposição excessiva traz riscos."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "新闻阅读",
    "topicPt": "Leitura de notícias",
    "words": [
      {
        "pt": "reportagem",
        "zh": "新闻报道",
        "example": "A reportagem ouviu moradores."
      },
      {
        "pt": "editorial",
        "zh": "社论",
        "example": "O editorial critica a proposta."
      },
      {
        "pt": "cobertura",
        "zh": "新闻报道范围",
        "example": "A cobertura foi bastante ampla."
      },
      {
        "pt": "declaração",
        "zh": "声明言论",
        "example": "A declaração provocou reações."
      },
      {
        "pt": "porta-voz",
        "zh": "发言人",
        "example": "O porta-voz confirmou a reunião."
      },
      {
        "pt": "imprensa",
        "zh": "新闻界",
        "example": "A imprensa acompanhou o julgamento."
      },
      {
        "pt": "fato verificado",
        "zh": "经核实事实",
        "example": "A matéria distingue opinião de fato verificado."
      },
      {
        "pt": "contexto",
        "zh": "背景语境",
        "example": "A frase perdeu o sentido fora do contexto."
      },
      {
        "pt": "omitir",
        "zh": "省略隐瞒",
        "example": "O texto omitiu informações relevantes."
      },
      {
        "pt": "checar a informação",
        "zh": "核查信息",
        "example": "Sempre cheque a informação antes de publicar."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "广告与说服",
    "topicPt": "Publicidade e persuasão",
    "words": [
      {
        "pt": "slogan",
        "zh": "广告语",
        "example": "O slogan é fácil de lembrar."
      },
      {
        "pt": "persuasivo",
        "zh": "有说服力的",
        "example": "O anúncio usa linguagem persuasiva."
      },
      {
        "pt": "apelo emocional",
        "zh": "情感诉求",
        "example": "A campanha aposta no apelo emocional."
      },
      {
        "pt": "consumidor",
        "zh": "消费者",
        "example": "O consumidor está mais exigente."
      },
      {
        "pt": "promessa exagerada",
        "zh": "夸大承诺",
        "example": "A propaganda faz uma promessa exagerada."
      },
      {
        "pt": "induzir",
        "zh": "诱导",
        "example": "A imagem pode induzir ao erro."
      },
      {
        "pt": "associar",
        "zh": "关联",
        "example": "A marca associa esporte à saúde."
      },
      {
        "pt": "destacar",
        "zh": "突出",
        "example": "O anúncio destaca o preço baixo."
      },
      {
        "pt": "influenciar",
        "zh": "影响",
        "example": "As avaliações influenciam a compra."
      },
      {
        "pt": "tomar uma decisão de compra",
        "zh": "作出购买决定",
        "example": "O cliente demora a tomar uma decisão de compra."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "法律与权利",
    "topicPt": "Direitos e justiça",
    "words": [
      {
        "pt": "direito garantido",
        "zh": "受保障权利",
        "example": "A educação é um direito garantido."
      },
      {
        "pt": "dever legal",
        "zh": "法定义务",
        "example": "A empresa cumpriu seu dever legal."
      },
      {
        "pt": "processo judicial",
        "zh": "司法诉讼",
        "example": "O processo judicial pode demorar."
      },
      {
        "pt": "sentença",
        "zh": "判决",
        "example": "O juiz publicou a sentença."
      },
      {
        "pt": "recurso",
        "zh": "上诉",
        "example": "A defesa apresentou um recurso."
      },
      {
        "pt": "testemunha",
        "zh": "证人",
        "example": "A testemunha confirmou os fatos."
      },
      {
        "pt": "indenização",
        "zh": "赔偿金",
        "example": "A vítima pediu indenização."
      },
      {
        "pt": "infração",
        "zh": "违法行为",
        "example": "A conduta constitui infração."
      },
      {
        "pt": "cumprir a lei",
        "zh": "遵守法律",
        "example": "Todos devem cumprir a lei."
      },
      {
        "pt": "entrar com uma ação",
        "zh": "提起诉讼",
        "example": "Ela decidiu entrar com uma ação."
      }
    ]
  },
  {
    "level": "B2",
    "topicZh": "消费者权益",
    "topicPt": "Direitos do consumidor",
    "words": [
      {
        "pt": "garantia",
        "zh": "保修",
        "example": "O produto ainda está na garantia."
      },
      {
        "pt": "nota fiscal",
        "zh": "发票",
        "example": "Guarde a nota fiscal."
      },
      {
        "pt": "troca",
        "zh": "更换",
        "example": "A loja autorizou a troca."
      },
      {
        "pt": "defeito",
        "zh": "缺陷",
        "example": "O aparelho apresentou um defeito."
      },
      {
        "pt": "cobrança indevida",
        "zh": "错误收费",
        "example": "Contestei uma cobrança indevida."
      },
      {
        "pt": "prazo de entrega",
        "zh": "交货期限",
        "example": "O prazo de entrega não foi cumprido."
      },
      {
        "pt": "cancelamento",
        "zh": "取消",
        "example": "Solicitei o cancelamento do serviço."
      },
      {
        "pt": "reparação",
        "zh": "补偿修复",
        "example": "O cliente tem direito à reparação."
      },
      {
        "pt": "exigir",
        "zh": "要求",
        "example": "Você pode exigir uma solução."
      },
      {
        "pt": "registrar uma queixa",
        "zh": "登记投诉",
        "example": "Ela registrou uma queixa formal."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "学术论述",
    "topicPt": "Discurso acadêmico",
    "words": [
      {
        "pt": "pressuposto",
        "zh": "假设；前提",
        "example": "O estudo parte do pressuposto de que a linguagem é dinâmica."
      },
      {
        "pt": "arcabouço",
        "zh": "框架；体系",
        "example": "A análise utiliza um arcabouço teórico interdisciplinar."
      },
      {
        "pt": "corroborar",
        "zh": "证实；支持",
        "example": "Os resultados corroboram a hipótese inicial."
      },
      {
        "pt": "inferir",
        "zh": "推断",
        "example": "Não é possível inferir causalidade apenas desses dados."
      },
      {
        "pt": "delimitar",
        "zh": "界定；限定",
        "example": "O artigo procura delimitar o conceito com precisão."
      },
      {
        "pt": "metodologia",
        "zh": "方法论",
        "example": "A metodologia combina entrevistas e análise estatística."
      },
      {
        "pt": "amostra",
        "zh": "样本",
        "example": "A amostra não representa toda a população."
      },
      {
        "pt": "variável",
        "zh": "变量",
        "example": "A renda foi considerada uma variável relevante."
      },
      {
        "pt": "lacuna",
        "zh": "空白；缺口",
        "example": "A pesquisa pretende preencher uma lacuna na literatura."
      },
      {
        "pt": "desdobramento",
        "zh": "后续发展；衍生影响",
        "example": "O texto discute os possíveis desdobramentos da decisão."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "正式工作表达",
    "topicPt": "Comunicação profissional formal",
    "words": [
      {
        "pt": "deliberação",
        "zh": "审议；决定",
        "example": "A proposta será submetida à deliberação do conselho."
      },
      {
        "pt": "atribuição",
        "zh": "职责；归属",
        "example": "Essa tarefa não faz parte das minhas atribuições."
      },
      {
        "pt": "diretriz",
        "zh": "指导方针",
        "example": "A nova diretriz entra em vigor no próximo mês."
      },
      {
        "pt": "procedimento",
        "zh": "程序；流程",
        "example": "O procedimento deve ser seguido rigorosamente."
      },
      {
        "pt": "encaminhar",
        "zh": "转交；推进",
        "example": "Encaminharei o relatório à diretoria ainda hoje."
      },
      {
        "pt": "averiguar",
        "zh": "查明；核查",
        "example": "A comissão foi criada para averiguar o ocorrido."
      },
      {
        "pt": "pertinente",
        "zh": "相关的；恰当的",
        "example": "Sua observação é pertinente ao tema em debate."
      },
      {
        "pt": "previamente",
        "zh": "事先",
        "example": "Os participantes devem se inscrever previamente."
      },
      {
        "pt": "vigência",
        "zh": "有效期；生效",
        "example": "O contrato terá vigência de dois anos."
      },
      {
        "pt": "deferir",
        "zh": "批准；准予",
        "example": "A autoridade decidiu deferir o pedido."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "细腻情感与态度",
    "topicPt": "Nuances de emoção e atitude",
    "words": [
      {
        "pt": "apreensão",
        "zh": "忧虑；不安",
        "example": "A mudança foi recebida com certa apreensão."
      },
      {
        "pt": "perplexidade",
        "zh": "困惑；惊讶",
        "example": "A notícia causou perplexidade entre os pesquisadores."
      },
      {
        "pt": "ressentimento",
        "zh": "怨恨；不满",
        "example": "Ele falou sem esconder o ressentimento."
      },
      {
        "pt": "constrangimento",
        "zh": "尴尬；窘迫",
        "example": "A pergunta provocou evidente constrangimento."
      },
      {
        "pt": "complacência",
        "zh": "自满；纵容",
        "example": "Não há espaço para complacência diante dos riscos."
      },
      {
        "pt": "ceticismo",
        "zh": "怀疑态度",
        "example": "A promessa foi recebida com ceticismo."
      },
      {
        "pt": "entusiasmo",
        "zh": "热情",
        "example": "Ela aderiu ao projeto com entusiasmo."
      },
      {
        "pt": "relutância",
        "zh": "不情愿；犹豫",
        "example": "Aceitou a proposta com alguma relutância."
      },
      {
        "pt": "indignação",
        "zh": "愤慨",
        "example": "A decisão gerou indignação pública."
      },
      {
        "pt": "serenidade",
        "zh": "平静；沉着",
        "example": "Ele respondeu às críticas com serenidade."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "政策与治理",
    "topicPt": "Políticas e governança",
    "words": [
      {
        "pt": "governança",
        "zh": "治理",
        "example": "A transparência é essencial para uma boa governança."
      },
      {
        "pt": "prestação de contas",
        "zh": "问责；交代",
        "example": "O relatório reforça a prestação de contas à sociedade."
      },
      {
        "pt": "salvaguarda",
        "zh": "保障措施",
        "example": "A lei estabelece salvaguardas para os dados pessoais."
      },
      {
        "pt": "jurisdição",
        "zh": "司法管辖权",
        "example": "O caso está fora da jurisdição deste tribunal."
      },
      {
        "pt": "prerrogativa",
        "zh": "特权；职权",
        "example": "A nomeação é uma prerrogativa do presidente."
      },
      {
        "pt": "normativo",
        "zh": "规范性的",
        "example": "O novo marco normativo ainda será debatido."
      },
      {
        "pt": "arrecadação",
        "zh": "税收；筹款",
        "example": "A arrecadação municipal superou a previsão."
      },
      {
        "pt": "subsídio",
        "zh": "补贴；资助",
        "example": "O governo reduziu o subsídio ao setor."
      },
      {
        "pt": "licitação",
        "zh": "招标",
        "example": "A obra depende de um novo processo de licitação."
      },
      {
        "pt": "deliberativo",
        "zh": "审议性的；决策性的",
        "example": "O conselho possui caráter deliberativo."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "修辞与语篇",
    "topicPt": "Retórica e discurso",
    "words": [
      {
        "pt": "ambiguidade",
        "zh": "歧义；模棱两可",
        "example": "A ambiguidade da frase permite duas interpretações."
      },
      {
        "pt": "eufemismo",
        "zh": "委婉语",
        "example": "O autor emprega um eufemismo para suavizar a crítica."
      },
      {
        "pt": "ironia",
        "zh": "讽刺；反讽",
        "example": "A ironia só se percebe pelo contexto."
      },
      {
        "pt": "ênfase",
        "zh": "强调",
        "example": "A repetição confere ênfase ao argumento."
      },
      {
        "pt": "alusão",
        "zh": "暗示；影射",
        "example": "O discurso contém uma alusão ao episódio histórico."
      },
      {
        "pt": "retórica",
        "zh": "修辞；说辞",
        "example": "A retórica eleitoral mudou ao longo da campanha."
      },
      {
        "pt": "subentendido",
        "zh": "言外之意",
        "example": "O desacordo ficou subentendido na resposta."
      },
      {
        "pt": "digressão",
        "zh": "离题；插叙",
        "example": "Após uma breve digressão, o autor retomou o tema."
      },
      {
        "pt": "conciso",
        "zh": "简明的",
        "example": "O resumo deve ser claro e conciso."
      },
      {
        "pt": "eloquente",
        "zh": "有说服力的；雄辩的",
        "example": "O silêncio foi uma resposta eloquente."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "经济与结构变化",
    "topicPt": "Economia e transformação estrutural",
    "words": [
      {
        "pt": "conjuntura",
        "zh": "经济形势；局势",
        "example": "A decisão reflete a atual conjuntura econômica."
      },
      {
        "pt": "recessão",
        "zh": "经济衰退",
        "example": "O país enfrentou uma recessão prolongada."
      },
      {
        "pt": "produtividade",
        "zh": "生产率",
        "example": "O investimento elevou a produtividade do setor."
      },
      {
        "pt": "volatilidade",
        "zh": "波动性",
        "example": "A volatilidade afastou investidores estrangeiros."
      },
      {
        "pt": "endividamento",
        "zh": "负债；债务水平",
        "example": "O endividamento das famílias continua elevado."
      },
      {
        "pt": "austeridade",
        "zh": "紧缩政策",
        "example": "As medidas de austeridade geraram controvérsia."
      },
      {
        "pt": "incentivo",
        "zh": "激励；优惠",
        "example": "O programa oferece incentivo à inovação."
      },
      {
        "pt": "disparidade",
        "zh": "差距；悬殊",
        "example": "Persistem grandes disparidades regionais."
      },
      {
        "pt": "estagnação",
        "zh": "停滞",
        "example": "O setor atravessa um período de estagnação."
      },
      {
        "pt": "reestruturação",
        "zh": "重组；结构调整",
        "example": "A empresa anunciou uma ampla reestruturação."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "科学与审慎表达",
    "topicPt": "Ciência e cautela",
    "words": [
      {
        "pt": "plausível",
        "zh": "合理可信的",
        "example": "Essa é uma explicação plausível, mas ainda provisória."
      },
      {
        "pt": "inconclusivo",
        "zh": "尚无定论的",
        "example": "Os resultados permanecem inconclusivos."
      },
      {
        "pt": "robusto",
        "zh": "可靠的；稳健的",
        "example": "O estudo apresenta evidências robustas."
      },
      {
        "pt": "replicável",
        "zh": "可复制的",
        "example": "O experimento precisa ser replicável."
      },
      {
        "pt": "margem de erro",
        "zh": "误差范围",
        "example": "A pesquisa tem margem de erro de dois pontos."
      },
      {
        "pt": "causalidade",
        "zh": "因果关系",
        "example": "Correlação não implica necessariamente causalidade."
      },
      {
        "pt": "viabilidade",
        "zh": "可行性",
        "example": "A equipe avaliará a viabilidade técnica da proposta."
      },
      {
        "pt": "incidência",
        "zh": "发生率",
        "example": "A incidência da doença caiu no último ano."
      },
      {
        "pt": "prevalência",
        "zh": "流行率；普遍程度",
        "example": "O estudo estima a prevalência do problema."
      },
      {
        "pt": "mitigar",
        "zh": "缓解；减轻",
        "example": "Novas medidas podem mitigar os efeitos da crise."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "文学与审美分析",
    "topicPt": "Análise literária e estética",
    "words": [
      {
        "pt": "verossimilhança",
        "zh": "真实性；似真性",
        "example": "A narrativa preserva a verossimilhança dos acontecimentos."
      },
      {
        "pt": "protagonismo",
        "zh": "主导地位；主角作用",
        "example": "A personagem assume maior protagonismo no segundo capítulo."
      },
      {
        "pt": "simbolismo",
        "zh": "象征意义；象征主义",
        "example": "A água possui forte simbolismo no romance."
      },
      {
        "pt": "estética",
        "zh": "美学；审美风格",
        "example": "A estética do filme combina tradição e modernidade."
      },
      {
        "pt": "ruptura",
        "zh": "断裂；突破",
        "example": "A obra representa uma ruptura com o modelo anterior."
      },
      {
        "pt": "legado",
        "zh": "遗产；影响",
        "example": "O ensaio examina o legado cultural do movimento."
      },
      {
        "pt": "apropriação",
        "zh": "挪用；吸收",
        "example": "O debate aborda a apropriação de elementos culturais."
      },
      {
        "pt": "cânone",
        "zh": "经典体系",
        "example": "A autora questiona os limites do cânone literário."
      },
      {
        "pt": "contemplar",
        "zh": "沉思；涵盖",
        "example": "A exposição convida o público a contemplar o espaço."
      },
      {
        "pt": "transcender",
        "zh": "超越",
        "example": "A obra consegue transcender seu contexto histórico."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "研究设计与分析",
    "topicPt": "Desenho e análise de pesquisa",
    "words": [
      {
        "pt": "abordagem",
        "zh": "研究方法；处理方式",
        "example": "A equipe adotou uma abordagem qualitativa para compreender o fenômeno."
      },
      {
        "pt": "levantamento",
        "zh": "调查；资料收集",
        "example": "O levantamento reuniu respostas de participantes de cinco regiões."
      },
      {
        "pt": "recorte",
        "zh": "研究范围；切入角度",
        "example": "O recorte temporal permite comparar períodos de profunda transformação."
      },
      {
        "pt": "hipótese",
        "zh": "假说；假设",
        "example": "A hipótese será testada com dados de diferentes fontes."
      },
      {
        "pt": "indicador",
        "zh": "指标",
        "example": "O índice de evasão constitui um indicador relevante da desigualdade."
      },
      {
        "pt": "mensuração",
        "zh": "测量；计量",
        "example": "A mensuração do impacto exige critérios transparentes e consistentes."
      },
      {
        "pt": "viés",
        "zh": "偏差；偏见",
        "example": "O método reduz o viés introduzido pela seleção dos participantes."
      },
      {
        "pt": "contrastar",
        "zh": "对照；比较差异",
        "example": "O artigo contrasta os resultados nacionais com experiências internacionais."
      },
      {
        "pt": "sistematizar",
        "zh": "系统整理",
        "example": "Os autores procuram sistematizar décadas de produção científica."
      },
      {
        "pt": "extrapolar",
        "zh": "外推；超出范围推断",
        "example": "Não convém extrapolar conclusões obtidas em uma população tão específica."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "论证与观点交锋",
    "topicPt": "Argumentação e confronto de ideias",
    "words": [
      {
        "pt": "premissa",
        "zh": "前提",
        "example": "A conclusão perde força quando uma de suas premissas é contestada."
      },
      {
        "pt": "ponderar",
        "zh": "权衡；慎重考虑",
        "example": "Antes de decidir, precisamos ponderar os custos sociais da medida."
      },
      {
        "pt": "contrapor",
        "zh": "反驳；使对立",
        "example": "A pesquisadora contrapôs dados concretos às alegações do relatório."
      },
      {
        "pt": "ressalva",
        "zh": "保留意见；例外说明",
        "example": "Concordo com a proposta, mas faço uma ressalva quanto ao prazo."
      },
      {
        "pt": "contundente",
        "zh": "有力的；尖锐的",
        "example": "O editorial apresentou uma crítica contundente à falta de transparência."
      },
      {
        "pt": "refutar",
        "zh": "驳斥；反证",
        "example": "Novas evidências podem refutar a explicação inicialmente aceita."
      },
      {
        "pt": "sustentar",
        "zh": "论证支持；维持",
        "example": "A autora sustenta sua tese com documentos históricos inéditos."
      },
      {
        "pt": "contradição",
        "zh": "矛盾",
        "example": "Há uma contradição evidente entre o discurso e a prática institucional."
      },
      {
        "pt": "consenso",
        "zh": "共识",
        "example": "O grupo alcançou consenso apenas sobre os objetivos mais urgentes."
      },
      {
        "pt": "dissidência",
        "zh": "异议；持不同意见者",
        "example": "A dissidência interna revelou divergências antes ocultas no partido."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "新闻与公共传播",
    "topicPt": "Jornalismo e comunicação pública",
    "words": [
      {
        "pt": "apuração",
        "zh": "新闻核实；调查",
        "example": "A apuração confirmou que os documentos eram autênticos."
      },
      {
        "pt": "manchete",
        "zh": "新闻标题；头条",
        "example": "A manchete simplificou excessivamente uma questão bastante complexa."
      },
      {
        "pt": "repercussão",
        "zh": "反响；影响",
        "example": "A entrevista teve ampla repercussão nas redes sociais."
      },
      {
        "pt": "fonte",
        "zh": "消息来源；资料来源",
        "example": "O repórter preservou a identidade da fonte por razões de segurança."
      },
      {
        "pt": "veicular",
        "zh": "传播；刊播",
        "example": "O canal decidiu não veicular imagens que expusessem as vítimas."
      },
      {
        "pt": "desmentir",
        "zh": "辟谣；否认",
        "example": "A instituição publicou uma nota para desmentir a informação falsa."
      },
      {
        "pt": "credibilidade",
        "zh": "可信度",
        "example": "Erros sucessivos comprometeram a credibilidade do veículo."
      },
      {
        "pt": "editorial",
        "zh": "社论；编辑方针",
        "example": "O editorial defendeu maior controle sobre os gastos públicos."
      },
      {
        "pt": "cobertura",
        "zh": "新闻报道",
        "example": "A cobertura priorizou os efeitos da enchente nas comunidades rurais."
      },
      {
        "pt": "omissão",
        "zh": "遗漏；隐瞒；不作为",
        "example": "A omissão de dados essenciais alterou a interpretação da notícia."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "气候与生态转型",
    "topicPt": "Clima e transição ecológica",
    "words": [
      {
        "pt": "descarbonização",
        "zh": "脱碳",
        "example": "A descarbonização da indústria depende de investimento e inovação."
      },
      {
        "pt": "biodiversidade",
        "zh": "生物多样性",
        "example": "O desmatamento ameaça a biodiversidade de ecossistemas ainda pouco estudados."
      },
      {
        "pt": "resiliência",
        "zh": "韧性；恢复能力",
        "example": "O projeto busca aumentar a resiliência das cidades a eventos extremos."
      },
      {
        "pt": "degradação",
        "zh": "退化；恶化",
        "example": "A degradação do solo compromete a produção agrícola futura."
      },
      {
        "pt": "escassez",
        "zh": "短缺；稀缺",
        "example": "A região enfrenta crescente escassez de água durante o verão."
      },
      {
        "pt": "emissão",
        "zh": "排放；发射",
        "example": "A meta prevê reduzir a emissão de gases até 2035."
      },
      {
        "pt": "reflorestamento",
        "zh": "重新造林",
        "example": "O reflorestamento recuperou parte da mata ciliar degradada."
      },
      {
        "pt": "sustentabilidade",
        "zh": "可持续性",
        "example": "A sustentabilidade financeira também condiciona a continuidade do programa."
      },
      {
        "pt": "compensação ambiental",
        "zh": "环境补偿",
        "example": "A licença exige compensação ambiental pelos danos causados pela obra."
      },
      {
        "pt": "manejo",
        "zh": "管理；养护",
        "example": "O manejo adequado preserva a floresta e gera renda local."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "城市规划与住房",
    "topicPt": "Planejamento urbano e moradia",
    "words": [
      {
        "pt": "adensamento",
        "zh": "城市密度增加",
        "example": "O adensamento precisa vir acompanhado de transporte e áreas verdes."
      },
      {
        "pt": "mobilidade",
        "zh": "出行；流动性",
        "example": "A falta de integração prejudica a mobilidade urbana."
      },
      {
        "pt": "zoneamento",
        "zh": "土地分区规划",
        "example": "O novo zoneamento permite edifícios mais altos junto às estações."
      },
      {
        "pt": "gentrificação",
        "zh": "绅士化；高档化改造",
        "example": "A valorização do bairro acelerou um processo de gentrificação."
      },
      {
        "pt": "infraestrutura",
        "zh": "基础设施",
        "example": "O crescimento populacional pressiona a infraestrutura de saneamento."
      },
      {
        "pt": "periferia",
        "zh": "城市边缘地区",
        "example": "Muitos trabalhadores passam horas no trajeto entre a periferia e o centro."
      },
      {
        "pt": "ocupação",
        "zh": "占用；聚居区",
        "example": "A prefeitura iniciou a regularização da ocupação próxima ao rio."
      },
      {
        "pt": "habitacional",
        "zh": "住房的",
        "example": "O déficit habitacional exige políticas articuladas de longo prazo."
      },
      {
        "pt": "revitalização",
        "zh": "复兴；活化改造",
        "example": "A revitalização do centro preservou edifícios de valor histórico."
      },
      {
        "pt": "segregação espacial",
        "zh": "空间隔离",
        "example": "A segregação espacial limita o acesso a serviços e oportunidades."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "教育与学习科学",
    "topicPt": "Educação e aprendizagem",
    "words": [
      {
        "pt": "letramento",
        "zh": "读写素养",
        "example": "O projeto promove o letramento científico desde os primeiros anos escolares."
      },
      {
        "pt": "evasão",
        "zh": "辍学；退出",
        "example": "A necessidade de trabalhar contribui para a evasão escolar."
      },
      {
        "pt": "currículo",
        "zh": "课程体系；履历",
        "example": "O currículo passou a incluir competências digitais e socioemocionais."
      },
      {
        "pt": "avaliação formativa",
        "zh": "形成性评价",
        "example": "A avaliação formativa orienta o professor durante o processo de aprendizagem."
      },
      {
        "pt": "mediação",
        "zh": "调解；教学引导",
        "example": "A mediação docente ajudou os alunos a formular perguntas melhores."
      },
      {
        "pt": "interdisciplinar",
        "zh": "跨学科的",
        "example": "A atividade interdisciplinar reuniu história, ciência e produção textual."
      },
      {
        "pt": "defasagem",
        "zh": "落后；差距",
        "example": "A pandemia ampliou a defasagem de aprendizagem entre os estudantes."
      },
      {
        "pt": "protagonismo estudantil",
        "zh": "学生主体性",
        "example": "O projeto estimula o protagonismo estudantil na solução de problemas locais."
      },
      {
        "pt": "repertório",
        "zh": "知识储备；素材库",
        "example": "A leitura frequente amplia o repertório linguístico e cultural."
      },
      {
        "pt": "assimilar",
        "zh": "理解吸收",
        "example": "Os alunos precisam de tempo para assimilar conceitos abstratos."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "公共卫生与医疗",
    "topicPt": "Saúde pública e medicina",
    "words": [
      {
        "pt": "rastreamento",
        "zh": "筛查；追踪",
        "example": "O rastreamento precoce aumenta as chances de tratamento eficaz."
      },
      {
        "pt": "diagnóstico",
        "zh": "诊断",
        "example": "O diagnóstico depende da análise conjunta dos sintomas e exames."
      },
      {
        "pt": "adesão",
        "zh": "依从；加入",
        "example": "A comunicação clara melhora a adesão dos pacientes ao tratamento."
      },
      {
        "pt": "comorbidade",
        "zh": "合并症",
        "example": "A presença de comorbidades exige acompanhamento mais cuidadoso."
      },
      {
        "pt": "surto",
        "zh": "疫情暴发；突然发生",
        "example": "As autoridades investigam um surto de origem ainda desconhecida."
      },
      {
        "pt": "imunização",
        "zh": "免疫接种",
        "example": "A campanha ampliou a cobertura de imunização infantil."
      },
      {
        "pt": "prognóstico",
        "zh": "预后；预测",
        "example": "O prognóstico é favorável quando a doença é detectada cedo."
      },
      {
        "pt": "encaminhamento",
        "zh": "转诊；转交",
        "example": "O médico fez o encaminhamento para um especialista."
      },
      {
        "pt": "vulnerabilidade",
        "zh": "脆弱性；易受伤害状态",
        "example": "O calor extremo agrava a vulnerabilidade de idosos que vivem sozinhos."
      },
      {
        "pt": "prevenção",
        "zh": "预防",
        "example": "A prevenção requer informação acessível e atendimento próximo da comunidade."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "心理与认知",
    "topicPt": "Psicologia e cognição",
    "words": [
      {
        "pt": "percepção",
        "zh": "感知；看法",
        "example": "A percepção de risco varia conforme a experiência de cada pessoa."
      },
      {
        "pt": "cognição",
        "zh": "认知",
        "example": "O sono exerce influência direta sobre a cognição e a memória."
      },
      {
        "pt": "autorregulação",
        "zh": "自我调节",
        "example": "A autorregulação ajuda a manter o foco em tarefas prolongadas."
      },
      {
        "pt": "sobrecarga",
        "zh": "过载；负担过重",
        "example": "A sobrecarga de informações dificulta decisões refletidas."
      },
      {
        "pt": "frustração",
        "zh": "挫折感",
        "example": "Ela aprendeu a lidar com a frustração sem abandonar o projeto."
      },
      {
        "pt": "vínculo",
        "zh": "纽带；关系",
        "example": "A escuta atenta fortaleceu o vínculo entre terapeuta e paciente."
      },
      {
        "pt": "predisposição",
        "zh": "倾向；易感性",
        "example": "Fatores genéticos podem indicar predisposição, não um destino inevitável."
      },
      {
        "pt": "discernimento",
        "zh": "辨别力；判断力",
        "example": "A experiência lhe deu discernimento para avaliar situações ambíguas."
      },
      {
        "pt": "inibição",
        "zh": "抑制；拘谨",
        "example": "A ansiedade provocou inibição durante as apresentações públicas."
      },
      {
        "pt": "bem-estar",
        "zh": "幸福感；健康状态",
        "example": "A empresa adotou medidas voltadas ao bem-estar dos funcionários."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "社会结构与不平等",
    "topicPt": "Estrutura social e desigualdade",
    "words": [
      {
        "pt": "mobilidade social",
        "zh": "社会流动",
        "example": "O acesso à educação pode favorecer a mobilidade social entre gerações."
      },
      {
        "pt": "marginalização",
        "zh": "边缘化",
        "example": "A falta de documentos intensifica a marginalização dessa população."
      },
      {
        "pt": "estigma",
        "zh": "污名",
        "example": "Campanhas educativas ajudam a combater o estigma associado à doença."
      },
      {
        "pt": "equidade",
        "zh": "公平；公正",
        "example": "Tratar todos igualmente nem sempre garante equidade."
      },
      {
        "pt": "vulnerável",
        "zh": "脆弱的；易受伤害的",
        "example": "A crise atingiu com maior intensidade os grupos mais vulneráveis."
      },
      {
        "pt": "ascensão",
        "zh": "上升；晋升",
        "example": "A ascensão profissional não eliminou as barreiras sociais que ela enfrentava."
      },
      {
        "pt": "exclusão",
        "zh": "排斥；排除",
        "example": "A exclusão digital restringe o acesso a direitos básicos."
      },
      {
        "pt": "coesão social",
        "zh": "社会凝聚力",
        "example": "A confiança nas instituições contribui para a coesão social."
      },
      {
        "pt": "representatividade",
        "zh": "代表性",
        "example": "O conselho busca ampliar a representatividade de grupos minoritários."
      },
      {
        "pt": "assistencialismo",
        "zh": "救济主义",
        "example": "A política foi criticada por limitar-se ao assistencialismo."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "数字社会与信息",
    "topicPt": "Sociedade digital e informação",
    "words": [
      {
        "pt": "desinformação",
        "zh": "虚假信息；错误信息传播",
        "example": "A desinformação se espalha rapidamente em momentos de incerteza."
      },
      {
        "pt": "rastreabilidade",
        "zh": "可追溯性",
        "example": "A plataforma promete maior rastreabilidade no uso dos dados."
      },
      {
        "pt": "criptografia",
        "zh": "加密技术",
        "example": "A criptografia protege mensagens contra acessos não autorizados."
      },
      {
        "pt": "interoperabilidade",
        "zh": "互操作性",
        "example": "A interoperabilidade permite que sistemas distintos troquem informações."
      },
      {
        "pt": "moderação",
        "zh": "内容审核；适度",
        "example": "A moderação de conteúdo exige regras públicas e coerentes."
      },
      {
        "pt": "vazamento",
        "zh": "泄露；渗漏",
        "example": "A empresa notificou os usuários após o vazamento de dados."
      },
      {
        "pt": "autenticidade",
        "zh": "真实性",
        "example": "Especialistas questionaram a autenticidade do vídeo divulgado."
      },
      {
        "pt": "viralizar",
        "zh": "在网络走红；迅速传播",
        "example": "O trecho viralizou antes que seu contexto fosse esclarecido."
      },
      {
        "pt": "curadoria",
        "zh": "内容筛选与策划",
        "example": "A curadoria humana complementa os sistemas automáticos de recomendação."
      },
      {
        "pt": "letramento digital",
        "zh": "数字素养",
        "example": "O letramento digital inclui avaliar criticamente as fontes consultadas."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "商业战略与管理",
    "topicPt": "Estratégia e gestão",
    "words": [
      {
        "pt": "posicionamento",
        "zh": "市场定位；立场",
        "example": "A marca reviu seu posicionamento diante das mudanças no consumo."
      },
      {
        "pt": "diferencial",
        "zh": "差异化优势",
        "example": "O atendimento personalizado tornou-se o principal diferencial da empresa."
      },
      {
        "pt": "escalabilidade",
        "zh": "可扩展性",
        "example": "A escalabilidade do serviço depende de processos bem definidos."
      },
      {
        "pt": "rentabilidade",
        "zh": "盈利能力",
        "example": "O conselho avaliou a rentabilidade de cada unidade de negócio."
      },
      {
        "pt": "terceirização",
        "zh": "外包",
        "example": "A terceirização reduziu custos, mas dificultou o controle de qualidade."
      },
      {
        "pt": "conformidade",
        "zh": "合规",
        "example": "Uma auditoria verificará a conformidade das práticas internas."
      },
      {
        "pt": "alocar",
        "zh": "配置；分配",
        "example": "A diretoria decidiu alocar mais recursos à pesquisa."
      },
      {
        "pt": "prospectar",
        "zh": "开发潜在客户；勘探",
        "example": "A equipe viajou para prospectar novos mercados na região."
      },
      {
        "pt": "faturamento",
        "zh": "营业额；开票",
        "example": "O faturamento cresceu, embora a margem tenha diminuído."
      },
      {
        "pt": "reputação",
        "zh": "声誉",
        "example": "A resposta rápida evitou danos maiores à reputação da organização."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "谈判与外交",
    "topicPt": "Negociação e diplomacia",
    "words": [
      {
        "pt": "concessão",
        "zh": "让步；特许权",
        "example": "Cada lado terá de fazer alguma concessão para viabilizar o acordo."
      },
      {
        "pt": "impasse",
        "zh": "僵局",
        "example": "As negociações chegaram a um impasse quanto ao financiamento."
      },
      {
        "pt": "intermediar",
        "zh": "居中协调；调解",
        "example": "Uma comissão independente foi chamada para intermediar o conflito."
      },
      {
        "pt": "contrapartida",
        "zh": "对应条件；回报",
        "example": "O município cedeu o terreno em contrapartida à criação de empregos."
      },
      {
        "pt": "retaliação",
        "zh": "报复；反制",
        "example": "A tarifa foi interpretada como retaliação à medida anterior."
      },
      {
        "pt": "trégua",
        "zh": "停战；暂时休止",
        "example": "As partes concordaram com uma trégua de duas semanas."
      },
      {
        "pt": "bilateral",
        "zh": "双边的",
        "example": "Os governos retomaram o diálogo bilateral após meses de tensão."
      },
      {
        "pt": "ratificação",
        "zh": "批准；确认",
        "example": "O tratado só terá efeito após a ratificação parlamentar."
      },
      {
        "pt": "articulação",
        "zh": "协调联动；组织",
        "example": "A articulação entre os ministérios acelerou a resposta à crise."
      },
      {
        "pt": "conciliar",
        "zh": "调和；兼顾",
        "example": "O texto final procura conciliar interesses econômicos e ambientais."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "法律与公民权利",
    "topicPt": "Direito e cidadania",
    "words": [
      {
        "pt": "legitimidade",
        "zh": "合法性；正当性",
        "example": "A consulta pública reforçou a legitimidade da decisão."
      },
      {
        "pt": "inconstitucional",
        "zh": "违宪的",
        "example": "O tribunal considerou inconstitucional parte da nova lei."
      },
      {
        "pt": "indenização",
        "zh": "赔偿",
        "example": "A Justiça determinou o pagamento de indenização às famílias."
      },
      {
        "pt": "prescrição",
        "zh": "诉讼时效；处方",
        "example": "O processo foi encerrado porque ocorreu a prescrição do crime."
      },
      {
        "pt": "recurso",
        "zh": "上诉；资源；手段",
        "example": "A defesa apresentou recurso contra a decisão de primeira instância."
      },
      {
        "pt": "sentença",
        "zh": "判决；句子",
        "example": "A sentença reconheceu a responsabilidade solidária das empresas."
      },
      {
        "pt": "ônus da prova",
        "zh": "举证责任",
        "example": "Cabe ao autor o ônus da prova quanto ao dano alegado."
      },
      {
        "pt": "garantia constitucional",
        "zh": "宪法保障",
        "example": "A liberdade de expressão é uma garantia constitucional, mas não absoluta."
      },
      {
        "pt": "reivindicar",
        "zh": "要求；争取",
        "example": "Os moradores reivindicam participação efetiva nas decisões locais."
      },
      {
        "pt": "arbitrário",
        "zh": "武断的；任意的",
        "example": "O juiz entendeu que o bloqueio havia sido arbitrário."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "文化、身份与归属",
    "topicPt": "Cultura, identidade e pertencimento",
    "words": [
      {
        "pt": "pertencimento",
        "zh": "归属感",
        "example": "A festa fortalece o sentimento de pertencimento à comunidade."
      },
      {
        "pt": "ancestralidade",
        "zh": "祖源；祖先传承",
        "example": "A artista investiga sua ancestralidade por meio da fotografia."
      },
      {
        "pt": "hibridismo",
        "zh": "混合性；杂糅",
        "example": "O álbum revela um hibridismo entre ritmos locais e eletrônicos."
      },
      {
        "pt": "patrimônio imaterial",
        "zh": "非物质文化遗产",
        "example": "A tradição foi reconhecida como patrimônio imaterial do estado."
      },
      {
        "pt": "cosmovisão",
        "zh": "世界观",
        "example": "O relato expressa uma cosmovisão profundamente ligada ao território."
      },
      {
        "pt": "alteridade",
        "zh": "他者性",
        "example": "A literatura pode ampliar nossa compreensão da alteridade."
      },
      {
        "pt": "assimilação cultural",
        "zh": "文化同化",
        "example": "A escola incentivava a assimilação cultural e reprimia línguas indígenas."
      },
      {
        "pt": "memória coletiva",
        "zh": "集体记忆",
        "example": "O monumento ocupa um lugar controverso na memória coletiva."
      },
      {
        "pt": "miscigenação",
        "zh": "族群融合；混血",
        "example": "O conceito de miscigenação foi interpretado de maneiras conflitantes."
      },
      {
        "pt": "deslocamento",
        "zh": "迁移；位移",
        "example": "O romance aborda o deslocamento e a busca por identidade."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "语言、语域与表达",
    "topicPt": "Linguagem, registro e expressão",
    "words": [
      {
        "pt": "coloquial",
        "zh": "口语的",
        "example": "A tradução manteve o tom coloquial dos diálogos."
      },
      {
        "pt": "formalidade",
        "zh": "正式程度；手续",
        "example": "O grau de formalidade varia conforme a relação entre os participantes."
      },
      {
        "pt": "regionalismo",
        "zh": "地方用语；地域主义",
        "example": "O conto emprega regionalismos sem dificultar a compreensão."
      },
      {
        "pt": "adequação",
        "zh": "适切性；调整",
        "example": "A adequação do registro é essencial em uma entrevista de emprego."
      },
      {
        "pt": "coesão",
        "zh": "衔接；凝聚力",
        "example": "Os conectores melhoraram a coesão entre os parágrafos."
      },
      {
        "pt": "coerência",
        "zh": "连贯性；一致性",
        "example": "A conclusão deve manter coerência com os argumentos anteriores."
      },
      {
        "pt": "paráfrase",
        "zh": "改述；释义",
        "example": "A paráfrase preserva a ideia original com outra formulação."
      },
      {
        "pt": "neologismo",
        "zh": "新词",
        "example": "O neologismo surgiu para nomear uma prática recente."
      },
      {
        "pt": "jargão",
        "zh": "行话；术语",
        "example": "O excesso de jargão torna o relatório inacessível ao público."
      },
      {
        "pt": "enunciação",
        "zh": "言语表达行为；话语呈现",
        "example": "O contexto de enunciação altera o sentido da frase."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "伦理与责任",
    "topicPt": "Ética e responsabilidade",
    "words": [
      {
        "pt": "dilema",
        "zh": "两难困境",
        "example": "O uso da tecnologia criou um dilema entre eficiência e privacidade."
      },
      {
        "pt": "imparcialidade",
        "zh": "公正；不偏不倚",
        "example": "A comissão deve demonstrar imparcialidade durante toda a investigação."
      },
      {
        "pt": "integridade",
        "zh": "正直；完整性",
        "example": "A integridade científica exige registrar também os resultados negativos."
      },
      {
        "pt": "consentimento",
        "zh": "同意；知情同意",
        "example": "Nenhuma imagem poderá ser publicada sem o consentimento dos participantes."
      },
      {
        "pt": "responsabilização",
        "zh": "追责；问责",
        "example": "As vítimas cobram mecanismos efetivos de responsabilização."
      },
      {
        "pt": "conflito de interesses",
        "zh": "利益冲突",
        "example": "O pesquisador declarou possível conflito de interesses antes da palestra."
      },
      {
        "pt": "sigilo",
        "zh": "保密；秘密",
        "example": "O profissional tem o dever de preservar o sigilo das informações."
      },
      {
        "pt": "transparência",
        "zh": "透明度",
        "example": "A transparência fortalece a confiança nas decisões públicas."
      },
      {
        "pt": "negligência",
        "zh": "疏忽；玩忽职守",
        "example": "A investigação apontou negligência na manutenção dos equipamentos."
      },
      {
        "pt": "idoneidade",
        "zh": "诚信可靠；胜任资格",
        "example": "A nomeação exige experiência e comprovada idoneidade profissional."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "历史、档案与记忆",
    "topicPt": "História, arquivo e memória",
    "words": [
      {
        "pt": "acervo",
        "zh": "馆藏；资料收藏",
        "example": "O museu digitalizou grande parte de seu acervo fotográfico."
      },
      {
        "pt": "testemunho",
        "zh": "证词；见证",
        "example": "O documentário reúne testemunhos de antigos moradores da região."
      },
      {
        "pt": "reconstituição",
        "zh": "重建；还原",
        "example": "A reconstituição dos fatos se baseou em cartas e registros oficiais."
      },
      {
        "pt": "marco histórico",
        "zh": "历史里程碑",
        "example": "A promulgação da lei representou um marco histórico para o país."
      },
      {
        "pt": "vestígio",
        "zh": "遗迹；痕迹",
        "example": "Arqueólogos encontraram vestígios de uma ocupação muito antiga."
      },
      {
        "pt": "narrativa oficial",
        "zh": "官方叙事",
        "example": "Novos estudos questionam a narrativa oficial sobre o episódio."
      },
      {
        "pt": "preservação",
        "zh": "保护；保存",
        "example": "A umidade representa um risco à preservação dos documentos."
      },
      {
        "pt": "efeméride",
        "zh": "纪念日；重大事件周年",
        "example": "A efeméride motivou debates sobre a memória nacional."
      },
      {
        "pt": "cronologia",
        "zh": "年代顺序；年表",
        "example": "A exposição apresenta uma cronologia detalhada do movimento."
      },
      {
        "pt": "revisionista",
        "zh": "修正主义的；重新审视的",
        "example": "A leitura revisionista provocou forte reação entre os historiadores."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "艺术评论与创作",
    "topicPt": "Crítica e criação artística",
    "words": [
      {
        "pt": "composição",
        "zh": "构图；创作；组成",
        "example": "A composição conduz o olhar do observador para o centro da tela."
      },
      {
        "pt": "plasticidade",
        "zh": "造型表现力；可塑性",
        "example": "A escultura impressiona pela plasticidade das formas."
      },
      {
        "pt": "experimental",
        "zh": "实验性的",
        "example": "O espetáculo combina dança e vídeo de maneira experimental."
      },
      {
        "pt": "imersivo",
        "zh": "沉浸式的",
        "example": "O desenho sonoro cria um ambiente imersivo e inquietante."
      },
      {
        "pt": "curador",
        "zh": "策展人",
        "example": "O curador reuniu obras produzidas em contextos muito distintos."
      },
      {
        "pt": "fruição",
        "zh": "欣赏享受；审美体验",
        "example": "O espaço silencioso favorece a fruição das obras."
      },
      {
        "pt": "releitura",
        "zh": "重新诠释",
        "example": "A montagem propõe uma releitura contemporânea do texto clássico."
      },
      {
        "pt": "expressividade",
        "zh": "表现力",
        "example": "A expressividade dos gestos compensa a ausência de diálogos."
      },
      {
        "pt": "minimalista",
        "zh": "极简主义的",
        "example": "A cenografia minimalista concentra a atenção nos atores."
      },
      {
        "pt": "provocativo",
        "zh": "发人深省的；挑衅的",
        "example": "O final provocativo convida o público a rever seus julgamentos."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "工作组织与领导力",
    "topicPt": "Trabalho e liderança",
    "words": [
      {
        "pt": "autonomia",
        "zh": "自主性",
        "example": "A equipe ganhou autonomia para definir prioridades e prazos."
      },
      {
        "pt": "delegar",
        "zh": "授权；委派",
        "example": "Uma boa liderança sabe delegar sem perder o acompanhamento."
      },
      {
        "pt": "engajamento",
        "zh": "投入；参与度",
        "example": "A mudança aumentou o engajamento dos funcionários nas reuniões."
      },
      {
        "pt": "sobrecarga de trabalho",
        "zh": "工作过载",
        "example": "A sobrecarga de trabalho elevou o número de afastamentos."
      },
      {
        "pt": "hierarquia",
        "zh": "层级；等级制度",
        "example": "A estrutura menos rígida facilitou o diálogo entre diferentes níveis da hierarquia."
      },
      {
        "pt": "remanejamento",
        "zh": "重新调配",
        "example": "O remanejamento de pessoal evitou novas contratações emergenciais."
      },
      {
        "pt": "retenção de talentos",
        "zh": "人才保留",
        "example": "Horários flexíveis contribuíram para a retenção de talentos."
      },
      {
        "pt": "alinhamento",
        "zh": "协调一致",
        "example": "A reunião garantiu o alinhamento entre as equipes envolvidas."
      },
      {
        "pt": "liderança participativa",
        "zh": "参与式领导",
        "example": "A liderança participativa ampliou a confiança no processo decisório."
      },
      {
        "pt": "produtivo",
        "zh": "富有成效的；生产性的",
        "example": "O desacordo foi produtivo porque revelou riscos ignorados."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "高级连接与逻辑关系",
    "topicPt": "Conectores e relações lógicas",
    "words": [
      {
        "pt": "não obstante",
        "zh": "尽管如此",
        "example": "Os recursos eram limitados; não obstante, a equipe cumpriu a meta."
      },
      {
        "pt": "haja vista",
        "zh": "鉴于；考虑到",
        "example": "A medida é urgente, haja vista o aumento recente dos casos."
      },
      {
        "pt": "à medida que",
        "zh": "随着",
        "example": "A confiança cresceu à medida que os resultados apareceram."
      },
      {
        "pt": "desde que",
        "zh": "只要；自从",
        "example": "O acordo será válido desde que todas as partes o assinem."
      },
      {
        "pt": "por mais que",
        "zh": "无论多么；尽管",
        "example": "Por mais que se esforce, ele não controla todos os fatores."
      },
      {
        "pt": "ao passo que",
        "zh": "而；与此同时",
        "example": "A procura aumentou, ao passo que a oferta permaneceu estável."
      },
      {
        "pt": "a despeito de",
        "zh": "尽管",
        "example": "A despeito das críticas, o programa foi mantido."
      },
      {
        "pt": "em virtude de",
        "zh": "由于",
        "example": "O evento foi adiado em virtude das condições climáticas."
      },
      {
        "pt": "com vistas a",
        "zh": "旨在；着眼于",
        "example": "O regulamento foi revisto com vistas a ampliar a segurança."
      },
      {
        "pt": "na hipótese de",
        "zh": "倘若；在……情况下",
        "example": "Na hipótese de atraso, os participantes serão avisados imediatamente."
      }
    ]
  },
  {
    "level": "C1",
    "topicZh": "变化、因果与影响",
    "topicPt": "Mudança, causa e impacto",
    "words": [
      {
        "pt": "desencadear",
        "zh": "引发；触发",
        "example": "Uma falha pequena pode desencadear consequências em toda a rede."
      },
      {
        "pt": "acarretar",
        "zh": "导致；带来",
        "example": "A interrupção poderá acarretar prejuízos aos produtores locais."
      },
      {
        "pt": "decorrer",
        "zh": "源于；发生",
        "example": "Parte do problema decorre da ausência de planejamento integrado."
      },
      {
        "pt": "culminar",
        "zh": "最终导致；达到顶点",
        "example": "Meses de protestos culminaram na revisão da proposta."
      },
      {
        "pt": "repercutir",
        "zh": "产生反响；波及",
        "example": "A decisão repercutiu negativamente entre os pequenos comerciantes."
      },
      {
        "pt": "intensificar",
        "zh": "加剧；强化",
        "example": "A estiagem tende a intensificar a disputa pela água."
      },
      {
        "pt": "atenuação",
        "zh": "缓和；减弱",
        "example": "A vegetação contribui para a atenuação do calor urbano."
      },
      {
        "pt": "irreversível",
        "zh": "不可逆的",
        "example": "Especialistas alertam para danos potencialmente irreversíveis."
      },
      {
        "pt": "subsequente",
        "zh": "随后的",
        "example": "A análise subsequente confirmou a tendência inicialmente observada."
      },
      {
        "pt": "efeito colateral",
        "zh": "副作用；附带影响",
        "example": "A restrição produziu um efeito colateral que ninguém havia previsto."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "语义精度与辨析",
    "topicPt": "Precisão semântica",
    "words": [
      {
        "pt": "aquiescer",
        "zh": "默许；同意",
        "example": "O conselho acabou por aquiescer à proposta."
      },
      {
        "pt": "anuir",
        "zh": "正式同意；赞同",
        "example": "A direção anuiu ao pedido sem impor condições."
      },
      {
        "pt": "rechaçar",
        "zh": "断然拒绝；驳回",
        "example": "O tribunal rechaçou a interpretação apresentada."
      },
      {
        "pt": "dirimir",
        "zh": "解决争议；消除疑问",
        "example": "A nota técnica procura dirimir eventuais dúvidas."
      },
      {
        "pt": "elucidar",
        "zh": "阐明；解释清楚",
        "example": "Novos documentos podem elucidar o episódio."
      },
      {
        "pt": "suscitar",
        "zh": "引起；激起",
        "example": "A medida suscitou intenso debate público."
      },
      {
        "pt": "ensejar",
        "zh": "促成；带来机会",
        "example": "A mudança poderá ensejar novas formas de cooperação."
      },
      {
        "pt": "prescindir",
        "zh": "省去；无需",
        "example": "A análise não pode prescindir do contexto histórico."
      },
      {
        "pt": "coadunar",
        "zh": "协调；符合",
        "example": "A prática não se coaduna com os princípios declarados."
      },
      {
        "pt": "fulcral",
        "zh": "关键的；核心的",
        "example": "A confiança desempenha um papel fulcral na negociação."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "法律与制度语体",
    "topicPt": "Registro jurídico e institucional",
    "words": [
      {
        "pt": "impugnar",
        "zh": "对……提出异议；质疑合法性",
        "example": "A defesa decidiu impugnar a validade da prova."
      },
      {
        "pt": "revogar",
        "zh": "撤销；废止",
        "example": "O parlamento pode revogar a norma anterior."
      },
      {
        "pt": "ratificar",
        "zh": "批准；确认",
        "example": "O acordo deverá ser ratificado pelos países membros."
      },
      {
        "pt": "derrogar",
        "zh": "部分废止；减损",
        "example": "A nova lei não pretende derrogar as garantias existentes."
      },
      {
        "pt": "ônus",
        "zh": "负担；举证责任",
        "example": "O ônus da prova cabe à parte que faz a alegação."
      },
      {
        "pt": "pleito",
        "zh": "诉求；申请；选举",
        "example": "O tribunal analisará o pleito apresentado."
      },
      {
        "pt": "jurisprudência",
        "zh": "判例；司法解释",
        "example": "A decisão segue a jurisprudência consolidada."
      },
      {
        "pt": "dispositivo",
        "zh": "法律条款",
        "example": "O dispositivo estabelece uma exceção específica."
      },
      {
        "pt": "inadimplemento",
        "zh": "违约；不履行",
        "example": "O contrato prevê sanções por inadimplemento."
      },
      {
        "pt": "tempestivo",
        "zh": "及时的；在法定期限内的",
        "example": "O recurso foi considerado tempestivo."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "哲学与思想表达",
    "topicPt": "Pensamento e filosofia",
    "words": [
      {
        "pt": "epistemológico",
        "zh": "认识论的",
        "example": "O debate possui uma dimensão epistemológica central."
      },
      {
        "pt": "ontológico",
        "zh": "本体论的",
        "example": "A obra levanta uma questão de natureza ontológica."
      },
      {
        "pt": "dialética",
        "zh": "辩证法；辩证关系",
        "example": "O autor examina a dialética entre indivíduo e sociedade."
      },
      {
        "pt": "paradigma",
        "zh": "范式",
        "example": "A descoberta provocou uma mudança de paradigma."
      },
      {
        "pt": "axioma",
        "zh": "公理；不证自明的原则",
        "example": "O argumento trata a liberdade como um axioma."
      },
      {
        "pt": "contingência",
        "zh": "偶然性；不确定事件",
        "example": "A teoria reconhece o papel da contingência histórica."
      },
      {
        "pt": "imanente",
        "zh": "内在的；内蕴的",
        "example": "A tensão é imanente ao próprio sistema."
      },
      {
        "pt": "transcendental",
        "zh": "先验的；超验的",
        "example": "O ensaio retoma uma pergunta transcendental."
      },
      {
        "pt": "dicotomia",
        "zh": "二分法；二元对立",
        "example": "A análise supera a dicotomia entre razão e emoção."
      },
      {
        "pt": "teleológico",
        "zh": "目的论的",
        "example": "O raciocínio adota uma visão teleológica da história."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "高级修辞与文体",
    "topicPt": "Retórica e estilo avançados",
    "words": [
      {
        "pt": "lapidar",
        "zh": "精炼的；雕琢文字",
        "example": "O editor conseguiu lapidar a formulação original."
      },
      {
        "pt": "prolixo",
        "zh": "冗长的",
        "example": "O primeiro capítulo é excessivamente prolixo."
      },
      {
        "pt": "hermético",
        "zh": "晦涩难懂的",
        "example": "O poema parece hermético numa primeira leitura."
      },
      {
        "pt": "mordaz",
        "zh": "尖刻的；辛辣的",
        "example": "A crônica faz uma crítica mordaz aos costumes."
      },
      {
        "pt": "laudatório",
        "zh": "赞颂性的",
        "example": "O discurso assumiu um tom excessivamente laudatório."
      },
      {
        "pt": "pejorativo",
        "zh": "贬义的",
        "example": "O termo adquiriu sentido pejorativo naquele contexto."
      },
      {
        "pt": "parcimônia",
        "zh": "节制；谨慎",
        "example": "O narrador revela os fatos com parcimônia."
      },
      {
        "pt": "verborragia",
        "zh": "冗言赘语",
        "example": "A verborragia enfraquece a força do argumento."
      },
      {
        "pt": "circunlóquio",
        "zh": "迂回说法",
        "example": "Ele recorreu a um longo circunlóquio para evitar a resposta."
      },
      {
        "pt": "metalinguagem",
        "zh": "元语言",
        "example": "O romance usa a metalinguagem para comentar sua própria construção."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "隐含意义与语用",
    "topicPt": "Implicatura e pragmática",
    "words": [
      {
        "pt": "implicatura",
        "zh": "会话含义；隐含意义",
        "example": "A ironia depende de uma implicatura compartilhada."
      },
      {
        "pt": "pressuposição",
        "zh": "预设",
        "example": "A pergunta contém uma pressuposição discutível."
      },
      {
        "pt": "depreender",
        "zh": "领会；推断出",
        "example": "Pode-se depreender da resposta que houve desacordo."
      },
      {
        "pt": "subjacente",
        "zh": "潜在的；深层的",
        "example": "O conflito subjacente nunca é mencionado diretamente."
      },
      {
        "pt": "atenuar",
        "zh": "缓和；弱化",
        "example": "O advérbio ajuda a atenuar a crítica."
      },
      {
        "pt": "reiterar",
        "zh": "重申",
        "example": "A porta-voz limitou-se a reiterar a posição oficial."
      },
      {
        "pt": "evocar",
        "zh": "唤起；使人联想",
        "example": "A expressão evoca um período de instabilidade."
      },
      {
        "pt": "conotação",
        "zh": "内涵；感情色彩",
        "example": "A palavra possui uma conotação negativa."
      },
      {
        "pt": "denotar",
        "zh": "表示；指示字面意义",
        "example": "Nesse contexto, o verbo denota mudança gradual."
      },
      {
        "pt": "interlocutor",
        "zh": "对话者；交流对象",
        "example": "A escolha do registro depende do interlocutor."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "复杂论证与批判",
    "topicPt": "Argumentação crítica",
    "words": [
      {
        "pt": "sofisma",
        "zh": "诡辩",
        "example": "O raciocínio parece convincente, mas contém um sofisma."
      },
      {
        "pt": "falácia",
        "zh": "谬误",
        "example": "O texto recorre a uma falácia de falsa equivalência."
      },
      {
        "pt": "silogismo",
        "zh": "三段论",
        "example": "A conclusão decorre de um silogismo incompleto."
      },
      {
        "pt": "contraexemplo",
        "zh": "反例",
        "example": "Um único contraexemplo basta para questionar a regra geral."
      },
      {
        "pt": "falseável",
        "zh": "可证伪的",
        "example": "Uma hipótese científica deve ser falseável."
      },
      {
        "pt": "tautologia",
        "zh": "同义反复；恒真命题",
        "example": "A definição não explica nada porque é uma tautologia."
      },
      {
        "pt": "corolário",
        "zh": "推论；必然结果",
        "example": "A transparência é um corolário da responsabilidade pública."
      },
      {
        "pt": "axiológico",
        "zh": "价值论的；价值判断的",
        "example": "O debate também possui um componente axiológico."
      },
      {
        "pt": "refutável",
        "zh": "可反驳的",
        "example": "Toda afirmação empírica deve ser refutável."
      },
      {
        "pt": "dissenso",
        "zh": "分歧；异议",
        "example": "O dissenso pode enriquecer uma discussão democrática."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "历史与社会分析",
    "topicPt": "Análise histórica e social",
    "words": [
      {
        "pt": "anacronismo",
        "zh": "时代错置",
        "example": "Interpretar o período com valores atuais pode gerar anacronismo."
      },
      {
        "pt": "historicidade",
        "zh": "历史性",
        "example": "O conceito só se compreende em sua historicidade."
      },
      {
        "pt": "hegemonia",
        "zh": "霸权；主导地位",
        "example": "O estudo analisa a formação de uma hegemonia cultural."
      },
      {
        "pt": "subalterno",
        "zh": "从属的；边缘群体的",
        "example": "O artigo recupera narrativas de grupos subalternos."
      },
      {
        "pt": "conjuntural",
        "zh": "局势性的；短期形势的",
        "example": "O crescimento pode ser apenas conjuntural."
      },
      {
        "pt": "estrutural",
        "zh": "结构性的",
        "example": "A desigualdade possui causas estruturais."
      },
      {
        "pt": "revisionismo",
        "zh": "历史修正主义",
        "example": "O debate distingue revisão historiográfica de revisionismo."
      },
      {
        "pt": "periodização",
        "zh": "历史分期",
        "example": "Toda periodização envolve escolhas interpretativas."
      },
      {
        "pt": "genealogia",
        "zh": "谱系；思想溯源",
        "example": "O livro traça uma genealogia do conceito de cidadania."
      },
      {
        "pt": "sedimentar",
        "zh": "沉淀；逐渐固化",
        "example": "Certas práticas se sedimentaram ao longo de décadas."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "文学批评与翻译",
    "topicPt": "Crítica literária e tradução",
    "words": [
      {
        "pt": "intertextualidade",
        "zh": "互文性",
        "example": "A intertextualidade aproxima o poema de textos clássicos."
      },
      {
        "pt": "polissemia",
        "zh": "一词多义；多义性",
        "example": "A tradução precisa preservar a polissemia do original."
      },
      {
        "pt": "intraduzível",
        "zh": "不可译的",
        "example": "Nenhuma expressão é totalmente intraduzível."
      },
      {
        "pt": "estranhamento",
        "zh": "陌生化；疏离感",
        "example": "A sintaxe fragmentada produz um efeito de estranhamento."
      },
      {
        "pt": "focalização",
        "zh": "叙事视角聚焦",
        "example": "A mudança de focalização altera nossa leitura da personagem."
      },
      {
        "pt": "paratexto",
        "zh": "副文本",
        "example": "O prefácio funciona como paratexto orientador."
      },
      {
        "pt": "recriação",
        "zh": "再创作",
        "example": "A boa tradução literária também exige recriação."
      },
      {
        "pt": "cadência",
        "zh": "节奏；韵律",
        "example": "O tradutor tentou manter a cadência das frases."
      },
      {
        "pt": "elipse",
        "zh": "省略；跳跃",
        "example": "A elipse temporal acelera o ritmo da narrativa."
      },
      {
        "pt": "palimpsesto",
        "zh": "重写层；羊皮卷式文本",
        "example": "O romance pode ser lido como um palimpsesto cultural."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "认识与推断",
    "topicPt": "Conhecimento e inferência",
    "words": [
      {
        "pt": "conjectura",
        "zh": "推测；猜想",
        "example": "A hipótese permanece mera conjectura enquanto faltarem evidências."
      },
      {
        "pt": "ilação",
        "zh": "推论；推断",
        "example": "Essa ilação não decorre necessariamente dos dados apresentados."
      },
      {
        "pt": "verossímil",
        "zh": "貌似真实可信的",
        "example": "A explicação é verossímil, embora ainda careça de comprovação."
      },
      {
        "pt": "conjectural",
        "zh": "推测性的",
        "example": "O caráter conjectural da tese exige cautela interpretativa."
      },
      {
        "pt": "indício",
        "zh": "迹象；线索",
        "example": "O silêncio constitui um indício, não uma prova conclusiva."
      },
      {
        "pt": "evidência anedótica",
        "zh": "轶事性证据",
        "example": "Evidência anedótica não substitui uma investigação sistemática."
      },
      {
        "pt": "cognição",
        "zh": "认知",
        "example": "O estudo relaciona linguagem, memória e cognição."
      },
      {
        "pt": "discernimento",
        "zh": "辨别力；判断力",
        "example": "É preciso discernimento para separar correlação de causalidade."
      },
      {
        "pt": "incognoscível",
        "zh": "不可知的",
        "example": "O autor não trata o futuro como inteiramente incognoscível."
      },
      {
        "pt": "premissa tácita",
        "zh": "隐含前提",
        "example": "O argumento depende de uma premissa tácita jamais examinada."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "修辞手法",
    "topicPt": "Figuras de retórica",
    "words": [
      {
        "pt": "aporia",
        "zh": "疑难；论证困境",
        "example": "O ensaio termina numa aporia deliberadamente irresolvida."
      },
      {
        "pt": "anáfora",
        "zh": "首语重复",
        "example": "A anáfora imprime ritmo e insistência ao discurso."
      },
      {
        "pt": "antítese",
        "zh": "对照；对偶",
        "example": "A antítese realça o conflito entre memória e esquecimento."
      },
      {
        "pt": "quiasmo",
        "zh": "交错配列法",
        "example": "O quiasmo inverte os termos para produzir simetria expressiva."
      },
      {
        "pt": "metonímia",
        "zh": "转喻",
        "example": "A imprensa empregou o palácio como metonímia do governo."
      },
      {
        "pt": "hipérbole",
        "zh": "夸张法",
        "example": "A hipérbole intensifica o espanto sem pretensão de literalidade."
      },
      {
        "pt": "litotes",
        "zh": "曲言法；反说弱化",
        "example": "Ao dizer que não foi ruim, ela recorreu a uma litotes."
      },
      {
        "pt": "prosopopeia",
        "zh": "拟人法",
        "example": "A prosopopeia concede voz à própria cidade."
      },
      {
        "pt": "paródia",
        "zh": "戏仿",
        "example": "A peça faz uma paródia irreverente do épico clássico."
      },
      {
        "pt": "pastiche",
        "zh": "风格拼贴；仿作",
        "example": "O romance assume o pastiche como procedimento estético."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "语用与互动",
    "topicPt": "Pragmática e interação",
    "words": [
      {
        "pt": "dêixis",
        "zh": "指示现象",
        "example": "A dêixis temporal muda conforme o momento da enunciação."
      },
      {
        "pt": "ato ilocutório",
        "zh": "言外行为；施事行为",
        "example": "A promessa constitui um ato ilocutório com força própria."
      },
      {
        "pt": "efeito perlocutório",
        "zh": "言后效果",
        "example": "O pedido produziu um efeito perlocutório inesperado no público."
      },
      {
        "pt": "polidez linguística",
        "zh": "语言礼貌策略",
        "example": "A polidez linguística atenua a imposição contida no pedido."
      },
      {
        "pt": "turno de fala",
        "zh": "话轮",
        "example": "A interrupção impediu que ela concluísse seu turno de fala."
      },
      {
        "pt": "reparo conversacional",
        "zh": "会话修正",
        "example": "O falante iniciou um reparo conversacional para desfazer a ambiguidade."
      },
      {
        "pt": "inferência contextual",
        "zh": "语境推断",
        "example": "A ironia só emerge por meio de uma inferência contextual."
      },
      {
        "pt": "marcador discursivo",
        "zh": "话语标记语",
        "example": "O marcador discursivo organiza a retomada do argumento."
      },
      {
        "pt": "alternância de código",
        "zh": "语码转换",
        "example": "A alternância de código sinaliza proximidade entre os interlocutores."
      },
      {
        "pt": "enunciação",
        "zh": "言语表达行为；发话",
        "example": "O sentido depende das circunstâncias concretas da enunciação."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "艺术与文化批评",
    "topicPt": "Crítica de arte e cultura",
    "words": [
      {
        "pt": "fruição",
        "zh": "审美享受；欣赏",
        "example": "A montagem convida à fruição lenta de cada obra."
      },
      {
        "pt": "curadoria",
        "zh": "策展；策展工作",
        "example": "A curadoria aproxima artistas de gerações distintas."
      },
      {
        "pt": "acervo",
        "zh": "馆藏；收藏",
        "example": "O museu digitalizou parte significativa de seu acervo."
      },
      {
        "pt": "iconografia",
        "zh": "图像体系；图像志",
        "example": "A iconografia religiosa reaparece sob uma leitura contemporânea."
      },
      {
        "pt": "materialidade",
        "zh": "物质性；材料特质",
        "example": "A crítica destaca a materialidade áspera da instalação."
      },
      {
        "pt": "performatividade",
        "zh": "施为性；表演性",
        "example": "A obra investiga a performatividade das identidades sociais."
      },
      {
        "pt": "recepção crítica",
        "zh": "批评界反响",
        "example": "A recepção crítica mudou radicalmente após a retrospectiva."
      },
      {
        "pt": "vanguarda",
        "zh": "先锋派；前卫",
        "example": "O movimento reivindicava para si o papel de vanguarda."
      },
      {
        "pt": "experimentalismo",
        "zh": "实验主义；实验性探索",
        "example": "O filme alia rigor formal e experimentalismo narrativo."
      },
      {
        "pt": "hibridismo",
        "zh": "混杂性；融合性",
        "example": "O hibridismo da obra desafia classificações tradicionais."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "司法程序",
    "topicPt": "Processo judicial",
    "words": [
      {
        "pt": "preclusão",
        "zh": "程序权利丧失",
        "example": "A manifestação tardia acarretou a preclusão do direito processual."
      },
      {
        "pt": "liminar",
        "zh": "临时裁定；禁令",
        "example": "O juiz concedeu uma liminar para suspender a medida."
      },
      {
        "pt": "tutela provisória",
        "zh": "临时司法保护",
        "example": "A urgência justificou o pedido de tutela provisória."
      },
      {
        "pt": "acórdão",
        "zh": "合议庭判决",
        "example": "O acórdão consolidou o entendimento daquela turma."
      },
      {
        "pt": "súmula",
        "zh": "判例要旨；司法摘要",
        "example": "A corte editou uma súmula sobre a controvérsia recorrente."
      },
      {
        "pt": "litispendência",
        "zh": "诉讼系属；重复诉讼",
        "example": "A identidade das ações pode caracterizar litispendência."
      },
      {
        "pt": "prescrição",
        "zh": "时效届满",
        "example": "O decurso do prazo levou ao reconhecimento da prescrição."
      },
      {
        "pt": "competência jurisdicional",
        "zh": "司法管辖权限",
        "example": "O tribunal examinou primeiro sua competência jurisdicional."
      },
      {
        "pt": "rito processual",
        "zh": "诉讼程序",
        "example": "A natureza da causa determina o rito processual aplicável."
      },
      {
        "pt": "contraditório",
        "zh": "对审原则；申辩权",
        "example": "A decisão deve respeitar o contraditório e a ampla defesa."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "公共行政",
    "topicPt": "Administração pública",
    "words": [
      {
        "pt": "subsidiariedade",
        "zh": "辅助性原则",
        "example": "A subsidiariedade favorece decisões no nível mais próximo do cidadão."
      },
      {
        "pt": "responsabilização",
        "zh": "问责；追责",
        "example": "A transparência facilita a responsabilização dos agentes públicos."
      },
      {
        "pt": "discricionariedade",
        "zh": "行政裁量权",
        "example": "A discricionariedade administrativa não autoriza decisões arbitrárias."
      },
      {
        "pt": "isonomia",
        "zh": "平等对待原则",
        "example": "O edital deve assegurar isonomia entre os concorrentes."
      },
      {
        "pt": "impessoalidade",
        "zh": "行政非人格化原则",
        "example": "A impessoalidade veda a promoção pessoal com recursos públicos."
      },
      {
        "pt": "probidade",
        "zh": "廉正；行政诚信",
        "example": "A função pública exige probidade e transparência."
      },
      {
        "pt": "erário",
        "zh": "国库；公共财政",
        "example": "A fraude causou prejuízo expressivo ao erário."
      },
      {
        "pt": "controle social",
        "zh": "社会监督",
        "example": "O portal amplia o controle social sobre os gastos."
      },
      {
        "pt": "ouvidoria",
        "zh": "申诉监察机构",
        "example": "A denúncia foi encaminhada à ouvidoria do órgão."
      },
      {
        "pt": "corregedoria",
        "zh": "纪律监察部门",
        "example": "A corregedoria instaurou procedimento para apurar a conduta."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "高级经济分析",
    "topicPt": "Análise econômica avançada",
    "words": [
      {
        "pt": "externalidade",
        "zh": "外部性",
        "example": "A poluição é uma externalidade negativa da atividade produtiva."
      },
      {
        "pt": "assimetria informacional",
        "zh": "信息不对称",
        "example": "A regulação busca reduzir a assimetria informacional no mercado."
      },
      {
        "pt": "oligopólio",
        "zh": "寡头垄断",
        "example": "Poucas empresas concentram a oferta nesse oligopólio."
      },
      {
        "pt": "elasticidade",
        "zh": "弹性；敏感度",
        "example": "A elasticidade da demanda varia conforme a renda."
      },
      {
        "pt": "liquidez",
        "zh": "流动性",
        "example": "O banco reforçou sua liquidez diante da instabilidade."
      },
      {
        "pt": "solvência",
        "zh": "偿付能力",
        "example": "A auditoria avaliou a solvência da instituição no longo prazo."
      },
      {
        "pt": "lastro",
        "zh": "资产支撑；担保基础",
        "example": "O título carecia de lastro econômico suficiente."
      },
      {
        "pt": "rentismo",
        "zh": "食利主义",
        "example": "O ensaio critica o rentismo e a baixa formação de capital."
      },
      {
        "pt": "desindustrialização",
        "zh": "去工业化",
        "example": "A desindustrialização precoce comprometeu cadeias produtivas locais."
      },
      {
        "pt": "reprimarização",
        "zh": "经济初级产品化",
        "example": "A pauta exportadora revela sinais de reprimarização."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "社会理论",
    "topicPt": "Teoria social",
    "words": [
      {
        "pt": "agência",
        "zh": "行动主体性；能动性",
        "example": "A análise reconhece a agência dos atores marginalizados."
      },
      {
        "pt": "alteridade",
        "zh": "他者性",
        "example": "O encontro com a alteridade desestabiliza certezas identitárias."
      },
      {
        "pt": "interseccionalidade",
        "zh": "交叉性",
        "example": "A interseccionalidade evidencia desigualdades que se sobrepõem."
      },
      {
        "pt": "estratificação",
        "zh": "社会分层",
        "example": "O estudo compara padrões de estratificação entre gerações."
      },
      {
        "pt": "mobilidade social",
        "zh": "社会流动",
        "example": "A expansão educacional não garantiu igual mobilidade social."
      },
      {
        "pt": "capital simbólico",
        "zh": "象征资本",
        "example": "O título acadêmico lhe conferiu capital simbólico."
      },
      {
        "pt": "habitus",
        "zh": "惯习",
        "example": "O habitus orienta práticas sem determiná-las mecanicamente."
      },
      {
        "pt": "coesão social",
        "zh": "社会凝聚力",
        "example": "A confiança institucional contribui para a coesão social."
      },
      {
        "pt": "anomia",
        "zh": "失范；规范缺失",
        "example": "A crise prolongada favoreceu uma sensação coletiva de anomia."
      },
      {
        "pt": "estigmatização",
        "zh": "污名化",
        "example": "A campanha combate a estigmatização de pessoas vulneráveis."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "研究方法与统计",
    "topicPt": "Métodos de pesquisa e estatística",
    "words": [
      {
        "pt": "inferência bayesiana",
        "zh": "贝叶斯推断",
        "example": "A inferência bayesiana atualiza probabilidades à luz de novos dados."
      },
      {
        "pt": "poder estatístico",
        "zh": "统计功效",
        "example": "Uma amostra pequena reduz o poder estatístico do teste."
      },
      {
        "pt": "viés de seleção",
        "zh": "选择偏差",
        "example": "O recrutamento voluntário introduziu viés de seleção."
      },
      {
        "pt": "variável de confusão",
        "zh": "混杂变量",
        "example": "A idade pode atuar como variável de confusão."
      },
      {
        "pt": "endogeneidade",
        "zh": "内生性",
        "example": "O modelo precisa enfrentar o problema da endogeneidade."
      },
      {
        "pt": "granularidade",
        "zh": "数据粒度",
        "example": "Maior granularidade permite observar diferenças locais."
      },
      {
        "pt": "mensuração",
        "zh": "测量；量化",
        "example": "A mensuração do fenômeno exige indicadores consistentes."
      },
      {
        "pt": "reprodutibilidade",
        "zh": "可复现性",
        "example": "Os autores disponibilizaram o código para garantir reprodutibilidade."
      },
      {
        "pt": "validade externa",
        "zh": "外部效度",
        "example": "A validade externa é limitada pelo perfil da amostra."
      },
      {
        "pt": "hipótese nula",
        "zh": "零假设",
        "example": "O resultado não permitiu rejeitar a hipótese nula."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "生态与气候",
    "topicPt": "Ecologia e clima",
    "words": [
      {
        "pt": "Antropoceno",
        "zh": "人类世",
        "example": "O conceito de Antropoceno ressalta o impacto humano no planeta."
      },
      {
        "pt": "biodiversidade funcional",
        "zh": "功能生物多样性",
        "example": "A biodiversidade funcional aumenta a estabilidade do ecossistema."
      },
      {
        "pt": "resiliência ecológica",
        "zh": "生态韧性",
        "example": "A diversidade fortalece a resiliência ecológica da floresta."
      },
      {
        "pt": "limiar ecológico",
        "zh": "生态阈值",
        "example": "Ultrapassar o limiar ecológico pode provocar mudanças irreversíveis."
      },
      {
        "pt": "retroalimentação",
        "zh": "反馈机制",
        "example": "O degelo desencadeia uma retroalimentação que intensifica o aquecimento."
      },
      {
        "pt": "serviços ecossistêmicos",
        "zh": "生态系统服务",
        "example": "Os manguezais prestam serviços ecossistêmicos essenciais às comunidades."
      },
      {
        "pt": "justiça climática",
        "zh": "气候正义",
        "example": "A justiça climática considera responsabilidades e impactos desiguais."
      },
      {
        "pt": "descarbonização",
        "zh": "脱碳",
        "example": "A descarbonização da indústria requer inovação e investimento."
      },
      {
        "pt": "restauração ambiental",
        "zh": "生态修复",
        "example": "A restauração ambiental recuperou parte da mata ciliar."
      },
      {
        "pt": "bioacumulação",
        "zh": "生物累积",
        "example": "O mercúrio sofre bioacumulação ao longo da cadeia alimentar."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "哲学与伦理",
    "topicPt": "Filosofia e ética",
    "words": [
      {
        "pt": "deontologia",
        "zh": "义务论；道义论",
        "example": "A deontologia avalia o dever independentemente do resultado."
      },
      {
        "pt": "consequencialismo",
        "zh": "后果主义",
        "example": "O consequencialismo julga a ação por seus efeitos."
      },
      {
        "pt": "agência moral",
        "zh": "道德行动主体性",
        "example": "A coerção extrema pode limitar a agência moral do indivíduo."
      },
      {
        "pt": "autonomia",
        "zh": "自主性；自治",
        "example": "A decisão informada pressupõe autonomia do paciente."
      },
      {
        "pt": "heteronomia",
        "zh": "他律",
        "example": "A heteronomia submete a vontade a uma norma externa."
      },
      {
        "pt": "normatividade",
        "zh": "规范性",
        "example": "O debate distingue descrição empírica de normatividade ética."
      },
      {
        "pt": "intersubjetividade",
        "zh": "主体间性",
        "example": "O sentido se constitui na intersubjetividade."
      },
      {
        "pt": "fenomenologia",
        "zh": "现象学",
        "example": "A fenomenologia investiga a experiência tal como é vivida."
      },
      {
        "pt": "hermenêutica",
        "zh": "解释学",
        "example": "A hermenêutica enfatiza a historicidade da interpretação."
      },
      {
        "pt": "essencialismo",
        "zh": "本质主义",
        "example": "O texto rejeita o essencialismo na definição de identidade."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "语言学概念",
    "topicPt": "Conceitos de linguística",
    "words": [
      {
        "pt": "morfossintaxe",
        "zh": "形态句法",
        "example": "A morfossintaxe varia entre as modalidades oral e escrita."
      },
      {
        "pt": "gramaticalização",
        "zh": "语法化",
        "example": "A gramaticalização transforma itens lexicais em elementos funcionais."
      },
      {
        "pt": "lexicalização",
        "zh": "词汇化",
        "example": "A expressão passou por um processo gradual de lexicalização."
      },
      {
        "pt": "produtividade morfológica",
        "zh": "形态构词能产性",
        "example": "O sufixo mantém alta produtividade morfológica no português atual."
      },
      {
        "pt": "alomorfia",
        "zh": "语素变体",
        "example": "A alomorfia explica formas distintas do mesmo morfema."
      },
      {
        "pt": "isotopia",
        "zh": "语义同位；语义连贯线索",
        "example": "A repetição de imagens marítimas cria uma isotopia dominante."
      },
      {
        "pt": "coesão referencial",
        "zh": "指称衔接",
        "example": "Os pronomes asseguram a coesão referencial do parágrafo."
      },
      {
        "pt": "modalidade epistêmica",
        "zh": "认识情态",
        "example": "O advérbio talvez expressa modalidade epistêmica."
      },
      {
        "pt": "evidencialidade",
        "zh": "传信范畴；信息来源标记",
        "example": "A evidencialidade indica como o falante obteve a informação."
      },
      {
        "pt": "variação diatópica",
        "zh": "地域语言变异",
        "example": "A pesquisa mapeia a variação diatópica do vocabulário."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "外交与国际关系",
    "topicPt": "Diplomacia e relações internacionais",
    "words": [
      {
        "pt": "multilateralismo",
        "zh": "多边主义",
        "example": "O país reafirmou seu compromisso com o multilateralismo."
      },
      {
        "pt": "bilateralidade",
        "zh": "双边性",
        "example": "A bilateralidade do acordo limita sua aplicação a dois Estados."
      },
      {
        "pt": "contencioso",
        "zh": "国际争端；诉讼争议",
        "example": "Os governos submeteram o contencioso a um tribunal internacional."
      },
      {
        "pt": "bons ofícios",
        "zh": "斡旋；善意调停",
        "example": "O mediador ofereceu seus bons ofícios às partes."
      },
      {
        "pt": "arbitragem internacional",
        "zh": "国际仲裁",
        "example": "A cláusula prevê arbitragem internacional em caso de conflito."
      },
      {
        "pt": "retaliação",
        "zh": "报复性措施",
        "example": "A tarifa foi apresentada como retaliação comercial."
      },
      {
        "pt": "dissuasão",
        "zh": "威慑",
        "example": "A estratégia combina diálogo diplomático e dissuasão."
      },
      {
        "pt": "distensão",
        "zh": "缓和；关系解冻",
        "example": "O encontro marcou o início de uma distensão bilateral."
      },
      {
        "pt": "beligerância",
        "zh": "交战状态；好战态度",
        "example": "A retórica de beligerância dificultou as negociações."
      },
      {
        "pt": "soberania",
        "zh": "主权",
        "example": "O tratado concilia cooperação regional e soberania nacional."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "历史研究",
    "topicPt": "Pesquisa histórica",
    "words": [
      {
        "pt": "micro-história",
        "zh": "微观史学",
        "example": "A micro-história reconstrói uma época por meio de um caso singular."
      },
      {
        "pt": "longa duração",
        "zh": "长时段理论",
        "example": "A longa duração revela permanências invisíveis no acontecimento imediato."
      },
      {
        "pt": "fonte primária",
        "zh": "一手史料",
        "example": "A carta constitui uma fonte primária valiosa."
      },
      {
        "pt": "memória coletiva",
        "zh": "集体记忆",
        "example": "O monumento participa da construção da memória coletiva."
      },
      {
        "pt": "presentismo",
        "zh": "当下主义；以今度古",
        "example": "O historiador evita o presentismo ao interpretar valores antigos."
      },
      {
        "pt": "contrafactual",
        "zh": "反事实推演",
        "example": "O exercício contrafactual esclarece o peso de cada causa."
      },
      {
        "pt": "prosopografia",
        "zh": "群体传记研究",
        "example": "A prosopografia identificou padrões entre os membros da elite."
      },
      {
        "pt": "historiografia",
        "zh": "史学；史学研究",
        "example": "A historiografia recente revisou aquela interpretação."
      },
      {
        "pt": "crítica documental",
        "zh": "文献批判",
        "example": "A crítica documental verificou autoria, data e proveniência."
      },
      {
        "pt": "periodicidade",
        "zh": "周期性",
        "example": "A série revela a periodicidade das crises de abastecimento."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "叙事与诗学",
    "topicPt": "Narrativa e poética",
    "words": [
      {
        "pt": "narrador não confiável",
        "zh": "不可靠叙述者",
        "example": "O narrador não confiável obriga o leitor a rever cada episódio."
      },
      {
        "pt": "fluxo de consciência",
        "zh": "意识流",
        "example": "O fluxo de consciência reproduz associações descontínuas da personagem."
      },
      {
        "pt": "discurso indireto livre",
        "zh": "自由间接引语",
        "example": "O discurso indireto livre aproxima narrador e personagem."
      },
      {
        "pt": "narrativa em abismo",
        "zh": "嵌套叙事；镜像结构",
        "example": "A narrativa em abismo espelha o romance dentro de si."
      },
      {
        "pt": "écfrase",
        "zh": "艺术作品的文字描写",
        "example": "A écfrase transforma o quadro em matéria poética."
      },
      {
        "pt": "leitmotiv",
        "zh": "主导动机；反复主题",
        "example": "O sino funciona como leitmotiv ao longo da obra."
      },
      {
        "pt": "catarse",
        "zh": "情感净化；宣泄",
        "example": "O desfecho oferece uma catarse apenas parcial."
      },
      {
        "pt": "mimese",
        "zh": "摹仿；艺术再现",
        "example": "A mimese literária não se reduz à cópia do real."
      },
      {
        "pt": "diegese",
        "zh": "故事世界；叙事层",
        "example": "A canção pertence à diegese do filme."
      },
      {
        "pt": "voz lírica",
        "zh": "抒情主体；诗中声音",
        "example": "A voz lírica oscila entre confissão e distanciamento."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "医学与生物伦理",
    "topicPt": "Medicina e bioética",
    "words": [
      {
        "pt": "iatrogenia",
        "zh": "医源性损害",
        "example": "A equipe adotou medidas para reduzir o risco de iatrogenia."
      },
      {
        "pt": "prognóstico",
        "zh": "预后；预测",
        "example": "O diagnóstico precoce melhora consideravelmente o prognóstico."
      },
      {
        "pt": "comorbidade",
        "zh": "共病；合并症",
        "example": "A comorbidade exige acompanhamento por diferentes especialistas."
      },
      {
        "pt": "anamnese",
        "zh": "病史采集",
        "example": "Uma anamnese cuidadosa revelou sintomas antes omitidos."
      },
      {
        "pt": "consentimento informado",
        "zh": "知情同意",
        "example": "O procedimento depende do consentimento informado do paciente."
      },
      {
        "pt": "obstinação terapêutica",
        "zh": "过度医疗；无效治疗坚持",
        "example": "A família discutiu os limites da obstinação terapêutica."
      },
      {
        "pt": "cuidados paliativos",
        "zh": "姑息治疗；缓和医疗",
        "example": "Os cuidados paliativos priorizam conforto e qualidade de vida."
      },
      {
        "pt": "triagem",
        "zh": "分诊；筛查",
        "example": "A triagem identifica rapidamente os casos mais urgentes."
      },
      {
        "pt": "remissão",
        "zh": "病情缓解",
        "example": "A doença entrou em remissão após o tratamento."
      },
      {
        "pt": "morbidade",
        "zh": "发病率；患病状况",
        "example": "O programa reduziu a morbidade associada à infecção."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "人工智能与数据治理",
    "topicPt": "Inteligência artificial e dados",
    "words": [
      {
        "pt": "explicabilidade",
        "zh": "可解释性",
        "example": "A explicabilidade do modelo é essencial em decisões médicas."
      },
      {
        "pt": "auditabilidade",
        "zh": "可审计性",
        "example": "O sistema precisa oferecer auditabilidade de todas as decisões."
      },
      {
        "pt": "opacidade algorítmica",
        "zh": "算法不透明性",
        "example": "A opacidade algorítmica dificulta a contestação de resultados."
      },
      {
        "pt": "viés algorítmico",
        "zh": "算法偏见",
        "example": "Dados históricos podem perpetuar viés algorítmico."
      },
      {
        "pt": "minimização de dados",
        "zh": "数据最小化",
        "example": "A minimização de dados limita a coleta ao estritamente necessário."
      },
      {
        "pt": "anonimização",
        "zh": "匿名化",
        "example": "A anonimização reduz riscos, mas nem sempre impede reidentificação."
      },
      {
        "pt": "rastreabilidade",
        "zh": "可追溯性",
        "example": "A rastreabilidade permite reconstruir o processo decisório."
      },
      {
        "pt": "interoperabilidade",
        "zh": "互操作性",
        "example": "A interoperabilidade evita o isolamento entre sistemas públicos."
      },
      {
        "pt": "curadoria de dados",
        "zh": "数据策管；数据筛选管理",
        "example": "A curadoria de dados melhora a consistência do treinamento."
      },
      {
        "pt": "supervisão humana",
        "zh": "人工监督",
        "example": "Decisões sensíveis devem permanecer sob supervisão humana."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "媒体与公共舆论",
    "topicPt": "Mídia e opinião pública",
    "words": [
      {
        "pt": "enquadramento midiático",
        "zh": "媒体框架",
        "example": "O enquadramento midiático condicionou a percepção do conflito."
      },
      {
        "pt": "agenda pública",
        "zh": "公共议程",
        "example": "A reportagem inseriu o tema na agenda pública."
      },
      {
        "pt": "desinformação",
        "zh": "虚假信息传播",
        "example": "A desinformação circulou mais depressa que a correção."
      },
      {
        "pt": "checagem de fatos",
        "zh": "事实核查",
        "example": "A checagem de fatos contestou a alegação viral."
      },
      {
        "pt": "pluralismo midiático",
        "zh": "媒体多元性",
        "example": "O pluralismo midiático amplia a diversidade de perspectivas."
      },
      {
        "pt": "espetacularização",
        "zh": "娱乐化；奇观化",
        "example": "A espetacularização do julgamento prejudicou o debate sereno."
      },
      {
        "pt": "sensacionalismo",
        "zh": "耸人听闻；煽情主义",
        "example": "O título recorre ao sensacionalismo para atrair cliques."
      },
      {
        "pt": "linha editorial",
        "zh": "编辑方针",
        "example": "A cobertura reflete claramente a linha editorial do jornal."
      },
      {
        "pt": "direito de resposta",
        "zh": "答辩权；回应权",
        "example": "A pessoa citada reivindicou seu direito de resposta."
      },
      {
        "pt": "ecossistema informacional",
        "zh": "信息生态系统",
        "example": "Plataformas digitais alteraram o ecossistema informacional."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "宪政与民主",
    "topicPt": "Constitucionalismo e democracia",
    "words": [
      {
        "pt": "separação de poderes",
        "zh": "权力分立",
        "example": "A separação de poderes limita a concentração de autoridade."
      },
      {
        "pt": "controle de constitucionalidade",
        "zh": "违宪审查",
        "example": "A corte exerce controle de constitucionalidade sobre a norma."
      },
      {
        "pt": "cláusula pétrea",
        "zh": "不可修改的宪法条款",
        "example": "A proposta não pode abolir uma cláusula pétrea."
      },
      {
        "pt": "devido processo legal",
        "zh": "正当法律程序",
        "example": "A sanção foi anulada por violar o devido processo legal."
      },
      {
        "pt": "legitimidade democrática",
        "zh": "民主正当性",
        "example": "A participação social reforça a legitimidade democrática da decisão."
      },
      {
        "pt": "freios e contrapesos",
        "zh": "制衡机制",
        "example": "O sistema de freios e contrapesos previne abusos institucionais."
      },
      {
        "pt": "mandato representativo",
        "zh": "代议制授权；代表任期",
        "example": "O mandato representativo não elimina a prestação de contas."
      },
      {
        "pt": "sufrágio universal",
        "zh": "普选权",
        "example": "O sufrágio universal resultou de longa mobilização social."
      },
      {
        "pt": "Estado de Direito",
        "zh": "法治国家",
        "example": "Nenhuma autoridade está acima do Estado de Direito."
      },
      {
        "pt": "retrocesso institucional",
        "zh": "制度倒退",
        "example": "A erosão das garantias pode sinalizar retrocesso institucional."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "城市规划与空间",
    "topicPt": "Urbanismo e espaço",
    "words": [
      {
        "pt": "gentrificação",
        "zh": "绅士化；社区高档化",
        "example": "A valorização imobiliária acelerou a gentrificação do bairro."
      },
      {
        "pt": "segregação socioespacial",
        "zh": "社会空间隔离",
        "example": "O transporte precário aprofunda a segregação socioespacial."
      },
      {
        "pt": "adensamento urbano",
        "zh": "城市密度增加",
        "example": "O plano prevê adensamento urbano próximo ao metrô."
      },
      {
        "pt": "mobilidade ativa",
        "zh": "步行与骑行出行",
        "example": "Calçadas seguras incentivam a mobilidade ativa."
      },
      {
        "pt": "zoneamento",
        "zh": "城市分区规划",
        "example": "O novo zoneamento permite usos mistos naquela área."
      },
      {
        "pt": "permeabilidade do solo",
        "zh": "土壤渗透性",
        "example": "A impermeabilização reduz a permeabilidade do solo urbano."
      },
      {
        "pt": "infraestrutura verde",
        "zh": "绿色基础设施",
        "example": "A infraestrutura verde ajuda a controlar enchentes."
      },
      {
        "pt": "centralidade urbana",
        "zh": "城市中心性",
        "example": "O terminal criou uma nova centralidade urbana."
      },
      {
        "pt": "vazio urbano",
        "zh": "城市闲置空间",
        "example": "O projeto transforma um vazio urbano em parque público."
      },
      {
        "pt": "direito à cidade",
        "zh": "城市权",
        "example": "O direito à cidade inclui acesso equitativo aos serviços."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "教育理论",
    "topicPt": "Teoria da educação",
    "words": [
      {
        "pt": "transposição didática",
        "zh": "教学转化",
        "example": "A transposição didática adapta o saber científico à sala de aula."
      },
      {
        "pt": "metacognição",
        "zh": "元认知",
        "example": "A metacognição ajuda o estudante a regular a aprendizagem."
      },
      {
        "pt": "avaliação formativa",
        "zh": "形成性评价",
        "example": "A avaliação formativa orienta intervenções durante o percurso."
      },
      {
        "pt": "letramento crítico",
        "zh": "批判性读写素养",
        "example": "O letramento crítico questiona as relações de poder nos textos."
      },
      {
        "pt": "andragogia",
        "zh": "成人教育学",
        "example": "A andragogia considera a experiência prévia do adulto."
      },
      {
        "pt": "mediação pedagógica",
        "zh": "教学中介与引导",
        "example": "A mediação pedagógica promove autonomia sem abandonar o apoio."
      },
      {
        "pt": "currículo oculto",
        "zh": "隐性课程",
        "example": "O currículo oculto transmite valores não declarados."
      },
      {
        "pt": "diferenciação pedagógica",
        "zh": "差异化教学",
        "example": "A diferenciação pedagógica responde a ritmos diversos."
      },
      {
        "pt": "transferência de aprendizagem",
        "zh": "学习迁移",
        "example": "A tarefa avalia a transferência de aprendizagem para novos contextos."
      },
      {
        "pt": "autorregulação",
        "zh": "自我调节",
        "example": "Metas claras favorecem a autorregulação do estudante."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "组织与战略",
    "topicPt": "Organizações e estratégia",
    "words": [
      {
        "pt": "governança corporativa",
        "zh": "公司治理",
        "example": "A governança corporativa define controles e responsabilidades."
      },
      {
        "pt": "planejamento sucessório",
        "zh": "继任规划",
        "example": "O planejamento sucessório reduz riscos na transição de liderança."
      },
      {
        "pt": "vantagem competitiva",
        "zh": "竞争优势",
        "example": "A reputação constitui uma vantagem competitiva difícil de imitar."
      },
      {
        "pt": "custo de oportunidade",
        "zh": "机会成本",
        "example": "Toda escolha estratégica envolve um custo de oportunidade."
      },
      {
        "pt": "capacidade ociosa",
        "zh": "闲置产能",
        "example": "A fábrica opera com elevada capacidade ociosa."
      },
      {
        "pt": "inteligência competitiva",
        "zh": "竞争情报",
        "example": "A inteligência competitiva antecipa mudanças no setor."
      },
      {
        "pt": "cultura organizacional",
        "zh": "组织文化",
        "example": "A cultura organizacional pode favorecer ou bloquear a inovação."
      },
      {
        "pt": "gestão matricial",
        "zh": "矩阵式管理",
        "example": "A gestão matricial distribui autoridade entre projetos e áreas."
      },
      {
        "pt": "risco reputacional",
        "zh": "声誉风险",
        "example": "A resposta tardia ampliou o risco reputacional da empresa."
      },
      {
        "pt": "alinhamento estratégico",
        "zh": "战略协同",
        "example": "O orçamento deve refletir o alinhamento estratégico das equipes."
      }
    ]
  },
  {
    "level": "C2",
    "topicZh": "心理学与行为",
    "topicPt": "Psicologia e comportamento",
    "words": [
      {
        "pt": "dissonância cognitiva",
        "zh": "认知失调",
        "example": "A dissonância cognitiva surgiu entre valores e comportamento."
      },
      {
        "pt": "viés de confirmação",
        "zh": "确认偏误",
        "example": "O viés de confirmação favorece evidências compatíveis com crenças prévias."
      },
      {
        "pt": "heurística",
        "zh": "启发式判断",
        "example": "A heurística simplifica decisões, mas pode produzir erros sistemáticos."
      },
      {
        "pt": "aversão à perda",
        "zh": "损失厌恶",
        "example": "A aversão à perda influencia escolhas financeiras conservadoras."
      },
      {
        "pt": "desamparo aprendido",
        "zh": "习得性无助",
        "example": "Fracassos repetidos podem gerar desamparo aprendido."
      },
      {
        "pt": "regulação emocional",
        "zh": "情绪调节",
        "example": "A respiração consciente auxilia a regulação emocional."
      },
      {
        "pt": "memória de trabalho",
        "zh": "工作记忆",
        "example": "A tarefa exige grande capacidade de memória de trabalho."
      },
      {
        "pt": "flexibilidade cognitiva",
        "zh": "认知灵活性",
        "example": "A flexibilidade cognitiva facilita a mudança de estratégia."
      },
      {
        "pt": "atribuição causal",
        "zh": "因果归因",
        "example": "A atribuição causal varia conforme a posição do observador."
      },
      {
        "pt": "reforço intermitente",
        "zh": "间歇性强化",
        "example": "O reforço intermitente torna o comportamento mais persistente."
      }
    ]
  }
];

type CEFRLevel = VocabularyDeck['level'];
type TermSeed = { pt: string; zh: string };

const TARGET_DAILY_DECKS_PER_LEVEL = 120;
const A1_TARGET_DAILY_DECKS = 100;

function termSeeds(source: string): TermSeed[] {
  return source.split('|').map(item => {
    const [pt, zh] = item.split(':');
    return { pt, zh };
  });
}

function isSingleWordTerm(term: string) {
  return /^[\p{L}]+(?:-[\p{L}]+)?$/u.test(term);
}

function uniqueSingleWordTerms(terms: TermSeed[]) {
  const seen = new Set<string>();
  return terms.filter(term => {
    const key = term.pt.toLocaleLowerCase('pt-BR');
    if (!isSingleWordTerm(term.pt) || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function pluralizeTerm(term: TermSeed): TermSeed {
  if (term.pt.endsWith('ão')) return { pt: `${term.pt.slice(0, -2)}ões`, zh: `${term.zh}（复数）` };
  if (term.pt.endsWith('m')) return { pt: `${term.pt.slice(0, -1)}ns`, zh: `${term.zh}（复数）` };
  if (/[rz]$/u.test(term.pt)) return { pt: `${term.pt}es`, zh: `${term.zh}（复数）` };
  if (term.pt.endsWith('s')) return { pt: term.pt, zh: `${term.zh}（复数）` };
  return { pt: `${term.pt}s`, zh: `${term.zh}（复数）` };
}

const supplementalTopicNames: Record<CEFRLevel, { zh: string[]; pt: string[] }> = {
  A1: {
    zh: ['日常名词', '地点与出行', '食物饮品', '家庭生活', '时间天气', '购物服务'],
    pt: ['Palavras do dia', 'Lugares e transporte', 'Comida e bebida', 'Vida em casa', 'Tempo e clima', 'Compras e serviços'],
  },
  A2: {
    zh: ['日常安排', '生活服务', '出行住宿', '购物付款', '健康预约', '学习工作'],
    pt: ['Rotina', 'Serviços', 'Viagem e estadia', 'Compras e pagamento', 'Saúde e consultas', 'Estudo e trabalho'],
  },
  B1: {
    zh: ['观点表达', '经历叙述', '工作学习', '社会生活', '计划决策', '问题解决'],
    pt: ['Opiniões', 'Experiências', 'Trabalho e estudo', 'Vida social', 'Planos e decisões', 'Soluções'],
  },
  B2: {
    zh: ['抽象主题', '论证词汇', '公共议题', '商业管理', '科技社会', '风险变化'],
    pt: ['Temas abstratos', 'Argumentação', 'Questões públicas', 'Gestão', 'Tecnologia e sociedade', 'Riscos e mudanças'],
  },
  C1: {
    zh: ['高级论述', '学术表达', '公共话语', '文化社会', '概念分析', '正式语体'],
    pt: ['Discurso avançado', 'Registro acadêmico', 'Discurso público', 'Cultura e sociedade', 'Análise conceitual', 'Registro formal'],
  },
  C2: {
    zh: ['精密概念', '理论词汇', '批判表达', '哲学社科', '语义细节', '综合分析'],
    pt: ['Conceitos precisos', 'Vocabulário teórico', 'Expressão crítica', 'Filosofia e sociedade', 'Nuance semântica', 'Síntese'],
  },
};

const productivePrefixes: Record<CEFRLevel, Array<{ pt: string; zh: string }>> = {
  A1: [
    { pt: 'mini-', zh: '小型' },
    { pt: 'novo-', zh: '新' },
    { pt: 'boa-', zh: '好' },
    { pt: 'super-', zh: '很' },
    { pt: 'extra-', zh: '额外' },
    { pt: 'micro-', zh: '微型' },
    { pt: 'multi-', zh: '多功能' },
    { pt: 'pré-', zh: '预备' },
    { pt: 'pós-', zh: '后续' },
    { pt: 'semi-', zh: '半' },
  ],
  A2: [
    { pt: 'pré-', zh: '预先' },
    { pt: 're', zh: '重新' },
    { pt: 'auto-', zh: '自助' },
    { pt: 'semi-', zh: '半' },
    { pt: 'multi-', zh: '多' },
    { pt: 'mini-', zh: '小型' },
    { pt: 'super-', zh: '加强' },
    { pt: 'extra-', zh: '额外' },
    { pt: 'inter-', zh: '跨' },
    { pt: 'micro-', zh: '微型' },
    { pt: 'pós-', zh: '后续' },
    { pt: 'contra-', zh: '反向' },
    { pt: 'ultra-', zh: '加强' },
    { pt: 'quase-', zh: '近似' },
    { pt: 'eco-', zh: '环保' },
    { pt: 'sub', zh: '次级' },
    { pt: 'sobre', zh: '过度' },
  ],
  B1: [
    { pt: 're', zh: '重新' },
    { pt: 'auto-', zh: '自主' },
    { pt: 'co', zh: '共同' },
    { pt: 'inter-', zh: '跨' },
    { pt: 'sub', zh: '次级' },
    { pt: 'sobre', zh: '过度' },
    { pt: 'pré-', zh: '预先' },
    { pt: 'pós-', zh: '后续' },
    { pt: 'semi-', zh: '半' },
    { pt: 'multi-', zh: '多维' },
    { pt: 'micro-', zh: '微观' },
    { pt: 'macro-', zh: '宏观' },
    { pt: 'contra-', zh: '反向' },
    { pt: 'trans', zh: '跨越' },
  ],
  B2: [
    { pt: 're', zh: '重新' },
    { pt: 'anti-', zh: '反' },
    { pt: 'inter-', zh: '跨' },
    { pt: 'macro-', zh: '宏观' },
    { pt: 'micro-', zh: '微观' },
    { pt: 'trans', zh: '跨越' },
    { pt: 'pré-', zh: '前置' },
    { pt: 'pós-', zh: '后续' },
    { pt: 'meta-', zh: '元' },
    { pt: 'multi-', zh: '多维' },
    { pt: 'semi-', zh: '部分' },
    { pt: 'contra-', zh: '反向' },
    { pt: 'extra-', zh: '额外' },
    { pt: 'intra-', zh: '内部' },
    { pt: 'supra-', zh: '超越' },
    { pt: 'infra-', zh: '基础' },
    { pt: 'hiper-', zh: '高度' },
    { pt: 'co', zh: '协同' },
    { pt: 'sub', zh: '次级' },
    { pt: 'neo-', zh: '新' },
    { pt: 'des', zh: '去除' },
    { pt: 'sobre', zh: '过度' },
    { pt: 'ultra-', zh: '极度' },
    { pt: 'pluri-', zh: '多元' },
    { pt: 'para-', zh: '旁支' },
    { pt: 'quase-', zh: '近似' },
    { pt: 'pseudo-', zh: '伪' },
    { pt: 'eco-', zh: '生态' },
  ],
  C1: [
    { pt: 'meta-', zh: '元' },
    { pt: 'contra-', zh: '反向' },
    { pt: 'inter-', zh: '跨' },
    { pt: 'trans', zh: '跨越' },
    { pt: 're', zh: '再' },
    { pt: 'des', zh: '去除' },
    { pt: 'anti-', zh: '反' },
    { pt: 'pós-', zh: '后' },
    { pt: 'pré-', zh: '前置' },
    { pt: 'neo-', zh: '新' },
    { pt: 'multi-', zh: '多维' },
    { pt: 'pluri-', zh: '多元' },
    { pt: 'hiper-', zh: '高度' },
    { pt: 'micro-', zh: '微观' },
    { pt: 'macro-', zh: '宏观' },
    { pt: 'intra-', zh: '内部' },
    { pt: 'supra-', zh: '超越' },
    { pt: 'infra-', zh: '基础' },
    { pt: 'semi-', zh: '半' },
    { pt: 'sub', zh: '次级' },
    { pt: 'sobre', zh: '过度' },
    { pt: 'ultra-', zh: '极度' },
    { pt: 'co', zh: '协同' },
    { pt: 'para-', zh: '旁支' },
    { pt: 'quase-', zh: '近似' },
    { pt: 'pseudo-', zh: '伪' },
    { pt: 'extra-', zh: '额外' },
    { pt: 'eco-', zh: '生态' },
    { pt: 'arque-', zh: '原型' },
    { pt: 'proto-', zh: '原初' },
  ],
  C2: [
    { pt: 'meta-', zh: '元' },
    { pt: 'pós-', zh: '后' },
    { pt: 'neo-', zh: '新' },
    { pt: 'inter-', zh: '主体间/跨' },
    { pt: 'trans', zh: '跨越' },
    { pt: 'contra-', zh: '反向' },
    { pt: 'anti-', zh: '反' },
    { pt: 'pré-', zh: '前置' },
    { pt: 're', zh: '再' },
    { pt: 'des', zh: '去自然化' },
    { pt: 'multi-', zh: '多维' },
    { pt: 'pluri-', zh: '多元' },
    { pt: 'hiper-', zh: '高度' },
    { pt: 'micro-', zh: '微观' },
    { pt: 'macro-', zh: '宏观' },
    { pt: 'intra-', zh: '内部' },
    { pt: 'supra-', zh: '超越' },
    { pt: 'infra-', zh: '基础' },
    { pt: 'semi-', zh: '半' },
    { pt: 'sub', zh: '次级' },
    { pt: 'sobre', zh: '过度' },
    { pt: 'ultra-', zh: '极度' },
    { pt: 'co', zh: '协同' },
    { pt: 'para-', zh: '旁支' },
    { pt: 'quase-', zh: '近似' },
    { pt: 'pseudo-', zh: '伪' },
    { pt: 'extra-', zh: '额外' },
    { pt: 'eco-', zh: '生态' },
  ],
};

function prefixedTerm(prefix: { pt: string; zh: string }, term: TermSeed): TermSeed {
  return {
    pt: `${prefix.pt}${term.pt}`,
    zh: `${prefix.zh}${term.zh}`,
  };
}

const supplementalVocabularySeeds: Record<CEFRLevel, { bases: TermSeed[]; topics: TermSeed[]; example: (term: string) => string }> = {
  A1: {
    bases: termSeeds('nome:名称|número:数字|endereço:地址|horário:时间|preço:价格|pedido:点单|café:咖啡|água:水|suco:果汁|lanche:小吃|mesa:桌子|chave:钥匙|porta:门|janela:窗户|rua:街道|praça:广场|loja:商店|mercado:市场|ônibus:公交车|metrô:地铁|bilhete:票|mala:行李箱|quarto:房间|banheiro:卫生间|telefone:电话|mensagem:消息|amigo:朋友|família:家人|aula:课程|livro:书'),
    topics: termSeeds('casa:家|escola:学校|cidade:城市|restaurante:餐厅|hotel:酒店|mercado:市场|farmácia:药店|banco:银行|aeroporto:机场|estação:车站|ônibus:公交车|metrô:地铁|trabalho:工作|aula:课堂|família:家庭|amigo:朋友|viagem:旅行|comida:食物|bebida:饮料|roupa:衣服|sapato:鞋|telefone:电话|internet:网络|música:音乐|filme:电影|praia:海滩|parque:公园|clima:天气|manhã:早上|noite:晚上|segunda-feira:周一|fim de semana:周末|aniversário:生日|festa:聚会|consulta:预约|compra:购物|presente:礼物|dinheiro:钱|cartão:银行卡|conta:账单|mapa:地图|foto:照片|porta:门|janela:窗|mesa:桌子|cadeira:椅子|cozinha:厨房|banheiro:卫生间|quarto:卧室|jardim:花园'),
    example: term => `Eu preciso do ${term} hoje.`,
  },
  A2: {
    bases: termSeeds('confirmação:确认|cancelamento:取消|reserva:预订|pagamento:付款|entrega:配送|troca:更换|devolução:退货|descrição:描述|comparação:比较|organização:安排|preparação:准备|escolha:选择|sugestão:建议|convite:邀请|mensagem:信息|agendamento:预约|atraso:延误|mudança:变更|necessidade:需要|explicação:解释|preferência:偏好|opção:选项|combinação:组合|solicitação:请求|orientação:指引|aviso:通知|documento:文件|formulário:表格|recebimento:收取|localização:位置'),
    topics: termSeeds('viagem:旅行|consulta:预约|apartamento:公寓|trabalho:工作|mercado:市场|transporte:交通|aula:课程|reunião:会议|documento:文件|compra:购物|família:家庭|cidade:城市|restaurante:餐厅|hotel:酒店|farmácia:药店|banco:银行|escola:学校|curso:课程|agenda:日程|entrevista:面试|aluguel:租房|mudança:搬家|passeio:出游|clima:天气|saúde:健康|roupa:衣服|presente:礼物|evento:活动|serviço:服务|orçamento:预算|passagem:票务|mala:行李|quarto:房间|cozinha:厨房|internet:网络|telefone:电话|endereço:地址|preço:价格|horário:时间|cardápio:菜单|pedido:订单|conta:账单|pagamento:支付|remédio:药|exame:检查|seguro:保险|contrato:合同|vizinhança:邻里|academia:健身房|biblioteca:图书馆'),
    example: term => `Preciso confirmar a ${term} antes de continuar.`,
  },
  B1: {
    bases: termSeeds('planejamento:规划|decisão:决定|avaliação:评估|desenvolvimento:发展|participação:参与|colaboração:合作|negociação:协商|adaptação:适应|melhoria:改进|responsabilidade:责任|prioridade:优先事项|objetivo:目标|resultado:结果|experiência:经历|desafio:挑战|solução:解决方案|estratégia:策略|argumento:论点|opinião:观点|vantagem:优势|desvantagem:劣势|mudança:变化|crescimento:增长|aprendizagem:学习|oportunidade:机会|dificuldade:困难|proposta:提案|progresso:进展|impacto:影响|equilíbrio:平衡'),
    topics: termSeeds('carreira:职业|estudo:学习|empresa:公司|equipe:团队|projeto:项目|comunidade:社区|tecnologia:技术|educação:教育|saúde:健康|moradia:住房|mobilidade:出行|ambiente:环境|cultura:文化|economia:经济|turismo:旅游|comunicação:沟通|rotina:日常|produtividade:效率|qualidade:质量|segurança:安全|consumo:消费|finanças:财务|empreendedorismo:创业|voluntariado:志愿服务|intercâmbio:交换学习|idiomas:语言|pesquisa:研究|treinamento:培训|liderança:领导力|cliente:客户|produto:产品|serviço:服务|prazo:期限|orçamento:预算|contrato:合同|mercado:市场|concorrência:竞争|inovação:创新|sustentabilidade:可持续|diversidade:多样性|bem-estar:身心健康|hábitos:习惯|alimentação:饮食|transporte público:公共交通|trabalho remoto:远程工作|aprendizado online:在线学习|planejamento urbano:城市规划|mídias sociais:社交媒体|notícias:新闻|política local:地方政策'),
    example: term => `O texto apresenta a ${term} de forma clara.`,
  },
  B2: {
    bases: termSeeds('análise:分析|implementação:实施|otimização:优化|integração:整合|monitoramento:监测|coordenação:协调|mediação:调解|expansão:扩展|redução:降低|aumento:增加|interpretação:解读|formulação:制定|execução:执行|revisão:审查|mensuração:衡量|comparação:比较|prevenção:预防|mitigação:缓解|consolidação:巩固|transformação:转型|adequação:适配|validação:验证|estruturação:结构化|posicionamento:定位|diferenciação:差异化|sistematização:系统化|alocação:分配|governança:治理|conformidade:合规|viabilidade:可行性'),
    topics: termSeeds('dados:数据|processos:流程|políticas públicas:公共政策|mercado financeiro:金融市场|cadeia de suprimentos:供应链|experiência do usuário:用户体验|gestão de riscos:风险管理|capital humano:人力资本|infraestrutura:基础设施|privacidade:隐私|segurança digital:数字安全|educação inclusiva:包容教育|saúde preventiva:预防性健康|energia renovável:可再生能源|mobilidade urbana:城市出行|desigualdade social:社会不平等|produtividade:生产力|competitividade:竞争力|governança corporativa:公司治理|impacto ambiental:环境影响|comportamento do consumidor:消费者行为|comunicação institucional:机构沟通|transformação digital:数字化转型|planejamento estratégico:战略规划|gestão orçamentária:预算管理|qualidade regulatória:监管质量|inovação aberta:开放创新|relações internacionais:国际关系|mercado de trabalho:劳动市场|política educacional:教育政策|sistema de saúde:卫生系统|pesquisa aplicada:应用研究|aprendizagem contínua:持续学习|logística reversa:逆向物流|economia circular:循环经济|crédito ao consumidor:消费者信贷|gestão de crise:危机管理|responsabilidade social:社会责任|cultura organizacional:组织文化|inteligência competitiva:竞争情报|automação:自动化|atendimento ao cliente:客户服务|indicadores de desempenho:绩效指标|tomada de decisão:决策|negociação coletiva:集体谈判|regulação econômica:经济监管|mídia digital:数字媒体|pesquisa de mercado:市场调研|gestão de conhecimento:知识管理|desenvolvimento regional:区域发展'),
    example: term => `A equipe discutiu a ${term} durante a reunião.`,
  },
  C1: {
    bases: termSeeds('articulação:衔接|problematização:问题化|ressignificação:重新赋义|contextualização:语境化|fundamentação:论证基础|delimitação:界定|contraposição:对照|convergência:趋同|divergência:分歧|complexidade:复杂性|ambiguidade:模糊性|nuance:细微差别|pressuposto:前提|paradigma:范式|abordagem:方法路径|perspectiva:视角|implicação:含义|repercussão:反响|tensionamento:张力呈现|aprofundamento:深化|refinamento:精细化|síntese:综合|inferência:推断|coerência:连贯性|coesão:衔接性|recorte:切入点|desdobramento:后续发展|enquadramento:框架化|mediação:中介|legitimação:合法化'),
    topics: termSeeds('discurso público:公共话语|produção acadêmica:学术生产|memória coletiva:集体记忆|identidade cultural:文化身份|política linguística:语言政策|prática pedagógica:教学实践|cidadania digital:数字公民|ética profissional:职业伦理|justiça social:社会正义|patrimônio cultural:文化遗产|governança global:全球治理|produção científica:科学生产|letramento crítico:批判性读写|subjetividade:主体性|participação democrática:民主参与|mediação cultural:文化调解|narrativa histórica:历史叙事|representação social:社会表征|produção simbólica:符号生产|responsabilidade institucional:机构责任|transformação social:社会转型|sustentabilidade urbana:城市可持续|desenvolvimento humano:人的发展|prática discursiva:话语实践|campo profissional:专业领域|sistema jurídico:法律体系|saúde coletiva:公共卫生|política migratória:移民政策|economia criativa:创意经济|memória institucional:机构记忆|formação docente:教师培养|pesquisa qualitativa:质性研究|produção cultural:文化生产|gestão pública:公共管理|transição energética:能源转型|inclusão social:社会包容|direitos humanos:人权|segurança alimentar:粮食安全|pensamento crítico:批判思维|cultura digital:数字文化|integração regional:区域一体化|regulação tecnológica:技术监管|experiência estética:审美体验|aprendizagem autônoma:自主学习|cooperação internacional:国际合作|análise documental:文献分析|mudança climática:气候变化|política habitacional:住房政策|epistemologia:认识论|argumentação complexa:复杂论证'),
    example: term => `O ensaio examina a ${term} com rigor analítico.`,
  },
  C2: {
    bases: termSeeds('hermenêutica:阐释学|epistemologia:认识论|dialética:辩证法|genealogia:谱系学|ontologia:本体论|teleologia:目的论|axiologia:价值论|intertextualidade:互文性|metalinguagem:元语言|performatividade:施为性|intersubjetividade:主体间性|historicidade:历史性|normatividade:规范性|materialidade:物质性|contingência:偶然性|transversalidade:横向贯通|reflexividade:反身性|paradoxalidade:悖论性|pluridimensionalidade:多维性|indeterminação:不确定性|problematização:问题化|desnaturalização:去自然化|recontextualização:再语境化|sofisticação:精密性|densidade conceitual:概念密度|economia argumentativa:论证经济性|ambivalência:双重性|assimetria:不对称性|disjunção:断裂|transposição:转置'),
    topics: termSeeds('modernidade tardia:晚期现代性|capitalismo cognitivo:认知资本主义|racionalidade instrumental:工具理性|sujeito contemporâneo:当代主体|ordem discursiva:话语秩序|campo epistemológico:认识场域|crítica institucional:制度批判|estética política:政治美学|ética aplicada:应用伦理|governamentalidade:治理术|biopolítica:生命政治|semiótica social:社会符号学|teoria crítica:批判理论|filosofia da linguagem:语言哲学|história intelectual:思想史|sociologia do conhecimento:知识社会学|antropologia urbana:城市人类学|ecologia política:政治生态|economia comportamental:行为经济学|jurisprudência constitucional:宪法判例学|tecnociência:技术科学|algoritmização:算法化|colonialidade:殖民性|pós-humanismo:后人类主义|fenomenologia:现象学|pragmática discursiva:话语语用学|mediação algorítmica:算法中介|produção de subjetividade:主体性生产|arquivo cultural:文化档案|memória traumática:创伤记忆|justiça restaurativa:修复性正义|soberania digital:数字主权|transição civilizatória:文明转型|complexidade sistêmica:系统复杂性|risco sistêmico:系统性风险|regulação transnacional:跨国监管|imaginação política:政治想象|hegemonia cultural:文化霸权|conflito distributivo:分配冲突|epistemicídio:认识灭绝|cosmopolitismo crítico:批判世界主义|ética da alteridade:他者伦理|semiotização:符号化|governança algorítmica:算法治理|realismo crítico:批判实在论|teoria dos afetos:情感理论|cognição situada:情境认知|disputa hermenêutica:阐释争议|paradigma civilizatório:文明范式|imaginação sociológica:社会学想象'),
    example: term => `A conferência explorou a ${term} em perspectiva comparada.`,
  },
};

function buildSupplementalVocabularyDecks(baseDecks: VocabularyDeck[]) {
  const existingWords = new Set(baseDecks.flatMap(deck => deck.words.map(word => word.pt.toLocaleLowerCase('pt-BR'))));
  const decks: VocabularyDeck[] = [];

  for (const level of ['A1','A2','B1','B2','C1','C2'] as CEFRLevel[]) {
    const targetDeckCount = level === 'A1' ? A1_TARGET_DAILY_DECKS : TARGET_DAILY_DECKS_PER_LEVEL;
    const neededDecks = targetDeckCount;
    const config = supplementalVocabularySeeds[level];
    const words: VocabularyWord[] = [];
    const directTerms = uniqueSingleWordTerms([...config.bases, ...config.topics]);
    const candidateTerms: TermSeed[] = [...directTerms, ...directTerms.map(pluralizeTerm)];
    const prefixes = productivePrefixes[level];
    let prefixIndex = 0;

    while (candidateTerms.length < neededDecks * 12) {
      const source = directTerms[candidateTerms.length % directTerms.length];
      candidateTerms.push(prefixedTerm(prefixes[prefixIndex % prefixes.length], source));
      prefixIndex += 1;
    }

    for (const term of candidateTerms) {
      const key = term.pt.toLocaleLowerCase('pt-BR');
      if (!isSingleWordTerm(term.pt) || existingWords.has(key)) continue;
      existingWords.add(key);
      words.push({ pt: term.pt, zh: term.zh, example: config.example(term.pt) });
      if (words.length >= neededDecks * 10) break;
    }

    if (words.length < neededDecks * 10) {
      for (const prefix of prefixes) {
        for (const term of directTerms) {
          const derived = prefixedTerm(prefix, term);
          const key = derived.pt.toLocaleLowerCase('pt-BR');
          if (!isSingleWordTerm(derived.pt) || existingWords.has(key)) continue;
          existingWords.add(key);
          words.push({ pt: derived.pt, zh: derived.zh, example: config.example(derived.pt) });
          if (words.length >= neededDecks * 10) break;
        }
        if (words.length >= neededDecks * 10) break;
      }
    }

    for (let index = 0; index < neededDecks; index += 1) {
      const topicNames = supplementalTopicNames[level];
      decks.push({
        level,
        topicZh: `${topicNames.zh[index % topicNames.zh.length]} ${index + 1}`,
        topicPt: `${topicNames.pt[index % topicNames.pt.length]} ${index + 1}`,
        words: words.slice(index * 10, index * 10 + 10),
      });
    }
  }

  return decks;
}

const supplementalVocabularyDecks = buildSupplementalVocabularyDecks(baseVocabularyDecks);

function buildDailyVocabularyDecks() {
  const decks: VocabularyDeck[] = [];

  for (const level of ['A1','A2','B1','B2','C1','C2'] as CEFRLevel[]) {
    const targetDeckCount = level === 'A1' ? A1_TARGET_DAILY_DECKS : TARGET_DAILY_DECKS_PER_LEVEL;
    const topicNames = supplementalTopicNames[level];
    const seen = new Set<string>();
    const words = [...baseVocabularyDecks, ...supplementalVocabularyDecks]
      .filter(deck => deck.level === level)
      .flatMap(deck => deck.words)
      .filter(word => {
        const key = word.pt.toLocaleLowerCase('pt-BR');
        if (!isSingleWordTerm(word.pt) || seen.has(key)) return false;
        seen.add(key);
        return true;
      });

    for (let index = 0; index < targetDeckCount; index += 1) {
      decks.push({
        level,
        topicZh: `${topicNames.zh[index % topicNames.zh.length]} ${index + 1}`,
        topicPt: `${topicNames.pt[index % topicNames.pt.length]} ${index + 1}`,
        words: words.slice(index * 10, index * 10 + 10),
      });
    }
  }

  return decks;
}

export const vocabularyDecks: VocabularyDeck[] = buildDailyVocabularyDecks();
