import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 md:px-10">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">QUIZZEZ</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
