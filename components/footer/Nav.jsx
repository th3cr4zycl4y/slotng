import React from "react";

function Nav() {
  return (
    <div className="my-14 ml-9 xl:flex hidden space-x-28 ">
      <div className="space-y-7">
        <h3>INFORMATION</h3>
        <div className="space-y-2">
          <p className="text-gray-500">F.A.Qs</p>
          <p className="text-gray-500">Order History</p>
          <p className="text-gray-500">Contact</p>
        </div>
      </div>
      <div className="space-y-7">
        <h3>OUR SERVICES</h3>
        <div className="space-y-2">
          <p className="text-gray-500">Trade In</p>
          <p className="text-gray-500">How To Pay</p>
          <p className="text-gray-500">About Us</p>
        </div>
      </div>
      <div className="space-y-7">
        <h3>MY ACCOUNT</h3>
        <div className="space-y-2">
          <p className="text-gray-500">Your Account</p>
          <p className="text-gray-500">Warranty Policy</p>
        </div>
      </div>
      <div className="space-y-7">
        <h3>FOLLOW US ON</h3>
        <div className="space-y-2">
          <p className="text-blue-600">Facebook</p>
          <p className="text-cyan-600">Twitter</p>
          <p className="text-red-700">Instagram</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
