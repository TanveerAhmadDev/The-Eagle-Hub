import React, { useLayoutEffect, useState } from "react";
import gsap from "gsap";

const IntroSection = () => {
  const [time, setTime] = useState(new Date());

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    const introTL = gsap.timeline();
    introTL.fromTo(
      ".Intro-inner",

      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );

    const mm = gsap.matchMedia();

    mm.add("(min-width:1024px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".Intro",
            start: "top top",
            end: "bottom",
            scrub: true,
            pin: true,
            pinSpacing: false,
          },
        })
        .fromTo(
          ".Intro-inner",
          { clipPath: "inset(0% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 100% 0%)", ease: "none" },
          0
        );
    });

    return () => mm.revert();
  }, []);
  return (
    <section className="Intro relative w-full h-[90vh] flex items-center justify-center lg:px-0 ">
      <div
        className="Intro-inner w-[90%] h-[85vh]  lg:w-350 bg-[radial-gradient(circle_at_bottom,#171b57_0%,#0e1218_80%,#020617_100%)] flex items-center justify-center rounded-2xl "
        style={{
          boxShadow:
            "rgba(7,0,0,0.6) -12px 12px 32px, rgba(0,0,0,0.5) -4px 4px 12px, inset 0 1px 2px rgba(255,255,255,0.41)",
        }}
      >
        <p className="Intro-text relative z-10 text-white text-xl w-[90%] lg:text-3xl font-bold text-center">
          Empowering Businesses Through Technology
        </p>

        <div className="hidden px-4 absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-[12px] w-full lg:flex items-center justify-between py-2  rounded-b-2xl">
          <p className="">
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </p>
          <p className="">Scroll To Explore</p>
          <p className="">The Eagle Hub</p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
