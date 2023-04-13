'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    age: {
      type: Sequelize.INTEGER
    },
    activateToken: {
      type: Sequelize.STRING,
      allowNull: true
      // defaultValue: 'No activate'
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    is_staff: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    is_superuser: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    statistic: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('Users');
}