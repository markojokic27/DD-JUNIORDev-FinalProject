import classes from "./index.module.css";
function MobileMenu(props) {
  return (
    <div
      className={`${classes.header__mobileMenu} ${
        props.hamburgerActive ? classes.active : ""
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
  );
}

export default MobileMenu;
