import React from "react";

const FeatureOne = () => {
  return (
    <section className="bg-themeColor ">
      <div className="max-w-7xl w-full mx-auto pt-16 pb-12 min-md:pt-52 min-md:pb-20">
        <div className="flex flex-col min-md:flex-row px-4 min-md:px-6">
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
            <div className="max-w-5"></div>
          </div>
          {/* image */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default FeatureOne;
