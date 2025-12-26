import React from "react";
import { testimonials } from "../../public/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings2 } from "../macros/Arrows";

const Testimonials = () => {
  return (
    <section
      id="reviews"
      className="min-h-screen max-h-screen relative mt-50 lg:mt-10 "
    >
      <p className="text-3xl w-full text-center  lg:text-6xl text-white font-bold absolute top-10 md:top-25 left-1/2 -translate-x-1/2 -translate-y-1/2">
        What Clients Say
      </p>
      <p className="SubText  text-lg text-white absolute text-center top-16 md:top-35 left-1/2 -translate-x-1/2 w-fit leading-5 md:leading-none ">
        Trusted by teams that move fast
      </p>
      <div className=" relative top-30 mb-5 lg:mb-50 py-20 hidden md:flex ">
        <div className=" w-full max-w-full">
          <Slider {...settings2}>
            {testimonials.map((item, index) => (
              <div key={index} className="px-1">
                <div
                  className="TestimonialCard relative bg-[#0F0F0F]  md:min-w-[150.75px] md:w-164 lg:w-240  h-96 p-6 rounded-2xl flex gap-4 overflow-hidden"
                  style={{
                    boxShadow:
                      "rgba(255, 255, 255, 0.12) 0px 1px 2px 0px inset",
                    opacity: "1",
                  }}
                >
                  <div
                    className=" absolute"
                    style={{
                      mask: "linear-gradient(-45deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 70.126%)",
                      opacity: "0.1",
                    }}
                  >
                    <img
                      src="https://framerusercontent.com/images/o8ql0QGxybiKXu4OrJgpbGDBOrg.png?width=2000&amp;height=2000"
                      alt=""
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "inherit",
                        objectPosition: "center center",
                        objectFit: "fill",
                      }}
                    ></img>
                  </div>

                  <div className="w-[35%] 500 min-w-55 h-full overflow-hidden rounded-2xl shrink-0 z-2">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>

                  <div className="text-white flex flex-col justify-between w-full">
                    <p>{item.text}</p>

                    <div className="flex items-end justify-between ">
                      <div>
                        <span className="font-semibold">{item.name}</span>
                        <p className="text-[#757470] text-sm">{item.company}</p>
                      </div>
                      <img src={item.logo} className="w-20" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="relative top-30 mb-20 py-10 md:hidden">
        <div className="w-full max-w-full">
          <Slider
            {...settings2}
            arrows={false}
            dots={true}
            slidesToShow={1}
            slidesToScroll={1}
            infinite={true}
            centerPadding="0px"
          >
            {testimonials.map((item, index) => (
              <div key={index} className="px-1">
                <div
                  className="TestimonialCard bg-[#0F0F0F] relative min-w-[243.75px] mm:w-80 md:w-95 h-100 p-6  rounded-xl flex flex-col gap-4 overflow-hidden"
                  style={{
                    borderRadius: "12px",
                    boxShadow:
                      "rgba(255, 255, 255, 0.12) 0px 1px 2px 0px inset",
                    opacity: "1",
                    visibility: "visible",
                    transform: "none",
                    transformOrigin: "100% 50% 0px",
                  }}
                >
                  <div
                    className=" absolute bottom-0"
                    style={{
                      mask: "linear-gradient(-45deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 70.126%)",
                      opacity: "0.1",
                    }}
                  >
                    <img
                      src="https://framerusercontent.com/images/o8ql0QGxybiKXu4OrJgpbGDBOrg.png?width=2000&amp;height=2000"
                      alt=""
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "inherit",
                        objectPosition: "center center",
                        objectFit: "fill",
                      }}
                    ></img>
                  </div>
                  <div className="flex items-center gap-6 h-20">
                    <img src={item.image} alt="" className=" rounded-md w-20" />
                    <div className="text-white">
                      <p className="font-bold">{item.name}</p>
                      <p className="text-[#757470]">{item.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between h-full">
                    <p className="text-white">{item.text}</p>
                    <img src={item.logo} alt="Company Logo" className="w-30" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
