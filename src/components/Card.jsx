import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Card = ({ item, handleRemove, index, handleCart, handleRemoveWish }) => {
  const location = useLocation();
  const [onwish, setOnwish] = useState(false);
  useEffect(() => {
    if (location.pathname === "/dashboard/wishlist")
      setOnwish(true);
  },[location.pathname])
  return (
    <div className="bg-white flex justify-between p-4 rounded-xl item">
      <div className="flex flex-col md:flex-row items-center">
        <img className="w-[200px]" src={item.product_image} alt="" />
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold">{item.product_title}</h1>
          <p className="text-gray-500">{item.description}</p>
          <p className="text-gray-600 font-semibold">Price :$ {item.price}</p>
          {onwish && <button onClick={()=>handleCart(item.product_id)} className="btn bg-primary text-white rounded-full hover:text-primary hover:bg-white">Add to Cart</button>}
        </div>
      </div>
      <button
        onClick={() =>onwish?handleRemoveWish(item.product_id):handleRemove(index)}
        className="btn btn-sm btn-outline btn-circle text-red-500"
      >
        X
      </button>
    </div>
  );
};

export default Card;
