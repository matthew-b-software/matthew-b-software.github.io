import Link from './Link'
import LinkedInLogo from "../assets/linkedin_logo.png"

const links = [
    {
        link: "https://www.linkedin.com/in/matthew-beitler/",
        link_text: "LinkedIn",
        logo_src: LinkedInLogo,
        logo_alt: "LinkedIn Logo",
    },
]

/** This component shall contain my contact info (links, email, & phone) */
function ContactInfo() {
    return (
        <>
            <h1>Contact Me</h1>
            <ul>
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