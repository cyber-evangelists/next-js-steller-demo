"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import glow from "@/public/assets/featureone.png";
import cross from "@/public/assets/cross.png";
import Image from "next/image";

const FeatureOne = () => {
  const [selectedButton, setSelectedButton] = useState();

  const buttonClicked = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  return (
    <section className="bg-themeColor bg-glowTop bg-center bg-no-repeat">
      <div className="max-w-7xl w-full mx-auto pt-16 pb-12 min-md:pt-20 min-md:pb-20">
        <div className="flex flex-col min-md:flex-row px-4 min-md:px-6 gap-10">
          {/* content */}
          <div className="flex flex-col min-md:w-3/6">
            <p className="bg-text-gradient bg-clip-text text-transparent font-medium pb-3">
              The security first plateform
            </p>
            <h3 className="text-3xl min-md:text-4xl pb-3 text-textPrimary bg-text-gradient-2 bg-clip-text text-transparent font-bold">
              Simplify your security with authentication services
            </h3>
            <p className="text-textPrimary text-xl mb-8">
              Define access roles for the end-users, and extend your
              authorization capabilities to implement dynamic access control.
            </p>
            <div className="max-w-80 flex flex-col">
              <button
                className={`text-textPrimary text-sm py-2 px-3 bg-[#1e293b] border ${
                  selectedButton === 0
                    ? "border-[#7E22CE]"
                    : "border-textPrimary"
                } rounded-md flex items-center gap-4`}
                onClick={() => buttonClicked(0)}
              >
                <FontAwesomeIcon icon={faFile} />
                Simplyfy your security
              </button>
              <button
                className={`text-textPrimary text-sm py-2 px-3 bg-[#1e293b] border ${
                  selectedButton === 1
                    ? "border-[#7E22CE]"
                    : "border-textPrimary"
                } rounded-md flex items-center gap-4 mt-3`}
                onClick={() => buttonClicked(1)}
              >
                <FontAwesomeIcon icon={faExpand} />
                Customer Identity
              </button>
              <button
                className={`text-textPrimary text-sm py-2 px-3 bg-[#1e293b] border ${
                  selectedButton === 2
                    ? "border-[#7E22CE]"
                    : "border-textPrimary"
                } rounded-md flex items-center gap-4 mt-3`}
                onClick={() => buttonClicked(2)}
              >
                Adaptable authentication
              </button>
            </div>
          </div>
          {/* image */}

          <div className="xs:hidden flex justify-center items-center min-md:w-3/6 ">
            {/* <Image src={glow} width={400} height={400} className="blur" /> */}
            <div className="relative bg-black rounded-xl">
              <Image src={cross} width={23} height={25} className="m-6" />
            </div>

            {/* Waves container */}
            <div className="absolute w-[300px] h-[300px]">
              <div className="wave-container absolute inset-0 ">
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureOne;
