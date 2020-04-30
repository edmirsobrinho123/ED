const db = require('./db')

const Questionario = db.sequelize.define('questionarios', {
    nomeCompleto: { type: db.Sequelize.STRING },
    cpf: { type: db.Sequelize.STRING },
    telefone: { type: db.Sequelize.STRING},
    endereco: { type: db.Sequelize.TEXT }
})

//Post.sync({ force: true })
module.exports = Questionario 