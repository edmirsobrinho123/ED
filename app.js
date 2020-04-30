const express = require("express");
const app = express();
const porta = 8081;
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Questionario = require('./models/Questionario');

//Templat Engine
app.engine('handlebars', handlebars({ defautLayout: 'main' }))
app.set('view engine', 'handlebars')
//bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//Rotas
app.get("/", function (req, res) {
    res.render('questionario')
})
app.get("/voltar", function (req,res) {
    res.render('questionario')
})
app.get('/home', function (req, res) {
    Questionario.findAll().then(function (posts) {
        res.render('home', { posts: posts })
    })
})
app.post('/add', function (req, res) {
    Questionario.create({
        nomeCompleto: req.body.nomeCompleto,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
        endereco: req.body.endereco
    }).then(function () {
        res.redirect('/home')
    }).catch(function (erro) {
        res.send("Erro: " + erro)
    })
})
app.get('/deletar/:id', function (req, res) {
    Questionario.destroy({
        where: {
            'id': req.params.id
        }
    }).then(function () {
        res.redirect('/')
        //res.send("Postagem deletada com sucesso!!")
    }).catch(function (erro) {
        res.redirect('/')
        //res.send("Esta postagem não existe")
    })
})
//fim do codigo
app.listen(porta, function () {
    console.log("Servidor ONLINE, porta " + porta + " com node.js + express!!");
});
