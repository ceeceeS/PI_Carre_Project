import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import '../styles/editor.css'

class Toolbar extends Component {

  render() {
    return (
      <div>
        <div className="toolbar">
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="toolbar__title"><a href='/'>IndataJones</a></div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="toolbar__nav">
                <Link to="/data">Data</Link>
                <Link to="/more">More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
export default withRouter(Toolbar)
