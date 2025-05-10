  import React from "react";
import Noteapp from "../assets/noteapp_icon.png"; 
const Header = () => {
  return (
    <div className="bg-white p-4 border-b border-gray-200 flex items-center">
       <img
            className="w-16 h-16 md:w-20 md:h-20"
            src={Noteapp}
            alt="Note App Icon"
          />
      <span className="font-inter font-bold text-2xl md:text-4xl leading-tight tracking-normal text-black">
            Note App
          </span>
    </div>
  );
};

export default Header;