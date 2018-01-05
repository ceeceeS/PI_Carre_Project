import React from 'react';
import ReactDOM from 'react-dom';
//import Dashboard from './routes/index';
//import Home from './routes/home';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

const client = new ApolloClient({
  link: new HttpLink({uri:'http://localhost:3000/graphql'}),
  cache: new InMemoryCache()
});

const Approot =
<BrowserRouter>
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
</BrowserRouter>

<<<<<<< HEAD
// ReactDOM.render(App, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(Approot, document.getElementById('root'));
registerServiceWorker();
=======
ReactDOM.render(Approot, document.getElementById('root'));
registerServiceWorker();
>>>>>>> 5e0e6c87f90f7f5941da8b46850af15801f14fd0
