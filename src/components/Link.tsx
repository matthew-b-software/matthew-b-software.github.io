import './Link.css'

interface Props {
    link: string;
    link_text: string;
    logo_src: string;
    logo_alt: string;
}

/** This component shall contain a link and image to be used in "ContactInfo" */
function Link({ link, link_text, logo_src, logo_alt }: Props) {
    return (
        <>
            <a href={link} target="_blank" rel={"Visit my " + link_text} className="SocialLink">
                <img src={logo_src} alt={logo_alt} />
                {link_text}
            </a>
        </>
    )
}

export default Link