import { Link } from "react-router-dom";
import classes from "./index.module.css";
import DarkMode from "../DarkMode/DarkMode";
import { useContext } from "react";
import { FormContext } from "../../../context/formContext";
function MobileMenu(props) {
  const {authenticationVisible, setAuthenticationVisible, currentUser, setCurrentUser}=useContext(FormContext)
  function handleClick() {
    props.setHamburgerActive(!props.hamburgerActive);
  }
  function handleButtonClick() {
    setAuthenticationVisible(!authenticationVisible);
  }
  const logOut = () => {
    setCurrentUser({name:"",email:"",password:""})
  }
  return (
    <div
      className={`${classes.header__mobileMenu} ${
        props.hamburgerActive ? classes.active : ""
      }`}
    >
      <div className={classes.mobileMenu__wrapper} onClick={handleClick}>
        <Link to="/">POČETNA</Link>
        <Link to="/courses">RADIONICE</Link>
        <Link to="/mentors">PREDAVAČI</Link>
        <a href="#">ADMIN</a>
        <DarkMode id="2" theme={props.theme} toggleTheme={props.toggleTheme} />
        {currentUser.name === "" ? (
        <button className={classes.mobileMenu__button} onClick={handleButtonClick}>PRIJAVI SE</button>
      ) : (
        <button className={classes.mobileMenu__redbutton} onClick={logOut}>ODJAVA</button>
      )}
        
      </div>
    </div>
  );
}

export default MobileMenu;
