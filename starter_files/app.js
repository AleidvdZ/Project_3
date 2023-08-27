<<<<<<< HEAD
// script.js

// Function to fetch data from the Flask API
function fetchDataFromRoutes() {
  fetch('/api/v1.0/bankdata')
    .then(response => response.json())
    .then(data => {
      // Process and use data from route 1
      const banklistUrl = "http://127.0.0.1:5000/api/v1.0/banklist";

// Fetch the JSON data and console log it
d3.json(banklistUrl).then(function(data) {
  // console.log(data);

  statesList = [];

  data.forEach(function(response){
    // console.log(response.state);

    statesList.push(response.state);
    
  })

  // console.log(statesList);

  const counter = {};
 
  statesList.forEach(ele => {
    if (counter[ele]) {
        counter[ele] += 1;
    } else {
        counter[ele] = 1;
    }
  });
 
  console.log(counter)

  });

//Setting a constant for the bankdata info to make sure it can be referenced
const bankdataUrl = "http://127.0.0.1:5000/api/v1.0/bankdata";

// Fetch the JSON data and console log it
  d3.json(bankdataUrl).then(function(data) {
  // console.log(data);
  });
      const container1 = document.getElementByID('map')
      // Assuming data is an array of items with "id" and "value" properties
      // we can also change and adjust everything in here, if we want states
      // then we switch out value for state and we can go from there
      // i think this is specific to mapping and other colorful functions
      const values = data.map(item => item.value);
      const labels = data.map(item => item.id);
    })
    .catch(error => console.error('Error fetching data from bankdata:', error));

  fetch('/api/v1.0/banklist')
    .then(response => response.json())
    .then(data => {
      // Process and use data from route 2
      const acquiringInstitutions = data.map(item => item.acquing_institution);
      const nameCount = {};
      acquiringInstitutions.forEach(name => {
        if (name in nameCount) {
          nameCount[name]++;
        } else {
          nameCount[name] = 1;
        }
      });
      console.log(nameCount);
      const container2 = document.getElementByID('map')
      // Assuming data is an array of items with "id" and "value" properties
      // if we are pulling information from both files and need them to called
      // into a single function that should be fine, we just need to make sure
      // we keep
      
    })
    .catch(error => console.error('Error fetching data from banklist:', error));

  fetch('/api/v1.0/statelist')
    .then(response => response.json())
    .then(data => {
      //keeping this open so aleid can get her hands dirty with this one
      //my guess is you'll only need a little bit of space in here to get it 
      //all squared away
    })  
};

//dropbox i think can live here.


const config = {
  type: 'pie',
  data: data,
};
const data = {
  labels: [
    'Bank1',
    'Bank2',
    'Bank3',
    'Bank4',
    'Bank5',
  ],
  datasets: [{
    label: 'Top Five Banks Buying Everything',
    data: [nameCount],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(25, 205, 86)',
      'rgb(255, 180, 80)',
      'rgb(140, 25, 32)'
    ],
    hoverOffset: 4
  }]
};
// Call the function when needed
fetchDataFromRoutes();

=======
// script.js

// Function to fetch data from the Flask API
function fetchDataFromRoutes() {
  fetch('/api/v1.0/bankdata')
    .then(response => response.json())
    .then(data => {
      // Process and use data from route 1
      const banklistUrl = "http://127.0.0.1:5000/api/v1.0/banklist";

// Fetch the JSON data and console log it
d3.json(banklistUrl).then(function(data) {
  // console.log(data);

  statesList = [];

  data.forEach(function(response){
    // console.log(response.state);

    statesList.push(response.state);
    
  })

  // console.log(statesList);

  const counter = {};
 
  statesList.forEach(ele => {
    if (counter[ele]) {
        counter[ele] += 1;
    } else {
        counter[ele] = 1;
    }
  });
 
  console.log(counter)

  });

//Setting a constant for the bankdata info to make sure it can be referenced
const bankdataUrl = "http://127.0.0.1:5000/api/v1.0/bankdata";

// Fetch the JSON data and console log it
  d3.json(bankdataUrl).then(function(data) {
  // console.log(data);
  });
      const container1 = document.getElementByID('map')
      // Assuming data is an array of items with "id" and "value" properties
      // we can also change and adjust everything in here, if we want states
      // then we switch out value for state and we can go from there
      // i think this is specific to mapping and other colorful functions
      const values = data.map(item => item.value);
      const labels = data.map(item => item.id);
    })
    .catch(error => console.error('Error fetching data from bankdata:', error));

  fetch('/api/v1.0/banklist')
    .then(response => response.json())
    .then(data => {
      // Process and use data from route 2
      const acquiringInstitutions = data.map(item => item.acquing_institution);
      const nameCount = {};
      acquiringInstitutions.forEach(name => {
        if (name in nameCount) {
          nameCount[name]++;
        } else {
          nameCount[name] = 1;
        }
      });
      console.log(nameCount);
      const container2 = document.getElementByID('map')
      // Assuming data is an array of items with "id" and "value" properties
      // if we are pulling information from both files and need them to called
      // into a single function that should be fine, we just need to make sure
      // we keep
      
    })
    .catch(error => console.error('Error fetching data from banklist:', error));

  fetch('/api/v1.0/statelist')
    .then(response => response.json())
    .then(data => {
      //keeping this open so aleid can get her hands dirty with this one
      //my guess is you'll only need a little bit of space in here to get it 
      //all squared away
    })  
};

//dropbox i think can live here.


//chart.js will need to be placed here. Only

// Call the function when needed
fetchDataFromRoutes();

>>>>>>> b8fb265447f25ec5944c12ca54843b122ab6bc9a
  