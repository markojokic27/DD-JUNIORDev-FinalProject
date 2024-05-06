import { useEffect, useState } from "react";
import classes from "./index.module.css";

const InputURL = ({ data, setData, isValid, setIsValid }) => {
  const [isValidURL, setValidURL] = useState(true);

  useEffect(() => {
    if (data && data.image) {
      const validation = isValidImageUrl(data.image);
      setValidURL(validation);
      setIsValid({ ...isValid, image: validation });
    }
  }, [data, setIsValid]);

  const handleURLChange = (e) => {
    if (setData) {
      setData({ ...data, image: e.target.value });
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const text = event.clipboardData.getData("text");
    if (text) {
      setData({ ...data, image: text });
    }
  };

  const isValidImageUrl = (url) => {
    const urlRegex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/i;
    return urlRegex.test(url);
  };

  return (
    <div className={classes.containerInput}>
      <input
        type="url"
        value={data ? data.image : ""}
        onChange={handleURLChange}
        onPaste={handlePaste}
        className={classes.input}
        placeholder="URL slike"
      />
      {!isValidURL && data && data.image && (
        <span className={classes.warning}>Neispravan URL</span>
      )}
    </div>
  );
};

export default InputURL;
