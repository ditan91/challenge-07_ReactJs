import { useState } from "react";
import React from 'react'
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

function Header() {
  // const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState();

  const logoutEventHandler = (e) => {
    e.preventDefault();

    localStorage.removeItem("user_token");
    setLoggedInUser(null);
  };
  return (
    <div className="bg-[#F1F3FF]">
      
      <div className="p-8">
        <ul className="flex justify-end">
          <li className="mr-2">
            <img src="/logo.svg" className="mr-[750px]" alt=""/>
          </li>
          <li className="mr-6">
            <a
              className="text-black hover:text-blue-800 text-sm font-sans"
              href="/"
            >
              Our Services
            </a>
          </li>
          <li className="mr-6">
            <a
              className="text-black hover:text-blue-800 text-sm font-sans"
              href="/"
            >
              Why Us
            </a>
          </li>
          <li className="mr-6">
            <a
              className="text-black hover:text-blue-800 text-sm font-sans"
              href="/"
            >
              Testimonial
            </a>
          </li>
          <li className="mr-6">
            <a
              className="text-black hover:text-blue-800 text-sm font-sans py-2"
              href="/"
            >
              FAQ
            </a>
          </li>
          <button
            onClick={(e) => logoutEventHandler(e)}
            className="bg-[#5CB85F] text-white font-bold w-[100px] mt-[-10px] no-underline text-white font-sans text-sm"
            type="button"
          >
            Sign Out
            {/* <Link
              to="/register"
              className="no-underline text-white font-sans text-sm"
            >
              Sign Out
            </Link> */}
          </button>
        </ul>
      </div>
      <div className="grid grid-cols-2 place-items-center m-0">
        
        <div className="m-[40px]">
          <h1 className="font-sans text-black font-bold text-4xl mb-8">Sewa & Rental Mobil Terbaik di Kawasan Bandung</h1>
          <p className="font-sans text-black text-sm mr-[175px] mb-6">Selamat datang {loggedInUser ? loggedInUser.name : ""}{" "} di Binar Car Rental, Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          <button className="bg-[#5CB85F] text-white font-bold py-2 px-7 w-[200px] mt-[-10px]">
            <Link
              to="/cars"
              className="no-underline text-white font-sans text-sm"
            >
              Mulai Sewa Mobil
            </Link>
          </button>
        </div>
        
        <div className="">
          <img src="/img_car.svg" className="" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Header;
