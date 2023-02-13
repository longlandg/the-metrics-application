# the-metrics-application

A simple API and frontend application for displaying the DATA returned by the API

Instructions:
Clone the repository

Open 2 terminals:
in the first terminal navigate to the-metrics-application/BACKEND
then run npm install

create a .env file in the BACKEND directory and add the following:

PORT=3001
AUTHORIZATION="mysecrettoken"

then run nodemon app.js

the server is up and running now.

in the second terminal navigate to the-metrics-application/FRONTEND/metrics-app
then run npm install

create a .env file in the FRONTEND/metrics-app directory and add the following:

REACT_APP_URL="http://localhost:3001"
REACT_APP_AUTHORIZATION="mysecrettoken"

then run npm run start

Tests:

to test the stopwatch function navigate to FRONTEND/metrics-app
then npm run jest tests

to test linting of the backend navigate to BACKEND
then npx eslint app.js
