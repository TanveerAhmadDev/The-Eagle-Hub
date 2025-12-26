import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import { GetInTouch } from "../../public/GetInTouch";
import axios from "axios";

const ContactPage = ({ lenis }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitBtnRef = useRef(null);

  const scrollToTop = () => {
    if (lenis?.current) {
      lenis.current.scrollTo(0, { immediate: true });
    }
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const LinkCard = ({ index, logo, Title, herf, subTitle }) => {
    return (
      <div
        key={index}
        className={`md:w-150 p-4 h-fit rounded-xl bg-[#0F0F0F]  flex flex-col items-center justify-center text-white gap-3`}
        style={{
          boxShadow:
            "rgba(7,0,0,0.6) -12px 12px 32px, rgba(0,0,0,0.5) -4px 4px 12px, inset 0 1px 2px rgba(255,255,255,0.41)",
        }}
      >
        <div className="flex gap-5 w-full items-center justify-between">
          <div className="flex gap-5 items-center">
            <div
              className={`w-fit p-2 h-fit rounded-md  bg-[rgba(125,125,125,0.08)]`}
              style={{
                boxShadow: " inset 0 1px 2px rgba(255,255,255,0.41)",
              }}
            >
              {logo}
            </div>
            <div className="flex flex-col  h-fit gap-4 ">
              <span className="text-[16px] leading-2">{Title}</span>
              <span className="text-[12px] text-[#757470] leading-1">
                {subTitle}
              </span>
            </div>
          </div>
          <a
            target="_blank"
            href={herf}
            className=" w-7.5 h-7.5 p-2.5 rounded-full bg-[rgba(125,125,125,0.23)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[rgba(125,125,125,0.35)] "
          >
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 364.44 363.33"
              width="10px"
            >
              <path
                d="m15,348.33L348.33,15m0,0L53.03,67.9"
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="20"
              />
              <path
                d="m294.58,311.05L349.44,16.11"
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="20"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  };
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const [showMessage, setShowMessage] = useState(false);
  const [notification, setNotification] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function HandleSubmit() {
    if (isSubmitting) return; // prevent double submission

    setIsSubmitting(true);
    setShowMessage(true);
    setNotification("Sending your message...");

    try {
      const result = await axios.post(
        `https://the-eagle-hub-backend.vercel.app/sendemail`,
        {
          name,
          email,
          message,
          website: "", // optional honeypot for spam
        }
      );

      console.log(result);

      if (result.data.success) {
        setNotification("Message sent successfully!");
        setTimeout(() => {
          navigate("/thank-you"); // redirect
        }, 2000);
      } else {
        setNotification(result.data.error || "Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setNotification("An error occurred while sending your message.");
    } finally {
      setIsSubmitting(false);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
    }
  }

  return (
    <>
      <NavBar
        className="fixed -top-13 left-1/2 -translate-x-1/2 z-100"
        lenis={lenis}
      />
      <section className="min-h-screen mt-20 flex flex-col gap-5  px-4 sm:px-8 lg:px-24 relative ">
        <h1 className="Con-Heading text-5xl md:text-[20rem] lg:text-9xl text-center font-bold text-white select-none pointer-events-none">
          CONTACT US
        </h1>
        <div
          className="w-22.5 max-h-9 p-2.5 flex justify-center items-center bg-[#0F0F0F] text-white rounded-lg cursor-pointer z-60"
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
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row justify-between z-70 mb-20">
          <div className="flex flex-col items-start justify-between ">
            <div>
              <h1 className="text-4xl text-center font-medium text-white">
                Get in touch
              </h1>
              <h1 className="text-white">Hey</h1>
            </div>
            <div className="hidden md:flex flex-col gap-5">
              {GetInTouch.map((item, index) => {
                return <LinkCard {...item} key={index} />;
              })}
            </div>
          </div>
          <div className="flex justify-center ">
            <div
              className={`w-full lg:w-170 p-6 h-fit rounded-xl bg-[#0F0F0F]  flex flex-col items-center justify-center text-white gap-3`}
              style={{
                boxShadow:
                  "rgba(7,0,0,0.6) -12px 12px 32px, rgba(0,0,0,0.5) -4px 4px 12px, inset 0 1px 2px rgba(255,255,255,0.41)",
              }}
            >
              <Input
                name={"Name"}
                id={"Name"}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder={"Name"}
              />
              <div className="w-full">
                <Input
                  name={"Email"}
                  id={"Email"}
                  className={`transition-all duration-300 ease-out ${
                    email && !isValidEmail
                      ? "border-red-500 bg-red-500/5 focus:border-red-400"
                      : "border-white/20 focus:border-white/60"
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    email && !isValidEmail ? "max-h-10 mt-2" : "max-h-0"
                  }`}
                >
                  <p className="ml-3 text-sm text-red-400">
                    Please enter a valid{" "}
                    <span className="font-medium">@gmail.com</span> address
                  </p>
                </div>
              </div>
              <Textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder={"Message"}
              />
              <input
                type="text"
                name="website"
                style={{ display: "none" }}
                autoComplete="off"
              />
              {status && <p className="mt-3 text-sm">{status}</p>}

              <div
                className={`overflow-hidden transition-all duration-300 ${showMessage ? "max-h-20 mt-2" : "max-h-0"}`}
              >
                <p className="ml-3 text-sm text-white/60">{notification}</p>
              </div>

              <button
                ref={submitBtnRef}
                disabled={isSubmitting || !isValidEmail}
                onClick={HandleSubmit}
                className="md:mt-0 w-full max-h-9 p-2.5 font-medium text-sm flex justify-center items-center bg-white text-black rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </div>
          </div>
          <div className="flex md:hidden flex-col gap-5">
            {GetInTouch.map((item, index) => {
              return <LinkCard key={index} {...item} index={index} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
