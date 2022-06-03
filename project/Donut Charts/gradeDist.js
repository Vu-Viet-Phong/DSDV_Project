var width = 500
height = 500
margin = 110


var radius = Math.min(width, height) / 2 - margin

var data = {"Excellent - 7.4%": 29,"Good - 23.8%" : 93,"Medium - 29.6%": 115,"Fail - 39.2%": 153}


var svg = d3.select("body")
    .append("svg")
        .attr("width", width)
        .attr("height", height)
    .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var color = d3.scaleOrdinal()
    .domain(["a", "b", "c", "d"])
    .range(["#37ff45","#257cff", "#ffbc4b", "#ff3737"])

var pie = d3.pie()
    .sort(null) 
    .value(function(d) {return d.value; })
var data_ready = pie(d3.entries(data))


var arc = d3.arc()
    .innerRadius(radius * 0.5)         
    .outerRadius(radius * 0.8)


var outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)


svg
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return(color(d.data.key)) })
    .attr("stroke", "white")
    .style("stroke-width", "2px")
    .style("opacity", 0.7)

// Add the polylines between chart and labels:
svg
    .selectAll('allPolylines')
    .data(data_ready)
    .enter()
    .append('polyline')
        .attr("stroke", "black")
        .style("fill", "none")
        .attr("stroke-width", 1)
        .attr('points', function(d) {
            var posA = arc.centroid(d) 
            var posB = outerArc.centroid(d) 
            var posC = outerArc.centroid(d);
            var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2  
            posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); 
            return [posA, posB, posC]
        });

// Add the polylines between chart and labels:
svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
        .text( function(d) { console.log(d.data.key) ; return d.data.key } )
        .attr('transform', function(d) {
            var pos = outerArc.centroid(d);
            var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
            pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
            return 'translate(' + pos + ')';
        })
        .style('text-anchor', function(d) {
            var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
            return (midangle < Math.PI ? 'start' : 'end')
        });

