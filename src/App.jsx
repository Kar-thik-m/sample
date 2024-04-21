import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Login from "./user/login/login";
import Home from "./componant/Home.jsx";
import Register from "./user/Register/Register.jsx";

const App =  () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/items" >
          <Route path="login" element={<Login />} /> 
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
