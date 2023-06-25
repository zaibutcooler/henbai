import { HiOutlineSearch } from "react-icons/hi";

const Searchbar = () => {
  return (
    <div className="items-center hidden p-2 rounded-full bg-white/30 backdrop-blur-md sm:flex focus-within:bg-lightblue border-primary border-2">
      <input
        type="text"
        placeholder="Search Products"
        className="bg-transparent focus:outline-none placeholder:text-[#555555] w-[120px]   md:w-[260px] lg:w-[240px] xl:w-[290px] "
      />
      <HiOutlineSearch
        size={22}
        className="ms-2 bg-transparent text-[#333333]"
      />
    </div>
  );
};

export default Searchbar;
