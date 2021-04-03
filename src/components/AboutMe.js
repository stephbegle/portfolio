import React from "react";
import author from "../DSC_0542.jpg";

const AboutMe = () => {
    return (
        <>
        <div id="About-Me" className="container-about py-5">
            <h1 className="header-about"><span style={{color:"var(--primary-pearl-white)"}}>About Me</span>  <span style={{color:"grey"}}></span>
            </h1>
            <div className="row">
                
                <div className="col-lg-6 col-xm-12" /* creates a column space on the first half of the page from left to right (so the left side here) */ >
                    <p>Hi my name is <span style={{color:"aqua"}}>Stephanie</span> !</p> 
                    <p>I'm a <span style={{color:"aqua"}}>software developer</span> based in San Diego, CA who has grown to love building things for the internet. I began my educational journey with the study of Political Science with a focus in Data Analytics at the <span style={{color:"aqua"}}>University of California San Diego</span> and quickly realized the grander curiosity I had for the analytics side of the field, which later prompted my transition into web development!</p>
                    <p>I've been working on building cool web apps using the <span style={{color:"aqua"}}>JavaScript</span> and <span style={{color:"aqua"}}>Ruby</span> languages, and navigating through <span style={{color:"aqua"}}>React</span> and <span style={{color:"aqua"}}>Rails</span> for launching them.</p>
                </div>
                <div className="col-lg-6 col-xm-12" /* the right side here */ >
                    <div className="img-wrap mb-5 mt-2" /* mb margin bottom mt top (bootstrap feature) */ >
                        <img className="profile-img" src={author} alt="author"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutMe
