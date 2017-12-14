import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import '../styles/editor.css'
import {graphql} from 'react-apollo';
import gql from 'graphql-tag'

// {this.props.data.getAllUsers.map((users) => <li key={users}> 
//                 user.displayName </li>)}
//             {console.log(this.state.options)}

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
    let index;

    // check if the check box is checked or unchecked
    if (e.target.checked) {
       // add the numerical value of the checkbox to options array
       options.push(e.target.value)
       console.log(e.target.value)
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

    return (
      <main className='portfolio'>

        <form>
          <div className="input-group">
            <label>cb1</label>
            <input type="checkbox" value= "displayName" onChange={this.onChange.bind(this)} />
          </div>
          <div className="input-group">
            <label>cb2</label>
            <input type="checkbox" value="email" onChange={this.onChange.bind(this)} />
          </div>
          <div className="input-group">
            <label>cb3</label>
            <input type="checkbox" value="birthday" onChange={this.onChange.bind(this)} />
          </div>
        </form>
        <div className="selected-items">
            {this.props.data.getAllUsers.map((users) => <li key={users}> 
                {this.state.options.map((i) => users[i])}</li>)}
        </div>
      </main>
    )
  }

}
const Cquery = gql` query getAllUsers{
  getAllUsers {
   displayName
     email
     birthday
    
   
  }
}
`;

export default graphql(Cquery)(RequestEditor)