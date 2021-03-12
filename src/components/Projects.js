import React from 'react'
import cardcss from "../project-imgs/cardcss.png"
import holiday from "../project-imgs/holiday.png"
import theme from "../project-imgs/theme.png"

const Projects = () => {
    return (
        <div className="project-wrapper">
            <div className="container">
                <h1 className="text-center py-5">Projects</h1>
                        {/*                          */}
                <div className="image-box-wrapper row justify-content-center">
                    <div className="project-image-box">
                        <img className="project-image" src={cardcss} alt="cardcss example" />
                        <div className="overflow"></div>
                    </div>
                        {/*                          */}
                    <div className="project-image-box">
                        <img className="project-image" src={holiday} alt="holiday example" />
                        <div className="overflow"></div>
                    </div>
                        {/*                          */}
                    <div className="project-image-box">
                        <img className="project-image" src={theme} alt="theme example" />
                        <div className="overflow"></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Projects
