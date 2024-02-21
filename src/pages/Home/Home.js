// Home.js

import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-yellow-200 to-yellow-400">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Declare Daily Work
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="task"
          >
            Task
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="task"
            type="text"
            placeholder="Enter your task"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            rows="3"
            placeholder="Enter description"
          ></textarea>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Home;
