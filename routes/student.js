var express = require('express');
var router = express.Router();

//here we will create end point
router.get('/get-std', function(req, res, next) {
  const n=req.query.name;
  const l=req.query.loc;
  //'full path ->http://localhost:2025/std/get-std'
              // http://localhost:2025/std/get-std?name=Gulab&loc=Ugapurs
  res.send(`Im in Student.js file which is stand for std;  
    function call by get-std, by default broser send get request, name-> ${n} and loc-> ${l}`); 
});


router.put('/put-std/:nam/:loc', (req, res, next) => {
  const n=req.params.nam;
  const l=req.params.loc;
  res.send(`Name-> ${n}, Location-> ${l}`); 
  //'full path ->http://localhost:2025/std/put-std/Sachin/Mumbai'
  //'full path ->http://localhost:2025/std/put-std'
});

router.delete('/del-std', function(req, res, next) {
  const n=req.headers.name;
  const l=req.headers.loc;
  res.send(`Name-> ${n}, Location-> ${l}`); 
  // res.send('Im in Student.js file which is stand for std;  function call by delete-std '); 
  //'full path ->http://localhost:2025/std/del-std'
  
});

router.post('/MyPost', function(req, res, next) {
  const n=req.body.name;
  const l=req.body.loc;
  res.send(`Name is-> ${n}, Location is-> ${l}`); 

  // res.send('Im in Student.js file/std;  function call by Mypost '); 
  //'full path ->http://localhost:2025/std/MyPost'
});

// router.update('/upd-std', function(req, res, next) {
//   res.send('Im in Student.js file which is stand for std;  function call by update-std '); 
//   //'full path ->http://localhost:2025/std/del-std'
// });

module.exports = router;

// how client can send date to server?
// as part of request ->queryparameter, pathparameter, req Headers, req Body.

// queryparamer start with? in keyvalue pair format serperate with &
// example 
//  ->http://localhost:2025/std/get-std?name=Akhilesh & loc=Mumbai

// path parameter as part of url start with '/'
//  ->http://localhost:2025/std/get-std/Akhilesh/Mumbai

// req Headers as part of headers in key value format 
// req Body as part of Body in Json format 
