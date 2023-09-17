import React from "react";
import tekenomics from "../../assets/svgs/tekenomics-sm.svg";

const Tokenomics = () => {
  return (
    <>
      <section className="py-[48px]  px-3 " id="tokenomics">
        <div>
          <h1 className="uppercase font-samiq font-bold text-center text-[48px] mb-8">
            tokenomics
          </h1>
          <p className="font-semibold text-center tracking-wide mb-4">
            The launch of the $WSM token will help sustain the growth of the
            Wall Street Memes community and reward loyal members.
          </p>
        </div>
        <div>
          <ul>
            <li className="capitalize text-[20px] font-semibold py-2 text-gray-500">
              <span className="w-[35px] h-[23px] bg-[#1c5af9] px-[18px] py-[2px] rounded-lg"></span>{" "}
              <b className="font-bold pl-2 text-[20px] text-black"> 50%</b>{" "}
              marketing
            </li>
            <li className="capitalize text-[20px] font-semibold py-2 text-gray-500">
              <span className="w-[35px] h-[23px] bg-[#ca8afc] px-[18px] py-[2px] rounded-lg"></span>{" "}
              <b className="font-bold pl-2 text-[20px] text-black"> 30%</b>{" "}
              community reward
            </li>
            <li className="capitalize text-[20px] font-semibold py-2 text-gray-500">
              <span className="w-[35px] h-[23px] bg-[#f0434d] px-[18px] py-[2px] rounded-lg"></span>{" "}
              <b className="font-bold pl-2 text-[20px] text-black"> 10%</b> CEX
              liquidity
            </li>
            <li className="capitalize text-[20px] font-semibold py-2 text-gray-500">
              <span className="w-[35px] h-[23px] bg-[#72ff5c] px-[18px] py-[2px] rounded-lg"></span>{" "}
              <b className="font-bold pl-2 text-[20px] text-black"> 10%</b> DEX
              liquidity
            </li>
          </ul>
          <div>
            <img src={tekenomics} alt="tokenomics" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Tokenomics;
