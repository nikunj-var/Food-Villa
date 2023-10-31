import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./../Config";
const Restaurantmenu = () => {
  const { resId } = useParams();
  const [res, setres] = useState([]);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.913562&lng=78.080701&restaurantId=" +
        resId
    );
    console.log("data is ", data);
    const json = await data.json();
    console.log(json.data);
    setres(json);
  }
  return (
    <>
      <div>
        <h1>Restaurant id : {resId}</h1>
        <h2>Data is {res.data?.cards[0]?.card?.card?.info?.name}</h2>
        <img
          src={
            IMG_CDN_URL +
            res.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h4>{res.data?.cards[0]?.card?.card?.info?.city}</h4>
        <h4>{res.data?.cards[0]?.card?.card?.info?.costForTwo}</h4>
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
