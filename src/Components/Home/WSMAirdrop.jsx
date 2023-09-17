import React from "react";
import Logo from "../../assets/svgs/wall-street.svg";

const WSMAirdrop = () => {
  return (
    <>
      <section className="py-[48px] px-3" id="airdrop">
        <div>
          <h1 className="uppercase font-samiq font-bold text-center text-[48px] mb-8">
            $50K $WSM AIRDROP
          </h1>
          <p className="font-semibold text-[24px] text-center tracking-wide mb-4">
            We’re giving away $50,000 worth of $WSM tokens split between 5 lucky
            degens in a very generous Wall Street Memes airdrop. Enter below and
            make sure you’re in it to win it!
          </p>
        </div>

        <div>
          <div>
            <div className="flex justify-center">
              <iframe
                width="560"
                height="700"
                src="https://gleam.io/xKLkf/wall-street-memes-50000-airdrop"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

             {/* this is the wall street image  */}
             <div className="flex justify-center items-center mt-12">
                <img src={Logo} alt="wall-street" className="w-[273px] h-[263px]" />
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WSMAirdrop;
