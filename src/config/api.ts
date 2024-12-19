const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN
const GITHUB_GRAPHQL_URL  = import.meta.env.VITE_GITHUB_GRAPHQL_URL
const GITHUB_REST_API_URL = import.meta.env.VITE_GITHUB_REST_API_URL
const EMAILJS_BASE_URL = import.meta.env.VITE_EMAILJS_BASE_URL
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID
const EMAILJS_ACCESS_TOKEN = import.meta.env.VITE_EMAILJS_ACCESS_TOKEN

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
        accessToken: EMAILJS_ACCESS_TOKEN,
    }
};
