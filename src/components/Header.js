import { useState } from "react";

export const Title = () => (
  <h1 id="Title" key="h1">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkML6BRWil3kliTdFT-6LYBEeRsnkd_hmMNAowM3oalP-VbwLnT7vvG70rlP2_gcxbd0&usqp=CAU"
      className="logo"
    />
  </h1>
);
const Header = () => {
  const [title, setTitle] = useState("Food Villa");

  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>
      <button
        onClick={() => {
          setTitle("New Name");
        }}
      >
        Change TItle
      </button>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
