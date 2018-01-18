import React, { Component, PropTypes } from 'react';
import * as d3 from 'd3';
import '../styles/graph.css'



export default class Graph extends Component {
    
  /*static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    nodes: PropTypes.array.isRequired, // eslint-disable-line
    links: PropTypes.array.isRequired, // eslint-disable-line
  };

  constructor(props) {
    super(props);
    const {
      width,
      height,
    } = props;

    this.force = d3.layout.force()
      .charge(-300)
      .linkDistance(50)
      .size([width, height]);
  }

  state = {
    nodes: [],
    links: [],
  };

  componentWillMount() {
    this.force.on('tick', () => {
      // after force calculation starts, call
      // forceUpdate on the React component on each tick
      this.forceUpdate();
    });
  }

  componentWillReceiveProps(nextProps) {
    const mutableNodes = nextProps.nodes.map(
      ({ _id, key, size }) => ({ _id, key, size }),
    );
    const mutableLinks = nextProps.links.map(
      ({ source, target, _id, key, size }) =>
      ({ source, target, _id, key, size }),
    );
    this.setState({
      nodes: mutableNodes,
      links: mutableLinks,
    });
    this.force.nodes(
      mutableNodes,
    ).links(
      mutableLinks,
    );

    this.force.start();
    }*/

  exampleD3(data){
    d3.select(".graphs__bar")
    .selectAll("div")
      .data(data)
      .enter()
      .append("div")
      .style("width", 0)
      .transition().style("width", function(d) { return d + "px"; }).duration(1000)
      .text(function(d) { return d; });
  }
  
  nbOfCarsbyAge(data){
      //points
      var svg = d3.select(".graphs__scatterplot")
              /*.append("svg")*/
              .attr("width", 1500)
      svg.selectAll("circle")
              .data(data)
              .enter()
              .append("circle")
      .attr("cx", function(d) {return d[0];}).transition().duration(2000)
      .attr("cy", function(d) {
          return d[1];
        })
      .attr("r", 5);

      //legend
      svg.selectAll("text")
          .data(data)
          .enter()
          .append("text")
    .text(function(d) {
          return d[0] + "," + d[1];
    })
    .attr("x", function(d) {
          return d[0];
    }).transition().duration(2000)
    .attr("y", function(d) {
          return d[1];
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "red");
  }

  render() {
    /*const {
      width,
      height,
    } = this.props;
    const {
      nodes,
      links,
    } = this.state;*/
    var data = this.props.data;
    const dataset = [
                  [ 5,     20 ],
                  [ 480,   90 ],
                  [ 250,   50 ],
                  [ 100,   33 ],
                  [ 330,   95 ],
                  [ 410,   12 ],
                  [ 475,   44 ],
                  [ 25,    67 ],
                  [ 85,    21 ],
                  [ 220,   88 ]
              ];
    
    return (
      <div className="graphs">
        <div className="graphs__bar">{this.exampleD3(data)}</div>
        <svg className="graphs__scatterplot">{this.nbOfCarsbyAge(dataset)}</svg>
      </div>
    );
  }
}