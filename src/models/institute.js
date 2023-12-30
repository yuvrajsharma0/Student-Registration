"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Institute extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Institute.init(
		{
			// id: {
			// 	allowNull: false,
			// 	autoIncrement: true,
			// 	primaryKey: true,
			// 	type: DataTypes.Integer,
			// },
			name: DataTypes.STRING,
			address: DataTypes.STRING,
			phone: DataTypes.STRING,
			email: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Institute",
		}
	);
	return Institute;
};
