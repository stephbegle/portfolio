import React from "react"
// React fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-scroll"
import Resume from "../Resume/Steph_Begle_Resume.pdf"
import logo from "../project-imgs/Steph-logo1.png"

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-purple fixed-top" /* here we can change the color of the navbar */>
            <div className="container">

                <a className="navbar-brand" href="#"></a><img src={logo}></img>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={ faBars } style={{ color: "white"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto" /* navbar links to be on the left side: ml (margin left) this is from where we can reference to css to change our link text */> 
                        <li className="nav-item active" /* this list contains a link */>
                            <Link smooth={true} to="Home" offset={-100} className="nav-link" href="#">Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item" /* this list contains a link */>
                            <Link smooth={true} to="About-Me" offset={-100} className="nav-link" href="#">About Me<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item" /* this list also contains Link link */>
                            <Link smooth={true} to="Experience" offset={-100} className="nav-link" href="#">Experience</Link>
                        </li>
                        <li className="nav-item" /* this list also contains Link link */>
                            <Link smooth={true} to="Projects" offset={-100} className="nav-link" href="#">Projects</Link>
                        </li>
                        <li className="nav-item" /* this list also contains Link link */>
                            <Link smooth={true} to="Contact Me" offset={-100} className="nav-link" href="#">Contact Me</Link>
                        </li>
                        <a type="button" className="resume-button" href={Resume} download>Resume</a>
                        {/* <a type="button className=".." href="/path/to/myResume"download>Resume</a> to be able to download my resume */}
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar