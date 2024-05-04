import {useEffect, useState } from "react";
import classes from "../index.module.css";


const EmailInput = ({data,setData,isValid,setIsValid}) => {
  const [isValidEmail, setValidEmail] = useState(false);
  useEffect(() => {
    const validation =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) && data.email.length > 4;
    setValidEmail(validation);
    if (validation !== isValid.email) 
      setIsValid({ ...isValid, email: true });
  }, [data,setIsValid]);
  return (
    <div className={classes.containerInput}>
      <input
        id="email"
        type="email"
        value={data.email}
        onChange={(e) => setData({...data,email:e.target.value})}
        placeholder="Email adresa"
        className={classes.input}
      />
      {!isValidEmail && data.email.length > 0 && (
        <span className={classes.warning}>Neispravan format emaila</span>
      )}
    </div>
  );
};

export default EmailInput;
