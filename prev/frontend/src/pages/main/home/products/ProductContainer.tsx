import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Products from "./Products";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { productData, responsive } from "./data";

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-4 border-primary bg-white/50 flex justify-center items-center w-14 h-14 lg:bg-white/30 lg:backdrop-blur-md rounded-full absolute top-1/2 -translate-y-[50%] right-0 lg:hover:bg-primary"
    >
      <FaChevronRight size={25} />
    </button>
  );
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-4 border-primary bg-white/50 flex justify-center items-center w-14 h-14 lg:bg-white/30 lg:backdrop-blur-md rounded-full absolute top-1/2 -translate-y-[50%] left-0 lg:hover:bg-primary"
    >
      <FaChevronLeft size={25} />
    </button>
  );
};

const product = productData.map((item) => (
  <Products
    name={item.name}
    url={item.imageurl}
    price={item.price}
    description={item.description}
  />
));

const ProductContainer = () => {
  return (
    <div className="w-full h-[100vh] p-2">
      <h1 className="p-10 pb-0 text-3xl">Most Sale Products</h1>

      {/* Slide */}
      <Carousel
        responsive={responsive}
        className="py-10 cursor-pointer ps-14  sm:px-10"
        customRightArrow={<CustomRightArrow onClick={undefined} />}
        customLeftArrow={<CustomLeftArrow onClick={undefined} />}
        showDots={true}
      >
        {product}
      </Carousel>
    </div>
  );
};

export default ProductContainer;
