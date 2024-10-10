"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { navLinks } from "@/NavLinks";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const SubHeader = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="max-w-7xl w-full mx-auto ">
        <div className="h-20 flex flex-row justify-between items-center px-4  min-md:px-6">
          <div className="mr-4">
            <Image src={logo} alt="logo" />
          </div>

          {/* Normal Navbar for larger screens */}
          <div className=" sm:hidden">
            <ul className="flex flex-row gap-6 min-lg:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  className="hover:cursor-pointer hover:font-bold text-textPrimary"
                >
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>

          <ul className="flex justify-center items-center gap-2">
            <li className="text-secondry px-5 py-3 text-textPrimary cursor-pointer">
              Sign in
            </li>
            <li className="flex items-center gap-2 px-2 min-lg:px-5 py-1 text-textPrimary bg-signUp-Gradient border cursor-pointer text-primary rounded-full">
              Sign up
              <span className="text-arrowColor">
                {" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color="#7F00FF"
                  width={15}
                  height={15}
                />{" "}
              </span>
            </li>
            {toggle ? (
              <FontAwesomeIcon
                icon={faBars}
                size="2x"
                className=" cursor-pointer text-textPrimary min-sm:hidden transition-transform duration-300 ease-in-out"
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faX}
                size="2x"
                className=" cursor-pointer text-textPrimary min-sm:hidden transition-transform duration-300 ease-in-out transform rotate-180"
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
            )}
          </ul>
        </div>
        {/* Mobile Dropdown Menu */}
        {!toggle ? (
          <div className="min-sm:block bg-themeColor border border-bordorColor rounded-2xl mx-6  px-4  transition-all duration-300 ease-in-out">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.url} className="text-textPrimary">
                  <Link href={link.url} className="hover:font-bold">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SubHeader;
