import { useContext, useState } from "react";
import classes from "./index.module.css";
import { FormContext } from "../../context/formContext";
import axios from "axios";
import NameInput from "../CourseCreate/Inputs/NameInput";
import BiographyInput from "./Inputs/BiographyInput";
import SelectOneInput from "./Inputs/SelectOneInput";
import CloseButton from "../CloseButton/CloseButton";
import InputURL from "./Inputs/InputURL";

function MentorCreate() {
  const {
    mentorCreateVisible,
    setMentorCreateVisible,
    organisations,
    setMentors,
  } = useContext(FormContext);
  const [data, setData] = useState({
    name: "",
    biography: "",
    organization: "",
    image: "",
  });
  const [isValid, setIsValid] = useState({
    name: false,
    biography: false,
    organization: false,
    image: false,
  });
  const [message, setMessage] = useState("");
  const save = () => {
    const isValidForm = Object.values(isValid).every((value) => value);
    if (isValidForm) {
      axios
        .post("http://localhost:3001/mentors", data, {
          headers: {
            "content-type": "application/json",
          },
        })
        .catch((err) => console.log(err.message));
      setMentors((prevMentors) => {
        return prevMentors.map((mentor) => {
          if (mentor.id === data.id) {
            return data;
          }
          return mentor;
        });
      });
      setMessage("Predavač je uspješno dodan");
      setTimeout(() => {
        setMessage("");
        setMentorCreateVisible(false);
      }, 1200);
    } else {
      setMessage("Niste unijeli sve podatke");
      setTimeout(() => {
        setMessage("");
      }, 1200);
    }
    
  };


  return mentorCreateVisible ? (
    <div className={classes.mentorCreate__blur}>
      <div className={classes.mentorCreate}>
        <h2>Novi predavač</h2>
        <div className={classes.mentorCreate__wrapper}>
          <NameInput
            data={data}
            setData={setData}
            isValid={isValid}
            setIsValid={setIsValid}
          />
          <BiographyInput
            data={data}
            setData={setData}
            isValid={isValid}
            setIsValid={setIsValid}
          />
          <InputURL
            data={data}
            setData={setData}
            isValid={isValid}
            setIsValid={setIsValid}
          />

          <SelectOneInput
            data={data}
            setData={setData}
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
        <CloseButton closing={setMentorCreateVisible} />
      </div>
    </div>
  ) : null;
}

export default MentorCreate;
