import { useNavigate } from "react-router-dom";
import classes from "./index.module.css";
import { useEffect } from "react";
function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(-1);}, 3000);
  }, [navigate]);
  return (
    <div className={classes.not}>
      <h1>NOT FOUND</h1>
      <p>Za 3 sekunde se vraćate na prethodnu stranicu.</p>

    </div>
  );
}

export default NotFound;