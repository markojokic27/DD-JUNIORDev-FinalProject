import { Link } from "react-router-dom";
import classes from "./index.module.css";
import DarkMode from "../DarkMode/DarkMode";
import { useContext } from "react";
import { FormContext } from "../../../context/formContext";
function Navigation(props) {
  const {setAuthenticationVisible, authenticationVisible}=useContext(FormContext)
  const handleButtonClick = () => {
    setAuthenticationVisible(!authenticationVisible);
  };
  return (
    <div className={classes.header__navigation}>
      <ul>
        <Link to="/">POČETNA</Link>
        <Link to="/courses">RADIONICE</Link>
        <Link to="/mentors">PREDAVAČI</Link>
        <a href="#">ADMIN</a>
        <div className={classes.header__underline}></div>
      </ul>

      <DarkMode id="1" theme={props.theme} toggleTheme={props.toggleTheme} />

      <button
        className={classes.header__button}
        onClick={handleButtonClick}
      >
        PRIJAVA
      </button>
    </div>
  );
}

export default Navigation;
