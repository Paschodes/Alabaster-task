import { LuClock8 } from "react-icons/lu";
import { ProductProps } from ".";

const ProductCard: React.FC<ProductProps> = ({
  name,
  price,
  oldPrice,
  discount,
  timeLeft,
  soldPercentage,
}) => {
  return (
    <div className=" p-4 rounded-sm bg-white">
      <div className="h-40 bg-gray-200 mb-2"></div>
      <h3 className="font-bold">{name}</h3>
      <div className="flex items-center space-x-2 justify-between m-2 mb-10">
        <span className="font-bold">{price}</span>
        <span className="line-through text-gray-500">{oldPrice}</span>
        <span className=" text-red-500 bg-red-100 rounded-md p-1">
          - {discount}
        </span>
      </div>
      <div className="flex items-center font-bold text-sm mt-1">
        <span>
          <LuClock8 />
        </span>
        <span>{timeLeft}</span>
      </div>
      <div className="mt-2 flex justify-between">
        <div className="font-bold">
          <span>Sold:</span>
          <span className="ml-1 font-bold">{soldPercentage}%</span>
        </div>
        <div className="w-48 bg-gray-200 h-4 rounded-full mt-1">
          <div
            className="bg-green-600 h-4 rounded-full"
            style={{ width: `${soldPercentage}%` }}
          ></div>
        </div>
      </div>
      <button className=" border border-pink-600 text-pink-600 px-4 py-2 rounded-md mt-2 w-full">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
