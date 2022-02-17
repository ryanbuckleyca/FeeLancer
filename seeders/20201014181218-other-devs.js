const devs = require('./devs.json')
const skills = ['AngularJS', 'PHP', 'Java', 'NodeJS', 'MySQL', 'Wordpress']

const rand = (max) => Math.floor(Math.random() * max)

const shuffle = (arr) => {
  let i = arr.length;
  while (i != 0) {
    let next = rand(i);
    i--;
    [arr[i], arr[next]] = [arr[next], arr[i]];
  }
  return arr;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let devsArray = []
    devs.forEach((dev, i) => {
      devsArray.push({
        dev_id: i + 1,
        name: dev['name'],
        number: dev['number'],
        email: dev['email'],
        experience: rand(10),
        recommended: false,
        skills: shuffle(skills).slice(0, 1 + rand(3)),
        location: `${dev['city']}, ${dev['state']}, ${dev['country']}`,
        picture: dev['picture'],
        createdAt: new Date(),
        updatedAt: new Date()
      })
    });
    await queryInterface.bulkInsert('Devs', devsArray, {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Devs', null, {});
  }
};
