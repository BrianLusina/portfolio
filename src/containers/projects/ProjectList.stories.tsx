import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProjectList from './ProjectList';

export default {
  title: 'Containers/ProjectList',
  component: ProjectList,
} as ComponentMeta<typeof ProjectList>;

const Template: ComponentStory<typeof ProjectList> = (args) => <ProjectList {...args} />;

export const SimpleProjectList = Template.bind({});
SimpleProjectList.args = {};
