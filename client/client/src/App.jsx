import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PresPage from "./Pages/PresPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import AddSeries from "./Pages/AddSeries";
import Paople from "./Pages/People";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<PresPage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path={`/Home/:id`} element={<Home />} />
          <Route path={`/Account/:id`} element={<Account />} />
          <Route path={`/AddSeries`} element={<AddSeries />} />
          <Route path={`/People`} element={<Paople />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
