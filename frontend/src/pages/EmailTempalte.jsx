import React from "react";

const EmailTempalte = () => {
  return (
    <div
      className={`md:w-150 p-4 h-fit rounded-xl bg-[#0F0F0F]  flex flex-col items-center justify-center text-white gap-3`}
      style={{
        margin: "0 auto",
        boxShadow:
          "rgba(7,0,0,0.6) -12px 12px 32px, rgba(0,0,0,0.5) -4px 4px 12px, inset 0 1px 2px rgba(255,255,255,0.41)",
      }}
    >
      <h1 className="text-2xl  text-center font-bold text-white select-none pointer-events-none">
        Form Fill By: XXXXXXX@gmail.com
      </h1>
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <span>Name:</span>
            <span>Tanveer Ahmad</span>
          </div>
          <div className="w-full bg-white/50 h-0.5" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <span>Gmail:</span>
            <span>XXXXX@gmail.com</span>
          </div>
          <div className="w-full bg-white/50 h-0.5" />
        </div>
        <div className="flex flex-col gap-2 w-full ">
          <div className="flex gap-2">
            <span>Message:</span>
            <span
              className="w-full whitespace-normal wrap-break-word
"
            >
              temporibus adipisci magni, optio eius. Lorem ipsum dolor sit amet
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailTempalte;
