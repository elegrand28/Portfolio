import React from 'react'
import {Link} from "react-router-dom";
import retour from '../../../assets/retour.png';
import dbeaver from '../../../assets/dbeaver.png';
import './tache1.css';

const Tache1= () => {
  return (
    <div>
      <h5>Réalisation d'un Portfolio</h5>
      <div className='btn-retour'>
        <Link to="/synapsy">
            <img 
                className="retour"
                src={retour}
                 alt="retour"
            />
        </Link>
      </div>
    </div>
  )
}

export default Tache1
