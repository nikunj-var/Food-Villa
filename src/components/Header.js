import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_IMG_URL } from "../Config";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

export const Title = () => (
  <h1 id="Title" key="h1">
    <img src={LOGO_IMG_URL} className="h-28 p-2" />
  </h1>
);
const Header = () => {
  const [title, setTitle] = useState("Food Villa");
  const [isLoggedIn, setLoggedIn] = useState(true);
  const { loggedInUser, contact } = useContext(userContext);

  // console.log("contact = ", contact);
  // console.log("loggesIn", loggedInUser);

  // Subscribing to the store using selector
  // selector specifies what portion of our code we need to read

  const cartItems = useSelector((store) => store.cart.items);
  console.log("Items = ", cartItems);
  return (
    <div className="flex justify-between shadow-lg">
      <Title />

      <div>
        <ul className="flex py-10">
          <li className="px-2">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2">
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2 font-bold text-xl">
            <Link to="/cart">
              Cart ({cartItems.length === 0 ? 0 : cartItems.length} items)
            </Link>
          </li>
          <li className="px-2">{loggedInUser}</li>
          <li className="px-2">{contact}</li>
        </ul>
      </div>
      {
        // you cannot do this
        // a=10
        // console.log(10)
        // but you can do this
        // ((a = 10), console.log(a))
        // differece betweem js expression and statements
        // jsx curly braces?
        //we write js expressions not statements
      }
      {isLoggedIn ? (
        <button onClick={() => setLoggedIn(false)}>Login</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Logout</button>
      )}
    </div>
  );
};
export default Header;
