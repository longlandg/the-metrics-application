const express = require('express');

const app = express();
const promMid = require('express-prometheus-middleware');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();


const makeEpochTimeObject = require('./functions/makeEpochTimeObject');

app.use(cors());

let port = process.env.PORT;
let authorizationHeader = process.env.AUTHORIZATION;

app.use(function(req, res, next) {
  console.log(req)
  if ( !req.get('Authorization') ) {
        return res.status(403).json({
          error: 'No authorization header'
        })
      }
  next()
})

app.use(function(req, res, next) {
  console.log(req)
  if ( req.get('Authorization') !=authorizationHeader) {
        return res.status(403).json({
          error: 'Wrong authorization header'
        })
      }
  next()
})


app.get('/time', (req, res) => {
  res.send(makeEpochTimeObject());
});

app.use(promMid({
  metricsPath: '/metrics',
  collectDefaultMetrics: true,
  requestDurationBuckets: [0.1, 0.5, 1, 1.5],
  requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
  responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
}));

app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`);
});
