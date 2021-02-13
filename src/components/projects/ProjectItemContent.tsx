import React from 'react'

interface Props {
    body: string;
}

const ProjectItemContent = ({ body }: Props) => {
    return (
        <div className="cd-fold-content single-page">
            <h2>ACalc</h2>
            <em>A simple Material design calculator.</em>
            <p>A small pocket friendly material design calculator build with material design principles</p>
            <img src="img/pro-shots/acalc_screenshot.png" />
            <p>
                Designed with simplicity in mind and compact with complexity yet very simple to navigate and interact with.
            </p>
            {/* <p style="text-align:center">Download the app <a href="https://play.google.com/store/apps/details?id=com.netlify.thelusina.acalc">here</a>
            </p> */}
        </div>
    )
}

export default ProjectItemContent;