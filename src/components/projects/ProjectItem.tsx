import React from 'react'

interface Props {
    id: string;
    link: string;
    title: string;
    description: string;
    classname?: string;
    handleOpenProjectItem: () => void
}

const ProjectItem = ({ id, link, title, description, handleOpenProjectItem, classname = '' }: Props) => {

    return (
        <li id={id} className="cd-item">
            <a href={link} className={classname} onClick={handleOpenProjectItem}>
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <b>View More</b>
                </div>
            </a>
        </li>
    )
}

export default ProjectItem;