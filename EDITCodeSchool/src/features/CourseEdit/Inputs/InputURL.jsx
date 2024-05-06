import { useEffect, useState } from "react";
import classes from "./index.module.css";

const InputURL = ({ selectedCourse, setSelectedCourse, isValid, setIsValid }) => {
  const [isValidURL, setValidURL] = useState(true);

  useEffect(() => {
    if (selectedCourse && selectedCourse.image) {
      const validation = isValidImageUrl(selectedCourse.image);
      setValidURL(validation);
      setIsValid({ ...isValid, image: validation });
    }
  }, [selectedCourse, setIsValid]);

  const handleURLChange = (e) => {
    if (setSelectedCourse) {
      setSelectedCourse({ ...selectedCourse, image: e.target.value });
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const text = event.clipboardData.getData("text");
    if (text) {
      setSelectedCourse({ ...selectedCourse, image: text });
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
        value={selectedCourse ? selectedCourse.image : ""}
        onChange={handleURLChange}
        onPaste={handlePaste}
        className={classes.input}
        placeholder="URL slike"
      />
      {!isValidURL && selectedCourse && selectedCourse.image && (
        <span className={classes.warning}>Neispravan URL</span>
      )}
    </div>
  );
};

export default InputURL;