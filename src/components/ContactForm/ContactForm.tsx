import { FunctionComponent, useState, FormEvent } from 'react';
import analytics from '@services/analytics';
import { captureException } from '@services/monitoring';
import emailJsApi from 'api/rest/EmailJsApi';
import notification from '@notification';
import { isEmailValid } from '@utils';
import { ContactFormWrapper } from './styles';

const ContactFormContainer: FunctionComponent = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const isValid = name !== '' && isEmailValid(email) && message !== '';

  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
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
    <section>
      <h2>Get in touch</h2>
      <ContactFormWrapper name="contact" method="post" onSubmit={handleSubmit} data-netlify="true">
        <div className="fields">
          <div className="field half">
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field half">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <textarea
              name="message"
              id="message"
              value={message}
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <input type="hidden" name="form-name" value="contact" />
        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Send" className="primary" disabled={!isValid} />
          </li>
        </ul>
      </ContactFormWrapper>
    </section>
  );
};

export default ContactFormContainer;
