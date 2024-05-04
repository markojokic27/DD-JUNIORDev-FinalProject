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
function EditCodeSchool() {
  const {setMentors,setOrganisations,setCourses } = useContext(FormContext);
  useEffect(() => {
    axios
      .get("http://localhost:3001/mentors/")
      .then((res) => setMentors(res.data))
      .catch((err) => alert(err));
    axios
      .get("http://localhost:3001/organisations/")
      .then((res) => setOrganisations(res.data))
      .catch((err) => alert(err));
      axios
      .get("http://localhost:3001/courses/")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => alert(err));
    
  }, [setMentors,setOrganisations,setCourses]);
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
    </>
  )
}

export default EditCodeSchool
