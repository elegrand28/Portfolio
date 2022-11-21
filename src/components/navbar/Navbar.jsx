import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import CookieConsent from 'react-cookie-consent';

function Navbar() {
  return (
    <div className='navbar'>
        <Fade big cascade>
            <div className='nav-items'>
                <Link to="/synapsy">
                    <div className='item'>
                        <p>Stage première année</p>
                    </div>
                </Link>
                <Link to="/stage2">
                    <div className='item'>
                        <p>Stage deuxième année</p>
                    </div>
                </Link>
            </div>
            <br/>
            <br/>
            <br/>
                <h5>BIENVENUE SUR MON PORTFOLIO</h5>
                <div className='decor-nav'>
                    <p-nav>____________________________</p-nav>
                    <br/>
                    <br/>
                    <p>Portfolio réalisé en vue de l'épreuve E4 du BTS SIO</p>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
        </Fade>
        <CookieConsent
            location='bottom'
            buttonText="J'accepte"
            cookieName="Cookie"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "20px" }}
            expires={150}
        >
            <span style={{ fontSize: "20px" }}>Ce site utilise des cookies</span>
        </CookieConsent>
    </div>
  )
}

export default Navbar
