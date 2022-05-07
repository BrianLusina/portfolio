const {
  _env_
} = window

const NODE_ENV = _env_ ? _env_.NODE_ENV : process.env.NODE_ENV || 'development'
const ENV = _env_ ? _env_.ENV : process.env.ENV || 'development'

export default {
    nodeEnv: NODE_ENV,
    env: ENV,
    debug: process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test',
};
