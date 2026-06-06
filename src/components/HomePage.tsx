import { useEffect } from "react";
import { context } from './Provider';
import "../css/HomePage.css";


function HomePage() {
    const { scrollToSection } = context();
    return(

        <section id="home-page-section">
            <h1 className="name-title-header">Harrison Mueller</h1>
            <h3 className="home-page-subtitle">Fullstack Developer</h3>
            <div className="page-navigation-links">
                <h5><a className="page-navigation-link" onClick={() => scrollToSection(1)}>About Me</a></h5>
                <h5><a className="page-navigation-link" onClick={() => scrollToSection(2)}>Projects</a></h5>
                <h5><a className="page-navigation-link" onClick={() => scrollToSection(3)}>Contact</a></h5>
            </div>
        </section>
    )
}

export default HomePage;