const express = require("express")
const router = express.Router()
const formController = require("../controllers/formController")

router.post("/sendForm", formController.handlForm)

module.exports = router