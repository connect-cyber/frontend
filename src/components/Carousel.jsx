import React, { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { assest } from "@/assets/assets";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel() {
  const timer = useRef();
  // const interval = 3000; // 3 seconds
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    slides: { perView: 1, spacing: 16 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },

    created(slider) {
      // Pause on hover
      slider.container.addEventListener("mouseover", () => {
        clearInterval(timer.current);
      });

      // Resume on mouse leave
      // slider.container.addEventListener("mouseout", () => {
      //   startAutoplay(slider);
      // });

      // Autoplay start
      // startAutoplay(slider);
    },
  });

  // const startAutoplay = (slider) => {
  //   clearInterval(timer.current);
  //   timer.current = setInterval(() => {
  //     slider.next();
  //   }, interval);
  // };

  // NEW CODE
  const handleNext = () => {
    clearInterval(timer.current); // Stop autoplay when manually clicking
    instanceRef.current?.next();
  };

  const handlePrev = () => {
    clearInterval(timer.current); // Stop autoplay
    instanceRef.current?.prev();
  };

  // NEW CODE
  useEffect(() => {
    // if (instanceRef.current) {
    //   startAutoplay(instanceRef.current); // Start autoplay when slider is ready
    // }
    return () => {
      clearInterval(timer.current); // Cleanup on unmount
    };
  }, [instanceRef]);

  return (
    <div className="w-full">
      <div className="relative w-full max-w-[1500px] mx-auto px-1 pb-5">
        <div
          ref={sliderRef}
          className="keen-slider rounded-[6px] md:rounded-[20px] lg:rounded-[35px] overflow-hidden"
        >
          {/* Slide 1 :) */}

          <div className="keen-slider__slide flex flex-col items-center justify-center h-[360px] md:h-[500px] lg:h-[650px] rounded-[6px] md:rounded-[20px] lg:rounded-[35px] overflow-hidden">
            <div className="h-full w-full">
              <img
                src={assest.cityCommittedEducation}
                alt="Slide 1"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
              <h1 className="text-[18px] md:text-3xl lg:text-5xl text-white">
                Turning Potential into Power
              </h1>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="keen-slider__slide flex flex-col items-center justify-center h-[360px] md:h-[500px] lg:h-[650px] rounded-[6px] md:rounded-[20px] lg:rounded-[35px] overflow-hidden">
            <div className="h-full w-full">
              <img
                src={assest.m3}
                alt="Slide 2"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
              <h1 className="text-[18px] md:text-3xl lg:text-5xl text-white">
                Big Dream start with Small steps.
              </h1>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="keen-slider__slide flex flex-col items-center justify-center h-[360px] md:h-[500px] lg:h-[650px] rounded-[6px] md:rounded-[20px] lg:rounded-[35px] overflow-hidden">
            <div className="h-full w-full">
              <img
                src={assest.skill}
                alt="Slide 3"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
              <h1 className="text-[18px] md:text-3xl lg:text-5xl text-white">
                Learning Today, Leading Tomorrow !
              </h1>
            </div>
          </div>
          
        </div>

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="w-[30px] h-[30px] cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 lg:w-[50px] lg:h-[50px]  bg-white/80 font-bold flex justify-center items-center rounded-full"
        >
          <ChevronLeft className="w-[15px] h-[15px] lg:w-[25px] lg:h-[25px]" />
        </button>
        <button
          onClick={handleNext}
          className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full cursor-pointer font-bold flex justify-center items-center "
        >
          <ChevronRight className="w-[15px] h-[15px] lg:w-[25px] lg:h-[25px]" />
        </button>

        {/* Dots */}
        <div className="mt-2 flex justify-center gap-2">
          {Array.from({ length: 3 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                clearInterval(timer.current);
                instanceRef.current?.moveToIdx(idx);
              }}
              className={`h-2 w-2 lg:h-2.5 lg:w-2.5 rounded-full transition 
              ${currentSlide === idx ? "bg-black" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}