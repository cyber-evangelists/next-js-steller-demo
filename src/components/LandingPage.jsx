import React from "react";
import SubHeader from "./header/SubHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  return (
    <section className="bg-themeColor">
      <SubHeader />
      <div className="max-w-7xl w-full mx-auto xs:pt-32 xs:pb-16 min-md:pt-52 min-md:pb-32 flex flex-col items-center justify-center">
        <div className="min-md:mx-10 px-7 max-w-4xl ">
          <div className="flex justify-center mb-5">
            <span className="flex hover:cursor-pointer gap-2 border-x border-t xs:py-1 xs:px-2 rounded-full justify-center items-center min-lg::w-1/3 bg-[#633F99]  shadow-custom-all-sides">
              <p className="text-textPrimary hover:text-white font-semibold">
                API Studio is now in Beta
              </p>
              <FontAwesomeIcon
                icon={faArrowRight}
                color="#7F00FF"
                width={15}
                height={15}
              />
            </span>
          </div>
          <h1 className="text-textPrimary text-center mb-4 min-md:text-6xl font-bold">
            The API Security Framework
          </h1>
          <p className="text-textPrimary text-center xs:text-sm text-xl mb-10 ">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
          <div className="flex flex-col min-md:flex-row items-center justify-center gap-4 pb-3">
            <div className="flex items-center justify-center gap-2 px-5 py-3 bg-btnColor hover:bg-btnHoverColor cursor-pointer bg-white rounded-full sm:w-full">
              Get Started{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
            </div>

            <div className=" px-5 py-3 flex gap-4 justify-center text-center cursor-pointer">
              <svg
                className="text-textPrimary"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z"></path>
              </svg>
              <p className="text-textPrimary font-bold   ">Read the Docs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
