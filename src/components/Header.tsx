import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { navItems, business, whatsappLink } from '@/data/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/95 backdrop-blur-lg shadow-lg shadow-black/50 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img src="/janga-bike-logo.png" alt="Janga Bike" className="h-11 w-11 rounded-xl object-cover transition-transform group-hover:scale-110" />
            <div className="leading-none">
              <span className="block font-display text-xl tracking-wide text-white">
                JANGA<span className="text-brand-500"> BIKE</span>
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-ink-400">
                Loja de Bicicleta
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-ink-200 transition-colors hover:text-white group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-brand-500 transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
          </nav>

          {/* WhatsApp CTA */}
          <div className="hidden lg:block">
            <a
              href={whatsappLink('Olá! Vim pelo site e gostaria de falar com a Janga Bike.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-ink-950 shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-400 hover:shadow-brand-500/50 hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
              Chamar no WhatsApp
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-800 text-white lg:hidden transition-colors hover:bg-ink-700"
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            mobileOpen ? 'max-h-96 mt-3' : 'max-h-0'
          }`}
        >
          <nav className="glass rounded-2xl p-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-ink-200 transition-colors hover:bg-ink-800 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink('Olá! Vim pelo site e gostaria de falar com a Janga Bike.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-3 text-sm font-bold text-ink-950 transition-colors hover:bg-brand-400"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
              Chamar no WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
