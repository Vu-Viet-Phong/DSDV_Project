// Set the dimensions and margins of the barchart
var margin = { top: 10, right: 20, bottom: 30, left: 80 };
var w = 330, h = 100;
var width = w - margin.left - margin.right;
var height = h - margin.top - margin.bottom;

d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/nominal_fail.csv", function(data) {
  // Create barchart internet fail element
  var barchart_internet_fail = d3.select("#internet-fail")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 120]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.internet; })).padding(.1);

  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_internet_fail.append("g").call(yAxis);

  // Create bars
  barchart_internet_fail.selectAll("myRect").data(data).enter().append("rect")
    .attr("x", xScale(0))
    .attr("y", function(d) { return yScale(d.internet); })
    .attr("width", function(d) { return xScale(d.iValue); })
    .attr("height", yScale.bandwidth() )
    .attr("fill", "#ff3737");
});

d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/nominal_medium.csv", function(data) {
  // Create barchart internet medium element
  var barchart_internet_medium = d3.select("#internet-medium")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 100]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.internet; })).padding(.1);

  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_internet_medium.append("g").call(yAxis);

  // Create bars
  barchart_internet_medium.selectAll("rect").data(data).enter().append("rect")
      .attr("x", xScale(0))
      .attr("y", function(d) { return yScale(d.internet); })
      .attr("width", function(d) { return xScale(d.iValue); })
      .attr("height", yScale.bandwidth())
      .attr("fill", "#ffbc4b")
});

d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/nominal_good.csv", function(data) {
  // Create barchart internet good element
  var barchart_internet_good = d3.select("#internet-good")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 80]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.internet; })).padding(.1);

  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_internet_good.append("g").call(yAxis);
  
  // Create bars
  barchart_internet_good.selectAll("rect").data(data).enter().append("rect")
    .attr("x", xScale(0) )
    .attr("y", function(d) { return yScale(d.internet); })
    .attr("width", function(d) { return xScale(d.iValue); })
    .attr("height", yScale.bandwidth())
    .attr("fill", "#257cff");
});

d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/nominal_excellent.csv", function(data) {
  // Create barchart internet good element
  var barchart_internet_excellent = d3.select("#internet-excellent")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 30]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.internet; })).padding(.1);

  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_internet_excellent.append("g").call(yAxis);

  // Create bars
  barchart_internet_excellent.selectAll("rect").data(data).enter().append("rect")
    .attr("x", xScale(0))
    .attr("y", function(d) { return yScale(d.internet); })
    .attr("width", function(d) { return xScale(d.iValue); })
    .attr("height", yScale.bandwidth())
    .attr("fill", "#37ff45")
});

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
  var barchart_activity_medium = d3.select("#activity-medium")
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
  var barchart_activity_good = d3.select("#activity-good")
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
  barchart_activity_excellent.selectAll("rect").data(data).enter().append("rect")
    .attr("x", xScale(0))
    .attr("y", function(d) { return yScale(d.activities); })
    .attr("width", function(d) { return xScale(d.aValue); })
    .attr("height", yScale.bandwidth())
    .attr("fill", "#37ff45");
});


d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/nominal_fail.csv", function(data) {
  // Create barchart sex fail element
  var barchart_sex_fail = d3.select("#sex-fail")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");
  
  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 90]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.sex; })).padding(.1);

  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_sex_fail.append("g").call(yAxis);

  // Create bars
  barchart_sex_fail.selectAll("rect").data(data).enter().append("rect")
    .attr("x", xScale(0))
    .attr("y", function(d) { return yScale(d.sex); })
    .attr("width", function(d) { return xScale(d.sValue); })
    .attr("height", yScale.bandwidth() )
    .attr("fill", "#ff3737");
});


d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/nominal_good.csv", function(data) {
  // Create barchart sex medium element
  var barchart_sex_medium = d3.select("#sex-medium")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 50]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.sex; })).padding(.1);

  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_sex_medium.append("g").call(yAxis);
  
  // Create bars
  barchart_sex_medium.selectAll("rect").data(data).enter().append("rect")
    .attr("x", xScale(0))
    .attr("y", function(d) { return yScale(d.sex); })
    .attr("width", function(d) { return xScale(d.sValue); })
    .attr("height", yScale.bandwidth())
    .attr("fill", "#ffbc4b");
});

d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/nominal_good.csv", function(data) {
  // Create barchart sex good element
  var barchart_sex_good = d3.select("#sex-good")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 50]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.sex; })).padding(.1);

  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_sex_good.append("g").call(yAxis);

  // Create bars
  barchart_sex_good.selectAll("rect").data(data).enter().append("rect")
    .attr("x", xScale(0))
    .attr("y", function(d) { return yScale(d.sex); })
    .attr("width", function(d) { return xScale(d.sValue); })
    .attr("height", yScale.bandwidth() )
    .attr("fill", "#257cff");
});

d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/nominal_excellent.csv", function(data) {
  // Create barchart sex excellent element
  var barchart_sex_excellent = d3.select("#sex-excellent")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 20]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.sex; })).padding(.1);

  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_sex_excellent.append("g").call(yAxis);

  // Create bars
  barchart_sex_excellent.selectAll("rect").data(data).enter().append("rect")
    .attr("x", xScale(0))
    .attr("y", function(d) { return yScale(d.sex); })
    .attr("width", function(d) { return xScale(d.sValue); })
    .attr("height", yScale.bandwidth())
    .attr("fill", "#37ff45");
});

d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/nominal_fail.csv", function(data) {
  // Create barchart relationship fail element
  var barchart_relationship_fail = d3.select("#relationship-fail")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 100]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.relationship; })).padding(.1);

  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_relationship_fail.append("g").call(yAxis);

  // Create bars
  barchart_relationship_fail.selectAll("rect").data(data).enter().append("rect")
    .attr("x", xScale(0))
    .attr("y", function(d) { return yScale(d.relationship); })
    .attr("width", function(d) { return xScale(d.rValue); })
    .attr("height", yScale.bandwidth())
    .attr("fill", "#ff3737");
});

d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/nominal_medium.csv", function(data) {
  // Create barchart relationship medium element
  var barchart_relationship_medium = d3.select("#relationship-medium")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 75]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.relationship; })).padding(.1);

  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_relationship_medium.append("g").call(yAxis);

  // Create bars
  barchart_relationship_medium.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", xScale(0))
      .attr("y", function(d) { return yScale(d.relationship); })
      .attr("width", function(d) { return xScale(d.rValue); })
      .attr("height", yScale.bandwidth() )
      .attr("fill", "#ffbc4b");
});


d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/nominal_good.csv", function(data) {
  // Create barchart relationship medium element
  var barchart_relationship_good = d3.select("#relationship-good")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");


  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 60]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.relationship; })).padding(.1);

  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_relationship_good.append("g").call(yAxis);

  // Create bars
  barchart_relationship_good.selectAll("rect").data(data).enter().append("rect")
    .attr("x", xScale(0))
    .attr("y", function(d) { return yScale(d.relationship); })
    .attr("width", function(d) { return xScale(d.rValue); })
    .attr("height", yScale.bandwidth())
    .attr("fill", "#257cff");
});

d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/nominal_excellent.csv", function(data) {
  // Create barchart relationship medium element
  var barchart_relationship_excellent = d3.select("#relationship-excellent")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 20]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.relationship; })).padding(.1);

  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_relationship_excellent.append("g").call(yAxis);

  // Create bars
  barchart_relationship_excellent.selectAll("rect").data(data).enter().append("rect")
    .attr("x", xScale(0))
    .attr("y", function(d) { return yScale(d.relationship); })
    .attr("width", function(d) { return xScale(d.rValue); })
    .attr("height", yScale.bandwidth())
    .attr("fill", "#37ff45");
});