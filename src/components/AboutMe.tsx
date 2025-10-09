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
                    <button css={[AboutMeButton, AboutMeLButton]} onClick={() => changeImg(ImgIdx, AboutMeImgs.length, setImgIdx, true)}>
                        <img src="/test_arrow.png" alt="Left Arrow"/>
                    </button>
                    <img src={AboutMeImgs[ImgIdx].img_src} alt={AboutMeImgs[ImgIdx].img_alt}/>
                    <button css={[AboutMeButton, AboutMeRButton]} onClick={() => changeImg(ImgIdx, AboutMeImgs.length, setImgIdx, false)}>
                        <img src="/test_arrow.png" alt="Right Arrow"/>
                    </button>
                </div>
                
                <p> temp text </p>
            </div>
        </>
    )
}

function changeImg(ImgIdx: number, Length: number, setImgIdx: (value: number) => void, IsLeft: boolean) {
    console.log(ImgIdx)
    if (IsLeft) {
        ImgIdx === 0 ? setImgIdx(Length - 1) : setImgIdx((ImgIdx - 1) % Length)
    } else {
        setImgIdx((ImgIdx + 1) % Length)
    }
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

const AboutMeButton = css({
    backgroundColor: 'var(--custom-green)',
    maxHeight: '2.5rem',
    maxWidth: '100%',
    border: 'none',
    padding: '0',

    ':hover': {
        cursor: 'pointer',
    }
})

const AboutMeLButton = css({
    position: 'absolute',
    left: '0px',
    top: '50%',
    backgroundColor: 'var(--custom-green)',
})

const AboutMeRButton = css({
    position: 'absolute',
    right: '0px',
    top: '50%',
})

export default AboutMe