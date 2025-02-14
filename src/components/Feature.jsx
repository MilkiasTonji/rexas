import React from "react";
import featureImage1 from "../assets/image1.png";
import featureImage2 from "../assets/part-2-f-90-b-4394-f-928-b-143-dff-8-png0.png";
import featureImage3 from "../assets/image2.png";
import featureImage4 from "../assets/image3.png";
import featureImage5 from "../assets/part-5-b-6-f-314417-a-445-aef-57-f-4-png0.png";
import featureImage6 from "../assets/part-6-f-56-f-984-a-2330-c-1523-c-3-c-png0.png";
import featureImage7 from "../assets/part-7-2863-d-100-af-8-ab-056314-e-png0.png";
import featureImage8 from "../assets/image4.png";
import featureImage9 from "../assets/part-9-320-d-5-ae-7-e-08-adcb-532-f-1-png0.png";
import featureImage10 from "../assets/part-10-61-d-3-c-6-e-1377166100045-png0.png";
import featureImage11 from "../assets/part-11-eb-084957710-bb-643-b-399-png0.png";
import featureImage12 from "../assets/part-12-de-01-bab-8-cdbf-888-b-84-bc-png0.png";
import featureImage13 from "../assets/part-13-ed-5-a-3-d-63-ffb-9-d-6452932-png0.png";
import featureImage14 from "../assets/part-14-6194-ab-648-e-9-cd-56-e-810-e-png0.png";
import featureImage15 from "../assets/image5.png";
import featureImage16 from "../assets/part-16-a-195-ee-8-a-5-f-704076-ce-69-png0.png";

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
  featureImage16,
];

const Feature = () => {
  if (images.length === 0) return null; // Avoid rendering if no images

  return (
    <div>
      <div className=" pt-[31.3px] pb-8 flex flex-col gap-16 items-start justify-start absolute right-0 left-0 top-[1572.5px]">
        <div className="flex items-center justify-center self-stretch relative  py-[0.7px]">
          <div
            className=" text-white text-[26px] self-center leading-[39px] font-medium text-center whitespace-nowrap px-4"
            style={{ letterSpacing: "0.24px" }}
          >
            Featured In
          </div>
        </div>

        <div className="overflow-hidden whitespace-nowrap relative w-full">
          <div className="flex items-center w-max animate-scroll">
            {[...Array(2)].map((_, loopIndex) => (
              <div key={loopIndex} className="flex items-center">
                {images.map((src, index) => (
                  <img
                    key={index}
                    className="w-[200px] h-auto mx-6"
                    src={src}
                    alt={`Feature Image ${index + 1}`}
                  />
                ))}
              </div>
            ))}
          </div>
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
          animation: scroll 80s linear infinite;
        }
        `}
      </style>
    </div>
  );
};

export default Feature;
