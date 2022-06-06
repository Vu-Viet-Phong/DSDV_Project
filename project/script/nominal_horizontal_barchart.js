// Set the dimensions and margins of the barchart
var margin = { top: 10, right: 20, bottom: 30, left: 40 };
var w = 330, h = 300;
var width = w - margin.left - margin.right;
var height = h - margin.top - margin.bottom;

/* ---------------------------------------- Barchart of the activity fail ---------------------------------------- */
d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/nominal_fail.csv", function(data) {
  // Create barchart activity fail element
  var barchart_activity_fail = d3.select("#activity-fail")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 80]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.activities; })).padding(.1);

  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_activity_fail.append("g").call(yAxis);

  // Create bars
  barchart_activity_fail.selectAll("rect").data(data).enter().append("rect")
    .attr("x", xScale(0))
    .attr("y", function(d) { return yScale(d.activities); })
    .attr("width", function(d) { return xScale(d.aValue); })
    .attr("height", yScale.bandwidth())
    .attr("fill", "#ff3737");
});


/* ---------------------------------------- Barchart of the activity medium ---------------------------------------- */
d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/nominal_medium.csv", function(data) {
  // Create barchart activity fail element
  var barchart_activity_medium = d3.select("#activity-good")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 70]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.activities; })).padding(.1);

  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_activity_medium.append("g").call(yAxis);

  //Bars
  barchart_activity_medium.selectAll("rect").data(data).enter().append("rect")
    .attr("x", xScale(0) )
    .attr("y", function(d) { return yScale(d.activities); })
    .attr("width", function(d) { return xScale(d.aValue); })
    .attr("height", yScale.bandwidth() )
    .attr("fill", "#ffbc4b");
});

/* ---------------------------------------- Barchart of the activity good ---------------------------------------- */
d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/nominal_good.csv", function(data) {
  // Create barchart activity good element
  var barchart_activity_good = d3.select("#activity-medium")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 60]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.activities; })).padding(.1);

  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_activity_good.append("g").call(yAxis);

  // Create bars
  barchart_activity_good.selectAll("rect").data(data).enter().append("rect")
    .attr("x", xScale(0))
    .attr("y", function(d) { return yScale(d.activities); })
    .attr("width", function(d) { return xScale(d.aValue); })
    .attr("height", yScale.bandwidth())
    .attr("fill", "#257cff");
});

/* ------------------------------------------ Barchart of the activity excellent ------------------------------------------ */
d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/nominal_excellent.csv", function(data) {
  // Create barchart activity good element
  var barchart_activity_excellent = d3.select("#activity-excellent")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 20]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.activities; })).padding(.1);

  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_activity_excellent.append("g").call(yAxis);

  // Create bars
  barchart_activity_excellent.selectAll("myRect").data(data).enter().append("rect")
    .attr("x", xScale(0))
    .attr("y", function(d) { return yScale(d.activities); })
    .attr("width", function(d) { return xScale(d.aValue); })
    .attr("height", yScale.bandwidth())
    .attr("fill", "#37ff45");
});

