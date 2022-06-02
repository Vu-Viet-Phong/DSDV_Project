// Set the dimensions and margins of the barchart
var margin = {top: 30, right: 30, bottom: 70, left: 60};
var w = 700, h = 600;
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
  barchart.selectAll("mybar")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", function(d) { return xScale(d.status); })
    .attr("y", function(d) { return yScale(d.count); })
    .attr("width", xScale.bandwidth())
    .attr("height", function(d) { return height - yScale(d.count); })
    .attr("fill", "#69b3a2")
});

/* ------------------------------ Barchart of the number of student status results ------------------------------ */
// Parse the Data
d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/result/average_result.csv", function(data) {
  var barchart = d3.select("#average_result")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

// X axis
var x = d3.scaleBand()
.range([ 0, width ])
.domain(data.map(function(d) { return d.sex; }))
.padding(0.7);
barchart.append("g")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(x))
.selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .attr("font-size","18px")
  .attr("font-weight", 600)
  .style("text-anchor", "end",);
  

// Add X axis label:
barchart.append("text")
.attr("text-anchor", "end")
.attr("x", width)
.attr("y", height + margin.top + 20)
.attr("font-size","28px")
.attr("font-weight", 700)
.text("Sex");

// Add Y axis
var y = d3.scaleLinear()
.domain([0, 70])
.range([ height, 0]);
barchart.append("g")
.call(d3.axisLeft(y));

// Y axis label:
barchart.append("text")
.attr("text-anchor", "end")
.attr("transform", "rotate(-90)")
.attr("y", -margin.left+20)
.attr("x", -margin.top)
.attr("font-size","28px")
.attr("font-weight", 700)
.text("Record Count")

// Bars
barchart.selectAll("mybar")
.data(data)
.enter()
.append("rect")
  .attr("x", function(d) { return x(d.sex); })
  .attr("y", function(d) { return y(d.count); })
  .attr("width", x.bandwidth())
  .attr("height", function(d) { return height - y(d.count); })
  .attr("fill", "#69b3a2")


  d3.select("#sort-select").on("change", function (event, d) { 
    var criterion = d3.select(this).property("value");
  
    dataset = dataset.sort(function (a, b) {
      switch (criterion) {
        case "none":
          return b.ma - a.ma;
        case "name":
          if (a.province < b.province)
            return -1;
          else if (a.province > b.province)
            return 1;
          else return 0;
        case "GDP":
          return b["GRDP-VND"] - a["GRDP-VND"];
      }
    });
    
    xScale.domain([0, d3.max(dataset, function(d) { 
        return d["GRDP-VND"]; 
      })])
      .nice();
    
    yScale.domain(d3.range(dataset.length));
  
    barchart.select(".xAxis")
      .transition()
      .duration(500)
      .call(xAxis);
  
      barchart.select(".yAxis")
      .transition()
      .duration(500)
      .call(yAxis);
  
      var key = function(d) {
        return d.province;
      }
  
    bars = barchart.selectAll("rect")
               .data(dataset, key);
  
    bars.enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", h_barchart)
      .attr("width", function(d) {
        return xScale(d["GRDP-VND"]);
      })
      .attr("height", yScale.bandwidth())
      .attr("fill", function(d) {
        return "rgb(0, 0, " + Math.round(xScale(d["GRDP-VND"])) + ")";
      })
      .merge(bars) 
      .transition()
      .duration(500)
      .attr("x", 0)
      .attr("y", function(d, i) {
        return yScale(i);
      })
      .attr("width", function(d) {
        return xScale(d["GRDP-VND"]);
      })
      .attr("height", yScale.bandwidth());
  
    var addLabel = barchart.selectAll("text")
      .data(dataset, key);
  
    addLabel.enter()
        .append("text")
        .merge(addLabel)
        .transition()
        .duration(500)
        .attr("class", "label")
        .text(function(d) { 
          return d["GRDP-VND"];
        })
        .attr("x", function(d){
          return xScale(d["GRDP-VND"]) + 20;
        })
        .attr("y", function(d, i){
          return yScale(i) + yScale.bandwidth() * (0.7 + 0.1); 
        })
        .attr("font-family" , "sans-serif")
        .attr("font-size" , "14px")
        .attr("fill" , "black")
        .attr("text-anchor", "middle");
    });
});