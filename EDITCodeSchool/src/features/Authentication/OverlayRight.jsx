import classes from "./index.module.css";
function OverlayRight(props) {
  return (
    <div className={classes.overlayRight}>
      <h1>Hej, još se ne znamo?</h1>
      <p>Unesi osobne podatke i započni svoj razvoj</p>
      <button
        className={classes.buttonA}
        id="signUp"
        onClick={props.handleSignUpClick}
      >
        Registriraj se
      </button>
    </div>
  );
}

export default OverlayRight;
