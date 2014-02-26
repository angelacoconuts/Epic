var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = document.getElementById('chart').offsetWidth - margin.left - margin.right,
    height = document.getElementById('chart').offsetHeight - margin.top - margin.bottom; 

var color = d3.scale.linear()
        .domain([-5,0,5])
        .range(["#990000","#666666","#003c00"]);

var treemap = d3.layout.treemap()
    .size([width, height])
    .sticky(true)
    .value(function(d) { return d.size; });

var div = d3.select("#chart").append("div")
    .style("position", "relative")
    .style("width", (width + margin.left + margin.right) + "px")
    .style("height", (height + margin.top + margin.bottom) + "px")
    .style("left", margin.left + "px")
    .style("top", margin.top + "px");

d3.json("/data/ptfl.json", function(root) {
  var node = div.datum(root).selectAll(".node")
      .data(treemap.nodes)
    .enter().append("div")
      .attr("class", "node")
      .call(position)
      .style("background", function(d) { return d.children ? null : color(d.perf); })
      .text(function(d) { return d.children ? null : d.name; });

});

function position() {
  this.style("left", function(d) { console.log (d); return d.x + "px"; })
      .style("top", function(d) { return d.y + "px"; })
      .style("width", function(d) { return Math.max(0, d.dx - 1) + "px"; })
      .style("height", function(d) { return Math.max(0, d.dy - 1) + "px"; });
}
