// app.js

const banklistUrl = "http://127.0.0.1:5000/api/v1.0/banklist";

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
  const topValues = topFive.map(entry => entry.name);
  const topCounts = topFive.map(entry => entry.count);

  // Create the Chart.js pie chart
  const ctx = document.getElementById('pieChart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: topValues,
      datasets: [{
        data: topCounts,
        backgroundColor: ['red', 'blue', 'green', 'orange', 'purple'], // Customize colors
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

  // Log for verification
  console.log(topValues, topCounts);
});


  