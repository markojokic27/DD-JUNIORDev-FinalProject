import EmailInput from "./Inputs/EmailInput";
import NameInput from "./Inputs/NameInput";
import classes from "./index.module.css";
import PasswordInput from "./Inputs/PasswordInput";
import { useContext, useState } from "react";
import axios from "axios";
import { FormContext } from "../../context/formContext";
//import bcrypt from "bcryptjs"; 
function SignUp(props) {
  const {setUsers, users, setCurrentUser, setAuthenticationVisible}=useContext(FormContext)
  const[message, setMessage] = useState("")
  const signUp = (e) => {
    e.preventDefault();
    if (props.isValid.name && props.isValid.email && props.isValid.password){
      const user = users.find((user) => user.email === props.data.email);
      if (user) {
        setMessage("Već postoji korisnik s tim emailom")
        setTimeout(() => {
          setMessage("")
        }, 3000)
        return
      }
      //props.setData({...props.data, password: bcrypt.hashSync(props.data.password, 10)})
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
        setCurrentUser(props.data);
        setTimeout(() => {
          setAuthenticationVisible(false);
          setMessage("")
        }, 1000);
      
      props.setData({ name: "", email: "", password: ""});
    }
    else {
      setMessage("Registracija nije uspjela")
      setTimeout(() => {
        setMessage("")
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
        <p>{message}</p>
      </form>
    </div>
  );
}

export default SignUp;
