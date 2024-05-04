import { useState } from "react";
import checkboxClasses from "./checkbox.module.css";


function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      props.setSelected([...props.selected, event.target.id]);
    } else {
      props.setSelected(props.selected.filter((level) => level !== event.target.id));
    }
  };
  return (
    <div className={checkboxClasses.checkbox}>
      <label className={checkboxClasses.container} htmlFor={props.label}>
          <input id={props.label} checked={isChecked} onChange={handleCheckboxChange} type="checkbox" />
          <div className={checkboxClasses.checkmark}></div>
        </label>
      <p>{props.label}</p>
    </div>
  );
}

export default Checkbox;