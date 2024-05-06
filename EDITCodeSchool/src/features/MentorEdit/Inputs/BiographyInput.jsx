import { useEffect, useState } from "react";
import classes from "./index.module.css";

const BiographyInput = ({ selectedMentor, setSelectedMentor, isValid, setIsValid }) => {
  const [isValidBiography, setValidBiography] = useState(false);

  useEffect(() => {
    if (selectedMentor && selectedMentor.biography) {
      const validation = selectedMentor.biography.length > 10;
      setValidBiography(validation);
      setIsValid({ ...isValid, biography: validation });
    }
  }, [selectedMentor, setIsValid]);

  const handleBiographyChange = (e) => {
    if (setSelectedMentor) {
      setSelectedMentor({ ...selectedMentor, biography: e.target.value });
    }
  };

  return (
    <div className={classes.containerInputArea}>
      <textarea
        value={selectedMentor ? selectedMentor.biography : ""}
        onChange={handleBiographyChange}
        className={classes.textArea}
        placeholder="Biografija"
      />
      {!isValidBiography && selectedMentor && selectedMentor.biography && (
        <span className={classes.warning}>Biografija je prekratka</span>
      )}
    </div>
  );
};

export default BiographyInput;
