import EmailInput from "./Inputs/EmailInput";
import NameInput from "./Inputs/NameInput";
import classes from "./index.module.css";
import PasswordInput from "./Inputs/PasswordInput";
import { useContext, useState } from "react";
import axios from "axios";
import { FormContext } from "../../context/formContext";
function SignUp(props) {
  const {setUsers}=useContext(FormContext)
  const[unsuccesful, setUnsuccesful] = useState(false)
  
  const signUp = (e) => {
    e.preventDefault();
    if (props.isValid.name && props.isValid.email && props.isValid.password) {
      console.log("Uspješno ste se registrirali")
      axios
        .post("http://localhost:3001/users", props.data, {
        headers: {
          "content-type": "application/json",
        }
        })
        .then(() => {
        axios.get("http://localhost:3001/users/").then((response) => {
          setUsers(response.data);
        })})
        .catch((error) => {
        console.log(error);
        });
      props.setData({ name: "", email: "", password: ""});
    }
    else {
      setUnsuccesful(true)
      setTimeout(() => {
        setUnsuccesful(false)
      }, 3000)
    }
  }
  return (
    <div className={classes.signUp}>
      <form action="#">
        <div className={classes.signUpTitle}>
          <h1>Napravi profil</h1>
        </div>
        <NameInput
          data={props.data}
          setData={props.setData}
          isValid={props.isValid}
          setIsValid={props.setIsValid}
        />
        <EmailInput
          data={props.data}
          setData={props.setData}
          isValid={props.isValid}
          setIsValid={props.setIsValid}
        />
        <PasswordInput
          data={props.data}
          setData={props.setData}
          isValid={props.isValid}
          setIsValid={props.setIsValid}
        />
        <button className={classes.buttonA} onClick={signUp}>Registriraj se</button>
        {unsuccesful && <span className={classes.warning}>Registracija nije uspjela</span>}
      </form>
    </div>
  );
}

export default SignUp;
