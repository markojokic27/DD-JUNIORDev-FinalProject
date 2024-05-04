import classes from "./index.module.css";
import Checkbox from "./Checkbox";

function Filters(props) {
  const levels = ["Junior", "Mid", "Senior"];
  const themes = ["React", "Express", "Cybersecurity", "PHP"];
  console.log(props.selectedThemes);
  return (
    <div className={classes.filters}>
      <h2>Filteri</h2>
      <div className={classes.filters__container}>
        <div className={classes.filters__wrapper}>
          <h3>Tema</h3>
          <div className={classes.filters__underline}></div>
          {themes.map((theme, index) => (
            <Checkbox
              key={index}
              label={theme}
              setSelected={props.setSelectedThemes}
              selected={props.selectedThemes}
            />
          ))}
        </div>
        <div className={classes.filters__wrapper}>
          <h3>Težina</h3>
          <div className={classes.filters__underline}></div>
          {levels.map((level, index) => (
            <Checkbox
              key={index}
              label={level}
              setSelected={props.setSelectedLevels}
              selected={props.selectedLevels}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;
