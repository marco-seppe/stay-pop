//Importações
const express = require('express');
const path = require('path');


//Variáveis

const app = express();
const port = 3000;


//Configurações / Middlewares
app.set('view engine', 'ejs');
app.set('views', path.resolve('src', 'views'));
app.use(express.static(path.resolve('src', 'public')));



//Rotas




app.get('/', (req, res) => {
    res.send("Express works!");
});

app.listen(port, () => console.log(`Servidor funcionando na porta ${port}`))

//npm run dev -> nodemon | npm start -> node



