import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Coureses'
import Mentors from './pages/Mentors/Mentors'
import NotFound from './pages/NotFound/NotFound'
import { useContext, useEffect } from 'react'
import { FormContext } from './context/formContext'
import axios from 'axios'
import Footer from './components/Footer/Footer'
import Authentication from './features/Authentication/Authentication'
import CourseSignUp from './features/CourseSignUp/CourseSignUp'
function EditCodeSchool() {
  const {setMentors,setOrganisations,setCourses, setUsers } = useContext(FormContext);
  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3001/mentors/"),
      axios.get("http://localhost:3001/organisations/"),
      axios.get("http://localhost:3001/courses/"),
      axios.get("http://localhost:3001/users/"),
    ])
      .then(([resMentors, resOrganisations,resCourses, resUsers]) => {
        setMentors(resMentors.data);
        setOrganisations(resOrganisations.data);
        setCourses(resCourses.data);
        setUsers(resUsers.data);
      })
      .catch((err) => console.log(err.message));
  }, [setMentors, setOrganisations, setCourses, setUsers]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/mentors" element={<Mentors/>} />
        <Route path="*" element={<NotFound/>} />       
      </Routes>
      <Footer />

      <Authentication/>
      <CourseSignUp/>

    </>
  )
}

export default EditCodeSchool
