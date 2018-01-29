import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import '../styles/graph.css'



export default class Graph extends Component {
    
  exampleD3(data){
    d3.select(".graphs__bar")
      .selectAll("div")
      .data(data)
      .enter()
      .append("div")
      .style("width", 0)
      .transition().style("width", function(d) { return d[2]*100 + "px"; }).duration(1000)
      .text(function(d) { return d[2]; });
  }
  
  nbOfCarsbyAge(data){
      //points
      var scale = d3.scaleLinear()
            .domain([2000, 100500.2])
            .range([0, 800]);

      var svg = d3.select(".graphs__scatterplot")
              //Make SVG container 100% width and height of parent container
              .attr("preserveAspectRatio", "xMinYMin meet")
              .attr("viewBox", "0 0 1000 800");
      var circles = svg.selectAll("circle")
              .data(data)
              .enter()
              .append("circle")
              .attr("cx", function(d) {return scale(d[0]);})
              .attr("cy", 0)
              .attr("r", function(d) {return d[0]/1000})
              .attr("fill", "#1E90FF")
              .on("mouseover", handleMouseOver)
              .on("mouseout", handleMouseOut);

      circles.transition()
          .duration(2000)
          .attr("cy", function(d) { return d[1]*5})

      //legend
      svg.selectAll("text")
          .data(data)
          .enter()
          .append("text")
          .text(function(d) {return d[0] + ", " + d[1];})
          .attr("x", function(d) {return scale(d[0]);}).transition().duration(2000)
          .attr("y", function(d) {return d[1]*5;})
          .attr("font-family", "Montserrat")
          .attr("font-size", "12px")
          .attr("fill", "black");

      // Create Event Handlers for mouse
      function handleMouseOver(d, i) {  // Add interactivity
            // Use D3 to select element, change color and size
            d3.select(this)
              .attr("fill", "#0066cc")
              .attr("r", d[0]/800);

            /*d3.select(".graphs__scatterplot")
            .selectAll("text")
              .data(data)
              .enter()
              .append("text")
              .text(function(d) {return d[2]+ ", " + d[3]; })
              .attr("font-family", "Montserrat")
              .attr("font-size", "12px")
              .attr("fill", "black");*/
            // Specify where to put label of text
            d3.select(this).selectAll("text")
              .append("text")
              .text(function(d) {
                return d[2]+", "+d[3];  // Value of the text
              })
              .attr("id", i)
              .attr("x", scale(d[0]))
              .attr("y", d[1]*5);
          }

      function handleMouseOut(d, i) {
            // Use D3 to select element, change color back to normal
            d3.select(this)
              .attr("fill", "#1E90FF")
              .attr("r", d[0]/1000);

            // Select text by id and then remove
            //d3.select("#t" + d.x + "-" + d.y + "-" + i).remove();  // Remove text location
          }
  }

  render() {
    var datas = this.props.data;
    var dataArray = [];
    datas.map(function(data,i){
      dataArray.push([data.salary, data.age, data.household, data.cars.length])
    })
console.log(dataArray)
    // default data
    /*const dataset = [
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
              ];*/
    
    return (
      <div className="graphs">
        <div className="graphs__bar">{this.exampleD3(dataArray)}</div>
        <svg className="graphs__scatterplot">{this.nbOfCarsbyAge(dataArray)}</svg>
      </div>
    );
  }
}