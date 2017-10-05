/**
 * @author lusinabrian on 30/09/17.
 * @notes: Contact form
 */

import React, {Component} from 'react';

export default class ContactForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    render() {
        return (
            <form id="contact-form" action="https://formspree.io/lusinabrian@gmail.com" method="POST">
                <div className="row">

                    <div className="small-6 columns">
                                <span className="input input--kaede">
                                    <input className="input__field input__field--kaede" type="text" name="name"
                                           id="contact-name" required/>
                                    <label className="input__label input__label--kaede" for="contact-name">
                                        <span className="input__label-content input__label-content--kaede">Name</span>
									</label>
								</span>
                    </div>

                    <div className="small-6 columns">
								<span className="input input--kaede">
									<input className="input__field input__field--kaede" type="email" name="email"
                                           id="contact-email" required/>
									<label className="input__label input__label--kaede" for="contact-email">
										<span className="input__label-content input__label-content--kaede">Email</span>
									</label>
								</span>
                    </div>
                </div>

                <div className="row">
                    <div className="small-12 columns">
							<span className="input input--kaede" style={{height:"150px"}}>
								<textarea className="input__field input__field--kaede" type="text" name="message"
                                          id="contact-message" required></textarea>
								<label className="input__label input__label--kaede" for="contact-message">
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
