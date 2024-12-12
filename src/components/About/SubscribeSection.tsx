import React from "react";

const SubscribeSection = () => {
  return (
    <section className="flex justify-center items-center p-4 mt-8">
      <div className="bg-white lg:shadow-lg lg:rounded-full flex flex-col md:flex-row items-center px-8 py-6 w-full max-w-4xl">
        {/* Icon */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="green"
            className="w-16 h-16 mx-auto md:mx-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 8.25l7.5 3.75m0 0l7.5-3.75m-7.5 3.75v7.5m9-13.5H4.5c-.621 0-1.125.504-1.125 1.125v9c0 .621.504 1.125 1.125 1.125h15c.621 0 1.125-.504 1.125-1.125v-9c0-.621-.504-1.125-1.125-1.125z"
            />
          </svg>
        </div>

        {/* Text */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-gray-600 text-sm">Subscribe to our</p>
          <h3 className="text-xl font-bold text-gray-900">Mailing List...</h3>
        </div>

        {/* Input and Button */}
        <div className="w-full flex flex-col md:flex-row md:items-center md:ml-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-blue-500 px-4 py-2 text-sm mb-4 md:mb-0 md:mr-4"
          />
          <button className="mt-4 md:mt-0 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium px-6 py-2 rounded-full shadow-md hover:from-green-600 hover:to-blue-600 focus:ring-2 focus:ring-green-400 focus:outline-none">
            SUBMIT
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
