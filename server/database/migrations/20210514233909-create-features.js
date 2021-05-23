'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('features', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      collection_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'feature-collections',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelte: 'CASCADE'
      },
      color: Sequelize.STRING,
      geometry: {
        type: Sequelize.GEOMETRY,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull:false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull:false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('features');
  }
};
