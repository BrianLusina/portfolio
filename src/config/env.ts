const {
  _env_
} = window

const NODE_ENV = _env_ ? _env_.NODE_ENV : import.meta.env.NODE_ENV || 'development'
const ENV = _env_ ? _env_.ENV : import.meta.env.ENV || 'development'

export default {
    nodeEnv: NODE_ENV,
    env: ENV,
    debug: import.meta.env.NODE_ENV === 'development' || import.meta.env.NODE_ENV === 'test',
};
