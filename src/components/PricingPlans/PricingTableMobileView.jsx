"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Switch } from "antd";

const PricingTableMobileView = () => {
  const [isYearly, setIsYearly] = useState(false);
  // Prices for monthly and yearly plans
  const prices = {
    monthly: {
      pro: 29,
      team: 54,
      interprise: 85,
    },
    yearly: {
      pro: 24,
      team: 49,
      interprise: 79,
    },
  };
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <div className="flex gap-4 p-4">
          <p className="text-textPrimary font-medium text-[0.875rem]">
            Monthly
          </p>
          <Switch
            checked={isYearly}
            onChange={(checked) => setIsYearly(checked)}
          />
          <p className="text-textPrimary font-medium text-[0.875rem]">
            Yearly <span className="text-[#10B981]">(-20%)</span>
          </p>
        </div>
        <div className="  mx-3 w-full">
          {/* pro starts */}
          <div className="p-6 mb-8 bg-tableBg rounded-3xl">
            <div className="mb-4 pb-4 border-b-2 border-tableBorder text-justify">
              <p className="text-xl font-medium pb-1 bg-text-gradient bg-clip-text text-transparent">
                Pro
              </p>
              <div className="mb-1">
                <span className="text-textPrimary font-medium text-xl">$</span>
                <span className="text-white text-3xl">
                  {isYearly ? prices.yearly.pro : prices.monthly.pro}
                </span>
                <span className="text-textPrimary font-medium text-sm">
                  /mo
                </span>
              </div>
              <p className="text-textPrimary text-sm font-normal">
                Everything at your fingertips.
              </p>
            </div>
            <div className="pb-4 border-b-2 border-tableBorder mb-4">
              <button className="bg-white rounded-full py-1 w-full flex justify-center items-center min-lg:gap-2 lg:px-1 ">
                Get Started
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />
              </button>
            </div>
            {/* usage starts */}
            <div className="mt-6">
              <p className="text-textPrimary py-2 font-bold">Usage</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">100 Social Connections</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">4 Custom Domains</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">Unlimited User Role Management</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">1 External Database</p>
            </div>
            {/* usage ends */}

            {/* features starts */}
            <div className="mt-6">
              <p className="text-textPrimary py-2 font-bold">Features</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">Custom Connections</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">Advanced Development Options</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">Extra Add-ons</p>
            </div>

            {/* features ends */}
          </div>
          {/* pro ends */}

          {/* team starts */}
          <div className="p-6 mb-8 bg-tableBg rounded-3xl">
            <div className="mb-4 pb-4 border-b-2 border-tableBorder text-justify">
              <p className="text-xl font-medium pb-1 bg-text-gradient bg-clip-text text-transparent">
                Team
              </p>
              <div className="mb-1">
                <span className="text-textPrimary font-medium text-xl">$</span>
                <span className="text-white text-3xl">
                  {isYearly ? prices.yearly.team : prices.monthly.team}
                </span>
                <span className="text-textPrimary font-medium text-sm">
                  /mo
                </span>
              </div>
              <p className="text-textPrimary text-sm font-normal">
                Everything at your fingertips.
              </p>
            </div>
            <div className="pb-4 border-b-2 border-tableBorder mb-4">
              <button className="bg-white rounded-full py-1 w-full flex justify-center items-center min-lg:gap-2 lg:px-1 ">
                Get Started
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />
              </button>
            </div>
            {/* usage starts */}
            <div className="mt-6">
              <p className="text-textPrimary py-2 font-bold">Usage</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">250 Social Connections</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">Unlimited Custom Domains</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">Unlimited User Role Management</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">5 External Database</p>
            </div>
            {/* usage ends */}

            {/* features start */}
            <div className="mt-6">
              <p className="text-textPrimary py-2 font-bold">Features</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">Custom Connections</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">Advanced Development Options</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">Extra Add-ons</p>
            </div>
            {/* features start */}

            {/* support starts */}
            <div className="mt-6">
              <p className="text-textPrimary py-2 font-bold">Support</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">Premium Support</p>
            </div>
            {/* support ends */}
          </div>
          {/* team ends */}

          {/* interprise starts */}
          <div className="p-6  bg-tableBg rounded-3xl">
            <div className="mb-4 pb-4 border-b-2 border-tableBorder text-justify">
              <p className="text-xl font-medium pb-1 bg-text-gradient bg-clip-text text-transparent">
                Interprise
              </p>
              <div className="mb-1">
                <span className="text-textPrimary font-medium text-xl">$</span>
                <span className="text-white text-3xl">
                  {isYearly
                    ? prices.yearly.interprise
                    : prices.monthly.interprise}
                </span>
                <span className="text-textPrimary font-medium text-sm">
                  /mo
                </span>
              </div>
              <p className="text-textPrimary text-sm font-normal">
                Everything at your fingertips.
              </p>
            </div>
            <div className="pb-4 border-b-2 border-tableBorder mb-4">
              <button className="bg-white rounded-full py-1 w-full flex justify-center items-center min-lg:gap-2 lg:px-1 ">
                Get Started
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />
              </button>
            </div>
            {/* usage starts */}
            <div className="mt-6">
              <p className="text-textPrimary py-2 font-bold">Usage</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">Unlimited Social Connections</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">Unlimited Custom Domains</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">Unlimited User Role Management</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">Unlimited External Database</p>
            </div>
            {/* usage ends */}

            {/* features starts */}
            <div className="mt-6">
              <p className="text-textPrimary py-2 font-bold">Features</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">Custom Connections</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">Advanced Development Options</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">Extra Add-ons</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">Admin Roles</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">Deploy and Monitor</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">Enterprise Add-ons</p>
            </div>
            {/* features ends */}

            {/* support starts */}
            <div className="mt-6">
              <p className="text-textPrimary py-2 font-bold">Support</p>
            </div>
            <div className="border-b-2 border-tableBorder py-2 flex flex-row gap-4">
              <FontAwesomeIcon
                icon={faCheck}
                color="#7F00FF"
                width={15}
                height={15}
              />{" "}
              <p className="text-textPrimary">Premium Support</p>
            </div>
            {/* support ends */}
          </div>
          {/* interprise ends */}
        </div>
      </div>
    </>
  );
};

export default PricingTableMobileView;
