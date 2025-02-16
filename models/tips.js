'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Tips extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  Tips.init(
    {
      content: DataTypes.STRING,
      date: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Tips',
      tableName: 'tips'
    }
  )
  return Tips
}
