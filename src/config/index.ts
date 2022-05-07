import api from './api';
import menuItems from './menu';
import author from './author';
import monitoring from './monitoring';
import env from './env';
import firebase from './firebase';
import meta from './meta';

export default {
  api,
  name: meta.name,
  title: meta.title,
  owner: meta.owner,
  author,
  menuItems,
  monitoring,
  env,
  firebase,
};
