import { FunctionComponent, useState, FormEvent } from 'react';
import analytics from '@services/analytics';
import { captureException } from '@services/monitoring';
import emailJsApi from 'api/rest/EmailJsApi';
import notification from '@notification';
import { isEmailValid } from '@utils';
import mountainPosterImage from '@assets/images/posters/mountain.jpg';
import { ContactForm, ContactFormWrapper } from './styles';

const ContactFormContainer: FunctionComponent = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [subject, setSubject] = useState<string>('');

  const isValid = name !== '' && isEmailValid(email) && message !== '';

  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubject('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      analytics.logEvent('form-submission', {
        description: 'Contact form submission',
        event_category: 'form',
        page_location: window.location.href,
        page_title: document.title,
        page_path: window.location.pathname,
      });
      const payload: SendEmailRequest = {
        message,
        email,
        name,
      };
      await emailJsApi.send(payload);
      clearForm();
      notification.success('Successfully sent email');
    } catch (error) {
      captureException(error as Error);
      notification.error('Failed to send email. Please try again later');
    }
  };

  return (
    <div className="contact-form--1">
      <div className="container">
        <div className="row row--35 align-items-start">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="section-title text-left mb--50">
              <h2 className='title'>Get in touch</h2>
              <p className="description">I am available for freelance work. Connect with me via phone: <a href="tel:+8801923088574">01923 088574</a> or email:
              <a href="mailto:admin@example.com"> admin@example.com</a> </p>
            </div>

            <ContactFormWrapper className="form-wrapper">
              <ContactForm
                name="contact"
                method="post"
                onSubmit={handleSubmit}
                data-netlify="true"
              >
                  <label htmlFor='name'>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      placeholder="Name *"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>

                  <label htmlFor='email'>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      placeholder="Email *"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>

                  <label htmlFor='subject'>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={subject}
                      placeholder="Subject"
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </label>

                  <label htmlFor="message">
                    <textarea
                      name="message"
                      id="message"
                      value={message}
                      placeholder="Message *"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </label>

                  <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe" disabled={!isValid}>Submit</button>
              </ContactForm>
            </ContactFormWrapper>
          </div>

          <div className="col-lg-6 order-1 order-lg-2">
            <div className="thumbnail mb_md--30 mb_sm--30">
              <img src={mountainPosterImage} alt="folio" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormContainer;
