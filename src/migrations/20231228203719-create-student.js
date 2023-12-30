"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Students", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},

			instituteId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "Institutes",
					key: "id",
				},
			},
			courseId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "Courses",
					key: "id",
				},
			},
			personId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "People",
					key: "id",
				},
			},

			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Students");
	},
};
