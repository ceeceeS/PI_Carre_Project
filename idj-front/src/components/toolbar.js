import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Toolbar extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <Link to="/">Home</Link>,
          <Link to="/register">Register</Link>
        </div>
      </div>
    )
  }

}
export default withRouter(Toolbar)