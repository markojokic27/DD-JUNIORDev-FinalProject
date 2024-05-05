import { useContext, useState } from "react";
import classes from "./index.module.css";
import { FormContext } from "../../context/formContext";

function SignIn() {
  const [emailIn, setEmailIn] = useState("");
  const [passwordIn, setPasswordIn] = useState("");
  const [message, setMessage] = useState("");
  const { users, setCurrentUser, setAuthenticationVisible } =
    useContext(FormContext);

  const signIn = (e) => {
    e.preventDefault();
    let user = users.find((user) => user.email === emailIn);
    if (user) {
      user = users.find(
        (user) => user.email === emailIn && user.password === passwordIn
      );
      if (user) {
        setMessage("Uspešno ste se prijavili");
        setCurrentUser(user);
        setTimeout(() => {
          setAuthenticationVisible(false);
        }, 1000);
      } else {
        setMessage("Netočna lozinka");
      }
    } else {
      setMessage("Ne postoji korisnik s tim podacima");
    }
  };

  return (
    <div className={classes.signIn}>
      <form onSubmit={signIn}>
        <div className={classes.signUpTitle}>
          <h1>Prijavi se</h1>
        </div>
        <input
          id="emailIn"
          type="email"
          value={emailIn}
          onChange={(e) => setEmailIn(e.target.value)}
          placeholder="Email adresa"
          required
          className={classes.signInInput}
        />
        <input
          id="passwordIn"
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
        <p>{message}</p>
      </form>
    </div>
  );
}

export default SignIn;
