import { Star, Quote, ExternalLink } from 'lucide-react';
import { reviews, business } from '@/data/site';

export default function Reviews() {
  return (
    <section id="avaliacoes" className="relative py-20 sm:py-28 bg-ink-900 overflow-hidden">
      <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-accent-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 mb-5">
            <span className="text-xs font-semibold tracking-wide text-brand-300">AVALIAÇÕES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl tracking-wide text-white leading-tight">
            QUEM CONFIA, <span className="text-gradient-brand">RECOMENDA</span>
          </h2>

          {/* Rating summary */}
          <div className="mt-6 inline-flex items-center gap-4 rounded-2xl border border-ink-700 bg-ink-800/50 px-6 py-4">
            <div className="text-center">
              <p className="font-display text-4xl text-white">{business.googleRating}</p>
              <div className="mt-1 flex items-center justify-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${
                      i <= Math.floor(business.googleRating)
                        ? 'fill-brand-400 text-brand-400'
                        : i === Math.ceil(business.googleRating) && business.googleRating % 1 >= 0.3
                        ? 'fill-brand-400/50 text-brand-400'
                        : 'text-ink-600'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-ink-700" />
            <div className="text-left">
              <p className="font-bold text-white">{business.googleReviewsCount} avaliações</p>
              <p className="text-sm text-ink-200">no Google</p>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl border border-ink-700 bg-ink-800/50 p-6 transition-all hover:border-brand-500 hover:bg-ink-800"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-ink-700 transition-colors group-hover:text-brand-500/30" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i <= review.rating
                        ? 'fill-brand-400 text-brand-400'
                        : 'text-ink-600'
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-ink-300 leading-relaxed mb-6 relative z-10">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-ink-700">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${review.color} font-bold text-ink-950`}>
                  {review.initial}
                </div>
                <div>
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-xs text-ink-200">{review.date} · {review.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href={business.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink-600 px-6 py-3 text-sm font-bold text-white transition-all hover:border-brand-500 hover:bg-ink-800"
          >
            Ver todas as avaliações no Google
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
