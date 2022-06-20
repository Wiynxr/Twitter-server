const Twit = require("../Models/Twit.model");

module.exports.twitController = {
  postTwit: (req, res) => {
    Twit.create({
      header: req.body.header,
      text: req.body.text,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  deleteTwit: (req, res) => {
    Twit.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Твитт удален");
      })
      .catch((e) => {
        res.json(e);
      });
  },
  getTwitById: (req, res) => {
    Twit.findById(req.params.id)
      .populate("User")
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  getAllTwit: (req, res) => {
    Twit.find()
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  patchTwit: (req, res) => {
    Twit.findByIdAndUpdate(req.params.id, {
      header: req.body.header,
      text: req.body.text,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  addLikes: (req, res) => {
    Twit.findByIdAndUpdate(req.params.id, {
      $push: {
        likes: req.body.likes,
      },
    })
      .then((data) => {
        res.json("Лайк добавлен");
      })
      .catch((e) => {
        res.json(e);
      });
  },
};
