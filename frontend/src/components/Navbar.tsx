// import { Link } from "react-router-dom";
import { useState } from "react";
import { BiUser, BiCart, BiCaretDown, BiMenu, BiX } from "react-icons/bi";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);
  const [categoryDropDown, setCategoryDropDown] = useState(false);

  return (
    <div className="  flex justify-between items-center p-4">
      {/* Left Side */}
      <div className="flex items-center">
        <BiMenu
          onClick={() => setMenuBar(!menuBar)}
          size={30}
          className="lg:hidden"
        />
        <h1 className="cursor-pointer font-bold ps-4 sm:ps-10 md:ps-12 lg:ps-0 text-2xl">
          E-com
        </h1>
      </div>

      {/* Mobile */}
      {/* Overlay */}
      <div
        className={
          menuBar
            ? "fixed bg-black/40 top-0 left-0 z-10 w-full min-h-screen"
            : "hidden"
        }
      ></div>

      {/* Mobile Side Menu bar */}
      <div
        className={
          menuBar
            ? "fixed top-0 left-0 w-[270px] min-h-screen bg-primary z-10 duration-300 "
            : "fixed top-0 left-0 w-0 bg-primary z-10 duration-200"
        }
      >
        <div className="relative">
          <BiX
            onClick={() => setMenuBar(!menuBar)}
            size={40}
            className=" absolute top-2 right-2"
          />
        </div>

        {/* Mobile Side Bar Items */}
        <div className="overflow-hidden">
          <div className="flex items-center justify-center w-full h-[120px]">
            <h1 className="w">E-com</h1>
          </div>

          <div>
            <h2>Categories</h2>
            <h2>Deals</h2>
            <h2>What's New</h2>
            <h2>Delivery</h2>
          </div>
        </div>
      </div>

      {/* Selection */}
      <div className="items-center relative hidden lg:flex">
        <h2
          onClick={() => setCategoryDropDown(!categoryDropDown)}
          className="px-2 cursor-pointer flex items-center"
        >
          Categories
          <BiCaretDown />
          {/* Category Dropdown */}
          <div
            className={
              categoryDropDown
                ? "absolute w-auto h-auto top-6 left-0 bg-white z-10 rounded-b-md"
                : "hidden"
            }
          >
            <h3 className="font-bold p-3 text-sm">Electric</h3>
            <h3 className="font-bold p-3 text-sm">Sneakers</h3>
            <h3 className="font-bold p-3 text-sm">Toys</h3>
            <h3 className="font-bold p-3 text-sm">Pharmacy</h3>
            <h3 className="font-bold p-3 text-sm">Books</h3>
            <h3 className="font-bold p-3 text-sm">Furniture</h3>
          </div>
        </h2>
        <h2 className="px-2 cursor-pointer hover:text-primary">Deals</h2>
        <h2 className="px-2 cursor-pointer hover:text-primary">What's New</h2>
        <h2 className="px-2 cursor-pointer hover:text-primary">Delivery</h2>
      </div>

      {/* Search Bar */}
      <Searchbar />

      {/* Right Side */}
      <div className="flex items-center">
        {/* Account */}
        <div className="flex items-center hover:text-primary pe-8 lg:pe-4">
          <BiUser size={22} />
          <h2 className="px-1">Account</h2>
        </div>

        {/* Cart */}
        <div className="flex items-center  hover:text-primary">
          <BiCart size={22} />
          <h2 className="px-1">Cart</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
