// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiCart, BiMenu, BiX } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import Searchbar from "./header/Searchbar";
import { NavLink } from "react-router-dom";
import Category from "./header/Category";
import Account from "./header/Account";

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);
  const [mobileSearchBar, setMobileSearchbar] = useState(false);

  useEffect(() => {
    if (menuBar) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuBar]);
  return (
    <div className="fixed w-full bg-white lg:hover:bg-white flex justify-between items-center p-4 lg:bg-white/70 backdrop-blur-md z-[99999]">
      {/* Left Side */}
      <div>
        {mobileSearchBar ? (
          <div className="hidden"></div>
        ) : (
          <div className="flex items-center">
            <BiMenu
              onClick={() => setMenuBar(!menuBar)}
              size={30}
              className="lg:hidden no-scroll"
            />
            <h1 className="cursor-pointer font-bold ps-4 sm:ps-10 md:ps-12 lg:ps-0 text-2xl">
              E-com
            </h1>
          </div>
        )}
      </div>

      {/* Overlay */}
      <div
        className={
          menuBar
            ? "fixed bg-black/40 top-0 left-0 z-10 w-full min-h-screen"
            : "hidden"
        }></div>

      {/* Mobile Side Menu bar */}
      <div
        className={
          menuBar
            ? "fixed top-0 left-0 w-[270px] min-h-screen bg-primary z-[999] duration-300 "
            : "fixed top-0 left-0 w-0 bg-primary z-[999] duration-200"
        }>
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
            <h2 className="">Categories</h2>
            <h2>Deals</h2>
            <h2>What's New</h2>
            <h2>Delivery</h2>
          </div>
        </div>
      </div>

      {/* Selection */}
      <ul className="items-center relative hidden lg:flex">
        <Category />
        <li className="p-2 cursor-pointer xl:hover:text-primary xl:me-4">
          Deals
        </li>
        <li className="p-2 cursor-pointer xl:hover:text-primary xl:me-4">
          What's New
        </li>
        <li className="p-2 cursor-pointer xl:hover:text-primary xl:me-4">
          Delivery
        </li>
      </ul>

      {/* Search Bar */}
      <Searchbar />

      {/* Right Side */}
      <div className="flex items-center">
        {/* Mobile Search Bar */}
        <div
          className={
            mobileSearchBar
              ? "bg-lightblue rounded-full w-full flex items-center p-2 sm:hidden duration-300"
              : "bg-transparent flex items-center  sm:hidden duration-300"
          }>
          <HiOutlineSearch
            size={25}
            onClick={() => setMobileSearchbar(!mobileSearchBar)}
          />
          <input
            type="text"
            placeholder="Search Products"
            className={
              mobileSearchBar
                ? "bg-transparent focus:outline-none w-[240px]"
                : "hidden"
            }
          />
        </div>

        {/* Account and Cart and Back Button in Mobile version*/}
        <div>
          {mobileSearchBar ? (
            <h1
              onClick={() => setMobileSearchbar(!mobileSearchBar)}
              className="px-3">
              Back
            </h1>
          ) : (
            <div className="flex">
              <Account />

              <div className="flex items-center  xl:hover:text-primary cursor-pointer">
                <BiCart size={25} />
                <h2 className="px-1 hidden sm:block">Cart</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
