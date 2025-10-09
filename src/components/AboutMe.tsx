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
                <div css={AboutMeContainer}>
                    <button css={AboutMeLButton} onClick={() => ImgIdx === 0 ? setImgIdx(AboutMeImgs.length - 1) : setImgIdx((ImgIdx - 1) % AboutMeImgs.length)}>Last Image</button>
                    <img src={AboutMeImgs[ImgIdx].img_src} alt={AboutMeImgs[ImgIdx].img_alt}/>
                    <button css={AboutMeRButton} onClick={() => setImgIdx((ImgIdx + 1) % AboutMeImgs.length)}>Next Image</button>
                </div>
                
                <p> temp text </p>
            </div>
        </>
    )
}

const AboutMeStyle = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    fontSize: '1.5rem',
    lineHeight: '1',
    color: 'var(--custom-black)'
})

const AboutMeContainer = css({
    position: 'relative',
})

const AboutMeLButton = css({
    position: 'absolute',
    left: '0px',
    top: '50%',
})

const AboutMeRButton = css({
    position: 'absolute',
    right: '0px',
    top: '50%',
})

export default AboutMe