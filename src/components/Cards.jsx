import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import errorImg from "../assets/erreo.png";
const Cards = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const data = useLoaderData();
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    if (category === "all" || !category) {
      setCategoryData(data);
    } else {
      const newArr = [...data].filter((item) => item.category === category);
      setCategoryData(newArr);
    }
  }, [category, data]);
  return (
    <div className="grid gap-5 grid-cols-1 lg:grid-cols-3">
      {categoryData.length ? (
        categoryData.map((item) => (
          <div
            className="bg-white text-center  p-4 space-y-3 rounded-xl"
            key={item.product_id}
          >
            <img
              className=" w-[500px] rounded-xl"
              src={item.product_image}
              alt=""
            />
            <h3 className="font-bold text-xl  ">{item.product_title}</h3>
            <p>Price : ${item.price}</p>
            <button onClick={()=>navigate(`/details/${item.product_id}`)} className="btn rounded-full text-primary border-primary bg-white hover:text-white hover:bg-primary">
              View Details
            </button>
          </div>
        ))
      ) : (
        <div className="lg:col-span-3">
          <img src={errorImg} alt="" />
        </div>
      )}
    </div>
  );
};

export default Cards;
