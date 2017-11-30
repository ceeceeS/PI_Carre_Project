import React from 'react';
import {graphql} from 'react-apollo';
import gpl from 'graphql-tag';
import Toolbar from '../components/toolbar';

const query = gpl`{
  getAllUsers {
  	_id
    displayName
    email
  }
}
`;

const userItem = (user,i)=><li key={i}> {user._id},  {user.displayName}, {user.email}</li>

export default graphql(query)(
  ({data: {getAllUsers=[], loading}}) =>[
  <Toolbar />,
  <ul>
    {getAllUsers.map(userItem)}
  </ul>
])