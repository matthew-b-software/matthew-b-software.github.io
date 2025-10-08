import { useState } from "react"
import { css } from '@emotion/react'
import AboutMeImgs from '../data/AboutMe.ts'

/** This component shall contain my introduction */
function AboutMe() {

    const [ImgIdx, setImgIdx] = useState(0)

    return (
        <>
            <h1>About Me</h1>
            <div></div>
            <p> temp text </p>
        </>
    )
}

const  IntroStyle = css({
    color: 'red'
})

export default AboutMe