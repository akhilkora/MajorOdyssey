import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./Pages/LandingPage"
import Login from "./Pages/Login"
import Courses from"./Pages/Courses"
import OdysseyAI from"./Pages/OdysseyAI"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/OdysseyAI" element={<OdysseyAI/>} />
      </Routes>
    </Router>

  )
}
