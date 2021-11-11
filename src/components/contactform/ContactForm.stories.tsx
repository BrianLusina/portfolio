import { ComponentStory, ComponentMeta } from '@storybook/react';
import ContactForm from './ContactForm';
import { ContactFormValues } from './ContactForm.interface';

export default {
  title: 'Components/contact/ContactForm',
  component: ContactForm,
} as ComponentMeta<typeof ContactForm>;

const Template: ComponentStory<typeof ContactForm> = (args) => <ContactForm {...args} />;

export const SimpleContactForm = Template.bind({});
SimpleContactForm.args = {
  onSubmit: (values: ContactFormValues) => {
    console.log(`submitting form. ${JSON.stringify(values)}`);
  },
};
