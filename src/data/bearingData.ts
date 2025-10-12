// Dados dos rolamentos para busca e exibição

export interface BearingTag {
  icon: string;
  title: string;
}

export interface BearingItem {
  id: string;
  imgSrc: string;
  title: string;
  description: string;
  tags: BearingTag[];
  highlight?: boolean;
}

// Função helper para obter paths das imagens (só aplica no browser)
const getBearingImagePath = (imageName: string): string => {
  const basePath = '/images/LM/rolamentos/'
  const fullPath = `${basePath}${imageName}`
  
  // Only apply path correction in browser
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname
    const pathname = window.location.pathname
    
    if (hostname.includes('github.io') || pathname.startsWith('/landingpage')) {
      return `/landingpage${fullPath}`
    }
  }
  
  return fullPath
}

export const bearingData: BearingItem[] = [
  {
    id: 'rolamento-axial-de-rolos',
    imgSrc: getBearingImagePath('axial-rolos.webp'),
    title: 'ROLAMENTO AXIAL DE ROLOS',
    description: 'Elemento de máquina destinado a suportar cargas axiais elevadas em uma única direção. Utiliza corpos rolantes em forma de cilindros (roletes) dispostos entre pistas planas ou ligeiramente côncavas, garantindo contato linear e maior capacidade de carga em comparação aos rolamentos axiais de esferas.',
    highlight: true,
    tags: [
      { icon: "ri-weight-line", title: 'Altas cargas' },
      { icon: "ri-shield-line", title: 'Proteção do eixo' },
    ],
  },
  {
    id: 'rolamento-autocompensador-de-rolos',
    imgSrc: getBearingImagePath('autocompensador-rolos.webp'),
    title: 'ROLAMENTO AUTOCOMPENSADOR DE ROLOS',
    description: 'Rolamento projetado para suportar cargas elevadas e se ajustar automaticamente a desalinhamentos entre o eixo e o mancal. Ele é composto por dois anéis, gaiola e rolos em formato de barril, distribuídos simetricamente, o que permite que suporte tanto cargas radiais pesadas quanto cargas axiais moderadas em ambas as direções.',
    tags: [
      { icon: "ri-weight-line", title: 'Altas cargas' },
      { icon: "ri-compasses-line", title: 'Autocompensação ' },
    ],
  },
  {
    id: 'rolamento-autocompensador-de-esferas',
    imgSrc: getBearingImagePath('autocompensador-esferas.webp'),
    title: 'ROLAMENTO AUTOCOMPENSADOR DE ESFERAS',
    description: 'Esse tipo de rolamento possui duas fileiras de esferas guiadas por uma pista esférica no anel externo. Essa geometria permite que ele compense automaticamente desalinhamentos angulares, tornando-o muito eficiente em situações onde o eixo pode estar ligeiramente torto ou desalinhado em relação ao mancal.',
    tags: [
      { icon: "ri-flashlight-line", title: 'Baixa fricção' },
      { icon: "ri-weight-line", title: 'Carga radial e axial' },
    ],
  },
  {
    id: 'rolamento-axial-de-esferas',
    imgSrc: getBearingImagePath('axial-esferas.webp'),
    title: 'ROLAMENTO AXIAL DE ESFERAS',
    description: 'Rolamento projetado especificamente para suportar cargas axiais (na direção do eixo), sem ser adequado para cargas radiais significativas.',
    tags: [
      { icon: "ri-speed-up-line ", title: 'Velocidade' },
      { icon: "ri-flashlight-line", title: 'Baixa fricção' },
    ],
  },
  {
    id: 'rotulas',
    imgSrc: getBearingImagePath('rotulas.webp'),
    title: 'RÓTULAS',
    description: 'As rótulas são tipos especiais de rolamentos que permitem movimento angular entre duas partes, funcionando como uma junta esférica. Elas são usadas em situações em que há necessidade de transmitir força e ao mesmo tempo permitir deslocamentos angulares, acomodando desalinhamentos e vibrações.',
    tags: [
      { icon: "ri-equalizer-2-line", title: 'Versátil' },
      { icon: "ri-time-line", title: 'Durabilidade' },
    ],
  },
  {
    id: 'rolamento-de-giro-engrenado-externo',
    imgSrc: getBearingImagePath('giro_engrenado_externo.webp'),
    title: 'ROLAMENTO DE GIRO ENGRENADO EXTERNO',
    description: 'Rolamento de grande diâmetro (rolamento de giro ou slewing bearing) que possui dentes de engrenagem na face externa do anel.Isso permite que o giro seja feito por meio do acoplamento direto de um pinhão ao anel externo, transmitindo torque de forma eficiente sem precisar de engrenagens adicionais.',
    tags: [
      { icon: "ri-weight-line", title: 'Alta resistência' },
      { icon: "ri-time-line", title: 'Durabilidade' },
    ],
  },
  {
    id: 'rolamento-de-giro-engrenado-interno',
    imgSrc: getBearingImagePath('giro_engrenado_interno.webp'),
    title: 'ROLAMENTO DE GIRO ENGRENADO INTERNO',
    description: 'É um tipo de rolamento de giro de grande porte, projetado para suportar cargas combinadas (axiais, radiais e momentos de tombamento).ele possui dentes de engrenagem usinados na pista interna, permitindo que um pinhão se acople por dentro, transmitindo o torque.'
    , tags: [
      { icon: "ri-focus-3-line", title: 'Precisão' },
      { icon: "ri-time-line", title: 'Durabilidade' },
    ],
  },
  {
    id: 'rolamento-conico',
    imgSrc: getBearingImagePath('conico.webp'),
    title: 'ROLAMENTO CÔNICO',
    description: 'formado por roletes em formato de cone que trabalham entre pistas também cônicas. Essa geometria faz com que ele suporte cargas combinadas (radiais e axiais) de forma eficiente.',
    tags: [
      { icon: "ri-weight-line", title: 'Altas cargas' },
      { icon: "ri-equalizer-2-line", title: 'Versátil' },
    ],
  },
  {
    id: 'rolamento-de-rolos-agulha',
    imgSrc: getBearingImagePath('rolos-agulha.webp'),
    title: 'ROLAMENTO DE ROLOS AGULHA',
    description: 'É um tipo de rolamento composto por roletes cilíndricos muito finos e longos (como agulhas), com diâmetro pequeno em relação ao comprimento. Essa configuração permite alta capacidade de carga radial em um espaço reduzido, sendo ideal para aplicações onde o espaço é limitado.',
    tags: [
      { icon: "ri-flashlight-line", title: 'Baixa fricção' },
      { icon: "ri-weight-line", title: 'Altas cargas' },
    ],
  },
];

// Função para buscar rolamentos
export function searchBearings(query: string): BearingItem[] {
  if (!query.trim()) {
    return [];
  }

  const searchTerm = query.toLowerCase();
  
  return bearingData.filter(bearing => 
    bearing.title.toLowerCase().includes(searchTerm) ||
    bearing.description.toLowerCase().includes(searchTerm) ||
    bearing.tags.some(tag => tag.title.toLowerCase().includes(searchTerm))
  );
}