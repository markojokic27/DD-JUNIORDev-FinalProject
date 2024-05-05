import classes from "./index.module.css";
function CloseButton(props) {
  const close = () => {
    props.closing(false);
  }
  return (
    <a href="#" className={classes.close} onClick={close}></a>
  );
}

export default CloseButton;
