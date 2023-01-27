import api from './api';
import menuItems from './menu';
import author from './author';
import monitoring from './monitoring';
import env from './env';
import firebase from './firebase';
import meta from './meta';

const{ name, title, owner } = meta

export default {
  api,
  name,
  title,
  owner,
  author,
  menuItems,
  monitoring,
  env,
  firebase,
};
