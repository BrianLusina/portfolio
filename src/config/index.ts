import api from './api';
import menuItems from './menu';

export default {
  api,
  name: process.env.NAME || 'Projects',
  title: process.env.TITLE || 'Liber',
  owner: process.env.OWNER || 'BrianLusina',
  menuItems: menuItems
};
