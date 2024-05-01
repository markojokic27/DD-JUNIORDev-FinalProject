import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Coureses'
import Mentors from './pages/Mentors/Mentors'
import NotFound from './pages/NotFound/NotFound'
function EditCodeSchool() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/mentors" element={<Mentors/>} />
        <Route path="*" element={<NotFound/>} />
        
      </Routes>
    </>
  )
}

export default EditCodeSchool
