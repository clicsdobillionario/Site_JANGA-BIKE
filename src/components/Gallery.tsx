import { Instagram, Heart } from 'lucide-react';
import { galleryImages, business } from '@/data/site';
import { useInstagramFollowers, formatFollowers } from '@/hooks/useInstagramFollowers';

export default function Gallery() {
  const { followers } = useInstagramFollowers();
  const followersDisplay = formatFollowers(followers);

  return (
    <section className="relative py-20 sm:py-28 bg-ink-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 mb-5">
              <span className="text-xs font-semibold tracking-wide text-brand-300">GALERIA</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl tracking-wide text-white leading-tight">
              O MUNDO DA <span className="text-gradient-brand">JANGA BIKE</span>
            </h2>
          </div>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-full border border-ink-700 bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-brand-500 hover:bg-ink-800"
          >
            <Instagram className="h-5 w-5 text-brand-400" />
            <span>{business.instagram}</span>
            <span className="text-ink-500 group-hover:text-brand-400 transition-colors">→</span>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Video in the large first slot */}
          <div className="group relative overflow-hidden rounded-2xl col-span-2 row-span-2">
            <video
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full min-h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 opacity-0 transition-opacity group-hover:opacity-100">
              <Instagram className="h-4 w-4 text-white" />
              <span className="text-xs font-medium text-white">{business.instagram}</span>
            </div>
          </div>
          {galleryImages.slice(1).map((img, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl ${
                idx === 2 ? 'sm:col-span-2' : ''
              }`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-40 sm:h-[33rem] object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 opacity-0 transition-opacity group-hover:opacity-100">
                <Instagram className="h-4 w-4 text-white" />
                <span className="text-xs font-medium text-white">{business.instagram}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Like banner */}
        <div className="mt-8 flex items-center justify-center gap-2 text-ink-400 text-sm">
          <Heart className="h-4 w-4 text-brand-500 fill-brand-500" />
          <span>
            Siga <span className="font-semibold text-white">{business.instagram}</span> com {followersDisplay} seguidores
          </span>
        </div>
      </div>
    </section>
  );
}
