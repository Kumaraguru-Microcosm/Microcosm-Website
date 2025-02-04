import React, { useRef, useState } from "react";

const SubscribeSection = () => {
  const [mail,setMail] = useState("")

  const handleSubmit = async() => {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/subscribe`,{
      headers:{
      "Content-Type":"application/json"
    },
    method:"POST",
    body:JSON.stringify({email:mail}),
  })
  
  setMail("")
  }
  return (
    <section className="flex justify-center items-center p-4 mt-8 bg-white">
      <div className="bg-white shadow-lg rounded-md flex flex-col md:flex-row items-center px-8 py-6 w-full max-w-4xl">
        {/* Icon */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
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
          <h3 className="text-xl font-bold text-black">Mailing List...</h3>
        </div>

        {/* Input and Button */}
        <div className="w-full flex flex-col md:flex-row md:items-center md:ml-6">
          <input
          required
          value={mail}
            onChange={(e) => setMail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-black focus:outline-none focus:border-black px-4 py-2 text-sm mb-4 md:mb-0 md:mr-4 text-black"
          />
          <button 
          onClick={handleSubmit}
          className="border border-black text-black text-lg px-6 py-2 rounded-full shadow transition duration-300 ease-in-out hover:bg-black hover:text-white">
            SUBMIT
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
