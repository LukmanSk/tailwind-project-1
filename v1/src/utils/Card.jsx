/* eslint-disable react/prop-types */

import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Card = ({ name, image, jobRole, description }) => {
  return (
    <div className="columns mx-auto  flex flex-col lg:flex-row items-center bg-[#F1C50E] p-10 rounded-[3rem] gap-[2rem] max-w-[25rem] sm:max-w-none">
      <div>
        <div className="rounded-full  w-[190px] h-[190px] sm:w-[200px] sm:h-[200px] lg:w-[190px] lg:h-[190px] overflow-hidden">
          <img src={image} alt="" className="w-[100%] h-[100%] object-cover" />
        </div>
      </div>

      <div className="mt-[19px] sm:mt-0">
        {/* text-content */}
        <h4 className="text-[16px]">{jobRole}</h4>
        <h3 className="text-[20px] font-bold mt-[19px]">{name}</h3>
        <p className="mt-[19px] font-light">{description}</p>
        <div className="flex gap-4 mt-[19px] ">
          {/* social-icons */}
          <div className="bg-[#C947B4] rounded-full p-2 text-white">
            <FaFacebookF />
          </div>
          <div className="bg-[#C947B4] rounded-full p-2 text-white">
            <AiOutlineTwitter />
          </div>
          <div className="bg-[#C947B4] rounded-full p-2 text-white">
            <AiOutlineInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
