import { useState } from 'react'
import ProjectItem from './ProjectItem'
import Projects from  '../data/ProjectGrid.ts'
import "./ProjectGrid.css"

/** This component shall contain experiences and shall work for work, proj, and school sections */
function ProjectGrid() {

    const [Subject, setSubject] = useState<string>("all")
    const [SelectedProj, setSelectedProj] = useState(-1)

    return (
        <>
            <h1>Projects</h1>

            <div id="SubjectSelect">
                <label>
                    <input type="radio" name="subject"  checked={Subject === "all"} onChange={() => setSubject("all")} />
                    <span>All</span>
                </label>
                <label>
                    <input type="radio" name="subject" checked={Subject === "AI"} onChange={() => setSubject("AI")} />
                    <span>AI</span>
                </label>
                <label>
                    <input type="radio" name="subject" checked={Subject === "Embedded"} onChange={() => setSubject("Embedded")} />
                    <span>Embedded</span>
                </label>
                <label>
                    <input type="radio" name="subject" checked={Subject === "DevOps"} onChange={() => setSubject("DevOps")} />
                    <span>DevOps</span>
                </label>
            </div>

            <div id="ProjectGrid">
                {Projects.map((item, index) => (
                (Subject === "all" || item.subject === Subject) &&
                <ProjectItem 
                            key={index}
                            title={item.title} 
                            description={item.description} 
                            img_src={item.img_src} 
                            img_alt={item.img_alt} 
                            selected={SelectedProj === index}
                            onClick={() => setSelectedProj(SelectedProj === index ? -1 : index)}
                            />
                ))}
            </div>
        </>
    )
}

export default ProjectGrid