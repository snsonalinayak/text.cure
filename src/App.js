import { useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';


function App() {
  const [mode, setMode] = useState('light');
  // const [modeBtn, setModeBtn] = useState('pink');
  // const [mode, setMode] = useState("white");
  const [alert, setAlert] = useState(null);

  const changeAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove("bg-light")
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-danger")
  }

  // const toggleMode=()=>{
  //   if (mode==="light"){
  //     setMode("dark")
  //     document.body.style.backgroundColor="#343a40";
  //     changeAlert("Dark Mode Enabled","success");
  //   }
  //   else if(mode==="dark"){
  //     setMode("light")
  //     document.body.style.backgroundColor="white";
  //     changeAlert("Light Mode Enabled","success");
  //   }

    
  // }

  const toggleMode=(mode)=>{
    console.log(mode)
    removeBodyClasses();
    switch(mode) {
      
      // case ("light"):
      //   // cls="dark";
      //   setMode("dark");
      //   document.body.style.backgroundColor="#343a40";
      // changeAlert("dark Mode Enabled","success");
      //   break;

      //   case ("dark"):
      //   // cls="light"
      //   setMode("light")
      //   document.body.style.backgroundColor="#343a40";
      // changeAlert("light Mode Enabled","success");
      //   break;

        case ("primary"):
          setMode("primary")
          document.body.style.backgroundColor="#8cacf4";
          changeAlert("Blue Theme Enabled","success");
          // document.element.style.color="white"
          
        break;

        case ("success"):
          setMode("success")
          document.body.style.backgroundColor="#9ccc9a";
          changeAlert("Green Theme Enabled","success");
        break;

        case ("danger"):
          setMode("danger")
          document.body.style.backgroundColor="#fbbebe";
          changeAlert("Red Theme Enabled","success");
          break;
          
          case("light"):
          setMode("light")
          document.body.style.color="white";
          changeAlert("Light Mode Enabled","success");
          break;
          
          case("dark"):
          setMode("dark")
          document.body.style.backgroundColor="#ededed";
          changeAlert("Dark Mode Enabled","success");
          document.title="TextUtils: Dark Mode";
        break;

      // case "Apple":
      //   text = "How you like them apples?";
      //   break;
      default:
        setMode("dark")
        document.body.style.backgroundColor="#ededed";

    }
  
      
    }
  

  // const toggleMode=()=>{
  //   if (mode==="white"){
  //     setMode("black")
  //     document.body.style.backgroundColor="#343a40";
  //     changeAlert("Dark Mode Enabled","success");
  //   }
  //   else if(mode==="black"){
  //     setMode("white")
  //     document.body.style.backgroundColor="white";
  //     changeAlert("Light Mode Enabled","success");
  //   }

    
  // }

  // const toggleModeBtn=()=>{
  //   if (modeBtn==="pink"){
  //     setModeBtn("pink")
  //   }
  // }  

  

  return (
    <>
    {/* <Navbar title="TextUtils" about="About Us" Mode={mode} toggleMode={toggleMode}/>
    {
       alert &&
       <Alert  alert={alert}/>}
    
    <TextForm heading="Enter text to Analyze:" Mode={mode} changeAlert={changeAlert} /> */}
    {/* <About/> */}

    <Router>

      <Navbar title="TextUtils" about="About Us" Mode={mode} toggleMode={toggleMode}/>
     {
       
       <Alert  alert={alert}/>}


      <Routes>
      <Route exact path='/' element = {<TextForm heading="Enter text to Analyze:" Mode={mode} changeAlert={changeAlert} />}>
        
      </Route>

      <Route exact path='/about' element={<About/>} />
    
      </Routes>
    
    </Router>
      
    </>
  );
}

export default App;
