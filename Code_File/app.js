// Java code for my index.html

function fetchAndProcessData() {
    const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
  
    d3.json(url)
      .then(data => {
        console.log(data);
      });
  }
  
  fetchAndProcessData();



  // Create the barchart


  function createBarChart(sampleData) {
    console.log("Sample Data:", sampleData);
    const sampleIDs = sampleData.names.slice(0, 10); 
    const sampleValues = sampleData.metadata.map(entry => entry.wfreq).slice(0, 10);

    // Create the trace
    const trace = {
        type: 'bar',
        x: sampleValues,
        y: sampleIDs, 
        orientation: 'h',
        text: sampleValues.map(value => `Value: ${value}`),
    };

    const data = [trace];

    const layout = {
        title: 'Top 10 OTUs',
        xaxis: { title: 'Sample Values' },
        yaxis: { title: 'OTU IDs' },
    };

    Plotly.newPlot('bar', data, layout);
}

