import './App.css'
import Home from './Views/Home'
import { Route, Routes } from "react-router-dom";
import LoginPage from './Views/LoginPage';
function App() {


  return (
    <>
  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
    </>
  )
}

export default App
