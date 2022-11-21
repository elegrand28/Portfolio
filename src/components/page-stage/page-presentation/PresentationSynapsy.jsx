import React from 'react'
import retour from "../../../assets/retour.png";
import synapsy from "../../../assets/synapsy.jpg";
import {Link} from "react-router-dom";
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker } from 'react-leaflet';
import './presentationsynapsy.css';

const PresentationSynapsy = () => {
  return (
    <div>
      <h5>Présentation</h5>
        <div className='btn-retour'>
            <Link to="/synapsy">
                <img 
                    className="retour"
                    src={retour}
                    alt="retour"
                />
            </Link>
        </div>
        <div className='presentation-container'>
            <div className='presentation-text'>
                Adresse : 34 bis Rue Léopold Sédar Senghor, 29900 Concarneau
                <br/>
                <br/>
                Synapsy est une entreprise dont le directeur général est Mr Nicolas SIELLER
                <br/>
                Elle est en activité depuis 16 ans (2008) et son siège actuel se trouve à Concarneau.
                <br/>
                C'est une entreprise de développement de logiciel de gestion commerciale
            </div>
            <div className='presentation-image'>
                <img
                    className='logo' 
                    src={synapsy}
                    alt="logo"
                />
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className='map-container'>
            <div className='map'>
                <MapContainer center={[47.90244, -3.90485]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[47.90244, -3.90485]}/>
                </MapContainer>
            </div>
            <br/>
            <br/>
        </div>     
    </div>
  )
}

export default PresentationSynapsy
