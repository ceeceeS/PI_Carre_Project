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
   
    console.log(options);
  }

  onChangeCar(e) {
    // current array of options
    const optionsCars = this.state.optionsCars
    const selectCarcolor = this.state.selectCarcolor
    
    let index;

    // check if the check box is checked or unchecked
    if (e.target.checked ) {
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
    this.setState({ optionsCars: optionsCars})
    //this.setState({ selectCarcolor:e.target.value})
    //console.log("coleur "+this.state.selectCarcolor);
  
    console.log(this.state.optionsCars);
  }

onChangeCarColor(e){
  const ShowingCar = this.state.ShowingCar
  //if(e.target.name == colors)
  //const selectCarcolor = this.state.selectCarcolor
  this.setState({ selectCarcolor:e.target.value, ShowingCar:!ShowingCar})
  

    console.log("color "+this.state.selectCarcolor);
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
      console.log(e.target.value)
      // userItem = (user,i)=> key={i}> for (option in options) {{user.option},}
   } else {
     // or remove the value from the unchecked checkbox from the array
     index = options.indexOf(+e.target.value)
     options.splice(index, 1)
   }
   
    this.setState({showing : !showing, optionsCars :[]})

    console.log(options);
    
  }

  render() {
   
    console.log("jdjdj"+this);
   // const selectCarcolor = this.props.selectedoptions
   const {showing} = this.state;
   const {ShowingCar} = this.state;
   const {selectCarcolor} = this.state;
  console.log("ehehhe "+ this.state.selectCarcolor);
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
          <div className = "editor">

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
                    <select name="cars" value={this.state.selectCarcolor} onChange={this.onChangeCarColor.bind(this)}>
                      <option value="select car color">select car color</option>
                      <option value="Red">Red</option>
                      <option value="Black">Black</option>
                      <option value="Green">Green</option>
                      <option value="Yellow">Yellow</option>
                      <option value="Grey">Grey</option>
                      <option value="Blue">Blue</option>
                    </select>
                </div>]:""}{this.state.ShowingCar?
                    [
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
            </div> ,
             <h3> Users</h3>,
             <div className = "editor__item">
               <label>Full Name</label>
               <input type="checkbox"  value= "name" onChange={this.onChange.bind(this)} />
             </div>,
             <div className = "editor__item">
               <label>Email</label>
               <input type="checkbox" value="email" onChange={this.onChange.bind(this)} />
             </div>,
             <div className = "editor__item">
               <label>Age</label>
               <input type="checkbox" value="age" onChange={this.onChange.bind(this)} />
             </div>,
             <div className = "editor__item">
               <label>Salary</label>
               <input type="checkbox" value= "salary" onChange={this.onChange.bind(this)} />
             </div>,
             <div className = "editor__item">
               <label>Household</label>
               <input type="checkbox" value= "household" onChange={this.onChange.bind(this)} />
             </div>
                    ]:""}
                </div>  
              </div>
            </form>
          </div>
           
               
                 
              
              
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














// const Cquery =  gql` query getAllUsers($color: String!){
//     getAllUsers(color: $color) {
//     name
//     email
//     age
//     salary
//     household 
//     cars{
//       _id
//       model
//       registrationNo
//       carColor 
//       insurancePrice 
//       kilometer 
//       manufactureYear
      
//     }
//   }
// }
// `
// ;
// const datafetch = graphql(Cquery,{
//   // The variable $keyword for the query is computed from the
//   // React props passed to this container.
//   options: {
//     variables: { color: "this.state.selectCarcolor"},
    
//   }
// })
//jdjdj


export default RequestEditor;

