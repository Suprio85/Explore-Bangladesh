import { useEffect, useState } from 'react';
import './App.css';
import Homepage from './Homepage/Homepage';  // Ensure correct path and component name
import Navbar from './navbar';  // Ensure the component name matches the file name if case-sensitive
import Registration from './Random/RegistrationPage';
import Dashboard from './Random/Dashboard';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [isAuthenticated,setIsAuthenticated]=useState(false);

  useEffect(()=>{
    const authState =localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authState==='true');
  },[])

  const setAuth=(x)=>{
    setIsAuthenticated(x);
    localStorage.setItem('isAuthenticated',x.toString());
  }
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Homepage/>}/>  
        <Route path="/signup" element={isAuthenticated ? <Registration setAuth={setAuth}/>:<Dashboard setAuth={setAuth}/>}/>    
        <Route path="/" element={<Homepage/>}/>  
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard/>:<Registration/>}
      </Routes>
    </Router>
  );
}

export default App;
