const Cardscomponents = () => {
  return (
    <div className="relative w-[180px] h-[230px] sm:w-[230px] lg:w-[180px]  rounded-3xl overflow-hidden">
      <img
        src="https://i.pinimg.com/564x/ed/ce/ab/edceabf57a235f4abd8f75ebfb14690c.jpg"
        className="w-full h-full object-cover object-center transform transition lg:hover:scale-[1.3]"
      />
      <div className="absolute top-0 left-0 w-full h-[30px] pt-4">
        <p className="text-white text-center bg-primary/30 backdrop-blur-sm">
          Sneakers
        </p>
      </div>
    </div>
  );
};

export default Cardscomponents;
