import api from './api';
import menuItems from './menu';
import author from './author';
import monitoring from './monitoring';
import env from './env';
import firebase from './firebase';

export default {
  api,
  name: process.env.NAME || window._env_.NAME || 'Portfolio',
  title: process.env.TITLE || window._env_.TITLE || 'Folio',
  owner: process.env.OWNER || window._env_.OWNER || 'BrianLusina',
  author,
  menuItems,
  monitoring,
  env,
  firebase,
};
