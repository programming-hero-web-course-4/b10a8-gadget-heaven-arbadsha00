import React from "react";
import { useRouteError } from "react-router-dom";
import error404 from "../assets/404.png";
const Error = () => {
  const error = useRouteError();
  return (
    <div className=" bg-white">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <img className="mx-auto my-20 object-cover md:h-[400px]" src={error404} alt="" />
      
    </div>
  );
};

export default Error;
