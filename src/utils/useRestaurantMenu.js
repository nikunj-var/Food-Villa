import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../Config";

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState([]);
  const [menuitem, setMenuItem] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  // get data from api
  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);

    const res = await data.json();
    setRestaurant(res.data?.cards[0]?.card?.card?.info);
    const obj =
      res.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card;

    const menuData =
      "itemCards" in obj
        ? res.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
            ?.card.itemCards
        : res.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
            ?.card.itemCards;
    setMenuItem(menuData);

    const categories =
      res.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => {
          return (
            c.card?.["card"]?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
        }
      );

    setCategories(categories);
  }
  //   return restaurant data
  return [restaurant, menuitem, categories];
};
export default useRestaurantMenu;
