const {
    _env_
} = window

const GITHUB_TOKEN = _env_ ? _env_.GITHUB_TOKEN : process.env.GITHUB_TOKEN
const GITHUB_GRAPHQL_URL  = _env_ ? _env_.GITHUB_GRAPHQL_URL  : process.env.GITHUB_GRAPHQL_URL
const GITHUB_REST_API_URL = _env_ ? _env_.GITHUB_REST_API_URL : process.env.GITHUB_REST_API_URL
const EMAILJS_BASE_URL = _env_ ? _env_.EMAILJS_BASE_URL : process.env.EMAILJS_BASE_URL
const EMAILJS_SERVICE_ID = _env_ ? _env_.EMAILJS_SERVICE_ID : process.env.EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = _env_ ? _env_.EMAILJS_TEMPLATE_ID : process.env.EMAILJS_TEMPLATE_ID
const EMAILJS_USER_ID = _env_ ? _env_.EMAILJS_USER_ID : process.env.EMAILJS_USER_ID

export default {
    github: {
        token: GITHUB_TOKEN,
        graphQlUrl: GITHUB_GRAPHQL_URL || 'https://api.github.com/graphql',
        restApiUrl: GITHUB_REST_API_URL || 'https://api.github.com',
    },
    emailJs: {
        baseUrl: EMAILJS_BASE_URL,
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        userId: EMAILJS_USER_ID,
    }
};
