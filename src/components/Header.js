import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import MenuList from "../components/MenuList";



const Header = () => {
 
  return (
    <>
      <header className="header" data-aos="fade-down" data-aos-duration="500">
        <div className="header__container">
          <figure className="header__logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </figure>
          <nav className="header__menu">
          <MenuList></MenuList>
        </nav>
        </div>
        
        </header>
    </>
  );
};

export default Header;
