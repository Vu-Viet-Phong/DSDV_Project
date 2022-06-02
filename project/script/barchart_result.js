<!DOCTYPE html>
<meta charset="utf-8">

<!-- Load d3.js -->
<script src="https://d3js.org/d3.v4.js"></script>

<!-- Create a div where the graph will take place -->
<div id="my_dataviz"></div>


<script>


  // set the dimensions and margins of the graph
  var margin = {top: 30, right: 30, bottom: 70, left: 60},
      width = 700 - margin.left - margin.right,
      height = 800 - margin.top - margin.bottom;
  
  // append the svg object to the body of the page
  var svg = d3.select("#my_dataviz")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
  
  // Parse the Data
  d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/Khoa_Barchart/myData/status_result.csv", function(data) {
  
  // X axis
  var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(data.map(function(d) { return d.status; }))
    .padding(0.7);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .attr("font-size","14px")
      .attr("font-weight", 600)
      .style("text-anchor", "end", );
      

  // Add X axis label:
  svg.append("text")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height + margin.top + 20)
    .attr("font-size","28px")
    .attr("font-weight", 700)
    .text("Status");
  
  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 120])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Y axis label:
  svg.append("text")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left+20)
    .attr("x", -margin.top)
    .attr("font-size","28px")
    .attr("font-weight", 700)
    .text("Record Count")
  
  // Bars
  svg.selectAll("mybar")
    .data(data)
    .enter()
    .append("rect")
      .attr("x", function(d) { return x(d.status); })
      .attr("y", function(d) { return y(d.count); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.count); })
      .attr("fill", "#69b3a2")
     

  console.log(data)

})
  </script>
