
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');// whether dark mode is enabled or not
  const [alert, setAlert] = useState('null');

  const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
    setAlert(null);
  },1500)
  }
const tooggleMode = () =>{
  if (mode === 'light'){
 setMode('dark');
 document.body.style.backgroundColor ='#191b1c'
 showAlert('Dark mode has been enabled','success')
}
else{
  setMode ('light');
  document.body.style.backgroundColor ='white'
  showAlert('Light mode has been enabled','success')
}
}
  return (
    <>
      <Router>
        {/* <Navbar title = "Coffee shop"  aboutText = " About Us"/> */}
    <Navbar title = "TextConvertor" mode = {mode} tooggleMode = {tooggleMode} />
    <Alert alert ={alert}/>
    {/* <Navbar/> */}
    <div className="container my-3">
      <Routes>
      <Route exact path="/about" element =  {<About/>} />
            <Route exact path="/" element = {<TextForm showAlert = {showAlert} heading ="Enter the text to analyze below"  mode = {mode} />}/>
           
      </Routes>
            
    {/* <About/> */}
    </div>
    </Router>
   
    </>
  );
}

export default App;
