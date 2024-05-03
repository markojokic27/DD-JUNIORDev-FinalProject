import { useContext } from "react";
import classes from "./index.module.css";
import { FormContext } from "../../../context/formContext";

function Course({ course }) {
  const { mentors,organisations } = useContext(FormContext);

  const mentorNames = course.mentors.map((mentorId) => {
    const mentor = mentors.find((mentor) => mentor.id === mentorId);
    return mentor ? mentor.name : "N/A";
  });
  

  const organizationNames = course.organisations.map((orgId) => {
    const organization = organisations.find((org) => org.id === orgId);
    return organization ? organization.name : "N/A";
  });

  const imagePath = `/src/assets/images/${course.name.split(" ").join("")}.jpg`;

  return (
    <div className={classes.course}>
      <div className={classes.course__wrapper1}>
        <img src={imagePath} alt={course.name} />
        <button>PRIJAVI SE</button>
      </div>
      <div className={classes.course__wrapper2}>
        <h2>{course.name}</h2>
        <p>{course.description}</p>
        <div className={classes.course__list}>
          <div className={classes.course__listItem}>
            <p>Početak:</p>
            <p>{course.date}</p>
          </div>
          <div className={classes.course__listItem}>
            <p>Mentori:</p>
            {mentorNames.map((name, index) => (
              <p key={index}>{name}</p>
            ))}
          </div>
          <div className={classes.course__listItem}>
            <p>Organizacije:</p>
            {organizationNames.map((name, index) => (
              <p key={index}>{name}</p>
            ))}
          </div>
          <div className={classes.course__listItem}>
            <p>Težina:</p>
            <p>{course.level}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
