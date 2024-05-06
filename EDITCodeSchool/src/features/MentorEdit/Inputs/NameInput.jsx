import { useEffect, useState } from "react";
import classes from "./index.module.css";

const NameInput = ({ selectedMentor, setSelectedMentor, isValid, setIsValid }) => {
  const [isValidName, setValidName] = useState(false);

  useEffect(() => {
    const validation = selectedMentor.name.length > 1;
    setValidName(validation);
    if (validation !== isValid.name) setIsValid({ ...isValid, name: validation });
  }, [selectedMentor.name, isValid.name, setIsValid]);

  const handleNameChange = (e) => {
    setSelectedMentor({ ...selectedMentor, name: e.target.value });
  };

  return (
    <div className={classes.containerInput}>
      <input
        type="text"
        value={selectedMentor.name}
        onChange={handleNameChange}
        className={classes.input}
        placeholder="Ime"
      />
      {!isValidName && selectedMentor.name.length > 0 && (
        <span className={classes.warning}>Ime je prekratko</span>
      )}
    </div>
  );
};

export default NameInput;
