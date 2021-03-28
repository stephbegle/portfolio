import React from "react"
// React fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-scroll"

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-purple fixed-top" /* here we can change the color of the navbar */>
            <div className="container">

                <a className="navbar-brand" href="#">SB</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={ faBars } style={{ color: "white"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto" /* navbar links to be on the left side: ml (margin left) this is from where we can reference to css to change our link text */> 
                        <li className="nav-item active" /* this list contains a link */>
                            <Link smooth={true} to="Home" offset={-100} className="nav-link" href="#">Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item" /* this list contains a link */>
                            <Link smooth={true} to="About Me" offset={-100} className="nav-link" href="#">About Me<span className="sr-only">(current)</span></Link>
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
                        <button className="resume-button" href="#">Resume</button>
                        {/* <a href="#" className="btn-main-offer">Download Resume</a>   -> maybe will need to make the button tag an anchor tag? then changed all anchor tags with Link tag after installing react-scroll*/}
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar