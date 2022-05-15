const router = require("express").Router();

const projectRoute = require("./project");

router.use("/projects", projectRoute);

module.exports = router;
