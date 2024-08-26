import React from "react";
import { Link } from "react-router-dom";
import NavMobile from "./NavMobile";
import Login from "./Auth";

const Header = () => {
  return (
    <div>
      <div className="border-b border-orange-500 py-4">
        <div className="container mx-auto px-2.5 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-orange-500 tracking-widest "
          >
            MernEats.com
          </Link>
          <div className="font-semibold hidden md:block">
            <Login />
          </div>
          <NavMobile />
        </div>
      </div>
    </div>
  );
};

export default Header;
