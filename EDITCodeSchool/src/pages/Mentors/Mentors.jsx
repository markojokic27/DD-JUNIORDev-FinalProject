import { useContext, useEffect, useState } from "react";
import classes from "./index.module.css";
import { FormContext } from "../../context/formContext";
import Filters from "./Filters/Filters";

import Mentor from "./Mentor/Mentor";
import Loader from "../Courses/Filters/Loader";

function Mentors() {
  const {
    setFilteredMentors,
    filteredMentors,
    mentors,
    currentUser,
    courses,
    organisations,
    setMentorCreateVisible
  } = useContext(FormContext);
  const [selectedOrganisations, setSelectedOrganisations] = useState([]);
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isCurrentUserAdmin = currentUser.email === "admin@gmail.com";

  const addMentor = () => {
    setMentorCreateVisible(true);
  };

  useEffect(() => {
    if (mentors.length > 0) {
      setFilteredMentors(mentors);
    }
  }, [mentors, setFilteredMentors]);

  useEffect(() => {
    let filteredMentorsResult = mentors;
    if (selectedThemes.length > 0) {
      const filteredCourses = courses.filter((course) =>
        selectedThemes.some((themeId) => course.theme === themeId)
      );
      const mentorIdsFromFilteredCourses = filteredCourses.reduce(
        (mentorIds, course) => {
          return [...mentorIds, ...course.mentors];
        },
        []
      );

      filteredMentorsResult = mentors.filter((mentor) =>
        mentorIdsFromFilteredCourses.includes(mentor.id)
      );
    }

    if (selectedOrganisations.length > 0) {
      const selectedOrganisationIds = selectedOrganisations
        .map((orgName) => organisations.find((org) => org.name === orgName)?.id)
        .filter(Boolean);
      filteredMentorsResult = filteredMentorsResult.filter((mentor) =>
        selectedOrganisationIds.includes(mentor.organization)
      );
    }
    setIsLoading(true);
    setTimeout(() => {
      setFilteredMentors(filteredMentorsResult);
      setIsLoading(false);
    }, 1200);
  }, [
    organisations,
    selectedOrganisations,
    selectedThemes,
    mentors,
    courses,
    setFilteredMentors,
  ]);
  return (
    <div className={classes.mentors}>
      <h1>Predavači</h1>
      <div className={classes.mentors__wrapper}>
        <div className={classes.mentors__leftContainer}>
          {isCurrentUserAdmin && (
            <button className={classes.mentors__buttonAdd} onClick={addMentor}>
              DODAJ MENTORA
            </button>
          )}{" "}
          <Filters
            selectedOrganisations={selectedOrganisations}
            setSelectedOrganisations={setSelectedOrganisations}
            selectedThemes={selectedThemes}
            setSelectedThemes={setSelectedThemes}
          />
        </div>
        <div className={classes.mentors__display}>
          {isLoading ? (
            <div className={classes.mentors__loading}>
              <Loader />
            </div>
          ) : filteredMentors.length > 0 ? (
            filteredMentors.map((m, index) => (
              <Mentor
                key={index}
                mentor={m}
                isCurrentUserAdmin={isCurrentUserAdmin}
              />
            ))
          ) : (
            <div className={classes.mentors__notFound}>
              <h2>Trenutno nema takvih mentora</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mentors;
