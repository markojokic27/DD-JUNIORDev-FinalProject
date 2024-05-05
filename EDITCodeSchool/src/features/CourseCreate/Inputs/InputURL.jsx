import { useEffect, useState } from "react";
import classes from "./index.module.css";

const InputURL = ({ data, setData, isValid, setIsValid }) => {
  const [isValidURL, setValidURL] = useState(false);

  useEffect(() => {
    if (data && data.image) {
      const validation = data.image.length > 0;
      setValidURL(validation);
      setIsValid({ ...isValid, URL: validation });
    }
  }, [data, setIsValid]);

  const handleURLChange = (e) => {
    if (setData) {
      setData({ ...data, image: e.target.value });
    }
  };

  return (
    <div className={classes.containerInput}>
      <input
        type="url"
        value={data ? data.image : ""}
        onChange={handleURLChange}
        className={classes.input}
        placeholder="URL slike"
      />
      {!isValidURL && data && data.image && (
        <span className={classes.warning}>Url neispravan</span>
      )}
    </div>
  );
};

export default InputURL;
