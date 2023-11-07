import { useState } from "react";
import { Link } from "react-router-dom";

export const Title = () => (
  <h1 id="Title" key="h1">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkML6BRWil3kliTdFT-6LYBEeRsnkd_hmMNAowM3oalP-VbwLnT7vvG70rlP2_gcxbd0&usqp=CAU"
      className="h-28 p-2"
    />
  </h1>
);
const Header = () => {
  const [title, setTitle] = useState("Food Villa");
  const [isLoggedIn, setLoggedIn] = useState(true);
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
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
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
