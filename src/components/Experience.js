import React from "react"

const Experience = () => {
    return (
        <div id="Experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1><span style={{color:"grey"}}>—— Experience</span>  <span style={{color:"grey"}}>——</span></h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Learn Academy Bootcamp</h3>
                        <h5>Feb - April 2021</h5><h7>San Diego, Ca</h7>
                        <ul><li>Devoted 480+ hours to building full stack web aulplications using React and Ruby on Rails with JavaScript and Ruby languages.</li><li>Created functional web applications using API with the Rails framework.</li>Developed best practices for version control of full stack applications utilizing pair and mob programming practices with peers. <li>Improved applications using debugging techniques and test driven development with Jest and Rspec.</li></ul>
                    </div>
                </div>
                {/* separating the blocks */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3 className="year-pos-right">Apple, Inc. - Sales Specialist</h3>
                        <h5>Oct 2019 - March 2020</h5><h7>Sales Specialist</h7>
                        <ul><li>Researched product functionalities to aid customer understanding of them with helpful analogies.</li><li>Created functional web applications using API with the Rails framework.</li>Promoted Apple services that would be helpful for user experiences and increased insurance enrollments (AppleCare+) by about 25%.  <li>Helped customers understand phone service activation requirements and steps.</li></ul>
                    </div>
                </div>
                {/* separating the blocks */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2018</h3>
                        <p>Lorem ipsum..Here is some information about myself! There will be more content written in here when I get a chance, so this is just a wordy placeholder useful for envisioning what the final product may look closely to. I want to make this long enough so I can see how the paragraph wraps around the page with this column row class coming from Bootstap. And I think that's enough writing there.</p>
                    </div>
                </div>
                {/* separating the blocks */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3 className="year-pos-right">2017</h3>
                        <p>Lorem ipsum..Here is some information about myself! There will be more content written in here when I get a chance, so this is just a wordy placeholder useful for envisioning what the final product may look closely to. I want to make this long enough so I can see how the paragraph wraps around the page with this column row class coming from Bootstap. And I think that's enough writing there.</p>
                    </div>
                </div>
            </div>

 
      </div>
    )
}

export default Experience