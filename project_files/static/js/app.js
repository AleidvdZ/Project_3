const banklistUrl = "http://127.0.0.1:5000/api/v1.0/banklist";

// app.js

let topValues, topCounts, allValues, allCounts; // Define these variables at the top for scope

// Fetch the JSON data and console log it
d3.json(banklistUrl).then(function(data) {
    // Create a list of acquiring institutions
    const acquiringInstitutions = data.map(item => item.acquiring_institution);
    const nameCount = {};
    // Count occurrences of each acquiring institution
    acquiringInstitutions.forEach(name => {
      if (name in nameCount) {
        nameCount[name]++;
      } else {
        nameCount[name] = 1;
      }
    });
    // Create an array of { name, count } objects and sort it
    const nameCountArray = Object.entries(nameCount).map(([name, count]) => ({ name, count }));
    nameCountArray.sort((a, b) => b.count - a.count);
    // Select the top five entries
    const topFive = nameCountArray.slice(0, 5);
    // Extract top values and counts for Chart.js
    topValues = topFive.map(entry => entry.name);
    topCounts = topFive.map(entry => entry.count);
    allValues = nameCountArray.map(entry => entry.name);
    allCounts = nameCountArray.map(entry => entry.count);
  // Log for verification
  console.log(topValues, topCounts);
  console.log(allValues, allCounts); 
});

// Function to create the Chart.js pie chart
function createPieChart() {
  const ctx = document.getElementById('pieChart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: topValues,
      datasets: [{
        data: topCounts,
        backgroundColor: ['red', 'blue', 'green', 'orange', 'purple'], 
      }]
    },
    options: {
      aspectRatio: 1,
      layout: {
        padding: 10 
      },
      responsive: false 
    }
  });
}

// Function to create the Chart.js doughnut chart
function createDoughnutChart() {
  const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Check if allValues and allCounts are defined
  if (!allValues || !allCounts) {
    return;
  }
  let none = 0;
  // Generate random colors for the doughnut chart
  const randomColors = allCounts.map(() => getRandomColor());
  new Chart(doughnutCtx, {
    type: 'doughnut',
    data: {
      labels: allValues,
      datasets: [{
        data: allCounts,
        backgroundColor: randomColors,
      }]
    },
    options: {
      aspectRatio: 1,
      layout: {
        padding: 10
      },
      responsive: false,
      plugins: {
        legend: {
          display: false  // Hide the legend
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = allValues[context.dataIndex];
              const value = allCounts[context.dataIndex];
              return `${label}: ${value}`;
            }
          }
        }
      }
    }
  })
};


// Dropdown menu functionality
const chartTypeSelect = document.getElementById('chartType');
chartTypeSelect.addEventListener('change', function() {
  const selectedChartType = chartTypeSelect.value;

  clearCharts();

  if (selectedChartType === 'pie') {
    createPieChart();
  } else if (selectedChartType === 'doughnut') {
    createDoughnutChart();
  }
});

function clearCharts() {
  // Clear any existing charts
  // You might want to clear the canvas or do other necessary cleanup
  const pieChartCanvas = document.getElementById('pieChart');
  const doughnutChartCanvas = document.getElementById('doughnutChart');
  const pieCtx = pieChartCanvas.getContext('2d');
  const doughnutCtx = doughnutChartCanvas.getContext('2d');
  pieCtx.clearRect(0, 0, pieChartCanvas.width, pieChartCanvas.height);
  doughnutCtx.clearRect(0, 0, doughnutChartCanvas.width, doughnutChartCanvas.height);
}

  