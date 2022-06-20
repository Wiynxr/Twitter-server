const { Router } = require("express");

const router = Router();

const { userController } = require("../controller/user.controller");

router.post("/user", userController.postUser);
router.delete("/user/:id", userController.deleteUser);
router.patch("/user/:id", userController.patchUser);
router.get("/user/:id", userController.getUserById);
router.get("/users", userController.getUsers);
router.patch("/user/:id/saves", userController.savedTwit);

module.exports = router;
