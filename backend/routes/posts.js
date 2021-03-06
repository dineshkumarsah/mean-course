const express = require('express');
const router = express.Router();
const Post = require("../models/post");
const multer = require('multer');
const { create } = require('../models/post');

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg"
}
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isVAlid = MIME_TYPE_MAP[file.mimetype]
    let error = new Error("Invalid image");
    if (isVAlid) {
      error = null;
    }
    cb(error, "backend/images");
  },
  filename: (req, file, cb) => {
    var dateTime = new Date();
    let date1 = dateTime.toISOString().slice(0, 10)
    const name = file.originalname.toLocaleLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + date1 + '.' + ext)

  }
});

router.post("", multer({ storage: storage }).single("image"), (req, res, next) => {
  const url = req.protocol + '://' + req.get("host")
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    imagePath: url + "/images/" + req.file.filename
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: "Post added successfully",
      post: {
        id: createdPost._id,
        title: createdPost.title,
        content: createdPost.content,
        imagePath: createdPost.imagePath
      }
    });
  });
});

router.put("/:id", multer({ storage: storage }).single("image"), (req, res, next) => {
  let imagePath = req.body.imagePath;
  if (req.file) {
    const url = req.protocol + "://" + req.get("host");
    imagePath = url + "/images/" + req.file.filename;
  }
  const post = new Post(
    {
      _id: req.body.id,
      title: req.body.title,
      content: req.body.content,
      imagePath: imagePath
    }
  );
  console.log(post);
  Post.updateOne({ _id: req.params.id }, post).then((result) => {
    console.log(result);
    res.status(200).json({ message: "update successfully" })
  })
})
router.get("", (req, res, next) => {
  const pageSize = +req.query.pageSize;
  console.log(pageSize);
  const currentPage = +req.query.page;
  let fatchedPost
  postQuery = Post.find();
  if (pageSize && currentPage) {
    postQuery
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);

  }
  postQuery
    .then(documents => {
      fatchedPost = documents
      return Post.count();
    })
    .then(
      count => {
        res.status(200).json({
          message: "Posts fetched successfully!",
          posts: fatchedPost,
          maxPost: count

        });
      }
    )
});

router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id).then((post) => {
    if (post) {
      res.status(200).json(post)
    } else {
      res.status(404).json({ message: "Post not fond" })
    }
  })
})

router.delete("/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });
});

module.exports = router