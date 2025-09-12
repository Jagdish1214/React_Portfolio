
import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Contact from './components/Contact';
import Qualification from './components/Qualification';
import Login from './components/Login';
import Skills from './components/Skills';
import Signup from './components/Signup';
import NavbarComp from './components/Navbar';
import Experience from './components/Experience';
import Education from './components/Education';
import {Navbar} from "react-bootstrap"
import Project from './components/Project';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
    <NavbarComp />
    <Routes>
      <Route path="/" element={<Home/>}  />

      <Route path="/qualification" element={<Qualification/>}  >
      <Route index element={<Navigate to="education" replace/>}/>
      <Route path="education" element={<Education/>}/>
      <Route path="experience" element={<Experience/>}/>
      </Route>
    
    <Route path="skills" element={<Skills/>}/>
    <Route path="contact" element={<Contact/>}/>
     <Route path="project" element={<Project/>}/>
   
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
