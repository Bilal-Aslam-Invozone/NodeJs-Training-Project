const express = require("express");

const userController = require("../controller/userController");

const router = express.Router();

router.get("/", userController.index);

//   /* User Routes */
    router.get("/getAllUsers", userController.getAllUsers);
    router.get('/user/:id', userController.getOneUser);
    router.post('/createUser', userController.AddUser);
    router.put('/updateUser/:id', userController.updateUser);
    router.delete('/deleteUser/:id', userController.deleteUser)
// get user carts
router.get('/getUserCarts/:id', userController.getUserCarts);
  /* Product Router */
// router.get('/api/classroom', classroomController.list);
// router.get('/api/classroom/:id', classroomController.getById);
// router.post('/api/classroom', classroomController.add);
// router.put('/api/classroom/:id', classroomController.update);
// router.delete('/api/classroom/:id', classroomController.delete);

/* Student Router */
// router.get('/api/student', studentController.list);
// router.get('/api/student/:id', studentController.getById);
// router.post('/api/student', studentController.add);
// router.put('/api/student/:id', studentController.update);
// router.delete('/api/student/:id', studentController.delete);

/* Lecturer Router */
// router.get('/api/lecturer', lecturerController.list);
// router.get('/api/lecturer/:id', lecturerController.getById);
// router.post('/api/lecturer', lecturerController.add);
// router.put('/api/lecturer/:id', lecturerController.update);
// router.delete('/api/lecturer/:id', lecturerController.delete);

/* Course Router */
// router.get('/api/course', courseController.list);
// router.get('/api/course/:id', courseController.getById);
// router.post('/api/course', courseController.add);
// router.put('/api/course/:id', courseController.update);
// router.delete('/api/course/:id', courseController.delete);

/* Advance Router */
// router.post('/api/student/add_course', studentController.addCourse);
// router.post('/api/classroom/add_with_students', classroomController.addWithStudents);
// router.post('/api/lecturer/add_with_course', lecturerController.addWithCourse);

module.exports = router;
