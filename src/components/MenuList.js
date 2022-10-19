import React from "react";
import { Link } from "react-router-dom";

const MenuList = () => {
  return (
    <>
      <ul className="list" >
        <li className="list__li">
          <Link className="list__link" to="/">
            HOME
          </Link>
        </li>
        <li className="list__li">
          <Link className="list__link" to="/tours">
            TOURS
          </Link>
        </li>
        <li className="list__li">
          <Link className="list__link" to="/mostwanted">
           MOST WANTED
          </Link>
        </li>
        <li className="list__li">
          <Link className="list__link" to="/aboutus">
            ABOUT US
          </Link>
        </li>
        <li className="list__li">
          <Link className="list__link" to="/contactus">
            CONTACT US
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MenuList;
