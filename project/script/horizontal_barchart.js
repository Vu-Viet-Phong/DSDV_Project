//All the variables
var margin = { top: 10, right: 30, bottom: 30, left: 100 };
var w = 300, h = 300;
var width = w - margin.left - margin.right;
var height = h - margin.top - margin.bottom;

/* ------------------------------------ Barchart of the father job fail ------------------------------------ */
d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/job_fail.csv", function(data) {
  // Create barchart element
  var barchart1 = d3.select("#father-job-fail")
    .append("svg")
      .attr("width", w)
      .attr("height", h)
    .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

  // sort data
  data.sort(function(b, a) {
      return a.fValue - b.fValue;
  });
  
  // Scales
  var x = d3.scaleLinear().domain([0, 0.5]).range([ 0, width]);

  // Y axis
  var y = d3.scaleBand()
          .range([0, height])
          .domain(data.map(function(d) { return d.fJob; }))
          .padding(.1);
  
  barchart1.append("g").call(d3.axisLeft(y))

  //Bars
  barchart1.selectAll("myRect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", x(0) )
    .attr("y", function(d) { return y(d.fJob); })
    .attr("width", function(d) { return x(d.fValue); })
    .attr("height", y.bandwidth() )
    .attr("fill", "Red")
});


/* ------------------------------------ Barchart of the father job medium ------------------------------------ */
d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/job_medium.csv", function(data) {
  // Create barchart element
  var barchart2 = d3.select("#father-job-average")
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform","translate(" + margin.left + "," + margin.top + ")");

        // sort data
        data.sort(function(b, a) {
            return a.fValue - b.fValue;
        });
        //Scales
        var x = d3.scaleLinear()
                .domain([0, 0.5])
                .range([ 0, width]);

  // Y axis
        var y = d3.scaleBand()
                .range([ 0, height ])
                .domain(data.map(function(d) { return d.fJob; }))
                .padding(.1);
                barchart2.append("g")
            .call(d3.axisLeft(y))

  //Bars
  barchart2.selectAll("myRect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", x(0) )
            .attr("y", function(d) { return y(d.fJob); })
            .attr("width", function(d) { return x(d.fValue); })
            .attr("height", y.bandwidth() )
            .attr("fill", "Yellow")
});

/* ------------------------------------ Barchart of the father job good ------------------------------------ */
d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/job_good.csv", function(data) {
  // Create barchart element
        var barchart3 = d3.select("#father-job-good")
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform","translate(" + margin.left + "," + margin.top + ")");

        // sort data
        data.sort(function(b, a) {
            return a.fValue - b.fValue;
        });
        //Scales
        var x = d3.scaleLinear()
                .domain([0, 0.5])
                .range([ 0, width]);

  // Y axis
        var y = d3.scaleBand()
                .range([ 0, height ])
                .domain(data.map(function(d) { return d.fJob; }))
                .padding(.1);
                barchart3.append("g")
            .call(d3.axisLeft(y))

  //Bars
  barchart3.selectAll("myRect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", x(0) )
            .attr("y", function(d) { return y(d.fJob); })
            .attr("width", function(d) { return x(d.fValue); })
            .attr("height", y.bandwidth() )
            .attr("fill", "Blue")
});


d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/job_excellent.csv", function(data) {
        //SVG
        var barchart4 = d3.select("#father-job-excellent")
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform","translate(" + margin.left + "," + margin.top + ")");

        // sort data
        data.sort(function(b, a) {
            return a.mValue - b.mValue;
        });
        //Scales
        var x = d3.scaleLinear()
                .domain([0, 0.5])
                .range([ 0, width]);

  // Y axis
        var y = d3.scaleBand()
                .range([ 0, height ])
                .domain(data.map(function(d) { return d.mJob; }))
                .padding(.1);
                barchart4.append("g")
            .call(d3.axisLeft(y))

  //Bars
  barchart4.selectAll("myRect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", x(0) )
            .attr("y", function(d) { return y(d.mJob); })
            .attr("width", function(d) { return x(d.mValue); })
            .attr("height", y.bandwidth() )
            .attr("fill", "Green")
});


d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/job_fail.csv", function(data) {
        //SVG
        var svg = d3.select("#mother-job-fail")
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform","translate(" + margin.left + "," + margin.top + ")");
        
        // sort data
        data.sort(function(b, a) {
            return a.mValue - b.mValue;
        });

        //Scales
        var x = d3.scaleLinear()
                .domain([0, 0.6])
                .range([ 0, width]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");

  // Y axis
        var y = d3.scaleBand()
                .range([ 0, height ])
                .domain(data.map(function(d) { return d.mJob; }))
                .padding(.1);
         svg.append("g")
            .call(d3.axisLeft(y))

  //Bars
        svg.selectAll("myRect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", x(0) )
            .attr("y", function(d) { return y(d.mJob); })
            .attr("width", function(d) { return x(d.mValue); })
            .attr("height", y.bandwidth() )
            .attr("fill", "Red")
});


d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/job_medium.csv", function(data) {

        //SVG
        var svg = d3.select("#mother-job-average")
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform","translate(" + margin.left + "," + margin.top + ")");

        // sort data
        data.sort(function(b, a) {
            return a.fValue - b.fValue;
        });
        //Scales
        var x = d3.scaleLinear()
                .domain([0, 0.5])
                .range([ 0, width]);

  // Y axis
        var y = d3.scaleBand()
                .range([ 0, height ])
                .domain(data.map(function(d) { return d.fJob; }))
                .padding(.1);
         svg.append("g")
            .call(d3.axisLeft(y))

  //Bars
        svg.selectAll("myRect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", x(0) )
            .attr("y", function(d) { return y(d.fJob); })
            .attr("width", function(d) { return x(d.fValue); })
            .attr("height", y.bandwidth() )
            .attr("fill", "Yellow")
});


d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/job_good.csv", function(data) {

        var svg = d3.select("#mother-job-good")
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform","translate(" + margin.left + "," + margin.top + ")");
        
        // sort data
        data.sort(function(b, a) {
            return a.mValue - b.mValue;
        });

        //Scales
        var x = d3.scaleLinear()
                .domain([0, 0.6])
                .range([ 0, width]);

  // Y axis
        var y = d3.scaleBand()
                .range([ 0, height ])
                .domain(data.map(function(d) { return d.mJob; }))
                .padding(.1);
         svg.append("g")
            .call(d3.axisLeft(y))

  //Bars
        svg.selectAll("myRect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", x(0) )
            .attr("y", function(d) { return y(d.mJob); })
            .attr("width", function(d) { return x(d.mValue); })
            .attr("height", y.bandwidth() )
            .attr("fill", "Blue")
});


d3.csv("https://raw.githubusercontent.com/vtenpo/DSDV_Project/main/project/data/job_excellent.csv", function(data) {

        //SVG
        var svg = d3.select("#mother-job-excellent")
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform","translate(" + margin.left + "," + margin.top + ")");

        // sort data
        data.sort(function(b, a) {
            return a.mValue - b.mValue;
        });
        //Scales
        var x = d3.scaleLinear()
                .domain([0, 0.5])
                .range([ 0, width]);

  // Y axis
        var y = d3.scaleBand()
                .range([ 0, height ])
                .domain(data.map(function(d) { return d.mJob; }))
                .padding(.1);
         svg.append("g")
            .call(d3.axisLeft(y))

  //Bars
        svg.selectAll("myRect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", x(0) )
            .attr("y", function(d) { return y(d.mJob); })
            .attr("width", function(d) { return x(d.mValue); })
            .attr("height", y.bandwidth() )
            .attr("fill", "Green")
});