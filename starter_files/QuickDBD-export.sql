-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Banklist" (
    "Bankname" varchar,
    "City" varchar,
    "State" varchar,
    "Cert" int,
    "Acquiring_Institution" varchar,
    "Closing_Date" date,
    "Fund" int,
    CONSTRAINT "pk_Banklist" PRIMARY KEY (
        "Cert"
     )
);

CREATE TABLE "Bankdata" (
    "Cert" int,
    "CHClass1" varchar,
    "City_and_State" varchar,
    "Cost" int,
    "Fail_Date" date,
    "FIN" varchar,
    "ID" varchar,
    "Bankname" varchar,
    "QBF_Asset" int,
    "QBF_Dep" int,
    "Restype" varchar,
    "Restype1" varchar,
    "Savr" varchar
);
