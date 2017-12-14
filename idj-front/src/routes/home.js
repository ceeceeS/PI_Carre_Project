import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import { withRouter } from 'react-router'
import Dashboard from './dashboard'
import '../styles/home.css'

class Home extends Component {
 render() {
   return (
      <BrowserRouter>
        <div className="content">
          <div className="home">
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="home__title"><a href='/'>IndataJones</a></div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <nav className="home__nav">
                  <ul>
                      <li><a href='/dashboard'>Dashboard</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className='home__subtitle'>A Financial Data Visualisation Engine</div>
            <div className="home__button">
              <a href='/dashboard'>Access the Dashboard</a>
            </div>
          </div>
          <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="content__section">
                  <p className="content__section__title">About</p>
                  <p>This project is part of a university project</p>
                  <a href="#">Learn more ></a>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="content__section">
                  <p className="content__section__title">Why Data Visualisation ?</p>
                  <p>It is a powerful tool to explore data.</p>
                  <a href="#">Learn more ></a>
                </div>
              </div>
            </div>
        </div>
      </BrowserRouter>
      )
    }
}

export default withRouter(Home)