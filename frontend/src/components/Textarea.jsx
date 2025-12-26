import React from "react";

const Textarea = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      name={"Message"}
      id={"Message"}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`h-80 w-full py-5 resize-none overflow-hidden  rounded-lg
        bg-[rgba(125,125,125,0.08)]
        backdrop-blur-xl
        text-white placeholder-white/50
        px-4
        outline-none
        shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]
        focus:bg-[rgba(183,183,183,0.08)]
        focus:shadow-[0_0_0_1px_rgba(255,255,255,0.25)]
        transition `}
    ></textarea>
  );
};

export default Textarea;
