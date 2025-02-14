import React, { useState } from "react";
import "../App.css";
import AnimatedCardContainer from "./AnimatedCardContainer";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="pt-3 pb-3 px-10 flex flex-col gap-0 items-center justify-start h-[92px] absolute right-0 left-0 top-[38.5px]">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex pr-6 pl-6 flex-col gap-0 items-start justify-start shrink-0 w-full relative">
        <div className="pr-[16.01px] pl-4 flex flex-row items-center justify-between self-stretch shrink-0 relative">
          <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
            <div className="pb-[0.6px] flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
              <a href="/" style={{ textDecoration: "none" }}>
                <p className="rexas-finance">REXAS FINANCE</p>
              </a>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between shrink-0 relative">
            {[
              "Dashboard",
              "Tokenomics",
              "Whitepaper",
              "Win $1M",
              "How To Buy",
              "Contact Us",
            ].map((item, index) => (
              <a
                className="pr-8 flex flex-col gap-2 items-start justify-start shrink-0 relative"
                key={index}
                style={{textDecoration: "none"}}
                href="#"
              >
                <div
                  className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-base leading-6 font-semibold relative flex items-center justify-start"
                  style={{ letterSpacing: "0.15px" }}
                >
                  {item} 
                </div>
              </a>
            ))}
          </div>
          <AnimatedCardContainer
            isConnectWallet={true}
            label={'Connect Wallet'}
            link={"#"}
           />
        </div>
      </div>

      <div
        className={`lg:hidden fixed top-0 left-0 h-full bg-gray-800 z-50 transition-transform duration-300 ${
          isMobileMenuOpen
            ? "transform translate-x-0"
            : "transform -translate-x-full"
        }`}
        style={{ width: "250px" }}
      >
        <div className="flex flex-col items-center  py-8 justify-center ">
          <a href="/" className="text-white mb-14">
            REXAS FINANCE
          </a>
          <div className="text-white mb-6 cursor-pointer">Dashboard</div>
          <div className="text-white mb-6 cursor-pointer">Tokenomics</div>
          <div className="text-white mb-6 cursor-pointer">Whitepaper</div>
          <div className="text-white mb-6 cursor-pointer">Win $1M</div>
          <div className="text-white mb-6 cursor-pointer">How To Buy</div>
          <div className="text-white mb-6 cursor-pointer">Contact Us</div>
          <button
            className="text-black font-bold text-md mb-6 py-3 px-6 rounded-2xl bg-gradient-to-r from-yellow-400 to-pink-400"
            style={{
              background:
                "linear-gradient(271.68deg, rgb(240, 185, 11) 0%, rgb(232, 116, 158) 100%)",
              border: "none",
            }}
          >
            Connect Wallet
          </button>
        </div>
      </div>

      <a href="/" className="text-white absolute top-4  block sm:hidden  left-4">
        REXAS FINANCE
      </a>

      {/* Hamburger Icon */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden absolute top-4  z-50 text-white right-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
