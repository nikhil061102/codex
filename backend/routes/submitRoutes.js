const express = require('express');
const submitController = require("../controllers/submitControllers");
    
const router = express.Router();

router.route("/").post(submitController.submit);
module.exports = router;