import { useState } from "react";
import classes from "./index.module.css";

function SelectInput(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(props.data[props.name] || []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionId) => {
    const updatedOptions = selectedOptions.includes(optionId)
      ? selectedOptions.filter((item) => item !== optionId)
      : [...selectedOptions, optionId];
    setSelectedOptions(updatedOptions);
    props.setData({ ...props.data, [props.name]: updatedOptions });
    validate(updatedOptions);
  };

  const validate = (updatedOptions) => {
    const isValid = updatedOptions.length > 0;
    props.setIsValid({ ...props.isValid, [props.name]: isValid });
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
                checked={selectedOptions.includes(option.id)}
                onChange={() => {}}
              />
              <label htmlFor={option.id}>{option.name}</label>
            </div>
          ))}
        </div>
      )}
      {!props.isValid[props.name] && <span className={classes.error}>Morate odabrati predavača/e</span>}
    </div>
  );
}

export default SelectInput;
