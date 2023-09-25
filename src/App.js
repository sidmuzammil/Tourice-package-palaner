import "./App.css";
import Home from "./Components/Components/Home";
import { Routes, Route } from "react-router-dom";
import About from "./Components/Components/About";
import Services from "./Components/Components/Services";
import Contact from "./Components/Components/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
