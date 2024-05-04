import classes from "./index.module.css";
function OverlayLeft(props) {
  return (
    <div className={classes.overlayLeft}>
      <h1>Dobrodošli natrag!</h1>
      <p>Da bi ostao u koraku s nama, prijavi se sa svojim osobnim podacima</p>
      <button
        className={classes.buttonA}
        id="signIn"
        onClick={props.handleSignInClick}
      >
        Prijavi se
      </button>
    </div>
  );
}

export default OverlayLeft;
