"use client";
import React, { useState } from "react";
import git from "@/public/assets/git.png";
import CustomCursor from "../CustomCursor";
import Image from "next/image";

const Infinite = () => {
  const [isActiveCursor, setIsActiveCursor] = useState(null);

  return (
    <div
      className="min-md:w-1/3 border border-bordorColor rounded-3xl p-6 min-md:p-8 overflow-hidden"
      onMouseEnter={() => {
        setIsActiveCursor("box3");
      }}
      onMouseLeave={() => {
        setIsActiveCursor(null);
      }}
    >
      {isActiveCursor === "box3" ? <CustomCursor /> : null}
      <h3 className="font-bold text-textPrimary text-xl">Infinite Options</h3>
      <span className="min-md:w-3/4">
        <p className="text-[#94A3B8] text-[16px]">
          Quickly apply filters to refine your issues lists and create custom
          views.
        </p>
      </span>
      <div className="flex justify-center">
        <Image src={git} width={230} height={230} />
      </div>
    </div>
  );
};

export default Infinite;
