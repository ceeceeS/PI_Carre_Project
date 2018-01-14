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
import RequestEditorForCars from '../components/RequestEditorForCars';
//   <RequestEditorForCars/> 
class Dashboard extends Component {

  render() {
    return (
    
      <div className="content">
        <Toolbar />
        <div className="row">
          <div className="col-sm-4 col-md-2 col-lg-3">
          <RequestEditor/>
          </div>
          <div className="col-sm-4 col-md-2 col-lg-3">
          <RequestEditorForCars/> 
          </div>
        
      </div>
    </div>
    )
  }
}

export default Dashboard