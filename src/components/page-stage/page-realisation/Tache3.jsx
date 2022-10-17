import React from 'react'
import {Link} from "react-router-dom";
import retour from '../../../assets/retour.png';
import { BsDiscord } from 'react-icons/bs';
import dev from '../../../assets/illustrateDevelopment.jpg';
import fleche from '../../../assets/VersDroite.png';
import conv from '../../../assets/conv.jpg';
import "./tache3.css";
import Fade from 'react-reveal/Fade';

const Tache3= () => {
  return (
    <div>
      <h5>Réunion des tâches journalières</h5>
      <div className='btn-retour'>
        <Link to="/synapsy">
            <img 
                className="retour"
                src={retour}
                 alt="retour"
            />
        </Link>
      </div>
      <Fade big cascade>
        <div className='logo-discord'>
          <BsDiscord />
        </div>
        <br/>
        <div className='day'>
          <div className='day-Image'>
            <img 
              className='dev'
              src={dev}
              alt="pic1"
            />
            <br/>
          9h à 12h30
          </div>       
          <div className='day-Image'>
            <img 
              className='fleche'
              src={fleche}
              alt="pic2"
            />
            <br/>
            Retour a 13h30
          </div>
          <div className='day-Image'>
            <img 
              className='image'
              src={conv}
              alt="pic3"
            />
            <br/>
            14h réunion Discord
          </div>
          <div className='day-Image'>
            <img 
              className='fleche'
              src={fleche}
              alt="pic4"
            />
            <br/>
            Fin de la réunion vers 14h25
          </div>
          <div className='day-Image'>
            <img 
              className='dev'
              src={dev}
              alt="pic5"
            />
            <br/>
            Fin de la journée à 17h
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Tache3