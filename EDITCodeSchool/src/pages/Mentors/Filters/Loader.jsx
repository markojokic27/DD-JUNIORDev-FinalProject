import classes from "./loader.module.css";

function Loader() {
  return (
    <div className={classes.loader}>
      <div className={classes.loader__finger}></div>
      <div className={classes.loader__finger}></div>
      <div className={classes.loader__finger}></div>
      <div className={classes.loader__finger}></div>
      <div className={classes.loader__palm}></div>
      <div className={classes.loader__thumb}></div>
    </div>
  );
}

export default Loader;
