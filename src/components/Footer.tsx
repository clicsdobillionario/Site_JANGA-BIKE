import { MapPin, Phone, Instagram, MessageCircle, Heart } from 'lucide-react';
import { business, whatsappLink } from '@/data/site';

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 border-t border-ink-800 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-96 rounded-full bg-brand-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/janga-bike-logo.png" alt="Janga Bike" className="h-11 w-11 rounded-xl object-cover" />
              <div className="leading-none">
                <span className="block font-display text-xl tracking-wide text-white">
                  JANGA<span className="text-brand-500"> BIKE</span>
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-ink-400">
                  Loja de Bicicleta
                </span>
              </div>
            </div>
            <p className="text-sm text-ink-400 leading-relaxed max-w-md">
              {business.slogan}. Sua bicicletaria de confiança no Janga, Paulista-PE.
              Bikes, peças, acessórios e serviço de manutenção.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={whatsappLink('Olá! Vim pelo site da Janga Bike.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-800 border border-ink-700 text-ink-300 transition-all hover:border-brand-500 hover:text-brand-400"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-800 border border-ink-700 text-ink-300 transition-all hover:border-brand-500 hover:text-brand-400"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={`tel:+55${business.whatsappNumber}`}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-800 border border-ink-700 text-ink-300 transition-all hover:border-brand-500 hover:text-brand-400"
                aria-label="Telefone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wide">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-sm text-ink-400 hover:text-brand-400 transition-colors">Início</a></li>
              <li><a href="#produtos" className="text-sm text-ink-400 hover:text-brand-400 transition-colors">Produtos</a></li>
              <li><a href="#servicos" className="text-sm text-ink-400 hover:text-brand-400 transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="text-sm text-ink-400 hover:text-brand-400 transition-colors">Sobre</a></li>
              <li><a href="#avaliacoes" className="text-sm text-ink-400 hover:text-brand-400 transition-colors">Avaliações</a></li>
              <li><a href="#contato" className="text-sm text-ink-400 hover:text-brand-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wide">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand-400" />
                <span className="text-sm text-ink-400">{business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand-400" />
                <a href={`tel:+55${business.whatsappNumber}`} className="text-sm text-ink-400 hover:text-brand-400 transition-colors">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 shrink-0 text-brand-400" />
                <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-ink-400 hover:text-brand-400 transition-colors">
                  {business.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-ink-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} Janga Bike. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-ink-500">
            Feito com <Heart className="h-3 w-3 text-brand-500 fill-brand-500" /> para quem ama pedalar
          </p>
        </div>
      </div>
    </footer>
  );
}
