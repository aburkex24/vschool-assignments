var express = require("express"); 
var app = express(); 
var Post = require("../models/post.js");
var postRoute = express.Router(); 


postRoute.route("/").get(function(req, res) {
    Post.find(function (err, posts) {
        if (err) res.status(500).send(err); 
        else res.send(posts);
        console.log("retrieved"); 
    });
}).post(function(req, res) {
    var newPost = Post(req.body); 
    newPost.save(function(err, post) {
        if (err) res.status(500).send(err); 
        else res.send(post); 
    });
});

//app.delete("/posts/:postsId", function (req, res) {
//    for (var i = 0; i < postList.length; i++) {
//        if (postList[i].id === req.params.postsId) {
//            postList.splice(i, 1);
//            return res.send("Topic Deleted");
//        }
//    }
//    res.send("No matching ID found.");
//});
//
//app.put("/posts/:postsId", function (req, res) {
//    for (var i = 0; i < postList.length; i++) {
//        if (postList[i].id === req.params.postsId) {
//            postList[i] = req.body;
//            return res.send(postList[i]);
//        }
//    }
//    res.send("No matching ID found.");
//});

module.exports = postRoute;