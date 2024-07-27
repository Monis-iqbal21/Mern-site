const express = require("express");
const router = express.Router();

const authcontroller = require("../controller/auth-controller")
const signupSchema = require("../validator/auth-validator")
const loginSchema = require("../validator/auth-validator")
const validate = require("../validator middleware/validator-middleware")

router.route("/").get(authcontroller.home);
router.route("/register").post(validate(signupSchema),authcontroller.register);
router.route("/register").get(authcontroller.register);
router.route("/login").post(authcontroller.login);
router.route("/login").post(validate(loginSchema),authcontroller.login);

module.exports = router;