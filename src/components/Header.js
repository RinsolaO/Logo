import React from 'react'
import './styles.css'
import logo from './img/logo.png'
import profileIcon from './img/profile-icon.png'
import bell from './img/bell.png'



const header = () => {
    return (
        <div >
            <div >
                <div className = "nav-bar"> 
                <div className = "logo-title">
                    <a href="#"> <img src={logo} alt="logo"/></a>
                    <a href="#"> LOGO </a> 
                </div>
                <div className="right-icons">
                    <a href="#"> <img src={profileIcon}alt="profile-icon"/> </a>
                    <a href="#"> <img src={bell} alt="bell"/> </a>
                </div>
                </div>
            </div>
            
        </div>
        
    )
}


export default header


