import { useState } from "react"
import { css } from '@emotion/react'
import AboutMeImgs from '../data/AboutMe.ts'

/** This component shall contain my introduction */
function AboutMe() {

    const [ImgIdx, setImgIdx] = useState(0)

    return (
        <>
            <h1>About Me</h1>
            <div css={AboutMeStyle}>
                <div css={AboutMeImg}>
                    <button onClick={() => ImgIdx === 0 ? setImgIdx(AboutMeImgs.length - 1) : setImgIdx((ImgIdx - 1) % AboutMeImgs.length)}>Last Image</button>
                    <img src={AboutMeImgs[ImgIdx].img_src} alt={AboutMeImgs[ImgIdx].img_alt}/>
                    <button onClick={() => setImgIdx((ImgIdx + 1) % AboutMeImgs.length)}>Next Image</button>
                </div>
                
                <p> temp text </p>
            </div>
        </>
    )
}

const AboutMeStyle = css({
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',

    fontSize: '1.5rem',
    lineHeight: '1',
    color: 'var(--custom-black)'
})

const AboutMeImg = css({
    color: 'red'
})

export default AboutMe