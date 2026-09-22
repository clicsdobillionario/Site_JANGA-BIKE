export const business = {
  name: 'Janga Bike',
  fullName: 'Janga Bike | Loja de Bicicleta',
  slogan: 'Preço, Variedade e Qualidade',
  tagline: 'Sua bike, seu jeito de ir mais longe',
  address: 'Av. Dr. Cláudio José Gueiros Leite, 2701 - Janga, Paulista - PE, 53437-000',
  phone: '(81) 99901-4382',
  whatsappNumber: '5581999014382',
  instagram: '@jangabike',
  instagramUrl: 'https://www.instagram.com/jangabike',
  followers: '5.600+',
  googleRating: 4.3,
  googleReviewsCount: 214,
  googleReviewsUrl: 'https://maps.app.goo.gl/FcV6Ch9YNLqTCmZJ9',
  mapsUrl: 'https://maps.app.goo.gl/FcV6Ch9YNLqTCmZJ9',
  hours: [
    { day: 'Segunda', hours: 'Fechado' },
    { day: 'Terça a Sexta', hours: '08:00 – 18:00' },
    { day: 'Sábado', hours: '08:00 – 17:00' },
    { day: 'Domingo', hours: '08:00 – 12:00' },
  ],
  brands: ['Oggi Bikes', 'Caloi', 'Athor Bikes', 'Hupi Bikes', 'Absolute'],
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export const categories = [
  {
    title: 'Bikes para Estrada',
    description: 'Velocidade e desempenho para quem ama pedalar no asfalto.',
    image: 'https://images.pexels.com/photos/33763582/pexels-photo-33763582.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    message: 'Olá! Tenho interesse em bikes de estrada. Pode me ajudar?',
    cta: 'Ver opções',
  },
  {
    title: 'Bikes para Montanhas',
    description: 'Aventura e resistência para trilhas e terrenos irregulares.',
    image: 'https://www.maxongroup.com/assets/public/caas/v1/media/48116/data/751dc55b81e69d1223ec6519aa13c6b0/landscape_ratio4x3/607/maxon-thoemus-lightrider-2.jpg',
    message: 'Olá! Tenho interesse em mountain bikes. Pode me ajudar?',
    cta: 'Quero saber mais',
  },
  {
    title: 'Bikes Infantis',
    description: 'Diversão e segurança para os pequenos ciclistas.',
    image: 'https://images.tcdn.com.br/img/img_prod/1023283/bicicleta_infantil_aro_16_pro_x_super_x_vermelha_1_20260528160207_92a18ab56b78.jpg',
    message: 'Olá! Tenho interesse em bikes infantis. Pode me ajudar?',
    cta: 'Ver modelos',
  },
  {
    title: 'Peças e Componentes',
    description: 'Tudo para manter sua bike rodando lisa e com segurança.',
    image: 'https://images.pexels.com/photos/4530854/pexels-photo-4530854.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    message: 'Olá! Tenho interesse em peças e componentes. Pode me ajudar?',
    cta: 'Consultar peças',
  },
  {
    title: 'Acessórios',
    description: 'Capacetes, luzes, garrafas e tudo para pedalar com estilo.',
    image: 'https://images.pexels.com/photos/12956080/pexels-photo-12956080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    message: 'Olá! Tenho interesse em acessórios. Pode me ajudar?',
    cta: 'Ver acessórios',
  },
];

export const services = [
  {
    title: 'Manutenção',
    description: 'Ajustes de câmbio, freio, pneu e corrente para sua bike rodar perfeita.',
    icon: 'wrench',
    message: 'Olá! Preciso de manutenção na minha bike. Como funciona?',
  },
  {
    title: 'Revisão Completa',
    description: 'Diagnóstico completo da sua bicicleta, do quadro aos freios.',
    icon: 'clipboard-check',
    message: 'Olá! Quero agendar uma revisão completa. Que horários têm disponível?',
  },
  {
    title: 'Montagem',
    description: 'Montagem profissional de bikes novas e personalizadas.',
    icon: 'settings',
    message: 'Olá! Preciso de montagem de bike. Pode me passar informações?',
  },
];

export const reviews = [
  {
    name: 'Carlos Eduardo',
    text: 'Atendimento excelente e preço justo! Comprei minha mountain bike lá e saí com tudo certinho. Recomendo demais.',
    rating: 5,
  initial: 'C',
  color: 'bg-brand-500',
  date: 'Há 2 semanas',
  source: 'Google',
  link: 'https://maps.app.goo.gl/FcV6Ch9YNLqTCmZJ9',
  },
  {
    name: 'Juliana Santos',
    text: 'Levei minha bike para revisão e ficou novinha. Os caras entendem muito do que fazem. Variedade enorme de peças.',
    rating: 5,
    initial: 'J',
    color: 'bg-accent-500',
    date: 'Há 1 mês',
    source: 'Google',
    link: 'https://maps.app.goo.gl/FcV6Ch9YNLqTCmZJ9',
  },
  {
    name: 'Pedro Henrique',
    text: 'Melhor bicicletaria da região. Sempre tem o que eu preciso e o preço é o melhor de Paulista. Já sou cliente fiel.',
    rating: 4,
    initial: 'P',
    color: 'bg-ink-500',
    date: 'Há 3 semanas',
    source: 'Google',
    link: 'https://maps.app.goo.gl/FcV6Ch9YNLqTCmZJ9',
  },
];

export const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/20044228/pexels-photo-20044228.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Bicicletas coloridas na cidade',
  },
  {
    url: '/img1.jpg',
    alt: 'Ciclista urbano pedalando',
  },
  {
    url: '/img2.jpg',
    alt: 'Bicicletas estacionadas com arte urbana',
  },
  {
    url: '/img3.jpg',
    alt: 'Bicicletas coloridas com cestos',
  },
  {
    url: '/img4.jpg',
    alt: 'Ciclista na cidade',
  },
  {
    url: '/img5.jpg',
    alt: 'Bicicletas na parede vermelha',
  },
  {
    url: '/img6.jpg',
    alt: 'Ciclista em rua urbana',
  },
  {
    url: '/img7.jpg',
    alt: 'Bicicletas em beco urbano',
  },
];

export const heroImage = '/janga-bike-logo.png';
export const aboutImage = '/img10.png';
export const workshopImage = 'https://images.pexels.com/photos/13122870/pexels-photo-13122870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
