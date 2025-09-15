import React, { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";

export default function CartButton({ cartCount }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setShowPopup(!showPopup)}
        onBlur={() => setShowPopup(false)}
        className="relative focus:outline-none"
      >
        {/* Cart Icon (simple SVG) */}
        <TiShoppingCart className="w-8 h-8" fill="#444444" />
        {/* Badge */}
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#ff7d29] text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>

      {/* Popup */}
      {showPopup && (
        <div
          tabIndex={-1}
          className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg p-3 text-center text-gray-800 z-999"
        >
          <p className="font-semibold">Cart Items</p>
          <p>
            {cartCount} item{cartCount !== 1 ? "s" : ""} in your cart
          </p>
        </div>
      )}
    </div>
  );
}
