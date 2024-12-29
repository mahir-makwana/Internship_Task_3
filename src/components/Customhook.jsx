import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Customhook = () => {
  const [value, setvalue] = useState("");

  const { setItem, getItem, removeItem } = useLocalStorage("value");

  const handleSet = () => {
    setItem(value);
    toast.success("Data Set!");
  };

  const handleGet = () => {
    const data = getItem();
    if (data) {
      toast.info(`Data Retrieved: ${data}`);
    } else {
      toast.warning("No Data Found!");
    }
  };

  const handleRemove = () => {
    removeItem(value);
    toast.error("Data Removed!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-gray-100 rounded-lg shadow-md">
      <h1 className="mb-4 text-3xl font-bold text-blue-800 text-center">
        Mahir Custom Hook
      </h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        placeholder="Enter value"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex flex-row justify-between gap-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleSet}
        >
          Set
        </button>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={handleGet}
        >
          Get
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Customhook;
