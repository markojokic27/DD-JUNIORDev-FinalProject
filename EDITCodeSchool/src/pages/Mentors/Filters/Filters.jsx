import classes from "./index.module.css";
import Checkbox from "./Checkbox";

function Filters(props) {
  const organisations = ["Digitalna Dalmacija", "Locastic", "FESB"];
  const themes = ["React", "Express", "Cybersecurity", "PHP"];
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
          <h3>Organizacija</h3>
          <div className={classes.filters__underline}></div>
          {organisations.map((organisation, index) => (
            <Checkbox
              key={index}
              label={organisation}
              setSelected={props.setSelectedOrganisations}
              selected={props.selectedOrganisations}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;
