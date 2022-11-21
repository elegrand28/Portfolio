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
            <p href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt/></p>
            <p href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><BsFillPersonFill/></p>
            <p href="#competences" onClick={() => setActiveNav('#competences')} className={activeNav === '#competences' ? 'active' : ''}><RiComputerLine/></p>
            <p href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiSuitcaseLine/></p>
            <p href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsTelephone/></p>
        </nav>
    );
}

export default Nav;