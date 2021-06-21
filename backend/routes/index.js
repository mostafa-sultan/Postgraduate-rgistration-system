var express = require('express');
var router = express.Router();
//....................................................................................................................
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/arafni';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//...................................................................................................................................
// require 
var User=require('../model/user');
var Temp=require('../model/temp');

// add post
// // test http://localhost:3000/addpost
// router.get('/addpost', function(req, res, next) {
//   var post = new Post(
//       {
//         titel: "handel data from req",
//         description: "String",
//         username: "String",
//         going: 7,
//         interest: 70,
//         comments: [{ username: "String",comment: "String" },{ username: "String",comment: "String" }]
//         });
//   post.save(function(error, post){
//     res.send(post);
//   });

// });


// registration
// test  http://localhost:3000/register
router.post('/register', function(req, res, next) {
  console.log(req.body.t.fields) 
  var user = new Temp(
    req.body.t.fields);
  user.save(function(error, temp){
    res.send(user);
  });

});
 
// test http://localhost:3000/admin
router.get('/admin', function(req, res, next) {
  Temp.find({},function(error, post){
    res.json(post); 
  });
});
 
// test  http://localhost:3000/login/String/String
router.get('/login/:email/:pass', function(req, res, next) {
  User.findOne({email:req.params.email,password:req.params.pass}, function(error, user) {
    if(!user){
      res.send('invalid user');
    }else {
      res.send("http://localhost:3001/student/"+user.id); 
    }
  });
});



// test http://localhost:3000/userApp/60cf6e63bdd0803e141c658c
router.get('/userApp/:id', function(req, res, next) {
  Temp.findOne({_id:req.params.id}, function(error, user) {
    res.send(user);
console.log(user)
    });
  });
 
  // test http://localhost:3000/userApp/60cf6e63bdd0803e141c658c
router.get('/user/:id', function(req, res, next) {
  User.findOne({_id:req.params.id}, function(error, user) {
    res.send(user);
console.log(user)
    });
  });
 
 
  // test http://localhost:3000/delete/60cf6e63bdd0803e141c658c
router.get('/delete/:id', function(req, res, next) {
  Temp.findOneAndRemove({_id:req.params.id}, function(error) {
    console.log("delete")
    res.redirect("http://localhost:3001/admin")
    });
  });
 

    // test http://localhost:3000/accept/60cfe5a010c917325405d277
router.get('/accept/:id', function(req, res, next) {
  Temp.findOne({_id:req.params.id}, function(error,temp) {
    delete temp.__v;
    var user = new User(temp);
    user.save(function(error, user){
      // console.log(error);
      console.log(user);
    }); 
    console.log(temp) 
    // res.redirect("http://localhost:3001/admin")
    });

    Temp.findOneAndRemove({_id:req.params.id}, function(error) {
      console.log("delete")
      res.redirect("http://localhost:3001/admin")
      });
  });
 

// // top 3 interest
// //http://localhost:3000/interest
// router.get('/interest', function(req, res, next) {
//   Post.find({}).sort({interest: -1}).limit(3).exec(
//       function(err, posts) {
//         res.send(posts);

//       }
//   );});

// // top 3 going
// // test http://localhost:3000/going
// router.get('/going', function(req, res, next) {
//   Post.find({}).sort({going: -1}).limit(3).exec(
//       function(err, posts) {
//         res.send(posts);

//       }
//   );});


// //   going++

// // test http://localhost:3000/going/5fdd2d7563c4d82fe414f6ee/5fdd39bcc2712c10d887f70d
// router.get('/going/:id/:userid', function(req, res, next) {
//   Post.findOne({_id:req.params.id}, function(error, post) {
//     res.send(post);
//     var going=post.going+1;
//     post.set({interest:going});
//     post.save(function(error, post){
//     });
//   });
//   User.findOne({_id:req.params.userid}, function(error, user) {
//     var state=user.state;
//     state.push({postid:req.params.id,method:"going"})
//     user.set({states:state});
//     user.save(function(error, post){
//       res.send(user);
//     });
//   });
// });

// //   interest++
// //test  http://localhost:3000/interest/5fdd2d7563c4d82fe414f6ee/5fdd39bcc2712c10d887f70d

// router.get('/interest/:id/:userid', function(req, res, next) {
//   Post.findOne({_id:req.params.id}, function(error, post) {
//     res.send(post);
//      var interest=post.interest+1;
//     post.set({interest:interest});
//     post.save(function(error, post){
//     });
//   });
//   User.findOne({_id:req.params.userid}, function(error, user) {
//     var state=user.state;
//     state.push({postid:req.params.id,method:"interest"})
//     user.set({states:state});
//     user.save(function(error, post){
//       res.send(user);
//     });
//   });
// });





// // post comment
// // test http://localhost:3000/comment/5fdd1c97b958833260255fad/String/comerfgdsfdfg
// router.get('/comment/:id/:user/:comment', function(req, res, next) {
//   Post.findOne({_id:req.params.id}, function(error, post) {
//     var comment=post.comments;
//     comment.push({username:req.params.user,comment:req.params.comment})
//     post.set({comments:comment});
//     post.save(function(error, post){
//       res.send(post);
//     });
//   });});

module.exports = router;
