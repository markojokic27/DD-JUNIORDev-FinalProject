import { useContext, useEffect, useState } from "react";
import classes from "./index.module.css";
import { FormContext } from "../../context/formContext";
import Course from "./Course/Course";
import Filters from "./Filters/Filters";
import Loader from "./Filters/Loader";

function Courses() {
  const { setFilteredCourses, filteredCourses, courses } =
    useContext(FormContext);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (courses.length > 0) {
      setFilteredCourses(courses);
    }
  }, [courses, setFilteredCourses]);

  useEffect(() => {
    let filteredCoursesResult = courses;

    if (selectedLevels.length > 0) {
      filteredCoursesResult = filteredCoursesResult.filter((course) =>
        selectedLevels.includes(course.level)
      );
    }

    if (selectedThemes.length > 0) {
      filteredCoursesResult = filteredCoursesResult.filter((course) =>
        selectedThemes.includes(course.theme)
      );
    }

    setIsLoading(true);
    setTimeout(() => {
      setFilteredCourses(filteredCoursesResult);
      setIsLoading(false);
    }, 1200);
  }, [selectedLevels, selectedThemes, courses, setFilteredCourses]);

  return (
    <div className={classes.courses}>
      <h1>Radionice</h1>
      <div className={classes.courses__wrapper}>
        <div className={classes.courses__leftContainer}>
          <Filters
            selectedLevels={selectedLevels}
            setSelectedLevels={setSelectedLevels}
            selectedThemes={selectedThemes}
            setSelectedThemes={setSelectedThemes}
          />
        </div>
        <div className={classes.courses__display}>
          {isLoading ? (
            <div className={classes.courses__loading}>
              <Loader />
            </div>
          ) : filteredCourses.length > 0 ? (
            filteredCourses.map((c, index) => <Course key={index} course={c} />)
          ) : (
            <div className={classes.courses__notFound}>
              <h2>Trenutno takve radionice nisu organizirane</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;
