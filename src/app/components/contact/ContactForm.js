/**
 * @author lusinabrian on 30/09/17.
 * @notes: Contact form
 */

import React, {Component} from 'react';
import { sendFormDataApi } from "../../api/theLusinaApi"

export default class ContactForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            senderEmail :"",
            senderName : "",
            senderMessage: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    /**
     * Used to send form data
     * @param event event object obtained from DOM element*/
    handleSubmit(event){
        event.preventDefault();
        let senderData = {
            senderName: this.state.senderName,
            senderEmail: this.state.senderEmail,
            senderMessage: this.state.senderMessage
        };

        sendFormDataApi(senderData).then(() => {
            // resolve

        }).catch(error => {
            // reject

        })
    }

    /**
     * Handles name change for the given form
     * */
    handleNameChange(event){

    }

    /**
     * Handles email change in email input area
     * */
    handleEmailChange(event){

    }

    /**
     * Handles message change in text area
     * */
    handleMessageChange(event){

    }

    render() {
        return (
            <form id="contact-form" method="POST" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="small-6 columns">
                                <span className="input input--kaede">
                                    <input className="input__field input__field--kaede" type="text" name="name"
                                           id="contact-name" required
                                           value={this.state.senderName}
                                           onChange={this.handleNameChange}/>
                                    <label className="input__label input__label--kaede" htmlFor="contact-name">
                                        <span className="input__label-content input__label-content--kaede">Name</span>
									</label>
								</span>
                    </div>

                    <div className="small-6 columns">
								<span className="input input--kaede">
									<input className="input__field input__field--kaede" type="email" name="email"
                                           id="contact-email" required
                                    value={this.state.senderEmail}
                                    onChange={this.handleEmailChange}/>
									<label className="input__label input__label--kaede" htmlFor="contact-email">
										<span className="input__label-content input__label-content--kaede">Email</span>
									</label>
								</span>
                    </div>
                </div>

                <div className="row">
                    <div className="small-12 columns">
							<span className="input input--kaede" style={{height:"150px"}}>
								<textarea className="input__field input__field--kaede"
                                          type="text" name="message"
                                          id="contact-message"
                                          required
                                value={this.state.senderMessage}
                                onChange={this.handleMessageChange}/>
								<label className="input__label input__label--kaede"
                                       htmlFor="contact-message">
									<span className="input__label-content input__label-content--kaede">Message</span>
								</label>
							</span>
                    </div>
                </div>

                <div className="row">
                    <div className="small-12 columns">
                        <div type="submit" id="email-btn-container">
                            <button type="submit" id="email-me-btn" className="large button animated"
                                    data-text="EMAIL ME">
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
