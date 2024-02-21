// Login.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm";

const Login = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      setLoggedIn(true);
      if (rememberMe) {
        localStorage.setItem("username", username);
      } else {
        localStorage.removeItem("username");
      }

      navigate("/home");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-teal-400 to-blue-500">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <LoginForm
          username={username}
          password={password}
          rememberMe={rememberMe}
          setUsername={setUsername}
          setPassword={setPassword}
          setRememberMe={setRememberMe}
          handleLogin={handleLogin}
        />
      </div>
    </div>
  );
};

export default Login;
