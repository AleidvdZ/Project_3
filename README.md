# Project_3 Analysis of Failed Banks

## Overview
The industry selected by the analysis team was finance. On the data.gov website the team came across a data source that is entitled “FDIC Failed Bank List” which includes banks which have failed since October 1, 2000. A secondary data source that included some additional information was also identified.  

Public data regarding bank failure exist and are readily accessible.  The source the team identified was from the FDIC.  Most of the data that is represented is tabular and the team is interested in creating visualizations of different aspects of the information to make it easier to analyze and understand patterns.

### Questions
1) For the years covered in the data how many closures were there per year?  Is there a pattern of closures in terms of cluster of years or are there certain months that have more closures?  

2) What was the distribution of the closures amongst the states and where in the states were the closures (over a certain timeframe)?  Were certain states, or cities within states more affected by closures?  

3) What banks took over the smaller and/or failing banks)?  Are there certain banks that are more involved in buying out failed banks than others? What percentage of banks just close and are not bought out by another? 

## Timeline of Activities/Things Learned
0815 Created and submitted proposal for project  
0817 Research and discussed requirments and how to achieve.  Realized that sqlite would be easier to use for flask.  
0820 Team check-in. LAG created sqlite files.  
0821 Built flask query, troubleshot need for primary key to utiize flask, identified order of events (to a point).  

## Conclusion

### Link to Presentation


## Other Information  
### Installing
The following applications are necessary to manage, clean the data, and create visualizations for the project.
* sqlite3
* sqlalchemy
* Flask
* D3 (need to add url)
* add others as id'd

### Sources
#### Sources for data  
Link: https://catalog.data.gov/dataset/fdic-failed-bank-list  
Link: https://banks.data.fdic.gov/explore/failures?aggReport=detail&displayFields=NAME%2CCERT%2CFIN%2CCITYST%2CFAILDATE%2CSAVR%2CRESTYPE%2CCOST%2CRESTYPE1%2CCHCLASS1%2CQBFDEP%2CQBFASSET&endFailYear=2023&sortField=FAILDATE&sortOrder=desc&startFailYear=2012  

#### Sources supporting project  

### Contributing
Contributors: Louis Alejandro Gonzalez, Garrett Steenwyk, Aleid van der Zel
