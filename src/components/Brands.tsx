import { business } from '@/data/site';

const brandLogos: Record<string, string> = {
  'Oggi Bikes': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqOR8VHC7AfYhWZYg-4bXK9by2EoG57L3s4NiVm7IfRQ&s',
  'Caloi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdvwv1o_Jk86Fvp-qUaSlTukKQbB8qkXI5MtxQVVq-Q&s=10',
  'Athor Bikes': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS6Xsi3U5_ZFQYYArFpA-8-PvlpDBPvMzzVCJoSeMIEWbGEzGhP25M9fU&s=10',
  'Hupi Bikes': 'https://blog.hupishop.com.br/wp-content/uploads/2017/05/HUPI-Logo-1.jpg',
  'Absolute': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGz3hFFAs8LD3dtqJrLX_uC7fJeAd-cZ2ECeoqP_fScdxYVeTQqh0ggfF&s=10',
};

export default function Brands() {
  const brands = [...business.brands, ...business.brands];

  return (
    <section className="relative py-16 bg-ink-900 overflow-hidden border-y border-ink-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold tracking-wide text-brand-300">PARCEIROS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl tracking-wide text-white">
            MARCAS QUE <span className="text-gradient-brand">CONFIAM NA GENTE</span>
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-6">
          {brands.map((brand, idx) => (
            <div
              key={`${brand}-${idx}`}
              className="flex items-center justify-center rounded-2xl border border-ink-700 bg-ink-800 px-10 py-6 min-w-[220px] transition-all hover:border-brand-500"
            >
              <img
                src={brandLogos[brand]}
                alt={brand}
                className="h-14 w-auto max-w-[160px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-ink-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-ink-900 to-transparent" />
      </div>
    </section>
  );
}
