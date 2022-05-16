const Project = require("./Project");
const Technology = require("./Technology");
const ProjectTechnology = require("./ProjectTechnology");

Project.belongsToMany(Technology, {
  foreignKey: "project_id",
  through: ProjectTechnology,
});

Technology.belongsToMany(Project, {
  foreignKey: "technology_id",
  through: ProjectTechnology,
});

module.exports = { Project, Technology, ProjectTechnology };
