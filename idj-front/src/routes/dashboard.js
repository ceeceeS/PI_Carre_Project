import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import Header from '../components/Header'
import Toolbar from '../components/Toolbar'
import RequestEditor from '../components/RequestEditor'
import '../styles/index.css'
import RequestEditorForCars from '../components/RequestEditorForCars';
//   <RequestEditorForCars/> 
class Dashboard extends Component {

  render() {
    return (
      <div>
        <div className="content">
          <Toolbar />
          <RequestEditor/>
        </div>
      </div>
    )
  }
}

export default Dashboard