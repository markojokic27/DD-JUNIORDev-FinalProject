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
    <div className={classes.home}>
      <h1>NotFOUND</h1>

    </div>
  );
}

export default NotFound;