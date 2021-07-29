import React from 'react'
import Typed from "react-typed";
function Header() {
    return (
        <div className="header-wraper">
        <div className="main-info"> 
        <h1>web development and websites promotions</h1>
        <Typed
         className="type-text"
         strings={["Web Design", "Web development", "Facebook Ads SMM", "Google Ads"]}
         typeSpeed={40}
         backSpeed={60}
         loop
         />
         <a href="#" className="btn-main-offer">contac me</a>
        </div>
        </div>
    )
}

export default Header
