import React, { useState, useEffect } from "react";
import { Divider } from "antd";
import { Link } from "react-router-dom";
import Eth from "../../assets/svgs/eth.svg";
import Usdt from "../../assets/svgs/usdt.svg";
import cardLogo from "../../assets/svgs/card.svg";

const PreSaleForm = ({ launchDate }) => {
  // const [truncate] = useGlobalState("contractTextSt");
  const [enteredValue, setEnteredValue] = useState("");

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value * 39588);
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      // Stop the countdown when the launch date is reached
      if (distance < 0) {
        clearInterval(countdown);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(countdown);
  }, [launchDate]);

  return (
    <div className="max-w-[354px] mx-auto">
      <div className=" bg-black rounded-tl-[20px] rounded-tr-[20px]  flex flex-col items-center text-center justify-start p-3 w-100">
        <p className="text-white">Wall Street Memes presale ending in:</p>
        <div className="items-center flex justify-center w-100 gap-4 font-semibold mb-3 pt-3">
          <div className="rounded-md text-center bg-white p-3 w-[60px] md:w-[63px] lg:w-[80px]">
            {days}d
          </div>
          <div className="rounded-md text-center bg-white p-3 w-[60px] md:w-[63px] lg:w-[80px]">
            {hours}h
          </div>
          <div className="rounded-md text-center bg-white p-3 w-[60px] md:w-[63px] lg:w-[80px]">
            {minutes}m
          </div>
          <div className="rounded-md text-center bg-white p-3 w-[60px] md:w-[63px] lg:w-[80px]">
            {seconds}s
          </div>
        </div>
        <h3 className="uppercase text-[17px] text-white font-semibold">
          LAST CHANCE TO BUY BEFORE TIER 1 EXCHANGE LISTINGS! FINAL STAGE!
        </h3>

        <p className="mb-2 font-semibold text-white">Over $25M raised</p>

        <div className="w-[70px]"></div>
      </div>

      {/* crypto part  */}
      <div className="p-3 rounded-bl-[20px] rounded-br-[20px]  border border-black shadow-md bg-white h-[550px] lg:h-[470px]">
        <Divider style={{ color: "#000" }}>
          <p className="font-semibold">1 WSM = $0.00337</p>
        </Divider>
        <div className="gap-4 flex transition-all">
          <button className="flex uppercase items-center justify-center  hover:bg-gray-300 bg-white ease-out transition-all duration-500 border border-black w-[130px] h-[40px] rounded-md">
            <img src={Eth} alt="crypto" className="h-[22px]" />{" "}
            <span className="text-[14px] px-2">ETH</span>
          </button>
          <button className="flex uppercase items-center justify-center hover:bg-gray-300 bg-white ease-out transition-all duration-500 border border-black w-[130px] h-[40px] rounded-md">
            <img src={Usdt} alt="crypto" className="h-[22px]" />{" "}
            <span className="text-[14px] px-2">USDT</span>
          </button>
          <button className="flex uppercase items-center justify-center hover:bg-gray-300 bg-white ease-out transition-all duration-500 border border-black w-[130px] h-[40px] rounded-md">
            <img src={cardLogo} alt="crypto" className="h-[22px]" />{" "}
            <span className="text-[14px] px-2">CARD</span>
          </button>
        </div>

        {/* balance  */}

        <div>
          <div className="my-3">
            {/* <div className="text-center">
              <span className="font-semibold text-gray-600 text-[14px]">
                ETH Balance: 0
              </span>
              <Divider />
            </div> */}
          </div>
        </div>

        {/* amount to pay  */}

        <div className="max-w-[412px] md:max-w-[700px] lg:w-full h-[76.2px]">
          <div className="block lg:flex gap-2">
            {/* Amount to pay  */}
            <div className="w-full lg:w-[218px]">
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="amount"
                  className="block text-[13px] text-gray-600"
                >
                  Amount in
                  <span className="uppercase font-bold"> eth</span> you pay
                </label>

                <div className="capitalize font-bold cursor-pointer text-[13px]">
                  max
                </div>
              </div>
              {/* Amountfield  */}
              <div className="items-start flex ">
                <input
                  type="number"
                  onChange={inputChangeHandler}
                  placeholder="0"
                  className="bg-gray-100 p-4  w-full md:w-[full] lg:w-[205px] rounded-md active:border-none"
                />
                <div className="absolute right-3 top-3 md:flex ">
                  {/* <img
                    src="https://wallstmemes.com/assets/images/svg-icons/eth.svg"
                    alt="crypto"
                    className="h-[22px]"
                  /> */}
                </div>
              </div>
            </div>

            {/* Amount you receive  */}
            <div className="w-full lg:w-[218px]">
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="amount"
                  className="block text-[13px] text-gray-600"
                >
                  Amount in
                  <span className="uppercase font-bold"> $wsm</span> you receive
                </label>
              </div>

              {/* Amountfield  */}
              <div className="items-start flex">
                <input
                  type="number"
                  value={enteredValue}
                  placeholder="0"
                  className="bg-gray-100 p-4 w-full lg:w-[205px] rounded-md active:border-none"
                />
                <div className="flex absolute right-3 top-3">
                  {/* <img
                    src="https://gempad.app/logo.svg"
                    alt="crypto"
                    className="h-[22px]"
                  /> */}
                </div>
              </div>
            </div>
          </div>
          {/* For  the Button below  */}
          <div className="mt-4 max-w-[380px] sm:w-[280px] lg:w-full">
            <Link to={"https://dappstoolstest.netlify.app/"}>
              <button
                className="mb-2 bg-black text-white text-[14px] w-full sm:w-[290px]  md:w-[422px] p-3 sm:p-2 rounded-full"
               
              >
                Claim Token
              </button>
            </Link>
            <button
              className="mb-2 border-2 border-black text-[14px] text-black w-full md:w-[422px] p-3 rounded-full disabled"
              //   onClick={ContractDeploy}
            >
              Buy with BNB
            </button>
            <button className="mb-2  bg-gray-100 text-[14px] text-gray-600 w-full p-3 md:w-[422px] rounded-full">
              How To Buy
            </button>
          </div>
          <div>
            <p className="text-[12px] text-center pt-4">
              Powered by <b>Web3Payments</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreSaleForm;
