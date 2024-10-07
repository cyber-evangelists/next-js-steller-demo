"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

const FeatureOne = () => {
  const [selectedButton, setSelectedButton] = useState();

  const buttonClicked = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  return (
    <section className="bg-themeColor bg-glowTop bg-center bg-no-repeat">
      <div className="max-w-7xl w-full mx-auto pt-16 pb-12 min-md:pt-52 min-md:pb-20">
        <div className="flex flex-col min-md:flex-row px-4 min-md:px-6 gap-5">
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
          <div>
            <div className="flex justify-center items-center">
              <svg
                className="cqczd c3sb3 c2vxt czyer c3x17 cclua ca5ue cqv5f cwmqr blur-svg"
                width="480"
                height="480"
                viewBox="0 0 480 480"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="pulse-a"
                    x1="50%"
                    x2="50%"
                    y1="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#A855F7"></stop>
                    <stop offset="76.382%" stop-color="#FAF5FF"></stop>
                    <stop offset="100%" stop-color="#6366F1"></stop>
                  </linearGradient>
                </defs>
                <g fill-rule="evenodd">
                  <path
                    class="cbmx5"
                    fill="url(#pulse-a)"
                    fill-rule="evenodd"
                    d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                  ></path>
                  <path
                    class="cubym cbmx5"
                    fill="url(#pulse-a)"
                    fill-rule="evenodd"
                    d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                  ></path>
                  <path
                    class="chxkd cbmx5"
                    fill="url(#pulse-a)"
                    fill-rule="evenodd"
                    d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureOne;
