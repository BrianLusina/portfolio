import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tile from './Tile';

export default {
  title: 'Components/Tile',
  component: Tile,
} as ComponentMeta<typeof Tile>;

const Template: ComponentStory<typeof Tile> = (args) => <Tile {...args} />;

export const DefaultTile = Template.bind({});
DefaultTile.args = {
  title: 'Tile',
  description: 'Tile description',
  poster: 'https://via.placeholder.com/150',
  link: '/',
};
