module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Devs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dev_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      skills: {
        allowNull: true,
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      recommended: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      experience: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      number: {
        unique: true,
        type: Sequelize.STRING
      },
      email: {
        unique: true,
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING,
        defaultValue: "https://res.cloudinary.com/ryanbuckleyca/image/upload/c_scale,h_150,w_150/v1600109993/user_bgu0at.jpg"
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Devs');
  }
};
