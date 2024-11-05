import { useNavigate } from "react-router-dom";
import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";
import offer3 from "../assets/offer3.webp";
import offer4 from "../assets/offer4.png";
const Offers = () => {
    const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 my-10 text-center">
      <div className="bg-white pt-10 rounded-xl">
        <h1 className="text-3xl md:text-4xl text-primary font-bold">
          Get The Best Deals
        </h1>
        <p className="text-gray-500 mt-2">
          From Everyday Essentials to Premium Brands, Discover Deals You Can't
          Resist!
        </p>
        <img className="mx-auto md:w-3/5" src={offer3} alt="" />
      </div>

      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
        <img onClick={()=>navigate("/details/A002")}
          className="hover:scale-75 hover:cursor-pointer transform transition duration-300 rounded-xl shadow-lg"
          src={offer1}
          alt=""
        />
        <img onClick={()=>navigate("/category/Smart Watches")} className="hover:scale-75 hover:cursor-pointer transform transition duration-300 rounded-xl shadow-lg" src={offer2} alt="" />
        <img
          className="hidden md:col-span-2 w-full  md:flex  rounded-xl shadow-lg"
          src={offer4}
          alt=""
        />
      </div>
    </div>
  );
};

export default Offers;
