import { ProductProps } from "../components";
import ProductCard from "../components/ProductCard";

const products: ProductProps[] = [
  {
    image:
      "https://www-konga-com-res.cloudinary.com/w_500,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/B/231472_1739441282.jpg",
    name: "Huawei Mate Xs",
    price: "₦6,289,100",
    oldPrice: "₦7,000,000",
    discount: "10%",
    timeLeft: "21days - 11hrs 58mins 53secs",
    soldPercentage: "67",
  },
  {
    image:
      "https://www-konga-com-res.cloudinary.com/w_500,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Q/T/230034_1714480765.jpg",
    name: "Starlink Flat High Performance",
    price: "₦3,939,999",
    oldPrice: "₦4,500,000",
    discount: "12%",
    timeLeft: "18days - 5hrs 34mins 12secs",
    soldPercentage: "25",
  },
  {
    image:
      "https://www-konga-com-res.cloudinary.com/w_500,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/A/C/174740_1703076394.jpg",
    name: "ITEC Microwave Oven",
    price: "₦70,000",
    oldPrice: "₦90,000",
    discount: "22%",
    timeLeft: "14days - 9hrs 45mins 30secs",
    soldPercentage: "19",
  },
  {
    image:
      "https://www-konga-com-res.cloudinary.com/w_500,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/O/N/174740_1691025899.png",
    name: "Zinox Kids Legacy Tab Pro",
    price: "₦74,580",
    oldPrice: "₦100,000",
    discount: "25%",
    timeLeft: "10days - 3hrs 20mins 45secs",
    soldPercentage: "100",
  },
  {
    image:
      "https://www-konga-com-res.cloudinary.com/w_500,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/T/174740_1690460287.jpg",
    name: "Zinox Zirra Tablet (ZNX-ITEM-003263)",
    price: "₦6,289,100",
    oldPrice: "₦7,000,000",
    discount: "10%",
    timeLeft: "21days - 11hrs 58mins 53secs",
    soldPercentage: "67",
  },
  {
    image:
      "https://www-konga-com-res.cloudinary.com/w_500,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/R/174740_1737123905.jpg",
    name: "iTEC Itec 18 Rechargeable Stand Fan (ZNX-ITEM-001046)",
    price: "₦3,939,999",
    oldPrice: "₦4,500,000",
    discount: "12%",
    timeLeft: "18days - 5hrs 34mins 12secs",
    soldPercentage: "25",
  },
  {
    image:
      "https://www-konga-com-res.cloudinary.com/w_500,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/Y/118566_1737038279.jpg",
    name: "AEON FAN 18 40W RECHARGEALE ARF-18B",
    price: "₦70,000",
    oldPrice: "₦90,000",
    discount: "22%",
    timeLeft: "14days - 9hrs 45mins 30secs",
    soldPercentage: "19",
  },
  {
    image:
      "https://www-konga-com-res.cloudinary.com/w_500,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/S/118566_1645779119.jpg",
    name: "Saisho HP-1B SAISHO ELECTR HOTPLATE-BLACK SINGLE",
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
