import analytics from '@services/analytics';
import { captureException } from '@services/monitoring';
import emailJsApi from 'api/rest/EmailJsApi';
import { FunctionComponent } from 'react';
import ContactForm from './ContactForm';

const ContactFormContainer: FunctionComponent = () => {
  const handleSubmit = async (values: {
    email: string;
    name: string;
    message: string;
  }): Promise<void> => {
    const { email, name, message } = values;
    try {
      analytics.logEvent('form-submission', {
        description: 'Contact form submission',
        event_category: 'form',
        page_location: window.location.href,
        page_title: document.title,
        page_path: window.location.pathname,
      });
      const payload: EmailJsSendEmailRequest = {
        message,
        from_email: email,
        name,
      };
      await emailJsApi.send(payload);
    } catch (error) {
      captureException(error as Error);
    }
  };

  return (
    <section>
      <h2>Get in touch</h2>
      <ContactForm onSubmit={handleSubmit} />
    </section>
  );
};

export default ContactFormContainer;
