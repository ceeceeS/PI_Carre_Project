import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import Header from '../components/Header'
import Toolbar from '../components/toolbar'
import RequestEditor from '../components/RequestEditor'
import '../styles/index.css'


class Dashboard extends Component {

  render() {
    return (
    <div>
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
  }
}

export default Dashboard