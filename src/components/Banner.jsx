
import banner from "../assets/banner.jpg";
const Banner = () => {
 
  const scrollToCategory = () => {
    document.getElementById("category")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-primary rounded-b-xl mx-2 md:mx-4 mb-48 md:mb-60 lg:mb-96">
      <div className="container mx-auto relative">
        <div className="px-4  text-white text-center space-y-6 pt-10 pb-36 md:pb-56 lg:pb-96 ">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl ">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="md:w-3/4  mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button onClick={scrollToCategory} className="btn  text-xl font-bold rounded-full text-primary bg-white px-6">
            Shop Now
          </button>
              </div>
              <div className="mx-auto container w-4/5 md:w-3/4  p-2 bg-opacity-50 border-4  rounded-xl bg-white absolute   bottom-0 left-1/2 transform translate-x-[-50%] -translate-y-[-55%]">
        <img className="rounded-xl w-full" src={banner} alt="" />
      </div>
      </div>

      
    </div>
  );
};

export default Banner;
