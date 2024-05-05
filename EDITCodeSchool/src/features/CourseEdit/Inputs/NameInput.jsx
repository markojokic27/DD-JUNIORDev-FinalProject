import { useEffect, useState } from "react";
import classes from "./index.module.css";

const NameInput = ({ selectedCourse, setSelectedCourse, isValid, setIsValid }) => {
  const [isValidName, setValidName] = useState(false);

  useEffect(() => {
    const validation = selectedCourse.name.length > 1;
    setValidName(validation);
    if (validation !== isValid.name) setIsValid({ ...isValid, name: validation });
  }, [selectedCourse.name, isValid.name, setIsValid]);

  return (
    <div className={classes.containerInput}>
      <input
        type="text"
        value={selectedCourse.name}
        onChange={(e) => setSelectedCourse({ ...selectedCourse, name: e.target.value })}
        className={classes.input}
        placeholder="Ime radionice"
      />
      {!isValidName && selectedCourse.name.length > 0 && (
        <span className={classes.warning}>Ime je prekratko</span>
      )}
    </div>
  );
};

export default NameInput;
