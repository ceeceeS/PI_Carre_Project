import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter } from 'react-router-dom'

const client = new ApolloClient({
  link: new HttpLink({uri:'http://localhost:3000/graphql'}),
  cache: new InMemoryCache()
});

const App =
<BrowserRouter>
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
</BrowserRouter>

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();