import './App.css'
import ContactInfo from './components/ContactInfo/ContactInfo'
import ProjectGrid from './components/ProjectGrid/ProjectGrid'
import Timeline from './components/Timeline/Timeline'


function App() {

  return (
    <div id='MainContainer'>
      <h1> website development is in progress </h1>
      <Timeline />
      <ProjectGrid />
      <ContactInfo />
    </div>
  )
}

export default App
