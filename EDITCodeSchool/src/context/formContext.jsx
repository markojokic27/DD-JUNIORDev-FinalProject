import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([courses]);
  const [themes, setThemes] = useState([]);
  const [levels, setLevels] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [organisations, setOrganisations] = useState([]);

  const contextValue = {
    courses,
    setCourses,
    filteredCourses,
    setFilteredCourses,
    themes,
    setThemes,
    levels,
    setLevels,
    mentors,
    setMentors,
    organisations,
    setOrganisations,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};