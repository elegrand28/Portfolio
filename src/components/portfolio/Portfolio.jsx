import React from "react";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import Experience from "../experience/Experience";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Competences from "../competences/Competences";
import Navbar from "../navbar/Navbar";
import { useEffect } from "react";

const Portfolio = () => {
    const onScroll = () => {
        let pixelsFromTop = window.scrollY;
        let documentHeight = document.body.clientHeight;
        let windowHeight = window.innerHeight;
        let difference = documentHeight - windowHeight;
        let percentage = (100 * pixelsFromTop) / difference;
        document.getElementById("bar").style.width = `${percentage}%`;
      };
    
      useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
      });

    return (
        <div className="portfolio">
            <div className='progress_wrapper'>
                <div className="progress_bar" id="bar"></div>
            </div>
            <Navbar/>
            <br/>
            <br/>
            <Header/>
            <Nav/>
            <br/>
            <Competences/>
            <br/>
            <br/>
            <br/>
            <Experience/>
            <br/>
            <Contact/>
            <br/>
            <Footer/>
        </div>        
    );
}

export default Portfolio;