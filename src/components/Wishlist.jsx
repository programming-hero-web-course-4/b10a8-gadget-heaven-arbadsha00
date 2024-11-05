import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { WishContext } from "./Context";
import { getWish, removeWish, addPurchase ,getPurchase} from "./LS";
import { PurchaseContext } from "./Context";
import Card from "./Card";
const Wishlist = () => {
  const data = useLoaderData();
  const { setTotalWish } = useContext(WishContext);
  const [filterData, setFilterData] = useState([]);
  const { setTotalPurchase } = useContext(PurchaseContext);
  useEffect(() => {
    const stored = getWish();
    const saved = [];
    for (const id of stored) {
      {
        const item = data.find((item) => item.product_id === id);
        if (item) saved.push(item);
      }
    }
    setFilterData(saved);
  }, [data]);
  function handleRemoveWish(id) {
    const newArr = filterData.filter(i => i.product_id !== id);
    removeWish(id);
    setFilterData(newArr);
    setTotalWish(getWish().length);
  }
  function handleCart(id) {
    addPurchase(id);
    setTotalPurchase(getPurchase().length);

  }
  return (
    <div className="container mx-auto px-4 my-6">
      <h3 className="text-2xl font-bold">Wishlist</h3>
      {
        <div className="space-y-4 my-10">
        {filterData.map((item, index) => (
          <Card
          handleCart={handleCart}
            item={item}
            handleRemoveWish={handleRemoveWish}
            key={index}
          ></Card>
        ))}
      </div>
      }
    </div>
  );
};

export default Wishlist;
