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
import PropTypes from 'prop-types';

class RequestEditor extends Component {

   constructor() {
    super()
    
    // initialize your options array on your state
    this.state = {
      options: [],
      optionsCars : [],
      selectCarcolor:'',
      ShowingCar: false,
      showing : false
    }


  
  }
  onChange(e) {
    // current array of options
    const options = this.state.options

    const cars = this.state.cars
    let index;
    // check if the check box is checked or unchecked
   if (e.target.checked && e.target.value !="cars") {
       options.push(e.target.value)
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = options.indexOf(e.target.value)
      options.splice(index, 1)
    }
    // update the state with the new array of options
    this.setState({ options: options})
  }

  onChangeCar(e) {
    // current array of options
    const optionsCars = this.state.optionsCars
    
    let index;

    // check if the check box is checked or unchecked
    if (e.target.checked ) {
       // add the numerical value of the checkbox to options array
       optionsCars.push(e.target.value)
       // userItem = (user,i)=> key={i}> for (option in options) {{user.option},}
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = optionsCars.indexOf(+e.target.value)
      optionsCars.splice(index, 1)
    }

    // update the state with the new array of optionsCars
    this.setState({ optionsCars: optionsCars})
  }

onChangeCarColor(e){
  const ShowingCar = this.state.ShowingCar
  const optionsCars = this.state.optionsCars
  let index;
  

  index = optionsCars.indexOf("carColor")
  optionsCars.splice(index, 1)
  this.setState({ selectCarcolor:e.target.value})
  optionsCars.push("carColor");
  
  this.setState({ optionsCars:optionsCars})
  }

  displayCarOption(e)
  {
    const options = this.state.options
    const showing = this.state.showing
    const optionsCars = this.state.optionsCars
    
    let index
    if (e.target.checked && e.target.value =="cars") {
      // add the numerical value of the checkbox to options array
      options.push(e.target.value)
      // userItem = (user,i)=> key={i}> for (option in options) {{user.option},}
   } else {
     // or remove the value from the unchecked checkbox from the array
     index = options.indexOf(+e.target.value)
     options.splice(index, 1)
   }
   
    this.setState({showing : !showing, optionsCars :[]})    
  }

  render() {
   
   const {showing} = this.state;
   const {ShowingCar} = this.state;
   const {selectCarcolor} = this.state;
    return (

      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
        <div className = "editor">
              <form name ="myform">
              <div className="form-group">
                <div className = "editor_title">
                  <h3> Cars </h3>
                </div>
                <div className = "editor__item">
                    <label>cars</label>
                    <input type="checkbox"  value="cars" onChange={this.displayCarOption.bind(this) } />
                    {this.state.showing?
                    [
                      <div className = "editor__item">
                      <label>Color</label>
                      <select value={this.state.selectCarcolor} onChange={this.onChangeCarColor.bind(this)}>
                        <option value="select car color">select car color</option>
                        <option value="Red">Red</option>
                        <option value="Black">Black</option>
                        <option value="Green">Green</option>
                        <option value="White">White</option>
                        <option value="Grey">Grey</option>
                        <option value="Blue">Blue</option>
                      </select>
                  </div>,
                    <div className = "editor__item">
                        <label>Model</label>
                        <input type="checkbox" name="cars" value="model" onChange={this.onChangeCar.bind(this)} />
                    </div>,
                    <div className = "editor__item">
                        <label>Registration N° </label>
                        <input type="checkbox" name="cars" value="registrationNo" onChange={this.onChangeCar.bind(this)} />
                    </div>,
                   
                <div className = "editor__item">
                    <label>Insurance Price</label>
                    <input type="checkbox" name="cars" value="insurancePrice" onChange={this.onChangeCar.bind(this)} />
                </div>, 
                <div className = "editor__item">
                <label>Kilometer</label>
                <input type="checkbox" name="cars" value="kilometer" onChange={this.onChangeCar.bind(this)} />
            </div>,
            <div className = "editor__item">
                <label>Year of manufacture </label>
                <input type="checkbox" name="cars" value="manufactureYear" onChange={this.onChangeCar.bind(this)} />
            </div> 
                    ]:""}
                </div>  
              </div>
            </form>
          </div>
          <div className = "editor">
            <form name ="myform">
                <h3> Users</h3>
                  <div className = "editor__item">
                    <label>Full Name</label>
                    <input type="checkbox"  value= "name" onChange={this.onChange.bind(this)} />
                  </div>
                  <div className = "editor__item">
                    <label>Email</label>
                    <input type="checkbox" value="email" onChange={this.onChange.bind(this)} />
                  </div>
                  <div className = "editor__item">
                    <label>Age</label>
                    <input type="checkbox" value="age" onChange={this.onChange.bind(this)} />
                  </div>
                  <div className = "editor__item">
                    <label>Salary</label>
                    <input type="checkbox" value= "salary" onChange={this.onChange.bind(this)} />
                  </div>
                  <div className = "editor__item">
                    <label>Household</label>
                    <input type="checkbox" value= "household" onChange={this.onChange.bind(this)} />
                  </div>
                 
              </form>
            
            </div>
           
        </div>

        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-9">
          <div className="result">
         <RequestResult stateEditor={this.state} color={this.state.selectCarcolor}/>
          </div>
        </div>
      </div>
    )
  }
}


export default RequestEditor;

