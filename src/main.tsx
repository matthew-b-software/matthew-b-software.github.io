import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { css, Global } from '@emotion/react'
import App from './App.tsx'

const MainStyle = css({
  /* Reset document default */
  'html, body': { 
    margin: '0',
    height: '100%',
    width: '100%',
  },

  /* Define color scheme and styles */
  /* colors from: https://colorhunt.co/palette/748873d1a980e5e0d8f8f8f8 */
  ':root': {
    '--custom-green': '#748873',
    '--custom-brown': '#D1A980',
    '--custom-tan': '#E5E0D8',
    '--custom-white': '#F8F8F8',
    '--custom-black': '#122332',

    fontFamily: "'Times New Roman', Times, serif",
    fontSynthesis: 'none',
    textRendering: 'auto',
    '-webkit-font-smoothing': 'initial',
    '-moz-osx-font-smoothing': 'initial',
    lineHeight: 0,
    fontWeight: 0,
    textAlign: 'center',

    margin: 0,
    padding: 0,

    colorScheme: 'light',
    color: 'var(--custom-black)',
    backgroundColor: 'var(--custom-tan)',
  },

  /* Dark mode styles */
  '@media (prefers-color-scheme: dark)': {
    ':root': {
      color: '#213547',
      backgroundColor: '#ffffff',
    },
    'a:hover': {
      color: '#747bff',
    },
    'button': {
      backgroundColor: '#f9f9f9',
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global
      styles={MainStyle}
    />
    <App />
  </StrictMode>,
)