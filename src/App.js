// import logo from './logo.svg';
import Home from "./Pages/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Register from "./Pages/Register";
import SingleBusiness from "./Pages/SingleBusiness";
import SubCategories from "./Pages/SubCategories";
import Listing2 from "./Pages/Listing2";


function App() {
  return (
    <>
 
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subcategories/:id" element={<SubCategories />} />
        <Route path="/Listing/:id" element={<Listing2 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/single-business/:id" element={<SingleBusiness />} />
        <Route />
      </Routes>
  
    </div>
    </>
  );
}

export default App;
