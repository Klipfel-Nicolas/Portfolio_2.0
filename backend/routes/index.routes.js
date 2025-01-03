const router = require("express").Router();
const indexController = require("../controllers/index.controller");

router.get("/", indexController.getHomepage);
router.get("/projects", indexController.getProjectsPage);

module.exports = router;