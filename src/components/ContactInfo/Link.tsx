import { css } from '@emotion/react'

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
            <div css={SocialLinkImgOutline}>
                <img css={SocialLinkImg} src={logo_src} alt={logo_alt} />
            </div>
            {link_text}
        </a>
    )
}

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

const SocialLinkImgOutline = css({
    marginRight: '10px',
    marginBottom: '2px',

    width: '2.5em',
    height: '2.5em',
})

const SocialLinkImg = css({
    display: 'flex',
    alignItems: 'center',
    
    maxHeight: '100%',
    maxWidth: '100%',
})

export default Link