import SocialCard from '@components/SocialCard';
import ContactFormContainer from '@containers/contact';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const SimpleFooter = Template.bind({});
SimpleFooter.args = {};

export const FooterWithContact = Template.bind({});
FooterWithContact.args = {
  children: <ContactFormContainer />,
};

export const FooterWithSocialCard = Template.bind({});
FooterWithSocialCard.args = {
  children: (
    <>
      <SocialCard />
    </>
  ),
};

export const FooterWithContactAndSocialCard = Template.bind({});
FooterWithContactAndSocialCard.args = {
  children: (
    <>
      <ContactFormContainer />,
      <SocialCard />
    </>
  ),
};
