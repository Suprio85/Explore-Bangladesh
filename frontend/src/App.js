import { useEffect, useState } from 'react';
import './App.css';
import Homepage from './Homepage/Homepage';  // Ensure correct path and component name
import Navbar from './navbar';  
import Registration from './Random/RegistrationPage';
import Dashboard from './Random/Dashboard';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Plan from './pages/Plan';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [isAuthenticated,setIsAuthenticated]=useState(false);
  const [cartItems, setCartItems] = useState([]);
  useEffect(()=>{
    const checkAuth=localStorage.getItem('isAuthenticated')==='true';
    if(checkAuth){
      setIsAuthenticated(true);
    }
  },[])

  useEffect(() => {
    const fetchTourPackages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/cart',{
          method:'GET',
          headers:{
            Authorization: `Bearer ${localStorage.token}`
          }
        });
        const data = await response.json();
        console.log(data);
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching tour packages:", error);
      }
    };
    
    if(localStorage.token)
    fetchTourPackages();


  }, []);

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
          <Route path="/plan" element={<Plan setCartItems={setCartItems} cartItems={cartItems} />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer
      position='top-center'
      autoClose={1000}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick
       theme='colored'
      />
    </Router>
  );
}

export default App;
