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


// const query = gql`{
//   getAllUsers {
//   	_id
//     displayName
//     email
//     birthday
//     cars{
//       _id
//       model
//     }
//   }
// }
// `;

 /*const usersToRender = this.props.getAllUsers
console.log(this.props.getAllUsers)
   var dataJson = JSON.stringify(usersToRender, null, 4);
    var dataStruct;
    for(var key in this.props.allUsersQuery.allUsers[0]){
      console.log(key); // here is your column name you are looking for
    } */

// const userItem = (user,i)=><li key={i}> {user._id},  {user.displayName}, {user.email},{user.cars.map( (car,i)=><p key={i}>{car.model}</p> )}</li>
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
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="content__section">
                  <p className="content__section__title">About</p>
                  <p>This project is part of a university project</p>
                  <a href="#">Learn more ></a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
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