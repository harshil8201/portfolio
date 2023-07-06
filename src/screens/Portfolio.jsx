import React from "react";
import Adventure from "../assets/website images/Adventure.png";
import PortfolioHooks from "../hooks/PortfolioHooks";
import Precious from '../assets/website images/PRECIOUS.png'
import Interiorlabs from '../assets/website images/INTERIORLABS.png'
import UCHEF from '../assets/website images/UCHEF.png'
import Lord from '../assets/website images/LORD.png'
import Boostim from '../assets/website images/boostim.png'
import VIRTUALITY from '../assets/website images/VIRTUALITY.png'

const Portfolio = () => {
  return (
    <div>
      {/* ------------------- Desktop ----------------------*/}
      <div className="px-[200px] bg-colorWhite lg:flex hidden flex-col text-left">
        <p className="mb-12 uppercase text-3xl font-semibold text-colorRed">
          📌 portfolio
        </p>
        <div className="flex flex-col gap-14 items-center justify-center">
          <PortfolioHooks
            position={0}
            url={Adventure}
            name={"Adventure 🏔️"}
            des={
              "Embark on thrilling escapades, fuel your wanderlust, and experience adrenaline-pumping adventures with our immersive and unforgettable journey through the untamed wilderness."
            }
            link={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-11"
            }
          />
          <div className="w-[600px] h-[1px] bg-colorDarkGray/20"></div>
          <PortfolioHooks
            position={1}
            url={Precious}
            name={"PRECIOUS 💰"}
            des={
              "Discover exquisite craftsmanship and timeless elegance at our premier online jewellery boutique, where every piece is meticulously designed to capture the essence of beauty and sophistication."
            }
            link={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-14"
            }
          />
          <div className="w-[600px] h-[1px] bg-colorDarkGray/20"></div>
          <PortfolioHooks
            position={0}
            url={Interiorlabs}
            name={"INTERIORLABS 🪑"}
            des={
              "Transform your space with exquisite interior design. Discover the art of harmonious interiors and elevate your home or office with our tailored solutions. Let us turn your dreams into reality."
            }
            link={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-15"
            }
          />
          <div className="w-[600px] h-[1px] bg-colorDarkGray/20"></div>
          <PortfolioHooks
            position={1}
            url={UCHEF}
            name={"uchef 🌮"}
            des={
              "Delight your taste buds with our culinary expertise. Explore a world of flavors through our cooking website, where delicious recipes, expert tips, and mouthwatering inspiration await."
            }
            link={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-28"
            }
          />
          <div className="w-[600px] h-[1px] bg-colorDarkGray/20"></div>
          <PortfolioHooks
            position={0}
            url={Lord}
            name={"lord 🧥"}
            des={
              "Step into timeless elegance. Discover our exquisite collection of finely crafted suits, tailored to perfection. Elevate your style with our sophisticated designs. Explore our suit selling website today."
            }
            link={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-5"
            }
          />
          <div className="w-[600px] h-[1px] bg-colorDarkGray/20"></div>
          <PortfolioHooks
            position={1}
            url={Boostim}
            name={"boostim 💵"}
            des={
              "Unlock your financial potential with our investment website - the gateway to secure your future. Explore diverse investment opportunities, track real-time market trends, and make informed decisions."
            }
            link={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-30"
            }
          />
          <div className="w-[600px] h-[1px] bg-colorDarkGray/20"></div>
          <PortfolioHooks
            position={0}
            url={VIRTUALITY}
            name={"VIRTUALITY 🤖"}
            des={
              "Unlock the power of imagination with our AI-generated character website. Create unique and captivating characters effortlessly. Explore a vast array of personalities, appearances, and backstories."
            }
            link={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-21"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
