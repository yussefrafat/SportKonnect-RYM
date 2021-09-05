const userSeed = require('./user-seeds');

const sequelize = require('../config/connection');

const seed = async () => {
  await sequelize.sync({ force: true });
  await userSeed();
  process.exit(0);
};

seed();