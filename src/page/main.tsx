import { ProductProps } from "../components";
import ProductCard from "../components/ProductCard";

const products: ProductProps[] = [
  {
    name: "Huawei Mate Xs",
    price: "₦6,289,100",
    oldPrice: "₦7,000,000",
    discount: "10%",
    timeLeft: "21days - 11hrs 58mins 53secs",
    soldPercentage: "67",
  },
  {
    name: "Starlink Flat High Performance",
    price: "₦3,939,999",
    oldPrice: "₦4,500,000",
    discount: "12%",
    timeLeft: "18days - 5hrs 34mins 12secs",
    soldPercentage: "25",
  },
  {
    name: "ITEC Microwave Oven",
    price: "₦70,000",
    oldPrice: "₦90,000",
    discount: "22%",
    timeLeft: "14days - 9hrs 45mins 30secs",
    soldPercentage: "19",
  },
  {
    name: "Zinox Kids Legacy Tab Pro",
    price: "₦74,580",
    oldPrice: "₦100,000",
    discount: "25%",
    timeLeft: "10days - 3hrs 20mins 45secs",
    soldPercentage: "100",
  },
  {
    name: "Huawei Mate Xs",
    price: "₦6,289,100",
    oldPrice: "₦7,000,000",
    discount: "10%",
    timeLeft: "21days - 11hrs 58mins 53secs",
    soldPercentage: "67",
  },
  {
    name: "Starlink Flat High Performance",
    price: "₦3,939,999",
    oldPrice: "₦4,500,000",
    discount: "12%",
    timeLeft: "18days - 5hrs 34mins 12secs",
    soldPercentage: "25",
  },
  {
    name: "ITEC Microwave Oven",
    price: "₦70,000",
    oldPrice: "₦90,000",
    discount: "22%",
    timeLeft: "14days - 9hrs 45mins 30secs",
    soldPercentage: "19",
  },
  {
    name: "Zinox Kids Legacy Tab Pro",
    price: "₦74,580",
    oldPrice: "₦100,000",
    discount: "25%",
    timeLeft: "10days - 3hrs 20mins 45secs",
    soldPercentage: "100",
  },
];

const Main = () => {
  return (
    <main className="p-4 bg-gray-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </main>
  );
};
export default Main;
