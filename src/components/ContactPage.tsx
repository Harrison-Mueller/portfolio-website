import "../css/ContactPage.css";


function ContactPage() {
    return(
        <section id="contact-page-section">
            <h2 className="contact-header">Contact</h2>
            <h4 className="contact-subtitle">How To Reach Out</h4>

            <p className="contact-links">
                <h5 className="contact-headers">Email:</h5>
                <a href="mailto:MuellerWH@protonmail.com"><img src="/icons/square-envelope-solid-full.svg" />MuellerWH@protonmail.com</a>
            
                <h5 className="contact-headers">LinkedIn:</h5>
                <a href="https://www.linkedin.com/in/harrison-mueller-35a4053b9/" target="_blank"><img src="/icons/square-linkedin-brands-solid-full.svg" />LinkedIn.com/in/Harrison-Mueller-35a4053b9</a>
            
                <h5 className="contact-headers">GitHub:</h5>
                <a href="https://github.com/Harrison-Mueller" target="_blank"><img src="/icons/square-github-brands-solid-full.svg" />GitHub.com/Harrison-Mueller</a>
            </p>
        
        </section>
    )
}

export default ContactPage;