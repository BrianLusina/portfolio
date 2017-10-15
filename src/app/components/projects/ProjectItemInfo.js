import React from 'react';
import PropTypes from 'prop-types';

/**
 * ProjectItemInfo stateless component
 * Will be used to display more information on a project item in a Folding panel
 * @param projectTitle title of project
 * @param projectTag tag description of project
 * @param projectShortDesc a very short description of project
 * @param projectLongDesc long description of project
 * @param projectUrl Url/link to hosted project
 * @param projectImg: image of project
 * @param projectType: Whether this is an app or website
 */
const ProjectItemInfo = ({
                             projectTitle, projectTag, projectShortDesc, projectLongDesc,
                             projectUrl, projectImg,
                             projectType
                         }) => {

    function getProjectType() {
        let textToDisplay = "";
        switch (projectType) {
            case "app" : {
                return textToDisplay = "Download the app ";
            }

            case "web" : {
                return textToDisplay = "View it ";
            }
            case "docker": {
                return textToDisplay = "View Docker image ";
            }

            default : {

            }
        }

        return (
            <p style="text-align:center">{textToDisplay}
                <a href={projectUrl}>here</a>
            </p>
        );
    }

    return (
        <div className="cd-fold-content single-page">
            <h2>{projectTitle}</h2>
            <em>{projectTag}</em>
            <p>{projectShortDesc}</p>
            <img src={projectImg}/>
            <p>{projectLongDesc}</p>
            <br/>
            {getProjectType()}
        </div>
    );
};

/**
 * Prop validation
 */
ProjectItemInfo.propTypes = {
    projectTitle: PropTypes.string.isRequired,
    projectTag: PropTypes.string,
    projectShortDesc: PropTypes.string,
    projectLongDesc: PropTypes.string.isRequired,
    projectUrl: PropTypes.string.isRequired,
    projectImg: PropTypes.string.isRequired,
    projectType: PropTypes.string.isRequired
};

export default ProjectItemInfo;