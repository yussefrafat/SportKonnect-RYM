const userSeed = require('./user-seeds');
const commentSeed = require('./comment-seeds');
const postSeed = require('./post-seeds')
const sequelize = require('../config/connection');

const seed = async () => {
  await sequelize.sync({ force: true });
  await userSeed();
  await commentSeed();
  await postSeed();
  process.exit(0);
};

seed();