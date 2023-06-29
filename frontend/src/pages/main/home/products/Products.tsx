import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const Products = (props) => {
  const [wish, setWish] = useState(false);

  return (
    <div className="w-[270px] transform transition duration-300 lg:hover:shadow-primary shadow-lg  lg:hover:-translate-y-2 border-2 border-primary rounded-3xl overflow-hidden relative">
      {/* Wish icon */}
      <div
        className="absolute flex justify-center items-center w-12 h-12 rounded-full bg-white top-3 right-3 border-2 border-primary"
        onClick={() => setWish(!wish)}
      >
        {wish ? (
          <AiFillHeart size={30} className="text-primary" />
        ) : (
          <AiOutlineHeart size={30} className="text-primary" />
        )}
      </div>

      {/* Product content */}
      <img
        className="w-full object-fill object-center h-[190px]"
        src={props.url}
        alt={props.name}
      />
      {/* Product Name */}
      <h2 className="text-center pt-2 text-lg">{props.name}</h2>

      {/* Product Price */}
      <h1 className="pt-2 text-[#ff7215] text-center text-xl">{props.price}</h1>

      {/* Product Description */}
      <h3 className="p-2 text-[#838282] text-sm">{props.description}</h3>

      {/* Product Button */}
      <div className="p-4 grid grid-cols-2 place-items-center">
        <button className="w-[100px] h-10 bg-primary lg:hover:bg-primary/70 rounded-lg">
          Buy Now
        </button>
        <button className="w-[100px] h-10 bg-secondary lg:hover:bg-secondary/70 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
