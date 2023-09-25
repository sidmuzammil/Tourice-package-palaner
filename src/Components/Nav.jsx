import React, { useState } from "react";
import "./Nav.css"
import { MenuItems } from "./Menuitems";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [manuBar,setMenuBar]=useState(true)


  const handleChange=()=>{
    setMenuBar(!manuBar)
  }
  return (
    <nav className="NavbarItems">
      <h1 className="Navbar-Logo">Tourice</h1>
      <div className="menu-icon" onClick={handleChange}>
         <i className={manuBar ? "fa-solid fa-bars" : "fa-solid fa-x"}></i>
      </div>
      <ul className={manuBar ? "nav-menu" : "nav-menu active "}>
        {MenuItems.map((items, index) => {
          return (
            <li key={index}>
              <Link to={items.url} className={items.cName}>
                <li className={items.icon}></li>
                {items.title}
              </Link>
            </li>
          );
        })}
        <button>Sign In</button>
      </ul>
    </nav>
  );
};
