import React from "react";
import retour from "../../assets/retour.png";
import { Link } from "react-router-dom";
import "./about.css";
import Fade from "react-reveal/Fade";

const About = () => {
    return (
        <div className="About">
            <div className="about-header">
                <h5>A propos</h5>
                <div className="btn-retour">
                    <Link to="/">
                    <img className="retour"
                        src={retour}
                        alt="retour"
                    />
                    </Link>
                </div>
            <Fade big cascade>
                <div className="widget">
                        <div className="text_about">                    
                            <div className="titre-about">
                                Pourquoi réaliser ce Portfolio ?
                            </div>
                            <br/>
                            <div className="text">
                                Dans le cadre de ma formation en BTS SIO ( Services Informatiques aux Organisations )
                                un Portfolio est demandé à être réalisé pour pouvoir être présenté lors de l'Épreuve E4 
                                en fin de deuxième année.
                                <br/>
                                <br/>
                                Il doit répertorier les compétences acquise lors des travaux pratiques en cours
                                ainsi que lors des deux stages prévue pendant les deux années du BTS.
                                <br/>
                                <br/>
                                Il doit également comporter un tableau de synthèse récapitulant 
                                l'ensemble des réalisations présentées dans le portfolio.
                            </div>
                        </div>
                        <div className="text_about">                    
                            <div className="titre-about">
                                Quand et comment ce Portfolio a-t-il été réalisé?
                            </div>
                            <br/>
                            <div className="text">
                                Le début de sa réalisation a commencé lors de mon stage de première année
                                dans l'entreprise Synapsy (Concarneau) afin de pratiquer le langage utilisé 
                                par ladite entreprise.
                                <br/>
                                <br/>
                                Il a donc été réalisé en ReactJS.   
                            </div>
                        </div>
                        <div className="text_about">                    
                            <div className="titre-about">
                            écrire quelque chose?
                            </div>
                            <br/>
                            <div className="text">
                                *********************     
                            </div>
                        </div>
                </div>
            </Fade>
            </div>
        </div>
    );
}
// ecrire la suite de la page a propos
export default About;