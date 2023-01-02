import React from "react";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ListCar() {
  // const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState();

  const logoutEventHandler = (e) => {
    e.preventDefault();

    localStorage.removeItem("user_token");
    setLoggedInUser(null);
  };

  const [carsData, setCarsData] = useState([]);
  

  useEffect(() => {
    console.log("useEffect running");
    const getCarsData = async () => {
      const cars = await axios.get(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"

      );
      setCarsData(cars.data);
    };

    getCarsData();
  });

  // const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [capacity, setCapacity] = useState();

  // const onChangeType = (e) => {
  //   const value = e.target.value;

  //   setType(value);
  // };
  const onChangeDate = (e) => {
    const value = e.target.value;

    setDate(value);
  };
  const onChangeTime = (e) => {
    const value = e.target.value;

    setTime(value);
  };
  const onChangeCapacity = (e) => {
    const value = e.target.value;

    setCapacity(value);
  };
  const ListCar = []
  const [filter, setFilterCars] = useState();
  const onSubmitButtonHandler = async (e) => {
    e.preventDefault();
    carsData.map((car) => {
      if (
        date <= car.availableAt.split("T", 1) &&
        capacity <= car.capacity &&
        time.split(":", 1) <=
          car.availableAt.substring(11, 16).split(":", 1)
      ) {
        ListCar.push(car);
      }
    });

    setFilterCars(ListCar);
  };
  
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
              onChange={(e) => onChangeDate(e)}
              className="w-full p-1 pl-3 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              // onChange={(e) => setDateCars(e.target.value)}
            />
          </div>
        </div>
        <div className="font-sans text-gray-700 text-sm m-6">
          Waktu Jemput/Ambil
          <div className="relative w-[200px] mt-2">
            <input
              onChange={(e) => onChangeTime(e)}
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
              onChange={(e) => onChangeCapacity(e)}
              className="w-full p-1 pl-3 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              // id="inline-password"
              type="number"
              placeholder="Jumlah penumpang"
            />
          </div>
        </div>
        <div className="font-sans text-gray-700 text-sm m-6">
          <p></p>
          <button 
            onChange={(e) => onSubmitButtonHandler(e)}
            className="bg-[#5CB85F] mt-6 text-white font-bold py-2 px-7 w-[150px]">
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
      {carsData.map((car) => (
        <div key={car.id} className="grid grid-cols-4">
          <div className="drop-shadow-xl bg-white rounded m-8 p-8 w-[300px]">
            <img src={car.image} alt="" className="w-[270px] h-[160px]" />
            <h2 className="font-sans text-black font-bold text-base mb-2 mt-2">
              {car.manufacture} {car.model}
            </h2>
            <p className="font-sans text-black font-bold text-xl">
              {car.rentPerDay} per-day
            </p>
            <p className="font-sans text-black text-sm">{car.description}</p>
            <p className="font-sans text-black text-sm">
              Capacity: {car.capacity}
            </p>
            <p className="font-sans text-black text-sm">
              Transmission: {car.transmission}
            </p>
            <p className="font-sans text-black text-sm">Year: {car.year}</p>
            <button className="bg-[#5CB85F] mt-6 text-white font-bold py-2 px-7 w-[200px]">
              Choose the car
            </button>
          </div>
        </div>
      ))}
      <script src="https://unpkg.com/flowbite@1.5.5/dist/datepicker.js"></script>
      <Footer />
    </div>
  );
}
