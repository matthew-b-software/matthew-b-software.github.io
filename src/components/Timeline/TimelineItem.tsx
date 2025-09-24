import { css } from '@emotion/react'
// import "./TimelineItem.css"

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
        <div css={TimelineItemStyle}> 
            <div css={TimelineItemRow}>
                <img css={TimelineItemImg} src={icon_src} alt={icon_alt}/>
                <button css={TimelineItemButton} onClick={onClick}>
                    <p css={TimelineItemText}>{date + ": " + title}</p>
                    <p css={TimelineItemText}>{selected ? "\u2191": "\u2193" /* up arrow is unicode 2191 */ }</p> 
                </button>
            </div>
            {selected && <div>{description}</div>}
        </div>
    )
}

const TimelineItemStyle = css({
    fontSize: '1.5rem',
    lineHeight: '1',
    color: 'var(--custom-black)', 
})

const TimelineItemRow = css({
    display: 'flex',
    alignItems: 'center',
})

const TimelineItemImg = css({
    height: 'auto',
    width: 'auto',
    maxHeight: '2.5em',
    maxWidth: '100%',
})

const TimelineItemButton = css({
    cursor: 'pointer',
    border: 'none',
    fontFamily: 'inherit',

    display: 'flex',
    alignItems: 'center',

    ':hover': {
        color: 'var(--custom-green)',
    }
})

const TimelineItemText = css({
    margin: '0',
    marginLeft: '10px',
    fontSize: '1.5rem',
})

export default TimelineItem