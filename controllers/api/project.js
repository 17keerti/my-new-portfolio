const router = require("express").Router();

// router.get("/", async (req, res) => {
//   const dbProjectData = await P.findAll();
//   res.status(200).json(dbPlanData);
// });

// router.get("/:id", async (req, res) => {
//   const dbPlanData = await Plan.findOne({
//     where: {
//       id: req.params.id,
//     },
//   });

//   if (!dbPlanData) {
//     res.status(400).json({ message: "Plan not found." });
//     return;
//   }

//   res.status(200).json(dbPlanData);
});

module.exports = router;
