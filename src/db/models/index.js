const { Especie, EspecieSchema } = require('./especie.model')

function setupModels(sequelize) {
    Especie.init(EspecieSchema, Especie.config(sequelize));

}

module.exports = setupModels;