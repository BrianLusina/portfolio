import React, { Component } from 'react'
import ProjectItem from './ProjectItem';
import projects from './projects.json';

class ProjectList extends Component {

    handleOpenProjectItem = (): void => {
        
    }

    render() { 
        return (
            <ul className="cd-gallery">
                {
                    projects.map(({id, link, title, description, classname }) => {
                        return <ProjectItem 
                            key={id}
                            id={id}
                            link={link}
                            title={title} 
                            description={description} 
                            classname={classname} 
                            handleOpenProjectItem={this.handleOpenProjectItem}
                        />
                    })
                }        
            </ul>
        )
    }
}

export default ProjectList;