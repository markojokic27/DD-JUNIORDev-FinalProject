import { useContext } from "react";
import classes from "./index.module.css";
import { FormContext } from "../../context/formContext";
import { useParams } from "react-router-dom";
import Course from "../Courses/Course/Course";
function MentorCourses() {
  const { mentors, courses } = useContext(FormContext);
  const { mentorId } = useParams();

  const mentorIdNumber = parseInt(mentorId);

  const mentor = mentors.find((m) => parseInt(m.id) === mentorIdNumber);

  if (!mentor) {
    return <div><h2>Predavač nije pronađen.</h2></div>;
  }

  const mentorCourses = courses.filter((course) =>
    course.mentors.includes(mentor.id)
  );

  console.log(mentorCourses);
  return (
    <div className={classes.mentorCourses}>
      <h1>Radionice koji predaje {mentor.name}</h1>
      <div className={classes.mentorCourses__courses}>
        {mentorCourses.map((course) => (
          <div key={course.id} className={classes.mentorCourses__course}>
            <Course course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MentorCourses;
