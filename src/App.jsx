import "./App.css";
import bgImage from "./assets/_1920-w-default.png";
import xImage from "./assets/component-10.svg";
import telegramImage from "./assets/component-11.svg";
import component12 from "./assets/component-12.svg";
import component13 from "./assets/component-13.svg";
import imageETH from "./assets/component-15.svg";
import erc20 from "./assets/clip-path-group0.svg";
import cardImage from "./assets/image0.png";
import ETHIcon from "./assets/eth-1-fca-4-c-7-e-82-d-7-ac-693785-e-png0.png";
import component17 from "./assets/component-17.svg";
import component18 from "./assets/component-18.svg";
import component19 from "./assets/component-19.svg";
import component110 from "./assets/component-110.svg";
import Ewallet from "./assets/ewallet-1-15-d-85498-d-616-c-9-aba-18-a-png0.png";
import RexasEcosystemImage from "./assets/clip-path-group1.svg";
import Fig5 from "./assets/fig-5-d-4-ebb-1-ca-4340-e-405-efc-2-png0.png";
import ecoImage from "./assets/eco-c-48-baf-191719852-d-294-c-png0.png";
import image1 from "./assets/image1.png";
import component117 from "./assets/component-117.svg";
import tokenomicsImage from "./assets/token-e-67069-ff-4-c-78-ede-84578-png0.png";
import component126 from "./assets/component-126.svg";
import component127 from "./assets/component-127.svg";
import component128 from "./assets/component-128.svg";
import component129 from "./assets/component-129.svg";
import featureImage1 from "./assets/image1.png";
import featureImage2 from "./assets/part-2-f-90-b-4394-f-928-b-143-dff-8-png0.png";
import featureImage3 from "./assets/image2.png";
import featureImage4 from "./assets/image3.png";
import featureImage5 from "./assets/part-5-b-6-f-314417-a-445-aef-57-f-4-png0.png";
import featureImage6 from "./assets/part-6-f-56-f-984-a-2330-c-1523-c-3-c-png0.png";
import featureImage7 from "./assets/part-7-2863-d-100-af-8-ab-056314-e-png0.png";
import featureImage8 from "./assets/image4.png";
import featureImage9 from "./assets/part-9-320-d-5-ae-7-e-08-adcb-532-f-1-png0.png";
import featureImage10 from "./assets/part-10-61-d-3-c-6-e-1377166100045-png0.png";
import featureImage11 from "./assets/part-11-eb-084957710-bb-643-b-399-png0.png";
import featureImage12 from "./assets/part-12-de-01-bab-8-cdbf-888-b-84-bc-png0.png";
import featureImage13 from "./assets/part-13-ed-5-a-3-d-63-ffb-9-d-6452932-png0.png";
import featureImage14 from "./assets/part-14-6194-ab-648-e-9-cd-56-e-810-e-png0.png";
import featureImage15 from "./assets/image5.png";
import featureImage16 from "./assets/part-16-a-195-ee-8-a-5-f-704076-ce-69-png0.png";

import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import RexasFinance from "./components/RexasFinance.jsx";
import Topbar from "./components/Topbar.jsx";
import Feature from "./components/Feature.jsx";
import Footer from "./components/Footer.jsx";
import Faq from "./components/Faq.jsx";
import Description from "./components/Description.jsx";
import RexasSection from "./components/RexasSection.jsx";
import RexasEcosystem from "./components/RexasEcosystem.jsx"

const images = [
  featureImage1,
  featureImage2,
  featureImage3,
  featureImage4,
  featureImage5,
  featureImage5,
  featureImage6,
  featureImage7,
  featureImage8,
  featureImage9,
  featureImage10,
  featureImage11,
  featureImage12,
  featureImage13,
  featureImage14,
  featureImage15,
  featureImage12,
];

function App() {
  

  return (
    <div
      className="flex flex-col gap-0 items-start justify-start relative overflow-x-hidden"
      style={{
        backgroundImage: `url(${bgImage}), linear-gradient(to left, #ffffff, #ffffff)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="self-stretch shrink-0 h-[7597px] relative">
     
        <Navbar />

        {/* Unlockthe World of Asset */}
        <Description/>

        {/* Rexas Token Builder*/}
        <div className="pr-48 pl-44 flex flex-col gap-0 items-center justify-start absolute right-0 left-0 top-[2331.01px]">
          <div className="pr-6 flex flex-col items-start justify-start shrink-0 w-[1536px] max-w-[1536px] relative">
            <RexasEcosystem/>
            <RexasSection/>
          </div>
        </div>

        <Feature />

        <Topbar />

        <RexasFinance />

        {/* Tokens: 1,000,000,000 */}
        <div
          className=" pr-6 pl-6 flex flex-col gap-0 items-start justify-start  absolute left-[50%] top-[4420.46px]"
          style={{ transform: "translateX(-50%)" }}
        >
          <div className=" pb-[6.4px]  flex flex-col gap-8 items-start justify-start self-stretch shrink-0 relative">
            <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
              <div
                className="text-left font-['Inter-Regular',_sans-serif]  text-[24px] sm:text-[66px]  font-normal relative self-stretch flex items-center justify-start"
                style={{
                  background:
                    "linear-gradient(90.14deg, rgba(232, 116, 158, 1) 26.21999979019165%, rgba(240, 185, 11, 1) 84.22999978065491%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "0.62px",
                }}
              >
                TOKENOMICS
              </div>
            </div>
            <div className="rounded-[29px] border-solid border-[#f0b90b] border self-stretch shrink-0 h-[100px]  relative">
              <div className="pr-[0.02px]  flex flex-row gap-0 items-center justify-center flex-wrap content-center  absolute w-full">
                <div className="border-solid border-[#f0b90b] border-r-[5.6px] pt-4 pr-[5.6px] pl-4 flex flex-col gap-0 items-start justify-start shrink-0 h-20  relative">
                  <div className=" flex flex-col gap-0 items-center justify-start self-stretch shrink-0 relative">
                    <div
                      className="text-[#ffffff] text-center font-['SpaceGrotesk-Bold',_sans-serif] text-2xl leading-[45px] font-bold relative self-stretch flex items-center justify-center"
                      style={{ letterSpacing: "0.28px" }}
                    >
                      Name: Rexas Finance
                    </div>
                  </div>
                </div>
                <div className="border-solid border-[#f0b90b] border-r-[5.6px] pt-4 pr-[5.6px] pl-4 flex flex-col gap-0 items-start justify-start shrink-0 h-20 max-w-[357.97px] relative">
                  <div className="px-4 flex flex-col gap-0 items-center justify-start self-stretch shrink-0 relative">
                    <div
                      className="text-[#ffffff] text-center font-['SpaceGrotesk-Bold',_sans-serif] text-2xl leading-[45px] font-bold relative self-stretch flex items-center justify-center"
                      style={{ letterSpacing: "0.28px" }}
                    >
                      Symbol: RXS
                    </div>
                  </div>
                </div>
                <div className="pt-4 pl-4 flex flex-col gap-0 items-start justify-start shrink-0 h-20 bg-red-600 relative">
                  <div className="px-4 flex flex-col gap-0 items-center justify-start self-stretch shrink-0 relative">
                    <div
                      className="text-[#ffffff] text-center font-['SpaceGrotesk-Bold',_sans-serif] text-2xl leading-[45px] font-bold relative self-stretch flex items-center justify-center"
                      style={{ letterSpacing: "0.28px" }}
                    >
                      Tokens: 1,000,000,000
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[29px] border-solid border-[#f0b90b] border pt-[26.4px] pr-[126.28px] pb-[26.5px] pl-[126.26px] flex flex-col gap-0 items-center justify-center self-stretch shrink-0 h-[130px] relative">
              <div className="flex flex-row gap-0 items-center justify-start self-stretch shrink-0 relative">
                <div
                  className="text-[#ffffff] text-center font-['SpaceGrotesk-Bold',_sans-serif] text-3xl leading-[45px] font-bold relative flex items-center justify-center"
                  style={{ letterSpacing: "0.28px" }}
                >
                  Contract Address:
                </div>
                <div className="pl-2.5 flex flex-col gap-0 items-start justify-start shrink-0 relative">
                  <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
                    <div
                      className="text-[#ffffff] text-center font-['SpaceGrotesk-Regular',_sans-serif] text-3xl leading-[45px] font-normal relative flex items-center justify-center"
                      style={{ letterSpacing: "0.28px" }}
                    >
                      0x9eAeBd7E73D97E78c77fAB743e6FFA1b550e224c
                    </div>
                  </div>
                </div>
                <div className="pl-2.5 flex flex-col gap-0 items-start justify-start shrink-0 w-[43px] h-[33px] relative">
                  <div className="flex flex-col gap-0 items-start justify-center shrink-0 w-[33px] h-[33px] relative overflow-hidden">
                    <img
                      className="flex-1 w-[33px] h-[auto] relative overflow-visible"
                      src="component-117.svg"
                      alt="Icon"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-2 flex flex-col gap-0 items-start justify-start shrink-0 relative">
                <div className="pr-4 pl-4 flex flex-col gap-0 items-center justify-start shrink-0 relative">
                  <div
                    className="text-[#f0b90b] text-center font-['Poppins-Regular',_sans-serif] text-base leading-6 font-normal relative flex items-center justify-center"
                    style={{ letterSpacing: "0.15px" }}
                  >
                    Please note that you should not send any tokens to this
                    address, as doing so may result in the permanent loss of the
                    tokens.
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[29px] border-solid border-[#f0b90b] border self-stretch shrink-0 h-[130px] relative">
              <div className="flex flex-row gap-0 items-center justify-center flex-wrap content-center w-[1342.4px] absolute left-[-15.2px] top-[calc(50%_-_48px)]">
                <div className="border-solid border-[#f0b90b] border-r-[5.6px] pt-4 pr-[5.6px] pl-4 flex flex-col gap-0 items-start justify-start flex-1 h-20 max-w-[335.6px] relative">
                  <div className="pr-[52.5px] pl-[52.49px] flex flex-col gap-0 items-center justify-start self-stretch shrink-0 relative">
                    <div
                      className="text-[#ffffff] text-center font-['SpaceGrotesk-Bold',_sans-serif] text-3xl leading-[45px] font-bold relative self-stretch flex items-center justify-center"
                      style={{ letterSpacing: "0.28px" }}
                    >
                      Marketing: 3%
                    </div>
                  </div>
                </div>
                <div className="border-solid border-[#f0b90b] border-r-[5.6px] pt-4 pr-[5.6px] pl-4 flex flex-col gap-0 items-start justify-start flex-1 h-20 max-w-[335.6px] relative">
                  <div className="pr-[64.43px] pl-[64.44px] flex flex-col gap-0 items-center justify-start self-stretch shrink-0 relative">
                    <div
                      className="text-[#ffffff] text-center font-['SpaceGrotesk-Bold',_sans-serif] text-3xl leading-[45px] font-bold relative self-stretch flex items-center justify-center"
                      style={{ letterSpacing: "0.28px" }}
                    >
                      Presale: 50%
                    </div>
                  </div>
                </div>
                <div className="border-solid border-[#f0b90b] border-r-[5.6px] pt-4 pr-[5.6px] pl-4 flex flex-col gap-0 items-start justify-start flex-1 h-20 max-w-[335.6px] relative">
                  <div className="pr-[54.33px] pl-[54.31px] flex flex-col gap-0 items-center justify-start self-stretch shrink-0 relative">
                    <div
                      className="text-[#ffffff] text-center font-['SpaceGrotesk-Bold',_sans-serif] text-3xl leading-[45px] font-bold relative self-stretch flex items-center justify-center"
                      style={{ letterSpacing: "0.28px" }}
                    >
                      Team: 12%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch shrink-0 h-[892.84px] relative overflow-hidden"
              style={{ objectFit: "cover" }}
              src={tokenomicsImage}
              alt="Tokenomics Image"
            />
          </div>
        </div>

        <Faq />
        <Footer />
      </div>
    </div>
  );
}

export default App;
