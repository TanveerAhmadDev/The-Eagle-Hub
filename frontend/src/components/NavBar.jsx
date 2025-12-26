import React, { use, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const NavBar = ({ className, lenis }) => {
  const navigate = useNavigate();
  const handleScroll = (id) => {
    if (!lenis?.current) return;

    if (window.location.pathname.startsWith("/servies")) {
      navigate("/");

      setTimeout(() => {
        const el = document.getElementById(id);
        if (!el) return;

        jumpToFinalState(id);

        lenis.current.scrollTo(el, {
          duration: 1.2,
          easing: (t) => 1 - Math.pow(1 - t, 4),
          offset: 0,
        });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (!el) return;

      jumpToFinalState(id);

      lenis.current.scrollTo(el, {
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 4),
        offset: 0,
      });
    }
  };

  const jumpToFinalState = (id) => {
    switch (id) {
      case "reviews":
        gsap.set(".review-card", { opacity: 1, y: 0 });
        break;
      case "services":
        gsap.set(".service-card", { opacity: 1, y: 0, scale: 1 });
        break;
      case "featured-work":
        gsap.set(".WorkCard", { opacity: 1, y: 0 });
        break;
      default:
        break;
    }
  };
  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.to(".nav-bar", { opacity: 1, duration: 2.5, y: 80, ease: "power3.out" });
    return () => {
      t1.kill();
    };
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.to(".nav-bar", {
        width: "750px",
        // width: "735.275px",
        scrollTrigger: {
          trigger: document.body,
          start: "top+=650 top",
          end: "top+=1000 top",
          scrub: 0.5,
        },
        ease: "none",
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      <div className="w-full flex items-center justify-center ">
        <div
          className={`${className} nav-bar ssm:px-2 mm:px-6 py-2.5 z-50 -translate-x-1/2 w-[90%] md:w-[85%]  lg:w-328 h-13 rounded-lg border border-white/20 bg-[rgba(38,38,38,0.4)] backdrop-blur-md shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-between text-white `}
          style={{
            boxShadow:
              "rgba(7,0,0,0.6) -12px 12px 32px, rgba(0,0,0,0.5) -4px 4px 12px, inset 0 1px 2px rgba(255,255,255,0.41)",
          }}
        >
          <h1 className="text-white ssm:text-lg mm:text-xl  font-bold">
            The Eagle Hub
          </h1>
          <div className="menu  gap-5 hidden md:flex ml-10">
            {["Services", "Featured Work", "Reviews", "Team"].map((item) => {
              const id = item.toLowerCase().replace(/\s+/g, "-");
              return (
                <button
                  key={item}
                  onClick={() => {
                    handleScroll(id);
                  }}
                  className="ml-auto text-white opacity-70 hover:opacity-100 hover:[text-shadow:0_0_5px_white] transition duration-300"
                >
                  {item}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => {
              navigate("/contact-page");
            }}
            className="bg-white text-black px-4 py-1.5 rounded-lg font-medium text-sm cursor-pointer "
          >
            Get In Touch
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
