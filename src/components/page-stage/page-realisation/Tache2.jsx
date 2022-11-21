import React from 'react'
import {Link} from "react-router-dom";
import retour from '../../../assets/retour.png';
import dbeaver from '../../../assets/dbeaver.png';
import gestionCaisse from '../../../assets/gestion des caisses.jpg';
import filtreCaisse from '../../../assets/filtreCaisse.png';
import caisseCompteClient from '../../../assets/caisseCompteClient.png';
import magasinCompteClient from '../../../assets/magasinCompteClient.png';
import './tache2.css';
import ModalImage from "react-modal-image";
import Fade from 'react-reveal/Fade';

const Tache2= () => {

  return (
    <div>
      <h5>Exploitation de la BDD de l'entreprise</h5>
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
        <div className='image'>
          <img 
            className='dbeaver'
            src={dbeaver}
            alt='dbeaver'
          />
        </div>
          <div className='AppImage'>
            <ModalImage
              small={gestionCaisse}
              large={gestionCaisse}
            />
            Affichage des caisses
          </div>
          <div className='AppImage'>
            <ModalImage
              small={filtreCaisse}
              large={filtreCaisse}
            />
            Filtre de recherche 
          </div>
          
          <div className='AppImage'>
            <ModalImage
              small={magasinCompteClient}
              large={magasinCompteClient}
            />
            Affichage des magasins par compte client
          </div>
          <div className='AppImage'>
            <ModalImage
              small={caisseCompteClient}
              large={caisseCompteClient}
            />
            Affichage des caisses par compte client
          </div>      
      </Fade>
    </div>
  )  
}

export default Tache2