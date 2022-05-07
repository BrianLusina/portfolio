const {
    _env_
} = window

const GITHUB_TOKEN = _env_ ? _env_.GITHUB_TOKEN : process.env.GITHUB_TOKEN
const GITHUB_GRAPHQL_URL  = _env_ ? _env_.GITHUB_GRAPHQL_URL  : process.env.GITHUB_GRAPHQL_URL
const GITHUB_REST_API_URL = _env_ ? _env_.GITHUB_REST_API_URL : process.env.GITHUB_REST_API_URL

export default {
    github: {
        token: GITHUB_TOKEN,
        graphQlUrl: GITHUB_GRAPHQL_URL || 'https://api.github.com/graphql',
        restApiUrl: GITHUB_REST_API_URL || 'https://api.github.com',
    }
};
