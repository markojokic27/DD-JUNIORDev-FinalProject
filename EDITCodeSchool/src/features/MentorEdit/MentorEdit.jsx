import { useContext, useState } from "react";
import classes from "./index.module.css";
import { FormContext } from "../../context/formContext";
import CloseButton from "../CloseButton/CloseButton";
import NameInput from "./Inputs/NameInput";
import SelectOneInput from "./Inputs/SelectOneInput";
import axios from "axios";
import InputURL from "./Inputs/InputURL";
import BiographyInput from "./Inputs/BiographyInput";
function MentorEdit() {
  const {
    mentorEditVisible,
    setMentorEditVisible,
    organisations,
    selectedMentor,
    setSelectedMentor,
    setMentors
  } = useContext(FormContext);
  const [isValid, setIsValid] = useState({
    name: true,
    biography: true,
    organization: true,
    image: true,
  });
  const [message, setMessage] = useState("");
  const save = () => {
    const isValidForm = Object.values(isValid).every((value) => value);
    
    if (isValidForm) {
      axios.put(`http://localhost:3001/mentors/${selectedMentor.id}`, selectedMentor, {
        headers: {
          "content-type": "application/json",
        },
      })
      .catch((err) => console.log(err.message));
      setMentors((prevMentors) => {
        return prevMentors.map((mentor) => {
          if (mentor.id === selectedMentor.id) {
            return selectedMentor;
          }
          return mentor;
        });
      });
      setMessage("Predavač je promjenjen");
      setTimeout(() => {
        setMessage("");
        setMentorEditVisible(false);
      }, 1200);
    } 
    else {
      setMessage("Niste unijeli sve podatke");
      setTimeout(() => {
        setMessage("");
      }, 1200);

      
    }
  };
  return mentorEditVisible ? (
    <div className={classes.mentorCreate__blur}>
      <div className={classes.mentorCreate}>
        <h2>Uredi predavača</h2>
        <div className={classes.mentorCreate__wrapper}>
          <NameInput
            selectedMentor={selectedMentor}
            setSelectedMentor={setSelectedMentor}
            isValid={isValid}
            setIsValid={setIsValid}
          />
          <BiographyInput
            selectedMentor={selectedMentor}
            setSelectedMentor={setSelectedMentor}
            isValid={isValid}
            setIsValid={setIsValid}
          />
          <InputURL
            selectedMentor={selectedMentor}
            setSelectedMentor={setSelectedMentor}
            isValid={isValid}
            setIsValid={setIsValid}
          />

          <SelectOneInput
            selectedMentor={selectedMentor}
            setSelectedMentor={setSelectedMentor}
            isValid={isValid}
            setIsValid={setIsValid}
            options={organisations}
            label="Organizacija"
            name="organization"
          />
        </div>
        <div className={classes.mentorCreate__buttonWrapper}>
          <button onClick={save}>Spremi</button>
          <span>{message}</span>
        </div>
        <CloseButton closing={setMentorEditVisible} />
      </div>
    </div>
  ) : null;
}

export default MentorEdit;
