# Import the dependencies.
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template


app = Flask(__name__)

# Database Setup
engine = create_engine("sqlite:///bank_data.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(autoload_with=engine)

# # Save reference to the table
# Banks = Base.classes.banks

# Flask Setup
app = Flask(__name__)

# Flask Routes

@app.route('/')
def home():
   return render_template('index.html')
if __name__ == '__main__':
   app.run()


# still a little confused on how the data ('/bank_data') and ('/banklist') is callin in for js through d3.json
# structure of the folders is important for the references (like "template")

# This still needs editing and moving around - WILL NOT WORK THIS way AvdZ 8/21




# @app.route("/api/v1.0/passengers")
# def passengers():
#     # Create our session (link) from Python to the DB
#     session = Session(engine)

#     """Return a list of passenger data including the name, age, and sex of each passenger"""
#     # Query all passengers
#     results = session.query(Passenger.name, Passenger.age, Passenger.sex).all()

#     session.close()

#     # Create a dictionary from the row data and append to a list of all_passengers
#     all_passengers = []
#     for name, age, sex in results:
#         passenger_dict = {}
#         passenger_dict["name"] = name
#         passenger_dict["age"] = age
#         passenger_dict["sex"] = sex
#         all_passengers.append(passenger_dict)

#     return jsonify(all_passengers)


if __name__ == '__main__':
    app.run(debug=True)