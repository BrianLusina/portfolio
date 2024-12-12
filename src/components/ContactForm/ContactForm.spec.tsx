import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import faker from 'faker';
import { captureException as mockCaptureException } from '@services/monitoring';
import mockEmailJsApi from 'api/rest/EmailJsApi';
import ContactForm from './ContactForm';

jest.mock('@services/monitoring', () => {
  return {
    captureException: jest.fn(),
  };
});
jest.mock('api/rest/EmailJsApi');

describe('ContactForm', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.error.mockRestore();
  });

  afterEach(() => {
    jest.resetAllMocks();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.error.mockClear();
  });

  it('should render', () => {
    render(<ContactForm />);
  });

  it('should not be able to submit form with missing values', () => {
    const { container } = render(<ContactForm />);

    const submitButton = container.querySelector('button[type=submit]') as Element;
    userEvent.click(submitButton);

    expect(mockCaptureException).not.toHaveBeenCalled();
    expect(mockEmailJsApi.send).not.toHaveBeenCalled();
  });

  it('should be able to submit form with valid values', () => {
    const { container } = render(<ContactForm />);

    const emailText = faker.internet.email();
    const messageText = faker.lorem.paragraph();
    const nameText = faker.name.firstName();

    const nameInputField = container.querySelector('input[name=name]') as Element;
    const emailInputField = container.querySelector('input[type=email]') as Element;
    const messageTextAreaField = container.querySelector('textarea[name=message]') as Element;

    userEvent.type(nameInputField, nameText);
    userEvent.type(emailInputField, emailText);
    userEvent.type(messageTextAreaField, messageText);

    const submitButton = container.querySelector('button[type=submit]') as Element;
    userEvent.click(submitButton);

    expect(mockCaptureException).not.toHaveBeenCalled();
    expect(mockEmailJsApi.send).toHaveBeenCalledWith({
      email: emailText,
      message: messageText,
      name: nameText,
    });
  });

  describe('should not be able to submit form with invalid', () => {
    const { container } = render(<ContactForm />);

    const nameInputField = container.querySelector('input[name=name]') as Element;
    const emailInputField = container.querySelector('input[type=email]') as Element;
    const messageTextAreaField = container.querySelector('textarea[name=message]') as Element;
    const submitButton = container.querySelector('button[type=submit]') as Element;

    const validEmailText = faker.internet.email();
    const validMessageText = faker.lorem.paragraph();
    const validNameText = faker.name.firstName();

    it('email address', () => {
      // with invalid email
      const wrongEmailText = 'wrong-email.com';

      userEvent.type(nameInputField, validNameText);
      userEvent.type(emailInputField, wrongEmailText);
      userEvent.type(messageTextAreaField, validMessageText);

      userEvent.click(submitButton);

      expect(mockCaptureException).not.toHaveBeenCalled();
      expect(mockEmailJsApi.send).not.toHaveBeenCalled();
    });

    it('message text', () => {
      // with wrong message
      const wrongMessageText = '';

      userEvent.type(nameInputField, validNameText);
      userEvent.type(emailInputField, validEmailText);
      userEvent.type(messageTextAreaField, wrongMessageText);

      userEvent.click(submitButton);

      expect(mockCaptureException).not.toHaveBeenCalled();
      expect(mockEmailJsApi.send).not.toHaveBeenCalled();
    });

    it('name text', () => {
      // with wrong name
      const wrongNameText = '';

      userEvent.type(nameInputField, wrongNameText);
      userEvent.type(emailInputField, validEmailText);
      userEvent.type(messageTextAreaField, validMessageText);

      userEvent.click(submitButton);

      expect(mockCaptureException).not.toHaveBeenCalled();
      expect(mockEmailJsApi.send).not.toHaveBeenCalled();
    });
  });
});
