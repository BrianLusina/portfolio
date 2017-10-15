import React from 'react';
import PropTypes from 'prop-types';

/**
 * ProjectGalleryItem stateless component
 */
const ProjectGalleryItem = ({onClickHandler, projectId, projectTitle, projectShortDesc, projectPageLink}) => {
    return (
        <li id={projectId} className="cd-item">
            <a href={projectPageLink} onClick={onClickHandler}>
                <div>
                    <h2>{projectTitle}</h2>
                    <p>{projectShortDesc}</p>
                    <b>View More</b>
                </div>
            </a>
        </li>
    );
};

/**
 * Prop validation
 */
ProjectGalleryItem.propTypes = {
    onClickHandler: PropTypes.func.isRequired,
    projectId: PropTypes.string.isRequired,
    projectTitle: PropTypes.string.isRequired,
    projectShortDesc: PropTypes.string.isRequired,
    projectPageLink: PropTypes.string.isRequired
};

export default ProjectGalleryItem;