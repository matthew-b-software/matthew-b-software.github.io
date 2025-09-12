import { css } from '@emotion/react'
/* import './Link.css' */

const SocialLink = css({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    flexWrap: 'wrap',
    color: 'var(--custom-black)',

    fontSize: '1.5em',

    ':hover': {
        textDecoration: 'underline',
        color: 'var(--custom-green)'
    }
})

const SocialLinkImage = css({
    marginRight: '15px',

    display: 'flex',
    alignItems: 'center',

    height: 'auto',
    width: 'auto',
    maxHeight: '2.5em',
    maxWidth: '100%',
})

const SocialLinkAnchor = css({
    textDecoration: 'none',
    fontSize: '1.5em',

    ':hover': {
        textDecoration: 'underline',
        color: 'var(--custom-green)'
    }
})



interface Props {
    link: string;
    link_text: string;
    logo_src: string;
    logo_alt: string;
}

/** This component shall contain a link and image to be used in "ContactInfo" */
function Link({ link, link_text, logo_src, logo_alt }: Props) {
    return (
        <a css={SocialLink} href={link} target="_blank" rel={"Visit my " + link_text}>
            <img css={SocialLinkImage} src={logo_src} alt={logo_alt} />
            {link_text}
        </a>
    )
}

export default Link