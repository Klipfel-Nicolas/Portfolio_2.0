const router = require("express").Router();
const projectsController = require("../controllers/projects.controller");

router.get("/jacques_chirac", projectsController.getJacquesChiracHome);
router.get("/jacques_chirac/quiz", projectsController.getJacquesChiracQuiz);
router.get("/jacques_chirac/datas", projectsController.getQuizDatas);


module.exports = router;