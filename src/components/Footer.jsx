import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className="w-full p-4 bg-gray-700 flex items-center justify-center">
      <p className="text-white text-center">
        Copywrite ©{date} All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
