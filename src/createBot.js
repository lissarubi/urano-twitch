const readlineSync = require('readline-sync');
const write = require('./write');
const { execSync } = require('child_process');

function generateFileContent(botUsername, botPassword, botChannel) {
  return `
  const options = {
  options: {
    debug: true
  },
  connetion: {
    cluster: 'aws',
    reconnect: true
  },
identity: {
    username: '${botUsername}',
    password: '${botPassword}'
  },

  channels: ['${botChannel}']
}

module.exports = options
`;
}

function generateIndex() {
  return `const tmi = require('tmi.js');
const options = require('./options');

const client = new tmi.client(options);

url = options.channels[0];

client.connect();

client.on('connected', (address, port) => {});

client.on('chat', (channel, user, message, self) => {
});`;
}

function generatePackageJSON(botUsername) {
  return `{
  "name": "${botUsername}",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {
    "tmi.js": "^1.5.0"
  },
  "devDependencies": {},
  "scripts": {
    "serve": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}`;
}

function createBot() {
  const botUsername = readlineSync.question('What is the bot username?: ');
  const botPassword = readlineSync.question('Paste the bot token here: ');
  const botChannel = readlineSync.question('What is the channel of the bot?: ');

  const fileContent = generateFileContent(botUsername, botPassword, botChannel);
  const indexCode = generateIndex();
  const packageJSON = generatePackageJSON(botUsername);

  write('index.js', indexCode);
  write('package.json', packageJSON);
  write('options.js', fileContent);
  execSync('mkdir commands');
}

module.exports = createBot;
