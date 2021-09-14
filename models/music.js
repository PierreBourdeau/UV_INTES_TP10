module.exports = (sequelize, Sequelize) => {
  const Music = sequelize.define("music", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    genre: {
      type: Sequelize.STRING,
    },
    length: {
      type: Sequelize.INTEGER,
    },
    artist : {
      type: Sequelize.STRING,
    }
  });

  return Music;
};
