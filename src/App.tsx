import { ApolloProvider } from '@apollo/client';
import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { client } from './lib/apollo';
import Router from './Router';

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
