import { useState } from "react"
import TimelineData from "../../data/Timeline"
import TimelineItem from "./TimelineItem"
import "./Timeline.css"

/** This component shall contain a timeline of my career */
function Timeline() {

    const [selected, setSelected] = useState(-1);

    return (
        <>
            <h1>Career</h1>

            <TimelineItem 
                title="test" 
                date="test" 
                description="test" 
                icon_src="/public/favicon.ico" 
                icon_alt="test" 
                selected={true} 
                onClick={ () => setSelected} />
        </>
    )
}

export default Timeline