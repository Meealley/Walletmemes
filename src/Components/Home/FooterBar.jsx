import React from "react";
import FooterImg from "../../assets/svgs/footer-desktop.svg";
import Logo from "../../assets/svgs/wall-street.svg";
import { Link } from "react-router-dom";
// import Wallet from "../../assets/svgs/wallet.svg";
import Instagram from "../../assets/images/instagram.png";
import Twitter from "../../assets/svgs/twitter.svg";
import Telegram from "../../assets/svgs/telegram.svg";
import Discord from "../../assets/svgs/discord.svg";
import Youtube from "../../assets/svgs/youtube.svg";
import Tiktok from "../../assets/svgs/tiktok.svg";

const FooterBar = () => {
  return (
    <>
      <footer className=" pt-20 text-white">
        <div>
          <img src={FooterImg} alt="footer" />
          <div className="bg-black px-3">
            <div className="flex items-center justify-center">
              <div>
                <img src={Logo} alt="footer-img" />
              </div>
            </div>
            {/* This is the social icons  */}
            <div className="mt-4 flex justify-center items-center px-[8px]">
              <Link to={"https://www.instagram.com/wallstbets/?igshid=MzRlODBiNWFlZA%3D%3D"}>
                <img
                  src={Instagram}
                  alt="instagram"
                  className="w-[30.7px] h-[30px] mx-[8px]"
                />
              </Link>
              <Link to={"https://twitter.com/wallstmemes"}>
                <img
                  src={Twitter}
                  alt="twitter"
                  className="w-[30.7px] h-[30px] mx-[8px]"
                />
              </Link>
              <Link to={"https://t.me/wallst_memes"}>
                <img
                  src={Telegram}
                  alt="instagram"
                  className="w-[30.7px] h-[30px] mx-[8px]"
                />
              </Link>
              <Link to={"https://discord.com/invite/4E538pzeGX"}>
                <img
                  src={Discord}
                  alt="di"
                  className="w-[30.7px] h-[30px] mx-[8px]"
                />
              </Link>
              <Link to={"https://www.youtube.com/channel/UCi-M8QFGjDbBQRY5lnl3x-g"}>
                <img
                  src={Youtube}
                  alt="youtube"
                  className="w-[30.7px] h-[30px] mx-[8px]"
                />
              </Link>
              <Link to={"https://www.tiktok.com/@wallstreetmemesofficial"}>
                <img
                  src={Tiktok}
                  alt="Tiktok"
                  className="w-[30.7px] h-[30px] mx-[8px]"
                />
              </Link>
            </div>
            <p className="text-center py-4 font-[420]">
              contact@wallstmemes.com
            </p>
            <p className="text-center py-4 font-[420]">
              Tower Financial Centre, 10th Floor, 50th Street & Corner of
              Elvira, Panama City, Panama. Registration No. 182731846
            </p>
            <p className="text-center py-2 font-[420]">
              Copyright © 2023 Wall Street Memes. All Rights Reserved.
            </p>
            <div className="py-2">
              <ul className="flex justify-center text-[14px] underline font-[420]">
                <li>
                  <Link className="font-[420]"
                    to={
                      "https://wallstmemes.com/assets/documents/Wall%20Street%20Memes%20-%20Terms%20Of%20Service.pdf"
                    }
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li className="px-4">
                  <Link
                    to={
                      "https://wallstmemes.com/assets/documents/Wall%20Street%20Memes%20-%20Privacy%20Policy.pdf"
                    }
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      "https://wallstmemes.com/assets/documents/Wall%20Street%20Memes%20-%20Cookie%20Policy.pdf"
                    }
                  >
                    Coookies
                  </Link>
                </li>
              </ul>
            </div>
            <p className="text-[12px] text-center pb-8">
              Cryptocurrency may be unregulated in your jurisdiction. The value
              of cryptocurrencies may go down as well as up. Profits may be
              subject to capital gains or other taxes applicable in your
              jurisdiction.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterBar;
