import { useEffect, useState } from 'react';
import './App.css';
import Homepage from './Homepage/Homepage';  // Ensure correct path and component name
import Navbar from './navbar';  
import Registration from './Random/RegistrationPage';
import Dashboard from './Random/Dashboard';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [isAuthenticated,setIsAuthenticated]=useState(false);
  useEffect(()=>{
    const checkAuth=localStorage.getItem('isAuthenticated')==='true';
    if(checkAuth){
      setIsAuthenticated(true);
    }
  },[])

  const setAuth=(bool)=>{
    setIsAuthenticated(bool);
    localStorage.setItem('isAuthenticated',bool);
  }
  return (
    <Router>
      <Navbar setAuth={setAuth} />
      <main className="flex-grow">
        <Routes>
          <Route path="/home" element={<Homepage />} />  
          <Route path="/signup" element={<Registration setAuth={(bool) => setAuth(bool)} />} />    
          <Route path="/" element={<Homepage />} />  
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard setAuth={(bool) => setAuth(bool)} /> : <Registration setAuth={setAuth} />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
