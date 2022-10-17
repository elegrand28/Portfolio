import React from "react";
import CV from "../../assets/CV.png";
import './downloadCV.css'
//changer le cv
const DownloadCV = () => {
    return(
        <div className="download">
            <a href={CV} download className="btn"><p1>Télécharger CV</p1></a>
        </div>
    );
}

export default DownloadCV;