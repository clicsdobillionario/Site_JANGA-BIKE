import { Wrench, ClipboardCheck, Settings, MessageCircle, ArrowRight } from 'lucide-react';
import { services, whatsappLink, workshopImage } from '@/data/site';

const iconMap: Record<string, typeof Wrench> = {
  wrench: Wrench,
  'clipboard-check': ClipboardCheck,
  settings: Settings,
};

export default function Services() {
  return (
    <section id="servicos" className="relative py-20 sm:py-28 bg-ink-950 overflow-hidden">
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left: workshop image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={workshopImage}
                alt="Oficina de bicicletas Janga Bike"
                className="w-full h-[400px] sm:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
              <p className="text-sm text-ink-300">
                <span className="font-bold text-white">Serviço técnico especializado.</span>{' '}
                Equipamentos profissionais e mecânicos experientes para cuidar da sua bike.
              </p>
            </div>
          </div>

          {/* Right: services */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 mb-5">
              <span className="text-xs font-semibold tracking-wide text-brand-300">SERVIÇOS</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl tracking-wide text-white leading-tight">
              CUIDAMOS DA <span className="text-gradient-brand">SUA BIKE</span>
            </h2>

            <p className="mt-4 text-ink-200 text-lg mb-8">
              Manutenção, revisão e montagem com quem entende. Agende pelo WhatsApp.
            </p>

            <div className="space-y-4">
              {services.map((svc) => {
                const Icon = iconMap[svc.icon] || Wrench;
                return (
                  <div
                    key={svc.title}
                    className="group flex items-start gap-4 rounded-2xl border border-ink-800 bg-ink-900/50 p-5 transition-all hover:border-brand-500 hover:bg-ink-900"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg shadow-brand-500/20 transition-transform group-hover:scale-110">
                      <Icon className="h-6 w-6 text-ink-950" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg">{svc.title}</h3>
                      <p className="text-sm text-ink-200 mt-1">{svc.description}</p>
                      <a
                        href={whatsappLink(svc.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 transition-colors hover:text-brand-300"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        Agendar serviço
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
