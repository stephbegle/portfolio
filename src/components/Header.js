import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Hi! I'm Stephanie Begle</h1>
                <Typed /* this 'Typed' component was downloaded from the internet*/
                className="typed-text"
                strings={["Welcome!", "Hope you enjoy", "My awesome sight", "This is only a taste", "Of who I am"]}
                typeSpeed={80}
                backSpeed={40}
                loop
                />
                <a href="#" className="btn-main-offer">Download Resume</a>
            </div> 
        </div>
    )
}

export default Header
