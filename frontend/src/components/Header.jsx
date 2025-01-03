import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaCartArrowDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

export default function Header({ selectTab = 0 }) {
  const [selected, setSelected] = useState(selectTab);

  const navItems = [
    {
      itemName: "Home",
      path: "/",
    },
    {
      itemName: "About",
      path: "/about",
    },
    {
      itemName: "Pages",
      path: "/pages",
    },
    {
      itemName: "pages",
      path: "/pages",
    },
    {
      itemName: "News",
      path: "/news",
    },
    {
      itemName: "Contact",
      path: "/contact",
    },
    {
      itemName: "Shop",
      path: "/shop",
    },
  ];
  return (
    <nav className="  bg-black/10 w-full p-2 fixed z-50  ">
      <div className=" max-w-7xl m-auto flex items-center justify-between py-5 ">
        {/* logo */}
        <div className="">
          <Link to={"/"}>
            <img src={logo} alt="logo-png" className=" w-28 h-10 " />
          </Link>
        </div>
        {/* Nav items */}
        <div className="">
          <ul className=" flex items-center gap-4 ">
            {navItems.map((item, index) => (
              <Link to={item.path} key={index}>
                <li
                  onClick={() => setSelected(selectTab)}
                  className={`text-base font-semibold ${
                    selected === index ? "text-orange-500" : "text-white"
                  }`}
                >
                  {item.itemName}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        {/* search icons */}
        <div className="">
          <div className=" flex items-center justify-center gap-5">
            <FaCartArrowDown />
            <CiSearch />
          </div>
        </div>
      </div>
    </nav>
  );
}
