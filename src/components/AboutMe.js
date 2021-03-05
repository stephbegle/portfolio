import React from "react";
import author from "../DSC_0542.jpg";

const AboutMe = () => {
    return (
        <>
        <div className="container-about py-5">
        <h1 className="header-about">About Me<span style={{color:"aqua"}}>.</span>
        </h1>
            <div className="row">
                
                <div className="col-lg-6 col-xm-12" /* creates a column space on the first half of the page from left to right (so the left side here) */ >
                    <p className="ml-1">Here is some information about myself! There will be more content written in here when I get a chance, so this is just a wordy placeholder useful for envisioning what the final product may look closely to. I want to make this long enough so I can see how the paragraph wraps around the page with this column row class coming from Bootstap. And I think that's enough writing there.</p>
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
