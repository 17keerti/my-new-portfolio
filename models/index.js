const Project = require("./Project");
const Technology = require("./Technology");
const ProjectTechnology = require("./ProjectTechnology");

Project.hasMany(Technology, {
  foreignKey: "project_id",
});

Technology.belongsToMany(Project, {
  foreignKey: "technology_id",
  through: ProjectTechnology,
});

module.exports = { Project, Technology, ProjectTechnology };
