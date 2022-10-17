import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { RiSuitcaseLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import "./nav.css";
import { useState } from "react";

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt/></a>
            <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><BsFillPersonFill/></a>
            <a href="#competences" onClick={() => setActiveNav('#competences')} className={activeNav === '#competences' ? 'active' : ''}><RiComputerLine/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiSuitcaseLine/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsTelephone/></a>
        </nav>
    );
}

export default Nav;