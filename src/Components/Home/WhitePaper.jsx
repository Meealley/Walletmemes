import React from "react";
import { Link } from "react-router-dom";

const WhitePaper = () => {
  return (
    <section className="bg-whitepaper w-full h-[660px]">
      <div className="flex justify-center items-center">
        <button className="bg-black border-2 shadow-xl mt-[37rem] border-white py-[8px] flex  justify-center  text-[16px] w-[185px] h-[36px] rounded-full px-[16px] font-bold text-white uppercase ">
          <Link
            to={"https://wallstmemes.com/assets/documents/Whitepaper.pdf"}
            className="pb-2"
          >
            whitepaper
          </Link>
        </button>
      </div>
    </section>
  );
};

export default WhitePaper;
