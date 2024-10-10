"use client";
import React from "react";
import logoImg from "@/public/assets/svg-image-1.svg";
import cancel from "@/public/assets/cancel.svg";
import Image from "next/image";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const TopHeader = ({ setHeaderVisible }) => {
  const menuItems = (
    <Menu
      items={[
        {
          label: "Home",
          key: "1",
        },
        {
          label: "About",
          key: "2",
        },
        {
          label: "Contact",
          key: "3",
        },
      ]}
    />
  );
  return (
    <section className="bg-headerBg ">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex justify-between items-center py-4 lg:px-5 h-18 w-full  z-30 relative">
          <div className="flex md:flex-1">
            <h1 className="m-0">
              <Image src={logoImg} alt="logo" />
            </h1>
          </div>
          <div className="flex items-center flex-1 justify-end">
            <div className="   text-sm mr-3 flex gap-3">
              <div className="sm:hidden font-medium text-gray-50 border border-gray-600 rounded-lg py-1.5 px-3 cursor-pointer w-36   min-md:flex items-center justify-center">
                <Dropdown overlay={menuItems} trigger={["click"]}>
                  <a className="flex gap-14 items-center justify-center">
                    <span className="whitespace-nowrap overflow-hidden overflow-ellipsis w-[calc(100% - 22px)]">
                      Home
                    </span>
                    <DownOutlined className="" />
                  </a>
                </Dropdown>
              </div>
              <div className="flex items-center gap-5">
                <button className="js-buy btn-xs text-white font-bold text-[14px] bg-violet-500 hover:bg-violet-600 outline-none px-5 py-1  min-lg:py-3 rounded-lg box-border">
                  <span>
                    Buy Now <span className="text-white/50">-</span> $49{" "}
                  </span>
                </button>
                <span
                  className="cursor-pointer"
                  onClick={() => setHeaderVisible(false)}
                >
                  <Image src={cancel} width={20} height={10} alt="cancel" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
