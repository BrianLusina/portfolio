import { ComponentStory, ComponentMeta } from '@storybook/react';
import Logo from './Logo';
import logo from './logo.svg';

export default {
  title: 'Components/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const DefaultLogo = Template.bind({});
DefaultLogo.args = {};

export const LogoWithIcon = Template.bind({});
LogoWithIcon.args = {
  children: logo,
};
