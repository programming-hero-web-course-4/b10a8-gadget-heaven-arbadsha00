import { useContext, useEffect, useState } from "react";
import { ImEqualizer2 } from "react-icons/im";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getPurchase, removePurchase } from "./LS";
import Card from "./Card";
import { PurchaseContext } from "./Context";
import Modal from "./Modal";
const Cart = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const [filterData, setFilterData] = useState([]);
  const { setTotalPurchase } = useContext(PurchaseContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const stored = getPurchase();
    const saved = [];
    for (const id of stored) {
      {
        const item = data.find((item) => item.product_id === id);
        if (item) saved.push(item);
      }
    }
    setFilterData(saved);
  }, [data]);

  useEffect(() => {
    let sum = 0;
    filterData.forEach((item) => {
      sum = sum + item.price;
    });
    setTotal(sum);
  }, [filterData]);
  function handleSort() {
    const sortedData = [...filterData].sort((a, b) => b.price - a.price);

    setFilterData(sortedData);
  }

  function handleRemove(index) {
    const newArr = filterData.filter((_, i) => i !== index);
    removePurchase(index);
    setFilterData(newArr);
    setTotalPurchase(getPurchase().length);
  }
  function handlePurchase() {
    setFilterData([]);
    localStorage.removeItem("purchase-list");
    setTotalPurchase(0);
    navigate("/");
  }
  return (
    <div className="container mx-auto px-4 my-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h3 className="text-2xl font-bold">Cart</h3>
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <h3 className="text-2xl font-bold">Total Cost : {total}</h3>
          <div className="flex flex-col md:flex-row gap-3">
            <button
              onClick={handleSort}
              className="btn btn-outline rounded-full hover:bg-primary hover:text-white  text-primary text-lg"
            >
              Sort by Price <ImEqualizer2 />
            </button>
            <button
              disabled={!filterData.length}
              onClick={() => document.getElementById("my_modal_1").showModal()}
              className="btn text-lg text-white bg-gradient-to-b from-primary via-purple-500 to-[#e463e4] rounded-full hover:text-primary hover:bg-white"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-4 my-10">
        {filterData.map((item, index) => (
          <Card
            handleRemove={handleRemove}
            item={item}
            index={index}
            key={index}
          ></Card>
        ))}
      </div>
      <Modal handlePurchase={handlePurchase} total={total}></Modal>
    </div>
  );
};

export default Cart;
