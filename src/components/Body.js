import { useState, useEffect } from "react";
import { restaurantList } from "../Config";
import RestaurantCard from "./RestaurantCard";

// const Body = () => {
//   return (
//     <div className="restaurant-list">
//       <RestaurantCard restaurant={restaurantList[0]} /> {/*passing props */}
//       <RestaurantCard restaurant={restaurantList[1]} />
//       <RestaurantCard restaurant={restaurantList[2]} />
//       <RestaurantCard restaurant={restaurantList[3]} />
//       <RestaurantCard restaurant={restaurantList[4]} />
//       <RestaurantCard restaurant={restaurantList[0]} /> {/*passing props */}
//       <RestaurantCard restaurant={restaurantList[1]} />
//       <RestaurantCard restaurant={restaurantList[2]} />
//       <RestaurantCard restaurant={restaurantList[3]} />
//       <RestaurantCard restaurant={restaurantList[4]} />
//     </div>
//   );
// };

const Body = () => {
  // React Variable-every component maintains a state and we all store the state in a variable using useState hook.
  //inputValue is a local state variable
  // e.target.value - whatever we write in input
  // one Way data binding
  // useState hook returns a array of variable and function to update this variable

  const [inputValue, setInputValue] = useState("");
  const [searchClicked, setSearchClicked] = useState("false");
  const [restaurants, setRestaurants] = useState(restaurantList);

  const filterData = (inputValue, restaurants) => {
    const filterdata = restaurants.filter((restaurant) => {
      restaurant.info.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    return filterdata;
  };

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.91378&lng=78.080016&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    setRestaurants(
      res.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  return restaurants.length === 0 ? (
    <h1>Not present</h1>
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(inputValue, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant?.info?.id} />
          );
        })}
      </div>
    </>
  );
  {
    /* we can also use map function */
  }
};
export default Body;
