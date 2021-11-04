import { gql, DocumentNode } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query GetRepositories($direction: OrderDirection!, $field: RepositoryOrderField!, $first: Int!) {
    viewer {
      repositories(orderBy: { direction: $direction, field: $field }, first: $first) {
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
      object(expression: "HEAD:README.md") {
        ... on Blob {
          text
        }
      }
      owner {
        login
        avatarUrl
      }
    }
  }
`;
