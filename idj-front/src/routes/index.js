import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
//import Home from './home'
import Header from '../components/Header'
import Toolbar from '../components/Toolbar'
import RequestEditor from '../components/RequestEditor'
import '../styles/index.css'


// const Toolbar = ()=> [
//   <Link to="/">Home</Link>,
//   <Link to="/register">Register</Link>
// ]
//<div className="col-sm-8 col-md-10 col-lg-10">
        //   <Switch>
        //     <Route path="/" exact component={Home} />
        //   </Switch>
        // </div>
// const Register = ()=> [ <Toolbar />, <h1>Register</h1>]

export default ()=>(
  <div>
    <Header/>
    <div className="content">
      <Toolbar />
      <div className="row">
        <div className="col-sm-4 col-md-2 col-lg-2">
          <RequestEditor/>
        </div>
        
      </div>
    </div>
  </div>
)