const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const signUpSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");

router.route("/").get(authControllers.home);
router
  .route("/registration")
  .post(validate(signUpSchema), authControllers.registration);
router.route("/login").post(authControllers.login);

module.exports = router;
