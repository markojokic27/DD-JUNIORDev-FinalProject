import classes from "./index.module.css";
import images from "../../assets/images";
function Logo() {
  return (
    <div className={classes.header__logo}>
      <img src={images.logo} alt="logo" className={classes.header__logo__img} />
    </div>
  );
}

export default Logo;
