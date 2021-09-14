const MusicRepository = require("../repositories/music.repository");

/**
 * Music service
 */

const MusicService = {
  findAll: async () => {
    return await MusicRepository.findAll();
  },
  findById: async (id) => {
    const music = await MusicRepository.findById(id);
    return music;
  },
  findByArtist: async (artist) => {
    const music = await MusicRepository.findByArtist(artist);
    return music;
  },
  getAllArtists: async () => {
    const artists = await MusicRepository.getAllArtists();
    return artists
  },
  create: async (music) => {
    await MusicRepository.create(music);
  },
  update: async (id, musicInfo) => {
    const music = await MusicRepository.findById(id);
    if (!music) {
      throw Error("music not found");
    }
    await MusicRepository.update(id, musicInfo);
  },
  delete: async (id) => {
    const music = await MusicRepository.findById(id);
    if (!music) {
      throw Error("music not found");
    }
    return await MusicRepository.delete(id);
  },
};

module.exports = MusicService;
