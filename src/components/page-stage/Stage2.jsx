import React from 'react'
import retour from "../../assets/retour.png";
import { Link } from "react-router-dom";
import stage2 from "../../assets/stage2.jpg";
import Fade from 'react-reveal/Fade';
import "./stage2.css";

function Stage2() {
  return (
    <div>
      <h5>Stage deuxième année</h5>     
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
              <img
                src={stage2}
                alt="logo-stage2"
              />
            </div>
          </div>
          <br/>
          <br/>
          <div className='realisations-pro'>
              <article className='realisation'>
                <h1>Compétence acquise n°1</h1>
              </article>
              <article className='realisation'>
                <h1>Compétence acquise n°2</h1>
              </article>
              <article className='realisation'>
                <h1>Compétence acquise n°3</h1>
              </article>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Stage2

// Ne pas lister les compétences du bloc 1 et citer les tâches effectuées correspondante
// Lister les tâches effectuées et leurs compétences associées 
// Exemple : Exploitation de la base de données de l'entreprise ( tâche effectuée )
// Gérer le patrimoine informatique - Mettre à disposition des utilisateurs un service informatique ( compétences associés )