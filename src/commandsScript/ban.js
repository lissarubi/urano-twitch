const readlineSync = require('readline-sync');
const write = require('../write');
const { execSync } = require('child_process');

function generateFileContent(
  command,
  probability,
  timeoutTime,
  messageBan,
  messageNotBan,
) {
  return `function ${command}(message, user, client){
      if (message.split(' ')[0] == '!${command}') {
        const banned = message.split(' ')[1]
        const random = Math.random() < ${probability}
      if (random){
        client.timeout(url,banned,${timeoutTime})
        client.action(url, banned + ', ' + '${messageBan}')
  }
    else{
        client.action(url, banned + ', ' + '${messageNotBan}')
    }
  }
}

module.exports = ${command}`;
}

function banCommand() {
  const command = readlineSync.question('What is the command? (without !): ');
  const optionsProbability = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.9];
  const probability = readlineSync.keyInSelect(
    optionsProbability,
    'Which probability?: ',
  );
  const probabilityNumber = optionsProbability[probability];
  const timeoutTime = readlineSync.question(
    'What is the timeout length? (in seconds): ',
  );
  const messageBan = readlineSync.question(
    'What is the message if the ban occurs?: ',
  );
  const messageNotBan = readlineSync.question(
    'What is the message if the ban not occurs?: ',
  );

  const fileContent = generateFileContent(
    command,
    probabilityNumber,
    timeoutTime,
    messageBan,
    messageNotBan,
  );

  write(`commands/${command}.js`, fileContent);

  // edit index.js with the new feature
  execSync(`sed -i '$i ${command}(message, user, client)' index.js`);
  execSync(
    `sed -i "4a const ${command} = require('./commands/${command}')" index.js`,
  );
}

module.exports = banCommand;
