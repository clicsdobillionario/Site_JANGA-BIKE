import { ArrowRight, MessageCircle } from 'lucide-react';
import { categories, whatsappLink } from '@/data/site';

export default function Categories() {
  return (
    <section id="produtos" className="relative py-20 sm:py-28 bg-ink-900 overflow-hidden">
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-accent-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 mb-5">
            <span className="text-xs font-semibold tracking-wide text-brand-300">PRODUTOS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl tracking-wide text-white leading-tight">
            CATEGORIAS DE <span className="text-gradient-brand">PRODUTOS</span>
          </h2>
          <p className="mt-4 text-ink-400 text-lg">
            Encontre a bike perfeita ou o acessório ideal. Clique e fale com a gente no WhatsApp.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <a
              key={cat.title}
              href={whatsappLink(cat.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl bg-ink-800 border border-ink-700 transition-all duration-300 hover:border-brand-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-500/10"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative -mt-16 p-6">
                <h3 className="font-display text-2xl tracking-wide text-white mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-ink-200 leading-relaxed mb-4">
                  {cat.description}
                </p>
                <div className="flex items-center gap-2 text-brand-400 font-semibold text-sm transition-colors group-hover:text-brand-300">
                  <MessageCircle className="h-4 w-4" />
                  <span>{cat.cta}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}

          {/* CTA card */}
          <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-ink-700 bg-ink-900/50 p-8 text-center transition-all hover:border-brand-500 hover:bg-brand-500/5">
            <p className="text-ink-300 mb-4">Não encontrou o que procura?</p>
            <a
              href={whatsappLink('Olá! Estou procurando um produto que não vi no site. Pode me ajudar?')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-ink-950 transition-all hover:bg-brand-400 hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
              Falar com a loja
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
