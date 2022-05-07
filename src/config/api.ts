export default {
    github: {
        token: process.env.GITHUB_TOKEN || window._env_.GITHUB_TOKEN,
        graphQlUrl: process.env.GITHUB_GRAPHQL_URL || window._env_.GITHUB_GRAPHQL_URL || 'https://api.github.com/graphql',
        restApiUrl: process.env.GITHUB_REST_API_URL || window._env_.GITHUB_REST_API_URL || 'https://api.github.com',
    }
};
