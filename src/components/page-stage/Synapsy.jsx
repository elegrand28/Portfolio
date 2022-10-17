import React from 'react'
import retour from "../../assets/retour.png";
import {Link} from "react-router-dom";
import synapsy from "../../assets/synapsy.jpg";
import "./synapsy.css";
import Fade from 'react-reveal/Fade';

function Synapsy() {
  return (
    <div>
      <h5>Stage première année</h5>    
          <div className="btn-retour">
              <Link to="/">
                  <img 
                      className="retour"
                      src={retour}
                      alt="retour"
                  />
              </Link>
          </div>
        <Fade big cascade>
          <div className='synapsy-container'>
            <div className='logo-container'>
              <div class='logo'>
                <Link to="/presentationsynapsy">
                  <img
                    src={synapsy}
                    alt="logo-synapsy"
                />
                </Link>
              </div>
            </div>
            <br/>
            <br/>
            <div className='realisations-pro'>
              <Link to="/tache1">
                <article className='realisation'>
                  <h1>Réalisation d'un Portfolio en ReactJS</h1>        
                  <br/>
                  <p>B1.3: Développer la présence en ligne de l'organisation</p>
                  <p>B1.6: Organiser son développement professionel</p>
                </article>
              </Link>
              <Link to="/tache2">
                <article className='realisation'>
                  <h1>Exploitation de la base de donnée de l'entreprise</h1>
                  <br/>
                  <p>B1.1: Gérer le patrimoine informatique</p>
                  <p>B1.5: Mettre à disposition des utilisateurs un service informatique</p>
                </article>
              </Link>
              <Link to="/tache3">
                <article className='realisation'>
                  <h1>Participation aux réunions des tâches journalières effectué / à effectué</h1>
                  <br/>
                  <p>B1.4: Travailler en mode projet</p>
                </article>
              </Link>
              <Link to="/tache4">
                <article className='realisation'>
                  <h1>Écrire une tâche effectuée</h1>
                </article>
              </Link>
            </div>
          </div>
        </Fade>
    </div>
  )
}

export default Synapsy

// Ne pas lister les compétences du bloc 1 et citer les tâches effectuées correspondante
// Lister les tâches effectuées et leurs compétences associées 
// Exemple : Exploitation de la base de données de l'entreprise ( tâche effectuée )
// Gérer le patrimoine informatique - Mettre à disposition des utilisateurs un service informatique ( compétences associés )