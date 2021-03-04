import React from "react"
// React fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark" /* here we can change the color of the navbar */>
            <div className="container">

                <a className="navbar-brand" href="#">SB</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={ faBars } style={{ color: "white"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto" /* navbar links to be on the left side: ml (margin left) this is from where we can reference to css to change our link text */> 
                        <li className="nav-item active" /* this list contains a link */>
                            <a className="nav-link" href="#">About Me<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item" /* this list also contains a link */>
                            <a className="nav-link" href="#">Experience</a>
                        </li>
                        <li className="nav-item" /* this list also contains a link */>
                            <a className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item" /* this list also contains a link */>
                            <a className="nav-link" href="#">Contact Me</a>
                        </li>
                        <button className="resume-button" href="#">Resume</button>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar