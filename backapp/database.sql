CREATE DATABASE imager;
-- CREATE USER divyansh WITH PASSWORD 'password' CREATEDB;
CREATE EXTENSION pgcrypto;
CREATE TABLE CouriersData (
  ID BIGSERIAL PRIMARY KEY,
  DateOfOrder DATE NOT NULL,
  NameOfSender VARCHAR(100) NOT NULL,
  ContactOfSender NUMERIC NOT NULL,
  EmailOfSender VARCHAR(100),
  PincodeOfOrigin NUMERIC NOT NULL,
  GpoOfOrigin VARCHAR(100) NOT NULL,
  AreaOfSender VARCHAR(150),
  DistrictOfOrigin VARCHAR(100),
  StateOfOrigin VARCHAR(100) NOT NULL,
  AcceptedAt TIMESTAMPTZ DEFAULT Now(),
  NameOfReciever VARCHAR(100) NOT NULL,
  ContactOfReciever NUMERIC NOT NULL,
  AreaOfReciever VARCHAR(150),
  DistrictOfDestination VARCHAR(100) NOT NULL,
  PincodeOfDestination NUMERIC NOT NULL,
  StateOfDestination VARCHAR(100) NOT NULL,
  Quantity NUMERIC NOT NULL,
  Type VARCHAR(50) NOT NULL,
  Weight VARCHAR(10) NOT NULL,
  Amount NUMERIC NOT NULL,
  ModeOfPayment VARCHAR(10) NOT NULL,
  DeliveryMan VARCHAR(100) NOT NULL,
  Status VARCHAR(100) NOT NULL,
  Delivered BOOLEAN NOT NULL
);
CREATE TABLE auth (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  dob DATE NOT NULL,
  email VARCHAR(200) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL,
  created TIMESTAMPTZ DEFAULT Now()
);
CREATE TABLE deliverymanauth (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  dob DATE NOT NULL,
  email VARCHAR(200) NOT NULL UNIQUE,
  mobile NUMERIC NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL,
  created TIMESTAMPTZ DEFAULT Now()
);
INSERT INTO auth (name, dob, email, password) VALUES (
  'Divyansh',
  '1995-09-21',
  'divyanshkumar@gmail.com',
  crypt('password', gen_salt('bf'))
);
-- To Check --
-- SELECT id FROM auth WHERE email = 'divyanshkumar@gmail.com' AND password = crypt('password', password);
