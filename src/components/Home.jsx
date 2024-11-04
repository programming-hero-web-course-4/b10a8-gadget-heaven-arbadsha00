import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Explore from "./Explore";

const Home = () => {
  return (
    <div className="pb-10">
      <Banner></Banner>
      <h1 className="text-4xl font-bold text-center mb-10 pt-24">
        Explore Cutting-Edge Gadgets
      </h1>
      <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div>
          <Explore></Explore>
        </div>
        <div className="lg:col-span-3">
          <Outlet></Outlet>
        </div>
      </section>
    </div>
  );
};

export default Home;
