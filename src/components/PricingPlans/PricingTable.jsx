"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Switch } from "antd";

const PricingTable = () => {
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
    <div className="relative md:hidden">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="py-6 px-6 text-left">
              <div className="border-b-2 border-tableBorder pb-5">
                <div className="flex justify-between gap-4">
                  <p className="text-textPrimary text-[16px] font-normal">
                    Monthly
                  </p>
                  <Switch
                    checked={isYearly}
                    onChange={(checked) => setIsYearly(checked)}
                  />
                  <p className="text-textPrimary text-[16px] font-normal">
                    Yearly <span className="text-[#10B981]">(-20%)</span>
                  </p>
                </div>
              </div>
            </th>
            {/* Pro */}
            <th className="min-md:rounded-tl-3xl py-6 bg-tableBg px-6">
              <div className="mb-4 pb-4 border-b-2 border-tableBorder text-justify">
                <p className="text-xl font-medium pb-1 bg-text-gradient bg-clip-text text-transparent">
                  Pro
                </p>
                <div className="mb-1">
                  <span className="text-textPrimary font-medium text-xl">
                    $
                  </span>
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
              <div className="pb-4">
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
            </th>

            {/* Team */}
            <th className="py-6 bg-tableBg px-6">
              <div className="mb-4 pb-4 border-b-2 border-tableBorder text-justify">
                <p className="text-xl font-medium pb-1 bg-text-gradient bg-clip-text text-transparent">
                  Team
                </p>
                <div className="mb-1">
                  <span className="text-textPrimary font-medium text-xl">
                    $
                  </span>
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
              <div className="pb-4">
                <button className="bg-white rounded-full py-1 w-full flex min-lg:gap-2 lg:px-1 justify-center items-center">
                  Get Started
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    color="#7F00FF"
                    width={15}
                    height={15}
                  />
                </button>
              </div>
            </th>

            {/* Interprise */}
            <th className="min-md:rounded-tr-3xl py-6 bg-tableBg px-6">
              <div className="mb-4 pb-4 border-b-2 border-tableBorder text-justify">
                <p className="text-xl font-medium pb-1 bg-text-gradient bg-clip-text text-transparent">
                  Interprise
                </p>
                <div className="mb-1">
                  <span className="text-textPrimary font-medium text-xl">
                    $
                  </span>
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
              <div className="pb-4">
                <button className="bg-white rounded-full py-1 w-full flex min-lg:gap-2 lg:px-1 justify-center items-center">
                  Get Started
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    color="#7F00FF"
                    width={15}
                    height={15}
                  />
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* usage */}
          <tr>
            <td className="py-6 px-6 text-left">
              <p className="text-white font-bold">Usage</p>
            </td>
            <td className="bg-tableBg "></td>
            <td className="bg-tableBg "></td>
            <td className="bg-tableBg "></td>
          </tr>
          <tr>
            <td className=" px-6 text-left ">
              <p className="text-textPrimary border-b-2 border-tableBorder">
                Social Connections
              </p>
            </td>
            <td className="bg-tableBg px-6">
              <div className="border-b-2 border-tableBorder pb-2 flex flex-row gap-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />{" "}
                <p className="text-textPrimary">100</p>
              </div>
            </td>
            <td className="bg-tableBg px-6">
              <div className="border-b-2 border-tableBorder pb-2 flex flex-row gap-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />{" "}
                <p className="text-textPrimary">250</p>
              </div>
            </td>
            <td className="bg-tableBg px-6">
              <div className="border-b-2 border-tableBorder pb-2 flex flex-row gap-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />{" "}
                <p className="text-textPrimary">Unlimited</p>
              </div>
            </td>
          </tr>

          <tr>
            <td className=" px-6 text-left ">
              <p className="text-textPrimary border-b-2 py-2 border-tableBorder">
                Custom Domains
              </p>
            </td>
            <td className="bg-tableBg  px-6 ">
              <div className="border-b-2 border-tableBorder pb-2 flex flex-row gap-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />{" "}
                <p className="text-textPrimary">4</p>
              </div>
            </td>
            <td className="bg-tableBg  px-6 ">
              <div className="border-b-2 border-tableBorder pb-2 flex flex-row gap-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />{" "}
                <p className="text-textPrimary">Unlimited</p>
              </div>
            </td>
            <td className="bg-tableBg text-textPrimary px-6 ">
              <div className="border-b-2 border-tableBorder pb-2 flex flex-row gap-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />{" "}
                <p className="text-textPrimary">Unlimited</p>
              </div>
            </td>
          </tr>

          <tr>
            <td className=" px-6 text-left ">
              <p className="text-textPrimary border-b-2 py-2 border-tableBorder">
                User Role Management
              </p>
            </td>
            <td className="bg-tableBg  px-6 ">
              <div className="border-b-2 border-tableBorder pb-2 flex flex-row gap-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />{" "}
                <p className="text-textPrimary">Unlimited</p>
              </div>
            </td>
            <td className="bg-tableBg  px-6 ">
              <div className="border-b-2 border-tableBorder pb-2 flex flex-row gap-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />{" "}
                <p className="text-textPrimary">Unlimited</p>
              </div>
            </td>
            <td className="bg-tableBg  px-6 ">
              <div className="border-b-2 border-tableBorder pb-2 flex flex-row gap-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />{" "}
                <p className="text-textPrimary">Unlimited</p>
              </div>
            </td>
          </tr>

          <tr>
            <td className=" px-6 text-left ">
              <p className="text-textPrimary border-b-2 py-2 border-tableBorder">
                External Database
              </p>
            </td>
            <td className="bg-tableBg  px-6 ">
              <div className="border-b-2 border-tableBorder pb-2 flex flex-row gap-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />{" "}
                <p className="text-textPrimary">1</p>
              </div>
            </td>
            <td className="bg-tableBg  px-6 ">
              <div className="border-b-2 border-tableBorder pb-2 flex flex-row gap-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />{" "}
                <p className="text-textPrimary">5</p>
              </div>
            </td>
            <td className="bg-tableBg  px-6 ">
              <div className="border-b-2 border-tableBorder pb-2 flex flex-row gap-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />{" "}
                <p className="text-textPrimary">Unlimited</p>
              </div>
            </td>
          </tr>

          {/* features */}
          <tr>
            <td className="py-6 px-6 text-left">
              <p className="text-white font-bold">Features</p>
            </td>
            <td className="bg-tableBg "></td>
            <td className="bg-tableBg "></td>
            <td className="bg-tableBg "></td>
          </tr>

          <tr>
            <td className=" px-6 text-left ">
              <p className="text-textPrimary border-b-2 py-2 border-tableBorder">
                Custom Connections
              </p>
            </td>
            <td className="bg-tableBg text-textPrimary px-6 ">
              <div className="border-b-2 border-tableBorder pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />
              </div>
            </td>
            <td className="bg-tableBg text-textPrimary px-6 ">
              <div className="border-b-2 border-tableBorder pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />
              </div>
            </td>
            <td className="bg-tableBg text-textPrimary px-6 ">
              <div className="border-b-2 border-tableBorder pb-2 ">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />{" "}
              </div>
            </td>
          </tr>

          <tr>
            <td className=" px-6 text-left ">
              <p className="text-textPrimary border-b-2 py-2 border-tableBorder">
                Advanced Development Options
              </p>
            </td>
            <td className="bg-tableBg text-textPrimary px-6 ">
              <div className="border-b-2 border-tableBorder pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />
              </div>
            </td>
            <td className="bg-tableBg text-textPrimary px-6 ">
              <div className="border-b-2 border-tableBorder pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />
              </div>
            </td>
            <td className="bg-tableBg text-textPrimary px-6 ">
              <div className="border-b-2 border-tableBorder pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />
              </div>
            </td>
          </tr>

          <tr>
            <td className=" px-6 text-left ">
              <p className="text-textPrimary border-b-2 py-2 border-tableBorder">
                Extra Add-ons
              </p>
            </td>
            <td className="bg-tableBg text-textPrimary px-6 ">
              <div className="border-b-2 border-tableBorder pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />
              </div>
            </td>
            <td className="bg-tableBg text-textPrimary px-6 ">
              <div className="border-b-2 border-tableBorder pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />
              </div>
            </td>
            <td className="bg-tableBg text-textPrimary px-6 ">
              <div className="border-b-2 border-tableBorder pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />
              </div>
            </td>
          </tr>

          <tr>
            <td className=" px-6 text-left ">
              <p className="text-textPrimary border-b-2 py-2 border-tableBorder">
                Admin Roles
              </p>
            </td>
            <td className="bg-tableBg text-textPrimary px-6 ">
              <div className="border-b-2 border-tableBorder pb-7"></div>
            </td>
            <td className="bg-tableBg text-textPrimary px-6 ">
              <div className="border-b-2 border-tableBorder pb-7"></div>
            </td>
            <td className="bg-tableBg text-textPrimary px-6 ">
              <div className="border-b-2 border-tableBorder pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />
              </div>
            </td>
          </tr>

          <tr>
            <td className=" px-6 text-left ">
              <p className="text-textPrimary border-b-2 py-2 border-tableBorder">
                Deploy and Monitor
              </p>
            </td>
            <td className="bg-tableBg text-textPrimary px-6 ">
              <div className="border-b-2 border-tableBorder pb-7"></div>
            </td>
            <td className="bg-tableBg text-textPrimary px-6 ">
              <div className="border-b-2 border-tableBorder pb-7"></div>
            </td>
            <td className="bg-tableBg text-textPrimary px-6 ">
              <div className="border-b-2 border-tableBorder pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />
              </div>
            </td>
          </tr>

          <tr>
            <td className=" px-6 text-left ">
              <p className="text-textPrimary border-b-2 py-2 border-tableBorder">
                Enterprise Add-ons
              </p>
            </td>
            <td className="bg-tableBg text-textPrimary px-6 ">
              <div className="border-b-2 border-tableBorder pb-10"></div>
            </td>
            <td className="bg-tableBg text-textPrimary px-6 ">
              <div className="border-b-2 border-tableBorder pb-10"></div>
            </td>
            <td className="bg-tableBg text-textPrimary px-6 ">
              <div className="border-b-2 border-tableBorder pb-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />
              </div>
            </td>
          </tr>

          {/* Support */}
          <tr>
            <td className="py-6 px-6 text-left">
              <p className="text-white font-bold">Support</p>
            </td>
            <td className="bg-tableBg "></td>
            <td className="bg-tableBg "></td>
            <td className="bg-tableBg "></td>
          </tr>

          <tr>
            <td className=" px-6 text-left pb-6">
              <p className="text-textPrimary border-b-2 py-2 border-tableBorder">
                Premium Support
              </p>
            </td>
            <td className="bg-tableBg text-textPrimary px-6 pb-6 rounded-bl-3xl">
              <div className="border-b-2 border-tableBorder pb-10"></div>
            </td>
            <td className="bg-tableBg text-textPrimary px-6 pb-6">
              <div className="border-b-2 border-tableBorder pb-10"></div>
            </td>
            <td className="bg-tableBg text-textPrimary px-6 rounded-br-3xl pb-6">
              <div className="border-b-2 border-tableBorder  pb-3">
                <FontAwesomeIcon
                  icon={faCheck}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {/* <div className="absolute inset-0 bg-trustUs bg-center bg-no-repeat  z-0 top-[10%]"></div> */}
    </div>
  );
};

export default PricingTable;
