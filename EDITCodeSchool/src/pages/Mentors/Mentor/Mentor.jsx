//import { useContext } from "react";
import { useContext } from "react";
import classes from "./index.module.css";
import { FormContext } from "../../../context/formContext";
import { Link } from "react-router-dom";

function Mentor({ mentor, /*isCurrentUserAdmin */}) {
  const {
    organisations,
    currentUser
  } = useContext(FormContext);

  let currentUserAdmin= currentUser.email === "admin@gmail.com";
  const organizationName = organisations.find((org) => org.id === mentor.organization)?.name;
  return (
    <div className={classes.mentor}>
      <img src={mentor.image} alt="" className={classes.mentor__image} />
      <h2>{mentor.name}</h2>
      <p>{mentor.biography}</p>
      <p>Organizacija: <b>{organizationName}</b></p>
      <Link to={`/mentors/${mentor.id}`}><button>RADIONICE</button></Link>
        
      {currentUserAdmin && <button>UREDI</button>}
    </div>
  );
}

export default Mentor;
