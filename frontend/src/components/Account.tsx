import { useRef, useState, useEffect } from "react";
import { BiUser } from "react-icons/bi";

function Account() {
  const [isOpen, setisOpen] = useState(false);
  const itemsRef = useRef<HTMLDivElement>(null);
  const accountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        itemsRef.current &&
        !itemsRef.current.contains(event.target as Node) &&
        accountRef.current &&
        !accountRef.current.contains(event.target as Node)
      ) {
        setisOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative xl:me-12 place-items-center">
      <div
        onClick={() => setisOpen(!isOpen)}
        ref={accountRef}
        className={
          isOpen
            ? "flex items-center lg:hover:text-primary text-primary ps-4 pe-4 lg:pe-4 cursor-pointer"
            : "flex items-center lg:hover:text-primary text-black ps-4 pe-4 lg:pe-4 cursor-pointer"
        }
      >
        <BiUser size={25} />
        <h2 className="px-1 hidden sm:block">Account</h2>
      </div>
      {isOpen && (
        <div
          ref={itemsRef}
          className="absolute top-6 left-[-20px] sm:left-3 bg-white rounded-xl"
        >
          <div className="p-3 place-items-center">
            <h2 className="p-2 bg-primary  rounded-lg xl:hover:bg-primary/50 cursor-pointer">
              Register
            </h2>
          </div>
          <div className=" p-3 pt-0 place-items-center">
            <h2 className="p-2 bg-secondary text-center xl:hover:bg-primary/50 rounded-lg cursor-pointer">
              Sign In
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Account;
