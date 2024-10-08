"use client";
import React, { useState } from "react";
import Image from "next/image";
import loginImg from "@/public/assets/loginBox.png";
import CustomCursor from "./CustomCursor";

const LoginBox = () => {
  const [mouseEnter, setMouseEnter] = useState(false);
  return (
    <section className=" bg-themeColor ">
      <div className="max-w-7xl w-full mx-auto min-md:pt-32 pt-16 ">
        <div className="relative   ">
          {/* Background container with blur effect */}
          <div className="absolute inset-0 bg-loginBox bg-center bg-no-repeat blur-2xl z-0"></div>

          <div className="pb-12 min-md:pb-20 max-w-3xl mx-auto flex flex-col items-center relative xs:mx-4 ">
            <h2 className="text-textPrimary pb-4 min-md:text-[44px] font-bold">
              More than a login box
            </h2>
            <p className="text-textPrimary text-center min-md:text-xl">
              There are many variations available, but the majority have
              suffered alteration in some form, by injected humour, or
              randomised words which don't look even slightly believable.
            </p>
          </div>
        </div>
        <div className=" relative  ">
          {/* image container */}
          <div className="max-w-3xl mx-auto ">
            <div
              className="xs:mx-4 min-md:mx-6 border border-bordorColor rounded-3xl relative overflow-hidden"
              onMouseEnter={() => setMouseEnter(true)}
              onMouseLeave={() => setMouseEnter(false)}
            >
              {mouseEnter ? <CustomCursor /> : null}
              <Image
                src={loginImg}
                width={768}
                height={400}
                className="relative z-10"
              />
            </div>
            <div className="absolute xs:bottom-0 min-md:bottom-28 left-1/2 transform -translate-x-1/2 bg-loginBoxColor blur-3xl w-2/5 h-20 z-0"></div>
          </div>
        </div>
        <hr className=" xs:mx-4 min-md:mx-6 border border-bordorColor mt-12 min-md:mt-20" />
      </div>
    </section>
  );
};

export default LoginBox;
