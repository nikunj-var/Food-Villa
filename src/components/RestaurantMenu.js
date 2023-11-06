import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./../Config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./ShimmerUI";
const Restaurantmenu = () => {
  const { resId } = useParams();
  const res = useRestaurantMenu(resId);
  return !res ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <h1>Restaurant id : {resId}</h1>
        <h2>Data is {res?.name}</h2>
        <img src={IMG_CDN_URL + res.cloudinaryImageId} />
        <h4>{res.city}</h4>
        <h4>{res.costForTwo}</h4>
      </div>
      {/* <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(
            res.data?.cards[0]?.card?.card?.info?.menu?.items
          )?.map((item) => (
            <li key={item?.id}>{item?.name}</li>
          ))}
        </ul>
      </div> */}
    </>
  );
};

export default Restaurantmenu;
