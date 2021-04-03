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
                        <h5>Learn Academy Bootcamp</h5>
                        <h6>Feb - April 2021</h6><h7>San Diego, Ca</h7>
                        <ul><li>Devoted 480+ hours to building full stack web aulplications using React and Ruby on Rails with JavaScript and Ruby languages.</li><li>Created functional web applications using API with the Rails framework.</li>Developed best practices for version control of full stack applications utilizing pair and mob programming practices with peers. <li>Improved applications using debugging techniques and test driven development with Jest and Rspec.</li></ul>
                    </div>
                </div>
                {/* separating the blocks */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h5 className="year-pos-right">Apple, Inc. - Sales Specialist</h5>
                        <h6>Oct 2019 - March 2020</h6><h7>La Jolla, Ca</h7>
                        <ul><li>Researched product functionalities to aid customer understanding of them with helpful analogies.</li><li>Created functional web applications using API with the Rails framework.</li>Promoted Apple services that would be helpful for user experiences and increased insurance enrollments (AppleCare+) by about 25%.  <li>Helped customers understand phone service activation requirements and steps.</li></ul>
                    </div>
                </div>
                {/* separating the blocks */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h5 className="year-pos-right">UCSD Student Org. - Chief of Marketing</h5>
                    <h6>Sept - June 2020</h6><h7>La Jolla, Ca</h7>
                        <ul>
                            <li>Managed social media accounts and collaborated with UC departments on community development projects. </li><li>Designed flyers and logos for on-campus events.</li>
                        </ul>
                    </div>
                </div>
                {/* separating the blocks */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h5 className="year-pos-right">DFO Global Commerce - Office Manager</h5>
                    <h6>June - Sept 2018</h6><h7>San Diego, Ca</h7>
                        <ul>
                            <li>Organized expense reports along with setting up 50+ company credit cards with major credit card companies on a monthly basis.</li><li>Managed inventory and purchases of supplies for daily office operations.</li>
                        </ul>
                    </div>
                </div>
            </div>

 
      </div>
    )
}

export default Experience