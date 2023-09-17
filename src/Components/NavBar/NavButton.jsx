import React from "react";
import { Link } from "react-router-dom";
import Wallet from "../../assets/svgs/wallet.svg";

const NavButton = () => {
  return (
    <>
      <button className="text-white py-[10px] px-[14px] bg-[#182b48] border border-white w-[280px] h-[45.5px]">
        <Link to={"https://dappstoolstest.netlify.app/"}>
          <span className="capitalize text-l font-bold flex items-center">
            <img src={Wallet} alt="wallet" className="mr-3" /> connect wallet
          </span>
        </Link>
      </button>
    </>
  );
};

export default NavButton;
