import React, { useState } from "react";
import Logo from "../../assets/svgs/wall-street.svg";
import Bar from "../../assets/svgs/bar.svg";
import CloseBar from "../../assets/svgs/close-bar.svg";
import { Link } from "react-router-dom";
import Wallet from "../../assets/svgs/wallet.svg";
import Instagram from "../../assets/images/instagram.png";
import Twitter from "../../assets/svgs/twitter.svg";
import Telegram from "../../assets/svgs/telegram.svg";
import Discord from "../../assets/svgs/discord.svg";
import Youtube from "../../assets/svgs/youtube.svg";
import Tiktok from "../../assets/svgs/tiktok.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-5 pt-3 border-b border-black pb-2 bg-white bg-opacity-80">
        <div>
          <img src={Logo} alt="wall-street" className="w-[50px]" />
        </div>
        <div>
          <button className="font-samiq font-semibold text-[16px] tracking-wider rounded-full bg-black text-white px-[22px] py-[10px] text-center">
            Stake Now
          </button>
        </div>
        <div>
          <div onClick={toggleMenu}>
            {isOpen ? (
              <img src={CloseBar} alt="close-bar" className="w-[32px]" />
            ) : (
              <img src={Bar} alt="bar" className="w-[32px]" />
            )}
          </div>
          <div
            className={`fixed top-[4.3rem] bottom-0 right-0 z-50 w-[20rem] bg-black transition-transform transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* start of the sidemenu bar  */}
            <nav className="pt-3 px-[8px] relative">
              <ul className="text-white px-4 cursor-pointer">
                <Link to={"/"} className="my-2">
                  <p className="font-samiq my-4   capitalize border-b font-semibold py-[3px]">
                    staking
                  </p>
                </Link>
                <Link to={"/"} className="">
                  <p className="font-samiq my-4 capitalize border-b font-semibold py-[3px]">
                    {" "}
                    community
                  </p>
                </Link>
                <Link to={"/"} className="">
                  <p className="font-samiq my-4 capitalize border-b font-semibold py-[3px]">
                    how to buy
                  </p>
                </Link>
                <Link to={"/"} className="">
                  <p className="font-samiq my-4 capitalize border-b font-semibold py-[3px]">
                    tokenomics
                  </p>
                </Link>
                <Link to={"/"} className="">
                  <p className="font-samiq my-4 capitalize border-b font-semibold py-[3px]">
                    airdrop
                  </p>
                </Link>
                <Link to={"/"} className="">
                  <p className="font-samiq my-4 capitalize border-b font-semibold py-[3px]">
                    media
                  </p>
                </Link>
              </ul>
              {/* connect wallet button  */}
              <div className="py-4 flex items-center px-[8px]">
                <button className="text-white py-[10px] px-[14px] bg-[#182b48] border border-white w-[280px] h-[45.5px]">
                  <span className="capitalize text-l font-bold flex items-center">
                    <img src={Wallet} alt="wallet" className="mr-3" /> connect
                    wallet
                  </span>
                </button>
              </div>

              {/* this is the button for the language change  */}
              <div className="py-4 px-[8px]">
                <button className="capitalize w-[280px] h-[46.5px] rounded-full text-white px-[15px] py-[12px] flex items-center bg-[#ffffff26]">
                  english
                </button>
              </div>

              {/* This is the social icons  */}
              <div className="mt-4 flex items-center px-[8px]">
                <Link to={"/"}>
                  <img
                    src={Instagram}
                    alt="instagram"
                    className="w-[30.7px] h-[30px] mx-[8px]"
                  />
                </Link>
                <Link to={"/"}>
                  <img
                    src={Twitter}
                    alt="twitter"
                    className="w-[30.7px] h-[30px] mx-[8px]"
                  />
                </Link>
                <Link to={"/"}>
                  <img
                    src={Telegram}
                    alt="instagram"
                    className="w-[30.7px] h-[30px] mx-[8px]"
                  />
                </Link>
                <Link to={"/"}>
                  <img
                    src={Discord}
                    alt="di"
                    className="w-[30.7px] h-[30px] mx-[8px]"
                  />
                </Link>
                <Link to={"/"}>
                  <img
                    src={Youtube}
                    alt="youtube"
                    className="w-[30.7px] h-[30px] mx-[8px]"
                  />
                </Link>
                <Link to={"/"}>
                  <img
                    src={Tiktok}
                    alt="Tiktok"
                    className="w-[30.7px] h-[30px] mx-[8px]"
                  />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
