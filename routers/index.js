const express = require("express");
const router = express.Router();
const MusicRouter = require("./musics.router");

router.use(MusicRouter);

module.exports = router;
