# Import the dependencies.
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template


app = Flask(__name__)

# Database Setup
engine = create_engine("sqlite:///bankdata.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(autoload_with=engine)

# # Save reference to the table
Bankdata = Base.classes.bankdata

# Flask Setup
app = Flask(__name__)

# Flask Routes


@app.route('/')
# def home():
#     return render_template('index.html')


# if __name__ == '__main__':
#     app.run()

# @app.route("/api/v1.0/banks")
def banks():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of bank names"""
    # Query all bankds
    results = session.query(Bankdata.name).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    all_banks = []
    for name in results:
        banks_dict = {}
        banks_dict["name"] = name
        all_banks.append(banks_dict)
   
        print(all_banks)

   #  return jsonify(all_banks)
   


if __name__ == '__main__':
    app.run(debug=True)
