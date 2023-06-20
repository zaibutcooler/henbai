import { useState } from "react";
import {
  HiOutlineBars3,
  HiMagnifyingGlass,
  HiOutlineMoon,
  HiXMark,
} from "react-icons/hi2";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // const [btn, setBtn] = useState(false);

  return (
    <div className="max-w-[1640] w-[100%] flex justify-around items-center fixed">
      {/* Left Side */}
      <div className="flex justify-between items-center w-32">
        <HiOutlineBars3
          onClick={() => setNav(!nav)}
          className="text-[30px] cursor-pointer lg:text-4xl"
        />
        <h1 className="text-lg font-bold pe-2  md:px-2 md:text-2xl cursor-pointer lg:ps-1">
          E-Com
        </h1>
      </div>

      {/* Search Input */}
      <div className="flex me-1 bg-[#94BEE9] rounded-full items-center overflow-hidden">
        <input
          type="text"
          placeholder="Search"
          className=" px-4 bg-transparent focus:outline-none overflow-hidden min-w-[150px] placeholder:text-sm placeholder:text-white p-2 md:w-[350px] md:placeholder:text-[16px] lg:w-[600px]"
        />
        <div className="bg-[#D8E7EC] h-[2.5rem] w-10 flex items-center justify-center active:bg-black active:text-white md:w-32 cursor-pointer">
          <HiMagnifyingGlass className="text-[18px] md:text-2xl" />
        </div>
      </div>

      {/* Right Side */}
      <div className=" w-[6rem] flex flex-col md: me-5 lg:flex-row lg:justify-between lg:w-48">
        <button className="my-1  bg-[#94BEE9] rounded-lg text-[18px] lg:text-xl lg:px-3 lg:py-1">
          Log in
        </button>
        <button
          className="my-1 bg-slate-300 rounded-lg text-[18px] lg:text-xl lg:px-3
        lg:py-1"
        >
          Sign Up
        </button>
      </div>

      {/* Theme Button */}
      <button>
        <HiOutlineMoon className="w-[30px] h-[30px] bg-slate-300 rounded-full flex justify-center items-center p-1 lg:w-[40px] lg:h-[40px] lg:p-2" />
      </button>

      {/* Overlay */}
      <div
        className={
          nav ? "bg-black/50 fixed w-full h-screen z-10 top-0 left-0" : "hidden"
        }
      ></div>

      {/* Side Navbar */}
      <div
        className={
          nav
            ? "absolute w-[300px] h-[100vh] bg-[#94BEE9] top-0 left-0 z-10 duration-300"
            : "absolute w-0 h-[100vh] bg-[#94BEE9] top-0 left-0 z-10 duration-300"
        }
      >
        <div className="relative w-full">
          <HiXMark
            onClick={() => setNav(!nav)}
            className="absolute text-4xl top-1 right-1 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
