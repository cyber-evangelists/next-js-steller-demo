import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faUserPlus,
  faMagnifyingGlass,
  faExpand,
  faBarcode,
  faFile,
  faXmark,
  faArrowDown,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const TrustUs = () => {
  return (
    <section className="bg-themeColor">
      <div className="max-w-7xl w-full mx-auto min-md:pt-20 pt-8 ">
        <div className="relative   ">
          {/* Background container with blur effect */}
          <div className="absolute inset-0 bg-trustUs bg-start bg-no-repeat blur-2xl z-0 top-[-70px]"></div>

          <div className="pb-12 pt-8 min-md:pt-10 min-md:pb-24 max-w-6xl min-md:w-3/4 mx-6 flex flex-col  relative xs:mx-4 ">
            <h2 className="text-textPrimary pb-4 text-2xl min-md:text-[44px] font-bold ">
              Why trust us?
            </h2>
            <p className="text-textPrimary  min-md:text-xl">
              Many desktop publishing packages and web page editors now use
              lorem ipsum as their default model text, and a search will uncover
              many web sites still in their infancy.
            </p>
          </div>
        </div>

        {/* API */}
        <div className="px-4 min-md:px-6 py-4 min-md:py-8">
          <p className="bg-text-gradient bg-clip-text text-transparent font-medium pb-6">
            API Autherization
          </p>
          <div className="flex flex-col min-md:flex-row gap-8 min-md:gap-12 min-md:mb-2">
            <div className="flex flex-col min-md:flex-row gap-4">
              <div className="mb-1">
                <span className="flex flex-row items-center gap-3">
                  <FontAwesomeIcon
                    icon={faComment}
                    color="#FFFFFF"
                    width={15}
                    height={15}
                  />
                  <h4 className="text-textPrimary text-xl font-medium">
                    Discussion
                  </h4>
                </span>
                <p className="text-textPrimary xs:text-sm">
                  Login box must find the right balance for the user
                  convenience, privacy and security.
                </p>
              </div>
              <div className="mb-1">
                <span className="flex flex-row items-center gap-3">
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    color="#FFFFFF"
                    width={15}
                    height={15}
                  />

                  <h4 className="text-textPrimary text-xl font-medium">
                    Team Views
                  </h4>
                </span>
                <p className="text-textPrimary xs:text-sm">
                  Login box must find the right balance for the user
                  convenience, privacy and security.
                </p>
              </div>
              <div className="mb-1">
                <span className="flex flex-row items-center gap-3">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    color="#FFFFFF"
                    width={15}
                    height={15}
                  />

                  <h4 className="text-textPrimary text-xl font-medium">
                    Powerfull Search
                  </h4>
                </span>
                <p className="text-textPrimary xs:text-sm">
                  Login box must find the right balance for the user
                  convenience, privacy and security.
                </p>
              </div>
            </div>
          </div>
          <hr className="border border-bordorColor mt-12 min-md:mt-20" />
        </div>

        {/* use management */}
        <div className="px-4 min-md:px-6 py-4 min-md:py-8">
          <p className="bg-text-gradient bg-clip-text text-transparent font-medium pb-6">
            User Management
          </p>
          <div className="flex flex-col min-md:flex-row gap-8 min-md:gap-12 min-md:mb-2">
            <div className="flex flex-col min-md:flex-row gap-4">
              <div className="mb-1">
                <span className="flex flex-row items-center gap-3">
                  <FontAwesomeIcon
                    icon={faExpand}
                    color="#FFFFFF"
                    width={15}
                    height={15}
                  />

                  <h4 className="text-textPrimary text-xl font-medium">
                    Discussion
                  </h4>
                </span>
                <p className="text-textPrimary">
                  Login box must find the right balance for the user
                  convenience, privacy and security.
                </p>
              </div>
              <div className="mb-1">
                <span className="flex flex-row items-center gap-3">
                  <FontAwesomeIcon
                    icon={faBarcode}
                    color="#FFFFFF"
                    width={15}
                    height={15}
                  />

                  <h4 className="text-textPrimary text-xl font-medium">
                    Notifications
                  </h4>
                </span>
                <p className="text-textPrimary">
                  Login box must find the right balance for the user
                  convenience, privacy and security.
                </p>
              </div>
              <div className="mb-1">
                <span className="flex flex-row items-center gap-3">
                  <FontAwesomeIcon
                    icon={faFile}
                    color="#FFFFFF"
                    width={15}
                    height={15}
                  />

                  <h4 className="text-textPrimary text-xl font-medium">
                    Integrations
                  </h4>
                </span>
                <p className="text-textPrimary">
                  Login box must find the right balance for the user
                  convenience, privacy and security.
                </p>
              </div>
            </div>
          </div>
          <hr className="border border-bordorColor mt-12 min-md:mt-20" />
        </div>

        {/* standard security */}
        <div className="px-4 min-md:px-6 py-4 min-md:py-8">
          <p className="bg-text-gradient bg-clip-text text-transparent font-medium pb-6">
            Standard Security
          </p>
          <div className="flex flex-col min-md:flex-row gap-8 min-md:gap-12 min-md:mb-2">
            <div className="flex flex-col min-md:flex-row gap-4">
              <div className="mb-1">
                <span className="flex flex-row items-center gap-3">
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="#FFFFFF"
                    width={15}
                    height={15}
                  />

                  <h4 className="text-textPrimary text-xl font-medium">
                    Privacy
                  </h4>
                </span>
                <p className="text-textPrimary xs:text-sm">
                  Login box must find the right balance for the user
                  convenience, privacy and security.
                </p>
              </div>
              <div className="mb-1">
                <span className="flex flex-row items-center gap-3">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    color="#FFFFFF"
                    width={15}
                    height={15}
                  />

                  <h4 className="text-textPrimary text-xl font-medium">
                    Data Export
                  </h4>
                </span>
                <p className="text-textPrimary xs:text-sm">
                  Login box must find the right balance for the user
                  convenience, privacy and security.
                </p>
              </div>
              <div className="mb-1">
                <span className="flex flex-row items-center gap-3">
                  <FontAwesomeIcon
                    icon={faShieldHalved}
                    color="#FFFFFF"
                    width={15}
                    height={15}
                  />

                  <h4 className="text-textPrimary text-xl font-medium">
                    Real-time Sync
                  </h4>
                </span>
                <p className="text-textPrimary xs:text-sm">
                  Login box must find the right balance for the user
                  convenience, privacy and security.
                </p>
              </div>
            </div>
          </div>
          <hr className="border border-bordorColor mt-12 min-md:mt-20" />
        </div>
      </div>
    </section>
  );
};

export default TrustUs;
