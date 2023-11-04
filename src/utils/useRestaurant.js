import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../Config";
const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch({ FETCH_MENU_URL } + resId);

    const json = await data.json();
    console.log(json.data);
    setRestaurant(json);
  }
  return restaurant;
  //   return restaurant data
};
export default useRestaurant;
