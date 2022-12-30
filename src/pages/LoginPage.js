import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmailHandler = (e) => {
    const value = e.target.value;

    setEmail(value);
  };

  const onChangePasswordHandler = (e) => {
    const value = e.target.value;

    setPassword(value);
  };
  const onSubmitButtonHandler = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        email,
        password,
      };

      const registerResponse = await axios.post(
        "http://localhost:9000/auth/login",
        payload
      );

      if (registerResponse.status === 200) {
        console.log("berhasil daftar");

        const jwtToken = registerResponse.data.data.token;

        localStorage.setItem("user_token", jwtToken);

        navigate("/");
      }
    } catch (err) {
      console.log("gagal login:", err);
    }
  };

  return (
    <div>
      {/* colom 1 */}
      <div className="grid grid-cols-2 place-items-center m-0">
        <div className="w-full h-[655px]">
          <h1 className="ml-[150px] mt-[200px] pt-8 text-black font-bold text-2xl font-sans">Welcome Back!</h1>
          <form className="bg-white ml-[150px] mr-[150px]">
            <div className="md:flex md:items-center mb-6 mt-8">
              <div >
                <label className="font-sans text-sm text-black md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                  Email
                </label>
                <input
                  onChange={(e) => onChangeEmailHandler(e)}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[400px] py-2 px-4 text-gray-700 leading-tight text-sm font-sans focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div>
                <label className="font-sans text-sm text-black md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-password">
                  Password
                </label>
                <input
                  onChange={(e) => onChangePasswordHandler(e)}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[400px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-password"
                  type="password"
                  placeholder="******************"
                />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div></div>
              <div className="mb-4 mt-3">
                <button
                  onClick={(e) => onSubmitButtonHandler(e)}
                  className="mr-4 w-[400px] bg-[#1e40af] shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-9 w-[230px] rounded"
                  type="button">
                  <Link to="/" className="no-underline text-white font-sans text-sm">
                    Sign In
                  </Link>
                </button>
              </div>
            </div>
            <div className="md:items-center">
              <div className="text-center mt-3 text-sm font-sans">
                <p className="text-black">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="font-bold underline text-[#1e40af]"
                  >
                     Sign Up For Free
                  </Link>{" "}
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* <div>
          <div>
            Email: <input onChange={(e) => onChangeEmailHandler(e)} />
          </div>
          <div>
            Password: <input onChange={(e) => onChangePasswordHandler(e)} />
          </div>
          <button onClick={(e) => onSubmitButtonHandler(e)}>Login</button>
          <button>
            <Link to="/register">Register</Link>
          </button>
        </div> */}

        {/* colom 2 */}
        <div className="w-full h-[655px] bg-[#1e40af] ">
          <div className="mt-[150px] ml-[80px]">
            <h1 className="mb-5 font-sans text-3xl text-white font-bold">Binar Rental Car</h1>
            <img src="/Landing page - Desktop.svg" className="bottom-0 right-0" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}
