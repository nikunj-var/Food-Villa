import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./../Config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./ShimmerUI";
import RestaurantCategory from "./RestaurantCategories";

const Restaurantmenu = () => {
  const { resId } = useParams();
  const [restaurant, menuitem, categories] = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  const dummy = "hello i am dummy";
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
        {categories.map((category, index) => (
          // controlled component
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showitems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            dummy={dummy}
            // to show only first item
            // showitems={index === 0 && true}
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

// lecture11

// lifting the state in react up
// controlled and uncontrolled component
// problem of passing props
// react context
// first way to use context is to use hooks - createContext,useContext
// second way to use context is to use components - <userContext.Consumer></userContext.Consumer>
//  <userContext.Producer>

// lecture 12

// Redux - It works on data layeer.
// It is not mandatory.
// It is use in very huge applications.
// It makes application to debug easily.

// Difference between Redux and React?
// Read Zustand do samething as Redux.

// redux toolkit
// Redux store is a js object with a lot of data inside it and it is kept in a global central place.
// Redux toolkit solve three main problems of vanilla redux.
// must read redux documentation.
// redux store is divided into multiple slices.
// logical partition are known as slices.
