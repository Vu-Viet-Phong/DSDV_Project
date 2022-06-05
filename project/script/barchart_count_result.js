// Set the dimensions and margins of the barchart
var margin = {top: 30, right: 30, bottom: 70, left: 60};
var w = 600, h = 600;
var width = w - margin.left - margin.right;
var height = h - margin.top - margin.bottom;
  
/* ------------------------------ Barchart of the number of student status results ------------------------------ */
d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/result/status_result.csv", function(data) {
  // Create barchart element
  var barchart = d3.select("#status-result")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
          
  // Create scale function
  var xScale = d3.scaleBand().range([0, width]).domain(data.map(function(d) { return d.status; })).padding(0.7);
  var yScale = d3.scaleLinear().domain([0, 120]).range([height, 0]);

  // Define X, Y axis
  xAxis = d3.axisBottom().scale(xScale);
  yAxis = d3.axisLeft(yScale)

  // Create X axis
  barchart.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .attr("font-size","14px")
    .attr("font-weight", 600)
    .style("text-anchor", "end", );
  
  // Create Y axis
  barchart.append("g").call(yAxis);
    
  // Create X labels
  barchart.append("text")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height + margin.top + 20)
    .attr("font-size","24px")
    .attr("font-weight", 700)
    .text("Status");

  // Create Y labels
  barchart.append("text")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left + 25)
    .attr("x", -margin.top) 
    .attr("font-size","24px")
    .attr("font-weight", 700)
    .text("Record Count")

  // Create bars
  barchart.selectAll("mybar").data(data).enter().append("rect")
    .attr("x", function(d) { return xScale(d.status); })
    .attr("y", function(d) { return yScale(d.count); })
    .attr("width", xScale.bandwidth())
    .attr("height", function(d) { return height - yScale(d.count); })
    .attr("fill", "#69b3a2")
});

/* ------------------------------ Barchart of the number of student status results ------------------------------ */
// Parse the Data
d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/result/average_result.csv", function(data) {
  // Create barchart element
  var barchart2 = d3.select("#average_result")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Create scale function
  var xScale = d3.scaleBand().range([0, width]).domain(data.map(function(d) { return d.sex; })).padding(0.7);
  var yScale = d3.scaleLinear().domain([0, d3.max(data, function(d) { return d.count; })]).range([height, 0]);

  // Define X, Y axis
  xAxis = d3.axisBottom(xScale);
  yAxis = d3.axisLeft(yScale);

  // Create X axis
  barchart2.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .attr("font-size","18px")
    .attr("font-weight", 600)
    .style("text-anchor", "end");

  // Create Y axis
  barchart2.append("g").call(yAxis);

  // Add X axis label:
  barchart2.append("text")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height + margin.top + 20)
    .attr("font-size","24px")
    .attr("font-weight", 700)
    .text("Sex");

  // Y axis label:
  barchart2.append("text")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left + 25)
    .attr("x", -margin.top)
    .attr("font-size","24px")
    .attr("font-weight", 700)
    .text("Record Count");

// Create bars
  barchart2.selectAll("rect").data(data).enter().append("rect")
    .attr("x", function(d) { return xScale(d.sex); })
    .attr("y", function(d) { return yScale(d.count); })
    .attr("width", xScale.bandwidth())
    .attr("height", function(d) { return height - yScale(d.count); })
    .attr("fill", "#69b3a2");

  d3.select("#sort-select").on("change", function () { 
    var criterion = d3.select(this).property("value");
    console.log(criterion);
    if (criterion == "average") {
        d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/result/average_result.csv", function(dataset) {
          barchart2.selectAll("rect").data(dataset).transition().duration(1000)
            .attr("x", function(d) { return xScale(d.sex); })
            .attr("y", function(d) { return yScale(d.count); })
            .attr("width", xScale.bandwidth())
            .attr("height", function(d) { return height - yScale(d.count); })
            .attr("fill", "#69b3a2");
        });
      } else if (criterion == "good") {   

        d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/result/good_result.csv", function(dataset) {
          barchart2.selectAll("rect").data(dataset).transition().duration(1000)
            .attr("x", function(d) { return xScale(d.sex); })
            .attr("y", function(d) { return yScale(d.count); })
            .attr("width", xScale.bandwidth())
            .attr("height", function(d) { return height - yScale(d.count); })
            .attr("fill", "#69b3a2");
        });
      } else {
        d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/result/excellent_result.csv", function(dataset) {
          barchart2.selectAll("rect").data(dataset).transition().duration(1000)
            .attr("x", function(d) { return xScale(d.sex); })
            .attr("y", function(d) { return yScale(d.count); })
            .attr("width", xScale.bandwidth())
            .attr("height", function(d) { return height - yScale(d.count); })
            .attr("fill", "#69b3a2");
        });
      }
  });
});
