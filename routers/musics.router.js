const express = require("express");
const musicRouter = express.Router();
const MusicController = require("../controllers/music.controller");
const { validate } = require("express-validation");
const MusicValidator = require("../validators/music.validators");
const MusicService = require("../services/music.service");

const API_MUSICS_PARAM = `/:id`;

// Begin Router

musicRouter
  .route('/')
  .get(async function(req,resp) {
    resp.render('index', {musics : await MusicService.findAll()});
  });

musicRouter
  .route("/songs")
  .get(MusicController.findAll) // GET all songs
  .post(validate(MusicValidator.validateCreate), MusicController.create); // POST create a song

musicRouter.route("/songs/:guid").get(MusicController.findById); // GET find a specific song by id

musicRouter.route("/songs/:guid").put(validate(MusicValidator.validateUpdate), MusicController.update); // PUT modify specific song (find by id)

musicRouter.route("/artists").get(MusicController.findByArtist); // GET find all songs of the specific artist
// end Router
module.exports = musicRouter;
