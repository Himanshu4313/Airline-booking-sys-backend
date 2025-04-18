'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.Airplane ,{
        foreignKey : 'airplaneId'
      } )
    }
  }
  seat.init({
    airplaneId:{
      type:DataTypes.INTEGER,
      allowNull:false
      },
    row: {
      type: DataTypes.INTEGER,
      allowNull: false
      },
    col: {
      type:DataTypes.STRING,
      allowNull:false
      },
    type:{
      type:DataTypes.ENUM,
      values: ['business', 'economy' , 'premium-economy', 'first-class' ],
      defaultValue:'economy',
      allowNull:false
      },
  }, {
    sequelize,
    modelName: 'seat',
  });
  return seat;
};