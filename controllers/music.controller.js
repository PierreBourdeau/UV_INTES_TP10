const { response } = require("express");
const MusicService = require("../services/music.service");
const MusicController = {
  findAll: async (req, res, next) => {
    const musics = await MusicService.findAll();
    res.status(200).send(musics);
  },
  findById: async (req, res, next) => {
    const musicId = req.params.guid;
    const music = await MusicService.findById(musicId);
    if (music != null) {
      const data = music.dataValues;
      res.render('searchResult', {music : data });
    } else {
      const data = 'empty';
      res.render('searchResult', {music : data });
    }

  },
  findByArtist: async (req, res, next) => {
    let artists = await MusicService.getAllArtists();
    artists = artists.filter((artist, index, self) =>
      index === self.findIndex((t) => (
        t.artist === artist.artist && t.artist === artist.artist
      ))
    )
    for(let i=0; i<artists.length; i++) {
      artists[i].songs =  await MusicService.findByArtist(artists[i].artist);
    }
    res.render('artistTable', {artists: artists});
  },
  create: async (req, res, next) => {
    const music = req.body;
    await MusicService.create(music);
    //res.status(200).send({ message: "music created successfully" });
    res.render('table', {musics : await MusicService.findAll()});
  },
  update: async (req, res, next) => {
    const musicId = req.params.guid;
    const musicInfo = req.body;
    try {
      await MusicService.update(musicId, musicInfo);
      res.render('table', {musics : await MusicService.findAll()});
    } catch (error) {
      res.status(404).send({ message: `music with id - ${musicId} not found` });
    }
  },
  delete: async (req, res, next) => {
    const musicId = req.params.guid;
    try {
      await MusicService.delete(musicId);
      res.render('table', {musics : await MusicService.findAll()});
    } catch (error) {
      res.status(404).send({ message: `music with id - ${musicId} not found` });
    }
  },
};

module.exports = MusicController;
