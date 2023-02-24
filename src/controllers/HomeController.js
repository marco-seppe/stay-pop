/* aqui se criam as funções para cada página que será acessada, elas puxam a view .ejs */
 /* o res.render() irá puxar o arquivo .ejs da página requisitada */

const HomeController = {
    showHomePage: (req, res) => {
        return res.render('index');
    },

    showCarrinho: (req, res) => {
        return res.render('carrinho');
    },

    showFinalizePedido: (req, res) => {
        return res.render('finalize-seu-pedido');
    },

    showLogin: (req, res) => {
        return res.render('login');
    },

    showProductPage: (req, res) => {
        return res.render('product');
    },
    
    showPedidoRealizado: (req, res) => {
        return res.render('pedido-realizado');
    },

    showListaDeProdutosPage: (req, res) => {
        return res.render('lista-de-produtos');
    },


}





module.exports = HomeController;
