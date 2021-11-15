/* eslint-disable @typescript-eslint/no-empty-function */
import ContactForm from '@components/ContactForm';
import { FunctionComponent } from 'react';

const ContactFormContainer: FunctionComponent = () => {
  // eslint-disable-next-line no-unused-vars
  const handleSumbit = (values: { email: string; name: string; message: string }) => {};

  return (
    <section>
      <h2>Get in touch</h2>
      <ContactForm onSubmit={handleSumbit} />
    </section>
  );
};

export default ContactFormContainer;
