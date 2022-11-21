import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { GrReactjs } from "react-icons/gr";

const HeaderSocial = () => {
    return(
        <div className="header_social">
            <a href="https://www.linkedin.com/in/evan-le-grand-4ba27a251/" target="_blank"><BsLinkedin color="white" /></a>
            <a href="https://github.com/elegrand28" target="_blank"><BsGithub color="white"/></a>
            <a href="https://fr.reactjs.org/" target="_blank"><GrReactjs color="white"/></a>
        </div>
    );
}

export default HeaderSocial;