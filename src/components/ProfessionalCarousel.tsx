'use client';

import React, { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
// import Image from 'next/image';

interface CarouselSlide {
  src: string;
  alt: string;
  label: string;
  description?: string;
}

interface ProfessionalCarouselProps {
  slides: CarouselSlide[];
  autoAdvanceInterval?: number; // in ms, defaults to 6000
}

const ProfessionalCarousel: React.FC<ProfessionalCarouselProps> = ({
  slides,
  autoAdvanceInterval = 6000,
}) => {
  const [active, setActive] = useState<number>(0);
  const total = slides.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance slides, clear on unmount or manual change
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % total);
    }, autoAdvanceInterval);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, autoAdvanceInterval, total]);

  // Keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'ArrowLeft') {
      setActive((prev) => (prev - 1 + total) % total);
    }
    if (e.key === 'ArrowRight') {
      setActive((prev) => (prev + 1) % total);
    }
  };

  // Accessible indicator click
  const handleIndicatorClick = (index: number) => {
    setActive(index);
  };

  return (
    <div
      className="relative w-full max-w-4xl mx-auto rounded-xl shadow-xl overflow-hidden mb-4"
      aria-label="Professional Slideshow"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="region"
    >
      {/* Slides */}
      <div className="relative h-64 md:h-96 flex items-center justify-center bg-slate-100">
        {slides.map((slide, idx) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ${active === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            aria-hidden={active !== idx}
          >
            {/* <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="rounded-xl object-cover"
              priority={idx === 0}
            /> */}
            <img
                src={slide.src}
                alt={slide.alt}
                className="rounded-xl object-cover absolute inset-0 w-full h-full"
                sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center pointer-events-none">
              <div className="text-white text-lg bg-black/40 px-4 py-2 rounded">
                <span className="font-semibold">{slide.label}</span>
                {slide.description && (
                  <span className="ml-2 text-sm">{slide.description}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Arrows */}
      <button
        type="button"
        aria-label="Previous Slide"
        className="absolute top-1/2 left-3 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow focus:outline-none"
        onClick={() => setActive((prev) => (prev - 1 + total) % total)}
      >
        &#8592;
      </button>
      <button
        type="button"
        aria-label="Next Slide"
        className="absolute top-1/2 right-3 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow focus:outline-none"
        onClick={() => setActive((prev) => (prev + 1) % total)}
      >
        &#8594;
      </button>
      {/* Indicators */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            tabIndex={0}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full border border-white transition ${active === idx ? 'bg-blue-600' : 'bg-white/50'}`}
            onClick={() => handleIndicatorClick(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalCarousel;
