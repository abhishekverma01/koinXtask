import { FaArrowRight } from "react-icons/fa";
import promoimg from "../assets/promoimg.png";

function CardsPromo() {
  return (
    <div className="mt-4 bg-[#0052FE] text-white rounded-2xl px-4 py-8 text-center">
      <div className="">
        <div className="text-2xl">Get Started with KoinX for FREE</div>
        <div className="text-sm mt-4">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </div>
      </div>
      <div className="mt-8 m-auto bg-transparent w-[178px] h-[166.22px] overflow-hidden">
          <img
            src={promoimg}
            alt="Promo"
            className="bg-transparent w-full h-full object-cover border-none"
          />
      </div>

      <div className="flex justify-center">

      <div className="flex justify-center mt-8 bg-white text-[#0F1629] rounded-xl py-3 w-[237px] text-center cursor-pointer">
        <button className="font-medium"> 
          Get Started for FREE
        </button>
        <div className="ml-4 mt-1">
          <FaArrowRight className="font-thin"/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default CardsPromo;