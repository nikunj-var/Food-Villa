// const heading = React.createElement("h1", {}, "Namaste");
// const heading2 = React.createElement("h2", {}, "Heading2");
// const container = React.createElement("div", {}, [heading, heading2]);
// const root = ReactDOM.createRoot(document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./index.css";

// default import
import Header from "./components/Header";
// named import
import { Title } from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/ErrorPage";
import Restaurantmenu from "./components/RestaurantMenu";
// config file
// const config = [
//   {
//     type: "card",
//     cards: [{ offerName: "50% off" }, { offerName: "No delivery charge" }],
//   },
//   {
//     type: "restaurant",
//     cards: [
//       {
//         name: "Burger King",
//         image:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjtKUF3_2ibmXu5fslwVWkF9K7dXzdKu8YA&usqp=CAU",
//         cusines: ["Burger", "American"],
//         rating: "4.2",
//       },
//       {
//         name: "Burger King",
//         image:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjtKUF3_2ibmXu5fslwVWkF9K7dXzdKu8YA&usqp=CAU",
//         cusines: ["Burger", "American"],
//         rating: "4.2",
//       },
//       {
//         name: "Burger King",
//         image:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjtKUF3_2ibmXu5fslwVWkF9K7dXzdKu8YA&usqp=CAU",
//         cusines: ["Burger", "American"],
//         rating: "4.2",
//       },
//       {
//         name: "Burger King",
//         image:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjtKUF3_2ibmXu5fslwVWkF9K7dXzdKu8YA&usqp=CAU",
//         cusines: ["Burger", "American"],
//         rating: "4.2",
//       },
//     ],
//   },
// ];

// const BurgerKing = [
//   {
//     name: "Burger King",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjtKUF3_2ibmXu5fslwVWkF9K7dXzdKu8YA&usqp=CAU",
//     cusines: ["Burger", "American"],
//     rating: "4.2",
//   },
//   {
//     name: "Burger King",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjtKUF3_2ibmXu5fslwVWkF9K7dXzdKu8YA&usqp=CAU",
//     cusines: ["Burger", "American"],
//     rating: "4.2",
//   },
//   {
//     name: "Burger King",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjtKUF3_2ibmXu5fslwVWkF9K7dXzdKu8YA&usqp=CAU",
//     cusines: ["Burger", "American"],
//     rating: "4.2",
//   },
//   {
//     name: "Burger King",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjtKUF3_2ibmXu5fslwVWkF9K7dXzdKu8YA&usqp=CAU",
//     cusines: ["Burger", "American"],
//     rating: "4.2",
//   },
// ];

const AppLayout = () => {
  return (
    //fragment in react
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <Restaurantmenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
