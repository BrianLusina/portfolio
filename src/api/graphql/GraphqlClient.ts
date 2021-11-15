import { ApolloClient, HttpLink, concat } from '@apollo/client';
import api from '@apiConfig';
import authMiddleware from './AuthMiddleware';
import RetryMiddleware from './RetryMiddleware';
import Cache from './Cache';

const httpLink = new HttpLink({ uri: api.github.graphQlUrl });

const client = new ApolloClient({
  link: concat(authMiddleware, RetryMiddleware.concat(httpLink)),
  cache: Cache,
});

export default client;
