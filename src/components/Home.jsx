import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Explore from "./Explore";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Gadget Heaven</title>
      </Helmet>
      <div className="pb-10">
        <Banner></Banner>
        <h1 className="text-4xl font-bold text-center mb-10 pt-24">
          Explore Cutting-Edge Gadgets
        </h1>
        <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div>
            <Explore></Explore>
          </div>
          <div id="category" className="lg:col-span-3">
            <Outlet></Outlet>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};

export default Home;
