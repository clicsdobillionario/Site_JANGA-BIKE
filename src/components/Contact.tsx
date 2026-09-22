import { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Instagram, Navigation, Send } from 'lucide-react';
import { business, whatsappLink } from '@/data/site';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${form.name}. Meu telefone: ${form.phone}. ${form.message}`;
    window.open(whatsappLink(msg), '_blank');
  };

  return (
    <section id="contato" className="relative py-20 sm:py-28 bg-ink-950 overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 mb-5">
            <span className="text-xs font-semibold tracking-wide text-brand-300">CONTATO</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl tracking-wide text-white leading-tight">
            VEM FALAR <span className="text-gradient-brand">COM A GENTE</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: info + form */}
          <div className="space-y-6">
            {/* Info cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-ink-800 bg-ink-900/50 p-5 transition-all hover:border-brand-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10">
                    <MapPin className="h-5 w-5 text-brand-400" />
                  </div>
                  <h3 className="font-bold text-white text-sm">Endereço</h3>
                </div>
                <p className="text-sm text-ink-200 leading-relaxed">{business.address}</p>
              </div>

              <div className="rounded-2xl border border-ink-800 bg-ink-900/50 p-5 transition-all hover:border-brand-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10">
                    <Phone className="h-5 w-5 text-brand-400" />
                  </div>
                  <h3 className="font-bold text-white text-sm">Telefone</h3>
                </div>
                <a href={`tel:+55${business.whatsappNumber}`} className="text-sm text-ink-200 hover:text-brand-400 transition-colors">
                  {business.phone}
                </a>
              </div>

              <div className="rounded-2xl border border-ink-800 bg-ink-900/50 p-5 transition-all hover:border-brand-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10">
                    <Clock className="h-5 w-5 text-brand-400" />
                  </div>
                  <h3 className="font-bold text-white text-sm">Horário</h3>
                </div>
                <ul className="space-y-0.5">
                  {business.hours.map((h) => (
                    <li key={h.day} className="text-xs text-ink-200">
                      <span className="text-ink-300">{h.day}:</span> {h.hours}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-ink-800 bg-ink-900/50 p-5 transition-all hover:border-brand-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10">
                    <Instagram className="h-5 w-5 text-brand-400" />
                  </div>
                  <h3 className="font-bold text-white text-sm">Instagram</h3>
                </div>
                <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-ink-200 hover:text-brand-400 transition-colors">
                  {business.instagram}
                </a>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="rounded-2xl border border-ink-800 bg-ink-900/50 p-6">
              <h3 className="font-bold text-white mb-4">Envie sua mensagem</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-ink-700 bg-ink-800 px-4 py-3 text-sm text-white placeholder-ink-500 outline-none transition-colors focus:border-brand-500"
                />
                <input
                  type="tel"
                  required
                  placeholder="Seu telefone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl border border-ink-700 bg-ink-800 px-4 py-3 text-sm text-white placeholder-ink-500 outline-none transition-colors focus:border-brand-500"
                />
                <textarea
                  required
                  placeholder="Sua mensagem"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-ink-700 bg-ink-800 px-4 py-3 text-sm text-white placeholder-ink-500 outline-none transition-colors focus:border-brand-500 resize-none"
                />
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-bold text-ink-950 transition-all hover:bg-brand-400 hover:scale-[1.02]"
                >
                  <Send className="h-4 w-4" strokeWidth={2.5} />
                  Enviar pelo WhatsApp
                </button>
              </div>
            </form>
          </div>

          {/* Right: map + buttons */}
          <div className="space-y-6">
            {/* Map */}
            <div className="overflow-hidden rounded-3xl border border-ink-800 h-[400px]">
              <iframe
                src="https://www.google.com/maps?q=Av.+Dr.+Claudio+Jose+Gueiros+Leite,+2701+-+Janga,+Paulista+-+PE,+53437-000&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Janga Bike"
              />
            </div>

            {/* Action buttons */}
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={whatsappLink('Olá! Vim pelo site da Janga Bike e gostaria de falar com vocês.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-brand-500 px-6 py-4 text-sm font-bold text-ink-950 transition-all hover:bg-brand-400 hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
                Chamar no WhatsApp
              </a>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border-2 border-ink-600 px-6 py-4 text-sm font-bold text-white transition-all hover:border-brand-500 hover:bg-ink-800"
              >
                <Navigation className="h-5 w-5" strokeWidth={2.5} />
                Como chegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
