import React from "react";
import logo from "@/public/assets/logo.svg";
import { company, products, legals, resources } from "@/footerLinks";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className="bg-themeColor">
      <div className="max-w-7xl w-full mx-auto">
        <div className="  px-4 min-md:px-6 py-8 min-md:py-12">
          <div className="grid xs:grid-flow-dense xs:grid-cols-1 min-md:grid-cols-5 gap-6 min-md:w-full">
            <div className="xs:mb-12 xs:order-last">
              <div className="mb-4">
                <Image src={logo} />
              </div>
              <p className="text-[14px] font-semibold text-textPrimary">
                © Cruip.com - All rights reserved.
              </p>
              <div className="flex flex-row gap-6 min-md:mt-20">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  color="#7F00FF"
                  width={30}
                  height={30}
                />

                <FontAwesomeIcon
                  icon={faGithub}
                  color="#7F00FF"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <div className="">
              <h3 className="font-bold mb-7 text-textPrimary">PRODUCTS</h3>
              <ul className="flex flex-col">
                {products.map((pro, index) => {
                  return (
                    <li
                      key={pro.id}
                      className="mb-3 hover:cursor-pointer text-textPrimary hover:text-white "
                    >
                      <Link href={pro.url}>{pro.proName}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="">
              <h3 className="font-bold mb-7 text-textPrimary">COMPANY</h3>
              <ul className="flex flex-col">
                {company.map((info, index) => {
                  return (
                    <li
                      key={info.id}
                      className="mb-3 hover:cursor-pointer text-textPrimary hover:text-primary "
                    >
                      <Link href={info.url}> {info.info} </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="">
              <h3 className="font-bold mb-7 text-textPrimary">RESORCES</h3>
              <ul className="flex flex-col">
                {resources.map((res, index) => {
                  return (
                    <li
                      key={res.id}
                      className="mb-3 hover:cursor-pointer text-textPrimary hover:text-white "
                    >
                      <Link href={res.url}> {res.info} </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="">
              <h3 className="font-bold mb-7 text-textPrimary">PROJECTS</h3>
              <ul className="flex flex-col">
                {legals.map((info, index) => {
                  return (
                    <li
                      key={info.id}
                      className="mb-3 hover:cursor-pointer text-textPrimary hover:text-white "
                    >
                      <Link href={info.url}> {info.info} </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
