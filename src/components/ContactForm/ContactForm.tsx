import { FunctionComponent, useState, FormEvent } from 'react';
import { isEmailValid } from '@utils';
import { ContactFormWrapper } from './styles';
import { ContactFormValues } from './types';

type ContactFormProps = {
  onSubmit: (e: ContactFormValues) => void;
};

const ContactForm: FunctionComponent<ContactFormProps> = ({ onSubmit }: ContactFormProps) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, email, message });
  };

  const isValid = name !== '' && isEmailValid(email) && message !== '';

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <ContactFormWrapper name="contact" method="post" onSubmit={handleSubmit} netlify>
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
      </div>
      <ul className="actions">
        <li>
          <input type="submit" value="Send" className="primary" disabled={!isValid} />
        </li>
      </ul>
    </ContactFormWrapper>
  );
};

export default ContactForm;
