//Setting a constant for the banklist info to make sure it can be referenced
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

