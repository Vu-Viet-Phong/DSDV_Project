// Set the dimensions and margins of the barchart
var margin = { top: 10, right: 30, bottom: 30, left: 100 };
var w = 330, h = 300;
var width = w - margin.left - margin.right;
var height = h - margin.top - margin.bottom;

/* ------------------------------------ Barchart of the father job fail ------------------------------------ */
d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/job_fail.csv", function(data) {
  // Create barchart father job fail element
  var barchart_fjob_fail = d3.select("#father-job-fail")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  // Sort data
  data.sort(function(b, a) { return a.fValue - b.fValue; });
  
  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 0.5]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.fJob; })).padding(.1);
  
  // Define X, Y axis
  var yAxis = d3.axisLeft(yScale);

  // Create X axis
  barchart_fjob_fail.append("g").call(yAxis);

  // Create bars
  barchart_fjob_fail.selectAll("rect").data(data).enter().append("rect")
    .attr("x", xScale(0))
    .attr("y", function(d) { return yScale(d.fJob); })
    .attr("width", function(d) { return xScale(d.fValue); })
    .attr("height", yScale.bandwidth())
    .attr("fill", "Red")
});

/* ------------------------------------ Barchart of the father job medium ------------------------------------ */
d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/job_medium.csv", function(data) {
  // Create barchart father job medium element
  var barchart_fmedium_fail = d3.select("#father-job-average")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  // Sort data
  data.sort(function(b, a) { return a.fValue - b.fValue; });
  
  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 0.5]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.fJob; })).padding(.1);
  
  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_fmedium_fail.append("g").call(yAxis);

  //Bars
  barchart_fmedium_fail.selectAll("rect").data(data).enter().append("rect")
    .attr("x", xScale(0))
    .attr("y", function(d) { return yScale(d.fJob); })
    .attr("width", function(d) { return xScale(d.fValue); })
    .attr("height", yScale.bandwidth())
    .attr("fill", "Yellow");
});

/* ------------------------------------ Barchart of the father job good ------------------------------------ */
d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/job_good.csv", function(data) {
  // Create barchart father good job element
  var barchart_fgood_fail = d3.select("#father-job-good")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  // Sort data
  data.sort(function(b, a) { return a.fValue - b.fValue; });
        
  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 0.5]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.fJob; })).padding(.1);
  
  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_fgood_fail.append("g").call(yAxis);

  // Create bars
  barchart_fgood_fail.selectAll("rect").data(data).enter().append("rect")
    .attr("x", xScale(0))
    .attr("y", function(d) { return yScale(d.fJob); })
    .attr("width", function(d) { return xScale(d.fValue); })
    .attr("height", yScale.bandwidth() )
    .attr("fill", "Blue")
});

/* ------------------------------------ Barchart of the father job excellent ------------------------------------ */
d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/job_excellent.csv", function(data) {
  // Create barchart father good job element
  var barchart_fexcellent_fail = d3.select("#father-job-excellent")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  // sort data
  data.sort(function(b, a) { return a.fValue - b.fValue; });
  
  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 0.5]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.fJob; })).padding(.1);
  
  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_fexcellent_fail.append("g").call(yAxis);

  // Create bars
  barchart_fexcellent_fail.selectAll("rect").data(data).enter().append("rect")
    .attr("x", xScale(0))
    .attr("y", function(d) { return yScale(d.fJob); })
    .attr("width", function(d) { return xScale(d.fValue); })
    .attr("height", yScale.bandwidth() )
    .attr("fill", "Green")
});

/* ------------------------------------ Barchart of the mother job fail ------------------------------------ */
d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/job_fail.csv", function(data) {
  // Create barchart father job fail element
  var barchart_mjob_fail = d3.select("#mother-job-fail")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");
        
  // sort data
  data.sort(function(b, a) { return a.mValue - b.mValue; });

  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 0.5]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.mJob; })).padding(.1);
  
  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_mjob_fail.append("g").call(yAxis);

  // Create bars
  barchart_mjob_fail.selectAll("myRect").data(data).enter().append("rect")
    .attr("x", xScale(0))
    .attr("y", function(d) { return yScale(d.mJob); })
    .attr("width", function(d) { return xScale(d.mValue); })
    .attr("height", yScale.bandwidth() )
    .attr("fill", "Red")
});


/* ------------------------------------ Barchart of the mother job medium ------------------------------------ */
d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/job_medium.csv", function(data) {
  // Create barchart mother job medium element
  var barchart_mmedium_fail = d3.select("#mother-job-average")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  // Sort data
  data.sort(function(b, a) { return a.mValue - b.mValue; });

  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 0.5]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.mJob; })).padding(.1);
  
  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_mmedium_fail.append("g").call(yAxis);

  // Create bars
  barchart_mmedium_fail.selectAll("myRect").data(data).enter().append("rect")
    .attr("x", xScale(0) )
    .attr("y", function(d) { return yScale(d.mJob); })
    .attr("width", function(d) { return xScale(d.mValue); })
    .attr("height", yScale.bandwidth() )
    .attr("fill", "Yellow");
});


/* ------------------------------------ Barchart of the mother job good ------------------------------------ */
d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/job_good.csv", function(data) {
  // Create barchart mother job good element
  var barchart_mgood_fail = d3.select("#mother-job-good")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");
        
  // Sort data
  data.sort(function(b, a) { return a.mValue - b.mValue; });

  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 0.5]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.mJob; })).padding(.1);
  
  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_mgood_fail.append("g").call(yAxis);

  // Create bars
  barchart_mgood_fail.selectAll("myRect").data(data).enter().append("rect")
    .attr("x", xScale(0))
    .attr("y", function(d) { return yScale(d.mJob); })
    .attr("width", function(d) { return xScale(d.mValue); })
    .attr("height", yScale.bandwidth())
    .attr("fill", "Blue")
});


/* ------------------------------------ Barchart of the mother job excellent ------------------------------------ */
d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/job_excellent.csv", function(data) {
  // Create barchart mother job excellent element
  var barchart_mexcellent_fail = d3.select("#mother-job-excellent")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  // Sort data
  data.sort(function(b, a) { return a.mValue - b.mValue; });

  // Create scale function
  var xScale = d3.scaleLinear().domain([0, 0.5]).range([0, width]);
  var yScale = d3.scaleBand().range([0, height]).domain(data.map(function(d) { return d.mJob; })).padding(.1);
  
  // Define X, Y axis
  var yAxis = d3.axisLeft().scale(yScale);

  // Create X axis
  barchart_mexcellent_fail.append("g").call(yAxis);

  // Create bars
  barchart_mexcellent_fail.selectAll("rect").data(data).enter().append("rect")
    .attr("x", xScale(0))
    .attr("y", function(d) { return yScale(d.mJob); })
    .attr("width", function(d) { return xScale(d.mValue); })
    .attr("height", yScale.bandwidth() )
    .attr("fill", "Green");
});