import React from "react";
import { Link } from "react-router-dom";
import Wallet from "../../assets/svgs/wallet.svg";

const NavButton = () => {
  return (
    <>
      <Link to={"https://dappstoolstest.netlify.app/"}>
        <button className="text-white py-[10px] px-[14px] bg-[#182b48] border border-white w-[280px] h-[45.5px]">
          <span className="capitalize text-l font-bold flex items-center">
            <img src={Wallet} alt="wallet" className="mr-3" /> connect wallet
          </span>
        </button>
      </Link>
    </>
  );
};

export default NavButton;
