import ProjectItem from './ProjectItem'


/** This component shall contain experiences and shall work for work, proj, and school sections */
function ProjectGrid() {
    return (
        <>
            <h1>Projects</h1>

            <div id="SubjectSelect">
                <label>
                    <input type="checkbox" name="subject" value="all" />
                    All
                </label>
                <label>
                    <input type="checkbox" name="subject" value="ai" />
                    AI
                </label>
                <label>
                    <input type="checkbox" name="subject" value="embedded" />
                    Embedded
                </label>
                <label>
                    <input type="checkbox" name="subject" value="devops" />
                    DevOps
                </label>
            </div>

            <div id="ProjectGrid">
                <ProjectItem />
            </div>

        </>
    )
}

export default ProjectGrid