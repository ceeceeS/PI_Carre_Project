import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import '../styles/editor.css'
import {graphql} from 'react-apollo';
import gql from 'graphql-tag'
import Button from '../../node_modules/react-bootstrap/lib/Button';

class RequestEditorForCars extends Component {
   constructor() {
    super()
    // initialize your options array on your state
    this.state = {
      optionsCars: []
      

    }
  }
  
  onChange(e) {
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
  render() {
    if (this.props.data.loading) {
            return <div>Loading</div>;
        }
        

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
        <label>Model</label>
        <input type="checkbox" name="cars" value="model" onChange={this.onChange.bind(this)} />
      </div>
    <div className = "editor__item">
        <label>Registration N° </label>
        <input type="checkbox" name="cars" value="registrationNo" onChange={this.onChange.bind(this)} />
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
        <div className="editor_result">
            {this.props.data.getAllCars.map((cars) => <p key={cars}> 
            {this.state.optionsCars.map((i) => <span>{cars[i]} </span>)}</p>)}
        </div>
      </div>
    </div>
    )
  }

}
const Cquery = gql` query getAllCars{
  getAllCars {
      model
      registrationNo
      
    }
   
   
  
}
`;

export default graphql(Cquery)(RequestEditorForCars)

