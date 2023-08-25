//Map with circles based on number of banks per state
const banklistUrl = "http://127.0.0.1:5000/api/v1.0/banklist";

// Fetch the JSON data and console log it
d3.json(banklistUrl).then(function(data) {
    console.log(data);
  });

  const bankdataUrl = "http://127.0.0.1:5000/api/v1.0/bankdata";

  // Fetch the JSON data and console log it
  d3.json(bankdataUrl).then(function(data) {
      console.log(data);
    });
