import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import '../styles/editor.css'
import {graphql} from 'react-apollo';
import gql from 'graphql-tag'
import Button from '../../node_modules/react-bootstrap/lib/Button';
import Graph from '../js/graphd3'

class RequestResult extends Component {

    render() {
        
        var data = this.props.tbody;
        var labels = this.props.thead;
        
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            {labels}
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </table>
                <Graph data={this.props.datagraph}/>
            </div>
        );
    }
}

export default RequestResult



