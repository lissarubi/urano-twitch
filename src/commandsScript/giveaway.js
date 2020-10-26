const readlineSync = require('readline-sync');
const write = require('../write');
const { execSync } = require('child_process');

function generateFileContent(
  startCommand,
  enterGiveaway,
  endCommand,
  giveawayText,
) {
  return `const fs = require('fs');

participants = [];

function giveaway(message, user, client) {
  const streamer = url.replace('#', '')
  if (message == '!${startCommand}' && user.username == streamer) {
    fs.writeFileSync('giveaway.txt', 'true');
  }
  if (message == '!${enterGiveaway}') {
    if (fs.readFileSync('giveaway.txt', 'utf8') == 'true') {
      index = participants.indexOf(user.username);
      if (index == -1) {
        participants.push(user.username);
      }
    }
  }
  if (message == '!${endCommand}' && user.username == streamer) {
    fs.writeFileSync('giveaway.txt', 'false');

    var participant =
      participants[Math.floor(Math.random() * participants.length)];

    client.action(url, participant + ' ${giveawayText}');
  }
}

module.exports = giveaway;`;
}

function giveawayCommand() {
  const startCommand = readlineSync.question(
    'What is the start giveaway command? (without !): ',
  );
  const enterGiveaway = readlineSync.question(
    'What is the enter giveaway command? (without !): ',
  );
  const endCommand = readlineSync.question(
    'What is the end giveaway command? (without !): ',
  );
  const textGiveaway = readlineSync.question(
    'What is the text of giveaway result?: ',
  );

  const fileContent = generateFileContent(
    startCommand,
    enterGiveaway,
    endCommand,
    textGiveaway,
  );

  write(`commands/giveaway.js`, fileContent);

  // edit index.js with the new feature
  execSync(`sed -i '$i giveaway(message, user, client)' index.js`);
  execSync(
    `sed -i "4a const giveaway = require('./commands/giveaway')" index.js`,
  );
}

module.exports = giveawayCommand;
