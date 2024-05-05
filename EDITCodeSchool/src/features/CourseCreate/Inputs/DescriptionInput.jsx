import { useEffect, useState } from "react";
import classes from "./index.module.css";

const DescriptionInput = ({ data, setData, isValid, setIsValid }) => {
  const [isValidDescription, setValidDescription] = useState(false);

  useEffect(() => {
    const validation = data.description.length > 10;
    setValidDescription(validation);
    if (validation !== isValid.description) setIsValid({ ...isValid, description: validation });
  }, [data.description, isValid.description, setIsValid]);

  return (
    <div className={classes.containerInputArea}>
      <textarea
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
        className={classes.textArea}
        placeholder="Opis"
      />
      {!isValidDescription && data.description.length > 0 && (
        <span className={classes.warning}>Opis je prekratak</span>
      )}
    </div>
  );
};

export default DescriptionInput;
