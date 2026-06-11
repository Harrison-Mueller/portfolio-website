import "../css/AboutPage.css";


function AboutPage() {
    return(
        <section id="about-page-section">
            <h2 className="about-header">About Me</h2>
            <h4 className="about-subtitle">Who I Am</h4>
            <p className="about-intro">My name is Harrison Mueller. </p>
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
            <br />
            <br />
            <p><h5>Education:</h5></p>
            {/* <p><a className="about-link" href="https://www.credly.com/users/harrison-mueller" target="_blank">Credly.com/users/harrison-mueller</a></p> */}
            <p><hr /></p>
            <p className="education-text">Western Governors University <br /><i>Fullstack Engineering Certificate</i></p>
            <br />
            <p className="education-text">Amazon Web Services Training and Certification <br /><i>AWS Certified Cloud Practitioner Certificate</i></p>
            <br />
            <p className="education-text">Linux Professional Institute <br /><i>Linux Essentials Certificate</i></p>
        </section>
    )
}

export default AboutPage;