import classes from "./index.module.css";

function Hamburger(props) {
  const toggleHamburger = () => {
    props.setHamburgerActive(!props.hamburgerActive);
  };
  return (
    <div
      className={`${classes.header__hamburger} ${
        props.hamburgerActive ? classes.active : ""
      }`}
      onClick={toggleHamburger}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Hamburger;
