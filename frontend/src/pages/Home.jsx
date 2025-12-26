import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../index.css";
import NavBar from "../components/NavBar";
import _ScrollTrigger from "gsap/ScrollTrigger";
import Card from "../components/Card";
import { experiences, featuredWork } from "../../public/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TeamSection from "../components/TeamSection";
import { settings } from "../macros/Arrows";
import Testimonials from "../components/Testimonials";
import { useNavigate } from "react-router-dom";
import PinnedHero from "../components/PinnedHero";
import IntroSection from "../components/IntroSection";

gsap.registerPlugin(ScrollTrigger);

const Home = ({ lenis }) => {
  ScrollTrigger.config({
    ignoreMobileResize: true,
  });

  const scrollToTop = () => {
    if (lenis?.current) {
      lenis.current.scrollTo(0, { immediate: true });
    }
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 320px) and (max-width: 450px)", () => {
      const cards = document.querySelectorAll(".card");
      const overlap = 10;
      const topOffset = 0;

      const cardHeight = cards[0].offsetHeight;

      console.log(cardHeight);

      const totalHeight = topOffset + cardHeight * cards.length - overlap;
      gsap.set(cards, {
        y: "150%",
        rotate: (i) => (i % 2 === 0 ? -4 : 4),
        transformOrigin: "center center",
      });

      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#services",
          start: "top+=20 top",
          end: `+=${totalHeight}px`,
          pin: true,
          anticipatePin: 1,
          pinSpacing: true,
          scrub: 0.5,
        },
      });

      cards.forEach((card, i) => {
        t1.to(card, {
          y: topOffset - (cardHeight - overlap) * i,
          ease: "power1.out",
        });
      });

      return () => {
        t1.kill();
      };
    });

    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
      const section = document.querySelector("#services");
      if (!section) return;
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          pinSpacing: true,
        },
      });

      t1.fromTo(
        ".Card-container",
        { scale: 1.2, y: 100 },
        { scale: 1, y: 0, duration: 1, ease: "power3.in" }
      );

      t1.fromTo(
        ".heading",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 10, duration: 1, ease: "power3.out" }
      );

      t1.addLabel("spread");

      t1.fromTo(
        ".Servies-front",
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power3.out" },
        ">"
      );
      t1.to(
        ".Card-container",
        { gap: 20, duration: 1, ease: "power2.out" },
        "spread"
      );
      t1.to(
        "#card-1",
        {
          x: -10,
          borderRadius: "16px",
          duration: 1,
          ease: "power2.out",
        },
        "spread"
      );
      t1.to(
        "#card-2",
        {
          borderRadius: "16px",
          duration: 1,
          ease: "none",
        },
        "spread"
      );
      t1.to(
        "#card-3",
        { x: 10, borderRadius: "16px", duration: 1, ease: "power2.out" },
        "spread"
      );

      t1.addLabel("flip");

      t1.to(
        ".card",
        {
          rotationY: 180,
          duration: 1,
          ease: "power3.inOut",
          stagger: 0.1,
          transformOrigin: "center center",
        },
        "flip"
      );

      t1.fromTo(".card-content", { opacity: 0 }, { opacity: 1, duration: 0.5 });

      t1.addLabel("tilt", ">");

      t1.to(
        ["#card-1, #card-3"],
        {
          y: 30,
          rotateZ: (i) => (i === 0 ? -10 : 10),
          duration: 1,
          ease: "power3.inOut",
        },
        "tilt"
      );

      t1.fromTo(
        ".heading",
        { y: 10, scale: 1 },
        { y: -15, duration: 1, ease: "power3.inOut" },
        "tilt"
      );
      t1.fromTo(
        "#card-2",
        { y: 0, rotateZ: 0 },
        { y: -40, rotateZ: 0, duration: 1, ease: "power3.inOut" },
        "tilt"
      );

      return () => {
        t1.kill();
      };
    });

    mm.add("(min-width: 1024px)", () => {
      const section = document.querySelector("#services");
      if (!section) return;
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          pinSpacing: true,
        },
      });

      t1.fromTo(
        ".Card-container",
        { scale: 1.2, boxShadow: "" },
        { scale: 1, boxShadow: "", duration: 1, ease: "power3.in" }
      );

      t1.fromTo(
        ".heading",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 10, duration: 1, ease: "power3.out" }
      );

      t1.addLabel("spread");

      t1.fromTo(
        ".Servies-front",
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power3.out" },
        ">"
      );
      t1.to(
        ".Card-container",
        { gap: 30, duration: 1, ease: "power2.out" },
        "spread"
      );
      t1.to(
        "#card-1",
        {
          x: -40,
          borderRadius: "16px",
          duration: 1,
          ease: "power2.out",
          boxShadow:
            "rgba(7,0,0,0.6) -12px 12px 32px, rgba(0,0,0,0.5) -4px 4px 12px, inset 0 1px 2px rgba(255,255,255,0.41)",
        },
        "spread"
      );
      t1.to(
        "#card-2",
        {
          borderRadius: "16px",
          duration: 1,
          ease: "none",
        },
        "spread"
      );
      t1.to(
        "#card-3",
        { x: 30, borderRadius: "16px", duration: 1, ease: "power2.out" },
        "spread"
      );

      t1.addLabel("flip");

      t1.to(
        ".card",
        {
          rotationY: 180,
          duration: 1,
          ease: "power3.inOut",
          stagger: 0.1,
          transformOrigin: "center center",
        },
        "flip"
      );

      t1.fromTo(".card-content", { opacity: 0 }, { opacity: 1, duration: 0.5 });

      t1.addLabel("tilt", ">");

      t1.to(
        ["#card-1, #card-3"],
        {
          y: 30,
          rotateZ: (i) => (i === 0 ? -15 : 15),
          duration: 1,
          ease: "power3.inOut",
        },
        "tilt"
      );

      t1.fromTo(
        ".heading",
        { y: 10, scale: 1 },
        { y: -15, duration: 1, ease: "power3.inOut" },
        "tilt"
      );
      t1.fromTo(
        "#card-2",
        { y: 0, rotateZ: 0 },
        { y: -40, rotateZ: 0, duration: 1, ease: "power3.inOut" },
        "tilt"
      );

      return () => {
        t1.kill();
      };
    });

    return () => mm.revert();
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#experiences",
          start: "top-=25%",
          end: "bottom ",
          pin: false,
          toggleActions: "play reverse play reverse",
        },
      });

      tl.fromTo(
        ".experience-item",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" }
      );

      return () => {
        tl.kill();
      };
    });
    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#experiences",
          start: "top-=25%",
          end: "bottom",
          pin: false,

          toggleActions: "play reverse play reverse",
        },
      });
      tl.fromTo(
        ".experience-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
      return () => {
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  useEffect(() => {
    const counts = document.querySelectorAll(".experience-count");

    counts.forEach((el) => {
      const target = Number(el.dataset.count);
      const section = document.querySelector("#experiences");

      ScrollTrigger.create({
        trigger: section,
        start: "top-=25%",
        end: "bottom",
        onEnter: () => {
          gsap.fromTo(
            el,
            { innerText: 0 },
            {
              innerText: target,
              duration: 1,
              ease: "power1.out",
              onUpdate: function () {
                el.innerText = Math.floor(el.innerText);
              },
            }
          );
        },
        onEnterBack: () => {
          gsap.fromTo(
            el,
            { innerText: 0 },
            {
              innerText: target,
              duration: 1,
              ease: "power1.out",
              onUpdate: function () {
                el.innerText = Math.floor(el.innerText);
              },
            }
          );
        },
        onLeave: () => {
          el.innerText = "0";
        },
        onLeaveBack: () => {
          el.innerText = "0";
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#featured-work",
          start: "top top",
          end: "bottom top",
          pin: true,
          anticipatePin: 1,
          pinSpacing: true,
          scrub: true,
        },
      });

      t1.fromTo(
        "#featured-work .Heading",
        { scale: 4, y: 800, opacity: 1, filter: "blur(6px)" },
        { scale: 1, y: 0, opacity: 0.8, filter: "blur(0px)" }
      )
        .fromTo(
          "#featured-work .SubText",
          { y: 30, opacity: 0, filter: "blur(6px)" },
          { y: 0, opacity: 1, filter: "blur(0px)" }
        )
        .fromTo(".WC-container", { opacity: 0, y: 150 }, { opacity: 1, y: 0 });

      return () => {
        t1.kill();
      };
    });

    return () => mm.revert();
  }, []);

  useEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".Get-In-Touch",
        start: "top-=10%",
        end: "bottom",
        toggleActions: "play reverse play reverse",
      },
    });

    t1.fromTo(
      ".Get-In-Touch-Heading",
      {
        opacity: 0,
        filter: "blur(6px)",
      },
      { opacity: 1, filter: "blur(0px)" }
    ).fromTo(
      ".Get-In-Touch-Btn",
      { y: 50, opacity: 0, filter: "blur(6px)" },
      { y: 0, opacity: 1, filter: "blur(0px)" }
    );
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <NavBar
        className="fixed -top-13 left-1/2 -translate-x-1/2 z-150"
        lenis={lenis}
      />
      <IntroSection />
      <PinnedHero />
      <div style={{ height: "" }}></div>
      <section
        id="services"
        className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-24 relative"
      >
        <p className="heading text-3xl w-full text-center  lg:text-6xl text-white font-bold absolute top-10 md:top-30 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Services
        </p>
        <Card />
      </section>
      <section
        id="featured-work"
        className="min-h-screen max-h-fit relative mt-10 md:mt-0"
      >
        <p className="Heading text-3xl w-full text-center  lg:text-6xl text-white font-bold absolute top-5 md:top-30 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Featured Work
        </p>
        <p className="SubText  text-lg text-white absolute text-center top-12 md:top-42 left-1/2 -translate-x-1/2 ">
          We've transform bold ideas into tangible realities
        </p>
        <div
          className="w-full relative top-35 md:top-80 px-6 py-10
                flex flex-col items-center gap-4 md:hidden "
        >
          {featuredWork.map((item, index) => (
            <div
              key={index}
              className="WorkCard 
                 flex flex-col justify-between gap-2 items-start
                 rounded-xl select-none
                 w-full h-80"
              onClick={() => {
                navigate(`/servies/${item.title}`);
              }}
            >
              <img
                src={item.imgSrc}
                alt=""
                className="w-full h-[75%] object-cover rounded-xl"
              />

              <div className="w-full flex flex-col gap-1">
                <p className="text-white">
                  <p className="text-white">
                    {item.title.includes("-")
                      ? item.title.replaceAll("-", " ")
                      : item.title}
                  </p>
                </p>

                <div className="flex gap-1 flex-wrap">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[#757470] border border-[#757470]
                         px-2 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="WC-container w-full relative top-55 lg:px-10 py-10 hidden md:block lg:hidden">
          <div className=" w-full max-w-full">
            <Slider {...settings} slidesToShow={1} centerMode={true}>
              {featuredWork.map((item, index) => (
                <div key={index} className="px-0">
                  <div
                    className="WorkCard flex flex-col justify-between gap-2 items-start
                     rounded-xl cursor-grab md:bg-red-600 w-full  h-115 "
                    onClick={() => {
                      navigate(`/servies/${item.title}`);
                    }}
                  >
                    <img
                      src={item.imgSrc}
                      alt=""
                      className="w-full h-[75%] object-cover rounded-xl"
                    />

                    <div className="w-full flex flex-col gap-1">
                      <p className="text-white">
                        {item.title.includes("-")
                          ? item.title.replaceAll("-", " ")
                          : item.title}
                      </p>

                      <div className="flex gap-1 flex-wrap">
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[#757470] border border-[#757470]
                             px-2 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="WC-container w-full relative top-55 lg:px-10 py-10 hidden lg:block">
          <div className=" w-full max-w-full">
            <Slider {...settings}>
              {featuredWork.map((item, index) => (
                <div key={index} className="px-0">
                  <div
                    className="WorkCard flex flex-col justify-between gap-2 items-start
                     rounded-xl cursor-grab w-125  h-115 "
                    onClick={() => {
                      navigate(`/servies/${item.title}`);
                    }}
                  >
                    <img
                      src={item.imgSrc}
                      alt=""
                      className="w-full h-[75%] object-cover rounded-xl"
                    />

                    <div className="w-full flex flex-col gap-1">
                      <p className="text-white">
                        {item.title.includes("-")
                          ? item.title.replaceAll("-", " ")
                          : item.title}
                      </p>

                      <div className="flex gap-1 flex-wrap">
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[#757470] border border-[#757470]
                             px-2 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <div style={{ height: "" }}></div>
      <Testimonials id="reviews" />
      <section
        id="experiences"
        className="min-h-screen flex flex-col gap-10 items-center lg:justify-center relative lg:px-24 overflow-hidden pt-20 lg:pt-32"
      >
        {experiences.map((item, index) => {
          return (
            <div
              key={index}
              className=" lg:w-220 lg:flex flex-col lg:items-center"
            >
              <div
                key={index}
                className=" w-full max-w-140 h-auto flex justify-between p-4 "
              >
                <div className="experience-item flex gap-4 items-center px-5 lg:px-0">
                  <span className="experience-count-wrapper text-6xl font-medium text-[#CECBC5] min-w-25 lg:min-w-30 h-20 flex items-center">
                    <span className="experience-count" data-count={item.Count}>
                      0
                    </span>
                    {item.suffix}
                  </span>

                  <div className="">
                    <p className="text-xl font-medium text-[#D3D0CA]">
                      {item.title}
                    </p>
                    <p className="text-[#696864] mt-1">{item.desc}</p>
                  </div>
                </div>
              </div>
              <div className="h-0.5 w-full bg-[#171716]" />
            </div>
          );
        })}
      </section>
      <TeamSection id="team" />
      <section className="Get-In-Touch min-h-screen mt-50 md:mt-0 flex items-center justify-center">
        <div
          className=" w-[90%] h-[95vh]  lg:w-350 bg-[radial-gradient(circle_at_bottom,#171b57_0%,#0e1218_80%,#020617_100%)] flex flex-col items-center justify-center gap-5 rounded-2xl "
          style={{
            boxShadow:
              "rgba(7,0,0,0.6) -12px 12px 32px, rgba(0,0,0,0.5) -4px 4px 12px, inset 0 1px 2px rgba(255,255,255,0.41)",
          }}
        >
          <p className="Get-In-Touch-Heading relative z-10 text-white text-xl w-[90%] lg:text-3xl font-bold text-center">
            Let’s Connect and Build the Future of Your Business Together
          </p>
          <button
            onClick={() => {
              navigate("/contact-page");
            }}
            className="Get-In-Touch-Btn bg-white text-black px-4 py-1.5 rounded-lg font-medium text-sm cursor-pointer "
          >
            Get In Touch
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
