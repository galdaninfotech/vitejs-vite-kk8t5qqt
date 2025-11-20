// "use client"

// import React, { useRef, useState, useEffect } from 'react';
// import Image, { type StaticImageData } from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import type { Swiper as SwiperClass } from 'swiper';
// import SwiperCore, Navigation, Pagination, Autoplay, A11y, Keyboard, EffectFade, Lazy from 'swiper';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-fade';
// import 'swiper/css/lazy';

// SwiperCore.use([Navigation, Pagination, Autoplay, A11y, Keyboard, EffectFade, Lazy]);

// export type Slide = {
//   id: string | number;
//   src: string | StaticImageData;
//   alt: string;
//   title?: string;
//   description?: string;
// };

// type Props = {
//   slides: Slide[];
//   autoplayDelay?: number;
//   showControls?: boolean;
//   className?: string;
// };

// export default function SwiperCarousel1({ slides, autoplayDelay = 5000, showControls = true, className = '' }: Props) {
//   const swiperRef = useRef<SwiperClass | null>(null);
//   const [isAutoplayRunning, setIsAutoplayRunning] = useState<boolean>(Boolean(autoplayDelay && autoplayDelay > 0));
//   const [announce, setAnnounce] = useState<string>('');

//   useEffect(() => {
//     setIsAutoplayRunning(Boolean(autoplayDelay && autoplayDelay > 0));
//     if (!autoplayDelay && swiperRef.current) {
//       swiperRef.current.autoplay?.stop();
//     }
//   }, [autoplayDelay]);

//   function handleMouseEnter() {
//     if (swiperRef.current && autoplayDelay) {
//       swiperRef.current.autoplay?.stop();
//       setIsAutoplayRunning(false);
//     }
//   }

//   function handleMouseLeave() {
//     if (swiperRef.current && autoplayDelay) {
//       swiperRef.current.autoplay?.start();
//       setIsAutoplayRunning(true);
//     }
//   }

//   function handleFocusIn() {
//     if (swiperRef.current && autoplayDelay) {
//       swiperRef.current.autoplay?.stop();
//       setIsAutoplayRunning(false);
//     }
//   }

//   function handleFocusOut() {
//     if (swiperRef.current && autoplayDelay) {
//       swiperRef.current.autoplay?.start();
//       setIsAutoplayRunning(true);
//     }
//   }

//   function toggleAutoplay() {
//     if (!swiperRef.current) return;
//     if (isAutoplayRunning) {
//       swiperRef.current.autoplay?.stop();
//       setIsAutoplayRunning(false);
//     } else if (autoplayDelay) {
//       swiperRef.current.autoplay?.start();
//       setIsAutoplayRunning(true);
//     }
//   }

//   function handleSlideChange(swiper: SwiperClass) {
//     const i = typeof swiper.realIndex === 'number' ? swiper.realIndex : 0;
//     const s = slides?.[i];
//     const label = s?.title ?? s?.alt ?? `Slide ${i + 1}`;
//     setAnnounce(`Slide ${i + 1} of ${slides.length}: ${label}`);
//   }

//   function handleSwiperInit(swiper: SwiperClass) {
//     swiperRef.current = swiper;
//     const i = typeof swiper.realIndex === 'number' ? swiper.realIndex : 0;
//     const s = slides?.[i];
//     const label = s?.title ?? s?.alt ?? `Slide ${i + 1}`;
//     setAnnounce(`Slide ${i + 1} of ${slides.length}: ${label}`);
//     if (!autoplayDelay) {
//       swiper.autoplay?.stop();
//       setIsAutoplayRunning(false);
//     }
//   }

//   return (
//     <div
//       className={`relative ${className}`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       onFocus={handleFocusIn}
//       onBlur={handleFocusOut}
//     >
//       <div aria-live="polite" aria-atomic="true" className="sr-only">{announce}</div>

//       <Swiper
//         onSwiper={handleSwiperInit}
//         onSlideChange={handleSlideChange}
//         loop
//         effect="fade"
//         keyboard={{ enabled: true, onlyInViewport: true }}
//         a11y={{ enabled: true, prevSlideMessage: 'Previous slide', nextSlideMessage: 'Next slide' }}
//         navigation={showControls}
//         pagination={{ clickable: true, type: 'bullets' }}
//         autoplay={autoplayDelay && autoplayDelay > 0 ? { delay: autoplayDelay, disableOnInteraction: false } : false}
//         lazy={{ loadPrevNext: true, loadOnTransitionStart: true }}
//         breakpoints={{ 320: { slidesPerView: 1 }, 640: { slidesPerView: 1 }, 1024: { slidesPerView: 1 } }}
//         className="w-full"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id} aria-roledescription="slide">
//             <div className="relative min-h-[220px] md:min-h-[360px] lg:min-h-[520px] w-full">
//               <Image
//                 src={slide.src}
//                 alt={slide.alt}
//                 width={1600}
//                 height={900}
//                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
//                 className="object-cover w-full h-full rounded-md"
//                 priority={false}
//               />

//               {(slide.title || slide.description) && (
//                 <div className="absolute left-4 right-4 bottom-6 md:bottom-12 bg-black bg-opacity-40 backdrop-blur-sm rounded-md p-4 text-white" role="group" aria-label={`${slide.title ?? ''} ${slide.description ?? ''}`}>
//                   {slide.title && <h3 className="text-lg md:text-2xl font-semibold">{slide.title}</h3>}
//                   {slide.description && <p className="text-sm md:text-base mt-1">{slide.description}</p>}
//                 </div>
//               )}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {showControls && (
//         <div className="absolute right-4 top-4 flex items-center gap-2">
//           <button
//             type="button"
//             aria-pressed={isAutoplayRunning}
//             aria-label={isAutoplayRunning ? 'Pause slideshow' : 'Play slideshow'}
//             onClick={toggleAutoplay}
//             className="inline-flex items-center justify-center px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-offset-2"
//           >
//             {isAutoplayRunning ? 'Pause' : 'Play'}
//           </button>
//         </div>
//       )}

//       <style jsx>{`
//         .sr-only {
//           position: absolute !important;
//           height: 1px;
//           width: 1px;
//           overflow: hidden;
//           clip: rect(1px, 1px, 1px, 1px);
//           white-space: nowrap;
//         }
//         button:focus {
//           outline: 3px solid rgba(37,99,235,0.9);
//           outline-offset: 2px;
//         }
//       `}</style>
//     </div>
//   );
// }
