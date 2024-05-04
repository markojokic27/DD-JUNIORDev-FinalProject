import classes from "./index.module.css";
import {useState } from "react";

import Navigation from "./Navigation/Navigation";
import Logo from "./Logo";
import Hamburger from "./MobileMenu/Hamburger";
import MobileMenu from "./MobileMenu/MobileMenu";

function Header() {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const setDarkMode = () => {
     document.querySelector('body').setAttribute('data-theme', 'dark');
     localStorage.setItem('theme', 'dark');

  }
  const setLightMode = () => {
      document.querySelector('body').setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
  }
  const theme = localStorage.getItem('theme')
  if(theme === 'dark'){
      setDarkMode()
  }
  
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode()
    } else {
      setLightMode()
    }
  };
  return (
    <div>
      <div className={classes.header}>
        <div className={classes.header__wrapper}>
          <Logo />
          <Navigation
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <Hamburger
            hamburgerActive={hamburgerActive}
            setHamburgerActive={setHamburgerActive}
          />
        </div>
      </div>
      <MobileMenu
        hamburgerActive={hamburgerActive}
        setHamburgerActive={setHamburgerActive}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </div>
  );
}

export default Header;
