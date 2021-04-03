import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div id="Home" className="header-wraper">
            <div className="main-info">
                <h5>Hi, my name is</h5>
                <h1>Stephanie Begle</h1>
                <Typed /* this 'Typed' component was downloaded from the internet*/
                className="typed-text"
                strings={["Welcome!", "Soft skills?", "Leadership", "Collaboration", "Research", "Persistence", "Resourcefulness"]}
                typeSpeed={80}
                backSpeed={40}
                loop
                />
            </div> 
        </div>
    )
}

export default Header
