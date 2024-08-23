import './App.css';
import Homepage from './Homepage/Homepage';  // Ensure correct path and component name
import Navbar from './navbar';  // Ensure the component name matches the file name if case-sensitive
import Registration from './Random/RegistrationPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Homepage/>}/>  
        <Route path="/signup" element={<Registration/>}/>  
        <Route path="/" element={<Homepage/>}/>  
      </Routes>
    </Router>
  );
}

export default App;
