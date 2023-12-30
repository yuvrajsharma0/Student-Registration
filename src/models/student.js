"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Student extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Student.belongsTo(models.Institute, {
				foreignKey: "instituteId",
				as: "institute",
			});
			Student.belongsTo(models.Course, {
				foreignKey: "courseId",
				as: "course",
			});
			Student.belongsTo(models.Person, {
				foreignKey: "personId",
				as: "person",
			});
		}
	}

	Student.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			instituteId: DataTypes.INTEGER,
			courseId: DataTypes.INTEGER,
			personId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Student",
		}
	);
	return Student;
};
