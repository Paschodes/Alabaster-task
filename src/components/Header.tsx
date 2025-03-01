import { IoSearch } from "react-icons/io5";
import konga from "../assets/kongaImg.png";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  return (
    <header className="bg-pink-600 text-white pt-4">
      <div className="flex flex-col w-[100%] md:flex-row justify-between items-center mb-2 px-4">
        <div className="flex items-center w-[25%] justify-between space-x-4 ">
          <div className="text-xl font-bold">
            <img src={konga} alt="konga" className="w-[120px] h-[40px]" />
          </div>
          <a href="#" className="text-sm">
            Store Locator
          </a>
          <a href="#" className="text-sm">
            Sell on Konga
          </a>
        </div>
        <div className="flex items-center bg-yellow-400 rounded-md w-[50%]">
          <input
            type="text"
            placeholder="Search for products, brands and categories"
            className="px-4 py-2 rounded-l-md text-black w-full  bg-white"
          />
          <button className="bg-yellow-400 px-4 py-2 rounded-md">
            <IoSearch />
          </button>
        </div>
        <div className="flex items-center space-x-4 w-[20%] justify-between">
          <a href="#" className="text-sm">
            Help
          </a>
          <a href="#" className="text-sm">
            Login / Signup
          </a>
          <button className="flex gap-2 relative bg-green-400 p-2 rounded-md">
            <span>🛒</span>
            <p>My Cart</p>
            <p className="bg-white text-black">0</p>
          </button>
        </div>
      </div>

      <nav className="flex flex-wrap justify-between space-x-4 bg-pink-900 border-t border-white p-4">
        <a href="#" className="text-sm flex gap-2 items-center">
          All Categories <GiHamburgerMenu />
        </a>
        <a href="#" className="text-sm">
          Computers and Accessories
        </a>
        <a href="#" className="text-sm">
          Phones and Tablets
        </a>
        <a href="#" className="text-sm">
          Electronics
        </a>
        <a href="#" className="text-sm">
          Konga Fashion
        </a>
        <a href="#" className="text-sm">
          Home and Kitchen
        </a>
        <a href="#" className="text-sm">
          Baby, Kids and Toys
        </a>
        <a href="#" className="text-sm">
          Beauty, Health and Personal Care
        </a>
      </nav>
    </header>
  );
};
export default Header;
