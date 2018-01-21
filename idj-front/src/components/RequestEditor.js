import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import '../styles/editor.css'
import {graphql} from 'react-apollo';
import gql from 'graphql-tag'
import Button from '../../node_modules/react-bootstrap/lib/Button';
import RequestResult from './RequestResult'
import Graph from '../js/graphd3'
import * as d3 from 'd3';
import '../styles/graph.css'

class RequestEditor extends Component {
   constructor() {
    super()
    // initialize your options array on your state
    this.state = {
      options: [],
      optionsCars : []
    }
  }
  
  onChange(e) {
    // current array of options
    const options = this.state.options
    const cars = this.state.cars
    let index;
    // check if the check box is checked or unchecked
    if (e.target.checked) {
    //if (e.target.checked && e.target.name == "cars") {
       // add the numerical value of the checkbox to options array
       //cars.push(e.target.value)
       //options[0].push(cars)
       //console.log(cars)
       options.push(e.target.value)
       // userItem = (user,i)=> key={i}> for (option in options) {{user.option},}
    //}else if(e.target.checked && e.target.name != "cars"){
      //options.push(e.target.value)
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = options.indexOf(e.target.value)
      options.splice(index, 1)
    }

    // update the state with the new array of options
    this.setState({ options: options })
    console.log(options);
  }

  onChangeCar(e) {
    // current array of options
    const optionsCars = this.state.optionsCars
    let index;

    // check if the check box is checked or unchecked
    if (e.target.checked) {
       // add the numerical value of the checkbox to options array
       optionsCars.push(e.target.value)
       console.log(e.target.value)
       // userItem = (user,i)=> key={i}> for (option in options) {{user.option},}
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = optionsCars.indexOf(+e.target.value)
      optionsCars.splice(index, 1)
    }

    // update the state with the new array of optionsCars
    this.setState({ optionsCars: optionsCars })
    console.log(this.state.optionsCars);
  }

  displayData(){
    //display data in function of labels selected
    var cols = [];
    var rows = [];
    var result = [[]];
    var dataset = [];

    var optionsCars = this.state.optionsCars;
    //console.log(optionsCars)
    this.state.options.map(function(title){
      cols.push(title);
    })

    this.props.data.getAllUsers.map(function(row){
      rows.push(row);
    })
    console.log(rows)

    var thead = cols.map((col) => col =="cars"?
        optionsCars.map((carItem,j) => <th key={j}>Cars.{carItem}</th>): 
        <th key={col}>{col}</th>
    );

    var tbody = rows.map(function(row,i){
        dataset.push(parseInt(row.cars.length*100));
        return (
          <tr key={i}>
            {cols.map((col,index)=> col =="cars"? /*row[col].length == 0? <td key={index}>test</td>:*/
            row[col].map((car_label)=>
              optionsCars.map((carItem,k) => <td key={k}>{car_label[carItem]}</td>)):
              <td key={index}>{row[col]}</td>)}
          </tr>
        );
    })
    console.log(dataset);

    return <RequestResult tbody={tbody} thead={thead} datagraph={dataset}/>;
  }

  render() {
    if (this.props.data.loading) {
            return <div>Loading</div>;
        }

    return (
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
          <div className = "editor">
            <form name ="myform">
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
                    <label>Last Name</label>
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
              </form>
            </div>
            <div className = "editor">
              <form name ="myform">
                <div className="form-group">
                  <div className = "editor_title">
                    <h3> Cars </h3>
                  </div>
                  <div className = "editor__item">
                    <label>Model</label>
                    <input type="checkbox" name="cars" value="model" onChange={this.onChangeCar.bind(this)} />
                  </div>
                  <div className = "editor__item">
                    <label>Registration N° </label>
                    <input type="checkbox" name="cars" value="registrationNo" onChange={this.onChangeCar.bind(this)} />
                  </div>
                </div>
              </form>
            </div>
          </div>

        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-9">
          <div className="result">
            { this.displayData() }
          </div>
        </div>
        </div>
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

export default graphql(Cquery)(RequestEditor);

