import classes from "./index.module.css";
import { useState } from "react";
import images from "../../assets/images";
import Navigation from "./Navigation";

function Header(props) {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const toggleHamburger = () => {
    setHamburgerActive(!hamburgerActive);
  };
  const handleButtonClick = () => {
    props.onButtonClick();
  };

  return (
    <div>
      <div className={classes.header}>
        <div className={classes.headerWrapper}>
          <div className={classes.headerWrapper__logo}>
          <img
              src={images.logo}
              alt="logo"
              className={classes.headerWrapper__logo__img}
            />
          </div>
          <Navigation handleButtonClick={handleButtonClick} />
          <div
            className={`${classes.headerWrapper__hamburger} ${
              hamburgerActive ? classes.active : ""
            }`}
            onClick={toggleHamburger}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      
      <div
        
        className={`${classes.header__mobileMenu} ${
          hamburgerActive ? classes.active : ""
        }`}
      >
        <ul>
          <li>
            <a href="#">Početna</a>
          </li>
          <li>
            <a href="#">PRODUCT</a>
          </li>
          <li>
            <a href="#">PROMO</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
      
    </div>
    
  );
}

export default Header;
