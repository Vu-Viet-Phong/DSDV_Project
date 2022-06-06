// Set the dimensions and margins of the barchart
var margin = { top: 30, right: 30, bottom: 70, left: 60 };
var w = 600, h = 600;
var width = w - margin.left - margin.right;
var height = h - margin.top - margin.bottom;

/* ----------------------------------- Barchart of mother education result ----------------------------------- */
d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/Medu_result.csv", function(data) {
  // Create barchart element
  var barchart_medu = d3.select("#mother-edu-result")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // List of subgroups = header of the csv files = result here
  var subgroups = data.columns.slice(1)

  // Value of the first column called Medu -> I show them on the X axis
  var groups = d3.map(data, function(d) { return(d.Medu); }).keys();

  // Create scale function
  var xScale = d3.scaleBand().domain(groups).range([0, width]).padding([0.2]);
  var yScale = d3.scaleLinear().domain([0, 100]).range([ height, 0 ]);

  // Define X, Y axis
  var xAxis = d3.axisBottom().scale(xScale);
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_medu.append("g").attr("transform", "translate(0," + height + ")").call(xAxis);
  barchart_medu.append("g").call(yAxis);

  // Another scale for subgroup position?
  var xSubgroup = d3.scaleBand().domain(subgroups).range([0, xScale.bandwidth()]).padding([0.05]);

  // Color palette = one color per subgroup
  var color = d3.scaleOrdinal().domain(subgroups).range(['#e41a1c','#377eb8']);

  // Create bars
  barchart_medu.append("g")
    .selectAll("g")
    // Enter in data = loop group per group
    .data(data)
    .enter()
    .append("g")
      .attr("transform", function(d) { return "translate(" + xScale(d.Medu) + ",0)"; })
    .selectAll("rect")
    .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
    .enter().append("rect")
      .attr("x", function(d) { return xSubgroup(d.key); })
      .attr("y", function(d) { return yScale(d.value); })
      .attr("width", xSubgroup.bandwidth())
      .attr("height", function(d) { return height - yScale(d.value); })
      .attr("fill", function(d) { return color(d.key); });

  
barchart_medu.append("circle").attr("cx",240).attr("cy", 550).attr("r", 8).style("fill", "#e41a1c")
barchart_medu.append("circle").attr("cx", 320).attr("cy", 550).attr("r", 8).style("fill", "#377eb8")
barchart_medu.append("text").attr("x", 190).attr("y", 550).text("Pass").style("font-size", "17px").attr("alignment-baseline","middle")
barchart_medu.append("text").attr("x", 270).attr("y", 550).text("Fail").style("font-size", "17px").attr("alignment-baseline","middle")
});

/* ----------------------------------- Barchart of father education result ----------------------------------- */
d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/Fedu_result.csv", function(data) {
  // Create barchart element
  var barchart_fedu = d3.select("#father-edu-result")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // List of subgroups = header of the csv files = result here
  var subgroups = data.columns.slice(1)

  // Value of the first column called Fedu -> I show them on the X axis
  var groups = d3.map(data, function(d){return(d.Fedu)}).keys()

  // Create scale function
  var xScale = d3.scaleBand().domain(groups).range([0, width]).padding([0.2]);
  var yScale = d3.scaleLinear().domain([0, 80]).range([height, 0]);

  // Define X, Y axis
  var xAxis = d3.axisBottom().scale(xScale);
  var yAxis = d3.axisLeft().scale(yScale);
      
  // Create X axis
  barchart_fedu.append("g").attr("transform", "translate(0," + height + ")").call(xAxis);
  barchart_fedu.append("g").call(yAxis);

  // Another scale for subgroup position?
  var xSubgroup = d3.scaleBand().domain(subgroups).range([0, xScale.bandwidth()]).padding([0.05]);

  // color palette = one color per subgroup
  var color = d3.scaleOrdinal().domain(subgroups).range(['#e41a1c','#377eb8']);

  // Create bars
  barchart_fedu.append("g")
    .selectAll("g")
    // Enter in data = loop group per group
    .data(data)
    .enter()
    .append("g")
      .attr("transform", function(d) { return "translate(" + xScale(d.Fedu) + ",0)"; })
    .selectAll("rect")
    .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
    .enter().append("rect")
      .attr("x", function(d) { return xSubgroup(d.key); })
      .attr("y", function(d) { return yScale(d.value); })
      .attr("width", xSubgroup.bandwidth())
      .attr("height", function(d) { return height - yScale(d.value); })
      .attr("fill", function(d) { return color(d.key); });

  barchart_fedu.append("circle").attr("cx",240).attr("cy",550).attr("r", 8).style("fill", "#e41a1c")
  barchart_fedu.append("circle").attr("cx",320).attr("cy",550).attr("r", 8).style("fill", "#377eb8")
  barchart_fedu.append("text").attr("x", 190).attr("y", 550).text("Pass").style("font-size", "17px").attr("alignment-baseline","middle")
  barchart_fedu.append("text").attr("x", 270).attr("y", 550).text("Fail").style("font-size", "17px").attr("alignment-baseline","middle")
      
});
