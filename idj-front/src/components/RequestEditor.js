import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import '../styles/editor.css'

/*const usersToRender = this.props.allUsersQuery.allUsers
    var dataJson = JSON.stringify(usersToRender, null, 4);
    var dataStruct;
    for(var key in this.props.allUsersQuery.allUsers[0]){
      console.log(key); // here is your column name you are looking for
    } */

class RequestEditor extends Component {
  render(){
      

        return(
        <div className="editor">
            <div className="editor__item"><input type="checkbox" name="1st" value="1"/><label htmlFor="1st">Field</label></div>
            <div className="editor__item"><input type="checkbox" name="2nd" value="2"/><label htmlFor="2nd">Field</label></div>
            <div className="editor__item"><input type="checkbox" name="3rd" value="3"/><label htmlFor="3rd">Field</label></div>
            <div className="editor__item"><input type="checkbox" name="4th" value="4"/><label htmlFor="4th">Field</label></div>
        </div>
        )
  }
}
export default withRouter(RequestEditor)