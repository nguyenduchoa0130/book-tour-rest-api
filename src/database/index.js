const { Sequelize } = require('sequelize');
const { sequelize } = require('./models');
const logger = require('./../../src/utils/logger.util');

class Database {
  /**
   * @param {Sequelize} sequelize
   */
  constructor(sequelize) {
    this._sequelize = sequelize;
  }

  async connect() {
    try {
      logger.info('Connecting to database...');
      await this._sequelize.authenticate();
    } catch (error) {
      throw error;
    }
  }

  getModel(name) {
    const model = this._sequelize.model(name);
    if (model) {
      return model;
    }
    throw new Error(`Not found model: ${name}`);
  }
}

module.exports = new Database(sequelize);

