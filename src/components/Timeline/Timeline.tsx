import { useState } from "react"
import TimelineData from "../../data/Timeline.ts"
import TimelineItem from "./TimelineItem"
import "./Timeline.css"

/** This component shall contain a timeline of my career */
function Timeline() {

    const [Selected, setSelected] = useState(-1);

    return (
        <>
            <h1>Career</h1>

            {TimelineData.map((item, index) => (
            <TimelineItem 
                key={index}
                title={item.title} 
                date={item.date}
                description={item.description} 
                icon_src={item.icon_src}
                icon_alt={item.icon_alt}
                selected={index === Selected} 
                onClick={ () => setSelected(Selected === index ? -1 : index)} />
            ))}
        </>
    )
}

export default Timeline