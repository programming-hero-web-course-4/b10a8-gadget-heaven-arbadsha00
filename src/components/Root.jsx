import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { createContext, useState } from 'react';
export const PurchaseContext = createContext();
export const WishContext = createContext();
const Root = () => {
  const [totalPurchase, setTotalPurchase] = useState(0);
  const [totalWish, setTotalWish] = useState(0);

  return (
    <div>
      <WishContext.Provider value={{totalWish, setTotalWish}}>
      <PurchaseContext.Provider value={{totalPurchase, setTotalPurchase}}>
      <Nav></Nav>
      <Outlet></Outlet>
      </PurchaseContext.Provider>
     </WishContext.Provider>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;
