/**
 * @author lusinabrian on 30/09/17.
 * @notes: Contact form component
 */

import React, {Component} from 'react';
import {sendFormDataApi} from "../../api/theLusinaApi"

export default class ContactForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            email: "",
            name: "",
            message: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    /**
     * Used to send form data
     * @param event event object obtained from DOM element*/
    handleSubmit(event) {
        sendFormDataApi(this.state).then(() => {
            // resolve

        }).catch(error => {
            // reject

        });
        event.preventDefault();
    }

    /**
     * Handles input changes in contact form
     * This will handle both email and name input fields
     * Using ES6 Computed Property name to handle updating the state, the name is the key
     * and the value is the `value` this will come from the event object
     * @param {object} event Event object with data from the input fields
     * */
    handleInputChange(event){
       const target = event.target;
       const value = target.type === 'email' ? target.value : target.value;
       const name = target.name;

       this.setState({
           [name]: value
       });
    }

    render() {
        return (
            <form id="contact-form" method="POST" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="small-6 columns">
                        <span className="input input--kaede">
                            <input className="input__field input__field--kaede" type="text"
                                   name="name" id="contact-name" required
                                   value={this.state.mame}
                                   onChange={this.handleInputChange}/>
                                <label className="input__label input__label--kaede"
                                       htmlFor="contact-name">
                                    <span className="input__label-content
                                     input__label-content--kaede">Name</span>
                                </label>
                        </span>
                    </div>

                    <div className="small-6 columns">
                        <span className="input input--kaede">
                            <input className="input__field input__field--kaede"
                                   type="email" name="email" id="contact-email" required
                                   value={this.state.email}
                                   onChange={this.handleInputChange}/>
                            <label className="input__label input__label--kaede" htmlFor="contact-email">
                                <span className="input__label-content
                                input__label-content--kaede">Email</span>
                            </label>
                        </span>
                    </div>
                </div>

                <div className="row">
                    <div className="small-12 columns">
                        <span className="input input--kaede" style={{height: "150px"}}>
                            <textarea className="input__field input__field--kaede"
                                      type="text" name="message" id="contact-message" required
                                      value={this.state.message}
                                      onChange={this.handleInputChange}/>
                            <label className="input__label input__label--kaede"
                                   htmlFor="contact-message">
                                <span className="input__label-content
                                input__label-content--kaede">Message</span>
                            </label>
                        </span>
                    </div>
                </div>

                <div className="row">
                    <div className="small-12 columns">
                        <div type="submit" id="email-btn-container">
                            <button type="submit" id="email-me-btn"
                                    className="large button animated" data-text="EMAIL ME">
                                <span>S</span><span>E</span><span>N</span><span>D</span>
                                <span>M</span><span>A</span><span>I</span><span>L</span>
                            </button>
                        </div>
                    </div>
                </div>

            </form>
        );
    }
}
