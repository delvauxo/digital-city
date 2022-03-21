const memberController = require('../controllers/member-controller');

const memberRouter = require('express').Router();


memberRouter.get('/member/register', memberController.registerGET);
memberRouter.post('/member/register', memberController.registerPOST);

// TODO Add routing for "Login"
memberRouter.get('/member/login', memberController.loginGET);
memberRouter.post('/member/login', memberController.loginPOST);

module.exports = memberRouter;