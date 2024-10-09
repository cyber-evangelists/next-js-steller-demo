import React from "react";
import PricingTable from "./PricingTable";
import PricingTableMobileView from "./PricingTableMobileView";

const Pricing = () => {
  return (
    <section className="bg-themeColor">
      <div className="max-w-7xl mx-auto">
        <div className="px-4 min-md:px-6 max-w-6xl mx-auto">
          <div className="py-12 min-md:py-20 relative overflow-hidden">
            {/* radial gradient */}
            <div className="absolute z-0 flex items-center justify-center blur-3xl top-[7%] -translate-y-[100%] -translate-x-1/2 aspect-square left-2/4 bottom-0 h-48 w-96">
              <div className="bg-feature-gradient  inset-0 absolute"></div>
              <div className="bg-feature-gradient-2  w-1/4  inset-0 absolute bottom-0 left-1/2 -translate-x-1/2"></div>
            </div>

            {/* content */}
            <div className="pb-12 min-md:pb-20 text-center mx-auto max-w-4xl">
              <p className="bg-text-gradient bg-clip-text text-transparent font-medium pb-3">
                Pricing Plans
              </p>
              <h2 className="text-textPrimary pb-4 text-4xl min-md:text-5xl font-extrabold">
                Flexible plans and features
              </h2>
              <p className="text-xl text-textPrimary">
                All the lorem ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet.
              </p>
            </div>

            <PricingTable />
            <div className="absolute xs:hidden inset-0 bg-trustUs bg-center bg-no-repeat blur-2xl z-0 top-[72%]"></div>
          </div>
          <div className="pb-12  min-md:hidden text-primary">
            <PricingTableMobileView />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
