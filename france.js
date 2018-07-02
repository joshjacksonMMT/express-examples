
/*
  Contains the routing for a page that says "Hello France!" (instead of the default "Hello World!")
  This can be triggered for any route, but will be used when the user visits /france in the URL. A
  more relevant example would be an about page at /about, where this routing code would send the 
  about.html file.
*/

const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>
{
  res.send("Hello France!");
});

/*
  The above route is at whatever invoked this file (so /france). Below is relative to the original route. /france.
  So if you visited /france/paris, the below route is triggered.
*/

router.get('/paris', (req, res) =>
{
  res.send("Hello Paris, France!");
});

/* 
  Export the routing functionality, so when this file (as a function using require('france')), the routing defined above
  will be used.
*/
module.exports = router;