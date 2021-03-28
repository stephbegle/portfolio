import React from "react"

const Experience = () => {
    return (
        <div id="Experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2020</h3>
                        <p>Lorem ipsum..Here is some information about myself! There will be more content written in here when I get a chance, so this is just a wordy placeholder useful for envisioning what the final product may look closely to. I want to make this long enough so I can see how the paragraph wraps around the page with this column row class coming from Bootstap. And I think that's enough writing there.</p>
                    </div>
                </div>
                {/* separating the blocks */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3 className="year-pos-right">2019</h3>
                        <p>Lorem ipsum..Here is some information about myself! There will be more content written in here when I get a chance, so this is just a wordy placeholder useful for envisioning what the final product may look closely to. I want to make this long enough so I can see how the paragraph wraps around the page with this column row class coming from Bootstap. And I think that's enough writing there.</p>
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