import { IMG_CDN_URL } from "../Config";

// METHOD 1

//using props
// const RestaurantCard = (props) => {
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
//           props.restaurant.data?.cloudinaryImageId
//         }
//       />
//       <h2>{props.restaurant.data?.name}</h2>
//       <h3>{props.restaurant.data?.cuisines.join(" , ")}</h3>
//       <h4>{props.restaurant.data?.lastMileTravelString} minutes</h4>
//     </div>
//   );
// };

// METHOD 2

//using destructuring
// const RestaurantCard = ({restaurant}) => {
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
//           restaurant.data?.cloudinaryImageId
//         }
//       />
//       <h2>{restaurant.data?.name}</h2>
//       <h3>{restaurant.data?.cuisines.join(" , ")}</h3>
//       <h4>{restaurant.data?.lastMileTravelString} minutes</h4>
//     </div>
//   );
// };

// METHOD 3

//advanced versiom of destructuring
// const RestaurantCard = ({ restaurant }) => {
//   const { name, cuisines, cloudinaryImageId, lastMileTravelString } =
//     restaurant.data;
//   return (
//     <div className="card">
//       <img
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
//           cloudinaryImageId
//         }
//       />
//       <h2>{name}</h2>
//       <h3>{cuisines.join(" , ")}</h3>
//       <h4>{lastMileTravelString} minutes</h4>
//     </div>
//   );
// };

// METHOD 4

// other method of destructuring pass directly the attributes
{
  /* <RestaurantCard name={restaurantList[0].data.name} />; */
}

// const RestaurantCard = ({ name }) => {
//   return (
//     <div className="card">
//       <h2>{name}</h2>
//     </div>
//   );
// };

// METHOD 5

//Instead of giving attribute individually like name, image etc, we can directly use spread operator.
{
  /* <RestaurantCard name={...restaurantList[0].data} />; */
}

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  totalRatingsString,
}) => {
  return (
    <div className="card text-ellipsis w-[350px] p-2 m-2 shadow-lg bg-white">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className=" font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4 className=" overflow-auto">{totalRatingsString} stars</h4>
    </div>
  );
};

// Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-200 text-black m-2 p-2 rounded-md shadow-black">Open Now</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
