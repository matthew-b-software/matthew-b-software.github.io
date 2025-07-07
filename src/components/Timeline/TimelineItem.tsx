import "./TimelineItem.css"

interface Props {
        title: string,
        date: string,
        description: string,
        icon_src: string,
        icon_alt: string,
        selected: boolean,
        onClick: () => void,
}

/** This component shall contain an item within the timeline */
function TimelineItem({ title, date, description, icon_src, icon_alt, selected, onClick }: Props) {

    return (
        <div className="TimelineItem"> 
            <div className="MainRow">
                <img src={icon_src} alt={icon_alt}/>
                <button className="TimelineButton" onClick={onClick}>
                    <p>{date + ": " + title}</p>
                    <p>&#x2193;</p>
                </button>
            </div>
            <div>
                {selected && <p>{description}</p>}
            </div>
        </div>
    )
}
/* up arrow is 2191 */
export default TimelineItem