import React from "react";
import "./competences.css";
import {AiOutlineHtml5} from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";                // react-icons => librairie de logo par react
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { TbCSharp } from "react-icons/tb";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaPhp } from "react-icons/fa";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import '@material/react-linear-progress/dist/linear-progress.css';
import { LinearProgress, Typography, Box } from '@material-ui/core';

function NumberLinearProgress(props) {
    return (
        <Box display="flex" alignItemms="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" value={props.value}/>
            </Box>  
            <Typography variant="Hedline6" color="#fff">
                {`${props.value}%`}
            </Typography>
        </Box>
    );
}

const Competences = () => {
    return (
        
        <section id='competences'>
            <div className="competences-container">
                <div className="separateur"/>
                <br/>
                <div className="separateur"/>
                <br/>
                <div className="separateur"/>
                <br/>
                    <h5>Compétences</h5>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <div className="container competences_container">           
                        <div className="competences_content">
                            <div className="competences_card">
                                <div className="languages">
                                    <article className="language">
                                        <h3><AiOutlineHtml5/></h3>
                                        <h4>HTML</h4>
                                        <br/>
                                        {/* <br/>
                                        <div className="progressBar">
                                            <NumberLinearProgress value={50} />
                                        </div> */}
                                    </article> 
                                    <article className="language">
                                        <h3><IoLogoCss3/></h3>
                                        <h4>CSS</h4>
                                        <br/>
                                        {/* <br/>
                                        <div className="progressBar">
                                            <NumberLinearProgress value={50} />
                                        </div> */}
                                    </article>
                                    <article className="language">
                                        <h3><TbBrandJavascript/></h3>
                                        <h4>Javascript</h4>
                                        <br/>
                                        {/* <br/>
                                        <div className="progressBar">
                                            <NumberLinearProgress value={50} />
                                        </div> */}
                                    </article>
                                    <article className="language">
                                        <h3><GrReactjs/></h3>
                                        <h4>React</h4>
                                        <br/>
                                        {/* <br/>
                                        <div className="progressBar">
                                            <NumberLinearProgress value={50} />
                                        </div> */}
                                    </article>
                                    <article className="language">
                                        <h3><TbCSharp/></h3>
                                        <h4>C sharp</h4>
                                        <br/>
                                        {/* <br/>
                                        <div className="progressBar">
                                            <NumberLinearProgress value={50} />
                                        </div> */}
                                    </article>
                                    <article className="language">
                                        <h3><AiOutlineConsoleSql/></h3>
                                        <h4>SQL</h4>
                                        <br/>
                                        {/* <br/>
                                        <div className="progressBar">
                                            <NumberLinearProgress value={50} />
                                        </div> */}
                                    </article>    
                                    <article className="language">
                                        <h3><FaPhp/></h3>
                                        <h4>PHP</h4>
                                        <br/>
                                        {/* <br/>
                                        <div className="progressBar">
                                            <NumberLinearProgress value={50} />
                                        </div> */}
                                    </article>                        
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
        
    );
}

export default Competences;

// Commentaire = slider avec % niveau compréhension langages