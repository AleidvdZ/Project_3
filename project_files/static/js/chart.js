// const bankdataUrl = "http://127.0.0.1:5000/api/v1.0/bankdata";

//Two bars
function Chart1() {
  d3.json(bankdataUrl).then(function(data) {
  // console.log(data);

  // namesList = [];
  dataList = [];

  data.forEach(function(response){
    // console.log(response.state);

    dataList.push(response.qbfasset);
    // namesList.push(response.name);
  })

  var counterLarge = 0;
  var counterSmall = 0;

  for(var i = 0; i < dataList.length; i++) {
    var x = dataList[i]
    if(x >= 1000000) {
        counterLarge++;
    }
    else {
        counterSmall++;    
    }};
  // console.log(counterMedium);
  // console.log(namesList);
  // console.log(dataList);
  myChart.config.data.labels = ['< 1000000', '>= 1000000'];
  myChart.config.data.datasets[0].data = [counterSmall, counterLarge];
  myChart.update();
  });
};

//Three bars; splitting previous large pool
function Chart2() {
  d3.json(bankdataUrl).then(function(data) {
  
  dataList = [];

  data.forEach(function(response){
  
    dataList.push(response.qbfasset);
  })

  var counterLarge = 0;
  var counterMedium = 0;
  var counterSmall = 0;

  for(var i = 0; i < dataList.length; i++) {
    var x = dataList[i]
    if(x >= 100000000) {
        counterLarge++;
    }
    else if(x < 1000000) {
        counterSmall++;    
    }
    else {
        counterMedium++;    
    }};
  myChart.config.data.labels = ['x < 1000000', '1000000 to 99999999', '>= 100000000'];
  myChart.config.data.datasets[0].data = [counterSmall, counterMedium, counterLarge];
  myChart.update();
  });
};

//Three bars; increasing medium pool
function Chart3() {
  d3.json(bankdataUrl).then(function(data) {

  dataList = [];

  data.forEach(function(response){

    dataList.push(response.qbfasset);
  })

  var counterLarge = 0;
  var counterMedium = 0;
  var counterSmall = 0;

  for(var i = 0; i < dataList.length; i++) {
    var x = dataList[i]
    if(x >= 100000000) {
        counterLarge++;
    }
    else if(x < 100000) {
        counterSmall++;    
    }
    else {
        counterMedium++;    
    }};
  myChart.config.data.labels = ['< 100000', '100000 to 99999999', '>= 100000000'];
  myChart.config.data.datasets[0].data = [counterSmall, counterMedium, counterLarge];
  myChart.update();
  });
};

//Three bars; increasing large pool
function Chart4() {
  d3.json(bankdataUrl).then(function(data) {

  dataList = [];

  data.forEach(function(response){
   
    dataList.push(response.qbfasset);
  })

  var counterLarge = 0;
  var counterMedium = 0;
  var counterSmall = 0;

  for(var i = 0; i < dataList.length; i++) {
    var x = dataList[i]
    if(x >= 1000000) {
        counterLarge++;
    }
    else if(x < 100000) {
        counterSmall++;    
    }
    else {
        counterMedium++;    
    }};
  myChart.config.data.labels = ['< 100000', '100000 to 999999', '>= 1000000'];
  myChart.config.data.datasets[0].data = [counterSmall, counterMedium, counterLarge];
  myChart.update();
  });
};

//Two bars; showing how small the smallest can be
function Chart5() {
  d3.json(bankdataUrl).then(function(data) {
  // console.log(data);

  // namesList = [];
  dataList = [];

  data.forEach(function(response){
    // console.log(response.state);

    dataList.push(response.qbfasset);
    // namesList.push(response.name);
  })

  var counterLarge = 0;
  var counterSmall = 0;

  for(var i = 0; i < dataList.length; i++) {
    var x = dataList[i]
    if(x >= 50000) {
        counterLarge++;
    }
    else {
        counterSmall++;    
    }};
  // console.log(counterMedium);
  // console.log(namesList);
  // console.log(dataList);
  myChart.config.data.labels = ['< 50000', '>= 50000'];
  myChart.config.data.datasets[0].data = [counterSmall, counterLarge];
  myChart.update();
  });
};

  
// setup 
  const data = {
    type: 'bar',
    labels: [0, 0, 0],
    datasets: [{
      label: 'Asset Pool Counts',
      data: [0, 0, 0],
      backgroundColor: [
        // 'rgba(255, 26, 104, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        // 'rgba(255, 206, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        // 'rgba(153, 102, 255, 0.2)',
        // 'rgba(255, 159, 64, 0.2)',
        // 'rgba(0, 0, 0, 0.2)'
      ],
      borderColor: [
        // 'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        // 'rgba(255, 206, 86, 1)',
        // 'rgba(75, 192, 192, 1)',
        // 'rgba(153, 102, 255, 1)',
        // 'rgba(255, 159, 64, 1)',
        // 'rgba(0, 0, 0, 1)'
      ],
      borderWidth: 1
    }
  ],
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  // config 
  const config = {
    type: 'bar',
    data,
    options: {
      plugins: {
        subtitle: {
          display: true,
          text: ["Distribution of Total Assets at Closure"]
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Total Assets Pool (units in USD x1000)'
          }
        },
        y: {
          beginAtZero: true
        }
      }
    }
  };

  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  
  // Instantly assign Chart.js version
  const chartVersion = document.getElementById('chartVersion');
  chartVersion.innerText = Chart.version