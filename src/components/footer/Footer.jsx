import React from "react";
import './footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <ul className="links">
                <ul><p href="#">Home</p></ul>
                <ul><p href="#competences">Compétences</p></ul>
                <ul><p href="#experience">Expériences</p></ul>
                <ul><p href="#contact">Contact</p></ul>
            </ul>
            <Link to="/about">A propos</Link>
            <br/>
            <br/>
            <pf>©2022 Evan Le Grand • All Rights Reserved</pf>
        </footer>
    );
}

export default Footer;