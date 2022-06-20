const { Router } = require("express");

const router = Router();

const { commentController } = require("../controller/comment.controller");

router.post("/comment", commentController.postComment);
router.delete("/comment/:id", commentController.deleteComment);
router.patch("/comment/:id", commentController.patchComment);
router.get("/comments", commentController.getComments);
router.get("/comment/:id", commentController.getCommentById);

module.exports = router;
