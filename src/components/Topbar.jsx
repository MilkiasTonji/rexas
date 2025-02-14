import React from "react";

const Topbar = () => {
  return (
    <div>
      <div className="bg-[rgba(255,145,28,0.50)] py-2 flex flex-col items-start absolute right-0 left-0 top-0 overflow-hidden">
        <div className="relative w-full overflow-hidden whitespace-nowrap">
          <div className="flex w-max animate-scroll">
            {[...Array(2)].map((_, loopIndex) => (
              <div
                key={loopIndex}
                className="flex flex-row items-center justify-start"
              >
                <p className="text-white text-[15px] font-normal leading-[22.5px] mx-4">
                  <strong>Please Note:</strong> REXAS Team will never send you
                  messages on any social networks. Please verify our social
                  links via our website: Rexas.com | Never share your Seed
                  Phrase or Private Key with anyone.
                </p>
              </div>
            ))}
          </div>
        </div>

        <style>
          {`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        `}
        </style>
      </div>
    </div>
  );
};

export default Topbar;
