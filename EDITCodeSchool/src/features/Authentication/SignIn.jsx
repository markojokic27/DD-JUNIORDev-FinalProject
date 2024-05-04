import { useContext, useState } from "react";
import classes from "./index.module.css";
import { FormContext } from "../../context/formContext";

function SignIn() {
  const [emailIn, setEmailIn] = useState("");
  const [passwordIn, setPasswordIn] = useState("");
  const {users}=useContext(FormContext)

  const signIn = (e) => {
    e.preventDefault();
    console.log(emailIn, passwordIn);
    let user = users.find((user) => user.email === emailIn);
    if (user) {
      user = users.find((user) => user.email === emailIn && user.password === passwordIn);
      if (user) {
        console.log("Uspješno ste se prijavili");
      } else {
        console.log("Netočna lozinka");
      }
    } else {
      console.log("Ne postoji korisnik s tim podacima");
    }
    
  };

  return (
    <div className={classes.signIn}>
      <form onSubmit={signIn}>
        <div className={classes.signUpTitle}>
          <h1>Prijavi se</h1>
        </div>
        <input
          type="email"
          value={emailIn}
          onChange={(e) => setEmailIn(e.target.value)}
          placeholder="Email adresa"
          required
          className={classes.signInInput}
        />
        <input
          type="password"
          value={passwordIn}
          onChange={(e) => setPasswordIn(e.target.value)}
          placeholder="Password"
          required
          className={classes.signInInput}
        />
        <button type="submit" className={classes.buttonA}>
          Prijavi se
        </button>
      </form>
    </div>
  );
}

export default SignIn;
