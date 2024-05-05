import { useEffect, useState } from "react";
import classes from "./index.module.css";
import moment from "moment";

const DateInput = ({ data, setData, isValid, setIsValid }) => {
  const [isValidDate, setValidDate] = useState(true);
  useEffect(() => {
    const isValidFormat = moment(data.date, "YYYY-MM-DD", true).isValid(); 
    const isValidRealDate = moment(data.date, "YYYY-MM-DD").isValid(); 
    setValidDate(data.date !== "" || isValidFormat && isValidRealDate);
    setIsValid({ ...isValid, date: data.date !== "" && isValidFormat && isValidRealDate});
  }, [data.date]);
  
  return (
    <div className={classes.containerInput}>
      <input
        id="date"
        type="date"
        value={data.date}
        onChange={(e) => setData({ ...data, date: e.target.value })}
        placeholder="Datum"
        className={classes.input}
      />
      {!isValidDate && (
        <span className={classes.warning}>Neispravan datum</span>
      )}
    </div>
  );
};

export default DateInput;
