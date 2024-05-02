import classes from "./index.module.css";
import { useEffect, useState } from "react";

import Navigation from "./Navigation/Navigation";
import Logo from "./Logo";
import Hamburger from "./MobileMenu/Hamburger";
import MobileMenu from "./MobileMenu/MobileMenu";

function Header(props) {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const handleButtonClick = () => {
    props.onButtonClick();
  };

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme); 
  };

  return (
    <div>
      <div className={classes.header}>
        <div className={classes.header__wrapper}>
          <Logo />
          <Navigation
            handleButtonClick={handleButtonClick}
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
