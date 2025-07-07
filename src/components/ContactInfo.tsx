import './ContactInfo.css'
import Link from './Link'
import Links from '../data/ContactInfo.ts'

/** This component shall contain my contact info (links, email, & phone) */
function ContactInfo() {
    return (
        <>
            <h1>Connect with Me</h1>
            <ul id='ContactList'>
                {Links.map((item, index) => (
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