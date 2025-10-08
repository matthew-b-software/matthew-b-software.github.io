import { useState } from "react"
import { css } from '@emotion/react'

/** This component shall contain my introduction */
function AboutMe() {

    const [ImgIdx, setImgIdx] = useState(0)
    const [SelectedProj, setSelectedProj] = useState(-1)

    return (
        <>
            <h1>About Me</h1>
        </>
    )
}

const  IntroStyle = css({
    color: 'red'
})

export default AboutMe