import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { withPromotedLabel } from "./RestaurantCard";
import useRestaurant from "../utils/useRestaurant";

const Body = () => {
  const [filterdData, setFilteredData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const isOnline = useOnline();
  const restaurants = useRestaurant();
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    setFilteredData(restaurants);
  }, [restaurants]);

  if (!isOnline) {
    return <h1>Please, check your internet connection</h1>;
  }

  return restaurants.length === 0 ? (
    <>
      <Shimmer />
    </>
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder=" Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="p-1 my-5 border rounded w-11/12 ml-5"
        />

        <button
          className="p-1 inline bg-gray-200 rounded ml-5"
          onClick={() => {
            const data = filterData(inputValue, restaurants);
            setFilteredData(data);
            setInputValue("");
          }}
        >
          Search
        </button>
      </div>
      <div className=" flex flex-wrap justify-between  ">
        {/* You have to write logic for no restaurant here */}
        {filterdData.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant?.info?.id}
            >
              {
                /*if the restaurant is promoted then add a promoted label to it*/
                restaurant.info.isOpen ? (
                  <RestaurantCardPromoted {...restaurant.info} />
                ) : (
                  <RestaurantCard {...restaurant.info} />
                )
              }
            </Link>
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

// React Variable-every component maintains a state and we all store the state in a variable using useState hook.
//inputValue is a local state variable
// e.target.value - whatever we write in input
// one Way data binding
// useState hook returns a array of variable and function to update this variable
// dont create component inside component
