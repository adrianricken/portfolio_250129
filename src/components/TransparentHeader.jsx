import React from "react";

const TransparentHeader = ({ children }) => {
  return (
    <p className="fixed w-full bg-[rgba(0,0,0,0.1)] backdrop-blur-[10px] z-100 shadow-1 p-5 border-0 shadow-[0_0_16_0_rgba(0,0,0,0.5)]">
      {children}
    </p>
  );
};

export default TransparentHeader;
