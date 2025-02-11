import React from "react";

const TransparentHeader = ({ children }) => {
  return (
    <>
      <div className="absolute top-0 w-full h-[1px] backdrop-blur-[5px] z-100 shadow-1 p-5"></div>
      <div className="absolute top-1 w-full h-[1px] backdrop-blur-[4px] z-100 shadow-1 p-5"></div>
      <div className="absolute top-4 w-full h-[1px] backdrop-blur-[3px] z-100 shadow-1 p-5"></div>
      <div className="absolute top-6 w-full h-[1px] backdrop-blur-[2px] z-100 shadow-1 p-5"></div>
      <div className="absolute top-8 w-full h-[1px] backdrop-blur-[1px] z-100 shadow-1 p-5">
        {children}
      </div>
    </>
  );
};

export default TransparentHeader;
