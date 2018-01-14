import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import '../styles/editor.css'
import {graphql} from 'react-apollo';
import gql from 'graphql-tag'
import Button from '../../node_modules/react-bootstrap/lib/Button';

class RequestResult extends Component {

    render() {

        var rows = [];
        var header = [];
        var data = this.props.data;
        var labels = this.props.label;

        labels.forEach(function(lb) {
            header.push(<td className="editor__label">{lb}</td>);
        }.bind(this));

        data.forEach(function(user) {
            rows.push(<tr><td>{user.info}</td></tr>);
        }.bind(this));
        //console.log(rows);

        return (
            <table>
                <thead>
                    <tr>
                        {header}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default RequestResult