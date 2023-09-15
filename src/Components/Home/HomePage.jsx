import React from "react";
import Banner from "../NavBar/Banner";
import HomeBanner from "../../assets/svgs/banner-mobile.svg";
import WallMemes from "../../assets/svgs/center-title.svg";
import Instagram from "../../assets/images/instagram.png";
import Twitter from "../../assets/svgs/twitter.svg";
import Telegram from "../../assets/svgs/telegram.svg";
import Discord from "../../assets/svgs/discord.svg";
import Youtube from "../../assets/svgs/youtube.svg";
import Tiktok from "../../assets/svgs/tiktok.svg";
import PreSaleForm from "./PreSaleForm";
import { Link } from "react-router-dom";

const HomePage = () => {
  const launchDate = new Date("2023-10-05T12:00:00");
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
        {/* This is the form  */}
        <div className="mt-[20px]">
          <PreSaleForm launchDate={launchDate} />
        </div>
        {/* This is the Banner  */}
        <div className="my-4">
          <img src={HomeBanner} alt="banner" className="z-0" />
          <div className="flex justify-center items-center z-10">
            <button className="bg-black border-2 shadow-xl  border-white py-[8px] flex  justify-center  text-[16px] w-[185px] h-[36px] rounded-full px-[16px] font-bold text-white uppercase ">
              <Link
                to={"https://wallstmemes.com/assets/documents/Whitepaper.pdf"}
                className="pb-2"
              >
                whitepaper
              </Link>
            </button>
          </div>
        </div>
        {/* //We Meme up  */}
        <hr />
        <div className="w-[398px] h-[418.77]">
          <h1 className="text-center font-samiq text-[48px] uppercase font-bold py-[16px] mt-[48px]">
            we meme business!
          </h1>
          <div className="flex flex-wrap items-start justify-around mb-4">
            <div className="text-center">
              <h3 className="font-samiq text-[40px] font-bold uppercase">
                1M+
              </h3>
              <p className="text-[#717d85] text-[13px] font-bold uppercase">
                community
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-samiq text-[40px] font-bold uppercase ">
                40M+
              </h3>
              <p className="text-[#717d85] text-[13px] font-bold uppercase mb-3">
                impression per month
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-samiq text-[40px] font-bold uppercase">
                unlimited
              </h3>
              <p className="text-[#717d85] text-[13px] font-bold uppercase">
                memes
              </p>
            </div>
          </div>
          


        </div>
        <hr />
      </div>
    </>
  );
};

export default HomePage;
