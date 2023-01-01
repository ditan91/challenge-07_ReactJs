import { useEffect, useState } from "react";
import "./home-page.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function HomePage() {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState();

  useEffect(() => {
    const checkIsLoggedIn = async () => {
      try {
        const jwtToken = localStorage.getItem("user_token");

        const validateTokenResponse = await axios.get(
          "http://localhost:9000/auth/me",
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        );

        //biar nggk balik lagi ke login
        if (validateTokenResponse.status !== 200) {
          navigate("/");
        } else {
          // console.log(validateTokenResponse.data.data.user);
          setLoggedInUser(validateTokenResponse.data.data.user);
        }
      } catch (err) {
        console.log(err);
        // navigate("/login");
      }
    };

    checkIsLoggedIn();
  });

  // const logoutEventHandler = (e) => {
  //   e.preventDefault();

  //   localStorage.removeItem("user_token");
  //   setLoggedInUser(null);
  // };

  return (
    <div>
      <Header />
      {/* <h3>Home Page</h3>
      <h2>Selamat datang, {loggedInUser ? loggedInUser.name : "Loading..."}</h2>
      <button onClick={(e) => logoutEventHandler(e)}>Logout</button>
      <br />
      <a href="/about">Pindah ke halaman about pake href</a>
      <br />
      <Link to="/about">Pindah ke halaman about pake link</Link>
      <br />
      <Link to="/cars">Cars Section</Link> */}
      {/* Section 1 */}
      
      {/* <button onClick={(e) => logoutEventHandler(e)}>Logout</button> */}
      <div className="grid grid-cols-2 place-items-center m-[70px] mt-[150px]">
        {loggedInUser ? loggedInUser.name : ""}{" "}
        <div className="">
          <img src="/img_service.svg" className="" alt="" />
        </div>
        <div className="m-[40px]">
          <h1 className="font-sans text-black font-bold text-2xl mb-5 mr-[170px]">
            Best Car Rental for any kind of trip in Bandung
          </h1>
          <p className="font-sans text-gray-700 text-sm mr-[160px] mb-6">
            Sewa mobil di Bandung bersama Binar Car Rental jaminan harga lebih
            murah dibandingkan yang lain, kondiis mobil baru, serta kualitas
            pelayanan terbaik untuk wisata, bisnis, wedding, meeting, dll.
          </p>
          <ul className="font-sans text-black text-sm">
            <li className="flex">
              <img src="/Group 53.svg" className="mr-4 mb-4" alt="" />
              Sewa Mobil Dengan Supir di Bali 12 Jam
            </li>
            <li className="flex">
              <img src="/Group 53.svg" className="mr-4 mb-4" alt="" />
              Sewa Mobil Lepas Kunci di Bali 24 Jam
            </li>
            <li className="flex">
              <img src="/Group 53.svg" className="mr-4 mb-4" alt="" />
              Sewa Mobil Jangka Panjang Bulanan
            </li>
            <li className="flex">
              <img src="/Group 53.svg" className="mr-4 mb-4" alt="" />
              Gratis Antar - Jemput Mobil di Bandara
            </li>
            <li className="flex">
              <img src="/Group 53.svg" className="mr-4 mb-4" alt="" />
              Layanan Airport Transfer / Drop In Out
            </li>
          </ul>
        </div>
      </div>
      {/* Section 2 */}
      <div className="place-items-center m-0 mt-[150px] m-[70px]">
        <h1 className="font-sans text-black font-bold text-2xl mb-5 mr-[170px]">
          Why Us?
        </h1>
        <p className="font-sans text-black text-sm mr-[160px] mb-6">
          Mengapa harus memilih Binar Car Rental?
        </p>
        <div className="flex">
          <div className="border rounded pt-8 pb-8 pl-8 mr-8">
            <img src="/icon_complete.svg" className="mr-4 mb-4" alt="" />
            <h2 className="font-sans text-black font-bold text-base">Mobil Lengkap</h2>
            <p className="font-sans text-black text-sm mb-6">
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih, dan
              terawat
            </p>
          </div>
          <div className="border rounded pt-8 pb-8 pl-8 mr-8">
            <img src="/icon_price.svg" className="mr-4 mb-4" alt="" />
            <h2 className="font-sans text-black font-bold text-base">Harga Murah</h2>
            <p className="font-sans text-black text-sm">
              Harga murah dan bersaing, bisa bandingkan harga kami dengan  rental mobil lain
            </p>
          </div>
          <div className="border rounded pt-8 pb-8 pl-8 mr-8">
            <img src="/icon_24hrs.svg" className="mr-4 mb-4" alt="" />
            <h2 className="font-sans text-black font-bold text-base">Layanan 24 Jam</h2>
            <p className="font-sans text-black text-sm">
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
            </p>
          </div>
          <div className="border rounded pt-8 pb-8 pl-8 mr-8">
            <img src="/icon_professional.svg" className="mr-4 mb-4" alt="" />
            <h2 className="font-sans text-black font-bold text-base">Sopir Profesional</h2>
            <p className="font-sans text-black text-sm">
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
            </p>
          </div>
        </div>
      </div>
      {/* Ini harusnya carroseul tp soon */}
      <img src="/Testimony.svg" className="mr-4 mb-4" alt="" />
      <div className="text-center bg-[#0D28A6] m-[70px] p-8 rounded-lg">
        <h1 className="font-sans text-white font-bold text-2xl mt-8">Sewa Mobil di Bandung</h1>
        <p className="font-sans text-white text-sm mt-5 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <button className="bg-[#5CB85F] text-white font-bold py-2 px-7 w-[200px] mt-[10px]">Mulai Sewa Mobil</button>
      </div>
      {/* section FAQ  */}
      <div className="grid grid-cols-2 m-[70px] mt-[150px]">
        <div className="">
          <h1 className="font-sans text-black font-bold text-2xl mb-5 mr-[170px]">
            Frequently Ask Question
          </h1>
          <p className="font-sans text-black text-sm mt-5 mb-8">Lorem ipsum dolor si amet, consectetur adipiscing elit</p>

        </div>
        <div className="">
          <div className="relative w-[700px] ml-[-100px] mb-8">
              <select className="w-full p-5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                  <option className="font-sans text-black text-sm mt-5 mb-8">Apa saja syarat yang dibutuhkan?</option>
                  <option className="font-sans text-black text-sm mt-5 mb-8">Action</option>
                  <option className="font-sans text-black text-sm mt-5 mb-8">Another action</option>
                  <option className="font-sans text-black text-sm mt-5 mb-8">Something else here</option>
              </select>
          </div>
          <div className="relative w-[700px] ml-[-100px] mb-8">
              <select className="w-full p-5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                  <option className="font-sans text-black text-sm mt-5 mb-8">Berapa hari minimal sewa mobil lepas kunci?</option>
                  <option className="font-sans text-black text-sm mt-5 mb-8">Action</option>
                  <option className="font-sans text-black text-sm mt-5 mb-8">Another action</option>
                  <option className="font-sans text-black text-sm mt-5 mb-8">Something else here</option>
              </select>
          </div>
          <div className="relative w-[700px] ml-[-100px] mb-8">
              <select className="w-full p-5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                  <option className="font-sans text-black text-sm mt-5 mb-8">Berapa hari sebelumnya sebaiknya booking sewa mobil?</option>
                  <option className="font-sans text-black text-sm mt-5 mb-8">Action</option>
                  <option className="font-sans text-black text-sm mt-5 mb-8">Another action</option>
                  <option className="font-sans text-black text-sm mt-5 mb-8">Something else here</option>
              </select>
          </div>
          <div className="relative w-[700px] ml-[-100px] mb-8">
              <select className="w-full p-5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                  <option className="font-sans text-black text-sm mt-5 mb-8">Apakah ada biaya antar-jemput?</option>
                  <option className="font-sans text-black text-sm mt-5 mb-8">Action</option>
                  <option className="font-sans text-black text-sm mt-5 mb-8">Another action</option>
                  <option className="font-sans text-black text-sm mt-5 mb-8">Something else here</option>
              </select>
          </div>
          <div className="relative w-[700px] ml-[-100px] mb-8">
              <select className="w-full p-5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                  <option className="font-sans text-black text-sm mt-5 mb-8">Bagaimana jika terjadi kecelakaan?</option>
                  <option className="font-sans text-black text-sm mt-5 mb-8">Action</option>
                  <option className="font-sans text-black text-sm mt-5 mb-8">Another action</option>
                  <option className="font-sans text-black text-sm mt-5 mb-8">Something else here</option>
              </select>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
