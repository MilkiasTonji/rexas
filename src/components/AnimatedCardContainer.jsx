import React from "react";

const AnimatedCard = ({ link, label, icon }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="no-underline">
      <div className="relative w-44 h-12 rounded-lg overflow-hidden flex items-center justify-center shadow-lg">
        {/* Animated border */}
        <div className="absolute inset-0 animate-spin-slow bg-gradient-to-r from-yellow-500 to-pink-500 rounded-lg"></div>
        {/* Card content */}
        <div className="relative bg-gray-900 w-[95%] h-[90%] rounded-md flex items-center justify-center text-yellow-400 text-lg font-medium">
          {icon && <span className="mr-2 text-xl">{icon}</span>}
          {label}
        </div>
      </div>
    </a>
  );
};

const AnimatedCardContainer = ({link, label, icon, isConnectWallet}) => {
  return (
    <div className="flex justify-center space-x-5 bg-transparent p-8">
        {!isConnectWallet &&       <AnimatedCard
        link="https://rexas.com/rexas-whitepaper.pdf"
        label="Whitepaper"
        icon={
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="text-yellow-500 text-2xl"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M461.81 53.81a4.4 4.4 0 0 0-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 0 0-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 0 0 9.8 10.4l81.07-8.9a180.29 180.29 0 0 0 1.1 18.3 18.15 18.15 0 0 0 5.3 11.09l31.39 31.39a18.15 18.15 0 0 0 11.1 5.3 179.91 179.91 0 0 0 18.19 1.1l-8.89 81a9 9 0 0 0 10.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0 0 39.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1 1 60.38 0 42.65 42.65 0 0 1-60.38 0z"
            ></path>
          </svg>
        }
      />}
     {!isConnectWallet &&  <AnimatedCard link="https://rexas.com/audit/" label="CertiK Audit" />}

     {isConnectWallet && <AnimatedCard link={link} label={label} icon={icon} />}
    </div>
  );
};

export default AnimatedCardContainer;
