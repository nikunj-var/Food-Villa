import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./../Config";
const Restaurantmenu = () => {
  const { resId } = useParams();
  
  
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
