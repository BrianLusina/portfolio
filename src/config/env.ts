export default {
    nodeEnv: process.env.NODE_ENV || window._env_.NODE_ENV || 'development',
    env: process.env.ENV || window._env_.ENV  || 'development',
    debug: process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test',
  };
  