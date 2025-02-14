import React from "react";
import "../App.css"

const Navbar = () => {
  return (
    <div className="pt-3 pr-48 pb-3 pl-48 flex flex-col gap-0 items-center justify-start h-[92px] absolute right-0 left-0 top-[38.5px]">
      <div className="pr-6 pl-6 flex flex-col gap-0 items-start justify-start shrink-0 w-[1536px] max-w-[1536px] relative">
        <div className="pr-[16.01px] pl-4 flex flex-row items-center justify-between self-stretch shrink-0 relative">
          <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
            <div className="pb-[0.6px] flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
              <a href="/" style={{ textDecoration: "none" }}>
                {/* <p
                  style={{
                    margin: "0px",
                    lineHeight: "1.5",
                    letterSpacing: "0.00938em",
                    color: "#ffffff",
                    fontWeight: "400",
                    fontSize: "20px",
                    fontFamily: "accelerator ,sans-serif",
                  }}
                >
                  REXAS FINANCE
                </p> */}
                <p className="rexas-finance">REXAS FINANCE</p>
              </a>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between shrink-0 relative">
            <div className="pr-8 flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div
                  className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-base leading-6 font-semibold relative flex items-center justify-start"
                  style={{ letterSpacing: "0.15px" }}
                >
                  Dashboard
                </div>
              </div>
            </div>
            <div className="pr-8 flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div
                  className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-base leading-6 font-semibold relative flex items-center justify-start"
                  style={{ letterSpacing: "0.15px" }}
                >
                  Tokenomics
                </div>
              </div>
            </div>
            <div className="pr-8 flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div
                  className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-base leading-6 font-semibold relative flex items-center justify-start"
                  style={{ letterSpacing: "0.15px" }}
                >
                  Whitepaper
                </div>
              </div>
            </div>
            <div className="pr-8 flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div
                  className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-base leading-6 font-semibold relative flex items-center justify-start"
                  style={{ letterSpacing: "0.15px" }}
                >
                  Win $1M
                </div>
              </div>
            </div>
            <div className="pr-8 flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div
                  className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-base leading-6 font-semibold relative flex items-center justify-start"
                  style={{ letterSpacing: "0.15px" }}
                >
                  How To Buy
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div
                  className="text-[#ffffff] text-left font-['Poppins-SemiBold',_sans-serif] text-base leading-6 font-semibold relative flex items-center justify-start"
                  style={{ letterSpacing: "0.15px" }}
                >
                  Contact Us
                </div>
              </div>
            </div>
          </div>
          <div className="pb-[30px] flex flex-col gap-0 items-start justify-start shrink-0 w-44 h-20 relative">
            <div
              className="bg-[rgba(255,255,255,0.00)] rounded-[14px] shrink-0 w-44 h-[50px] relative overflow-hidden"
              style={{
                boxShadow:
                  "0px 2px 25px 0px rgba(0, 0, 0, 0.5), 0px 2px 10px 0px rgba(0, 0, 0, 0.4)",
              }}
            >
              <div
                className="rounded-[14px] w-[160%] h-[50px] absolute right-[-29.89%] left-[-30.11%] top-[-3px]"
                style={{
                  background:
                    "linear-gradient(-89.7deg, rgba(240, 185, 11, 1) 50%, rgba(232, 116, 158, 1) 50%)",
                }}
              ></div>
              <div
                className="rounded-[14px] w-[170px] h-10 absolute left-[3px] top-[5px] overflow-hidden"
                style={{
                  background:
                    "linear-gradient(83.69deg, rgba(48, 48, 78, 1) 15%, rgba(39, 40, 60, 1) 60%)",
                  boxShadow:
                    "inset 0px 18px 36px -18px rgba(0, 0, 0, 0.5), inset 0px 30px 60px -12px rgba(0, 0, 0, 0.4)",
                }}
              >
                <div
                  className="rounded-[14px] pt-[10.5px] pr-[21.94px] pb-[10.5px] pl-[21.92px] flex flex-row gap-0 items-center justify-center w-[170px] h-[45px] absolute left-0 top-[50%]"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(69, 86, 102, 1) 0%, rgba(34, 34, 34, 1) 90%)",
                    transform: "translate(0, -50%)",
                  }}
                >
                  <div className="flex flex-row gap-0 items-center justify-center flex-1 relative">
                    <div
                      className="text-[#ffffff] text-center font-['Poppins-Medium',_sans-serif] text-base leading-6 font-medium relative flex-1 flex items-center justify-center"
                      style={{ letterSpacing: "0.15px" }}
                    >
                      Connect Wallet
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
