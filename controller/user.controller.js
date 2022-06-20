const User = require("../Models/User.model");

module.exports.userController = {
  postUser: (req, res) => {
    User.create({
      name: req.body.name,
    })
      .then((data) => {
        res.json("Пользователь добавлен");
      })
      .catch((e) => {
        res.json(e);
      });
  },
  deleteUser: (req, res) => {
    User.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json(`Пользователь с id ${id} удален`);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  patchUser: (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
    })
      .then((data) => {
        res.json(`Пользователь с id ${id} изменен`);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  getUserById: (req, res) => {
    User.findById(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  getUsers: (req, res) => {
    User.find()
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  savedTwit: (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
      $push: {
        saves: req.body.saves,
      },
    })
      .populate("twit")
      .then(() => {
        res.json("Запись сохранена");
      })
      .catch((e) => {
        res.json(e);
      });
  },
};
