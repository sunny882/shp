//import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Main2 from "./components/Main2";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div className="navbar">
          <Navbar />
        </div>
        <Routes>
          <Route path="main2" element={<Main2 />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
