import { useEffect, useState } from "react";
import classes from "./index.module.css";

const BiographyInput = ({ data, setData, isValid, setIsValid }) => {
  const [isValidBiography, setValidBiography] = useState(false);

  useEffect(() => {
    const validation = data.biography.length > 10;
    setValidBiography(validation);
    if (validation !== isValid.biography) setIsValid({ ...isValid, biography: validation });
  }, [data.biography, isValid.biography, setIsValid]);

  return (
    <div className={classes.containerInputArea}>
      <textarea
        value={data.biography}
        onChange={(e) => setData({ ...data, biography: e.target.value })}
        className={classes.textArea}
        placeholder="Biografija"
      />
      {!isValidBiography && data.biography.length > 0 && (
        <span className={classes.warning}>Biografija je prekratka</span>
      )}
    </div>
  );
};

export default BiographyInput;
