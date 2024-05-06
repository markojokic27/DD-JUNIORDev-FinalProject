import { useState } from "react";
import classes from "./index.module.css";

function SelectOneInput(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionId) => {
    const isSelected = props.selectedMentor[props.name] === optionId;
    if (isSelected) {
      props.setSelectedMentor({ ...props.selectedMentor, [props.name]: null }); 
      props.setIsValid({ ...props.isValid, [props.name]: false }); 
    } else {
      props.setSelectedMentor({ ...props.selectedMentor, [props.name]: optionId }); 
      props.setIsValid({ ...props.isValid, [props.name]: true });
    }
  };

  return (
    <div className={classes.selectInput}>
      <div className={classes.labelWrapper} onClick={toggleDropdown}>
        <label>{props.label}:</label>
        <div className={classes.dropdownIndicator}>▼</div>
      </div>
      {isOpen && (
        <div className={classes.dropdown}>
          {props.options.map((option) => (
            <div key={option.id} className={classes.option} onClick={() => handleOptionClick(option.id)}>
              <input
                type="checkbox"
                id={option.id}
                checked={props.selectedMentor[props.name] === option.id}
                readOnly
              />
              <label htmlFor={option.id}>{option.name}</label>
            </div>
          ))}
        </div>
      )}
      {!props.isValid[props.name] && <span className={classes.error}>Morate odabrati bar jedno</span>}
    </div>
  );
}

export default SelectOneInput;
