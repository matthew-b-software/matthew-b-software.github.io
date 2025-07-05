import './ContactInfo.css'
import Link from './Link'
import LinkedInLogo from "/src/assets/LinkedIn_Logo.png"
import GitHubLogo from "/src/assets/GitHub_Logo.png"
import EmailLogo from "/src/assets/Email_Logo.png"

const links = [
    {
        link: "https://www.linkedin.com/in/matthew-beitler/",
        link_text: "LinkedIn",
        logo_src: LinkedInLogo,
        logo_alt: "LinkedIn Logo",
    },
    {
        link: "https://github.com/matthew-b-software",
        link_text: "GitHub",
        logo_src: GitHubLogo,
        logo_alt: "GitHub Logo",
    },
    {
        link: "mailto:matthewbsoftware@gmail.com",
        link_text: "matthewbsoftware@gmail.com",
        logo_src: EmailLogo,
        logo_alt: "Email Logo",
    }
]

/** This component shall contain my contact info (links, email, & phone) */
function ContactInfo() {
    return (
        <>
            <h1>Follow or Contact Me</h1>
            <ul id='ContactList'>
                {links.map((item, index) => (
                <li key={index}>
                <Link 
                    link={item.link}
                    link_text={item.link_text}
                    logo_src={item.logo_src}
                    logo_alt={item.logo_alt}
                    />
                </li>
                ))}  
            </ul>
        </>
    )
}

export default ContactInfo