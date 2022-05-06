import { ApolloClient, HttpLink, from } from '@apollo/client';
import api from '@apiConfig';
import { authMiddleware, retryMiddleware, errorMiddleware } from './middleware';
import Cache from './Cache';

const httpLink = new HttpLink({ uri: api.github.graphQlUrl });

const client = new ApolloClient({
  link: from([authMiddleware, retryMiddleware, errorMiddleware, httpLink]),
  cache: Cache,
});

export default client;
