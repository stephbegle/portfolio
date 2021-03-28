import React from 'react'
import { FaGithub,
    FaNodeJs,
    FaNode
} from "react-icons/fa";
import { SiJavascript,
    SiRuby,
    SiPython,
    SiReact,
    SiRails, 
    SiPostgresql,
    SiAdobelightroomcc,
    SiAdobephotoshop
} from "react-icons/si"
import { AiOutlineConsoleSql,
    AiFillGithub 
} from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";

const Services = () => {
    return (

        <div className="project-wrapper">
            <div className="container">
                <h1 className="text-center py-5">Some Skills</h1>
            </div>
            <div className="services-icons">
            <SiJavascript 
            className="icon" size={60} />
            <SiRuby 
            className="icon" size={60} />
            <FaNode 
            className="icon" size={90} />
            <SiPython 
            className="icon" size={60} />
            <br />
            <SiReact 
            className="icon" size={60} />
            <SiRails
            className="icon" size={90} />
            <SiPostgresql
            className="icon" size={60} />
            <AiOutlineConsoleSql 
            className="icon" size={70} />
            <br />
            <BiGitBranch 
            className="icon" size={60} />
            <AiFillGithub 
            className="icon" size={60} />
            <SiAdobelightroomcc 
            className="icon" size={55} />
            <SiAdobephotoshop 
            className="icon" size={55} />
            </div>
        </div>
    
    )
}

export default Services