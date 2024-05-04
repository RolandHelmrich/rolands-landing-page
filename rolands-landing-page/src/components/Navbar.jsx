import { useState } from "react";
import { logo } from "../assets";

const Navbar = () => {
  
  return (
    <nav className="flex flex-col justify-start mt-6 navbar">
      <img src={logo} alt="rh" className="w-[16px] h-[16px]" />

    </nav>
  );
};

export default Navbar;
