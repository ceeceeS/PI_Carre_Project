import React from 'react';
import {BrowserRouter as Router,Route,Link,Switch,} from 'react-router-dom';
//Simport Home from './home'
import Header from '../components/Header'
import Toolbar from '../components/Toolbar'
import RequestEditor from '../components/RequestEditor'
import '../styles/index.css'

 // <div className="col-sm-8 col-md-10 col-lg-10">
 //         <Switch>
 //            <Route path="/" exact component={Home} />
 //          </Switch>
 //        </div>
  // <RequestEditor/>

export default ()=>(
  <div>
    <Header/>
    <div className="content">
      <Toolbar/>
      <div className="row">
        <div className="col-sm-4 col-md-2 col-lg-2">
         
        </div>
        <div className="col-sm-8 col-md-10 col-lg-10">
        <RequestEditor/>
        </div>
       
        
      </div>
    </div>
  </div>
)