// src/components/ImageSwiper.js
import React from "react";
// import "swiper/swiper-bundle.min.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "../../assets/images/1.png";
import Image2 from "../../assets/images/2.png";
import Image3 from "../../assets/images/3.png";
import Image4 from "../../assets/images/4.png";
import Image5 from "../../assets/images/5.png";
import Image6 from "../../assets/images/6.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperImages = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];

  return (
    <div className="my-8 w-[303px] h-[330px] mx-auto">
      <Swiper
        className=""
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        color="black"
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 3000 }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="mb-12">
            <img
              src={image}
              alt={`pic ${index + 1}`}
              className="w-[303px] h-[330px] border-2 border-black rounded-3xl p-2 shadow-[8px 9px #bfbfbf]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperImages;
