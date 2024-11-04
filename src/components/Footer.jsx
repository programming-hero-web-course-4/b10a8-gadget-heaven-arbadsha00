import React from "react";

const Footer = () => {
  return (
    <div className="text-center bg-white py-6">
      <h1 className="font-bold text-3xl mb-2">Gadget Heaven</h1>
      <p className="text-gray-500 mb-6">
        Leading the way in cutting-edge technology and innovation.
      </p>
      <div className="divider"></div>
      <div className="footer footer-center  container mx-auto px-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
        <nav className="">
          <h6 className="footer-title text-black">Services</h6>
          <a className="link link-hover text-gray-500">Product Support</a>
          <a className="link link-hover text-gray-500">Order Tracking</a>
          <a className="link link-hover text-gray-500">Shipping & Delivery</a>
          <a className="link link-hover text-gray-500">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title text-black">Company</h6>
          <a className="link link-hover text-gray-500">About Us</a>
          <a className="link link-hover text-gray-500">Careers</a>
          <a className="link link-hover text-gray-500">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title text-black">Legal</h6>
          <a className="link link-hover text-gray-500">Terms of use</a>
          <a className="link link-hover text-gray-500">Privacy policy</a>
          <a className="link link-hover text-gray-500">Cookie policy</a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
