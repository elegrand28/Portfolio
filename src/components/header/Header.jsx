import React from "react";
import DownloadCV from "./DownloadCV";
import photoexemple from "../../assets/photoexemple.png";
import './header.css';
import HeaderSocial from "./HeaderSocial";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const Header = () => {
    return(
        <ScrollAnimation animateIn="bounceInRight" animateOnce={true}>
            <header>
                <section id="header">
                    <div className="header_container" >
                            <h5>Evan Le Grand</h5>
                            <p>Étudiant **A Remplir**</p>
                        <DownloadCV/>
                        <br/>
                        <HeaderSocial/>
                        <div className="me">
                            <img
                                src={photoexemple}
                                alt="me"
                            />
                        </div>
                    </div>
                </section>
            </header>
        </ScrollAnimation>
    );
}

export default Header;