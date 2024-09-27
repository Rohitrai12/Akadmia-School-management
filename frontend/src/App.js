import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Homepage from "./pages/Homepage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import LoginPage from "./pages/LoginPage";
import AdminRegisterPage from "./pages/admin/AdminRegisterPage";
import ChooseUser from "./pages/ChooseUser";
import ContactUs from "./pages/Landing/ContactUs";
import AboutUs from "./pages/Landing/About";
import TryCanvas from "./pages/Landing/TryCanvas";
import SupportPage from "./pages/Landing/SupportPage";
import Resources from "./pages/Landing/Resources";
import News from "./pages/Landing/News";
import ProfessionalED from "./pages/Landing/ProfessionalED";
import K12 from "./pages/Landing/K12page";
import HigherEducation from "./pages/Landing/HigherEducation";

const App = () => {
  const { currentRole } = useSelector((state) => state.user);

  return (
    <Router>
      {currentRole === null && (
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/choose" element={<ChooseUser visitor="normal" />} />
          <Route
            path="/chooseasguest"
            element={<ChooseUser visitor="guest" />}
          />

          <Route path="/Adminlogin" element={<LoginPage role="Admin" />} />
          <Route path="/Studentlogin" element={<LoginPage role="Student" />} />
          <Route path="/Teacherlogin" element={<LoginPage role="Teacher" />} />

          <Route path="/Adminregister" element={<AdminRegisterPage />} />

            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/try-canvas" element={<TryCanvas />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/higher-education" element={<HigherEducation />} />
            <Route path="/professional-ed" element={<ProfessionalED />} />
            <Route path="/k12" element={<K12 />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/news" element={<News />} />
        </Routes>
      )}

      {currentRole === "Admin" && (
        <>
          <AdminDashboard />
        </>
      )}

      {currentRole === "Student" && (
        <>
          <StudentDashboard />
        </>
      )}

      {currentRole === "Teacher" && (
        <>
          <TeacherDashboard />
        </>
      )}
    </Router>
  );
};

export default App;
