import React from 'react'
import ProjectItem from './ProjectItem';
import projects from './projects.json';

const ProjectList = () => {
    return (
        <ul className="cd-gallery">
            {
                projects.map(({id, link, title, description, classname }) => {
                    return <ProjectItem id={id} link={link} title={title} description={description} classname={classname} />
                })
            }        
        </ul>
    )
}

export default ProjectList;