import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { addPurchase, addWish, getPurchase, getWish } from "./LS";
import { PurchaseContext, WishContext } from "./Root";
const Details = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [singleData, setSingleData] = useState({});
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    setSingleData(data.find((item) => item.product_id === id));
  }, [data, id]);
  const {
    product_title,
    product_id,
    product_image,
    price,
    availability,
    description,
    specification = [],
    rating,
  } = singleData;
  const { setTotalWish } = useContext(WishContext);
  const { setTotalPurchase } = useContext(PurchaseContext);
  function handleCart() {
    addPurchase(product_id);
    setTotalPurchase(getPurchase().length);
  }
  useEffect(() => {
    setClicked(getPurchase().includes(product_id));
  }, [product_id]);
  function handleWish() {
    addWish(product_id);
    setTotalWish(getWish().length);
    setClicked(true);
  }
  return (
    <div className="bg-primary mb-[500px] md:mb-96">
      <div className="container mx-auto relative ">
        <div className="text-center space-y-3 pt-10 pb-[400px]  md:pb-80 ">
          <h1 className="text-3xl font-bold  text-white">Product Details</h1>
          <p className="text-white w-4/5 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center shadow-xl container w-4/5 mx-auto  bg-white rounded-xl p-2 md:p-6 absolute bottom-0 left-1/2 transform translate-x-[-50%] -translate-y-[-55%]">
          <div className="">
            <img
              className="h-[250px]  md:h-[400px] object-cover"
              src={product_image}
              alt=""
            />
          </div>
          <div className="space-y-3 ">
            <h3 className="font-semibold text-3xl"> {product_title}</h3>
            <p className="text-xl font-semibold text-gray-600">
              Price : $ {price}
            </p>
            <button
              className={`text-xs rounded-full  my-1 btn btn-outline ${
                availability ? "btn-success" : "btn-error"
              }`}
            >
              {availability ? "In Stock" : "Out of Stock"}
            </button>
            <p className="text-gray-500">{description}</p>
            <h3 className="text-lg font-semibold">Specification:</h3>
            <ul className="text-gray-500 space-y-1 list-decimal ml-6">
              {specification.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold">Rating:</h3>
            <div className="flex items-center gap-3">
              <ReactStarsRating
                className="flex gap-1"
                value={parseInt(rating)}
              />
              <p className="bg-gray-200 text-sm font-semibold p-1 rounded-full w-16 flex items-center justify-center">
                {rating}
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <button
                onClick={handleCart}
                className="btn rounded-full hover:bg-white hover:text-primary bg-primary text-lg text-white"
              >
                Add To Card
                <MdOutlineShoppingCart />
              </button>
              <button
                disabled={clicked}
                onClick={handleWish}
                className={`btn btn-circle btn-outline text-lg hover:bg-primary hover:text-white `}
              >
                <FaRegHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
