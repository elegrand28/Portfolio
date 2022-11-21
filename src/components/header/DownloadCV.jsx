import React from "react";
import CV from "../../assets/CV.png";
import './downloadCV.css'
//changer le cv
const DownloadCV = () => {
    return(
        <div className="download">
            <p href={CV} download className="btn"><p1>Télécharger CV</p1></p>
        </div>
    );
}

export default DownloadCV;