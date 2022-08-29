const express = require("express");

const homeController = require("../controller/home");

const router = express.Router();

router.get("/", homeController.index);

//   /* User Routes */
// router.get('/api/allusers', homeController.index);
// router.post('api/usercreate',homeController.add);
 router.get("/getuser", homeController.list);
  router.post('/createuser', homeController.AddUser);

module.exports = router;
