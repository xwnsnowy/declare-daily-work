// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/home" element={<Home />} />
        {/* {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))} */}
      </Routes>
    </Router>
  );
};

export default App;
