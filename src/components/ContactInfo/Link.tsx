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
        <div css={LinkStyle}>
            <a css={LinkAnchor} href={link} target="_blank" rel={"Visit my " + link_text}>
                <div css={LinkImgContainer}>
                    <img css={LinkImg} src={logo_src} alt={logo_alt} />
                </div>
                <p>{link_text}</p>
            </a>
        </div>


        /*
        <a css={SocialLink} href={link} target="_blank" rel={"Visit my " + link_text}>
            <div css={SocialLinkContent}>
                <div css={SocialLinkImgContainer}>
                    <img css={SocialLinkImg} src={logo_src} alt={logo_alt} />
                </div>
                {link_text}
            </div>
        </a>
        */
    )
}

const LinkStyle = css({
    /* 
        flex and center limit anchor hover
        to text and img, not the parent div
     */
    display: 'flex',
    alignItems: 'center',

    flexWrap: 'wrap',
    marginBottom: '10px',
})

const LinkAnchor = css({
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',

    textDecoration: 'none',
    color: 'var(--custom-black)',
    fontSize: '1.5em',

    ':hover': {
        textDecoration: 'underline',
        color: 'var(--custom-green)'
    }
})

const LinkImgContainer = css({
    maxWidth: '2.5em',
    maxHeight: '2.5em',
    marginRight: '10px',
    alignContent: 'center',
})

const LinkImg = css({  
    maxHeight: '100%',
    maxWidth: '100%',
})

export default Link