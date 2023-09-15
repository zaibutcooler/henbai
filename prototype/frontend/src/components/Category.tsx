import { useState, useRef, useEffect } from "react";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

function Category() {
  const [isOpen, setIsOpen] = useState(false);
  const itemsRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        itemsRef.current &&
        !itemsRef.current.contains(event.target as Node) &&
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <li className="relative xl:pe-4">
      <div
        className="cursor-pointer "
        ref={categoryRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p
          className={
            isOpen
              ? "text-primary flex p-2 items-center hover:text-primary"
              : "text-black flex p-2 items-center hover:text-primary"
          }
        >
          Category
          {isOpen ? <BiCaretDown /> : <BiCaretUp />}
        </p>
        {isOpen && (
          <div
            ref={itemsRef}
            className="absolute top-10 left-0 bg-white rounded-xl"
          >
            <h3 className="font-bold p-4 hover:bg-secondary text-sm rounded-lg place-items-center">
              Electric
            </h3>
            <h3 className="font-bold p-4 hover:bg-secondary text-sm rounded-lg place-items-center">
              Sneakers
            </h3>
            <h3 className="font-bold p-4 hover:bg-secondary text-sm rounded-lg place-items-center">
              Toys
            </h3>
            <h3 className="font-bold p-4 hover:bg-secondary text-sm rounded-lg place-items-center">
              Pharmacy
            </h3>
            <h3 className="font-bold p-4 hover:bg-secondary text-sm rounded-lg place-items-center">
              Books
            </h3>
            <h3 className="font-bold p-4 hover:bg-secondary text-sm rounded-lg place-items-center">
              Furniture
            </h3>
          </div>
        )}
      </div>
    </li>
  );
}

export default Category;
