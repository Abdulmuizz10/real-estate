import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <img src={Logo} alt="" />
        </a>
        <div className="flex items-center gap-6 ">
          <a href="#" className="hover:text-violet-900 transition">
            Log in
          </a>
          <a
            href="#"
            className=" bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
          >
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
