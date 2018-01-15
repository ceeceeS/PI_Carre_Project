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

    /*return this.props.data.getAllUsers.map((users) => <table>
      {this.state.options.map((label)=> label =="cars"? 
        users[label].map((car_label)=> this.state.optionsCars.map((carItem) =>car_label[carItem])): 
          <tbody><tr><td>{users[label]}</td></tr></tbody>)}
    </table>)*/
      
    var cols = [];
    var rows = [];
    var result = [[]];
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
      //console.log(row.row)
      //if(row.id==i){
        return (
          <tr>
            {cols.map((col,index)=> col =="cars"? /*row[col].length == 0? <td key={index}>test</td>:*/
            row[col].map((car_label)=>
              optionsCars.map((carItem,k) => <td key={k}>{car_label[carItem]}</td>)):
              <td key={index}>{row[col]}</td>)}
          </tr>
        );
      //}
    })
    console.log(tbody);

    return <RequestResult tbody={tbody} thead={thead}/>;
  }


    /*var cols = [];
    var rows = [];
    var result = [[]];

    this.state.options.map(function(title){
      cols.push(title);
    })

    this.props.data.getAllUsers.map(function(row){
      rows.push(row);
    })
    
    var thead = cols.map(function(col){
      return <th key={col}>{col}</th>
    });

    var tbody = rows.map(function(row,i){
      if(i<rows.length){
      return cols.map(function (col) {
        console.log(row[col]);
          result.push(<td key={row[col]}>{row[col]}</td>);
          return <tr key={row}>{result}</tr>;
      });
    }});
    console.log(tbody);

    return <RequestResult tbody={tbody} thead={thead}/>;*/

    /*var tabledata = [];
    var rows =[];
    var result;
    var i = 0;
    var taille = this.props.data.getAllUsers.length;
    var test = this.state.options;
    //for(var i = 0; i < length*this.state.options.length; i++) {
      this.props.data.getAllUsers.map(function(user){
        rows.push({data:user});
        test.map(function(label){
          result = rows.filter(title => label == title);
          //label == "cars"? user[label].map((j)=>j.model) :
          //tabledata.push({info:user[label],element:label})
          });
      })
    //}
    console.log(rows);
    console.log(result);
    //console.log(this.state.options);
    return <RequestResult key={i} data={rows} label={this.state.options} taille={taille}></RequestResult>
  }*/


  /*getLabel(){
    //get and display labels selected : to improve in order to display an array
    return this.state.options.map(
      function (label){
        return <div className="editor__label" key={label}>{label}</div>
      }
    )
  }

  getArrayOfData (){
    // build array from data available for a label, ex.: var age = [18,56,13]
    // It would be better to use a direct query from graphql
    var array = new Array();
    return this.props.data.getAllUsers.map(
      function (user){
        array.push(user.birthday)
        return <Graph key={user} data={JSON.stringify(array)}/>
      }
    )
  }*/
  
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
  {/* <div className = "editor__item">
      <label>Owner</label>
      <input type="checkbox" name="cars" value="owner" onChange={this.onChange.bind(this)} />
    </div> */}
                </div>
              </form>
            </div>
          </div>

        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-9">
          <div className="result">
            {/*this.props.data.getAllUsers.map((users) => <li key={users}> 
            {this.state.options.map((i) => i == "cars"? users[i].map((j)=>j.model) :users[i])}</li>)*/}
            { this.displayData() }
            <Graph/>
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

