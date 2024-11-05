import { useNavigate } from "react-router-dom";
import error404 from "../assets/404.png";
const Error = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-white flex flex-col">
      <img
        className="mx-auto my-20 object-cover md:h-[400px]"
        src={error404}
        alt=""
      />
      <button onClick={()=>navigate("/")}  className="btn bg-primary text-white hover:text-primary hover:bg-gray-100 mx-auto">
        Return To Home
      </button>
    </div>
  );
};

export default Error;
