export default {
    apiKey: import.meta.env.VITE_CMS_API_KEY,
    graphQlUrl: import.meta.env.VITE_CMS_GRAPHQL_URL || 'https://graphql.contentful.com',
    restApiUrl: import.meta.env.VITE_CMS_REST_API_URL || 'https://cdn.contentful.com',
    previewRestApiUrl: import.meta.env.VITE_CMS_PREVIEW_REST_API_URL || 'https://preview.contentful.com',
    spaceId: import.meta.env.VITE_CMS_SPACE_ID,
    environment: import.meta.env.VITE_CMS_ENVIRONMENT || 'master',
    preview: import.meta.env.VITE_CMS_PREVIEW === 'true',
    paperRabbit: {
        baseUrl: import.meta.env.VITE_PAPER_RABBIT_CMS_URL || 'http://localhost:8090'
    }
}