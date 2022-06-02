
var margin = { top: 30, right: 30, bottom: 20, left: 50 };
var w = 700, h = 500;
var width = w - margin.left - margin.right;
var height = h - margin.top - margin.bottom;

/* ------------------------------- Guardian Job ------------------------------- */

d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/Fedu_result.csv", function(data) {
  // Create first barchart element
  var barchart1 = d3.select("#guardian_job")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // List of subgroups = header of the csv files = result here
  var subgroups = data.columns.slice(1);

  // List of groups = family size here = value of the first column called GuardianJob -> I show them on the X axis
  var groups = d3.map(data, function(d) { return d.GuardianJob; }).keys();

  // Create scale function
  var xScale = d3.scaleBand().domain(groups).range([0, width]).padding([0.2]);
  var yScale = d3.scaleLinear().domain([0, 80]).range([height, 0]);

  // Define X, Y axis
  xAxis = d3.axisBottom().scale(xScale);
  yAxis = d3.axisLeft().scale(yScale);

  // Create X, Y axis
  barchart1.append("g").attr("transform", "translate(0," + height + ")").call(xAxis);
  barchart1.append("g").call(yAxis);

  // Another scale for subgroup position?
  var xSubgroup = d3.scaleBand().domain(subgroups).range([0, xScale.bandwidth()]).padding([0.05])

  // Color palette = one color per subgroup
  var color = d3.scaleOrdinal().domain(subgroups).range(['#e41a1c','#377eb8']);

  // Show the bars
  barchart1.append("g")
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", function(d) { return "translate(" + xScale(d.GuardianJob) + ",0)"; })
    .selectAll("rect")
    .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
    .enter().append("rect")
    .attr("x", function(d) { return xSubgroup(d.key); })
    .attr("y", function(d) { return yScale(d.value); })
    .attr("width", xSubgroup.bandwidth())
    .attr("height", function(d) { return height - yScale(d.value); })
    .attr("fill", function(d) { return color(d.key); });
});

/* ------------------------------- Guardian Job ------------------------------- */
// Create first barchart element
d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/gedu_result.csv", function(data) {
  // Create second barchart element
  var barchart2 = d3.select("#guardian_education")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // List of subgroups = header of the csv files = result here
  var subgroups = data.columns.slice(1);

  // List of groups = family size here = value of the first column called GuardianEducation -> I show them on the X axis
  var groups = d3.map(data, function(d) { return d.GuardianEducation; }).keys();

  // Create scale function
  var xScale = d3.scaleBand().domain(groups).range([0, width]).padding([0.2]);
  var yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]);
  
  // Define X, Y axis
  var xAxis = d3.axisBottom().scale(xScale);
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X, Y axis
  barchart2.append("g").attr("transform", "translate(0," + height + ")").call(xAxis);
  barchart2.append("g").call(yAxis);

  // Another scale for subgroup position?
  var xSubgroup = d3.scaleBand().domain(subgroups).range([0, xScale.bandwidth()]).padding([0.05]);

  // Color palette = one color per subgroup
  var color = d3.scaleOrdinal().domain(subgroups).range(['#e41a1c','#377eb8']);

  // Show the bars
  barchart2.append("g")
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", function(d) { return "translate(" + xScale(d.GuardianEducation) + ",0)"; })
    .selectAll("rect")
    .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
    .enter().append("rect")
    .attr("x", function(d) { return xSubgroup(d.key); })
    .attr("y", function(d) { return yScale(d.value); })
    .attr("width", xSubgroup.bandwidth())
    .attr("height", function(d) { return height - yScale(d.value); })
    .attr("fill", function(d) { return color(d.key); });
});