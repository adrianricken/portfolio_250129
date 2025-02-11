import React from "react";

const TransparentFooter = ({ children }) => {
  return (
    <>
      <div className="absolute bottom-8 w-full h-[2px] backdrop-blur-[1px] z-1 shadow-1 p-5"></div>
      <div className="absolute bottom-6 w-full h-[2px] backdrop-blur-[2px] z-1 shadow-1 p-5"></div>
      <div className="absolute bottom-4 w-full h-[2px] backdrop-blur-[3px] z-1 shadow-1 p-5"></div>
      <div className="absolute bottom-2 w-full h-[2px] backdrop-blur-[4px] z-1 shadow-1 p-5"></div>
      <div className="absolute bottom-0 w-full h-[2px] backdrop-blur-[5px] z-1 shadow-1 p-5"></div>
    </>
  );
};

export default TransparentFooter;
