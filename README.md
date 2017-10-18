# LSBU MySignal - Health Server

A Node app built with MongoDB and Angular to provide an API for MySignal developer kit.
The project is part of a research project at London South Bank University.

- Node provides the RESTful API 
- Angular provides the frontend and accesses the API
- MongoDB stores the data

For the first test case only heartbeat data will be stores and show in the dashboard.
Node application is designed to run on a ubuntu server.

## Requirements ##

- [Node and npm](http://nodejs.org)
- [MongoDB] (https://www.mongodb.com)

## Installation (Local) ##

1. Clone the repository: `git clone git@github.com:scotch-io/node-todo`
2. Install the application: `npm install`
3. Start MongoDb Database: `mongo`
4. Insert sample Data (from sampleData.json): `mongoimport -d heartbeat -c heartbeats --type json --file sampleData.json --jsonArray`
5. Start the server: `node server.js`
6. View client (dashboard) in browser at `http://localhost:8060`

## Installation (ubuntu server) ##

-> comes later

## API ##

Receive data to /api/heartbeats
#GET: http://localhost:8060/api/heartbeats

Send data to /api/heartbeats
#POST: http://localhost:8060/api/heartbeats





