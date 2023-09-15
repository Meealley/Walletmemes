import React from "react";
import Banner from "../NavBar/Banner";
import { Link } from "react-router-dom";
// import HomeBanner from "../../assets/svgs/banner-mobile.svg";
import WallMemes from "../../assets/svgs/center-title.svg";
import Instagram from "../../assets/images/instagram.png";
import Twitter from "../../assets/svgs/twitter.svg";
import Telegram from "../../assets/svgs/telegram.svg";
import Discord from "../../assets/svgs/discord.svg";
import Youtube from "../../assets/svgs/youtube.svg";
import Tiktok from "../../assets/svgs/tiktok.svg";

const HomePage = () => {
  return (
    <>
      <div>
        <Banner />
        <div className="mt-8 flex items-center justify-center">
          <img src={WallMemes} alt="banner" />
        </div>
        {/* This is the social icons  */}
        <div className="w-[354.3] px-4">

        <div className="mt-4 flex items-center justify-center px-[8px]">
          <Link to={"/"}>
            <img
              src={Instagram}
              alt="instagram"
              className="w-[45.98px] h-[42px] mx-[8px]"
            />
          </Link>
          <Link to={"/"}>
            <img
              src={Twitter}
              alt="twitter"
              className="w-[50px] h-[42px] mx-[8px]"
            />
          </Link>
          <Link to={"/"}>
            <img
              src={Telegram}
              alt="instagram"
              className="w-[50px] h-[42px] mx-[8px]"
            />
          </Link>
          <Link to={"/"}>
            <img
              src={Discord}
              alt="di"
              className="w-[50px] h-[42px] mx-[8px]"
            />
          </Link>
          <Link to={"/"}>
            <img
              src={Youtube}
              alt="youtube"
              className="w-[50px] h-[42px] mx-[8px]"
            />
          </Link>
          <Link to={"/"}>
            <img
              src={Tiktok}
              alt="Tiktok"
              className="w-[50px] h-[42px] mx-[8px]"
            />
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
