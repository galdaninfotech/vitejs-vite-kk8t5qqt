import { useEffect, useState, useRef } from "react";
import "./style.css";

function Carousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const carouselBoxRef = useRef(); 

  return (
    <div className="carousel">
      {currentIndex}
    </div>
  )
}