import classes from "./index.module.css";
import images from "../../assets/images";
function Logo() {
  return (
    <div className={classes.headerWrapper__logo}>
      <img
        src={images.logo}
        alt="logo"
        className={classes.headerWrapper__logo__img}
      />
    </div>
  );
}

export default Logo;
