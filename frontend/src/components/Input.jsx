import React from "react";

const Input = ({ placeholder, value, onChange, className, name, id }) => {
  return (
    <input
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      type={placeholder.toLowerCase()}
      placeholder={placeholder}
      className={`${placeholder === "Message" ? "h-50" : ""}
      ${className}
        w-full h-13 rounded-lg
        bg-[rgba(125,125,125,0.08)]
        backdrop-blur-xl
        text-white placeholder-white/50
        px-4
        outline-none
        shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]
        focus:bg-[rgba(183,183,183,0.08)]
        focus:shadow-[0_0_0_1px_rgba(255,255,255,0.25)]
        transition `}
    />
  );
};

export default Input;
