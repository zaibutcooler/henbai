import HomeImg from "./../../assets/Images/HomeImg.png";
import Navbar from "../../components/Navbar";
import { MdOutlineHighQuality } from "react-icons/md";
import { GiLaurels } from "react-icons/gi";
import ProductContainer from "../../components/home/products/ProductContainer";
import GenreCards from "../../components/home/genrecards/GenreCards";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="w-auto h-auto md:bg-gradient-to-l md:from-primary md:to-bgColor xl:hover:bg-gradient-to-r xl:hover:from-primary xl:hover:to-bgColor">
        <div className=" w-full md:flex h-full  lg:pt-20">
          {/* Home Content */}
          <div className=" top-0 left-0   w-full h-full lg:w-1/2 pt-12">
            {/* Headline */}
            <div className="p-10 pt-14 pl-4 md:pl-10 lg:pt-0">
              <h1 className="font-semibold text-6xl leading-tight lg:leading-none lg:text-4xl md:text-center">
                Discover Anything You Need
              </h1>
            </div>
            {/* Introduction */}
            <div className="p-4 pt-0">
              <h1 className="text-2xl font-bold md:text-center md:text-2xl">
                Welcome to E-COM, your one-stop destination for all your
                shopping needs. Explore a vast selection of products, enjoy
                seamless shopping, and experience exceptional customer service
              </h1>
            </div>

            {/* ဘာညာမဆလာ အက်လယ် */}
            <div className="flex items-center xl:p-10 justify-around md:pt-20 lg:pt-0">
              <div className="p-4 pt-10 md:pt-0">
                <div className="w-[100px] bg-white h-[100px] border-4 border-black mx-auto flex justify-center items-center transform transition duration-300 xl:hover:rotate-[360deg] xl:hover:bg-primary">
                  <MdOutlineHighQuality className="text-7xl" />
                </div>

                <p className="pt-4 text-xl text-center font-bold">
                  Quality Products
                </p>
              </div>

              <div className="p-4 pt-10 md:pt-0">
                <div className="w-[100px] bg-white h-[100px] border-4 border-black mx-auto flex justify-center items-center transform transition duration-300 xl:hover:rotate-[360deg] xl:hover:bg-primary">
                  <GiLaurels className="text-6xl" />
                </div>

                <p className="pt-4 text-xl text-center font-bold">
                  Outstanding Services
                </p>
              </div>
            </div>
          </div>

          {/* Home Img */}
          <div className="w-1/2  p-10 hidden lg:flex lg:justify-center lg:items-start lg:pt-0">
            <img
              src={HomeImg}
              className="w-auto h-auto object-cover object-center"
            />
          </div>
        </div>
      </div>
      <GenreCards />
      <ProductContainer />
    </div>
  );
};

export default HomePage;
