const faker = require('faker')
const words = require('WORDS.json');

let loop;
let i = 1

export const swapWords = function() {
  let id = 1;
  for (var key in words) {
    let firstName = faker.name.firstName()
    let lastName = faker.name.lastName()
    let email = faker.internet.email(firstName, lastName)
    let now = new Date();
    now.setDate(now.getDate() + i * 7);

    const rando = Math.floor(Math.random() * words[key].length)
    document.getElementsByName(key)[0].innerText = words[key][rando];
    document.getElementsByName('fakerName')[0].innerText = `${firstName} ${lastName}`;
    document.getElementsByName('fakerEmail')[0].innerText = email;
    document.getElementsByName('date')[0].innerText = now.toISOString().substring(0, 10);
    document.getElementsByName('time')[0].innerText = (i + 1) + ' weeks';
    id *= (rando+1);
  }
  i++;
  document.getElementsByName('msgID')[0].innerText = id;
  loop = setTimeout(swapWords, 4000);
}

export const stopSwapWords = function() {
  clearTimeout(loop)
}
