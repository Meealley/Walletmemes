import React from "react";
import Pepe from "../../assets/images/avatar-sm-1.png";
import goof from "../../assets/images/avatar-sm-2.png";
import spongebob from "../../assets/images/avatar-3.png";

const HowToBuy = () => {
  return (
    <>
      <section id="buy">
        <div className="mb-8">
          <div className="flex items-center justify-center">
            <img
              src={
                "https://wallstmemes.com/assets/images/svg-icons/buy_mob.svg"
              }
              alt=""
              className="my-6"
            />
          </div>
          {/* How to buy texts  */}
          <div>
            <h1 className="uppercase font-samiq font-bold text-center text-[48px] mb-8">
              HOW TO BUY WALL STREET MEMES TOKEN
            </h1>
            <p className="font-semibold text-center tracking-wide mb-4">
              Take charge and buy $WSM tokens in presale using ETH, BNB, USDT,
              or bank card before it lists on DEX.
            </p>
          </div>
          {/* Beginning of the Quote background */}
          <div className="mb-4">
            {/* pepe 1 */}
            <div>
              <div className="h-[324px]">
                <div className="bg-bubble1 w-[324px] bg-no-repeat h-[270px] mx-auto">
                  <blockquote className="">
                    <h1 className=" text-center pt-8 pb-2 italic font-samiq font-bold text-4xl">
                      1
                    </h1>
                    <p className=" text-center w-[264px] ml-5 font-semibold">
                      Send ETH or BNB to your wallet and ape in using your
                      preferred chain. Use the presale widget above to swap for
                      $WSM.
                    </p>
                  </blockquote>
                </div>
                <div className="flex justify-end px-16">
                  <img src={Pepe} alt="pepe" />
                </div>
              </div>
            </div>
            {/* goof 2 */}
            <div className="my-16">
              <div className="h-[324px]">
                <div className="bg-bubble2 w-[324px] bg-no-repeat h-[270px] mx-auto">
                  <blockquote className="">
                    <h1 className=" text-center pt-8 pb-2 italic font-samiq font-bold text-4xl">
                      2
                    </h1>
                    <p className=" text-center w-[264px] ml-5 font-semibold">
                      You can also buy $WSM tokens with USDT (ERC-20 or BEP-20).
                      Use the USDT option and swap your desired amount.
                    </p>
                  </blockquote>
                </div>
                <div className="flex justify-start px-6">
                  <img src={goof} alt="pepe" />
                </div>
              </div>
            </div>
            {/* spongebob 3 */}
            <div className="my-16">
              <div className="h-[324px]">
                <div className="bg-bubble1 w-[324px] bg-no-repeat h-[270px] mx-auto">
                  <blockquote className="">
                    <h1 className=" text-center pt-8 pb-2 italic font-samiq font-bold text-4xl">
                      3
                    </h1>
                    <p className=" text-center w-[264px] ml-5 font-semibold">
                      Prefer plastic? No problem. Have your own crypto wallet
                      address on hand and order $WSM tokens using your bank
                      card.
                    </p>
                  </blockquote>
                </div>
                <div className="flex justify-end px-8">
                  <img src={spongebob} alt="pepe" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8 pt-20">
          <div className="my-8 flex justify-center items-center">
            <button className="px-12 bg-black rounded-full text-white capitalize font-semibold py-3 text-[16px] tracking-wide shadow-md">
              more help
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToBuy;
