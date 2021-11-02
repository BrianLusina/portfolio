import { gql, DocumentNode } from '@apollo/client';

export const GET_REPOSITORIES = (first = 10): DocumentNode => gql`
  query GetRepositories {
    viewer {
      repositories(orderBy: { direction: ASC, field: NAME }, first: ${first}) {
        nodes {
          name
          description
          url
          owner {
            login
            avatarUrl
          }
        }
      }
    }
  }
`;

export const GET_REPOSITORY = (repositoryName: string, owner: string): DocumentNode => gql`
  query GetRepository {
    repository(name: ${repositoryName}, owner: ${owner}) {
      name
      description
      url
      owner {
        login
        avatarUrl
      }
    }
  }
`;
