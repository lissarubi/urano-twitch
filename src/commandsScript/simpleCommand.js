const readlineSync = require('readline-sync');
const write = require('../write');
const { execSync } = require('child_process');

function generateFileContent(command, result, replyUser) {
  return `function ${command}(message, user, client){
    if (message == '!${command}') {
      client.action(url, \`${
        replyUser === true ? '${user.username}, ' : ''
      }${result}\`);
    }
  }

  module.exports = ${command}`;
}

function simpleCommand() {
  const command = readlineSync.question('What is the command? (without !): ');
  const result = readlineSync.question(
    `What is the result of the ${command}?: `,
  );
  const replyUser = readlineSync.keyInYN(
    `Reply the user in the ${command} message?`,
  );

  const fileContent = generateFileContent(command, result, replyUser);

  write(`commands/${command}.js`, fileContent);

  // edit index.js with the new feature
  execSync(`sed -i '$i ${command}(message, user, client)' index.js`);
  execSync(
    `sed -i "4a const ${command} = require('./commands/${command}')" index.js`,
  );
}

module.exports = simpleCommand;
