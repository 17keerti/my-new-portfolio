const sequelize = require("../config/connection");
const { Project, Technology, ProjectTechnology } = require("../models");

const projectData = require("./projectData.json");
const technologyData = require("./technologyData.json");
const projectTechnologyData = require("./projectTechnologyData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Project.bulkCreate(projectData, {
    individualHooks: true,
    returning: true,
  });

  await Technology.bulkCreate(technologyData, {
    individualHooks: true,
    returning: true,
  });

  await ProjectTechnology.bulkCreate(projectTechnologyData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
