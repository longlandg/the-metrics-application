const express = require('express');

const app = express();
const promMid = require('express-prometheus-middleware');
const cors = require('cors');

const dotenv = require('dotenv');

dotenv.config();

// require epoch time object for response on endpoint time
const makeEpochTimeObject = require('./functions/makeEpochTimeObject');

app.use(cors());

const port = process.env.PORT;
const authorizationHeader = process.env.AUTHORIZATION;

// check to see if there is a header with the key of Authorization if not return a 403
app.use((req, res, next) => {
  if (!req.get('Authorization')) {
    return res.status(403).json({
      error: 'No authorization header',
    });
  }
  next();
});

// check to see if the header with the key of Authorization has the value assoicated with it
// in the .env file if not return a 403
app.use((req, res, next) => {
  if (req.get('Authorization') !== authorizationHeader) {
    return res.status(403).json({
      error: 'Wrong authorization header',
    });
  }
  next();
});

// on the end /point time return an epoch object eg { 'epoch' : 234533 }
app.get('/time', (req, res) => {
  res.send(makeEpochTimeObject());
});
// on the end point /metrics return the metrics from promethius

app.use(promMid({
  metricsPath: '/metrics',
  collectDefaultMetrics: true,
  requestDurationBuckets: [0.1, 0.5, 1, 1.5],
  requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
  responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
}));

app.listen(port, () => {
});
