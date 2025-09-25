import { css } from "@emotion/react"


interface Props {
        title: string,
        description: string,
        img_src: string,
        img_alt: string,
        selected: boolean,
        onClick: () => void,
}

/** This component shall contain a work, proj, or school experience */
function ExperienceItem({ title, description, img_src, img_alt, selected, onClick}: Props) {
    return (
        <div css={ProjectItemStyle}>
            <div css={ProjectItemDiv}>{title}</div>
            <button css={ProjectItemButton} type="button" onClick= {() => onClick()}>
                <img src={img_src} alt={img_alt} />
            </button>
            {selected && <div css={ProjectItemDescription}>{description}</div>}
        </div>
    )
}

const ProjectItemStyle = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    fontSize: '2rem',
    padding: '1rem',
})

const ProjectItemDiv = css({
    lineHeight: 1,
    marginBottom: '0.5rem',
    height: 'auto',
})

const ProjectItemButton = css({ 
    padding: '0px',
    border: '0px',
    outline: 'none',
    cursor: 'pointer',
})

const ProjectItemDescription = css({
    marginTop: '1rem',
})

export default ExperienceItem