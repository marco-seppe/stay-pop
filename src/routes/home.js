const express = require('express');
const HomeController = require('../controllers/HomeController');
const router = express.Router();

/* Aqui se criam as rotas de acesso de cada página: Usuário faz a requisição, nós respondemos com a view ou outra função */

router.get('/', HomeController.showHomePage);
router.get('/carrinho', HomeController.showCarrinho);
router.get('/finalize-seu-pedido', HomeController.showFinalizePedido);
router.get('/login', HomeController.showLogin);
router.get('/product', HomeController.showProductPage);
router.get('/pedido-realizado', HomeController.showPedidoRealizado);
router.get('/lista-de-produtos', HomeController.showListaDeProdutosPage);



module.exports = router;
