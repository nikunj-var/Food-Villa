import { useState } from "react";
import ItemList from "./ItemList";

// controlled component
const RestaurantCategory = ({ data, showitems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <>
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className=" font-bold ">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showitems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </>
  );
};
export default RestaurantCategory;
