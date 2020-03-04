async function drawLineChart() {
  // write your code here
  const dataset = await d3.json("my_weather_data.json")

  const yAccessor = d => d.warningMax
  const dateParser = d3.timeParse("%Y-%m-%d")
  const xAccessor = d => dateParser(d.date)

  let dimensions = {
    width: window.innerWidth * 0.9,
    height: 400,
    margin: {
      top: 15,
      right: 15,
      bottom: 40,
      left: 60,
    },
  }

  // compute size of bounds

  dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right

  dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom

  const wrapper = d3.select("#wrapper")
    .append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height)

  const bounds = wrapper.append("g")
    .style("transform", `translate(${dimensions.margin.left}px,${dimensions.margin.top}px)`)

  const yScale = d3.scaleLinear()
    .domain(d3.extent(dataset, yAccessor))
    .range([dimensions.boundedHeight, 0])

  const xScale = d3.scaleTime()
    .domain(d3.extent(dataset, xAccessor))
    .range([0, dimensions.boundedWidth])

  const lineGenerator = d3.line()
    .x(d => xScale(xAccessor(d)))
    .y(d => yScale(yAccessor(d)))

  const path = bounds.append("path")
    .attr("d", lineGenerator(dataset))
    .attr("fill", "none")
    .attr("stroke", "#6c5ce7")
    .attr("stroke-width", 3)

  // create transition option
  const transitionOption = d3.transition()
    .transition()
    .ease(d3.easeSin)
    .duration(4000);

  // getting total length of svg path
  const pathLength = path.node().getTotalLength();

  path.attr("stroke-dashoffset", pathLength)
    .attr("stroke-dasharray", pathLength);

  path.attr("stroke-dashoffset", pathLength)
    .attr("stroke-dasharray", pathLength)
    .transition(transitionOption)
    .attr("stroke-dashoffset", 0);

  const yAxisGenerator = d3.axisLeft()
    .scale(yScale)

  const yAxis = bounds.append("g")
    .call(yAxisGenerator)

  const xAxisGenerator = d3.axisBottom()
    .scale(xScale)

  const xAxis = bounds.append("g")
    .call(xAxisGenerator)
    .style("transform", `translateY(${dimensions.boundedHeight}px)`)

  bounds.append("g")
    .append("text")
    .attr("x", dimensions.margin.left + 50)
    .style("text-anchor", "middle")
    .style("font-size", "18px")
    .style("font-weight", "bold")
    .text("Warning frequency")

}
drawLineChart()