const { models } = require('../libs/sequelize')

class EspecieService {
    constructor() { }

    async find() {
        const res = await models.Especie.findAll();
        return res;
    }
    async findOne(id) {
        const res = await models.Especie.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.Especie.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await models.Especie.create(id, data);
        return res;
    }
    async update(id) {
        const model = await this.findOne(id);
        await model.destroy();
        return { deleted: true };
    }

}

module.exports = EspecieService;