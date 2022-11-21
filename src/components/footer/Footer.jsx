import React from "react";
import './footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <ul className="links">
                <ul><P href="#">Home</P></ul>
                <ul><P href="#competences">Compétences</P></ul>
                <ul><P href="#experience">Expériences</P></ul>
                <ul><P href="#contact">Contact</P></ul>
            </ul>
            <Link to="/about">A propos</Link>
            <br/>
            <br/>
            <pf>©2022 Evan Le Grand • All Rights Reserved</pf>
        </footer>
    );
}

export default Footer;