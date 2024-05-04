import { Link } from "react-router-dom";
import classes from "./index.module.css";
import DarkMode from "../DarkMode/DarkMode";
import { useContext } from "react";
import { FormContext } from "../../../context/formContext";
function Navigation(props) {
  const { setAuthenticationVisible, authenticationVisible, currentUser,setCurrentUser } =
    useContext(FormContext);
  const handleButtonClick = () => {
    setAuthenticationVisible(!authenticationVisible);
  };
  const logOut = () => {
    setCurrentUser({name:"",email:"",password:""})
  }
  console.log(currentUser)

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
      {currentUser.name === "" ? (
        <button className={classes.header__button} onClick={handleButtonClick}>
          PRIJAVA
        </button>
      ) : (
        <button className={classes.header__redbutton} onClick={logOut}>ODJAVA</button>
      )}
    </div>
  );
}

export default Navigation;
