import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import '../styles/editor.css'
import {graphql} from 'react-apollo';
import gql from 'graphql-tag'
import Button from '../../node_modules/react-bootstrap/lib/Button';

class RequestResult extends Component {

    render() {

        const user = this.props.data;
            return (
                <div className="">
                    {user}
                </div>
                
            )
        
    }
}

export default RequestResult