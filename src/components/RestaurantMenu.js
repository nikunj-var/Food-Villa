import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./../Config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./ShimmerUI";
import RestaurantCategory from "./RestaurantCategories";
const Restaurantmenu = () => {
  const { resId } = useParams();
  const [restaurant, menuitem, categories] = useRestaurantMenu(resId);
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className=" text-center">
      <div className="text-center">
        <h1 className="font-bold text-2xl my-10 underline underline-offset-8 ">
          {" "}
          {restaurant?.name} (ID : {resId})
        </h1>
        <p className="font-bold text-lg">{restaurant?.cuisines?.join(",")}</p>
      </div>

      <div className="menu-container">
        {categories.map((category) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurantmenu;

{
  /* <ul>
{menuitem.map((item) => (
  <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
))}
</ul> */
}
