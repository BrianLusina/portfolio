/**
 * @author lusinabrian on 30/09/17.
 * @notes: Displays all the projects as a list
 */

import React, {Component} from 'react';
import ProjectGalleryItem from "./ProjectGalleryItem";
import {getAllLocalProjects} from "../../api/lusinaProjectsApi";
import $ from "jquery";
import PropTypes from "prop-types";


class ProjectGallery extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            projects: [],
        };

        this.createProjectList = this.createProjectList.bind(this);
        this.onOpenProjectInfo = this.onOpenProjectInfo.bind(this);
        this.closeFoldingPanel = this.closeFoldingPanel.bind(this);
    }

    /**
     * Creates project list items from the given state of the application
     * */
    createProjectList() {
        return this.state.projects.map((item, index) => {
            return <ProjectGalleryItem
                key={index}
                onClickHandler={this.onOpenProjectInfo}
                projectShortDesc={item.projectShortDesc}
                projectTitle={item.projectTitle}
                projectPageLink={item.projectPage}
                projectId={item.id}
            />
        });
    }

    /**
     * Opens item information for the given project item
     * @param event
     * */
    onOpenProjectInfo(event) {
        event.preventDefault();
        // const target = event.target;
        let mq = this.props.viewportSize;
        let gallery = $('.cd-gallery');

        if (gallery.offset().top > $(window).scrollTop() && mq !== 'mobile') {
            /* if content is visible above the .cd-gallery - scroll before opening the
             folding panel */
            $('body,html').animate({
                'scrollTop': gallery.offset().top
            }, 100, function () {
                this.props.onToggleFoldingPanel(true);
            });
        } else if (gallery.offset().top + gallery.height() < $(window).scrollTop() + $(window).height() && mq !== 'mobile') {
            /* if content is visible below the .cd-gallery - scroll before opening the
             folding panel */
            $('body,html').animate({
                'scrollTop': gallery.offset().top + gallery.height() - $(window).height()
            }, 100, function () {
                this.props.onToggleFoldingPanel(true);
            });
        } else {
            this.props.onToggleFoldingPanel(true);
        }

        // $(target).attr('href');
        // console.log($(target).attr('href'));
        // console.log(target);
    }

    /**
     * Closes folding panel when ::before a
     * detect click on .cd-gallery::before when the .cd-folding-panel is open
     * */
    closeFoldingPanel(event) {
        const target = event.target;
        if ($(target).is('.cd-gallery') && $('.fold-is-open').length > 0) {
            this.props.onToggleFoldingPanel(false);
        }
        // this.props.onToggleFoldingPanel(false);
    }

    /**
     * Lifecycle Method when the component mounts we want to retrieve all local projects
     * */
    componentDidMount() {
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
            <ul className="cd-gallery" onClick={this.closeFoldingPanel}>
                {this.createProjectList()}
            </ul>
        );
    }
}

ProjectGallery.propTypes = {
    onToggleFoldingPanel: PropTypes.func.isRequired,
    viewPortSize: PropTypes.string.isRequired
};

export default ProjectGallery;