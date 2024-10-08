import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BusinessComp = () => {
  return (
    <section className="bg-themeColor overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        <div className="px-4 min-md:px-6 py-12  min-md:py-20 relative">
          {/* radial gradient */}
          <div className="absolute z-0 flex items-center justify-center blur-2xl -top-16  -translate-x-1/2 aspect-square left-2/4 bottom-0 h-48 w-3/6 ">
            <div className="bg-feature-gradient inset-0 absolute"></div>
            <div className="bg-business-gradient w-3/6 h-20 inset-0 absolute bottom-0 left-1/2 -translate-x-1/2"></div>
          </div>

          {/* bg shape */}
          <div className="absolute inset-0 bg-trustUs bg-start bg-no-repeat blur-2xl z-0 min-md:top-52 min-md:left-20"></div>

          {/* content */}
          <div className=" max-w-3xl mx-auto min-md:mt-14 flex flex-col items-center relative xs:mx-4 ">
            <p className="bg-text-gradient bg-clip-text text-transparent font-medium pb-3">
              The security first plateform
            </p>
            <h2 className="text-textPrimary pb-4 min-md:text-[44px] font-bold">
              Take control of your business
            </h2>
            <p className="text-textPrimary text-center min-md:text-xl">
              All the lorem ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet.
            </p>
            <div className="mt-4 min-md:mt-8 flex items-center justify-center gap-2 px-5 py-3 bg-btnColor cursor-pointer bg-white rounded-full sm:w-full">
              Get Started{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessComp;
