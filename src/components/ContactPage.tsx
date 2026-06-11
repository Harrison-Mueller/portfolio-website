import "../css/ContactPage.css";
import email from "/icons/square-envelope-solid-full.svg";
import linkedin from "/icons/square-linkedin-brands-solid-full.svg";
import github from "/icons/square-github-brands-solid-full.svg";
import credly from "/icons/square-credly.svg";


function ContactPage() {
    return(
        <section id="contact-page-section">
            <h2 className="contact-header">Contact</h2>
            <h4 className="contact-subtitle">How To Reach Out</h4>

            <p className="contact-links">
                <h5 className="contact-headers">Email:</h5>
                <a href="mailto:MuellerWH@protonmail.com"><img src={email} />MuellerWH@protonmail.com</a>
            
                <h5 className="contact-headers">LinkedIn:</h5>
                <a href="https://www.linkedin.com/in/harrison-mueller-35a4053b9/" target="_blank"><img src={linkedin} />LinkedIn.com/in/Harrison-Mueller-35a4053b9</a>
            
                <h5 className="contact-headers">GitHub:</h5>
                <a href="https://github.com/Harrison-Mueller" target="_blank"><img src={github} />GitHub.com/Harrison-Mueller</a>

                <h5 className="contact-headers">Credly:</h5>
                <a href="https://www.credly.com/users/harrison-mueller" target="_blank"><img src={credly} />Credly.com/users/Harrison-Mueller</a>
            </p>
        
        </section>
    )
}

export default ContactPage;