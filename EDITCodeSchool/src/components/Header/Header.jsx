import classes from "./index.module.css";
import { useState } from "react";

import Navigation from "./Navigation";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import MobileMenu from "./MobileMenu";

function Header(props) {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  
  const handleButtonClick = () => {
    props.onButtonClick();
  };

  return (
    <div>
      <div className={classes.header}>
        <div className={classes.headerWrapper}>
          <Logo/>
          <Navigation handleButtonClick={handleButtonClick} />
          <Hamburger hamburgerActive={hamburgerActive} setHamburgerActive={setHamburgerActive} />
        </div>
      </div>
      <MobileMenu hamburgerActive={hamburgerActive} />
    </div>
    
  );
}

export default Header;
