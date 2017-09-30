/**
 * @author lusinabrian on 30/09/17.
 * @notes: Displays all the projects as a list
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProjectItem from "./ProjectItem";

export default class ProjectList extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    render() {
        return (
            <ul className="cd-gallery">

            </ul>
        );
    }
}
