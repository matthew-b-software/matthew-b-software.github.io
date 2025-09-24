import { css, Global } from '@emotion/react'
import ContactInfo from './components/ContactInfo/ContactInfo'
import ProjectGrid from './components/ProjectGrid/ProjectGrid'
import Timeline from './components/Timeline/Timeline'


function App() {

  return (
    <div css={AppStyle}>
      { /* Define all h1 styles the same */}
      <Global
        styles={css({
          h1: {
            fontSize: "3.2em",
            lineHeight: '1.1',
            color: 'var(--custom-black)',

            /* underline to text */
            borderBottom: '3px solid var(--custom-green)',
            paddingBottom: '1rem',
            marginBottom: '3rem',
            width: '90%',
          }
        })}
      />
      <h1> website development in progress </h1>
      <Timeline />
      <ProjectGrid />
      <ContactInfo />
    </div>
  )
}

const AppStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  minHeight: '100vh',
  marginLeft: 'clamp(1rem, 4rem, 5rem)',
  marginRight: 'clamp(1rem, 4rem, 5rem)',
  marginTop: '0',
  marginBottom: '16rem',

  backgroundColor: 'var(--custom-white)',
})

export default App
