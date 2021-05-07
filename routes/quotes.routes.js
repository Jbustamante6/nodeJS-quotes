const router = require('express').Router();
const { QuotesController } = require("../controllers")

router.get("/quotes", QuotesController.index);
router.get("/quotes/all", QuotesController.get);
router.post("/quotes/all", QuotesController.add);
module.exports = router;