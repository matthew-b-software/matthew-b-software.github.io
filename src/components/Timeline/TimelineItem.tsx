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

/** This component shall contain a timeline of my career */
function TimelineItem({ title, date, description, icon_src, icon_alt, selected, onClick }: Props) {

    return (
        <div className="TimelineItem"> 
            <img src={icon_src} alt={icon_alt}> </img>
        
        </div>
    )
}

export default TimelineItem