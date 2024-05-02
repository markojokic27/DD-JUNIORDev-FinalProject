import { Link } from "react-router-dom";
import classes from "./index.module.css";
import DarkMode from "./DarkMode";
function Navigation(props) {
  return (
    <div className={classes.headerWrapper__navigation}>
      <ul>
          <Link to="/">POČETNA</Link>
          <Link to="/courses">RADIONICE</Link>
          <Link to="/mentors">PREDAVAČI</Link>
          <a href="#">ADMIN</a>
        <div className={classes.underline}></div>
      </ul>
      
      <DarkMode />
    

      <button
        className={`${classes.button} ${classes.buttonStyle}`}
        onClick={props.handleButtonClick}
      >
        <span className={classes.buttonText}>SIGN IN</span>
      </button>
    </div>
  );
}

export default Navigation;
