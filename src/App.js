import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from './pages/Loginpage';


function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Loginpage></Loginpage>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
