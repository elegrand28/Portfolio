import React from "react";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Synapsy from "./components/page-stage/Synapsy";
import Stage2 from "./components/page-stage/Stage2";
import Tache1 from "./components/page-stage/page-realisation/Tache1";
import Tache2 from "./components/page-stage/page-realisation/Tache2";
import Tache3 from "./components/page-stage/page-realisation/Tache3";
import Tache4 from "./components/page-stage/page-realisation/Tache4";
import PresentationSynapsy from "./components/page-stage/page-presentation/PresentationSynapsy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
            <Router>
                <Routes>
                    <Route path="/" exact element={<Portfolio/>} />
                    <Route path="*" element={<Portfolio/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/synapsy" element={<Synapsy/>} />
                    <Route path="/stage2" element={<Stage2/>} />
                    <Route path="/tache1" element={<Tache1/>} />
                    <Route path="/tache2" element={<Tache2/>} />
                    <Route path="/tache3" element={<Tache3/>} />
                    <Route path="/tache4" element={<Tache4/>} />
                    <Route path="/presentationsynapsy" element={<PresentationSynapsy />} />
                </Routes>
            </Router>   
    );
}

export default App;