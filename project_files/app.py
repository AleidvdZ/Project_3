# Import the dependencies.
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template

# Sequence for bankdata.sqlite
app = Flask(__name__)

# Database Setup
engine = create_engine("sqlite:///bankdata.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(autoload_with=engine)

# Save reference to the table
Bankdata = Base.classes.bankdata

# Flask Setup
app = Flask(__name__)

# Flask Routes
@app.route('/')
def home():
    return render_template('index.html')

@app.route("/api/v1.0/bankdata")
def bankdata():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of info from bankdata.squlite: name, cert, qbfasset, qbfdep"""
    # Query the banks
    results = session.query(Bankdata.name, Bankdata.cert, Bankdata.qbfasset, Bankdata.qbfdep).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    bank_data = []
    for name, cert, qbfasset, qbfdep in results:
        bankdata_dict = {}
        bankdata_dict["name"] = name
        bankdata_dict["cert"] = cert
        bankdata_dict["qbfasset"] = qbfasset
        bankdata_dict["qbfdep"] = qbfdep
        bank_data.append(bankdata_dict)

    return jsonify(bank_data)

# Database Setup for banklist.sqlite
engine2 = create_engine("sqlite:///banklist.sqlite")

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(autoload_with=engine2)

# Save reference to the table
Banklist = Base.classes.banklist

# Flask Routes
@app.route("/api/v1.0/banklist")
def banklist():
    # Create our session (link) from Python to the DB
    session = Session(engine2)

    """Return a list of info from banklist.sqlite: bankname, cert, city, state, acquiring_institution, closing_date, fund"""
    # Query the banks in banklist.sqlite
    results = session.query(Banklist.bankname, Banklist.cert, Banklist.city, Banklist.state, Banklist.acquiring_institution, Banklist.fund).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    bank_list = []
    for bankname, cert, city, state, acquiring_institution, fund in results:
        banklist_dict = {}
        banklist_dict["bankname"] = bankname
        banklist_dict["cert"] = cert
        banklist_dict["city"] = city
        banklist_dict["state"] = state
        banklist_dict["acquiring_institution"] = acquiring_institution
        banklist_dict["fund"] = fund
        bank_list.append(banklist_dict)

    return jsonify(bank_list)

if __name__ == '__main__':
    app.run(debug=True)
