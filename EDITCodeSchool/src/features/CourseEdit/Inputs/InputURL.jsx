import { useEffect, useState } from "react";
import classes from "./index.module.css";

const InputURL = ({ selectedCourse, setSelectedCourse, isValid, setIsValid }) => {
  const [isValidURL, setValidURL] = useState(false);

  useEffect(() => {
    const validation = selectedCourse.URL.length > 1;
    setValidURL(validation);
    if (validation !== isValid.URL) setIsValid({ ...isValid, URL: validation });
  }, [selectedCourse.URL, isValid.URL, setIsValid]);

  return (
    <div className={classes.containerInput}>
      <input
        type="URL"
        value={selectedCourse.URL}
        onChange={(e) => setSelectedCourse({ ...selectedCourse, image: e.target.value })}
        className={classes.input}
        placeholder="URL slike"
      />
      {!isValidURL && selectedCourse.URL.length > 0 && (
        <span className={classes.warning}>Url neispravan</span>
      )}
    </div>
  );
};

export default InputURL;
