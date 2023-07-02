import { useState, FormEvent } from "react";

import { Link } from "react-router-dom";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserID } from "../../store/profileSlice";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const navigator = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/register", {
        email,
        password,
      });

      dispatch(setUserID(res.data._id));

      console.log("Sucess");
      navigator("/profile/create");
    } catch (err) {
      console.log("Eroor =>", err);
    }
    const res = await axios.post("http://localhost:5000/auth/login", {
      email,
      password,
    });
  };

  return (
    <div className="app min-h-screen bg-gray-200 mt-10">
      <div className="container mx-auto py-10 px-5 max-w-6xl">
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 relative">
          <Link to="/" className="absolute top-2 left-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 m-4 text-gray-500 hover:text-gray-700 transition duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Link>
          <h1 className="text-4xl my-10 text-center">Happy Shopping!! </h1>

          <form onSubmit={handleSubmit} className="px-4">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-400 py-2 px-2 rounded-lg w-full"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-400 py-2 px-2 rounded-lg w-full"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Confirm Password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                className="border border-gray-400 py-2 px-2 rounded-lg w-full"
              />
            </div>
            <div className="mb-4"></div>
            <div className="mb-4 text-sm">
              <input type="checkbox" className="border border-gray-400 mr-2" />
              <span>
                I accept the{" "}
                <a href="#" className="text-blue-300">
                  Terms of Use
                </a>{" "}
                &{" "}
                <a href="#" className="text-blue-300">
                  Privacy Policy
                </a>
              </span>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-300 py-2 text-center text-white hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 rounded-lg">
                Register
              </button>
            </div>
            <p className="text-center mb-4">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
