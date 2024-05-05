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
function CourseEdit() {
  const {
    courseEditVisible,
    setCourseEditVisible,
    mentors,
    organisations,
    levels,
    themes,
    selectedCourse,
    setSelectedCourse
  } = useContext(FormContext);
  const [isValid, setIsValid] = useState({
    name: true,
    description: true,
    date: true,
    mentors: true,
    organisations: true,
    level: true,
    theme: true,
  });
  const [message, setMessage] = useState("");
  const save = () => {
    const isValidForm = Object.values(isValid).every((value) => value);
    
    if (isValidForm) {
      axios.put(`http://localhost:3001/courses/${selectedCourse.id}`, selectedCourse, {
        headers: {
          "content-type": "application/json",
        },
      })
      .catch((err) => console.log(err.message));
      setMessage("Radionica je promijenjena");
      setTimeout(() => {
        setMessage("");
        setCourseEditVisible(false);
      }, 1200);
    } 
    else {
      setMessage("Niste unijeli sve podatke");
      setTimeout(() => {
        setMessage("");
      }, 1200);

      
    }
  };
  return courseEditVisible ? (
    <div className={classes.courseEdit__blur}>
      <div className={classes.courseEdit}>
        <h2>Uredi</h2>
        <div className={classes.courseEdit__wrapper}>
          <div className={classes.courseEdit__leftContainer}>
            <NameInput
              isValid={isValid}
              setIsValid={setIsValid}
              selectedCourse={selectedCourse}
              setSelectedCourse={setSelectedCourse}
            />
            <DateInput
              isValid={isValid}
              setIsValid={setIsValid}
              selectedCourse={selectedCourse}
              setSelectedCourse={setSelectedCourse}

            />
            <DescriptionInput
              isValid={isValid}
              setIsValid={setIsValid}
              selectedCourse={selectedCourse}
              setSelectedCourse={setSelectedCourse}

            />
            {/*<AddPhoto/>*/}
          </div>
          <div className={classes.courseEdit__rightContainer}>
            <SelectInput
              isValid={isValid}
              setIsValid={setIsValid}
              options={mentors}
              label="Predavač"
              name="mentors"
              selectedCourse={selectedCourse}
              setSelectedCourse={setSelectedCourse}

            />
            <SelectInput
              isValid={isValid}
              setIsValid={setIsValid}
              options={organisations}
              label="Organizacija"
              name="organisations"
              selectedCourse={selectedCourse}
              setSelectedCourse={setSelectedCourse}
            />
            <SelectOneInput

              isValid={isValid}
              setIsValid={setIsValid}
              options={levels}
              label="Težina"
              name="level"
              selectedCourse={selectedCourse}
              setSelectedCourse={setSelectedCourse}

            />
            <SelectOneInput
              isValid={isValid}
              setIsValid={setIsValid}
              options={themes}
              label="Tema"
              name="theme"
              selectedCourse={selectedCourse}
              setSelectedCourse={setSelectedCourse}
            />
          </div>
        </div>
        <div className={classes.courseEdit__buttonWrapper}>
          <button onClick={save}>Spremi</button>
          {<span>{message}</span>}
        </div>
        <CloseButton closing={setCourseEditVisible} />
      </div>
    </div>
  ) : null;
}

export default CourseEdit;
