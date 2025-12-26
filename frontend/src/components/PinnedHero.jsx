import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedHero() {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    if (!textRef.current) return;

    let split;
    let tl;

    split = new SplitType(textRef.current, {
      types: "words,chars",
      wordClass: "split-word",
      charClass: "split-char",
    });

    tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".pin-section",
          start: "top top",
          end: "+=100%",
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          pinSpacing: true,
        },
      })
      .fromTo(
        split.chars,
        { opacity: 0.1 },
        { opacity: 1, stagger: 0.05, ease: "none" }
      );

    return () => {
      tl?.scrollTrigger?.kill();
      tl?.kill();
      split?.revert();
    };
  }, []);
  return (
    <section className=" pin-section min-h-dvh flex items-center justify-center px-10 lg:px-20 overflow-hidden ">
      <p
        ref={textRef}
        className="relative z-10 text-white text-xl lg:text-6xl font-bold text-center"
      >
        We build scalable software solutions and digital experiences that grow
        with your ambition so you can focus on what matters, while we handle the
        technology behind it.
      </p>
    </section>
  );
}
