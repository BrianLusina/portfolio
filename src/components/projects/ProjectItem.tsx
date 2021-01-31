import React from 'react'

interface Props {
    id: string;
    link: string;
    title: string;
    description: string;
    classname?: string;
}

const ProjectItem = ({ id, link, title, description, classname = '' }: Props) => {
    return (
        <li id={id} className="cd-item">
            <a href={link} className={classname}>
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