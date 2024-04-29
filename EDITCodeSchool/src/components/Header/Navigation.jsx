import classes from './index.module.css'
function Navigation(props) {
  return (
    <div className={classes.headerWrapper__navigation}>
            <ul>
              <li>
                <a href="#">POČETNA</a>
              </li>
              <li>
                <a href="#">RADIONICE</a>
              </li>
              <li>
                <a href="#">PREDAVČI</a>
              </li>
              <li>
                <a href="#">ADMIN</a>
              </li>
              <div className={classes.underline}></div>
            </ul>
            <button className={`${classes.button} ${classes.buttonStyle}`} onClick={props.handleButtonClick}>
              <span className={classes.buttonText}>SIGN IN</span>
            </button>
          </div>
  )
}

export default Navigation;
