import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h5>Hi, my name is</h5>
                <h1>Stephanie Begle</h1>
                <Typed /* this 'Typed' component was downloaded from the internet*/
                className="typed-text"
                strings={["Welcome!", "hope you enjoy", "my awesome sight", "and yes", "the spelling on this cite was purposeful"]}
                typeSpeed={80}
                backSpeed={40}
                loop
                />
            </div> 
        </div>
    )
}

export default Header
