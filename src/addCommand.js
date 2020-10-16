const readlineSync = require('readline-sync')
const simpleCommand = require('./commandsScript/simpleCommand')

function addCommand(){
  const options = ['Simple Command']

  const index = readlineSync.keyInSelect(options, 'What type of command do you want?')

  if (index == 0){
    simpleCommand()
  }
}

module.exports = addCommand
