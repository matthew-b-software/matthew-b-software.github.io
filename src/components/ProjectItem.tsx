import "./ProjectItem.css"

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
        <div className="ProjectItem">

            <div>{title}</div>
            <button type="button" onClick= {() => onClick()}>
                <img src={img_src} alt={img_alt} />
            </button>
            {selected && <div className="ProjectDescription">{description}</div>}
        </div>
    )
}

export default ExperienceItem