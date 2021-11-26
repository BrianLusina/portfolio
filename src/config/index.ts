import api from './api';
import menuItems from './menu';
import author from './author';

export default {
  api,
  name: process.env.NAME || 'Projects',
  title: process.env.TITLE || 'Liber',
  owner: process.env.OWNER || 'BrianLusina',
  author,
  menuItems
};
