import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import Toolbar from '../components/Toolbar';
import Header from '../components/Header';


const query = gql`{
  getAllUsers {
  	_id
    displayName
    email
    birthday
  }
}
`;

 /*const usersToRender = this.props.getAllUsers
console.log(this.props.getAllUsers)
   var dataJson = JSON.stringify(usersToRender, null, 4);
    var dataStruct;
    for(var key in this.props.allUsersQuery.allUsers[0]){
      console.log(key); // here is your column name you are looking for
    } */

const userItem = (user,i)=><li key={i}> {user._id},  {user.displayName}, {user.email},{user.birthday}</li>

export default graphql(query)(
  ({data: {getAllUsers=[], loading}}) =>[
    
  /*<Toolbar />,*/
  <ul>
    Result : {getAllUsers.map(userItem)}
  </ul>
])