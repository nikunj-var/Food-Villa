import { IMG_CDN_URL } from "../Config";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex p-2 m-2 border-b-4 text-left justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 ">
              <span>{item.card.info.name}</span>
              <span> - ₹ {item.card.info.price / 100}</span>
            </div>
            <div>
              <p className=" text-xs text">{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-3/12">
            <div className=" absolute">
              <button className="p-2 bg-gray-200 shadow-2xl rounded-sm">Add +</button>
            </div>
            <img src={IMG_CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
