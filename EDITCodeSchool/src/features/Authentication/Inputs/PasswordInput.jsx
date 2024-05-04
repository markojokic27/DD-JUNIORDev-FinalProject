import { useEffect, useState } from "react";
import classes from "../index.module.css";

const PasswordInput = ({data,setData,isValid,setIsValid}) => {
  const [isValidPassword, setValidPassword] = useState(false);
  useEffect(() => {
    const validation = data.password.length > 7;
    setValidPassword(validation);
    if (validation !== isValid.password) setIsValid({ ...isValid, password: true });
  }, [data, setIsValid]);
  return (
    <div className={classes.containerInput}>
      <input
        id="password"
        type="password"
        value={data.password}
        onChange={(e) => setData({...data,password:e.target.value})}
        className={classes.input}
        placeholder="Lozinka"
        
      />
      {!isValidPassword && data.password.length > 0 && (
        <span className={classes.warning}>Lozinka je prekratka</span>
      )}
    </div>
  );
};

export default PasswordInput;