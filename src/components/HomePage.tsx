import { useEffect } from "react";
import { context } from './Provider';
import "../css/HomePage.css";


function HomePage() {
    const { scrollToSection } = context();
    return(

        <section id="home-page-section">
            <h1 className="name-title-header">Harrison Mueller</h1>
            
            <div className="page-navigation-links">
                <a className="page-navigation-link" onClick={() => scrollToSection(1)}>About Me</a>
                <a className="page-navigation-link" onClick={() => scrollToSection(2)}>Projects</a>
                <a className="page-navigation-link" onClick={() => scrollToSection(3)}>Contact</a>
            </div>
        </section>
    )
}

export default HomePage;