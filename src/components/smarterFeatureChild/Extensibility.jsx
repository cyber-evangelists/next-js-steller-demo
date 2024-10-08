"use client";
import React, { useState } from "react";
import Image from "next/image";
import ex_img from "@/public/assets/extensibility.png";
import CustomCursor from "../CustomCursor";

const Extensibility = () => {
  const [isActiveCursor, setIsActiveCursor] = useState(null);
  return (
    <div
      className="min-md:w-4/6 border border-bordorColor flex flex-col p-6 min-md:p-8 rounded-3xl overflow-hidden"
      onMouseEnter={() => {
        setIsActiveCursor("box2");
        console.log("testing in child", isActiveCursor);
      }}
      onMouseLeave={() => {
        setIsActiveCursor(null);
      }}
    >
      {isActiveCursor == "box2" ? <CustomCursor /> : null}
      <h3 className="font-bold text-textPrimary text-xl">Extensibility</h3>
      <span className="min-md:w-3/4">
        <p className="text-[#94A3B8] text-[16px]">
          Your login box must find the right balance between user convenience,
          privacy and security.
        </p>
      </span>
      <div className="flex justify-center">
        <Image src={ex_img} width={536} height={230} />
      </div>
    </div>
  );
};

export default Extensibility;
