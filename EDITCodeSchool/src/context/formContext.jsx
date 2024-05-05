import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [themes, setThemes] = useState([]);
  const [levels, setLevels] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [organisations, setOrganisations] = useState([]);
  const [authenticationVisible, setAuthenticationVisible] = useState(false);
  const [courseSignUpVisible, setCourseSignUpVisible] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({});
  const [courseEditVisible, setCourseEditVisible] = useState(false);
  const [courseCreateVisible, setCourseCreateVisible] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    password: "",
  });

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
    authenticationVisible,
    setAuthenticationVisible,
    users,
    setUsers,
    currentUser,
    setCurrentUser,
    selectedCourse,
    setSelectedCourse,
    courseSignUpVisible,
    setCourseSignUpVisible,
    courseEditVisible,
    setCourseEditVisible,
    courseCreateVisible,
    setCourseCreateVisible,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};