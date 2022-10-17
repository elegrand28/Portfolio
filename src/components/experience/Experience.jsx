import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './experience.css';
import { Carousel } from "react-responsive-carousel";
import synapsy from "../../assets/synapsy.jpg";
import stage2 from "../../assets/stage2.jpg";
import { Link } from "react-router-dom";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const Experience = () => {
    return (
        <section id='experience'>
            <div className="experience-container">
                <div className="separateur"/>
                <br/>
                <div className="separateur"/>
                <br/>
                <div className="separateur"/>
                <br/>
                <h5>Mes Expériences</h5> 
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} autoplaySpeed={1000} >
                        <Link to="/synapsy">
                        <div className="image">
                            <img src={synapsy} alt="slide 1"/>
                        </div>
                        </Link>
                        <Link to="/stage2">
                        <div className="image">
                            <img src={stage2} alt="slide 2"/>
                        </div>
                        </Link>
                    </Carousel> 
                </ScrollAnimation>
            </div>
        </section>
    );
}

export default Experience;