// DateInput.js
import { useEffect, useState } from "react";
import classes from "./index.module.css";
import moment from "moment";

const DateInput = ({ selectedCourse, setSelectedCourse, isValid, setIsValid }) => {
  const [isValidDate, setValidDate] = useState(true);

  useEffect(() => {
    const isValidFormat = moment(selectedCourse.date, "YYYY-MM-DD", true).isValid();
    const isValidRealDate = moment(selectedCourse.date, "YYYY-MM-DD").isValid();
    
    const isValidInput = selectedCourse.date !== "" && isValidFormat && isValidRealDate;

    setValidDate(isValidInput);
    setIsValid({ ...isValid, date: isValidInput }); 

  }, [selectedCourse.date]);

  return (
    <div className={classes.containerInput}>
      <input
        id="date"
        type="date"
        value={selectedCourse.date}
        onChange={(e) => setSelectedCourse({ ...selectedCourse, date: e.target.value })}
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
