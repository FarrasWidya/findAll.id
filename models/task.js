'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.Profile)
      Task.belongsTo(models.Agent)
    }
  };
  Task.init({
    title: DataTypes.STRING,
    searchingFor: DataTypes.STRING,
    description: DataTypes.TEXT,
    lastSeenAt: DataTypes.STRING,
    lastSeenDate: DataTypes.DATE,
    imageUrl: DataTypes.STRING,
    isCompleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};