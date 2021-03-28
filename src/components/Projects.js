import React from 'react'
import cardcss from "../project-imgs/cardcss.png"
import holiday from "../project-imgs/holiday.png"
import theme from "../project-imgs/theme.png"
import { PopupboxManager, PopupboxContainer } from "react-popupbox";

const Projects = () => {
    // cardcss
    const openPopupboxCardcss = () => {
        const content = (
          <>
        <img src={cardcss} alt="Cardcss project" />
        <p>This is a description of the project.</p>
        <b>Github:</b><a className="hyper-link" onClick={() => window.open("https://github.com/stephbegle/game-projects")}>https://github.com/stephbegle/game-projects</a>
        </>  
        )
        
        PopupboxManager.open({content})
    }

    const popupboxConfigCardcss = {

    }

    return (
        <div className="project-wrapper">
            <div className="container">
                <h1 className="text-center py-5">Projects</h1>
                        {/*                          */}
                <div className="image-box-wrapper row justify-content-center">
                    <div className="project-image-box" onClick={openPopupboxCardcss}>
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
            <PopupboxContainer {...popupboxConfigCardcss}/>
        </div>
    )
}

export default Projects
