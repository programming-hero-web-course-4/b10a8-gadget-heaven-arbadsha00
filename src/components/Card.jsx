

const Card = ({ item,handleRemove,index }) => {
   

    return <div className="bg-white flex justify-between p-4 rounded-xl item">
        <div className="flex flex-col md:flex-row items-center">
            <img className="w-[200px]" src={item.product_image} alt="" />
            <div className="space-y-3">
                <h1 className="text-2xl font-semibold">
                {item.product_title}
                </h1>
                <p className="text-gray-500">{item.description}</p>
                <p className="text-gray-600 font-semibold">Price :$ { item.price}</p>
            </div>
        </div>
        <button onClick={()=>handleRemove(index)} className="btn btn-sm btn-outline btn-circle text-red-500">X</button>
  </div>;
};

export default Card;
