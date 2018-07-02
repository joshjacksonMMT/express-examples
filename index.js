const express = require('express');

const app = express();

//Store routing stuff for the 'uk' page inside the uk.js file and import its routing functionality.
let uk = require('./uk');

let france = require('./france');


/* 
  *                                   -------- MIDDLEWARE --------

  ! app.get, app.use, app.post etc etc can all feature some sort of middleware inside of the callback function
  ! that gets invoked. They can either just serve a resource, or carry out an action and then call 'next()' to
  ! move on to the next piece of middleware, or they can end the response lifecycle 'res.end()'.
*/

const currentDateMiddleware = function (req, res, next)
{
  console.log(Date.now());
  next();
}

//First middleware function.
app.use((req, res, next) =>
{
  console.log("First middleware function.");
  console.log(req);
  next();
});

//Second middleware function.
app.use(currentDateMiddleware);

//Last middleware function.
app.use((req, res, next) =>
{
  console.log("Last middleware function.");
  res.end();
});


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