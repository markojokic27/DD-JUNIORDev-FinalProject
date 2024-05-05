import classes from "./index.module.css";
import { useContext, useState } from "react";
import images from "../../assets/images";
import { FormContext } from "../../context/formContext";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import OverlayLeft from "./OverlayLeft";
import OverlayRight from "./OverlayRight";

function Authentication() {
  const { authenticationVisible, setAuthenticationVisible, courseSignUpVisible, setCourseSignUpVisible} = useContext(FormContext);
  const [isRightPanelActive, setRightPanelActive] = useState(false);
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
    name: false,
  });
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",});
  const close = () => {
    setAuthenticationVisible(false);
    setIsValid({ email: false, password: false, name: false });
    setData({ name: "", email: "", password: "" });
    if (courseSignUpVisible) {
      setCourseSignUpVisible(false);
    }
  }
  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };
  const handleSignInClick = () => {
    setRightPanelActive(false);
  };
  return authenticationVisible ? (
    <div className={classes.authenticationWrapper}>
      <div
        className={`${classes.authentication} 
      ${isRightPanelActive ? classes.rightPanelActive : ""}`}
      >
        <SignUp 
        data={data}
        setData={setData}
        isValid={isValid} 
        setIsValid={setIsValid} 
        />
        <SignIn />
        <div className={classes.overlayContainer}>
          <div
            className={classes.overlay}
            style={{ backgroundImage: `url(${images.authentication})` }}
          >
            <OverlayLeft handleSignInClick={handleSignInClick} />
            <OverlayRight handleSignUpClick={handleSignUpClick} />
          </div>
        </div>
        <a href="#" className={classes.close} onClick={close}></a>
      </div>
    </div>
  ) : null;
}

export default Authentication;
