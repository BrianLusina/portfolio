import React from 'react'

const Contact = () => {
    return (
		<section id="contact-section">
			<div className="row">
				<div className="small-12 columns">
					<div id="contact-header">
						<i className="fa fa-envelope"></i>
						<h3 id="contact-title">CONTACT</h3>
						<p id="contact-tag">Feel free to reach out for projects you may want me to work on.<i className="fa fa-smile-o"></i></p>
					</div>
				</div>
			</div>

			{/* contact form */}
			<div className="row">
				<div className="small-12 columns">
                    {/* id="contact-form" */}
					<form id="contact-form" action="https://formspree.io/lusinabrian@gmail.com" method="POST">
						<div className="row">
                        
							{/* Name */}
							<div className="small-6 columns">
                                <span className="input input--kaede">
                                    <input className="input__field input__field--kaede" type="text" name="name" id="contact-name" required/>
                                    <label className="input__label input__label--kaede" htmlFor="contact-name">
                                        <span className="input__label-content input__label-content--kaede">Name</span>
									</label>
								</span>
							</div>
							
							{/* email */}
							<div className="small-6 columns">
								<span className="input input--kaede">
									<input className="input__field input__field--kaede" type="email" name="email" id="contact-email" required/>
									<label className="input__label input__label--kaede" htmlFor="contact-email">
										<span className="input__label-content input__label-content--kaede">Email</span>
									</label>
								</span>
							</div>
						</div>

						{/* message */}
						<div className="row">
							<div className="small-12 columns">
							<span className="input input--kaede" style={{ height: "150px" }} >
								<textarea className="input__field input__field--kaede" name="message" id="contact-message" required></textarea>
								<label className="input__label input__label--kaede" htmlFor="contact-message">
									<span className="input__label-content input__label-content--kaede">Message</span>
								</label>
							</span>
							</div>
						</div>

				        {/* email button */}
						<div className="row">
							<div className="small-12 columns">
								<div id="email-btn-container">
									<button type="submit" id="email-me-btn" className="large button animated" data-text="EMAIL ME">
										<span>S</span><span>E</span><span>N</span><span>D</span> <span>M</span><span>A</span><span>I</span><span>L</span>
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>

		</section>
    )
}

export default Contact;