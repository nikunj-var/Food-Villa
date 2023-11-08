import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./../Config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./ShimmerUI";
const Restaurantmenu = () => {
  const { resId } = useParams();
  const [restaurant, menuitem] = useRestaurantMenu(resId);
  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="text-center">
        <h1 className="font-bold text-2xl my-10">
          {" "}
          {restaurant?.name} (ID : {resId})
        </h1>
        <p className="font-bold text-lg">{restaurant?.cuisines?.join(",")}</p>
        {categories.map(() => {})}
      </div>
      
      <div className="menu-container">
        <h1>Menu</h1>
        <ul>
          {menuitem.map((item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Restaurantmenu;
