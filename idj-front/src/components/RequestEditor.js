import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import '../styles/editor.css'
import {graphql} from 'react-apollo';
import gql from 'graphql-tag'
import Button from '../../node_modules/react-bootstrap/lib/Button';
// {this.props.data.getAllUsers.map((users) => <li key={users}> 
//                 user.displayName </li>)}
//             {console.log(this.state.options)}



// {if({this.state.options} != "cars")
//                 {
//                   {this.state.options.map((i) => users[i])}</li>)}
//                 }else
//                 {

class RequestEditor extends Component {
   constructor() {
    super()
    // initialize your options array on your state
    this.state = {
      options: []
      

    }
  }


    onChange(e) {
    // current array of options
    const options = this.state.options
    const cars = this.state.cars
    const attr = this.state.attr
    let index

    // check if the check box is checked or unchecked
    if (e.target.checked) {
      
     
      // add the numerical value of the checkbox to options array
            options.push(e.target.value)
        //options.push(attr)
          
     console.log(e.target.value)
     console.log(e.target.name)
        
      
// userItem = (user,i)=> key={i}> for (option in options) {{user.option},}


    } else {
      // or remove the value from the unchecked checkbox from the array
      index = options.indexOf(+e.target.value)
      options.splice(index, 1)
    }

    // update the state with the new array of options
    this.setState({ options: options })
    console.log(this.state.options);

    

  }

  

   render() {

    if (this.props.data.loading) {
            return <div>Loading</div>;
        }

   return ([
   
      <div className = "editor">
      
        <form name ="myform">
        <div className="row">
        <div class="col-xs-6 col-md-4">
        <h3> Users</h3>
           <div className = "editor__item">
            <label>Full Name</label>
            <input type="checkbox"  value= "displayName" onChange={this.onChange.bind(this)} />
          </div>
           <div className = "editor__item">
            <label>First Name</label>
            <input type="checkbox" value= "firstName" onChange={this.onChange.bind(this)} />
          </div>
          <div className = "editor__item">
            <label>Lastt Name</label>
            <input type="checkbox" value= "lastName" onChange={this.onChange.bind(this)} />
          </div>
           <div className = "editor__item">
            <label>Email</label>
            <input type="checkbox" value="email" onChange={this.onChange.bind(this)} />
          </div>
           <div className = "editor__item">
            <label>birthday</label>
            <input type="checkbox" value="birthday" onChange={this.onChange.bind(this)} />
          </div>
          <div className = "editor__item">
            <label>cars</label>
            <input type="checkbox"  value="cars" onChange={this.onChange.bind(this)} />
          </div>
        </div>
       {/* <div class="col-xs-6 col-md-4">
       <h3> Cars </h3>
        <div className = "editor__item">
            <label>Model</label>
            <input type="checkbox" name="cars" value="model" onChange={this.onChange.bind(this)} />
          </div>
        <div className = "editor__item">
            <label>Registration N° </label>
            <input type="checkbox" name="cars" value="registrationNo" onChange={this.onChange.bind(this)} />
          </div>
        <div className = "editor__item">
            <label>Owner</label>
            <input type="checkbox" name="cars" value="owner" onChange={this.onChange.bind(this)} />
          </div>
        </div> */}
        </div>

        </form>
      </div>,
        <div className="row">
            {this.props.data.getAllUsers.map((users) => <li key={users}> 
            {this.state.options.map((i) => 
              i == "cars"? users[i].map((j)=>j.model) :users[i])}</li>)}
        </div>
      ]
    )
  }

}
const Cquery = gql` query getAllUsers{
  getAllUsers {
   displayName
   firstName
   lastName
   email
   birthday
    cars{
      _id
      model
      registrationNo
    }
   
   
  }
}
`;

export default graphql(Cquery)(RequestEditor)

