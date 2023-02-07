const express = require('express');
const HomeController = require('../controller/HomeController');
const router = express.Router();

/* Aqui se criam as rotas de acesso de cada página: Usuário faz a requisição, nós respondemos com a view ou outra função */

router.get('/', HomeController.showHomePage);
router.get('/', HomeController.showHomePage);
router.get('/', HomeController.showHomePage);
router.get('/', HomeController.showHomePage);
router.get('/', HomeController.showHomePage);
router.get('/', HomeController.showHomePage);






module.exports = router;
