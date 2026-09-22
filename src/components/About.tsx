import { Users, Star, MapPin, Bike, ShieldCheck, Tag } from 'lucide-react';
import { business, aboutImage } from '@/data/site';
import { useInstagramFollowers, formatFollowers } from '@/hooks/useInstagramFollowers';

const differentials = [
  {
    icon: Tag,
    title: 'Melhor preço',
    description: 'Preço justo em bikes, peças e acessórios — sempre.',
  },
  {
    icon: Bike,
    title: 'Variedade enorme',
    description: 'Bikes de estrada, mountain, infantis e muito mais.',
  },
  {
    icon: ShieldCheck,
    title: 'Qualidade garantida',
    description: 'Marcas confiáveis e serviço técnico de excelência.',
  },
];

export default function About() {
  const { followers } = useInstagramFollowers();
  const followersDisplay = formatFollowers(followers);

  return (
    <section id="sobre" className="relative py-20 sm:py-28 bg-ink-950 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={aboutImage}
                alt="Loja de bicicletas Janga Bike"
                className="w-full h-[400px] sm:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 glass rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500">
                  <Users className="h-6 w-6 text-ink-950" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{followersDisplay}</p>
                  <p className="text-xs text-ink-200">seguidores no Instagram</p>
                </div>
              </div>
            </div>

            {/* Rating badge */}
            <div className="absolute -top-4 -left-2 sm:left-6 glass rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500">
                  <Star className="h-6 w-6 text-ink-950 fill-ink-950" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{business.googleRating}/5</p>
                  <p className="text-xs text-ink-200">{business.googleReviewsCount} avaliações</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 mb-5">
              <span className="text-xs font-semibold tracking-wide text-brand-300">SOBRE A LOJA</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl tracking-wide text-white leading-tight">
              NOSSA HISTÓRIA <br /><span className="text-gradient-brand">É PEDALAR COM VOCÊ</span>
            </h2>

            <p className="mt-6 text-ink-300 leading-relaxed text-lg">
              A Janga Bike nasceu no coração do Janga, em Paulista-PE, com uma missão
              simples: levar preço, variedade e qualidade para quem ama pedalar. Somos
              uma bicicletaria de bairro que virou referência na região, com mais de{' '}
              <span className="font-semibold text-white">{followersDisplay} seguidores</span> no
              Instagram e <span className="font-semibold text-white">{business.googleReviewsCount} avaliações</span>{' '}
              positivas no Google.
            </p>

            <p className="mt-4 text-ink-200 leading-relaxed">
              Trabalhamos com as melhores marcas do mercado — Oggi, Caloi, Athor, Hupi e
              Absolute — e oferecemos serviço completo de manutenção, revisão e montagem.
              Aqui você encontra a bike certa para o seu jeito de andar.
            </p>

            {/* Differentials */}
            <div className="mt-8 space-y-4">
              {differentials.map((d) => (
                <div key={d.title} className="flex items-start gap-4 group">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-800 border border-ink-700 transition-all group-hover:border-brand-500 group-hover:bg-brand-500/10">
                    <d.icon className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{d.title}</h3>
                    <p className="text-sm text-ink-200">{d.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Address */}
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-ink-800 bg-ink-900/50 p-4">
              <MapPin className="h-5 w-5 shrink-0 text-brand-400" />
              <p className="text-sm text-ink-300">{business.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
