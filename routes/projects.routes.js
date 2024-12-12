const router = require("express").Router();
const projectsController = require("../controllers/projects.controller");

router.get("/jacques-chirac-quiz", projectsController.getJacquesChiracQuizProject);


module.exports = router;