const express = require("express");
const {handleSoftwareStoreController} = require("../controller/software.controller");


const router = express.Router();

router.post("/addsoftware", handleSoftwareStoreController);

module.exports = router;