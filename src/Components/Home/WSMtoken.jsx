import React from "react";
import Logo from "../../assets/svgs/wall-street.svg";
import tokenLogo from '../../assets/svgs/wsm-meme-bg-sm.svg';

const WSMtoken = () => {
  return (
    <>
      <section className="my-16 pt-12">
        <div>
          <div className="flex items-center justify-center">
            <img src={Logo} alt="" className="my-6" />
          </div>
          <div>
            <h1 className="uppercase font-samiq font-bold text-center text-[48px] mb-8">
              $wsm token
            </h1>
            <p className="font-semibold text-center tracking-wide mb-4">
              The little guy challenged Wall Street in the infamous GameStop
              fiasco of 2021, and the legacy of those brave Wall Street Bets
              heroes endures until today.
            </p>
            <p className="text-center tracking-wide font-semibold mb-4 px-4">
              Born out of that movement is Wall Street Memes - the ultimate
              expression of the internet’s triumph over rampant capitalism.
              “Greed is good,” said Gordon Gekko in the ‘80s as he got rich off
              useless stocks. Around 30 years later, hundreds of arguably even
              more useless meme coins allow ordinary people to do the same.
            </p>
            <p className="text-center tracking-wide font-semibold mb-4 px-4">
              Wall Street Memes is tokenising the movement. Join the $WSM army
              today and prove that greed is, indeed, very good.
            </p>
          </div>
          <div>
            <img src={tokenLogo} alt="token-logo" className="mx-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default WSMtoken;
