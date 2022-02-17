module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Devs', [{
      dev_id: 0,
      name: "Ryan Buckley",
      number: "438-408-6340",
      email: "ryanbuckley@gmail.com",
      recommended: true,
      location: "Montréal, Québéc, Canada",
      experience: 6,
      skills: ['JavaScript', 'React', 'GraphQL', 'Typescript'],
      picture: 'https://avatars.githubusercontent.com/u/48371025?s=400&u=02dd54122579ec71d1ad246da2bffef2b9467945&v=4',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Devs', null, {});
  }
};
