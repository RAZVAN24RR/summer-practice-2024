import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PresPage from "./Pages/PresPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<PresPage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
