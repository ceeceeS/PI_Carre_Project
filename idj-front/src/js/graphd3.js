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
  
  salarybyAge(data){
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
              //.on("mouseover", handleMouseOver)
              //.on("mouseout", handleMouseOut);
              .on('mouseover', function () {
                d3.select(this)
                  .transition()
                  .duration(500)
                  .attr("fill", "#0066cc")
                  .attr('r',function(d) {return d[0]/800})
                  .attr('stroke-width',3)
              })
              .on('mouseout', function () {
                d3.select(this)
                  .transition()
                  .duration(500)
                  .attr("fill", "#1E90FF")
                  .attr('r',function(d) {return d[0]/1000})
                  .attr('stroke-width',1)
              })
              .append('title') // Tooltip
                .text(function (d) { return '\nSalary: ' + d[0] +
                                    '\nAge: ' + d[1] +
                                    '\nHousehold: ' + d[2] +
                                    '\nNumber of cars owned: ' + d[3] })

      svg.selectAll("circle").transition()
          .duration(2000)
          .attr("cy", function(d) { return d[1]*6})

      //legend
      svg.selectAll("text")
          .data(data)
          .enter()
          .append("text")
          .text(function(d) {return d[0] + ", " + d[1];})
          .attr("x", function(d) {return scale(d[0]);}).transition().duration(2000)
          .attr("y", function(d) {return d[1]*6;})
          .attr("font-family", "Montserrat")
          .attr("font-size", "12px")
          .attr("fill", "black");
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

  //diagram: Insurance Price / User's age
  createDiagram(data){
    //var margin = {top: 20, right: 20, bottom: 70, left: 40};
    var width = 400 //- margin.left - margin.right;
    var height = 430 //- margin.top - margin.bottom;

    // set the ranges
    //var x = d3.scaleBand().rangeRound([0, width]).padding(0.05);
    //var y = d3.scaleLinear().range([height, 0]);

    // add the SVG element
    /*var svg = d3.select(".diagram")
        .attr("width", width+ "px")
        .attr("height", height+ "px")*/
        //.append("g")
        //.attr("transform","translate(" + margin.left + "," + margin.top + ")");

    // load the data
    d3.json(data, function(error, dt) {
      data.forEach(function(d) {
         d = JSON.stringify(d);
         d = JSON.parse(d);
         console.log(d.cars[0].insurancePrice);
         d.age = d.age;
         d.cars[0].insurancePrice = d.cars[0].insurancePrice;
        });
      
          // scale the range of the data
          //x.domain(data.map(function(d) { return d.age; }));
          //y.domain([0, d3.max(data, function(d) { return d.cars[0].insurancePrices; })]);

          // add axis
          var svg = d3.select(".diagram")
            .attr("width", width+ "px")
            .attr("height", height+ "px")
            .append("g")
            .attr("class", "axes")
            
          
          for(var i = 40 ; i<40+20*8;i=i+20){
            d3.select(".axes")
              .append("circle")
              .attr("cx", 200)
              .attr("cy", 200)
              .attr("r", i)
          };

          svg.append("g").attr("class", "tickmarks")
              .append("text")
              .attr("dy", -2+"px")
              .attr("transform", "translate(200,117.33333333333333)")
              .text("900");
          d3.select(".tickmarks")
              .append("text")
              .attr("dy", -2+"px")
              .attr("transform", "translate(200,78.666666666666)")
              .text("1300");

          svg.append("g").attr("class", "labels")
          for(var i = 6 ; i<360;i=i+60){
            d3.select(".labels")
              .append("text")
              .attr("dy", -4+"px")
              .attr("transform", "translate(200,20) rotate("+(i-6)+",0,180)")
              .text(i/3);
          };
          svg.append("g").attr("class", "arcs")
          for(var i = 40 ; i<40+20*8;i=i+20){
            d3.select(".arcs")
              .append("path")
              .attr("d", "M 10 42 C 8 42 16 2 18 5 C 52 10 56 12 58 18 C 60 40 50 42 38 40Z")
              .attr("transform", "translate(200,200)")
              .attr("style","fill:blue");
          };

          /*M44.67234252422411,-31.279910984947897A54.5348605740206,54.5348605740206 0 0,1 49.42536880319286,
          -23.047427980063986L30.814464759246096,-14.369020899183779A34,34 0 0,0 27.85116950582572,-19.501598835935567Z*/

          /*svg.append("g")
              .attr("class", "y axis")
              .append("text")
              .attr("transform", "rotate(-90)")
              .attr("y", 5)
              .attr("dy", ".71em")
              .style("text-anchor", "end")
              .text("Nb of cars");

          // Add bar chart
          svg.selectAll(".bar")
              .data(data)
              .enter().append("rect")
              .attr("class", "bar")
              .attr("x", function(d) { return x(d.name); })
              .attr("width", x.bandwidth())
              .attr("y", function(d) { return y(d.cars.length); })
              .attr("height", function(d) { return height - y(d.cars.length); });*/
        });
  }

  //Insurance price en fonction du salaire
  scatterplot(jsonData){
        var jsonArray = [];

          // Variables
        //var body = d3.select('body')
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
        var svg = d3.select('.scatterplot')
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


  //Visualisation when email or/and name checked
  


  render() {
    var datas = this.props.data;
    var dataArray = [];
    datas.map(function(data,i){
      dataArray.push([data.salary, data.age, data.household, data.cars.length])
    })
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
                   
    return(
      //The graphs are displayed in function of the items checked in the editor
        <div className="graphs">
            {this.props.itemsChecked.includes("age") ? (
              [<svg className="graphs__scatterplot">{this.salarybyAge(dataArray)}</svg>,
              <svg className="diagram">{this.createDiagram(data)}</svg>]
            ):(<div></div>)}
            {this.props.itemsChecked.includes("insurancePrice") ? (
              [<svg className="scatterplot">{this.scatterplot(data)}</svg>,
              <svg className="diagram">{this.createDiagram(data)}</svg>]
            ):(<div></div>)}
            {this.props.itemsChecked.includes("salary") ? (
              [<svg className="scatterplot">{this.scatterplot(data)}</svg>,
              <svg className="graphs__scatterplot">{this.salarybyAge(dataArray)}</svg>]
            ):(<div></div>)}
            {this.props.itemsChecked.includes("cars") ? (
              [<svg className="bar">{this.graphe(data)}</svg>]
            ):(<div></div>)}
            {this.props.itemsChecked.includes("name") ? (
              [<svg className="bar">{this.graphe(data)}</svg>]
            ):(<div></div>)}
        </div>
      )
  }
}