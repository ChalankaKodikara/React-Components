import React, { useRef, useEffect, useState } from "react";
import { TweenMax, TimelineLite, Power3, Linear } from "gsap";
import "./Slider3.css";

const SliderComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active slide index
  const homeSlideRef = useRef(null);
  const activeSlideRef = useRef(null);
  const slideNavPrevRef = useRef(null);
  const slideNavNextRef = useRef(null);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    TweenMax.set(homeSlideRef.current.querySelectorAll(".slide:not(.active)"), {
      autoAlpha: 0,
    });
    TweenMax.set(slideNavPrevRef.current, { autoAlpha: 0.2 });
  };

  const goToNextSlide = () => {
    const slideOut = activeSlideRef.current;
    const nextIndex = activeIndex + 1;
    const slideIn = homeSlideRef.current.querySelectorAll(".slide")[nextIndex];
    const slideInAll = homeSlideRef.current.querySelectorAll(".slide");

    if (slideIn) {
      animateSlides(slideOut, slideIn, slideInAll);
      setActiveIndex(nextIndex);
    }
  };

  const goToPreviousSlide = () => {
    const slideOut = activeSlideRef.current;
    const prevIndex = activeIndex - 1;
    const slideIn = homeSlideRef.current.querySelectorAll(".slide")[prevIndex];
    const slideInAll = homeSlideRef.current.querySelectorAll(".slide");

    if (slideIn) {
      animateSlides(slideOut, slideIn, slideInAll);
      setActiveIndex(prevIndex);
    }
  };

  const animateSlides = (slideOut, slideIn, slideInAll) => {
    const tl = new TimelineLite();
    const slideOutContent = slideOut.querySelector(".card__content");
    const slideInContent = slideIn.querySelector(".card__content");
    const slideOutImg = slideOut.querySelector(".card__img");
    const slideInImg = slideIn.querySelector(".card__img");

    tl.set(slideIn, { autoAlpha: 1, className: "+=active" })
      .set(slideOut, { className: "-=active" })
      .to(slideOutContent, 0.65, { y: "+=40px", ease: Power3.easeInOut }, 0)
      .to(
        slideOutImg,
        0.65,
        { backgroundPosition: "bottom", ease: Power3.easeInOut },
        0
      )
      .to(
        slideInAll,
        1,
        { y: `-${100 * activeIndex}%`, ease: Power3.easeInOut },
        0
      )
      .fromTo(
        slideInContent,
        0.65,
        { y: "-=40px" },
        { y: 0, ease: Power3.easeInOut },
        "-=0.7"
      )
      .fromTo(
        slideInImg,
        0.65,
        { backgroundPosition: "top" },
        { backgroundPosition: "bottom", ease: Power3.easeInOut },
        "-=0.7"
      );
  };

  return (
    <div>
      <div ref={homeSlideRef}>
        {/* Add your additional slides here */}
        <div
          className={`slide ${activeIndex === 0 ? "active" : ""}`}
          ref={activeSlideRef}
        >
          <div className="card">
            <div className="card__img" id="img01"></div>
            <div className="card__content">
              <p className="card__content-theme">Travel</p>
              <h2 className="card__content-header">Misty mountain</h2>
              <p className="card__content-paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                porro, tempora consequuntur vel dolore assumenda aspernatur cum
                dignissimos unde reprehenderit sint? Neque, id consequuntur.
                Quibusdam sit officiis debitis corrupti. Quasi.
              </p>
              <a className="card__content-link">Read</a>
            </div>
          </div>
        </div>
        {/* Add more slides as needed */}
      </div>

      <div className="prevnext">
        <button
          ref={slideNavPrevRef}
          className="prevnext-button"
          onClick={goToPreviousSlide}
        ></button>
        <button
          ref={slideNavNextRef}
          className="prevnext-button"
          onClick={goToNextSlide}
        ></button>
      </div>
    </div>
  );
};

export default SliderComponent;
