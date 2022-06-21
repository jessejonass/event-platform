import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o44uol0hf901z28s1z1qcj/master',
  cache: new InMemoryCache(),
});
