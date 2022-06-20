const Comment = require("../Models/Comment.model");

module.exports.commentController = {
  postComment: (req, res) => {
    Comment.create({
      text: req.body.text,
    })
      .then((data) => {
        res.json("Комментарий добавлен");
      })
      .catch((e) => {
        res.json(e);
      });
  },
  deleteComment: (req, res) => {
    Comment.findByIdAndUpdate(req.params.id)
      .then(() => {
        res.json("Комментарий удален");
      })
      .catch((e) => {
        res.json(e);
      });
  },
  patchComment: (req, res) => {
      Comment.findByIdAndUpdate(req.params.id, {
          text: req.body.text,
      }).then((data) => {
          res.json(data)
      }).catch((e) => {
          res.json(e)
      })
  },
  getComments: (req, res) => {
      Comment.find().then((data) => {
          res.json(data)
      }).catch((e) => {
          res.json(e)
      })
  },
  getCommentById: (req, res) => {
      Comment.findById(req.params.id).then((data) => {
          res.json(data)
      }).catch((e) => {
          res.json(e)
      })
  }
};
