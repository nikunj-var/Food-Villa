import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../Config";

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  // get data from api
  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);

    const json = await data.json();
    setRestaurant(json.data?.cards[0]?.card?.card?.info);
  }
  //   return restaurant data
  return restaurant;
};
export default useRestaurantMenu;
