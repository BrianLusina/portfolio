import analytics from '@services/analytics';
import { captureException } from '@services/monitoring';
import { FunctionComponent } from 'react';
import ContactForm from './ContactForm';

const ContactFormContainer: FunctionComponent = () => {
  const encode = (data: Record<string, string | number | boolean>) => {
    return Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  };

  const handleSumbit = (values: { email: string; name: string; message: string }) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(() =>
        analytics.logEvent('form-submission', {
          description: 'Contact form submission',
          event_category: 'form',
          page_location: window.location.href,
          page_title: document.title,
          page_path: window.location.pathname,
        }),
      )
      .catch((error) => captureException(error));
  };

  return (
    <section>
      <h2>Get in touch</h2>
      <ContactForm onSubmit={handleSumbit} />
    </section>
  );
};

export default ContactFormContainer;
