import React from "react"

const Experience = () => {
    return (
        <div id="Experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1 className="experience-header"><span style={{color:"var(--primary-pearl-white)"}}> Experience</span>  <span style={{color:"grey"}}></span></h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h5>Learn Academy Bootcamp</h5>
                        <h6>
                            <span style={{color:"var(--primary-aqua)"}}>Feb 2021 - April 2021</span>
                        </h6>
                        <h7>San Diego, Ca</h7>
                        <ul className="bullets">
                            <li className="exp-content-pad">Devoted 480+ hours to building full stack web aulplications using React and Ruby on Rails with JavaScript and Ruby languages.</li><li>Created functional web applications using API with the Rails framework.</li>Developed best practices for version control of full stack applications utilizing pair and mob programming practices with peers. <li>Improved applications using debugging techniques and test driven development with Jest and Rspec.</li>
                        </ul>
                    </div>
                </div>
                {/* separating the blocks */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h5 className="year-pos-right">Sales Specialist - Apple, Inc.</h5>
                        <h6 className="dates">
                            <span style={{color:"var(--primary-aqua)"}}>Oct 2019 - March 2020</span>
                        </h6>
                        <h7 className="city-name">La Jolla, Ca</h7>
                        <ul className="bullets">
                            <li className="exp-content-pad">Researched product functionalities to aid customer understanding of them with helpful analogies.</li><li>Created functional web applications using API with the Rails framework.</li>Promoted Apple services that would be helpful for user experiences and increased insurance enrollments (AppleCare+) by about 25%.  <li>Helped customers understand phone service activation requirements and steps.</li>
                        </ul>
                    </div>
                </div>
                {/* separating the blocks */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h5 className="year-pos-left">Chief of Marketing - UCSD Student Org.</h5>
                    <h6>
                        <span style={{color:"var(--primary-aqua)"}}>Sept 2020 - June 2020</span>
                    </h6>
                    <h7>La Jolla, Ca</h7>
                        <ul className="bullets">
                            <li className="exp-content-pad">Managed social media accounts and collaborated with UC departments on community development projects. </li><li>Designed flyers and logos for on-campus events.</li>
                        </ul>
                    </div>
                </div>
                {/* separating the blocks */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                    <h5 className="year-pos-right">Office Manager - DFO Global Commerce</h5>
                    <h6 className="dates">
                        <span style={{color:"var(--primary-aqua)"}}>June 2018 - Sept 2018</span>
                    </h6>
                    <h7>San Diego, Ca</h7>
                        <ul className="bullets">
                            <li className="exp-content-pad">Organized expense reports along with setting up 50+ company credit cards with major credit card companies on a monthly basis.</li><li>Managed inventory and purchases of supplies for daily office operations.</li>
                        </ul>
                    </div>
                </div>
            </div>

 
      </div>
    )
}

export default Experience