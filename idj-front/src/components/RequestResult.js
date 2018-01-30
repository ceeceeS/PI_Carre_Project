import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import '../styles/editor.css'
import {graphql} from 'react-apollo';
import gql from 'graphql-tag'
import Button from '../../node_modules/react-bootstrap/lib/Button';
import Graph from '../js/graphd3'

class RequestResult extends Component {

    render() {
        
        var data = this.props.tbody;
        var labels = this.props.thead;

        const RawData = () => (
            <div className="result__tablescroll">
                <div className="result__tablewrap">
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
                </div>
            </div>
        )
        
        return (
            <Router>
                <div>
                    <div className="result__menu">
                        <Link className="result__menu__item" to="/dashboard">Raw Data</Link>{' '}|{' '}
                        <Link className="result__menu__item" to='/dashboard/graph'>Graph D3</Link>
                    </div>

                    <Route exact path="/dashboard" component={RawData}/>
                    <Route exact path="/dashboard/graph" render={() => (<Graph data={this.props.datagraph} itemsChecked={this.props.itemsChecked}/>)}/>
                </div>
            </Router>
        );
    }
}

export default RequestResult



