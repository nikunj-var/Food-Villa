import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // Imp. try to subscrible only the thing that you need
  // always subscribe the small portion of the store
  // we only subscribe the cart items so that our cartItem will only modify when there is any change in this item portion but if we subscribe the whole store then it will update every time when there is any change occur in any slice of the store

  const cartItems = useSelector((store) => store.cart.items);

  //   OR You can do Same thing by this
  //   const store = useSelector((store) => store);
  //   const cartItems = store.cart.items;

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className=" text-center m-4 p-4 ">
      <div className=" m-auto w-6/12 shadow-xl">
        <button
          className="p-2 m-2 bg-gray-300 text-right rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>
            Your Cart is empty! <br></br>Please add some item here!
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
