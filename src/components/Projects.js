import React from 'react';
import cardcss from "../project-imgs/cardcss.png";
import holiday from "../project-imgs/holiday.png";
import theme from "../project-imgs/theme.png";
import Clogs from "../project-imgs/clogs-game.png";
import TicTacToe from "../project-imgs/tictac.png";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import { FaBlackberry } from 'react-icons/fa';

const Projects = () => {
    // Clogs
    const openPopupboxClogs = () => {
        const content = (
        <>
        <img className="projects-image-popupbox" src={Clogs} alt="Clogs Game project" />
        <p className="para-desc">This is a description of the project.</p>
        <b className="link-name">Github: </b><a className="hyper-link" onClick={() => window.open("https://github.com/stephbegle/game-projects")}>https://github.com/stephbegle/game-projects</a>
        </>  
        )
        
        PopupboxManager.open({content})
    }

    const popupboxConfigClogs = {
        titleBar:{
            enable: true,
            text: "Clogs Game Project",
        },
        fadeIn: true,
        fadeInSpeed: 500,
        fadeOutSpeed: 200
    }

    // TicTacToe
    const openPopupboxTicTacToe = () => {
        const content = (
        <>
        <img className="projects-image-popupbox" src={TicTacToe} alt="Tic Tac Toe Game project" />
        <p className="para-desc">This is a description of the project.</p>
        <b className="link-name">Github: </b><a className="hyper-link" onClick={() => window.open("https://github.com/stephbegle/game-projects")}>https://github.com/stephbegle/game-projects</a>
        </>  
        )
        
        PopupboxManager.open({content})
    }

    const popupboxConfigTicTacToe = {
        titleBar:{
            enable: true,
            text: "Tic Tac Toe Game Project",
        },
        fadeIn: true,
        fadeInSpeed: 500,
        fadeOutSpeed: 200
    }

    return (
        <div id="Projects" className="project-wrapper">
            <div className="container">
                <h1 className="text-center py-5">Projects</h1>
                        {/*                          */}
                <div className="image-box-wrapper row justify-content-center">
                    <div className="project-image-box" onClick={openPopupboxClogs}>
                        <img className="project-image" src={Clogs} alt="Clogs Game example" />
                        <div className="overflow"></div>
                    </div>
                        {/*                          */}
                    <div className="project-image-box" onClick={openPopupboxTicTacToe}>
                        <img className="project-image" src={TicTacToe} alt="Tic Tac Toe example" />
                        <div className="overflow"></div>
                    </div>
                        {/*                          */}
                    <div className="project-image-box">
                        <img className="project-image" src={theme} alt="theme example" />
                        <div className="overflow"></div>
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigClogs}/>
        </div>
    )
}

export default Projects
