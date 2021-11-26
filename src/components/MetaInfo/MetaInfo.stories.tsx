import { ComponentStory, ComponentMeta } from '@storybook/react';
import faker from 'faker';
import MetaInfo from './MetaInfo';

const defaultProps = {
  author: {
    name: faker.name.firstName(),
    url: faker.internet.url(),
  },
  project: {
    name: faker.company.companyName(),
    url: faker.internet.url(),
  },
  description: faker.lorem.sentence(),
};

export default {
  title: 'Components/MetaInfo',
  component: MetaInfo,
} as ComponentMeta<typeof MetaInfo>;

const Template: ComponentStory<typeof MetaInfo> = (args) => <MetaInfo {...args} />;

export const DefaultMetaInfo = Template.bind({});
DefaultMetaInfo.args = { ...defaultProps };
