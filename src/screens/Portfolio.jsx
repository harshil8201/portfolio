import React from "react";
import PortfolioHooks from "../hooks/PortfolioHooks";

const Portfolio = () => {
  const Adventure =
    "https://user-images.githubusercontent.com/83079592/239676604-56f4ef9f-16be-4116-a780-dbb39cf1e1da.png";
  const Precious =
    "https://user-images.githubusercontent.com/83079592/240215084-46d0cb92-090e-4031-81d6-3fc86205df13.png";
  const Interiorlabs =
    "https://user-images.githubusercontent.com/83079592/240487674-80ac18b4-10fb-4018-ad32-d3988f6f4f15.png";
  const UCHEF =
    "https://user-images.githubusercontent.com/83079592/248443988-17af7285-06a2-4d09-9d8e-105ff260aadf.png";
  const Lord =
    "https://user-images.githubusercontent.com/83079592/238643052-18068f4a-bf02-44ee-a4dd-4c4b6583fdf9.png";
  const Boostim =
    "https://user-images.githubusercontent.com/83079592/249123471-eff212be-ea72-4b00-8dd4-9331a093cac6.png";
  const VIRTUALITY =
    "https://user-images.githubusercontent.com/83079592/246314478-02c34de8-67e3-4e7d-abbb-596d13aedc50.png";
  return (
    <div name="portfolio">
      {/* ------------------- Desktop ----------------------*/}
      <div className="mt-[110px] bg-colorWhite md:flex md:px-5 hidden flex-col text-left">
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

      {/* ------------------- Mobile ----------------------*/}
      <div className="md:hidden flex mt-[70px] flex-col justify-center items-center">
        <p className="mb-7 uppercase text-xl font-semibold text-colorRed">
          📌 portfolio
        </p>
        <div className="flex flex-col gap-8 items-center justify-center">
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
