import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "@/carouselData";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CarousalComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet (up to 1024px)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Mobile (up to 640px)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-next" onClick={onClick}>
        <span>→</span>
      </div>
    );
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-prev" onClick={onClick}>
        <span>←</span>
      </div>
    );
  };

  return (
    <section className="bg-themeColor">
      <div className="max-w-7xl w-full mx-auto ">
        <div className="px-4 min-md:px-6 pt-12 pb-20 min-md:pt-20 min-md:pb-20">
          <div className="pb-12 min-md:pb-20 max-w-3xl mx-auto flex flex-col items-center relative xs:mx-4 ">
            <p className="bg-text-gradient bg-clip-text text-transparent font-medium pb-3">
              The security first plateform
            </p>
            <h2 className="text-textPrimary pb-4 min-md:text-[44px] font-bold">
              Spot issues faster
            </h2>
            <p className="text-textPrimary text-center min-md:text-xl">
              All the lorem ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet.
            </p>
          </div>

          <div className="relative ">
            <Slider
              {...settings}
              nextArrow={<CustomNextArrow />}
              prevArrow={<CustomPrevArrow />}
            >
              {data.map((cardItem, index) => {
                return (
                  <div key={index} className="min-w-[352px]   min-md:p-6 ">
                    <div className="border border-bordorColor rounded-3xl px-5 py-4">
                      <Image
                        src={cardItem.url}
                        className="mb-3"
                        alt={cardItem.itemName}
                      />
                      <h2 className="text-textPrimary font-bold text-xl ">
                        {cardItem.itemName}
                      </h2>
                      <p className="text-textPrimary">{cardItem.desc}</p>
                      <p className="text-textPrimary text-end px-5 cursor-pointer hover:font-semibold">
                        {cardItem.learn}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          color="#7F00FF"
                          width={15}
                          height={15}
                        />
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
            <div
              className="absolute bottom-11 left-1/4  bg-loginBoxColor blur-3xl w-1/4 h-8 z-0 pointer-events-none"
              style={{ transform: "translateX(-80%)" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarousalComponent;
