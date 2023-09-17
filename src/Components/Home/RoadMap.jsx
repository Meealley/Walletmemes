import React from "react";
import Car from "../../assets/svgs/car.svg";

const RoadMap = () => {
  return (
    <>
      <section className="pt-12 my-5 px-3" id="roadmap">
        <div>
          <h1 className="uppercase font-samiq font-bold text-center text-[48px] mb-8">
            roadmap
          </h1>
          <p className="font-semibold text-center tracking-wide mb-4">
            We're laying the foundation and empowering our community every step
            of the way. Together, we'll show the world that Wall Street Memes is
            here to stay.
          </p>
          <div className="py-8">
            <img src={Car} alt="car" />
          </div>
        </div>
        <div>
          {/* Phases of the roadmap  */}
          <div className="pt-[10px]">
            {/* phase 1  */}
            <div className="py-4">
              <div className="h-[529px] rounded-[28px] border-[3px] border-black">
                <div className="px-4 py-8">
                  <h1 className="font-bold font-samiq uppercase text-[24px]">
                    phase 1 :
                  </h1>
                  <p className="font-samiq  uppercase text-[17px]">
                    foundation
                  </p>
                  <div className="py-[10px]">
                    <b>🚀 Smart Contract Development: </b>
                    <span>
                      Secure and audited smart contract for WSM token to ensure
                      transparency and trust.
                    </span>
                  </div>
                  <div className="py-[10px]">
                    <b>🌐 Community Building: </b>
                    <span>
                      Telegram, Discord, Twitter - Get ready for the hype train
                      with a strong and engaged WSM community.
                    </span>
                  </div>
                  <div className="py-[10px]">
                    <b>📣 Branding and Marketing: </b>
                    <span>
                      Spread the word about Wall Street Memes with a
                      comprehensive marketing campaign. Let's go viral!
                    </span>
                  </div>
                  <div className="py-[10px]">
                    <b>💥 Merchandise and Swag: </b>
                    <span className=" text-black">
                      Rock the WSM style with branded merchandise and swag. Show
                      off your Wall Street Memes pride!
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* phase 2  */}
            <div className="py-4">
              <div className="h-[529px] rounded-[28px] border-[3px] border-black">
                <div className="px-4 py-8">
                  <h1 className="font-bold font-samiq uppercase text-[24px]">
                    phase 2 :
                  </h1>
                  <p className="font-samiq  uppercase text-[17px]">
                    foundation
                  </p>
                  <div className="py-[10px]">
                    <b>🚀 Token Launch: </b>
                    <span>
                      Wall Street Memes (WSM) token officially takes off. Get
                      ready for liftoff!
                    </span>
                  </div>
                  <div className="py-[10px]">
                    <b>🤝 Partnerships: </b>
                    <span>
                      Collaborate with meme creators, influencers, and content
                      platforms. Let's join forces and spread the Wall Street
                      Memes movement!
                    </span>
                  </div>
                  <div className="py-[10px]">
                    <b>💰 Token Listings: </b>
                    <span>
                      Launch $WSM token on popular DEXs with ample liquidity and
                      accessibility. Trade with ease.
                    </span>
                  </div>
                  <div className="py-[10px]">
                    <b>🌍 Awareness Campaigns: </b>
                    <span className=" text-black">
                      Take the Wall Street Memes revolution mainstream. Media,
                      influencers, and popular platforms, we're coming for you!
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* phase 3  */}
            <div className="py-4">
              <div className="h-[529px] rounded-[28px] border-[3px] border-black">
                <div className="px-4 py-8">
                  <h1 className="font-bold font-samiq uppercase text-[24px]">
                    phase 3 :
                  </h1>
                  <p className="font-samiq  uppercase text-[17px]">
                  COMMUNITY EMPOWERMENT
                  </p>
                  <div className="py-[10px]">
                    <b>🔒 Gated Community: </b>
                    <span>
                    Unlock exclusive benefits in the WSM gated community. Early updates, exclusive content, and interactive experiences await you!
                    </span>
                  </div>
                  <div className="py-[10px]">
                    <b>🌟 Market Cap Goal: </b>
                    <span>
                    Aim high, aim for $1 billion market capitalization. Let's show the world the true power of Wall Street Memes!
                    </span>
                  </div>
                  <div className="py-[10px]">
                    <b>🚀 Tier 1 CEX Listings: </b>
                    <span>
                    Get listed on top-tier CEXs. Boost liquidity, accessibility, and reach for all Wall Street Memes warriors!
                    </span>
                  </div>
                  {/* <div className="py-[10px]">
                    <b>💥 Merchandise and Swag: </b>
                    <span className=" text-black">
                      Rock the WSM style with branded merchandise and swag. Show
                      off your Wall Street Memes pride!
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoadMap;
