"use client";
import { useRef, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Fiona Batchelor",
    date: "3 years ago",
    rating: 5,
    text: "I can't recommend Superstructures services high enough. They have been absolutely brilliant. We are so delighted with our kitchen. Everyone — carpenter, painters, plumbers, tilers and electricians were so professional and very patient with me. A big thanks to Paul — he was always there on the day, guiding and overseeing the work. You couldn't find anyone better to fit your kitchen.",
    initials: "F",
    color: "bg-red-500",
  },
  {
    name: "Suzanne Knight",
    date: "2 years ago",
    rating: 5,
    text: "I can't thank Superstructure Services Ltd enough for what they did to my house — they were amazing! He took on the job of undoing inferior work and finished all rooms to a very high standard. The carpenters, kitchen fitters, bathroom fitters, electrician, decorators and plumber were each so experienced and knowledgeable. I love my home now.",
    initials: "S",
    color: "bg-blue-500",
  },
  {
    name: "Katrin Niewerth",
    date: "3 years ago",
    rating: 5,
    text: "We renovated an entire house with Paul and his team — completely new electrics, floors, windows/doors, kitchen and bathroom installation, carpentry and decorating. The quality of work was outstanding in every aspect. He is responding on messages within minutes, is very knowledgeable, helpful and friendly. I can highly recommend Paul and his company.",
    initials: "K",
    color: "bg-green-600",
  },
  {
    name: "James Hounsell",
    date: "1 year ago",
    rating: 5,
    text: "Incredible service and exceptional finish. Paul designed and enhanced our TV set up. He was also so neat and tidy. 100% recommended, super quality and trustworthy.",
    initials: "J",
    color: "bg-purple-600",
  },
  {
    name: "Alison Hicks",
    date: "9 months ago",
    rating: 5,
    text: "Paul and his team at Superstructure Services have been brilliant at helping maintain our buildings. They've undertaken plumbing, carpentry, decorating, electrical work and a variety of small maintenance tasks, and the standard of work is consistently high, with Paul giving sound advice on the best way forward.",
    initials: "A",
    color: "bg-orange-500",
  },
  {
    name: "Ruari Batchelor",
    date: "7 months ago",
    rating: 5,
    text: "I have used Paul and his team for a few years now for a number of different jobs and projects. I have always been impressed with their professionalism, support and the quality of the work. I would highly recommend.",
    initials: "R",
    color: "bg-teal-600",
  },
  {
    name: "Stuart Axford",
    date: "3 years ago",
    rating: 5,
    text: "Paul did an excellent job building and installing some bespoke bookshelves for us. Not only did he do an excellent job, but he treated our house with respect, used clean dustsheets and cleaned thoroughly up after himself. We already have him down for another job.",
    initials: "S",
    color: "bg-indigo-600",
  },
  {
    name: "Danielle Luckhurst",
    date: "4 years ago",
    rating: 5,
    text: "Just wanted to say a big thank you to Paul and his team. We are so happy with our new kitchen and the installation went very smoothly. Hope to see you all again on our next project!",
    initials: "D",
    color: "bg-pink-600",
  },
];

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" aria-label="Google">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export default function GoogleReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPausedRef = useRef(false);
  const CARD_WIDTH = 276; // 260px card + 16px gap

  const pauseFor = (ms: number) => {
    isPausedRef.current = true;
    setTimeout(() => { isPausedRef.current = false; }, ms);
  };

  const scroll = useCallback((dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    pauseFor(4000);
    el.scrollBy({ left: dir === "right" ? CARD_WIDTH : -CARD_WIDTH, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Auto-scroll: move one card every 3 seconds
    autoScrollRef.current = setInterval(() => {
      if (isPausedRef.current) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });
      }
    }, 3000);

    // Pause auto-scroll on any touch or mouse interaction
    const onTouchStart = () => pauseFor(5000);
    const onMouseEnter = () => { isPausedRef.current = true; };
    const onMouseLeave = () => { isPausedRef.current = false; };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("mouseenter", onMouseEnter);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("mouseenter", onMouseEnter);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <section className="bg-[#1a1a2e] pt-6 pb-0 lg:pt-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-6 lg:gap-10">

          {/* Left — rating summary */}
          <div className="w-full lg:w-auto flex flex-row lg:flex-col items-center justify-between lg:justify-center text-center lg:min-w-[180px] lg:border-r lg:border-white/10 lg:pr-10 pb-4 lg:pb-0 border-b lg:border-b-0 border-white/10">
            <div className="flex flex-col items-start lg:items-center">
              <p className="text-white font-black text-lg lg:text-xl tracking-widest uppercase mb-1 lg:mb-2">Excellent</p>
              <div className="flex gap-0.5 mb-1 lg:mb-2">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={20} className="fill-[#f5a623] text-[#f5a623]" />
                ))}
              </div>
              <p className="text-gray-400 text-xs lg:text-sm mb-2 lg:mb-3">Based on 12 reviews</p>
              <div className="flex items-center gap-1.5">
                <GoogleIcon />
                <span className="text-white font-bold text-base lg:text-lg tracking-tight">Google</span>
              </div>
            </div>
            {/* Arrow controls */}
            <div className="flex items-center gap-3 lg:mt-6">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous reviews"
                className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all duration-200"
              >
                <ChevronLeft size={18} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next reviews"
                className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all duration-200"
              >
                <ChevronRight size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Right — review cards scrollable row (no scrollbar) */}
          <div 
            ref={scrollRef} 
            className="flex-1 flex gap-4 overflow-x-auto pb-4 scrollbar-hide min-w-0"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          >
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-[#111111] rounded-xl p-4 flex flex-col gap-3 border border-white/5 min-w-[260px] max-w-[260px] sm:min-w-[280px] sm:max-w-[280px] flex-shrink-0"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {review.initials}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm leading-tight">{review.name}</p>
                      <p className="text-gray-500 text-xs">{review.date}</p>
                    </div>
                  </div>
                  <GoogleIcon />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={13} className="fill-[#f5a623] text-[#f5a623]" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-4">
                  {review.text}
                </p>

                <a
                  href="https://www.google.com/maps/search/Superstructure+Services+Ltd+Canterbury+Kent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4a9ebb] text-xs hover:underline mt-auto"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
