import "../css/AboutPage.css";


function AboutPage() {
    return(
        <section id="about-page-section">
            <h2 className="about-header">About Me</h2>
            <h4 className="about-subtitle">Who I Am</h4>
            <p className="about-text">My name is Harrison Mueller. </p>
            <br />
            <p className="about-text">
                When I was a child, I discovered my love for programming through lego robotics. Six years ago I taught myself Object Oriented Programming for use in competitive robotics and game making.
            </p>
            <br />
            <p className="about-text">
            Now as an adult, I've delved into web design and been certified as a Fullstack Web Developer. I continually hone my skills through projects like the ones shown on this page.
            </p>
            <br />
            <p className="about-text">My mission is to design applications that effectively accomplish their intended purpose for their users.</p>
        </section>
    )
}

export default AboutPage;