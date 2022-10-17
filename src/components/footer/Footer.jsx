import React from "react";
import './footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <ul className="links">
                <ul><a href="#">Home</a></ul>
                <ul><a href="#competences">Compétences</a></ul>
                <ul><a href="#experience">Expériences</a></ul>
                <ul><a href="#contact">Contact</a></ul>
            </ul>
            <Link to="/about">A propos</Link>
            <br/>
            <br/>
            <pf>©2022 Evan Le Grand • All Rights Reserved</pf>
        </footer>
    );
}

export default Footer;