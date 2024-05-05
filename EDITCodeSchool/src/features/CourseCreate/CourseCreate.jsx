import { useContext, useState } from "react";
import classes from "./index.module.css";
import { FormContext } from "../../context/formContext";
import CloseButton from "../CloseButton/CloseButton";
import NameInput from "./Inputs/NameInput";
import DateInput from "./Inputs/DateInput";
import DescriptionInput from "./Inputs/DescriptionInput";
import SelectInput from "./Inputs/SelectInputs";
import SelectOneInput from "./Inputs/SelectOneInput";
import axios from "axios";
//import InputURL from "./Inputs/InputURL";
//import AddPhoto from "./Inputs/AddPhoto";

function CourseCreate() {
  const {
    courseCreateVisible,
    setCourseCreateVisible,
    mentors,
    organisations,
    levels,
    themes,
  } = useContext(FormContext);
  const [data, setData] = useState({
    name: "",
    date: "",
    mentors: [],
    description: "",
    application: 0,
    participants: [],
    organisations: [],
    level: "",
    theme: "",
    image: "",
  });
  const [isValid, setIsValid] = useState({
    name: false,
    description: false,
    date: false,
    mentors: false,
    organisations: false,
    level: false,
    theme: false,
    image: false,
  });
  const [message, setMessage] = useState("");
  const save = () => {
    const isValidForm = Object.values(isValid).every((value) => value);
    if (isValidForm) {
      axios
        .post("http://localhost:3001/courses", data, {
          headers: {
            "content-type": "application/json",
          },
        })
        .catch((err) => console.log(err.message));
      setMessage("Radionica je uspješno dodana");
      setTimeout(() => {
        setMessage("");
        setCourseCreateVisible(false);
      }, 1200);
    } 
    else {
      setMessage("Niste unijeli sve podatke");
      setTimeout(() => {
        setMessage("");
      }, 1200);
    }
  };
  return courseCreateVisible ? (
    <div className={classes.courseCreate__blur}>
      <div className={classes.courseCreate}>
        <h2>Nova Radionica</h2>
        <div className={classes.courseCreate__wrapper}>
          <div className={classes.courseCreate__leftContainer}>
            <NameInput
              data={data}
              setData={setData}
              isValid={isValid}
              setIsValid={setIsValid}
            />
            <DateInput
              data={data}
              setData={setData}
              isValid={isValid}
              setIsValid={setIsValid}
            />
            <DescriptionInput
              data={data}
              setData={setData}
              isValid={isValid}
              setIsValid={setIsValid}
            />
            {/*
            <InputURL 
              data={data}
              setData={setData}
              isValid={isValid}
              setIsValid={setIsValid}
            />
            */}
            {/*<AddPhoto/>*/}
          </div>
          <div className={classes.courseCreate__rightContainer}>
            <SelectInput
              data={data}
              setData={setData}
              isValid={isValid}
              setIsValid={setIsValid}
              options={mentors}
              label="Predavač"
              name="mentors"
            />
            <SelectInput
              data={data}
              setData={setData}
              isValid={isValid}
              setIsValid={setIsValid}
              options={organisations}
              label="Organizacija"
              name="organisations"
            />
            <SelectOneInput
              data={data}
              setData={setData}
              isValid={isValid}
              setIsValid={setIsValid}
              options={levels}
              label="Težina"
              name="level"
            />
            <SelectOneInput
              data={data}
              setData={setData}
              isValid={isValid}
              setIsValid={setIsValid}
              options={themes}
              label="Tema"
              name="theme"
            />
          </div>
        </div>
        <div className={classes.courseCreate__buttonWrapper}>
          <button onClick={save}>Spremi</button>
          <span>{message}</span>
        </div>
        <CloseButton closing={setCourseCreateVisible} />
      </div>
    </div>
  ) : null;
}

export default CourseCreate;
