import React from "react";
import MemeCoin from "../../assets/svgs/media4.svg";
import MemeCoin2 from "../../assets/svgs/media2.svg";
import MemeCoin3 from "../../assets/svgs/media3.svg";
import { Link } from "react-router-dom";

const data = [
  {
    id:1,
    link: "https://www.youtube.com/watch?v=ZDjMbpWKIjo",
    image: MemeCoin,
    title:
      "The ONLY Meme Coin Worth Buying - The PEPE Coin Killer! (Huge Potential!)",
  },
  {
    id : 2,
    link: "https://www.youtube.com/watch?v=QW0gaupW5N0",
    image: MemeCoin2,
    title: "🔥TURN $27 into $4,240,471 WITH TOP 3 BEST CRYPTO MEME COIN?!!",
  },
  {
    id: 3,
    link: "https://www.youtube.com/watch?v=skW4VvqOUa4",
    image: MemeCoin3,
    title: "🔥IS THIS THE NEXT 100X MEME COIN?!",
  },
];

const WSMmedia = () => {
  return (
    <>
      <section className="px-3 pt-[32px]" id="media">
        <div>
          <h1 className="uppercase font-samiq font-bold text-center text-[48px] mb-8">
            wsm in the media
          </h1>

          <div className="px-2">
            <div className="flex items-center justify-center">
              <div>
                {data.map((items) => (
                  <div key={items.id}>
                    <Link to={items.link} className="cursor-pointer">
                      <img src={items.image} alt={items.title} />
                    </Link>
                    <p className="py-4 text-[20px] font-semibold">{items.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WSMmedia;
