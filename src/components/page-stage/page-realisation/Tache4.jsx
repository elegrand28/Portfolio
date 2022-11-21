import React from 'react'
import {Link} from "react-router-dom";
import retour from '../../../assets/retour.png';

const Tache4 = () => {
  return (
    <div>
      <h5>Tâche effectuée</h5>
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

export default Tache4
