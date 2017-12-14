import React, { Component } from 'react';
//import Routes from './routes';
import Home from './routes/home';
import Dashboard from './routes/dashboard';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/dashboard" component={Dashboard}/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
