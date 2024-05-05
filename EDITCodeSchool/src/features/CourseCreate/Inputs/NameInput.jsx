import { useEffect, useState } from "react";
import classes from "./index.module.css";

const NameInput = ({ data, setData, isValid, setIsValid }) => {
  const [isValidName, setValidName] = useState(false);

  useEffect(() => {
    const validation = data.name.length > 1;
    setValidName(validation);
    if (validation !== isValid.name) setIsValid({ ...isValid, name: validation });
  }, [data.name, isValid.name, setIsValid]);

  return (
    <div className={classes.containerInput}>
      <input
        type="text"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        className={classes.input}
        placeholder="Ime radionice"
      />
      {!isValidName && data.name.length > 0 && (
        <span className={classes.warning}>Ime je prekratko</span>
      )}
    </div>
  );
};

export default NameInput;
