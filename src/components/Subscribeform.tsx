"use client"; // Hanya di komponen ini

import { useState } from "react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail(""); // Reset input setelah submit
    } else {
      alert("Please enter a valid email!");
    }
  };

  return (
    <div className="flex justify-center items-center mt-6">
      <div className="relative w-64">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
        />
      </div>
      <button
        onClick={handleSubscribe}
        className="ml-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
      >
        Subscribe
      </button>
    </div>
  );
};

export default SubscribeForm;
