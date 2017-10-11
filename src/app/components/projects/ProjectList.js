/**
 * @author lusinabrian on 30/09/17.
 * @notes: Displays all the projects as a list
 */

import React, {Component} from 'react';
import ProjectItem from "./ProjectItem";
import { getAllLocalProjects } from "../../api/lusinaProjectsApi";

export default class ProjectList extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            projects : []
        };

        this.createProjectList = this.createProjectList.bind(this);
    }

    /**
     * Creates project list items from the given state of the application
     * */
    createProjectList(){
        return this.state.projects.map((item, index) => {
            return <ProjectItem
                key={index}
                projectShortDesc={item.projectShortDesc}
                projectTitle={item.projectTitle}
                projectPageLink={item.projectPage}
                projectId={item.id}
            />
        });
    }

    /**
     * Lifecycle Method when the component mounts we want to retrieve all local projects
     * */
    componentDidMount(){
        getAllLocalProjects().then((projects) => {
            this.setState(prevState => {
                return Object.assign(prevState.projects, projects);
            });
        }).catch((error) => {
            console.error(`Encountered error fetching local projects ${error}`);
        })
    }

    render() {
        return (
            <ul className="cd-gallery">
                {this.createProjectList()}
            </ul>
        );
    }
}
