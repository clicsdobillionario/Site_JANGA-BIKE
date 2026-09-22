import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { whatsappLink } from '@/data/site';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 3000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {/* Tooltip */}
      <div
        className={`absolute bottom-0 right-16 whitespace-nowrap transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-2 rounded-2xl bg-ink-800 border border-ink-700 px-4 py-3 shadow-xl">
          <span className="text-sm font-medium text-white">Fale conosco!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-ink-500 hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Button */}
      <a
        href={whatsappLink('Olá! Vim pelo site da Janga Bike e gostaria de falar com vocês.')}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-all hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
        <MessageCircle className="relative h-7 w-7 text-white" strokeWidth={2.5} />
      </a>
    </div>
  );
}
