"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEyeSlash,
  faFile,
  faHeart,
  faLink,
  faMagnifyingGlassMinus,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import ex_img from "@/public/assets/extensibility.png";
import git from "@/public/assets/git.png";
import mainImg from "@/public/assets/fasterSmarter.png";
import CustomCursor from "../CustomCursor";
import Extensibility from "../smarterFeatureChild/Extensibility";
import Infinite from "../smarterFeatureChild/Infinite";

const SmaterFeature = () => {
  const [isActiveCursor, setIsActiveCursor] = useState(null);
  return (
    <section className="bg-themeColor">
      <div className="max-w-7xl w-full mx-auto pt-16  min-md:pt-32 ">
        <div className="flex flex-col  px-4 min-md:px-6 gap-5 items-center">
          <div className="pb-12 min-md:pb-20 flex flex-col items-center max-w-3xl">
            <h2 className="text-textPrimary pb-4 text-4xl font-semibold">
              Faster. Smarter.
            </h2>
            <p className="text-xl text-textPrimary text-center">
              There are many variations available, but the majority have
              suffered alteration in some form, by injected humour, or
              randomised words which don't look even slightly believable.
            </p>
          </div>
        </div>

        {/* box */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => {
            setIsActiveCursor("box1");
            console.log("testin in parent", isActiveCursor);
          }}
          onMouseLeave={() => {
            setIsActiveCursor(null);
          }}
        >
          {isActiveCursor == "box1" ? <CustomCursor /> : null}
          <div className="flex flex-col min-md:flex-row justify-between items-center border sm:mx-4  min-sm:mx-6 border-bordorColor rounded-3xl ">
            <div className="p-6 min-md:p-8 min-md:max-w-md">
              <div className="mb-5 flex flex-col ">
                <h3 className="font-bold text-textPrimary text-xl">
                  Optimized for security
                </h3>
                <p className="text-[#94A3B8] ">
                  Optimize for user experience and privacy. Use social login
                  integrations, lower user friction, incorporate rich user
                  profiling, and facilitate more transactions.
                </p>
              </div>
              <span className="border border-textPrimary px-4 py-2 rounded-full bg-slate-900">
                <button className="text-textPrimary">
                  Learn More{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    color="#7F00FF"
                    width={15}
                    height={15}
                  />{" "}
                </button>
              </span>
            </div>
            <div className="relative overflow-hidden">
              <Image src={mainImg} width={504} height={400} />
              <div className="absolute inset-0 bg-smartFeature bg-right-top bg-no-repeat blur-2xl z-0"></div>
            </div>
          </div>
          {/* radial gradient */}
          <div className="absolute z-0 flex items-center justify-center blur-3xl -translate-y-1/4 -translate-x-1/2 aspect-square left-2/4 bottom-0 h-48 w-96">
            <div className="bg-feature-gradient  inset-0 absolute"></div>
            <div className="bg-feature-gradient-2  w-1/4  inset-0 absolute bottom-0 left-1/2 -translate-x-1/2"></div>
          </div>
        </div>
        {/* 2 paraller boxes */}
        <div className="flex flex-col min-md:flex-row gap-10 mt-8 sm:mx-4 mb-12 min-sm:mx-6 min-md:mb-20">
          {/* <div
            className="min-md:w-4/6 border border-bordorColor flex flex-col p-6 min-md:p-8 rounded-3xl overflow-hidden"
            onMouseEnter={() => {
              setIsActiveCursor("box2");
            }}
            onMouseLeave={() => {
              setIsActiveCursor(null);
            }}
          >
            {isActiveCursor == "box2" ? <CustomCursor /> : null}
            <h3 className="font-bold text-textPrimary text-xl">
              Extensibility
            </h3>
            <span className="min-md:w-3/4">
              <p className="text-[#94A3B8] text-[16px]">
                Your login box must find the right balance between user
                convenience, privacy and security.
              </p>
            </span>
            <div className="flex justify-center">
              <Image src={ex_img} width={536} height={230} />
            </div>
          </div> */}
          <Extensibility />
          {/* <div
            className="min-md:w-1/3 border border-bordorColor rounded-3xl p-6 min-md:p-8 overflow-hidden"
            onMouseEnter={() => {
              setIsActiveCursor("box3");
            }}
            onMouseLeave={() => {
              setIsActiveCursor(null);
            }}
          >
            {isActiveCursor === "box3" ? <CustomCursor /> : null}
            <h3 className="font-bold text-textPrimary text-xl">
              Infinite Options
            </h3>
            <span className="min-md:w-3/4">
              <p className="text-[#94A3B8] text-[16px]">
                Quickly apply filters to refine your issues lists and create
                custom views.
              </p>
            </span>
            <div className="flex justify-center">
              <Image src={git} width={230} height={230} />
            </div>
          </div> */}
          <Infinite />
        </div>

        <div className="grid grid-cols-1 min-md:grid-cols-3 sm:mx-4 min-sm:mx-6 gap-8">
          <div className="flex flex-col ">
            <span className="flex items-center gap-6 mb-1">
              <FontAwesomeIcon
                icon={faHeart}
                color="#FFFFFF"
                height={20}
                width={20}
              />
              <h4 className="text-textPrimary font-bold xs:text-[16px] text-xl">
                Filters
              </h4>
            </span>
            <p className="text-textPrimary xs:text-sm text-[16px]">
              Login box must find the right balance for the user convenience,
              privacy and security.
            </p>
          </div>
          <div className="flex flex-col ">
            <span className="flex items-center gap-6 mb-1">
              <FontAwesomeIcon
                icon={faLink}
                color="#FFFFFF"
                height={20}
                width={20}
              />
              <h4 className="text-textPrimary font-bold xs:text-[16px] text-xl">
                Configurable
              </h4>
            </span>
            <p className="text-textPrimary xs:text-sm text-[16px]">
              Login box must find the right balance for the user convenience,
              privacy and security.
            </p>
          </div>
          <div className="flex flex-col ">
            <span className="flex items-center gap-6 mb-1">
              <FontAwesomeIcon
                icon={faSquareCheck}
                color="#FFFFFF"
                height={20}
                width={20}
              />
              <h4 className="text-textPrimary font-bold xs:text-[16px] text-xl">
                Adaptive
              </h4>
            </span>
            <p className="text-textPrimary xs:text-sm text-[16px]">
              Login box must find the right balance for the user convenience,
              privacy and security.
            </p>
          </div>
          <div className="flex flex-col ">
            <span className="flex items-center gap-6 mb-1">
              <FontAwesomeIcon
                icon={faMagnifyingGlassMinus}
                color="#FFFFFF"
                height={20}
                width={20}
              />
              <h4 className="text-textPrimary font-bold xs:text-[16px] text-xl">
                Autherization
              </h4>
            </span>
            <p className="text-textPrimary xs:text-sm text-[16px]">
              Login box must find the right balance for the user convenience,
              privacy and security.
            </p>
          </div>
          <div className="flex flex-col ">
            <span className="flex items-center gap-6 mb-1">
              <FontAwesomeIcon
                icon={faFile}
                color="#FFFFFF"
                height={20}
                width={20}
              />
              <h4 className="text-textPrimary font-bold xs:text-[16px] text-xl">
                Management
              </h4>
            </span>
            <p className="text-textPrimary xs:text-sm text-[16px]">
              Login box must find the right balance for the user convenience,
              privacy and security.
            </p>
          </div>
          <div className="flex flex-col ">
            <span className="flex items-center gap-6 mb-1">
              <FontAwesomeIcon
                icon={faEyeSlash}
                color="#FFFFFF"
                height={20}
                width={20}
              />
              <h4 className="text-textPrimary font-bold xs:text-[16px] text-xl">
                Building
              </h4>
            </span>
            <p className="text-textPrimary xs:text-sm text-[16px]">
              Login box must find the right balance for the user convenience,
              privacy and security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmaterFeature;
