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

        //var rows = [];
        //var header = [];
        var data = this.props.tbody;
        var labels = this.props.thead;
        
        /*labels.forEach(function(lb) {
            header.push(<th className="editor__label">{lb}</th>);
        }.bind(this));
      
       
        data.forEach(function(user) {
        
           rows.push(<tr><td>{user.info}</td></tr>);
        }.bind(this));*/
        
        //console.log(rows);

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

        /*
        var rows = [];
        var header = [];
        var data = this.props.data;
        var labels = this.props.label;

        labels.forEach(function(lb,i) {
             header.push(<td className="editor__label">{lb}</td>);
        }.bind(this));

        //const result = data.filter(use => use.element == labels[i]);
        data.forEach(function(user,i) {
            //for(var i=0;i<labels.length;i++){
                console.log(user);
                //console.log(result);
                //<tr key={i}>
                {rows.push(<td>{user.info}</td>)}
                //</tr>
            //}
        }.bind(this));
        //console.log(rows);

        return (
            <table className="MyClassName">
                <thead>
                    <tr>{labels}</tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
        )*/
    }
}

export default RequestResult



