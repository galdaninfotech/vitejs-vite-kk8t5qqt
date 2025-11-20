import { useEffect, useState, useRef } from "react";
import type { ReactNode, ReactElement, MouseEvent } from "react";
import './style.css';

interface CarouselProps {
  children: ReactNode;
}

export default function Carousel({children}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const carouselBoxRef = useRef<HTMLDivElement | null>(null)

  // Browser interval id is a number
  const intervalRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const { slides } = getSlidesInfo()

    if(slides.length > 0 ) {
      slides[0].setAttribute("data-active", "true")
    }

    startSlider()

    return () => clearSlider()
  }, [])

  function getSlidesInfo() {
    const carouselBox = carouselBoxRef.current
    if(!carouselBox)
      return { slide: [] as HTMLCollectionOf<HTMLElement>, count: 0 }

    const slides = carouselBox.children as HTMLCollectionOf<HTMLElement>
    const count = slides.length
    return {slides, count }
  }

  function startSlider() {
    clearSlider()

    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => {
        const { slides, count } = getSlidesInfo()
        const newIndex = prev === count -1 ? 0 : prev + 1;

        [...slides].forEach((slide, index) => {
          slide.setAttribute("data-active", String(index === newIndex))
        })

        return newIndex
      })
    }, 3000)
  }

  function clearSlider() {
    if (intervalRef.current !== undefined) {
      clearInterval(intervalRef.current)
      intervalRef.current = undefined
    }
  }

  function handleNext(event: MouseEvent<HTMLButtonElement>) {
    clearSlider();

    const { slides, count } = getSlidesInfo();

    const newIndex = currentIndex === count - 1 ? 0 : currentIndex + 1;

    event.currentTarget.setAttribute("aria-controls", `slideImg${newIndex}`);

    [...slides].forEach((slide, index) => {
      slide.setAttribute("data-active", String(index === newIndex));
      slide.setAttribute("aria-hidden", index === newIndex ? "" : "true");
    });

    startSlider();
    setCurrentIndex(newIndex);
  }

  function handlePrevious() {
    clearSlider();

    const { slides, count } = getSlidesInfo();

    const newIndex = currentIndex === 0 ? count - 1 : currentIndex - 1;

    [...slides].forEach((slide, index) => {
      slide.setAttribute("data-active", String(index === newIndex));
    });

    startSlider();
    setCurrentIndex(newIndex);
  }


  function handleMouseEnter() {
    clearSlider(); // Pause on hover
  }

  function handleMouseLeave() {
    startSlider(); // Resume on mouse leave
  }

  function handleStepperClick(newIndex: number) {
    return () => {
      clearSlider();

      const { slides } = getSlidesInfo();

      [...slides].forEach((slide, index) => {
        slide.setAttribute("data-active", String(index === newIndex));
      });

      startSlider();
      setCurrentIndex(newIndex);
    };
  }

  return (
    <div className="carousel">
      
      <h1 className="text-3xl font-bold underline">
      Hello world!!
    </h1>
      {currentIndex}
      <span role="status" aria-live="polite" id="xyz"></span>

      <section
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={carouselBoxRef}
        className="box"
        aria-label="Sliding Images"
        tabIndex={0}
      >
        {children}
      </section>

      <button className="prev" onClick={handlePrevious}>
        Prev
      </button>

      <button className="next" onClick={handleNext}>
        Next
      </button>

      <div className="stepper">
        {Array.from(children as ReactElement[]).map((_, index) => (
          <button key={index} onClick={handleStepperClick(index)}>
            {index}
          </button>
        ))}
      </div>
    </div>
  )
}