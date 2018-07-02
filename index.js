const express = require('express');

const app = express();

//Store routing stuff for the 'uk' page inside the uk.js file and import its routing functionality.
let uk = require('./uk');

let france = require('./france');

// If the route is /uk, then go to the uk.js routing and let that decide what gets sent (ie. the "Hello Uk!" message probably)
app.use('/uk', uk);

app.use('/france', france);


// When a default route request comes in.
app.get('/', (req, res) =>
{
  res.send("Hello World!");
});


app.listen(3000, () =>
{
  console.log("Listening on localhost:3000");
});