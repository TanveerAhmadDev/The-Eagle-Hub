import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Digit = React.forwardRef((props, ref) => (
  <div className="h-18 w-9 overflow-hidden relative">
    <div ref={ref} className="absolute top-0 left-0">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="h-18 flex items-center justify-center text-white text-[64px] font-light"
        >
          {i}
        </div>
      ))}
    </div>
  </div>
));

const LoadingScreen = ({ onComplete }) => {
  const wrapperRef = useRef(null);
  const d1 = useRef(null);
  const d2 = useRef(null);
  const d3 = useRef(null);

  useEffect(() => {
    const counter = { value: 0 };

    const setHundreds = gsap.quickSetter(d1.current, "y", "px");
    const setTens = gsap.quickSetter(d2.current, "y", "px");
    const setOnes = gsap.quickSetter(d3.current, "y", "px");

    gsap.to(counter, {
      value: 100,
      duration: 3,
      ease: "power2.inOut",
      onUpdate: () => {
        const v = counter.value;

        const hundreds = Math.floor(v / 100);
        const tens = Math.floor((v % 100) / 10);
        const ones = Math.floor(v % 10);

        setHundreds(-hundreds * 72);
        setTens(-tens * 72);
        setOnes(-ones * 72);
      },
      onComplete: () => {
        gsap.to(d3.current, {
          y: -0 * 72,
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
        });

        gsap.to([d1.current, d2.current, d3.current], {
          filter: "blur(1px)",
          duration: 0.1,
          yoyo: true,
          repeat: 1,
        });

        gsap.to(wrapperRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          onComplete,
        });
      },
    });
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 bg-black z-120 flex items-center justify-center"
    >
      <div className="flex items-center">
        <Digit ref={d1} />
        <Digit ref={d2} />
        <Digit ref={d3} />
        <span className="text-white text-xl ml-1">%</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
