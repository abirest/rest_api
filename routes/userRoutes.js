const express = require("express");
const router = express.Router();
const controllers = require("../controllers/userController")


router.post("/newuser",controllers.postUser)
router.get("/",controllers.getUser)
router.get("/:id",controllers.getUserByID)
router.delete("/:id",controllers.deleteUserByID)
router.put("/:id",controllers.updateUserByID)

module.exports = router