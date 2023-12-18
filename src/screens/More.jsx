import React, { useState } from "react";
import { motion } from "framer-motion";
import MoreHooks from "../hooks/MoreHooks";

const More = () => {
  const [isMore, setIsMore] = useState(true);
  return (
    <div className="mt-[50px] bg-colorWhite flex-col w-full items-center justify-center">
      <motion.p
        whileTap={{ scale: 0.8 }}
        className="text-colorRed underline tracking-wider py-2 hover:cursor-pointer hover:text-blue-600 hover:underline"
        onClick={() => setIsMore(!isMore)}
      >
        {isMore ? "Show More" : "Show Less"}
      </motion.p>
      {!isMore && (
        <div className="mt-[20px] grid grid-cols-3 gap-2">
          <MoreHooks
            websiteName={"Soccer Player"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-1"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/237040035-078bd7b8-3cb8-4bd9-b639-9a05b4702f7b.png"
            }
          />
          <MoreHooks
            websiteName={"Interior Designer"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-2"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/237076823-4d3e1ab2-ab28-4d16-9447-5642a75e5819.png"
            }
          />
          <MoreHooks
            websiteName={"OK Energy"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-3"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/238186017-53b9f47e-3952-467b-a824-1b3992508754.png"
            }
          />
          <MoreHooks
            websiteName={"Etalon Jackets"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-4"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/238532049-6b0e5970-1cc5-40ad-9a7e-486efcd9415f.png"
            }
          />
          <MoreHooks
            websiteName={"Lord"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-5"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/238643052-18068f4a-bf02-44ee-a4dd-4c4b6583fdf9.png"
            }
          />
          <MoreHooks
            websiteName={"rent"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-6"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/238896319-8ac5ae99-a76b-489a-9d08-1c748a101be9.png"
            }
          />
          <MoreHooks
            websiteName={"Autumn Collection"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-7"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/239139255-f4483811-f6bb-4782-bf14-0cf01a8fa23b.png"
            }
          />
          <MoreHooks
            websiteName={"Finced"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-8"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/239429828-0249424b-7021-4314-b4b8-9a6692f1a9c3.png"
            }
          />
          <MoreHooks
            websiteName={"Battle Peer"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-9"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/239472209-fd16536b-4478-43b3-9fea-2cabd42f34d6.png"
            }
          />
          <MoreHooks
            websiteName={"Fitness website"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-10"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/239485623-1c67bf49-76be-49f4-be80-2c6124f4cc59.png"
            }
          />
          <MoreHooks
            websiteName={"Adventure Website"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-11"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/239676604-56f4ef9f-16be-4116-a780-dbb39cf1e1da.png"
            }
          />
          <MoreHooks
            websiteName={"FREECYCLE"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-12"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/239685295-a23df93d-e6cb-45e1-8ff3-d682cd5590a0.png"
            }
          />
          <MoreHooks
            websiteName={"MR Stock"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-13"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/239870127-519a3d28-56b0-4867-baae-18b01f27c786.png"
            }
          />
          <MoreHooks
            websiteName={"Precious"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-14"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/240215084-46d0cb92-090e-4031-81d6-3fc86205df13.png"
            }
          />
          <MoreHooks
            websiteName={"INTERIORLABS"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-15"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/240487674-80ac18b4-10fb-4018-ad32-d3988f6f4f15.png"
            }
          />
          <MoreHooks
            websiteName={"World"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-16"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/241497790-a2510d1c-a3a7-421e-8fe5-35bcea47ab90.png"
            }
          />
          <MoreHooks
            websiteName={"Woodside"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-17"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/241544421-773dd075-a9bf-4ffc-be7c-966560501ad0.png"
            }
          />
          <MoreHooks
            websiteName={"Sio"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-18"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/243246400-1f02b897-b7d7-4761-8f24-76685e5faf80.png"
            }
          />
          <MoreHooks
            websiteName={"bank.c"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-19"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/245045556-ea63a498-56b0-41a0-a7f6-156281c2b9e3.png"
            }
          />
          <MoreHooks
            websiteName={"K-ICON"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-20"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/245366559-eb13dc0b-873b-421d-81cd-cc0e7c59f92b.png"
            }
          />
          <MoreHooks
            websiteName={"Virtuality"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-21"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/246314478-02c34de8-67e3-4e7d-abbb-596d13aedc50.png"
            }
          />
          <MoreHooks
            websiteName={"Emonti"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-22"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/247026154-15f5be2c-b91d-4f21-bdef-f3fa89f5d18c.png"
            }
          />
          <MoreHooks
            websiteName={"ARKT"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-23"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/247080993-8434c806-d957-4f7e-abc9-2fff161cb463.png"
            }
          />
          <MoreHooks
            websiteName={"Old Tradition"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-24"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/247462735-411b64ea-1057-4a9e-bc51-43d3db6ff876.png"
            }
          />
          <MoreHooks
            websiteName={"Modart"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-25"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/247496288-affacda6-9e9f-4c6e-a0ad-a7b3520037f2.png"
            }
          />
          <MoreHooks
            websiteName={"Novaskin"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-26"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/247853091-0cb43954-7d27-4c4e-9771-555791f1681c.png"
            }
          />
          <MoreHooks
            websiteName={"Stelion"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-27"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/248440523-70353df7-fad1-4c3b-802d-fa536eccc4b3.png"
            }
          />
          <MoreHooks
            websiteName={"Uchef"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-28"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/248443988-17af7285-06a2-4d09-9d8e-105ff260aadf.png"
            }
          />
          <MoreHooks
            websiteName={"Creon"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-29"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/248738713-134122c1-5df5-480a-945d-7d01dab6c0b3.png"
            }
          />
          <MoreHooks
            websiteName={"boostim"}
            projectUrl={
              "https://github.com/Harshil-Patel-8201/30-Days-with-React.js/tree/Day-30"
            }
            imgUrl={
              "https://user-images.githubusercontent.com/83079592/249123471-eff212be-ea72-4b00-8dd4-9331a093cac6.png"
            }
          />
        </div>
      )}
    </div>
  );
};

export default More;
