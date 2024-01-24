import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Login from './pages/Login.js';
import Home from './pages/Home.js';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('sessionToken');
    if(token){
      setIsAuthenticated(true);
    } 
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated===true ? <Home /> : <Navigate to="/login"/>} />
        <Route path="/login" element={<Login onLogin={handleLogin}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
