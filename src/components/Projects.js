import React from "react";
import clogs from "../project-imgs/clogs-game.png";
import tictactoe from "../project-imgs/tictac.png";
import piglatin from "../project-imgs/pig-latin.png"
import "react-popupbox/dist/react-popupbox.css";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";

const Projects = () => {
    // Clogs
    const openPopupboxClogs = () => {
        const content = (
        <>
        <img className="projects-image-popupbox" src={clogs} alt="Clogs Game project" />
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
        <img className="projects-image-popupbox" src={tictactoe} alt="Tic Tac Toe game project" />
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
    
    const openPopupboxPig = () => {
        const content = (
        <>
        <img className="projects-image-popupbox" src={piglatin} alt="Pig Latin translator project" />
        <p className="para-desc">This is a simple pig latin translator with some fun styling.</p>
        <b className="link-name">Github: </b><a className="hyper-link" onClick={() => window.open("https://github.com/stephbegle/game-projects")}>https://github.com/stephbegle/game-projects</a>
        </>  
        )
        
        PopupboxManager.open({content})
    }

    const popupboxConfigPig = {
        titleBar:{
            enable: true,
            text: "Pig Latin Translator Project",
        },
        fadeIn: true,
        fadeInSpeed: 500,
        fadeOutSpeed: 200
    }

    return (
        <div id="Projects" className="project-wrapper">
            <div className="container">
                <h1 className="text-center py-5"><span style={{color:"var(--primary-pearl-white)"}}>Projects</span></h1>
                        {/*                          */}
                <div className="image-box-wrapper row justify-content-center">
                    <div className="project-image-box" onClick={ openPopupboxClogs }>
                        <img className="project-image" src={clogs} alt="Clogs Text Game" />
                        <div className="overflow"></div>
                    </div>
                        {/*                          */}
                    <div className="project-image-box" onClick={ openPopupboxTicTacToe }>
                        <img className="project-image" src={tictactoe} alt="Tic Tac Toe Game" />
                        <div className="overflow"></div>
                    </div>
                        {/*                          */}
                    <div className="project-image-box" onClick={ openPopupboxPig }>
                        <img className="project-image" src={piglatin} alt="Pig Latin Translator" />
                        <div className="overflow"></div>
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigClogs}/>
        </div>
    )
}

export default Projects
