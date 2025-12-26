import React from "react";
import { services } from "../../public/Data";

const Card = () => {
  return (
    <>
      <div className="relative -top-45 md:top-10 Card-container w-full lg:w-[75%] h-5 md:h-[60%] flex flex-col md:flex-row items-center perspective-[1000px]  ">
        {services.map((service, index) => (
          <div
            className={`card w-[90%] sm:w-75 lg:w-70 h-auto lg:h-full rounded-2xl relative flex-1 aspect-5/7 transform-3d transform-origin-top ${
              index === 0 ? "md:rounded-l-2xl md:rounded-r-none" : ""
            }
              ${index === 1 ? "md:rounded-l-none md:rounded-r-none" : ""}
              ${index === 2 ? "md:rounded-r-2xl md:rounded-l-none" : ""}`}
            id={`card-${service.id}`}
            key={service.id}
            onClick={() => console.log(index)}
          >
            <div className="card-front relative w-full h-full">
              <div className="absolute inset-0 bg-[#0F0F0F]"></div>

              <h2 className="Servies-front absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold z-10">
                Service {service.id}
              </h2>
            </div>

            <div
              className={`card-back w-full h-full p-6 flex flex-col gap-3 items-start text-left relative  bg-[#0F0F0F] ${
                index === 1 ? "bg-[#171b57]  " : "bg-[#0F0F0F]"
              }`}
              style={{
                boxShadow:
                  "rgba(7,0,0,0.6) -12px 12px 32px, rgba(0,0,0,0.5) -4px 4px 12px, inset 0 1px 2px rgba(255,255,255,0.41)",
              }}
            >
              <div
                className={`card-content w-full h-full ${
                  index !== 1 ? "text-white" : "text-white"
                }`}
              >
                <h3 className="text-xl lg:text-2xl font-bold mb-2">
                  {service.title}
                </h3>

                <p className="text-sm mb-4">{service.description}</p>

                <ul className="text-sm space-y-1">
                  {service.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>

              <button className="relative z-10 bg-white text-black px-4 py-1.5 rounded-lg font-medium text-sm cursor-pointer">
                Get In Touch
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
