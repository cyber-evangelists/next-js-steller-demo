import React from "react";
import img1 from "@/public/assets/marque/airBnb.svg";
import img2 from "@/public/assets/marque/amazon.svg";
import img3 from "@/public/assets/marque/cadbury.svg";
import img4 from "@/public/assets/marque/canon.svg";
import img5 from "@/public/assets/marque/fb.svg";
import img6 from "@/public/assets/marque/hubSpot.svg";
import img7 from "@/public/assets/marque/quora.svg";
import img8 from "@/public/assets/marque/tinder.svg";
// import img9 from "@/public/assets/marque/client-6.svg";
import Image from "next/image";

const Marque = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <section className="bg-themeColor">
      <div className="max-w-5xl w-full mx-auto overflow-hidden py-12">
        <div className="flex animate-marquee whitespace-nowrap ">
          {/* First set of images */}
          {images.map((img, index) => (
            <Image
              key={index}
              src={img.src}
              alt={`Logo ${index}`}
              width={100}
              height={10}
              className=" mx-5 "
            />
          ))}
          {/* Second set of images (duplicate) */}
          {images.map((img, index) => (
            <Image
              key={index + images.length}
              src={img.src}
              alt={`Logo ${index}`}
              width={100}
              height={10}
              className=" mx-5"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marque;
