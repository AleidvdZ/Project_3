# Project_3 Analysis of Failed Banks

## Overview
The industry selected by the analysis team was finance. On the data.gov website the team came across a data source that is entitled “FDIC Failed Bank List” which includes banks which have failed since October 1, 2000. A secondary data source that included some additional information was also identified.  

Public data regarding bank failure exist and are readily accessible.  The source the team identified was from the FDIC.  Most of the data that is represented is tabular and the team is interested in creating visualizations of different aspects of the information to make it easier to analyze and understand patterns.

### Questions
1) What was the distribution of assets of the banks that closed? This gives an indication of the size of the banks that were affected by closures.

2) What was the distribution of the closures amongst the states and where in the states were the closures (over a certain timeframe)?  Were certain states, or cities within states more affected by closures?  

3) What banks took over the smaller and/or failing banks)?  Are there certain banks that are more involved in buying out failed banks than others? What percentage of banks just close and are not bought out by another?

#### Previous question(s) (not pursued)
For the years covered in the data how many closures were there per year?  Is there a pattern of closures in terms of cluster of years or are there certain months that have more closures?    

## Timeline of Activities/Things Learned
0815 Created and submitted proposal for project  
0817 Research and discussed requirments and how to achieve.  Realized that sqlite would be easier to use for flask.  
0820 Team check-in. LAG created sqlite files.  
0821 Built flask query, troubleshot need for primary key to utiize flask, identified order of events (to a point).   
0822 LAG recreated sqlite files with primary key. AvdZ fixed/tested Flask documentation to pull in both database files.  GS looked at documentation for graphing options and recommended chart.js. Team decided to change question 1 as FDIC already has beautiful graphs addressing time.  Team discussed a histogram that looks at assets distribution among the banks when they failed.  
0826 LAG created sorting code and setup for pie chart, GS worked on bar chart around assets of the banks at time of closure, AvdZ worked on html, basics for a map.

## Conclusion

### Link to Presentation


## Other Information  
### Installing
The following applications are necessary to manage, clean the data, and create visualizations for the project.
* sqlite3
* sqlalchemy
* Flask
* Chart.js
* D3 ("https://d3js.org/d3.v7.min.js")
* Leaflet CSS ("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css")
* Leaflet JS ("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
* tilelayer attributed in JS file
* add others as id'd

### Sources
#### Sources for data  
Link: https://catalog.data.gov/dataset/fdic-failed-bank-list  
Link: https://banks.data.fdic.gov/explore/failures?aggReport=detail&displayFields=NAME%2CCERT%2CFIN%2CCITYST%2CFAILDATE%2CSAVR%2CRESTYPE%2CCOST%2CRESTYPE1%2CCHCLASS1%2CQBFDEP%2CQBFASSET&endFailYear=2023&sortField=FAILDATE&sortOrder=desc&startFailYear=2012  

#### Sources supporting project  
https://medium.com/techcrush/how-to-render-html-file-in-flask-3fbfb16b47f6  
https://www.geeksforgeeks.org/how-to-import-a-csv-file-into-a-sqlite-database-table-using-python/  
https://www.freecodecamp.org/news/d3js-tutorial-data-visualization-for-beginners/  
https://www.youtube.com/watch?v=UK57IHzSh8I&amp;ab_channel=PrettyPrinted  
https://www.geeksforgeeks.org/pass-javascript-variables-to-python-in-flask/  
pulling info out of a list of dictionaries: https://stackoverflow.com/questions/26030759/iterate-through-dictionaries-in-javascript-and-access-values  
counting states: https://www.geeksforgeeks.org/count-occurrences-of-all-items-in-an-array-in-javascript/    
sorting:  https://medium.com/@gmcharmy/sort-objects-in-javascript-e-c-how-to-get-sorted-values-from-an-object-142a9ae7157c    

Module 10 for Flask  
Modules 14 and 15 for JavaScript, D3, and Leaflet  

### Contributing
Contributors: Louis Alejandro Gonzalez, Garrett Steenwyk, Aleid van der Zel  
Assisting: Ryan Coble (Instructor) and Andrew Kriger (TA)  
