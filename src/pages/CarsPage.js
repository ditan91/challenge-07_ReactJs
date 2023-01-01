import React from "react";
import Footer from "../components/Footer";
import { useState } from "react";
// import Datepicker from 'flowbite-datepicker/Datepicker';
// import Datepicker from "react-tailwindcss-datepicker";
// import { Link } from "react-router-dom";

export default function ListCar() {
  // const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState();

  const logoutEventHandler = (e) => {
    e.preventDefault();

    localStorage.removeItem("user_token");
    setLoggedInUser(null);
  };

  // const [value, setValue] = useState({
  //   startDate: new Date(),
  //   endDate: new Date().setMonth(11),
  // });

  // const handleValueChange = (newValue) => {
  //   console.log("newValue:", newValue);
  //   setValue(newValue);
  // };
  return (
    <div className="bg-[#F1F3FF]">
      {loggedInUser ? loggedInUser.name : ""}{" "}
      <div className="p-8">
        <ul className="flex justify-end">
          <li className="mr-6">
            <img src="/logo.svg" className="mr-[750px]" alt="" />
          </li>
          <li className="mr-2">
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
          <h1 className="font-sans text-black font-bold text-4xl mb-8">
            Sewa & Rental Mobil Terbaik di Kawasan Bandung
          </h1>
          <p className="font-sans text-black text-sm mr-[175px] mb-6">
            Selamat datang di Binar Car Rental, Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
        </div>

        <div className="">
          <img src="/img_car.svg" className="" alt="" />
        </div>
      </div>
      {/* select filter  */}
      <div className="flex rounded m-8 justify-center drop-shadow-xl bg-white">
        <div className="font-sans text-gray-700 text-sm m-6">
          Tipe Driver
          <div className="relative w-[200px] mt-2">
            <select className="w-full p-1 pl-3 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
              <option className="font-sans text-sm mt-5">
                Pilih Tipe Driver
              </option>
              <option className="font-sans text-sm mt-5">Dengan Sopir</option>
              <option className="font-sans text-sm mt-5">
                Tanpa Sopir (Lepas Kunci)
              </option>
            </select>
          </div>
        </div>
        <div className="font-sans text-gray-700 text-sm m-6">
          Tanggal
          <div className="relative mt-2 w-[200px]">
            <input
              type="date"
              className="w-full p-1 pl-3 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              // onChange={(e) => setDateCars(e.target.value)}
            />
          </div>
        </div>
        <div className="font-sans text-gray-700 text-sm m-6">
          Waktu Jemput/Ambil
          <div className="relative w-[200px] mt-2">
            <input
              // onChange={(e) => onChangePasswordHandler(e)}
              className="w-full p-1 pl-3 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              // id="inline-password"
              type="time"
              placeholder="Jumlah penumpang"
            />
          </div>
        </div>
        <div className="font-sans text-gray-700 text-sm m-6">
          Jumlah Penumpang (optional)
          <div className=" relative w-[200px] mt-2">
            <input
              // onChange={(e) => onChangePasswordHandler(e)}
              className="w-full p-1 pl-3 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              // id="inline-password"
              type="number"
              placeholder="Jumlah penumpang"
            />
          </div>
        </div>
        <div className="font-sans text-gray-700 text-sm m-6">
          <p></p>
          <button className="bg-[#5CB85F] mt-6 text-white font-bold py-2 px-7 w-[150px]">
            Cari Mobil
            {/* <Link
              to="/cars"
              className="no-underline text-white font-sans text-sm"
            >
              Mulai Sewa Mobil
            </Link> */}
          </button>
        </div>
      </div>
      <script src="https://unpkg.com/flowbite@1.5.5/dist/datepicker.js"></script>
      <Footer />
    </div>
  );
}
