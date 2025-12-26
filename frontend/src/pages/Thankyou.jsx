import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Thankyou = () => {
  const navigate = useNavigate();

  const cardRef = useRef(null);
  const headingRef = useRef(null);
  const progressRef = useRef(null);
  const confettiRef = useRef([]);

  useLayoutEffect(() => {
    /* ===== CARD ENTRY ===== */
    gsap.from(cardRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(headingRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      ease: "power3.out",
    });

    confettiRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        {
          y: -20,
          opacity: 1,
          scale: gsap.utils.random(0.6, 1),
        },
        {
          y: gsap.utils.random(300, 500),
          x: gsap.utils.random(-200, 200),
          rotate: gsap.utils.random(180, 720),
          opacity: 0,
          duration: gsap.utils.random(1.5, 2.5),
          delay: i * 0.02,
          ease: "power2.out",
        }
      );
    });

    gsap.to(progressRef.current, {
      width: "100%",
      duration: 5,
      ease: "linear",
      onComplete: () => navigate("/"),
    });
  }, [navigate]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black px-4">
      {/* CONFETTI */}
      {[...Array(30)].map((_, i) => (
        <span
          key={i}
          ref={(el) => (confettiRef.current[i] = el)}
          className="absolute top-0 w-2 h-2 rounded-sm"
          style={{
            left: `${Math.random() * 100}%`,
            background: `hsl(${Math.random() * 360}, 90%, 60%)`,
          }}
        />
      ))}

      {/* CARD */}
      <div
        ref={cardRef}
        className="relative w-full sm:w-2/3 lg:w-1/2 p-10 bg-[#0F0F0F] rounded-xl text-white"
        style={{
          boxShadow:
            "rgba(7,0,0,0.6) -12px 12px 32px, rgba(0,0,0,0.5) -4px 4px 12px, inset 0 1px 2px rgba(255,255,255,0.41)",
        }}
      >
        <h1
          ref={headingRef}
          className="text-3xl lg:text-6xl font-bold text-center mb-6"
        >
          Thank You
        </h1>

        <p className="text-center text-white/70">
          Your message has been sent successfully.
        </p>

        <div className="mt-8 w-full h-1 bg-white/10 rounded overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-white"
            style={{ width: "0%" }}
          />
        </div>

        <p className="text-xs text-center text-white/40 mt-3">Redirecting…</p>
      </div>
    </section>
  );
};

export default Thankyou;
