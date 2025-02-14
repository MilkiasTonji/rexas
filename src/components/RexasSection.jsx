import React from "react";
import Fig5 from "../assets/fig-5-d-4-ebb-1-ca-4340-e-405-efc-2-png0.png";
import RexasEcosystem from "../assets/clip-path-group1.svg"; // Assuming this is an image or SVG you want to use

const RexasSection = () => {
  const data = [
    {
      id: 1,
      title: "Rexas Token Builder",
      description:
        "Tokenize your real world assets effortlessly. Rexas Token Builder platform eliminates the complexity of blockchain coding, enabling users to launch tokens in minutes.",
      image: "fig-5-d-4-ebb-1-ca-4340-e-405-efc-2-png0.png",
      clipPath: "clip-path-group1.svg",
    },
    {
      id: 2,
      title: "Rexas Launchpad",
      description:
        "Kickstart your token funding with Rexas Launchpad. This decentralized launchpad provides a secure and transparent environment for token sales on multiple blockchain networks.",
      image: "fig-6-74-cbc-802-e-49-f-741902-ae-png0.png",
      clipPath: "clip-path-group2.svg",
    },
  ];

  return (
    <div className=" self-stretch shrink-0 h-[1080px] relative">
      {/* Rexas Token Builder (First Block) */}
      <div className="pt-10 pl-10 flex flex-col gap-0 items-start justify-start w-[455.99px] max-w-[509.33px] absolute left-[calc(50%_-_683.99px)] bottom-[540px] top-0">
        <div className="rounded-[22px] border-solid border-[rgba(255,255,255,0.20)] border self-stretch shrink-0 h-[500px] relative">
          <div className="w-[415.99px] h-[500px] absolute left-0 top-0 overflow-hidden">
            <div className="w-[414.39px] h-[540.73px] absolute left-[0.8px] top-[0.8px] overflow-hidden">
              <img
                className="h-[auto] absolute left-0 top-0 overflow-visible"
                src="clip-path-group1.svg"
              />
            </div>
          </div>
          <div className="pr-[66.88px] pl-[66.88px] flex flex-row gap-0 items-start justify-center absolute right-[40.8px] left-[40.79999923706055px] top-[40.8px]">
            <img
              className="self-stretch flex-1 relative overflow-hidden"
              style={{ objectFit: "cover" }}
              src="fig-5-d-4-ebb-1-ca-4340-e-405-efc-2-png0.png"
            />
          </div>
          <div className="pt-[475.2px] pr-[20.51px] pl-[20.52px] flex flex-col gap-0 items-center justify-start absolute right-[40.8px] left-[40.79999923706055px] top-[-217.77px]">
            <div
              className="text-[#f8fafc] text-center font-['Poppins-Bold',_sans-serif] text-[28px] leading-[42px] font-bold relative flex items-center justify-center"
              style={{ letterSpacing: "0.26px" }}
            >
              Rexas Token Builder
            </div>
          </div>
          <div className="pt-[475.2px] pr-[3.69px] pl-[3.68px] flex flex-col gap-0 items-center justify-start absolute right-[40.8px] left-[40.79999923706055px] top-[-159.77px]">
            <div
              className="text-[#f1f5f9] text-center font-['Poppins-Regular',_sans-serif] text-base leading-6 font-normal relative flex items-center justify-center"
              style={{ letterSpacing: "0.15px" }}
            >
              Tokenize your real world assets effortlessly. Rexas Token Builder
              platform eliminates the complexity of blockchain coding, enabling
              users to launch tokens in minutes.
            </div>
          </div>
        </div>
      </div>

      {/* Rexas Launchpad (Second Block) */}
      <div
        className="pt-10 pl-10 flex flex-col gap-0 items-start justify-start w-[455.99px] max-w-[509.33px] absolute left-[50%] bottom-[540px] top-0"
        style={{ translate: "-50%" }}
      >
        <div className="rounded-[22px] border-solid border-[rgba(255,255,255,0.20)] border self-stretch shrink-0 h-[500px] relative">
          <div className="w-[415.99px] h-[500px] absolute left-0 top-0 overflow-hidden">
            <div className="w-[414.39px] h-[582.17px] absolute left-[0.8px] top-[0.8px] overflow-hidden">
              <img
                className="h-[auto] absolute left-0 top-0 overflow-visible"
                src="clip-path-group2.svg"
              />
            </div>
          </div>
          <div className="pr-[66.89px] pl-[66.87px] flex flex-row gap-0 items-start justify-center absolute right-[40.8px] left-[40.79999923706055px] top-[40.8px]">
            <img
              className="self-stretch flex-1 relative overflow-hidden"
              style={{ objectFit: "cover" }}
              src="fig-6-74-cbc-802-e-49-f-741902-ae-png0.png"
            />
          </div>
          <div className="pt-[475.2px] pr-[37.48px] pl-[37.46px] flex flex-col gap-0 items-center justify-start absolute right-[40.8px] left-[40.79999923706055px] top-[-217.77px]">
            <div
              className="text-[#f8fafc] text-center font-['Poppins-Bold',_sans-serif] text-[28px] leading-[42px] font-bold relative flex items-center justify-center"
              style={{ letterSpacing: "0.26px" }}
            >
              Rexas Launchpad
            </div>
          </div>
          <div className="pt-[475.2px] pr-[3.69px] pl-[3.68px] flex flex-col gap-0 items-center justify-start absolute right-[40.8px] left-[40.79999923706055px] top-[-159.77px]">
            <div
              className="text-[#f1f5f9] text-center font-['Poppins-Regular',_sans-serif] text-base leading-6 font-normal relative flex items-center justify-center"
              style={{ letterSpacing: "0.15px" }}
            >
              Kickstart your token funding with Rexas Launchpad. This
              decentralized launchpad provides a secure and transparent
              environment for token sales on multiple blockchain networks.
            </div>
          </div>
        </div>
      </div>

      {/* Rexas GenAI (Third Block) */}
      <div className="pt-10 pl-10 flex flex-col gap-0 items-start justify-start w-[455.99px] max-w-[509.33px] absolute left-[calc(50%_-_-227.99px)] bottom-[540px] top-0">
        <div className="rounded-[22px] border-solid border-[rgba(255,255,255,0.20)] border self-stretch shrink-0 h-[500px] relative">
          <div className="w-[415.99px] h-[500px] absolute left-0 top-0 overflow-hidden">
            <div className="w-[414.39px] h-[540.73px] absolute left-[0.8px] top-[0.8px] overflow-hidden">
              <img
                className="h-[auto] absolute left-0 top-0 overflow-visible"
                src="clip-path-group3.svg"
              />
            </div>
          </div>
          <div className="pr-[66.89px] pl-[66.87px] flex flex-row gap-0 items-start justify-center absolute right-[40.8px] left-[40.79999923706055px] top-[40.8px]">
            <img
              className="self-stretch flex-1 relative overflow-hidden"
              style={{ objectFit: "cover" }}
              src="fig-4-f-572-dbdfc-035-e-581-b-90-e-png0.png"
            />
          </div>
          <div className="pt-[475.2px] pr-[76.3px] pl-[76.3px] flex flex-col gap-0 items-center justify-start absolute right-[40.8px] left-[40.79999923706055px] top-[-217.77px]">
            <div
              className="text-[#f8fafc] text-center font-['Poppins-Bold',_sans-serif] text-[28px] leading-[42px] font-bold relative flex items-center justify-center"
              style={{ letterSpacing: "0.26px" }}
            >
              Rexas GenAI
            </div>
          </div>
          <div className="pt-[475.2px] pr-[0.28px] pl-[0.27px] flex flex-col gap-0 items-center justify-start absolute right-[40.8px] left-[40.79999923706055px] top-[-159.77px]">
            <div
              className="text-[#f1f5f9] text-center font-['Poppins-Regular',_sans-serif] text-base leading-6 font-normal relative flex items-center justify-center"
              style={{ letterSpacing: "0.15px" }}
            >
              Harness the power of AI with Rexas GenAI for generating unique,
              high-quality digital artworks. Ideal for artists and creators
              looking to venture into the NFT space.
            </div>
          </div>
        </div>
      </div>

      {/* Rexas DeFi (Fourth Block) */}
      <div className="pt-10 pl-10 flex flex-col gap-0 items-start justify-start w-[455.99px] max-w-[509.33px] absolute left-[calc(50%_-_683.99px)] bottom-0 top-[540px]">
        <div className="rounded-[22px] border-solid border-[rgba(255,255,255,0.20)] border self-stretch shrink-0 h-[500px] relative">
          <div className="w-[415.99px] h-[500px] absolute left-0 top-0 overflow-hidden">
            <div className="w-[414.39px] h-[540.73px] absolute left-[0.8px] top-[0.8px] overflow-hidden">
              <img
                className="h-[auto] absolute left-0 top-0 overflow-visible"
                src="clip-path-group4.svg"
              />
            </div>
          </div>
          <div className="pr-[66.89px] pl-[66.87px] flex flex-row gap-0 items-start justify-center absolute right-[40.8px] left-[40.79999923706055px] top-[40.8px]">
            <img
              className="self-stretch flex-1 relative overflow-hidden"
              style={{ objectFit: "cover" }}
              src="fig-5-c-602-abcf-0e7-e-491-922f-c2-dc8.png"
            />
          </div>
          <div className="pt-[475.2px] pr-[38.91px] pl-[38.94px] flex flex-col gap-0 items-center justify-start absolute right-[40.8px] left-[40.79999923706055px] top-[-217.77px]">
            <div
              className="text-[#f8fafc] text-center font-['Poppins-Bold',_sans-serif] text-[28px] leading-[42px] font-bold relative flex items-center justify-center"
              style={{ letterSpacing: "0.26px" }}
            >
              Rexas DeFi
            </div>
          </div>
          <div className="pt-[475.2px] pr-[6.77px] pl-[6.75px] flex flex-col gap-0 items-center justify-start absolute right-[40.8px] left-[40.79999923706055px] top-[-159.77px]">
            <div
              className="text-[#f1f5f9] text-center font-['Poppins-Regular',_sans-serif] text-base leading-6 font-normal relative flex items-center justify-center"
              style={{ letterSpacing: "0.15px" }}
            >
              Unlock the power of decentralized finance with Rexas DeFi. A fully
              integrated ecosystem providing liquidity and earning opportunities
              on top of blockchain technology.
            </div>
          </div>
        </div>
      </div>

      {/* Rexas Estate (Fifth Block) */}
      <div className="pt-10 pl-10 flex flex-col gap-0 items-start justify-start w-[455.99px] max-w-[509.33px] absolute left-[calc(50%_-_227.99px)] bottom-0 top-[540px]">
        <div className="rounded-[22px] border-solid border-[rgba(255,255,255,0.20)] border self-stretch shrink-0 h-[500px] relative">
          <div className="w-[415.99px] h-[500px] absolute left-0 top-0 overflow-hidden">
            <div className="w-[414.39px] h-[540.73px] absolute left-[0.8px] top-[0.8px] overflow-hidden">
              <img
                className="h-[auto] absolute left-0 top-0 overflow-visible"
                src="clip-path-group5.svg"
              />
            </div>
          </div>
          <div className="pr-[66.89px] pl-[66.87px] flex flex-row gap-0 items-start justify-center absolute right-[40.8px] left-[40.79999923706055px] top-[40.8px]">
            <img
              className="self-stretch flex-1 relative overflow-hidden"
              style={{ objectFit: "cover" }}
              src="fig-6-e-2-de-cc-3b-3-f-9-91992f-2.png"
            />
          </div>
          <div className="pt-[475.2px] pr-[38.91px] pl-[38.94px] flex flex-col gap-0 items-center justify-start absolute right-[40.8px] left-[40.79999923706055px] top-[-217.77px]">
            <div
              className="text-[#f8fafc] text-center font-['Poppins-Bold',_sans-serif] text-[28px] leading-[42px] font-bold relative flex items-center justify-center"
              style={{ letterSpacing: "0.26px" }}
            >
              Rexas Estate
            </div>
          </div>
          <div className="pt-[475.2px] pr-[6.77px] pl-[6.75px] flex flex-col gap-0 items-center justify-start absolute right-[40.8px] left-[40.79999923706055px] top-[-159.77px]">
            <div
              className="text-[#f1f5f9] text-center font-['Poppins-Regular',_sans-serif] text-base leading-6 font-normal relative flex items-center justify-center"
              style={{ letterSpacing: "0.15px" }}
            >
              Build and manage your own virtual real estate portfolio with Rexas
              Estate. Create, buy, and sell digital land in the metaverse
              seamlessly.
            </div>
          </div>
        </div>
      </div>

      {/* Rexas Treasury (Sixth Block) */}
      <div className="pt-10 pl-10 flex flex-col gap-0 items-start justify-start w-[455.99px] max-w-[509.33px] absolute left-[calc(50%_-_227.99px)] bottom-[0px] top-[0px]">
        <div className="rounded-[22px] border-solid border-[rgba(255,255,255,0.20)] border self-stretch shrink-0 h-[500px] relative">
          <div className="w-[415.99px] h-[500px] absolute left-0 top-0 overflow-hidden">
            <div className="w-[414.39px] h-[540.73px] absolute left-[0.8px] top-[0.8px] overflow-hidden">
              <img
                className="h-[auto] absolute left-0 top-0 overflow-visible"
                src="clip-path-group6.svg"
              />
            </div>
          </div>
          <div className="pr-[66.89px] pl-[66.87px] flex flex-row gap-0 items-start justify-center absolute right-[40.8px] left-[40.79999923706055px] top-[40.8px]">
            <img
              className="self-stretch flex-1 relative overflow-hidden"
              style={{ objectFit: "cover" }}
              src="fig-7-png-2c8-d-299-fcc-c9e-bb16-cde.png"
            />
          </div>
          <div className="pt-[475.2px] pr-[38.91px] pl-[38.94px] flex flex-col gap-0 items-center justify-start absolute right-[40.8px] left-[40.79999923706055px] top-[-217.77px]">
            <div
              className="text-[#f8fafc] text-center font-['Poppins-Bold',_sans-serif] text-[28px] leading-[42px] font-bold relative flex items-center justify-center"
              style={{ letterSpacing: "0.26px" }}
            >
              Rexas Treasury
            </div>
          </div>
          <div className="pt-[475.2px] pr-[6.77px] pl-[6.75px] flex flex-col gap-0 items-center justify-start absolute right-[40.8px] left-[40.79999923706055px] top-[-159.77px]">
            <div
              className="text-[#f1f5f9] text-center font-['Poppins-Regular',_sans-serif] text-base leading-6 font-normal relative flex items-center justify-center"
              style={{ letterSpacing: "0.15px" }}
            >
              Manage your project's funds securely with Rexas Treasury. This
              secure platform helps projects manage their treasury with
              multi-sig wallets and real-time financial insights.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RexasSection;
