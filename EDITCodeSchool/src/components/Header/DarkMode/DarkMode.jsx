import classes from "./index.module.css";
import images from "../../../assets/images";

function DarkMode({ id, theme, toggleTheme }) {
  return (
    <div className={classes.darkMode}>
      <input
        type="checkbox"
        id={`darkmode-toggle-${id}`}
        onChange={toggleTheme}
        defaultChecked={theme === "dark"}
        className={classes.darkMode__input}
      />
      <label
        htmlFor={`darkmode-toggle-${id}`}
        className={classes.darkMode__label}
      >
        <img
          src={images.Sun}
          alt="Sun"
          style={{ width: "30px" }}
          className={classes.darkMode__sun}
        />
        <img
          src={images.Moon}
          alt="Moon"
          style={{ width: "30px" }}
          className={classes.darkMode__moon}
        />
      </label>
    </div>
  );
}

export default DarkMode;
