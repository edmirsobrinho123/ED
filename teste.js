const Sequelize = require('sequelize');
const _nomeBancoDeDados = 'postapp';
const _usuario = 'root';
const _senha = '123456789';
const _servidor = 'localhost';

const sequelize = new Sequelize(_nomeBancoDeDados, _usuario, _senha, {
    host: _servidor,
    dialect: 'mysql'
})

//gerar tabela
const questionario = sequelize.define('questionario', {
    nomeCompleto: { type: Sequelize.STRING },
    cpf: { type: Sequelize.STRING },
    telefone: { type: Sequelize.STRING },
    endereco: { type: Sequelize.TEXT }
});
//adicionar tabela
questionario.sync({ force: true });

//adicionar campos ao BD
//Postagem.create({ titulo: "Primeira postagem", conteudo: "Aula teste de JS,NODE..." });


//gerar tablea
//const Usuarios = sequelize.define('usuarios', {
//    nome: { type: Sequelize.STRING },
//    sobrenome: { type: Sequelize.STRING },
//    idade: { type: Sequelize.INTEGER },
//    email: { type: Sequelize.TEXT }
//});
//Usuarios.sync({force:true});
//Usuarios.create({ nome: "Edmir", sobrenome: "Vieira Lima Sobrinho", idade: 24, email: "edmirum@gmail.com" });

//criar conexão com BD
/*sequelize.authenticate().then(function () {
    console.log("Conexão OK!");
}).catch(function (erro) {
    console.log("Erro Conexão: " + erro)
});*/

