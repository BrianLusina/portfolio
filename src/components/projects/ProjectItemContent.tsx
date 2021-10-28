import React from 'react'

interface Props {
    title: string;
    description: string;
    longDescription: string;
    link: string;
    imageUrl: string;
}

const ProjectItemContent = ({ title, description, longDescription, imageUrl, link }: Props) => {
    return (
        <div className="cd-fold-content single-page">
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={imageUrl} />
            <p>{longDescription}</p>
            <p style={{ textAlign: "center"}}>Access project
                <a href={link}>here</a>
            </p>
        </div>
    )
}

export default ProjectItemContent;