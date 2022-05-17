const router = require("express").Router();
const { Project, ProjectTechnology, Technology } = require("../models");

router.get("/", async (req, res) => {
  try {
    const projectData = await Project.findAll();

    const projects = projectData.map((project) => project.get({ plain: true }));
    res.render("homepage", {
      projects,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/project/:id", async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: ProjectTechnology,
          model: Technology,
        },
      ],
    });
    const project = projectData.get({ plain: true });

    res.render("project", project);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
