
const path = require("path")
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const postsRoutes = require('./routes/posts')



const app = express();

mongoose.connect("mongodb://dinesh:ailpGFprPzhYe2PS@cluster0-shard-00-00.wmehg.mongodb.net:27017,cluster0-shard-00-01.wmehg.mongodb.net:27017,cluster0-shard-00-02.wmehg.mongodb.net:27017/node-angular?ssl=true&replicaSet=atlas-r0djl9-shard-0&authSource=admin&retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'DELETE',
      'PUT'
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
  app.use(cors(corsOpts));
  app.use("/api/posts",postsRoutes)




module.exports = app;
