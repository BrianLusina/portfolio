import api from './api';
import author from './author';
import monitoring from './monitoring';
import env from './env';
import firebase from './firebase';
import meta from './meta';
import cms from './cms'

const{ name, title, owner } = meta

export default {
  cms,
  api,
  name,
  title,
  owner,
  author,
  monitoring,
  env,
  firebase,
};
