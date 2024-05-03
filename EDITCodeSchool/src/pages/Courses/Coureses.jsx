import { useContext, useEffect } from "react";
import classes from "./index.module.css";
import { FormContext } from "../../context/formContext";
import axios from "axios";
import Course from "./Course/Course";
function Courses() {
  const { setCourses, setFilteredCourses, courses } = useContext(FormContext);
  useEffect(() => {
    axios
      .get("http://localhost:3001/courses/")
      .then((res) => {
        setCourses(res.data);
        setFilteredCourses(res.data);
      })
      .catch((err) => alert(err));
  }, [setCourses, setFilteredCourses]);
  return (
    <div className={classes.courses}>
      <h1>Radionice</h1>
      <div className={classes.courses__wrapper}>
      {courses.map((c, index) => (
            <Course key={index} course={c}/>
          ))}
      </div>
      
    </div>
  );
}

export default Courses;
