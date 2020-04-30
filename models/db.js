//CONEXÃO BD
const Sequelize = require('sequelize');
const _nomeBancoDeDados = 'postapp';
const _usuario = 'root';
const _senha = '123456789';
const _servidor = 'localhost';
const sequelize = new Sequelize(_nomeBancoDeDados, _usuario, _senha, {
    host: _servidor,
    dialect: 'mysql'
})


//exportando
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}