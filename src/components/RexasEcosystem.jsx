import React from "react";
import ecoImage from "../assets/eco-c-48-baf-191719852-d-294-c-png0.png";

const RexasEcosystem = () => {
  return (
    <div>
      <div className="flex flex-row gap-0 items-center justify-center flex-wrap content-center self-stretch shrink-0 relative">
        <div className="pt-10 pb-[6.4px] pl-10 flex flex-col gap-0 items-start justify-start flex-1 max-w-[764px] relative">
          <img
            className="self-stretch shrink-0 h-[843.05px] relative overflow-hidden"
            style={{ objectFit: "cover" }}
            src={ecoImage}
            alt="Eco Image"
          />
        </div>
        <div className="pt-10 pl-10 flex flex-col gap-8 items-start justify-start flex-1 max-w-[764px] relative">
          <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
            <div
              className="text-left font-['Inter-Regular',_sans-serif] text-[66px] leading-[99px] font-normal relative self-stretch flex items-center justify-start"
              style={{
                background:
                  "linear-gradient(90.48deg, rgba(232, 116, 158, 1) 28.380000591278076%, rgba(240, 185, 11, 1) 82.1399986743927%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.62px",
              }}
            >
              REXAS
              <br />
              ECOSYSTEM
            </div>
          </div>
          <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
            <div
              className="text-[#ffffff] text-left font-['Poppins-Regular',_sans-serif] text-[22px] leading-[33px] font-normal relative self-stretch flex items-center justify-start"
              style={{ letterSpacing: "0.21px" }}
            >
              Explore the Rexas ecosystem, designed to streamline your
              <br />
              journey into the world of blockchain and digital assets. Whether
              <br />
              you're looking to invest in real estate, tokenize your assets, or
              <br />
              engage in creative endeavors through NFTs, Rexas provides the
              <br />
              tools you need. Benefit from a secure platform for trading and
              <br />
              token funding, while maximizing your investments with
              <br />
              advanced yield-optimizing strategies. Our seamless multi-chain
              <br />
              technology ensures that your trading is efficient and your
              <br />
              investments grow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RexasEcosystem;
