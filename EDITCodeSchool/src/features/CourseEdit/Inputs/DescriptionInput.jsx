import { useEffect, useState } from "react";
import classes from "./index.module.css";

const DescriptionInput = ({ selectedCourse, setSelectedCourse, isValid, setIsValid }) => {
  const [isValidDescription, setValidDescription] = useState(false);

  useEffect(() => {
    const validation = selectedCourse.description.length > 10;
    setValidDescription(validation);
    if (validation !== isValid.description) setIsValid({ ...isValid, description: validation });
  }, [selectedCourse.description, isValid.description, setIsValid]);

  return (
    <div className={classes.containerInputArea}>
      <textarea
        value={selectedCourse.description}
        onChange={(e) => setSelectedCourse({ ...selectedCourse, description: e.target.value })}
        className={classes.textArea}
        placeholder="Opis"
      />
      {!isValidDescription && selectedCourse.description.length > 0 && (
        <span className={classes.warning}>Opis je prekratak</span>
      )}
    </div>
  );
};

export default DescriptionInput;
