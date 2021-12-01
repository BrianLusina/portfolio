import api from './api';
import menuItems from './menu';
import author from './author';
import monitoring from './monitoring';
import env from './env';
import firebase from './firebase';

export default {
  api,
  name: process.env.NAME || 'Portfolio',
  title: process.env.TITLE || 'Folio',
  owner: process.env.OWNER || 'BrianLusina',
  author,
  menuItems,
  monitoring,
  env,
  firebase,
};
