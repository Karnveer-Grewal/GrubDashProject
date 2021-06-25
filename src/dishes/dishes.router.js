const router = require("express").Router();

const controller = require("./dishes.controller");

const methodNotAllowed = require("../errors/methodNotAllowed");

//Routers for /:dishId
router
  .route("/:dishId")
  .get(controller.read)
  .put(controller.update)
  .all(methodNotAllowed);

//router for /dish
router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
