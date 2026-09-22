import { MessageCircle, ChevronDown, Star, MapPin } from 'lucide-react';
import { business, whatsappLink, heroImage } from '@/data/site';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mountain bike em trilha"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/30" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute bottom-1/4 left-10 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 mb-6 animate-fade-in">
            <MapPin className="h-3.5 w-3.5 text-brand-400" />
            <span className="text-xs font-semibold tracking-wide text-brand-300">
              BICICLETARIA EM PAULISTA — PE
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-wide text-white animate-fade-up">
            SUA BIKE,
            <br />
            <span className="text-gradient-brand">SEU JEITO</span>
            <br />
            DE IR MAIS LONGE
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-ink-300 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {business.slogan}. Bicicletas, peças, acessórios e serviço de manutenção
            com quem entende de verdade — no coração do Janga.
          </p>

          {/* Rating badge */}
          <div className="mt-6 flex items-center gap-3 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i <= Math.round(business.googleRating) ? 'fill-brand-400 text-brand-400' : 'text-ink-600'}`}
                />
              ))}
            </div>
            <span className="text-sm text-ink-300">
              <span className="font-bold text-white">{business.googleRating}/5</span> · {business.googleReviewsCount} avaliações no Google
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a
              href={whatsappLink('Olá! Vim pelo site da Janga Bike e gostaria de falar sobre bicicletas.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 rounded-full bg-brand-500 px-7 py-4 text-base font-bold text-ink-950 shadow-xl shadow-brand-500/30 transition-all hover:bg-brand-400 hover:shadow-brand-500/50 hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
              Falar no WhatsApp
            </a>
            <a
              href="#produtos"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-ink-600 bg-ink-900/50 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:border-brand-500 hover:bg-ink-800"
            >
              Ver produtos
              <ChevronDown className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <div className="flex flex-col items-center gap-1 text-ink-400">
          <span className="text-[10px] uppercase tracking-[0.2em]">Role para descobrir</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
