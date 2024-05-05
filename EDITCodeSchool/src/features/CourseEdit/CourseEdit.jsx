import { useContext, useState } from "react";
import classes from "./index.module.css";
import { FormContext } from "../../context/formContext";
import axios from "axios";
import CloseButton from "../CloseButton/CloseButton";

function CourseEdit() {
  const { courseEditVisible, setCourseEditVisible, selectedCourse } = useContext(FormContext);

  return courseEditVisible ? (
    <div className={classes.courseEdit__blur}>
      <div className={classes.courseEdit}>
        
        
        <CloseButton closing={setCourseEditVisible} />
      </div>
    </div>
  ) : null;
}

export default CourseEdit;
