import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiX } from "react-icons/bi";
import { productData, responsive } from "./data";
import { useState, useEffect } from "react";
import "./style.css";

interface CustomArrowProps {
  onClick: () => void;
}

const CustomRightArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-4 border-primary bg-white/50 flex justify-center items-center w-14 h-14 lg:bg-white/30 lg:backdrop-blur-md rounded-full absolute top-1/2 -translate-y-[50%] right-0 lg:hover:bg-primary"
    >
      <FaChevronRight size={25} />
    </button>
  );
};

const CustomLeftArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-4 border-primary bg-white/50 flex justify-center items-center w-14 h-14 lg:bg-white/30 lg:backdrop-blur-md rounded-full absolute top-1/2 -translate-y-[50%] left-0 lg:hover:bg-primary"
    >
      <FaChevronLeft size={25} />
    </button>
  );
};

interface productCard {
  id: number;
  imageurl: string;
  name: string;
  price: string;
  description: string;
  detail: string;
}

const ProductContainer = () => {
  const [popupContent, setPopupContent] = useState<productCard[]>([]);
  const [popupToggle, setPopupToggle] = useState(false);

  useEffect(() => {
    if (popupToggle) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [popupToggle]);

  const changeContent = (card: productCard) => {
    setPopupContent([card]);
    setPopupToggle(!popupToggle);
  };

  return (
    <div className="w-full h-[100vh] p-2">
      <h1 className="p-10 pb-0 text-3xl">Most Sale Products</h1>

      {/* Slide */}
      <div className="flex justify-center items-center">
        <Carousel
          responsive={responsive}
          className="w-[98%] py-10 cursor-pointer ps-14 md:ps-5 sm:px-10"
          customRightArrow={<CustomRightArrow onClick={() => {}} />}
          customLeftArrow={<CustomLeftArrow onClick={() => {}} />}
          showDots={true}
          draggable={false}
        >
          {/* Products */}
          {productData.map((card) => {
            const [wish, setWish] = useState(false);

            return (
              <div className="w-[270px] transform transition duration-300 lg:hover:shadow-primary shadow-lg  lg:hover:-translate-y-2 border-2 border-primary rounded-3xl overflow-hidden relative">
                {/* Wish icon */}
                <div
                  className="absolute flex justify-center items-center w-12 h-12 rounded-full bg-white top-2 right-2 border-2 border-primary"
                  onClick={() => setWish(!wish)}
                >
                  {wish ? (
                    <AiFillHeart size={30} className="text-primary" />
                  ) : (
                    <AiOutlineHeart size={30} className="text-primary" />
                  )}
                </div>

                {/* Product content */}
                <div onClick={() => changeContent(card)}>
                  <img
                    className="w-full object-fill object-center h-[230px]"
                    src={card.imageurl}
                    alt={card.name}
                  />
                  {/* Product Name */}
                  <h2 className="text-center pt-2 text-lg">{card.name}</h2>

                  {/* Product Price */}
                  <h1 className="pt-2 text-[#ff7215] text-center text-xl">
                    {card.price}
                  </h1>

                  {/* Product Description */}
                  <h3 className="p-2 text-[#838282] text-sm pb-5">
                    {card.description}
                  </h3>
                </div>

                {/* Product Button */}
                <div className="p-4 pt-0 grid grid-cols-2 place-items-center">
                  <button className="w-[100px] h-10 bg-primary lg:hover:bg-primary/70 rounded-lg">
                    Buy Now
                  </button>
                  <button className="w-[100px] h-10 bg-secondary lg:hover:bg-secondary/70 rounded-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      {/* PopUp*/}
      {popupToggle && (
        <div
          className="fixed bg-black/30 inset-0 justify-center items-end pb-10 backdrop-blur-sm flex"
          onClick={() => setPopupToggle(false)}
        >
          {popupContent.map((popup) => {
            return (
              <>
                <div
                  className="w-[1020px] h-[500px] bg-white text-3xl py-4"
                  onClick={(e) => e.stopPropagation()}
                  key={popup.id}
                >
                  <div className="w-full h-full flex">
                    <div className="w-[40%] h-full flex justify-center">
                      <img
                        src={popup.imageurl}
                        alt={popup.name}
                        className="w-60 h-60  object-center"
                      />
                    </div>
                    <div className="h-full w-[60%] pr-4">
                      <div className="flex justify-between items-center">
                        <div className="text-center font-bold">
                          {popup.name}
                        </div>
                        <BiX
                          onClick={changeContent}
                          className="w-10 h-10 rounded-full border-2 border-primary cursor-pointer"
                        />
                      </div>
                      <div className="text-xl p-10 pl-0 pr-5">
                        {popup.detail}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductContainer;
