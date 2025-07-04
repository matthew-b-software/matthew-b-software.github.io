import Link from './Link'

const links = [
    {
        link: "https://www.linkedin.com/in/matthew-beitler/",
        link_text: "LinkedIn",
        logo_scr: "../assets/linkedin-logo.png",
        logo_alt: "LinkedIn Logo",
    },
    {
        link: "https://www.linkedin.com/in/matthew-beitler/",
        link_text: "LinkedIn",
        logo_scr: "../assets/linkedin-logo.png",
        logo_alt: "LinkedIn Logo",
    }
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
                    logo_scr={item.logo_scr}
                    logo_alt={item.logo_alt}
                    />
                </li>
                ))}  
            </ul>
        </>
    )
}

export default ContactInfo