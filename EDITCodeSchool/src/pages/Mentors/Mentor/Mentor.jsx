//import { useContext } from "react";
import { useContext } from "react";
import classes from "./index.module.css";
import { FormContext } from "../../../context/formContext";
//import { FormContext } from "../../../context/formContext";

function Mentor({ mentor, /*isCurrentUserAdmin */}) {
  const {
    organisations,
    currentUser
  } = useContext(FormContext);
/*
  const editVisible = () => {
    setSelectedmentor(mentor);
    setmentorEditVisible(true);
  };
  const mentorNames = mentor.mentors.map((mentorId) => {
    const mentor = mentors.find((mentor) => mentor.id === mentorId);
    return mentor ? mentor.name : "N/A";
  });

  const organizationNames = mentor.organisations.map((orgId) => {
    const organization = organisations.find((org) => org.id === orgId);
    return organization ? organization.name : "N/A";
  });

  const mentorSignUp = () => {
    setSelectedmentor(mentor);
    console.log(currentUser.name);
    if (currentUser.name === "") setAuthenticationVisible(true);
    setmentorSignUpVisible(true);
  };

  */
  let currentUserAdmin= currentUser.email === "admin@gmail.com";
  const organizationName = organisations.find((org) => org.id === mentor.organization)?.name;
  return (
    <div className={classes.mentor}>
      <img src={mentor.image} alt="" className={classes.mentor__image}/>
      <h2>{mentor.name}</h2>
      <p>{mentor.biography}</p>
      <p>Organizacija: <b>{organizationName}</b></p>
      <button>RADIONICE</button>
      {currentUserAdmin && <button>UREDI</button>}


    </div>
  );
}

export default Mentor;
