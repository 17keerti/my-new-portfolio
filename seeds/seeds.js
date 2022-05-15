const sequelize = require("../config/connection");
const { Project, Technology } = require("../models");

const ProjectData = require("./projectData.json");
// const TechnologyData = require("./technologyData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Project.bulkCreate(ProjectData, {
    individualHooks: true,
    returning: true,
  });

  // await Technology.bulkCreate(TechnologyData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  process.exit(0);
};

seedDatabase();
