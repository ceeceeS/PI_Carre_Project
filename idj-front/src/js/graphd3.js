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
              .attr("viewBox", "0 0 1000 500");
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
  var svg = d3.select(".bar").append("svg")
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
          //console.log(d);
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
    svg.selectAll(".bar")
        .data(jsonData)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.name); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return y(d.cars.length); })
        .attr("height", function(d) { return height - y(d.cars.length); });

  });
}

  //Insurance price en fonction du salaire
  scatterplot(jsonData){
  var jsonArray = [];

    // Variables
  var body = d3.select('body')
  var margin = { top: 50, right: 50, bottom: 50, left: 50 }
  var h = 500 - margin.top - margin.bottom
  var w = 500 - margin.left - margin.right

  // load the data
  d3.json(jsonData, function( data) {
      jsonData.forEach(function(d) {
        d.cars.forEach(function(c) {
          d = JSON.stringify(d);
          d = JSON.parse(d);
          c = JSON.stringify(c);
          c = JSON.parse(c);
          //console.log(d);
          jsonArray.push({"salary": d.salary, "insurancePrice": c.insurancePrice});
        })
      });

      jsonArray.forEach(function(d) {
        d.salary = d.salary;
        d.insurancePrice = d.insurancePrice;
      });

  // Scales
  var colorScale = d3.scaleOrdinal(d3.schemeCategory20)
  var xScale = d3.scaleLinear()
    .domain([
      d3.min([0,d3.min(jsonArray,function (d) { return d.salary })]),
      d3.max([0,d3.max(jsonArray,function (d) { return d.salary })])
      ])
    .range([0,w])
  var yScale = d3.scaleLinear()
    .domain([
      d3.min([0,d3.min(jsonArray,function (d) { return d.insurancePrice })]),
      d3.max([0,d3.max(jsonArray,function (d) { return d.insurancePrice })])
      ])
    .range([h,0])
  // SVG
  var svg = body.append('svg')
      .attr('height',h + margin.top + margin.bottom)
      .attr('width',w + margin.left + margin.right)
    .append('g')
      .attr('transform','translate(' + margin.left + ',' + margin.top + ')')
  // X-axis
  var xAxis = d3.axisBottom(xScale)
    .ticks(5)
  // Y-axis
  var yAxis = d3.axisLeft(yScale)
    .ticks(5)
  // Circles
  var circles = svg.selectAll('circle')
      .data(jsonArray)
      .enter()
    .append('circle')
      .attr('cx',function (d) { return xScale(d.salary) })
      .attr('cy',function (d) { return yScale(d.insurancePrice) })
      .attr('r','10')
      .attr('stroke','black')
      .attr('stroke-width',1)
      .attr('fill',function (d,i) { return colorScale(i) })
      .on('mouseover', function () {
        d3.select(this)
          .transition()
          .duration(500)
          .attr('r',20)
          .attr('stroke-width',3)
      })
      .on('mouseout', function () {
        d3.select(this)
          .transition()
          .duration(500)
          .attr('r',10)
          .attr('stroke-width',1)
      })
    .append('title') // Tooltip
      .text(function (d) { return '\nInsurance Price: ' + d.insurancePrice +
                           '\nOwner salary: ' + d.salary })
  // X-axis
  svg.append('g')
      .attr('class','axis')
      .attr('transform', 'translate(0,' + h + ')')
      .call(xAxis)
    .append('text') // X-axis Label
      .attr('class','label')
      .attr('y',-10)
      .attr('x',w)
      .attr('dy','.71em')
      .style('text-anchor','end')
      .text('Salary')
  // Y-axis
  svg.append('g')
      .attr('class', 'axis')
      .call(yAxis)
    .append('text') // y-axis Label
      .attr('class','label')
      .attr('transform','rotate(-90)')
      .attr('x',0)
      .attr('y',5)
      .attr('dy','.71em')
      .style('text-anchor','end')
      .text('Insurance Price')
})

}


  render() {
    var datas = this.props.data;
    var dataArray = [];
    datas.map(function(data,i){
      dataArray.push([data.salary, data.age, data.household, data.cars.length])
    })
    // default data
    /*const dataset = [
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
        <div className="graphs__bar">{this.exampleD3(dataArray)}</div>
        <svg className="graphs__scatterplot">{this.nbOfCarsbyAge(dataArray)}</svg>
        <svg className="bar">{this.graphe(data)}</svg>
        <svg className="scatterplot">{this.scatterplot(data)}</svg>
      </div>
    );
  }
}