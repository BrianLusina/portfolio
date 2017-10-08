import React from 'react';
import ContactForm from "./ContactForm";

/**
 * Contact stateless component
 */
const Contact = () => {
    return (
        <section id="contact-section">
            <div className="row">
                <div className="small-12 columns">
                    <div id="contact-header">
                        <i className="fa fa-envelope"/>
                        <h3 id="contact-title">CONTACT</h3>
                        <p id="contact-tag">
                            Feel free to reach out for projects you may want me to work on.
                            <i className="fa fa-smile-o"/>
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="small-12 columns">
                    <ContactForm />
                </div>
            </div>

        </section>
    );
};

export default Contact;