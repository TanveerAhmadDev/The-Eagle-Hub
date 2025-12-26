import React, { useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { works } from "../../public/Data"; // your array of works
import NavBar from "../components/NavBar";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Servies = ({ lenis }) => {
  const scrollToTop = () => {
    if (lenis?.current) {
      lenis.current.scrollTo(0, { immediate: true });
    }
  };

  useEffect(() => {
    scrollToTop();
  }, []);
  const { WorkName } = useParams();
  const decodedWorkName = decodeURIComponent(WorkName);
  const navigate = useNavigate();

  // Find the work based on the URL
  const work = works.find((w) => w.title === decodedWorkName);

  if (!work) return <div className="text-white">Work not found</div>;

  return (
    <>
      <NavBar
        className="fixed -top-13 left-1/2 -translate-x-1/2 z-50"
        lenis={lenis}
      />
      <section className="min-h-screen mt-30 flex flex-col gap-15  px-4 sm:px-8 lg:px-24 relative">
        <div
          className="w-22.5 max-h-9 p-2.5 flex justify-center items-center bg-[#0F0F0F] text-white rounded-lg cursor-pointer"
          style={{
            boxShadow:
              "rgba(7,0,0,0.6) -12px 12px 32px, rgba(0,0,0,0.5) -4px 4px 12px, inset 0 1px 2px rgba(255,255,255,0.41)",
          }}
          onClick={() => navigate("/")}
        >
          <img
            src="/left.svg"
            alt="Next"
            className="w-6 h-6 rotate-180 md:rotate-0"
          />
          Back
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
          <div className="flex flex-col gap-1  md:gap-5">
            <h1 className="text-white text-3xl md:text-5xl max-w-140 font-medium">
              {work.title.replaceAll("-", " ")}
            </h1>
            <div>
              {work.tags.map((tag, index) => (
                <span key={index} className="text-white ">
                  {tag}
                  {index !== work.tags.length - 1 && (
                    <span className="mx-2 opacity-50">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end gap-5 ">
            <div className="flex flex-col items-start md:items-end">
              <span className="text-white">Client: {work.ClientName}</span>
              <div className="w-80 h-[1.5px] bg-white"></div>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <span className="text-white">
                CompanyName: {work.CompanyName}
              </span>
              <div className="w-80 h-[1.5px] bg-white"></div>
            </div>
            <div className="flex flex-col items-start md:items-en">
              <span className="text-white">Industry: {work.Industry}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servies;
