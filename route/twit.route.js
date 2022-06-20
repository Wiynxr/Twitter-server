const { Router } = require("express");

const router = Router();

const { twitController } = require("../controller/twit.controller");

router.post("/twit", twitController.postTwit);
router.delete("/twit/:id", twitController.deleteTwit);
router.get("/twit/:id", twitController.getTwitById);
router.get("/twits", twitController.getAllTwit);
router.patch("/twit/:id", twitController.patchTwit);
router.patch("/twits/:id/likes", twitController.addLikes);

module.exports = router;
