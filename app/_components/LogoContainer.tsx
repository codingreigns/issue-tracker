import React from "react";
import Logo from "./Logo";

const LogoContainer = () => {
  return (
    <div className="flex items-center  m-3">
      <div className="flex items-center border-r  border-gray-500">
        {/* logo */}
        <Logo />
        <h1 className="font-bold text-sm tracking-wide text-gray-800 mx-2">
          Bug <span className="text-lg font-black ">Tracer</span>
        </h1>
      </div>
    </div>
  );
};

export default LogoContainer;
