const HomeController = {/* aqui se criam as funções para cada página que será acessada, elas puxam a view .ejs */
    showHomePage: (req, res) => {
        return res.render('index'); /* o res.render() irá puxar o arquivo .ejs da página requisitada */




    }




};

module.exports = HomeController;
