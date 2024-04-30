import classes from "./index.module.css";
import images from "../../assets/images";
function Home() {
  return (
    <div className={classes.home}>
      <img
        src={images.logo}
        alt="logo"
        className={classes.headerWrapper__logo__img}
      />
      <h1>AAAAAAAAAAAAAAAa</h1>
    </div>
  );
}

export default Home;
