import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  graphe(jsonData){
  // set the dimensions of the canvas
  var margin = {top: 20, right: 20, bottom: 70, left: 40},
      width = 600 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

  // set the ranges
  var x = d3.scaleBand().rangeRound([0, width]).padding(0.05);
  var y = d3.scaleLinear().range([height, 0]);

  // define the axis
  var xAxis = d3.axisBottom(x)
  var yAxis = d3.axisLeft(y)
      .ticks(10);

  // add the SVG element
  var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", 
            "translate(" + margin.left + "," + margin.top + ")");

  // load the data
  d3.json(jsonData, function(error, data) {
      jsonData.forEach(function(d) {
          d = JSON.stringify(d);
          d = JSON.parse(d);
          console.log(d);
          d.name = d.name;
          d.cars.length = d.cars.length;
      });
    
    // scale the range of the data
    x.domain(jsonData.map(function(d) { return d.name; }));
    y.domain([0, d3.max(jsonData, function(d) { return d.cars.length; })]);

    // add axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
      .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)" );

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 5)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Nb of cars");

    // Add bar chart
    svg.selectAll("bar")
        .data(jsonData)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.name); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return y(d.cars.length); })
        .attr("height", function(d) { return height - y(d.cars.length); });

  });
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
    console.log(data);
    //var dt = this.props.json;
    //console.log(this.props.json)
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
        <svg className="bar">{this.graphe(data)}</svg>
        <svg className="graphs__scatterplot">{this.nbOfCarsbyAge(dataset)}</svg>
      </div>
    );
  }
}