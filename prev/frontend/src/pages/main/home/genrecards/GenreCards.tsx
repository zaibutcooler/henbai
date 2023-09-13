import Cardscomponents from "./Cardscomponents";

function GenreCards() {
  return (
    <div className="p-2 pt-10 sm:p-10">
      <div className="text-3xl pb-10">Our Top Sales Categories</div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 place-items-center gap-y-6">
        <Cardscomponents />
        <Cardscomponents />
        <Cardscomponents />
        <Cardscomponents />
        <Cardscomponents />
        <Cardscomponents />
      </div>
    </div>
  );
}

export default GenreCards;
