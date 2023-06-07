import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    
    // coloured navbar: 
    // <nav className="navbar navbar-expand-lg  "style={{backgroundColor: "#7434fc"}}>
    //plain navbar
    // <nav className="navbar navbar-expand-lg bg-body-tertiary" >
    // dark navbar
    // if(props.Mode==="dark"||props.Mode==="light"){

    // }
    <>
    {/* {switch(props.toggleModeBtn){
      case "pink":
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#f23678"}} > 
        break;
        default:
          <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme={`${props.Mode}`} >
        }} */}
      
    {/* <nav className="navbar navbar-expand-lg "  style ={{backgroundColor:`${props.toggleModeBtn}` }}>  */}
    {/* <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme={`${props.Mode}`} >  */}
    {/* <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme={()=>props.toggleMode (props.mode)} >  */}
        {/* <nav className={`navbar navbar-expand-lg bg-${()=>props.toggleMode(props.mode)} >  */}
    {/* <nav className={`navbar navbar-expand-lg bg-${props.Mode===primary?primary || props.Mode===success?success ||props.Mode===danger?danger}`} >  */}
    <nav className={`navbar navbar-expand-lg bg-${props.Mode}`} > 
      
    
    
    <div className="container-fluid  "  >
      <a className="navbar-brand" style={{color:props.Mode==="light"?"black":"white"}} href="/" >{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" style={{color:props.Mode==="light"?"black":"white"}} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " style={{color:props.Mode==="light"?"black":"white"}} to="/about">{props.about}</Link>
            {/* style ={{color:`${props.Mode==="white"?"black":"white"}`}}  */}
          </li>
          
          
        </ul>
        

        <div className="btn-group mx-3"  role="group" aria-label="Basic outlined example">

          <button type="button" id="1" className="btn "onClick={()=>props.toggleMode("primary")} style={{backgroundColor:"#8cacf4", color:"white"}}>Blue</button>
          <button type="button" id="2" className="btn" onClick={()=>props.toggleMode("success")} style={{backgroundColor:"#7fcac3", color:"white"}}>Green</button>
          <button type="button" id="3" className="btn" onClick={()=>props.toggleMode("danger")}  style={{backgroundColor:"#ff7d80", color:"white"}}>Red</button>
          <button type="button" id="3" className="btn" onClick={()=>props.toggleMode("dark")}    style={{backgroundColor:"grey", color:"white"}}>   Dark</button>
          <button type="button" id="3" className="btn" onClick={()=>props.toggleMode("light")}   style={{backgroundColor:"#e1e1e1", color:"grey"}}> Light</button>
        </div>

        {/* <div className={`form-check form-switch text-${props.Mode==="light"?"dark":"light"}`}> */}
        {/* <div className={`form-check form-switch text-${props.Mode==="light"?"dark":"light"}`}>
          <input className="form-check-input"  onClick={()=>props.toggleMode(null)} type="checkbox" role="switch" id="flexSwitchCheckDefault"/> */}
          {/* <input className="form-check-input"  onClick={()=>props.toggleMode("light")} type="checkbox" role="switch" id="flexSwitchCheckDefault"/> */}
          {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label> */}
        {/* </div> */}
      </div>
    </div>
  </nav>
</>
  )
}
Navbar.propTypes={
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
}

Navbar.defaultProps ={
  title: "Set Title Here",
  about: "Set About Here"
}