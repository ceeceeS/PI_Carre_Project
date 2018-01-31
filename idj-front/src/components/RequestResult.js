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
        if (this.props.data.loading) {
            return <div>Loading</div>;
        }
        
        var cols = [];
        var rows = [];
        var result = [[]];
        //var dataset = [];
        //var json = [];
    
        var optionsCars = this.props.stateEditor.optionsCars;
        //console.log(optionsCars)
        this.props.stateEditor.options.map(function(title){
          cols.push(title);
        })
    
        this.props.data.getAllUsers.map(function(row){
          rows.push(row);
        })
        console.log(rows)
    
        var thead = cols.map((col) => col =="cars"?
            optionsCars.map((carItem,j) => <th key={j}>Cars.{carItem}</th>): 
            <th key={col}>{col}</th>
        );
        var tbody = rows.map(function(row,i){
            //dataset.push(row);
            //json.push(JSON.stringify(row));
            return (
              <tr key={i}>
                {cols.map((col,index)=> col =="cars"? /*row[col].length == 0? <td key={index}>test</td>:*/
                row[col].map((car_label)=>
                  optionsCars.map((carItem,k) => <td key={k}>{car_label[carItem]}</td>)):
                  <td key={index}>{row[col]}</td>)}
              </tr>
            );
        })

        const RawData = () => (
            <div className="result__tablescroll">
                <div className="result__tablewrap">
                    <table>
                        <thead>
                            <tr>
                                {thead}
                            </tr>
                        </thead>
                        <tbody>
                            {tbody}
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
                    <Route exact path="/dashboard/graph" render={() => (<Graph data={rows}/>)}/>
                </div>
            </Router>
        );
    }
}


const Cquery =  gql` query getAllUsers($color: String!){
    getAllUsers(color: $color) {
    name
    email
    age
    salary
    household 
    cars{
      _id
      model
      registrationNo
      carColor 
      insurancePrice 
      kilometer 
      manufactureYear
      
    }
  }
}
`
;
const datafetch = graphql(Cquery,{
  // The variable $keyword for the query is computed from the
  // React props passed to this container.
  options: (props)=> ({
    variables: { color:props.color},
    
  })
})

export default(datafetch)(RequestResult)



