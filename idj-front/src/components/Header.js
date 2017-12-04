import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import '../styles/header.css'
//import '../img/background.jpeg'

class Header extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="header">
            <nav className="header__menu">
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Why data visualisation ?</a></li>
                </ul>
            </nav>
            <h1 className='header__title'>IndataJones</h1>
            <div className='header__subtitle'>A Financial Data Visualisation Engine</div>
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(Header)