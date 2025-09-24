import { useState } from "react"
import { css } from '@emotion/react'
import TimelineData from "../../data/Timeline.ts"
import TimelineItem from "./TimelineItem"

/** This component shall contain a timeline of my career */
function Timeline() {

    const [Selected, setSelected] = useState(-1);

    return (
        <>
            <h1>Career</h1>

            <div css={TimelineStyle}>
                {TimelineData.map((item, index) => (
                <>
                    <TimelineItem 
                        key={index}
                        title={item.title} 
                        date={item.date}
                        description={item.description} 
                        icon_src={item.icon_src}
                        icon_alt={item.icon_alt}
                        selected={index === Selected} 
                        onClick={ () => setSelected(Selected === index ? -1 : index)} 
                    />

                    {index != (TimelineData.length - 1) && <div css={TimelineConnector}></div>}
                </>
                ))} 
            </div>
        </>
    )
}

const TimelineStyle = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', 
})

const TimelineConnector = css({
    width: '2px',
    height: '20px',
    marginLeft: '29px', /* Center align with TimelineItem icon */
    borderLeft: '2px solid var(--custom-green)'
})

export default Timeline