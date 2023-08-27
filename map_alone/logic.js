// Create a map object.
let myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


// Define a markerSize() function that will give each city a different radius based on its population.
function markerSize(population) {
  return Math.sqrt(population) * 4
}

// Each city object contains the city's name, location, and population.
// Population Data Source: U.S. 2020 Decennial Census
let states = 
[
  {
    state: "Alaska",
    location: [61.3850,-152.2683],
    banks_closed: 0
  },
  {
    state: "Alabama",
    location: [32.7990,-86.8073],
    banks_closed: 7
  },
  {
    state: "Arkansas",
    location: [34.9513,-92.3809],
    banks_closed: 4
  },
  {
    state: "Arizona",
    location: [33.7712,-111.3877],
    banks_closed: 16
  },
  {
    state:"California",
    location: [36.1700,-119.7462],
    banks_closed: 43
  },
  {
    state:"Colorado",
    location: [39.0646,-105.3272],
    banks_closed: 10
  },
  {
    state:"Connecticut",
    location: [341.5834,-72.7622],
    banks_closed: 2
  },
  {
    state:"Delaware",
    location: [39.3498,-75.5148],
    banks_closed: 0
  },
  {
    state:"Florida",
    location: [27.8333,-81.7170],
    banks_closed: 76
  },
  {
    state:"Georgia",
    location: [32.9866,-83.6487],
    banks_closed: 93
  },
  {
    state:"Hawaii",
    location: [21.1098,-157.5311],
    banks_closed: 1
  },
  {
    state:"Iowa",
    location: [42.0046,-93.2140],
    banks_closed: 2
  },
  {
    state:"Idaho",
    location: [44.2394,-114.5103],
    banks_closed: 2
  },
  {
    state:"Illinois",
    location: [40.3363,-89.0022],
    banks_closed: 69
  },
  {
    state:"Indiana",
    location: [39.8647,-86.2604],
    banks_closed: 3
  },
  {
    state:"Kansas",
    location: [38.5111,-96.8005],
    banks_closed: 12
  },
  {
    state:"Kentucky",
    location: [37.6690,-84.6514],
    banks_closed: 3
  },
  {
    state:"Louisiana",
    location: [31.1801,-91.8749],
    banks_closed: 4
  },
  {
    state:"Massachusetts",
    location: [42.2373,-71.5314],
    banks_closed: 1
  },
  {
    state:"Maryland",
    location: [39.0724,-76.7902],
    banks_closed: 10
  },
  {
    state:"Maine",
    location: [44.6074,-69.3977],
    banks_closed: 0
  },
  {
    state:"Michigan",
    location: [43.3504,-84.5603],
    banks_closed: 14
  },
  {
    state:"Minnesota",
    location: [45.7326,-93.9196],
    banks_closed: 23
  },
  {
    state:"Missouri",
    location: [38.4623,-92.3020],
    banks_closed: 16
  },
  {
    state:"Mississippi",
    location: [32.7673,-89.6812],
    banks_closed: 2
  },
  {
    state:"Montana",
    location: [46.9048,-110.3261],
    banks_closed: 0
  },
  {
    state:"North Carolina",
    location: [35.6411,-79.8431],
    banks_closed: 7
  },
  {
    state:"North Dakota",
    location: [47.5362,-99.7930],
    banks_closed: 0
  },
  {
    state:"Nebraska",
    location: [41.1289,-98.2883],
    banks_closed: 4
  },
  {
    state:"New Hampshire",
    location: [43.4108,-71.5653],
    banks_closed: 1
  },
  {
    state:"New Jersey",
    location: [40.3140,-74.5089],
    banks_closed: 8
  },
  {
    state:"New Mexico",
    location: [34.8375,-106.2371],
    banks_closed: 3
  },
  {
    state:"Nevada",
    location: [38.4199,-117.1219],
    banks_closed: 12
  },
  {
    state:"New York",
    location: [42.1497,-74.9384],
    banks_closed: 6
  },
  {
    state:"Ohio",
    location: [42.1497,-74.9384],
    latitude:40.3736,
    longitude:-82.7755,
    banks_closed: 9
  },
  {
    state:"Oklahoma",
    location: [35.5376,-96.9247],
    banks_closed: 7
  },
  {
    state:"Oregon",
    location: [44.5672,-122.1269],
    banks_closed: 6
  },
  {
    state:"Pennsylvania",
    location: [40.5773,-77.2640],
    banks_closed: 10
  },
  {
    state:"Rhode Island",
    location: [41.6772,-71.5101],
    banks_closed: 0
  },
  {
    state:"Puerto Rico",
    location: [18.2491,-66.628],
    banks_closed: 4
  },
  {
    state:"South Carolina",
    location: [33.8191,-80.9066],
    banks_closed: 10
  },
  {
    state:"South Dakota",
    location: [44.2853,-99.4632],
    banks_closed: 1
  },
  {
    state:"Tennessee",
    location: [35.7449,-86.7489],
    banks_closed: 7
  },
  {
    state:"Texas",
    location: [31.1060,-97.6475],
    banks_closed: 13
  },
  {
    state:"Utah",
    location: [40.1135,-111.8535],
    banks_closed: 8
  },
  {
    state:"Virginia",
    location: [37.7680,-78.2057],
    banks_closed: 5
  },
  {
    state:"Vermont",
    location: [44.0407,-72.7093],
    banks_closed: 0
  },
  {
    state:"Washington",
    location: [47.3917,-121.5708],
    banks_closed: 19
  },
  {
    state:"Wisconsin",
    location: [44.2563,-89.6385],
    banks_closed: 11
  },
  {
    state:"West Virginia",
    location: [38.4680,-80.9696],
    banks_closed: 2
  },
  {
    state:"Wyoming",
    location: [42.7475,-107.2085],
    banks_closed: 1
  }
]


// Loop through the cities array, and create one marker for each city object.
for (let i = 0; i < states.length; i++) {
  L.circleMarker(states[i].location, {
    fillOpacity: 0.50,
    color: "white",
    fillColor: "orange",
    // Setting our circle's radius to equal the output of our markerSize() function:
    // This will make our marker's size proportionate to its population.
    radius: markerSize(states[i].banks_closed)
  }).bindPopup(`<h1>${states[i].state}</h1> <hr> <h3>Number of Banks Failed 2012-2023: ${states[i].banks_closed.toLocaleString()}</h3>`).addTo(myMap);

};


