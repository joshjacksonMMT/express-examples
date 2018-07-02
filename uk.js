
/*
  Contains the routing for a page that says "Hello Uk!" (instead of the default "Hello World!")
  This can be triggered for any route, but will be used when the user visits /uk in the URL. A
  more relevant example would be an about page at /about, where this routing code would send the 
  about.html file.
*/

const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>
{
  res.send("Hello UK!");
});

/*
  The above route is at whatever invoked this file (so /uk). Below is relative to the original route. /uk.
  So if you visited /uk/uppingham, the below route is triggered.
*/

router.get('/uppingham', (req, res) =>
{
  res.send("Hello Uppingham, UK!");
});

/* 
  Export the routing functionality, so when this file (as a function using require('uk')), the routing defined above
  will be used.
*/
module.exports = router;