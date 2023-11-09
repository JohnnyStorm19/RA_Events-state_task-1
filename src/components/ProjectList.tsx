import { imagesData } from '../data/images-data';
import { IProjectListProps } from '../models';
import '../css/ProjectList.css'

export function ProjectList({category}: IProjectListProps) {
    return (
        <div
            className="projectlist-container"
        >
            { imagesData.map((project, index) => {
                if (category === 'All') {
                    return (
                        <div className="project-box" key={index}>
                            <img src={project.img} />
                        </div>
                    )
                }
                if (project.category === category) {
                    return (
                        <div className="project-box" key={index}>
                            <img src={project.img} />
                        </div>
                    )
                }
                return null
            })}
        </div>
    )
}