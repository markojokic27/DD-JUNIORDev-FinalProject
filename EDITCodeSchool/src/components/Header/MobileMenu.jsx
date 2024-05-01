import { Link } from "react-router-dom";
import classes from "./index.module.css";
function MobileMenu(props) {
  return (
    <div
      className={`${classes.header__mobileMenu} ${
        props.hamburgerActive ? classes.active : ""
      }`}
    >
      <ul>
        <Link to="/">POČETNA</Link>
        <Link to="/courses">RADIONICE</Link>
        <Link to="/mentors">PREDAVAČI</Link>
        <a href="#">ADMIN</a>
      </ul>
    </div>
  );
}

export default MobileMenu;
