import { useContext, useState } from "react";
import classes from "./index.module.css";
import { FormContext } from "../../context/formContext";
import axios from "axios";
import CloseButton from "../CloseButton/CloseButton";

function CourseSignUp() {
  const [alert, setAlert] = useState(false);
  const {
    setCourseSignUpVisible,
    courseSignUpVisible,
    authenticationVisible,
    selectedCourse,
    currentUser,
    courses,
    setCourses,
  } = useContext(FormContext);

  const signUp = (e) => {
    e.preventDefault();
    setAlert(true);

    const updatedCourses = courses.map((course) => {
      if (course.id === selectedCourse.id) {
        return {
          ...course,
          applications: course.applications + 1,
          participants: [...course.participants, currentUser.email],
        };
      }
      return course;
    });
    axios
      .put(`http://localhost:3001/courses/${selectedCourse.id}`, {
        ...selectedCourse,
        applications: selectedCourse.applications + 1,
        participants: [...selectedCourse.participants, currentUser.email],
      })
      .catch((error) => {
        console.error(error);
      });

    setCourses(updatedCourses);
  };

  const closeAlert = () => {
    setAlert(false);
    setCourseSignUpVisible(false);
  };
  return courseSignUpVisible ? (
    <div className={classes.CourseSignUp__blur}>
      {authenticationVisible || alert ? null : (
        <div className={classes.CourseSignUp}>
          <form onSubmit={signUp}>
            <h2>Prijavi se za {selectedCourse.name}</h2>
            <p>Puno ime:</p>
            <input type="text" required />
            <p>Email:</p>
            <span>{currentUser.email}</span>
            <p>Razlog prijave:</p>
            <textarea required></textarea>

            <button type="submit">Prijava</button>
          </form>
          <CloseButton closing={setCourseSignUpVisible} />
        </div>
      )}
      {alert ? (
        <div className={classes.CourseSignUp__alert}>
          <h2>Hvala na prijavi!</h2>
          <p>Preko mail-a će te dobiti nove obavjesti o radionici.</p>
          <button onClick={closeAlert}>Zatvori</button>
        </div>
      ) : null}
    </div>
  ) : null;
}

export default CourseSignUp;
