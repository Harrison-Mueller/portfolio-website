import "../css/HomePage.css";


function HomePage() {
    return(
        <section id="home-page-section">
            <h1 className="name-title-header">Harrison Mueller</h1>
            
            <div className="page-navigation-links">
                <a className="page-navigation-link">About Me</a>
                <a className="page-navigation-link">Projects</a>
                <a className="page-navigation-link">Idk Yet</a>
            </div>
        </section>
    )
}

export default HomePage;