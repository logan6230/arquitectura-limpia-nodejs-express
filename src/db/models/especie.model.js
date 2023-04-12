const { Model, DataTypes, Sequelize } = require('sequelize');

const ESPECIE_TABLE = 'especie';

class Especie extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: ESPECIE_TABLE,
            modelName: 'Especie',
            timestamps: true
        }

    }
}

const EspecieSchema = {
    id_especie: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre'
    },
    clasificacion: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'clasificacion'
    },
    esperanza_vida: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'esperanza_vida'
    },
    peso_promedio: {
        allowNull: false,
        type: DataTypes.DOUBLE,
        field: 'peso_promedio'
    }
}
module.exports={Especie, EspecieSchema}
