import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Compiler from "./pages/Compiler";
import LanguageSelector from "./components/LanguageSelector";
import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Discussion from "./pages/DiscussionPage/Discussion";

const App: React.FC = () => {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <Compiler />
    </Box>

    // <Router>
    //   <Routes>
    //     <Route path="/discussion" element={<Discussion />} />
    //     {/* Add more routes as needed */}
    //   </Routes>
    // </Router>

    // <div className="App">
    //   <header className="header">
    //     <div className="logo">eD.WEB</div>
    //     <nav>
    //       <ul>
    //         <li><a href="#services">Problem Set</a></li>
    //         <li><a href="#portfolio">Login</a></li>
    //         <li><a href="#contact">Contact Us</a></li>
    //       </ul>
    //     </nav>
    //   </header>

    //   <div className="background">
    //     <div className="scattered-letters">
    //       <span>A</span><span>PLACE</span><span>WHERE</span><span>YOU</span><span>CODE</span><span>EFFICIENTLY</span>
    //     </div>
    //     <main className="main-content">
    //       <div className="title">eD.WEB</div>
    //       {/* <p className="tagline">A Creative web Studio, that loves to make you look good</p> */}
    //       <button className="about-button">About Us</button>
    //     </main>
    //   </div>

    //   <footer className="footer">
    //     <div className="social-links">
    //       <a href="https://www.instagram.com" className="social-icon">
    //         <i className="fab fa-instagram"></i>
    //       </a>
    //       <a href="https://www.facebook.com" className="social-icon">
    //         <i className="fab fa-facebook-f"></i>
    //       </a>
    //       <a href="https://www.x.com" className="social-icon">
    //         <i className="fab fa-twitter"></i>
    //       </a>
    //     </div>
    //   </footer>
    // </div>
  );
};

export default App;
