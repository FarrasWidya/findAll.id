'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Profile)
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate:{
        notEmpty :{
          msg : 'Please fill your email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate:{
        notEmpty :{
          msg : 'Please fill your password'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate(instance,options){
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(instance.password,salt) 
        instance.password = hash

        instance.role = 'regular'
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};