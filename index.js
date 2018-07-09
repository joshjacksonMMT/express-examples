const express = require('express');

const app = express();

const session = require('express-session');

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
  console.log("\nCurrent Date: " + Date.now());
  next();
}

//First middleware function.
app.use((req, res, next) =>
{
  console.log("\nFirst middleware function.");
  next();
});

//Second middleware function.
app.use(currentDateMiddleware);


//Third middleware function.
app.use((req, res, next) =>
{
  console.log("\nLast middleware function.");
  next();
});

//Last middleware function. (express-session middleware)
app.use(session({ secret: "Rutland" }));


// If the route is /uk, then go to the uk.js routing and let that decide what gets sent (ie. the "Hello Uk!" message probably)
app.use('/uk', uk);

app.use('/france', france);


// When a default route request comes in.
app.get('/', (req, res) =>
{
  if (req.session.views)
  {
    req.session.views++;
    res.send("You have viewed this page " + req.session.views + " times.");
  }
  else
  {
    req.session.views = 1;
    res.send("This is your first time viewing this page, Hello World!");
  }
  res.end();
});





app.listen(3000, () =>
{
  console.log("Listening on localhost:3000");
});