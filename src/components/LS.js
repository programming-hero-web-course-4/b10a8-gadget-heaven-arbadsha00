import { toast } from "react-toastify";
const getPurchase = () => {
  const storedListStr = localStorage.getItem("purchase-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};
const addPurchase = (id) => {
  const storedList = getPurchase();
  storedList.push(id);
  const storedListStr = JSON.stringify(storedList);
  localStorage.setItem("purchase-list", storedListStr);
  toast.success("Added to Cart");
};
const removePurchase = (id) => {
  const storedList = getPurchase();
  const remaining = storedList.filter((_, i) => i !== id);
  const storedListStr = JSON.stringify(remaining);
  localStorage.setItem("purchase-list", storedListStr);
  toast.error("Removed from Cart");
};

const getWish = () => {
  const storedListStr = localStorage.getItem("wish-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};
const addWish = (id) => {
  const storedList = getWish();
  if (!storedList.includes(id)) {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedListStr);
    toast.success("Added to Wishlist");
  }
};
const removeWish = (id) => {
  const storedList = getWish();
  const remaining = storedList.filter((idx) => idx !== id);
  const storedListStr = JSON.stringify(remaining);
  localStorage.setItem("wish-list", storedListStr);
  toast.error("Removed from Wishlist");
};
export {
  getPurchase,
  addPurchase,
  removePurchase,
  getWish,
  addWish,
  removeWish,
};
